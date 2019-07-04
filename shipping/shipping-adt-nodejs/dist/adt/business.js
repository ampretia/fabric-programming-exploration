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
var Business_1;
Object.defineProperty(exports, "__esModule", { value: true });
const fabric_contract_api_1 = require("fabric-contract-api");
const fabric_data_1 = require("fabric-data");
let Business = Business_1 = class Business extends fabric_data_1.State {
    constructor() {
        // includes what the type of the primary key is
        super('Business', ['name']);
    }
    static new(name) {
        const s = new Business_1();
        s.$name = name;
        return s;
    }
    /**
     * Getter $name
     * @return {string}
     */
    get $name() {
        return this.name;
    }
    /**
     * Setter $name
     * @param {string} value
     */
    set $name(value) {
        this.name = value;
    }
    /**
     * Getter $address
     * @return {string}
     */
    get $address() {
        return this.address;
    }
    /**
     * Setter $address
     * @param {string} value
     */
    set $address(value) {
        this.address = value;
    }
    /**
     * Getter $phone
     * @return {string}
     */
    get $phone() {
        return this.phone;
    }
    /**
     * Setter $phone
     * @param {string} value
     */
    set $phone(value) {
        this.phone = value;
    }
    /**
     * Getter $description
     * @return {string}
     */
    get $description() {
        return this.description;
    }
    /**
     * Setter $description
     * @param {string} value
     */
    set $description(value) {
        this.description = value;
    }
};
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", String)
], Business.prototype, "name", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", String)
], Business.prototype, "address", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", String)
], Business.prototype, "phone", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", String)
], Business.prototype, "description", void 0);
Business = Business_1 = __decorate([
    fabric_contract_api_1.Object(),
    __metadata("design:paramtypes", [])
], Business);
exports.Business = Business;
//# sourceMappingURL=business.js.map