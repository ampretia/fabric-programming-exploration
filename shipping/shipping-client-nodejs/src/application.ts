/*
SPDX-License-Identifier: Apache-2.0
*/

/*
 * This application has 6 basic steps:
 * 1. Select an identity from a wallet
 * 2. Connect to network gateway
 * 3. Access PaperNet network
 * 4. Construct request to issue commercial paper
 * 5. Submit transaction
 * 6. Process response
 */

'use strict';

// Bring key classes into scope, most importantly Fabric SDK network class
import { FileSystemWallet, Gateway } from 'fabric-network';
import * as jsome from 'jsome';
import * as os from 'os';
import * as path from 'path';
import { Asset, Business, Shipment } from 'shipping-adt';
import * as uuid from 'uuid';
import { ServiceFactory } from './services';
import ProducerEndpoint from './services-impl/producerendpoint.impl';

// A wallet stores a collection of identities for use
const homedir: string = os.homedir();
const walletPath: string = path.join(homedir, '.fabric-vscode', 'local_fabric_wallet');
const wallet: FileSystemWallet = new FileSystemWallet(walletPath);
// define the identity to use
const identity = 'admin';

// Connection Profile should be exported first
const connectionProfilePath = path.resolve(homedir, '.fabric-vscode/runtime/gateways/local_fabric.json');

const networkName: string = 'mychannel';
const contractName: string = 'shipping';

async function main() {
    let serviceFactory: ServiceFactory;
    // Main try/catch block
    try {

        serviceFactory = await ServiceFactory.configure(connectionProfilePath, wallet, identity);
        const producerService: ProducerEndpoint =
            await serviceFactory.getServiceInstance<ProducerEndpoint>(networkName, contractName, ProducerEndpoint);

        console.log('Got producer service');

        const anAsset: Asset = Asset.new(uuid.v4());
        anAsset.$description = 'Very valuable';

        const aBusiness: Business = Business.new('Acme inc');
        aBusiness.$address = '32 Bedrook Street';

        console.log('Sending shipment request');
        const shipmentId: string = await producerService.requestShipment(anAsset, aBusiness);
        console.log(`Shipment id is ${shipmentId}`);

        // query the shipment back
        const shipment: Shipment = await producerService.queryShipment(shipmentId);
        console.log(shipment.toString());
        console.log(jsome.getColoredString(shipment));

    } catch (error) {
        console.log(`Error processing transaction. ${error}`);
        console.log(error.stack);
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
    console.log('Final error checking.......');
    console.log(e);
    console.log(e.stack);
    process.exit(-1);
});
