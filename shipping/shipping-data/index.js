/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const fs = require('fs');
const path = require('path')
const jsome = require('jsome')
const ModelManager = require('composer-concerto').ModelManager;
const FileWriter = require('composer-concerto').FileWriter;
const CodeGen = require('composer-concerto-tools').CodeGen;

const MetadataVisitor = require('./visitor.js')

/**
   * Converts the model for a template into code
   *
   * @param {string} format the format to generate
   * @param {string[]} ctoFiles the CTO files to convert to code
   * @param {string} outputDirectory the output directory
   * @returns {string} Result of code generation
   */
let generate = async (format, ctoFiles, outputDirectory) => {

    const modelManager = new ModelManager();

    const modelFiles = ctoFiles.map((ctoFile) => {
        return fs.readFileSync(ctoFile, 'utf8');
    });
    modelManager.addModelFiles(modelFiles, ctoFiles, true);
    await modelManager.updateExternalModels();

    let visitor = new MetadataVisitor();

    let parameters = {};
    parameters.fileWriter = new FileWriter(outputDirectory);
    let data = modelManager.accept(visitor, parameters);
    fs.writeFileSync(path.join(outputDirectory, 'metadata.json'), JSON.stringify(data));
    jsome(data)
    return `Generated ${format} code.`;
}

const main = async () => {
    let input = path.resolve(__dirname, 'shipping.cto');
    let metadata = path.resolve(__dirname, 'metadata');
    await generate('ContractMetadata', [input], metadata);
}


main().then(
    () => {
        console.log('==== done');
    }
).catch(e => { console.log(e); process.exit(-1) });