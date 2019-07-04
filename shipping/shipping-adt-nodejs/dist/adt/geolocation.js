"use strict";
/*
 * SPDX-License-Identifier: Apache-2.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Geolocation_1;
Object.defineProperty(exports, "__esModule", { value: true });
const fabric_contract_api_1 = require("fabric-contract-api");
const fabric_data_1 = require("fabric-data");
let Geolocation = Geolocation_1 = class Geolocation extends fabric_data_1.State {
    constructor() {
        // includes what the type of the primary key is
        super('Geolocation', []);
    }
    /**
     * Getter $latitiude
     * @return {number}
     */
    get $latitiude() {
        return this.latitiude;
    }
    /**
     * Setter $latitiude
     * @param {number} value
     */
    set $latitiude(value) {
        this.latitiude = value;
    }
    /**
     * Getter $longtitude
     * @return {number}
     */
    get $longtitude() {
        return this.longtitude;
    }
    /**
     * Setter $longtitude
     * @param {number} value
     */
    set $longtitude(value) {
        this.longtitude = value;
    }
    static new() {
        const s = new Geolocation_1();
        return s;
    }
};
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", Number)
], Geolocation.prototype, "latitiude", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", Number)
], Geolocation.prototype, "longtitude", void 0);
Geolocation = Geolocation_1 = __decorate([
    fabric_contract_api_1.Object(),
    __metadata("design:paramtypes", [])
], Geolocation);
exports.Geolocation = Geolocation;
//# sourceMappingURL=geolocation.js.map