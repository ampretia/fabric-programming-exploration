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
var Environment_1;
Object.defineProperty(exports, "__esModule", { value: true });
const fabric_contract_api_1 = require("fabric-contract-api");
const fabric_data_1 = require("fabric-data");
let Environment = Environment_1 = class Environment extends fabric_data_1.State {
    constructor() {
        // includes what the type of the primary key is
        super('Environment', []);
    }
    /**
     * Getter $temperature
     * @return {number}
     */
    get $temperature() {
        return this.temperature;
    }
    /**
     * Setter $temperature
     * @param {number} value
     */
    set $temperature(value) {
        this.temperature = value;
    }
    /**
     * Getter $tempUnit
     * @return {string}
     */
    get $tempUnit() {
        return this.tempUnit;
    }
    /**
     * Setter $tempUnit
     * @param {string} value
     */
    set $tempUnit(value) {
        this.tempUnit = value;
    }
    /**
     * Getter $humidty
     * @return {number}
     */
    get $humidty() {
        return this.humidty;
    }
    /**
     * Setter $humidty
     * @param {number} value
     */
    set $humidty(value) {
        this.humidty = value;
    }
    /**
     * Getter $accelx
     * @return {number}
     */
    get $accelx() {
        return this.accelx;
    }
    /**
     * Setter $accelx
     * @param {number} value
     */
    set $accelx(value) {
        this.accelx = value;
    }
    /**
     * Getter $accely
     * @return {number}
     */
    get $accely() {
        return this.accely;
    }
    /**
     * Setter $accely
     * @param {number} value
     */
    set $accely(value) {
        this.accely = value;
    }
    /**
     * Getter $accelz
     * @return {number}
     */
    get $accelz() {
        return this.accelz;
    }
    /**
     * Setter $accelz
     * @param {number} value
     */
    set $accelz(value) {
        this.accelz = value;
    }
    /**
     * Getter $altitude
     * @return {number}
     */
    get $altitude() {
        return this.altitude;
    }
    /**
     * Setter $altitude
     * @param {number} value
     */
    set $altitude(value) {
        this.altitude = value;
    }
    /**
     * Getter $pressure
     * @return {number}
     */
    get $pressure() {
        return this.pressure;
    }
    /**
     * Setter $pressure
     * @param {number} value
     */
    set $pressure(value) {
        this.pressure = value;
    }
    /**
     * Getter $devicecondition
     * @return {string}
     */
    get $devicecondition() {
        return this.deviceCondition;
    }
    /**
     * Setter $devicecondition
     * @param {string} value
     */
    set $deviceCondition(value) {
        this.deviceCondition = value;
    }
    static new() {
        const s = new Environment_1();
        return s;
    }
};
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", Number)
], Environment.prototype, "temperature", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", String)
], Environment.prototype, "tempUnit", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", Number)
], Environment.prototype, "humidty", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", Number)
], Environment.prototype, "accelx", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", Number)
], Environment.prototype, "accely", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", Number)
], Environment.prototype, "accelz", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", Number)
], Environment.prototype, "altitude", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", Number)
], Environment.prototype, "pressure", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", String)
], Environment.prototype, "deviceCondition", void 0);
Environment = Environment_1 = __decorate([
    fabric_contract_api_1.Object(),
    __metadata("design:paramtypes", [])
], Environment);
exports.Environment = Environment;
//# sourceMappingURL=environment.js.map