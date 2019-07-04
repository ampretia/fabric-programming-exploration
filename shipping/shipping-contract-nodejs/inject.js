const bootstrap = require('./node_modules/fabric-shim/lib/contract-spi/bootstrap.js');
const fs = require('fs')
const sinon = require('sinon');

const certWithoutAttrs = '-----BEGIN CERTIFICATE-----' +
	'MIICXTCCAgSgAwIBAgIUeLy6uQnq8wwyElU/jCKRYz3tJiQwCgYIKoZIzj0EAwIw' +
	'eTELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNh' +
	'biBGcmFuY2lzY28xGTAXBgNVBAoTEEludGVybmV0IFdpZGdldHMxDDAKBgNVBAsT' +
	'A1dXVzEUMBIGA1UEAxMLZXhhbXBsZS5jb20wHhcNMTcwOTA4MDAxNTAwWhcNMTgw' +
	'OTA4MDAxNTAwWjBdMQswCQYDVQQGEwJVUzEXMBUGA1UECBMOTm9ydGggQ2Fyb2xp' +
	'bmExFDASBgNVBAoTC0h5cGVybGVkZ2VyMQ8wDQYDVQQLEwZGYWJyaWMxDjAMBgNV' +
	'BAMTBWFkbWluMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEFq/90YMuH4tWugHa' +
	'oyZtt4Mbwgv6CkBSDfYulVO1CVInw1i/k16DocQ/KSDTeTfgJxrX1Ree1tjpaodG' +
	'1wWyM6OBhTCBgjAOBgNVHQ8BAf8EBAMCB4AwDAYDVR0TAQH/BAIwADAdBgNVHQ4E' +
	'FgQUhKs/VJ9IWJd+wer6sgsgtZmxZNwwHwYDVR0jBBgwFoAUIUd4i/sLTwYWvpVr' +
	'TApzcT8zv/kwIgYDVR0RBBswGYIXQW5pbHMtTWFjQm9vay1Qcm8ubG9jYWwwCgYI' +
	'KoZIzj0EAwIDRwAwRAIgCoXaCdU8ZiRKkai0QiXJM/GL5fysLnmG2oZ6XOIdwtsC' +
	'IEmCsI8Mhrvx1doTbEOm7kmIrhQwUVDBNXCWX1t3kJVN' +
	'-----END CERTIFICATE-----';

const idBytes = {
	toBuffer: () => {
		return new Buffer(certWithoutAttrs);
	}
};

const mockSigningId = {
	getMspid: sinon.stub(),
	getIdBytes: sinon.stub().returns(idBytes)
};

const ctx = {
	setChaincodeStub: sinon.stub(),
	setClientIdentity: sinon.stub()
};


function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}
const main = async () => {
	let contract = await bootstrap.injectTest();
	console.log('..................................')
	console.log('ready to contract')
	const args = JSON.parse(fs.readFileSync('args.json'));
	const newargs = args.map(
		(x) => { return Buffer.from(JSON.stringify(x)) }
	);
	newargs[0]=Buffer.from("requestShipment");
	const mockStub = {
		getBufferArgs: () => { return newargs; },
		getCreator: sinon.stub().returns(mockSigningId),
		getTxID: () => {
			return 'a tx id';
		},
		getChannelID: () => {
			return 'a channel id';
		},
		getFunctionAndParameters: () =>{
			return newargs; 
		}
	};
	console.log('invoking')
	await contract.Invoke(mockStub);
	console.log('DONE')
}

main().then(() => {
	sleep(50000);
}).catch((e) => {
	console.log(e)
	console.log(e.stack);
})

