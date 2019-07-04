/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

import { Object as DataType, Property } from 'fabric-contract-api';
import State from '../../ledger-api/state';
import { Asset } from './asset';
import { Business } from './business';
import { Device } from './device';
import { Environment } from './environment';
import { Event } from './event';
import { Geolocation } from './geolocation';
import { Transport } from './transport';

/**
 * CommercialPaper class extends State class
 * Class will be used by application and smart contract to define a paper
 */
@DataType()
export class Shipment extends State {

    public static new(shipmentId: string): Shipment {
        const s = new Shipment();
        s.$shipmentId = shipmentId;
        return s;
    }

    @Property()
    private shipmentId: string;

    @Property()
    private asset: Asset;

    @Property()
    private transport: Transport;

    @Property()
    private buisness: Business;

    @Property()
    private environment: Environment;

    @Property()
    private device: Device;

    @Property()
    private event: Event;

    @Property()
    private geolocation: Geolocation;

    private constructor() {
        super('Shipment', ['shipmentId']);
    }

    /**
     * Getter $shipmentId
     * @return {string}
     */
    public get $shipmentId(): string {
        return this.shipmentId;
    }

    /**
     * Setter $shipmentId
     * @param {string} value
     */
    public set $shipmentId(value: string) {
        this.shipmentId = value;
    }

    /**
     * Getter $asset
     * @return {Asset}
     */
    public get $asset(): Asset {
        return this.asset;
    }

    /**
     * Setter $asset
     * @param {Asset} value
     */
    public set $asset(value: Asset) {
        this.asset = value;
    }

    /**
     * Getter $transport
     * @return {Transport}
     */
    public get $transport(): Transport {
        return this.transport;
    }

    /**
     * Setter $transport
     * @param {Transport} value
     */
    public set $transport(value: Transport) {
        this.transport = value;
    }

    /**
     * Getter $buisness
     * @return {Business}
     */
    public get $buisness(): Business {
        return this.buisness;
    }

    /**
     * Setter $buisness
     * @param {Business} value
     */
    public set $buisness(value: Business) {
        this.buisness = value;
    }

    /**
     * Getter $device
     * @return {Device}
     */
    public get $device(): Device {
        return this.device;
    }

    /**
     * Setter $device
     * @param {Device} value
     */
    public set $device(value: Device) {
        this.device = value;
    }

    /**
     * Getter $event
     * @return {Event}
     */
    public get $event(): Event {
        return this.event;
    }

    /**
     * Setter $event
     * @param {Event} value
     */
    public set $event(value: Event) {
        this.event = value;
    }

    /**
     * Getter $geolocation
     * @return {Geolocation}
     */
    public get $geolocation(): Geolocation {
        return this.geolocation;
    }

    /**
     * Setter $geolocation
     * @param {Geolocation} value
     */
    public set $geolocation(value: Geolocation) {
        this.geolocation = value;
    }

    /**
     * Getter $environment
     * @return {Environment}
     */
    public get $environment(): Environment {
        return this.environment;
    }

    /**
     * Setter $environment
     * @param {Environment} value
     */
    public set $environment(value: Environment) {
        this.environment = value;
    }

    public toString(): string {
        return `SHIPMENT:${this.asset.toString()}`;
    }
}
