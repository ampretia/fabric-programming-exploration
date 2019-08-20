
declare module 'fabric-application' {

    export class Service {
        constructor(network, schema)
        evaluateTx(fn: string, ...args): Promise<any> 
        submitTx(fn: string, ...args): Promise<any>
        getInfo(): any
        init(chaincodeId: string, contractName: string): void
     }

    export class ServiceFactory { }

}