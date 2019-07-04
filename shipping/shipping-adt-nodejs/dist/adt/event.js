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
var Event_1;
Object.defineProperty(exports, "__esModule", { value: true });
const fabric_contract_api_1 = require("fabric-contract-api");
const fabric_data_1 = require("fabric-data");
let Event = Event_1 = class Event extends fabric_data_1.State {
    constructor() {
        // includes what the type of the primary key is
        super('Event', ['eventId']);
    }
    /**
     * Getter $eventId
     * @return {string}
     */
    get $eventId() {
        return this.eventId;
    }
    /**
     * Setter $eventId
     * @param {string} value
     */
    set $eventId(value) {
        this.eventId = value;
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
    /**
     * Getter $timezone
     * @return {string}
     */
    get $timezone() {
        return this.timezone;
    }
    /**
     * Setter $timezone
     * @param {string} value
     */
    set $timezone(value) {
        this.timezone = value;
    }
    static new(eventId) {
        const s = new Event_1();
        s.$eventId = eventId;
        return s;
    }
};
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", String)
], Event.prototype, "eventId", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    fabric_contract_api_1.Property(),
    __metadata("design:type", String)
], Event.prototype, "timezone", void 0);
Event = Event_1 = __decorate([
    fabric_contract_api_1.Object(),
    __metadata("design:paramtypes", [])
], Event);
exports.Event = Event;
//# sourceMappingURL=event.js.map