import { JSONSerializer } from 'fabric-contract-api';
import { Contract, Network } from 'fabric-network';
import * as jsome from 'jsome';
import Schema from './schema';


export default class Service {
    protected contract: Contract;

    private schema: any;
    private network: Network;
    private jsonSerializer: any;
    private contractName: string;

    public constructor(network, schema) {
        this.network = network;
        this.schema = schema;

        this.jsonSerializer = new JSONSerializer();
    }

    public async init(chaincodeId: string, contractName: string) {
        this.contractName = contractName;
        this.contract = await this.network.getContract(chaincodeId, contractName);
    }

    public getInfo(): any {
        return this.schema.data.info;
    }

    protected async evaluateTx(fn: string, ...args): Promise<any> {
        return this.sendTx('evaluate', fn, ...args);
    }

    protected async submitTx(fn: string, ...args): Promise<any> {
        return this.sendTx('submit', fn, ...args);
    }

    private async sendTx(action, fn: string, ...args): Promise<any> {

        const tx = await this.contract.createTransaction(fn);

        const argsToSend = [];
        const params = this.schema.getParameterSchema(this.contractName, fn);
        for (let i = 0; i < params.length; i++) {
            argsToSend.push(this.jsonSerializer.toBuffer(args[i], params[i]).toString('utf8'));
        }
        const recv = await tx[action](...argsToSend);
        const expectedSchema = this.schema.getTxReturnSchema(this.contractName, fn);
        if (expectedSchema !== null) {
            const { value } = this.jsonSerializer.fromBuffer(recv, expectedSchema, 'client');
            return value;
        }
        return recv.toString();
    }

}
