/*
SPDX-License-Identifier: Apache-2.0
*/
'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const fabric_contract_api_1 = require("fabric-contract-api");
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
let State = class State {
    /**
     * @param {String|Object} type  An indentifiable type of the instance
     * @param {keyParts[]} elements name of the properties that form the primary key lements.. in order
     */
    constructor(type, keyParts, obj = {}) {
        this.type = type;
        this.keyParts = keyParts;
        Object.assign(this, obj);
    }
    static splitKey(key) {
        return key.split(':');
    }
    getType() {
        return this.type;
    }
    // Get the values of the key for the state in order
    getSplitKey() {
        const keys = [];
        this.keyParts.forEach((element) => {
            keys.push(this[element]);
        });
        return keys;
    }
};
State = __decorate([
    fabric_contract_api_1.Object(),
    __metadata("design:paramtypes", [String, Array, Object])
], State);
exports.default = State;
//# sourceMappingURL=state.js.map