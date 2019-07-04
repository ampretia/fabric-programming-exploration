"use strict";
/*
SPDX-License-Identifier: Apache-2.0
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
var Shipment_1;
Object.defineProperty(exports, "__esModule", { value: true });
'use strict';
const fabric_contract_api_1 = require("fabric-contract-api");
const fabric_data_1 = require("fabric-data");
const asset_1 = require("./asset");
const business_1 = require("./business");
const device_1 = require("./device");
const environment_1 = require("./environment");
const event_1 = require("./event");
const geolocation_1 = require("./geolocation");
const transport_1 = require("./transport");
/**
 * CommercialPaper class extends State class
 * Class will be used by application and smart contract to define a paper
 */
let Shipment = Shipment_1 = class Shipment extends fabric_data_1.State {
    constructor() {
        super('Shipment', ['shipmentId']);
    }
    static new(shipmentId) {
        const s = new Shipment_1();
        s.$shipmentId = shipmentId;
        return s;
    }
    /**
     * Getter $shipmentId
     * @return {string}
     */
    get $shipmentId() {
        return this.shipmentId;
    }
    /**
     * Setter $shipmentId
     * @param {string} value
     */
    set $shipmentId(value) {
        this.shipmentId = value;
    }
    /**
     * Getter $asset
     * @return {Asset}
     */
    get $asset() {
        return this.asset;
    }
    /**
     * Setter $asset
     * @param {Asset} value
     */
    set $asset(value) {
        this.asset = value;
    }
    /**
     * Getter $transport
     * @return {Transport}
     */
    get $transport() {
        return this.transport;
    }
    /**
     * Setter $transport
     * @param {Transport} value
     */
    set $transport(value) {
        this.transport = value;
    }
    /**
     * Getter $buisness
     * @return {Business}
     */
    get $buisness() {
        return this.buisness;
    }
    /**
     * Setter $buisness
     * @param {Business} value
     */
    set $buisness(value) {
        this.buisness = value;
    }
    /**
     * Getter $device
     * @return {Device}
     */
    get $device() {
        return this.device;
    }
    /**
     * Setter $device
     * @param {Device} value
     */
    set $device(value) {
        this.device = value;
    }
    /**
     * Getter $event
     * @return {Event}
     */
    get $event() {
        return this.event;
    }
    /**
     * Setter $event
     * @param {Event} value
     */
    set $event(value) {
        this.event = value;
    }
    /**
     * Getter $geolocation
     * @return {Geolocation}
     */
    get $geolocation() {
        return this.geolocation;
    }
    /**
     * Setter $geolocation
     * @param {Geolocation} value
     */
    set $geolocation(value) {
        this.geolocation = value;
    }
    /**
     * Getter $environment
     * @return {Environment}
     */
    get $environment() {
        return this.environment;
    }
    /**
     * Setter $environment
     * @param {Environment} value
     */
    set $environment(value) {
        this.environment = value;
    }
    toString() {
        return `SHIPMENT:${this.asset.toString()}`;
    }
};
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", String)
], Shipment.prototype, "shipmentId", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", asset_1.Asset)
], Shipment.prototype, "asset", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", transport_1.Transport)
], Shipment.prototype, "transport", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", business_1.Business)
], Shipment.prototype, "buisness", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", environment_1.Environment)
], Shipment.prototype, "environment", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", device_1.Device)
], Shipment.prototype, "device", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", event_1.Event)
], Shipment.prototype, "event", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", geolocation_1.Geolocation)
], Shipment.prototype, "geolocation", void 0);
Shipment = Shipment_1 = __decorate([
    fabric_contract_api_1.Object(),
    __metadata("design:paramtypes", [])
], Shipment);
exports.Shipment = Shipment;
//# sourceMappingURL=shipment.js.map