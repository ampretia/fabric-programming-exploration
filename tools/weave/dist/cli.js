#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/*
* SPDX-License-Identifier: Apache-2.0
*/
const debug_1 = require("debug");
const yargs = require("yargs");
const conversionfactory_1 = require("./conversionfactory");
const resourcefactory_1 = require("./resourcefactory");
const LOG = debug_1.default('resourcefactory:cli');
const results = yargs
    .command(['create', '$0'], 'Create resources', {
    localfile: {
        alias: 'f',
        default: 'metadata.json',
        demandOption: true,
        describe: 'Name of the metadata file to load',
        requiresArg: true,
    },
    outputdir: {
        alias: 'o',
        default: 'out',
        demandOption: true,
        describe: 'Directory files to be written to (will be created if does not exist)',
        requiresArg: true,
    },
    templateName: {
        alias: 'n',
        default: 'singlepagesummary',
        demandOption: true,
        describe: 'The name of the template to process, [singlepagesummary, client_ts]',
    },
})
    .command('convert', 'convert model representations', {
    conversion: {
        alias: 'c',
        default: 'cto-metadata',
        demandOption: false,
        describe: 'The conversion to do, cto-metadata default',
    },
    input: {
        alias: 'i',
        demandOption: true,
        describe: 'Name of the model file to load',
        requiresArg: true,
    },
    outputdir: {
        alias: 'o',
        default: 'out',
        demandOption: false,
        describe: 'Directory files to be written to (will be created if does not exist)',
        requiresArg: true,
    },
})
    .help()
    .wrap(null)
    .alias('v', 'version')
    .version('pre-alpha')
    .describe('v', 'show version information')
    .strict()
    .argv;
// setup the config here..
let config;
let factory;
try {
    if (results._.includes('convert')) {
        config = {
            input: results.input,
            output: results.outputdir,
            task: results.conversion,
        };
        factory = new conversionfactory_1.default(config);
    }
    else {
        config = {
            input: results.localfile,
            output: results.outputdir,
            task: results.templateName,
        };
        factory = new resourcefactory_1.default(config);
    }
}
catch (err) {
    LOG(err.message);
    process.exit(-1);
}
LOG(`Using configuration ${JSON.stringify(config)}`);
factory.start().then(() => {
    console.log('Done');
}).catch((err) => {
    LOG(err.message);
    process.exit(-1);
});
//# sourceMappingURL=cli.js.map