import { Contract } from 'fabric-network';
export default class Service {
    protected contract: Contract;
    private schema;
    private network;
    private jsonSerializer;
    private contractName;
    constructor(network: any, schema: any);
    init(chaincodeId: string, contractName: string): Promise<void>;
    getInfo(): any;
    protected evaluateTx(fn: string, ...args: any[]): Promise<any>;
    protected submitTx(fn: string, ...args: any[]): Promise<any>;
    private sendTx;
}
