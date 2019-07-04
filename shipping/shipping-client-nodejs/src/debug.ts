/*
SPDX-License-Identifier: Apache-2.0
*/

/**
 * Client application to get the metadata from a deployed Fabric Contract.
 *
 * Good example of the essentials of connecting a client to Fabric, and how to
 * issue a simple transaction. As this is an 'evaluate' transaction (i.e. nothing is
 * committed to the ledger) it is also a useful 'ping' transactions. All chaincode's start
 * on the first transaction that receive - depending on the complexity of the chaincode this
 * start involves installing and starting a docker container.
 *
 * It's best therefore to trigger this a transaction that is itself quick - and also not
 * one that will affect your users' SLA
 *
 * This is designed to run against the local fabric that is started in the VS Code IBP Extension
 *
 *
 * This client application has 6 basic steps:
 * 1. Select an identity from a wallet
 * 2. Connect to network gateway
 * 3. Access the 'mychannel' network
 * 4. Construct request to get the metadata
 * 5. Submit transaction
 * 6. Process response
 */

'use strict';

// Bring key classes into scope, most importantly Fabric SDK network class
import * as fs from 'fs';
import * as jsome from 'jsome';
import * as os from 'os';
import * as path from 'path';
import { URL } from 'url';

import { FileSystemWallet, Gateway } from 'fabric-network';

// A wallet stores a collection of identities for use
const homedir: string = os.homedir();
const walletPath: string = path.join(homedir, '.fabric-vscode', 'local_fabric_wallet');
const wallet: FileSystemWallet = new FileSystemWallet(walletPath);

const networkName: string = 'mychannel';
const contractName: string = 'shipping';

// Connection Profile should be exported first
const connectionProfilePath = path.resolve(__dirname, '../local_fabric/connection.json');

// Some utility functions first - taken from the generated FV tests in VS Code IBP Extensions
// Checks if URL is localhost
function isLocalhostURL(url: string): boolean {
    const parsedURL: URL = new URL(url);
    const localhosts: string[] = [
        'localhost',
        '127.0.0.1',
    ];
    return localhosts.indexOf(parsedURL.hostname) !== -1;
}

// Used for determining whether to use discovery
function hasLocalhostURLs(profile: any): boolean {
    const urls: string[] = [];
    for (const nodeType of ['orderers', 'peers', 'certificateAuthorities']) {
        if (!profile[nodeType]) {
            continue;
        }
        const nodes: any = profile[nodeType];
        for (const nodeName in nodes) {
            if (!nodes[nodeName].url) {
                continue;
            }
            urls.push(nodes[nodeName].url);
        }
    }
    return urls.some((url: string) => isLocalhostURL(url));
}

// main function
async function main() {

    // A gateway defines the peers used to access Fabric networks
    const gateway: Gateway = new Gateway();

    // Main try/catch block
    try {

        // define the identity to use
        const identityLabel = 'admin';

        // Load connection profile; will be used to locate a gateway
        const connectionProfile = JSON.parse(fs.readFileSync(connectionProfilePath, 'utf8'));
        const discoveryAsLocalhost: boolean = hasLocalhostURLs(connectionProfile);
        const discoveryEnabled: boolean = true;
        // Set connection options; use 'admin' identity from application wallet
        const connectionOptions = {
            discovery: {
                asLocalhost: discoveryAsLocalhost,
                enabled: discoveryEnabled,
            },
            identity: identityLabel,
            wallet,
        };

        // Connect to gateway using application specified parameters
        await gateway.connect(connectionProfile, connectionOptions);
        console.log('Connected to Fabric gateway.');

        // Get addressability to PaperNet network
        const network = await gateway.getNetwork(networkName);
        console.log(`Connected to the Fabric Network: ${networkName} `);

        // Get addressability to commercial paper contract
        const contract = await network.getContract(contractName);

        // get the transactions
        const tracing = await contract.createTransaction('tracing');

        const metadata = JSON.parse((await tracing.submit()).toString());

        jsome(metadata);

    } catch (error) {
        console.log(`Error processing transaction. ${error}`);
        console.log(error.stack);
    } finally {
        // Disconnect from the gateway
        console.log('Disconnect from Fabric gateway.');
        gateway.disconnect();
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
