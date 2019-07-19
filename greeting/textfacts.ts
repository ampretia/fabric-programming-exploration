
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

@DataType()
export default class TextFacts {

    @Property('length')
    private textLength: number;

    @Property('wordcount')
    private wordCount: number;

    /**
     * Getter $wordCount
     * @return {number}
     */
    public get $wordCount(): number {
        return this.wordCount;
    }

    /**
     * Setter $wordCount
     * @param {number} value
     */
    public set $wordCount(value: number) {
        this.wordCount = value;
    }

    /**
     * Getter $textLength
     * @return {number}
     */
    public get $textLength(): number {
        return this.textLength;
    }

    /**
     * Setter $textLength
     * @param {number} value
     */
    public set $textLength(value: number) {
        this.textLength = value;
    }
}
