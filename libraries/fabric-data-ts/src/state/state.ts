
/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

import { Object as DataType } from 'fabric-contract-api';

/**
 * State class. States have a type, unique key, and a lifecycle current state
 * the current state is determined by the specific subclass.
 *
 * The underlying key is important as it indexes more than for example a single person.
 * Also the key is important as it at the key level that 'state based endorsement' takes
 * place.
 *
 *
 * [collection]:[type]:[model]:[generation]:[pk_1]:[pk_2]:...:[pk_n]
 */
@DataType()
export default class State {

    public static splitKey(key) {
        return key.split(':');
    }

    private type: string;
    private keyParts: string[];
    /**
     * @param {String|Object} type  An indentifiable type of the instance
     * @param {keyParts[]} elements name of the properties that form the primary key lements.. in order
     */
    constructor(type: string, keyParts: string[], obj: any = {}) {
        this.type = type;
        this.keyParts = keyParts;
        (Object as any).assign(this, obj);
    }

    public getType() {
        return this.type;
    }

    // Get the values of the key for the state in order
    public getSplitKey(): any[] {
        const keys = [];
        this.keyParts.forEach((element) => {
            keys.push(this[element]);
        });
        return keys;
    }

}
