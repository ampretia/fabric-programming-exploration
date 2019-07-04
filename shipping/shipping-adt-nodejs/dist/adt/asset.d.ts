import { State } from 'fabric-data';
export declare class Asset extends State {
    static new(assetId: string): Asset;
    private assetId;
    private description;
    private constructor();
    /**
     * Getter $assetId
     * @return {string}
     */
    /**
    * Setter $assetId
    * @param {string} value
    */
    $assetId: string;
    /**
     * Getter $description
     * @return {string}
     */
    /**
    * Setter $description
    * @param {string} value
    */
    $description: string;
    toString(): string;
}
