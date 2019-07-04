import { Gateway } from 'fabric-network';
import * as fs from 'fs';
import { URL } from 'url';
import Schema from './schema';

import * as jsome from 'jsome';

export default class ServiceFactory {
   

    public static async configure(gatewayProfilePath, wallet, identity): Promise<ServiceFactory> {
        const gateway = new Gateway();

        // Load connection profile
        const gatewayprofile = JSON.parse(fs.readFileSync(gatewayProfilePath, 'utf8'));
        const connectionOptions = {
            discovery: {
                asLocalhost: ServiceFactory.hasLocalhostURLs(gatewayprofile),
                enabled: true,
            },
            identity,
            wallet,
        };
        // Connect to gateway using application specified parameters
        await gateway.connect(gatewayprofile, connectionOptions);

        return new ServiceFactory(gateway);
    }

    // Checks if URL is localhost
    private static isLocalhostURL(url: string): boolean {
        const parsedURL: URL = new URL(url);
        const localhosts: string[] = [
            'localhost',
            '127.0.0.1',
        ];
        return localhosts.indexOf(parsedURL.hostname) !== -1;
    }

    // Used for determining whether to use discovery
    private static hasLocalhostURLs(profile: any): boolean {
        const urls: string[] = [];
        for (const nodeType of ['orderers', 'peers', 'certificateAuthorities']) {
            if (!profile[nodeType]) {
                continue;
            }
            const nodes: any = profile[nodeType];
            for (const nodeName in nodes) {
                if (!nodes[nodeName].url) {
                    continue;
                }
                urls.push(nodes[nodeName].url);
            }
        }
        return urls.some((url: string) => this.isLocalhostURL(url));
    }

    private gateway: Gateway;
    private schema: Schema;
    public constructor(gateway: Gateway) {
        this.gateway = gateway;
    }

    public async _getServiceInstance<T>(networkName: string, name: string, x): Promise<T> {

        const network = await this.gateway.getNetwork(networkName);
        const instance = new (x.prototype.constructor)(network);
        await instance.init(name);
        return instance as T;

    }
    public async getServiceInstance<T>(networkName: string, contractName: string, service): Promise<T> {
        const network = await this.gateway.getNetwork(networkName);

        // Get addressability to commercial paper contract
        const contract = await network.getContract(contractName, 'org.hyperledger.fabric');

        // get the transactions
        const getMetadata = await contract.createTransaction('GetMetadata');
        const metadata = JSON.parse((await getMetadata.evaluate()).toString());
        this.schema = new Schema(metadata);
        jsome(this.schema);

        const api = new (service.prototype.constructor)(network, this.schema);
        await api.init(contractName,'CommercialPaperContract');

        return api;
    }
    public disconnect() {
        this.gateway.disconnect();
    }
}
