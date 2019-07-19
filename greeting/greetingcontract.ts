/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Info, Returns, Transaction } from 'fabric-contract-api';
import * as util from 'util';
import SmartContract from '../smartcontract';
import Greeting from './greeting';
import GreetingContext from './greetingcontext';
import { StateList } from '..';

@Info({ title: 'GreetingContract', description: 'The description' })
export class GreetingContract extends SmartContract {

    public constructor() {
        super('Greeting');
    }

    @Transaction()
    public async setupLedger(ctx: GreetingContext): Promise<any> {

        const hello = new Greeting('Hello');
        await ctx.$greetings.addState(hello);

        const log = ctx.logging.getLogger();
        log.info('Set the default greeting');
    }

    @Transaction()
    @Returns('Greeting')
    public async setGreetingText(ctx: GreetingContext, id: string, text: string): Promise<Greeting> {
        const log = ctx.logging.getLogger();

        log.info('setGreetingText');
        const greeting: Greeting = new Greeting(id, text);

        await ctx.$greetings.updateState(greeting);
        log.info('put the greeting to the ledger');

        return greeting;
    }

    @Transaction()
    @Returns('string')
    public async getGreetingText(ctx: GreetingContext, id: string): Promise<string> {
        const log = ctx.logging.getLogger();
        log.info('getGreeting');

        const greeting: Greeting = await ctx.$greetings.getState(id);
        log.info(`getGreeting of ${greeting.getText()}`);
        return greeting.getText();
    }

    @Transaction()
    @Returns('string')
    public async paragraph(ctx: GreetingContext): Promise<string> {
        const log = ctx.logging.getLogger();
        log.info('>>>>  About to issue the setGreeting function........');
        // get the greeting
        const res = await ctx.stub.invokeChaincode('helloneta', ['setGreetingText', 'Dear Sidney'], 'mychannel');
        log.info('>>>>  Returned.....  ........');
        const text = `${res} Sorry for not putting beak to paper sooner. `;
        return text;
    }
}
