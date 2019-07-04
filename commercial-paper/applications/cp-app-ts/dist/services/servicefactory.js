"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fabric_network_1 = require("fabric-network");
const fs = require("fs");
const url_1 = require("url");
const schema_1 = require("./schema");
const jsome = require("jsome");
class ServiceFactory {
    static async configure(gatewayProfilePath, wallet, identity) {
        const gateway = new fabric_network_1.Gateway();
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
    static isLocalhostURL(url) {
        const parsedURL = new url_1.URL(url);
        const localhosts = [
            'localhost',
            '127.0.0.1',
        ];
        return localhosts.indexOf(parsedURL.hostname) !== -1;
    }
    // Used for determining whether to use discovery
    static hasLocalhostURLs(profile) {
        const urls = [];
        for (const nodeType of ['orderers', 'peers', 'certificateAuthorities']) {
            if (!profile[nodeType]) {
                continue;
            }
            const nodes = profile[nodeType];
            for (const nodeName in nodes) {
                if (!nodes[nodeName].url) {
                    continue;
                }
                urls.push(nodes[nodeName].url);
            }
        }
        return urls.some((url) => this.isLocalhostURL(url));
    }
    constructor(gateway) {
        this.gateway = gateway;
    }
    async _getServiceInstance(networkName, name, x) {
        const network = await this.gateway.getNetwork(networkName);
        const instance = new (x.prototype.constructor)(network);
        await instance.init(name);
        return instance;
    }
    async getServiceInstance(networkName, contractName, service) {
        const network = await this.gateway.getNetwork(networkName);
        // Get addressability to commercial paper contract
        const contract = await network.getContract(contractName, 'org.hyperledger.fabric');
        // get the transactions
        const getMetadata = await contract.createTransaction('GetMetadata');
        const metadata = JSON.parse((await getMetadata.evaluate()).toString());
        this.schema = new schema_1.default(metadata);
        jsome(this.schema);
        const api = new (service.prototype.constructor)(network, this.schema);
        await api.init(contractName, 'CommercialPaperContract');
        return api;
    }
    disconnect() {
        this.gateway.disconnect();
    }
}
exports.default = ServiceFactory;
//# sourceMappingURL=servicefactory.js.map