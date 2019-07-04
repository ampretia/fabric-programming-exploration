/*
 * SPDX-License-Identifier: Apache-2.0
 */

import { Object, Property } from 'fabric-contract-api';
import { State } from 'fabric-data';

@Object()
export class Geolocation extends State {

    /**
     * Getter $latitiude
     * @return {number}
     */
    public get $latitiude(): number {
        return this.latitiude;
    }

    /**
     * Setter $latitiude
     * @param {number} value
     */
    public set $latitiude(value: number) {
        this.latitiude = value;
    }

    /**
     * Getter $longtitude
     * @return {number}
     */
    public get $longtitude(): number {
        return this.longtitude;
    }

    /**
     * Setter $longtitude
     * @param {number} value
     */
    public set $longtitude(value: number) {
        this.longtitude = value;
    }

    public static new(): Geolocation {
        const s = new Geolocation();

        return s;
    }

    @Property()
    private latitiude: number;
    @Property()
    private longtitude: number;

    private constructor() {
        // includes what the type of the primary key is
        super('Geolocation', []);
    }
}
