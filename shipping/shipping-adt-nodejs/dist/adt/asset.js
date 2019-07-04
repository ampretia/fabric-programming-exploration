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
var Asset_1;
Object.defineProperty(exports, "__esModule", { value: true });
const fabric_contract_api_1 = require("fabric-contract-api");
const fabric_data_1 = require("fabric-data");
let Asset = Asset_1 = class Asset extends fabric_data_1.State {
    constructor() {
        // includes what the type of the primary key is
        super('Asset', ['assetId']);
    }
    static new(assetId) {
        const s = new Asset_1();
        s.$assetId = assetId;
        return s;
    }
    /**
     * Getter $assetId
     * @return {string}
     */
    get $assetId() {
        return this.assetId;
    }
    /**
     * Setter $assetId
     * @param {string} value
     */
    set $assetId(value) {
        this.assetId = value;
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
    toString() {
        return `ASSET:${this.assetId} ${this.description}`;
    }
};
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", String)
], Asset.prototype, "assetId", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", String)
], Asset.prototype, "description", void 0);
Asset = Asset_1 = __decorate([
    fabric_contract_api_1.Object(),
    __metadata("design:paramtypes", [])
], Asset);
exports.Asset = Asset;
//# sourceMappingURL=asset.js.map