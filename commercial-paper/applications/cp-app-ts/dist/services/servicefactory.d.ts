import { Gateway } from 'fabric-network';
export default class ServiceFactory {
    static configure(gatewayProfilePath: any, wallet: any, identity: any): Promise<ServiceFactory>;
    private static isLocalhostURL;
    private static hasLocalhostURLs;
    private gateway;
    private schema;
    constructor(gateway: Gateway);
    _getServiceInstance<T>(networkName: string, name: string, x: any): Promise<T>;
    getServiceInstance<T>(networkName: string, contractName: string, service: any): Promise<T>;
    disconnect(): void;
}
