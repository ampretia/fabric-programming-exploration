/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { FileSystemWallet, Gateway, X509WalletMixin } = require('fabric-network');
const fs = require('fs');
const path = require('path');

const ccpPath = path.resolve(__dirname, '.', 'local_fabric', 'connection.json');


const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
const ccp = JSON.parse(ccpJSON);

async function main() {
    try {
        //const walletPath  = path.resolve('/home/matthew/.fabric-vscode/local_fabric-ops/wallet');
        // const wadminWallet = new FileSystemWallet(adminWalletPath)
        // Create a new file system based wallet for managing identities.
        const walletPath = path.resolve(__dirname,'.','local_fabric','wallet');
        //path.join(process.cwd(),'local_fabric', 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user3');
        if (userExists) {
            console.log('An identity for the user "user2" already exists in the wallet');
            return;
        }

        // Check to see if we've already enrolled the admin user.
        const adminExists = await wallet.exists('Admin@org1.example.com');
        if (!adminExists) {
            console.log('An identity for the admin user "admin" does not exist in the wallet');
            console.log('Run the enrollAdmin.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        console.log('gateway connect');
        await gateway.connect(ccp, { wallet, identity: 'Admin@org1.example.com', discovery: { enabled: false } });

        console.log('get ca');
        // Get the CA client object from the gateway for interacting with the CA.
        const ca = gateway.getClient().getCertificateAuthority();

        console.log('get current identity');
        const adminIdentity = gateway.getCurrentIdentity();

        console.log('ca register');
        // Register the user, enroll the user, and import the new identity into the wallet.
        const secret = await ca.register({ affiliation: 'org1.department1', enrollmentID: 'user4', role: 'client' }, adminIdentity);

        console.log('enroll');
        const enrollment = await ca.enroll({ enrollmentID: 'user4', enrollmentSecret: secret });
        console.log('create identity');
        const userIdentity = X509WalletMixin.createIdentity('Org1MSP', enrollment.certificate, enrollment.key.toBytes());
        console.log('wallet import identity');
        wallet.import('user4', userIdentity);
        console.log('Successfully registered and enrolled admin user "user1" and imported it into the wallet');

    } catch (error) {
        console.error(`Failed to register user "user1": ${error}`);
        console.error(error.stack)
        process.exit(1);
    }
}

main();
