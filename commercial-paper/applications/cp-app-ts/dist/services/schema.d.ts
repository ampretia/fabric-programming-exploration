import 'reflect-metadata';
import '../adt';
export default class Schema {
    private data;
    constructor(schema: any);
    getSchema(): any;
    getParameterSchema(contractName: string, fnName: string): any;
    getTxReturnSchema(contractName: string, fnName: string): {
        properties: {
            prop: any;
        };
        components: {
            schemas: any;
        };
    };
}
