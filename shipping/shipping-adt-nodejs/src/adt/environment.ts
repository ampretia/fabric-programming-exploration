/*
 * SPDX-License-Identifier: Apache-2.0
 */


import { Object, Property } from 'fabric-contract-api';
import { State } from 'fabric-data';

@Object()
export class Environment extends State {

    /**
     * Getter $temperature
     * @return {number}
     */
    public get $temperature(): number {
        return this.temperature;
    }

    /**
     * Setter $temperature
     * @param {number} value
     */
    public set $temperature(value: number) {
        this.temperature = value;
    }

    /**
     * Getter $tempUnit
     * @return {string}
     */
    public get $tempUnit(): string {
        return this.tempUnit;
    }

    /**
     * Setter $tempUnit
     * @param {string} value
     */
    public set $tempUnit(value: string) {
        this.tempUnit = value;
    }

    /**
     * Getter $humidty
     * @return {number}
     */
    public get $humidty(): number {
        return this.humidty;
    }

    /**
     * Setter $humidty
     * @param {number} value
     */
    public set $humidty(value: number) {
        this.humidty = value;
    }

    /**
     * Getter $accelx
     * @return {number}
     */
    public get $accelx(): number {
        return this.accelx;
    }

    /**
     * Setter $accelx
     * @param {number} value
     */
    public set $accelx(value: number) {
        this.accelx = value;
    }

    /**
     * Getter $accely
     * @return {number}
     */
    public get $accely(): number {
        return this.accely;
    }

    /**
     * Setter $accely
     * @param {number} value
     */
    public set $accely(value: number) {
        this.accely = value;
    }

    /**
     * Getter $accelz
     * @return {number}
     */
    public get $accelz(): number {
        return this.accelz;
    }

    /**
     * Setter $accelz
     * @param {number} value
     */
    public set $accelz(value: number) {
        this.accelz = value;
    }

    /**
     * Getter $altitude
     * @return {number}
     */
    public get $altitude(): number {
        return this.altitude;
    }

    /**
     * Setter $altitude
     * @param {number} value
     */
    public set $altitude(value: number) {
        this.altitude = value;
    }

    /**
     * Getter $pressure
     * @return {number}
     */
    public get $pressure(): number {
        return this.pressure;
    }

    /**
     * Setter $pressure
     * @param {number} value
     */
    public set $pressure(value: number) {
        this.pressure = value;
    }

    /**
     * Getter $devicecondition
     * @return {string}
     */
    public get $devicecondition(): string {
        return this.deviceCondition;
    }

    /**
     * Setter $devicecondition
     * @param {string} value
     */
    public set $deviceCondition(value: string) {
        this.deviceCondition = value;
    }
    public static new(): Environment {
        const s = new Environment();
        return s;
    }

    @Property()
    private temperature: number;
    @Property()
    private tempUnit: string;
    @Property()
    private humidty: number;
    @Property()
    private accelx: number;
    @Property()
    private accely: number;
    @Property()
    private accelz: number;
    @Property()
    private altitude: number;
    @Property()
    private pressure: number;
    @Property()
    private deviceCondition: string;

    private constructor() {
        // includes what the type of the primary key is
        super('Environment', []);
    }
}
