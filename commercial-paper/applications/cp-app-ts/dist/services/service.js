"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fabric_contract_api_1 = require("fabric-contract-api");
class Service {
    constructor(network, schema) {
        this.network = network;
        this.schema = schema;
        this.jsonSerializer = new fabric_contract_api_1.JSONSerializer();
    }
    async init(chaincodeId, contractName) {
        this.contractName = contractName;
        this.contract = await this.network.getContract(chaincodeId, contractName);
    }
    getInfo() {
        return this.schema.data.info;
    }
    async evaluateTx(fn, ...args) {
        return this.sendTx('evaluate', fn, ...args);
    }
    async submitTx(fn, ...args) {
        return this.sendTx('submit', fn, ...args);
    }
    async sendTx(action, fn, ...args) {
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
exports.default = Service;
//# sourceMappingURL=service.js.map