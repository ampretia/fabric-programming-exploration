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
var Device_1;
Object.defineProperty(exports, "__esModule", { value: true });
const fabric_contract_api_1 = require("fabric-contract-api");
const fabric_data_1 = require("fabric-data");
let Device = Device_1 = class Device extends fabric_data_1.State {
    constructor() {
        // includes what the type of the primary key is
        super('Device', ['deviceId']);
    }
    static new(deviceId) {
        const s = new Device_1();
        s.deviceId = deviceId;
        return s;
    }
};
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", String)
], Device.prototype, "deviceId", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", String)
], Device.prototype, "details", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", String)
], Device.prototype, "class", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", String)
], Device.prototype, "code", void 0);
Device = Device_1 = __decorate([
    fabric_contract_api_1.Object(),
    __metadata("design:paramtypes", [])
], Device);
exports.Device = Device;
//# sourceMappingURL=device.js.map