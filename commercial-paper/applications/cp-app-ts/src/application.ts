/*
SPDX-License-Identifier: Apache-2.0
*/

/*
 * This application is the basis for using services constructed from the
 * deployed contracts - in this case the CommercialPaper contract
 * 
 */

'use strict';

import * as path from 'path';

import { CommercialPaperEndpoint } from './services.impl';
import { FileSystemWallet } from 'fabric-network';

// The ADTs for the domain this example uses, namely commercial paper
import CommercialPaper from './adt/paper';

// Configuration of the gateway and wallet to use
// These can be easily exported from VSCode IBP Extensions during development
// PUt them into the _cfg directory
const rootDir = path.join(__dirname, '..', '_cfg');
const wallet = new FileSystemWallet(path.resolve(rootDir, './local_fabric_wallet'));
const gatewayProfilePath = path.resolve(rootDir, './local_fabric_connection.json');

// Identity label to use
const identityLabel = 'admin';

// Network name (aka channel name)
const networkName: string = 'mychannel';

// Contracts are deployed within a container
// This is the name of that container  (aka chaincode)
const contractContainerName: string = 'CPJ';

async function main() {
    let serviceFactory: ServiceFactory;

    // Main try/catch block
    try {

        // configure the Service Factory with the gateway profile, and our wallet with identity to use
        serviceFactory = await ServiceFactory.configure(gatewayProfilePath, wallet, identityLabel);

        // Get the service endpoint for handling the commercial paper API
        const cpService: CommercialPaperEndpoint =
            await serviceFactory.getServiceInstance<CommercialPaperEndpoint>(networkName, contractContainerName, CommercialPaperEndpoint);

        // issue a commercial paper
        const paper: CommercialPaper = await cpService.issue('0008','magnetocorp','now',"now+10days",20000);
        console.log(paper);
        await cpService.query();
        

    } catch (error) {
        console.log(`Error processing transaction. ${error}`);
        console.log(error.stack);
        throw error;
    } finally {
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
