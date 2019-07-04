
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

import { Object as DataType, Property } from 'fabric-contract-api';
import { State } from '..';
import TextFacts from './textfacts';

@DataType()
export default class Greeting extends State {

    @Property('text')
    private text: string;

    @Property('textfacts')
    private facts: TextFacts;

    @Property('friendlyness')
    private friendlyness: number;

    /**
     * Getter $friendlyness
     * @return {number}
     */
    public get $friendlyness(): number {
        return this.friendlyness;
    }

    /**
     * Setter $friendlyness
     * @param {number} value
     */
    public set $friendlyness(value: number) {
        this.friendlyness = value;
    }

    /**
     * Getter $facts
     * @return {TextFacts}
     */
    public get $facts(): TextFacts {
        return this.facts;
    }

    /**
     * Setter $facts
     * @param {TextFacts} value
     */
    public set $facts(value: TextFacts) {
        this.facts = value;
    }

    constructor() {
        super('Greeting', ['id']);
        // this.text = text;
        // this.facts = new TextFacts();
        // this.facts.$textLength = text.length;
        // this.facts.$wordCount = text.split(' ').length;
    }

    /**
     * Getter $text
     * @return {string}
     */
    public get $text(): string {
        return this.text;
    }

    /**
     * Setter $text
     * @param {string} value
     */
    public set $text(value: string) {
        this.text = value;
    }

}
