import { State } from 'fabric-data';
export declare class Transport extends State {
    /**
     * Getter $transportId
     * @return {string}
     */
    /**
    * Setter $transportId
    * @param {string} value
    */
    $transportId: string;
    /**
     * Getter $description
     * @return {string}
     */
    /**
    * Setter $description
    * @param {string} value
    */
    $description: string;
    static new(transportId: string): Transport;
    private transportId;
    private description;
    private constructor();
}
