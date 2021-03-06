/*
SPDX-License-Identifier: Apache-2.0
*/
/*
 * This application is the basis for using services constructed from the
 * deployed contracts - in this case the CommercialPaper contract
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const services_1 = require("./services");
const fabric_network_1 = require("fabric-network");
// Configuration of the gateway and wallet to use
// These can be easily exported from VSCode IBP Extensions during development
// PUt them into the _cfg directory
const rootDir = path.join(__dirname, '..', '_cfg');
const wallet = new fabric_network_1.FileSystemWallet(path.resolve(rootDir, './local_fabric_wallet'));
const gatewayProfilePath = path.resolve(rootDir, './local_fabric_connection.json');
// Identity label to use
const identityLabel = 'admin';
// Network name (aka channel name)
const networkName = 'mychannel';
// Contracts are deployed within a container
// This is the name of that container  (aka chaincode)
const contractContainerName = 'CPJ';
async function main() {
    let serviceFactory;
    // Main try/catch block
    try {
        // configure the Service Factory with the gateway profile, and our wallet with identity to use
        serviceFactory = await services_1.ServiceFactory.configure(gatewayProfilePath, wallet, identityLabel);
        // Get the service endpoint for handling the commercial paper API
        const cpService = await serviceFactory.getServiceInstance(networkName, contractContainerName, services_1.CommercialPaperEndpoint);
        // issue a commercial paper
        const paper = await cpService.issue('0008', 'magnetocorp', 'now', "now+10days", 20000);
        console.log(paper);
        await cpService.query();
    }
    catch (error) {
        console.log(`Error processing transaction. ${error}`);
        console.log(error.stack);
        throw error;
    }
    finally {
        // Disconnect from the gateway
        console.log('Disconnect from Fabric gateway.');
        serviceFactory.disconnect();
    }
}
// invoke the main function, can catch any error that might escape
main().then(() => {
    console.log('done');
}).catch((e) => {
    process.exit(-1);
});
//# sourceMappingURL=application.js.map