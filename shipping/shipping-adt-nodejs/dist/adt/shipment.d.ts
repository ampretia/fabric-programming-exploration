import { State } from 'fabric-data';
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
export declare class Shipment extends State {
    static new(shipmentId: string): Shipment;
    private shipmentId;
    private asset;
    private transport;
    private buisness;
    private environment;
    private device;
    private event;
    private geolocation;
    private constructor();
    /**
     * Getter $shipmentId
     * @return {string}
     */
    /**
    * Setter $shipmentId
    * @param {string} value
    */
    $shipmentId: string;
    /**
     * Getter $asset
     * @return {Asset}
     */
    /**
    * Setter $asset
    * @param {Asset} value
    */
    $asset: Asset;
    /**
     * Getter $transport
     * @return {Transport}
     */
    /**
    * Setter $transport
    * @param {Transport} value
    */
    $transport: Transport;
    /**
     * Getter $buisness
     * @return {Business}
     */
    /**
    * Setter $buisness
    * @param {Business} value
    */
    $buisness: Business;
    /**
     * Getter $device
     * @return {Device}
     */
    /**
    * Setter $device
    * @param {Device} value
    */
    $device: Device;
    /**
     * Getter $event
     * @return {Event}
     */
    /**
    * Setter $event
    * @param {Event} value
    */
    $event: Event;
    /**
     * Getter $geolocation
     * @return {Geolocation}
     */
    /**
    * Setter $geolocation
    * @param {Geolocation} value
    */
    $geolocation: Geolocation;
    /**
     * Getter $environment
     * @return {Environment}
     */
    /**
    * Setter $environment
    * @param {Environment} value
    */
    $environment: Environment;
    toString(): string;
}
