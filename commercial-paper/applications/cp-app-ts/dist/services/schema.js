"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonDiff = require("json-diff");
require("reflect-metadata");
require("../adt");
class Schema {
    constructor(schema) {
        this.data = schema;
        // this.data.components.schemas = Reflect.getMetadata('fabric:objects', global);
        const localSchemas = Reflect.getMetadata('fabric:objects', global);
        console.log('Local Schema for components is .....');
        console.log(localSchemas);
        console.log(jsonDiff.diffString(localSchemas, this.data.components.schemas));
        // Assume that the datamodel is the same
        this.data.components.schemas = localSchemas;
    }
    getSchema() {
        return this.data;
    }
    getParameterSchema(contractName, fnName) {
        const txFn = this.data.contracts[contractName].transactions.find((e) => e.name === fnName);
        return txFn.parameters;
    }
    getTxReturnSchema(contractName, fnName) {
        const txFn = this.data.contracts[contractName].transactions.find((e) => e.name === fnName);
        console.log(txFn);
        if (txFn.returns) {
            const s = {
                properties: {
                    prop: txFn.returns,
                },
                // tslint:disable-next-line:object-literal-sort-keys
                components: {
                    schemas: this.data.components.schemas,
                },
            };
            return s;
        }
        else {
            return null;
        }
    }
}
exports.default = Schema;
//# sourceMappingURL=schema.js.map