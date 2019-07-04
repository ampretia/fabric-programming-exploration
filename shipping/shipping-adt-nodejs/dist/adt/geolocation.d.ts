import { State } from 'fabric-data';
export declare class Geolocation extends State {
    /**
     * Getter $latitiude
     * @return {number}
     */
    /**
    * Setter $latitiude
    * @param {number} value
    */
    $latitiude: number;
    /**
     * Getter $longtitude
     * @return {number}
     */
    /**
    * Setter $longtitude
    * @param {number} value
    */
    $longtitude: number;
    static new(): Geolocation;
    private latitiude;
    private longtitude;
    private constructor();
}
