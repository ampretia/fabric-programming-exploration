import { State } from 'fabric-data';
export declare class Environment extends State {
    /**
     * Getter $temperature
     * @return {number}
     */
    /**
    * Setter $temperature
    * @param {number} value
    */
    $temperature: number;
    /**
     * Getter $tempUnit
     * @return {string}
     */
    /**
    * Setter $tempUnit
    * @param {string} value
    */
    $tempUnit: string;
    /**
     * Getter $humidty
     * @return {number}
     */
    /**
    * Setter $humidty
    * @param {number} value
    */
    $humidty: number;
    /**
     * Getter $accelx
     * @return {number}
     */
    /**
    * Setter $accelx
    * @param {number} value
    */
    $accelx: number;
    /**
     * Getter $accely
     * @return {number}
     */
    /**
    * Setter $accely
    * @param {number} value
    */
    $accely: number;
    /**
     * Getter $accelz
     * @return {number}
     */
    /**
    * Setter $accelz
    * @param {number} value
    */
    $accelz: number;
    /**
     * Getter $altitude
     * @return {number}
     */
    /**
    * Setter $altitude
    * @param {number} value
    */
    $altitude: number;
    /**
     * Getter $pressure
     * @return {number}
     */
    /**
    * Setter $pressure
    * @param {number} value
    */
    $pressure: number;
    /**
     * Getter $devicecondition
     * @return {string}
     */
    readonly $devicecondition: string;
    /**
     * Setter $devicecondition
     * @param {string} value
     */
    $deviceCondition: string;
    static new(): Environment;
    private temperature;
    private tempUnit;
    private humidty;
    private accelx;
    private accely;
    private accelz;
    private altitude;
    private pressure;
    private deviceCondition;
    private constructor();
}
