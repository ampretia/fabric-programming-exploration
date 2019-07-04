import { State } from 'fabric-data';
export declare class Business extends State {
    static new(name: string): Business;
    /**
     * Getter $name
     * @return {string}
     */
    /**
    * Setter $name
    * @param {string} value
    */
    $name: string;
    /**
     * Getter $address
     * @return {string}
     */
    /**
    * Setter $address
    * @param {string} value
    */
    $address: string;
    /**
     * Getter $phone
     * @return {string}
     */
    /**
    * Setter $phone
    * @param {string} value
    */
    $phone: string;
    /**
     * Getter $description
     * @return {string}
     */
    /**
    * Setter $description
    * @param {string} value
    */
    $description: string;
    private name;
    private address;
    private phone;
    private description;
    private constructor();
}
