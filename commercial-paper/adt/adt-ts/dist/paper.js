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
const fabric_data_1 = require("fabric-data");
// Utility class for ledger state
// // Enumerate commercial paper state values
// const cpState = {
//     ISSUED: 1,
//     TRADING: 2,
//     REDEEMED: 3
// };
/**
 * CommercialPaper class extends State class
 * Class will be used by application and smart contract to define a paper
 */
let CommercialPaper = class CommercialPaper extends fabric_data_1.State {
    constructor(obj) {
        super();
        Object.assign(this, obj);
    }
    /**
     * Getter $issuer
     * @return {string}
     */
    get $issuer() {
        return this.issuer;
    }
    /**
     * Setter $issuer
     * @param {string} value
     */
    set $issuer(value) {
        this.issuer = value;
    }
    /**
     * Getter $paperId
     * @return {string}
     */
    get $paperId() {
        return this.paperId;
    }
    /**
     * Setter $paperId
     * @param {string} value
     */
    set $paperId(value) {
        this.paperId = value;
    }
    /**
     * Getter $issueDateTime
     * @return {string}
     */
    get $issueDateTime() {
        return this.issueDateTime;
    }
    /**
     * Setter $issueDateTime
     * @param {string} value
     */
    set $issueDateTime(value) {
        this.issueDateTime = value;
    }
    /**
     * Getter $faceValue
     * @return {number}
     */
    get $faceValue() {
        return this.faceValue;
    }
    /**
     * Setter $faceValue
     * @param {number} value
     */
    set $faceValue(value) {
        this.faceValue = value;
    }
    /**
     * Getter $owner
     * @return {string}
     */
    get $owner() {
        return this.owner;
    }
    /**
     * Setter $owner
     * @param {string} value
     */
    set $owner(value) {
        this.owner = value;
    }
    /**
     * Getter $maturityDateTime
     * @return {string}
     */
    get $maturityDateTime() {
        return this.maturityDateTime;
    }
    /**
     * Setter $maturityDateTime
     * @param {string} value
     */
    set $maturityDateTime(value) {
        this.maturityDateTime = value;
    }
    /**
     * Getter $state
     * @return {string}
     */
    get $state() {
        return this.state;
    }
    /**
     * Setter $state
     * @param {string} value
     */
    set $state(value) {
        this.state = value;
    }
};
__decorate([
    fabric_data_1.Property(),
    __metadata("design:type", String)
], CommercialPaper.prototype, "paperId", void 0);
__decorate([
    fabric_data_1.Property(),
    __metadata("design:type", String)
], CommercialPaper.prototype, "issueDateTime", void 0);
__decorate([
    fabric_data_1.Property(),
    __metadata("design:type", Number)
], CommercialPaper.prototype, "faceValue", void 0);
__decorate([
    fabric_data_1.Property(),
    __metadata("design:type", String)
], CommercialPaper.prototype, "maturityDateTime", void 0);
__decorate([
    fabric_data_1.Property(),
    __metadata("design:type", String)
], CommercialPaper.prototype, "issuer", void 0);
__decorate([
    fabric_data_1.Property(),
    __metadata("design:type", String)
], CommercialPaper.prototype, "owner", void 0);
__decorate([
    fabric_data_1.Property(),
    __metadata("design:type", String)
], CommercialPaper.prototype, "state", void 0);
CommercialPaper = __decorate([
    fabric_data_1.DataType(),
    __metadata("design:paramtypes", [Object])
], CommercialPaper);
exports.default = CommercialPaper;
//# sourceMappingURL=paper.js.map