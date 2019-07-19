import * as jsonDiff from 'json-diff';
import 'reflect-metadata';
import '../adt';

export default class Schema {

    private data: any;

    public constructor(schema) {
        this.data = schema;

        // this.data.components.schemas = Reflect.getMetadata('fabric:objects', global);
        const localSchemas = Reflect.getMetadata('fabric:objects', global);
        console.log('Local Schema for components is .....');
        console.log(localSchemas);

        console.log(jsonDiff.diffString(localSchemas, this.data.components.schemas));

        // Assume that the datamodel is the same
        this.data.components.schemas = localSchemas;
    }

    public getSchema() {
        return this.data;
    }

    public getParameterSchema(contractName: string, fnName: string) {
        const txFn = this.data.contracts[contractName].transactions.find((e) => e.name === fnName);
        return txFn.parameters;
    }

    public getTxReturnSchema(contractName: string, fnName: string) {

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
        } else {
            return null;
        }

    }
}
