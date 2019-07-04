import { Object as DataType, Property } from 'fabric-contract-api';
import { State } from '../..';

@DataType()
export class Asset extends State {

    public static new(assetId: string): Asset {
        const s = new Asset();
        s.$assetId = assetId;
        return s;
    }

    @Property()
    private assetId: string;
    @Property()
    private description: string;

    private constructor() {
        // includes what the type of the primary key is
        super('Asset', ['assetId']);
    }

    /**
     * Getter $assetId
     * @return {string}
     */
    public get $assetId(): string {
        return this.assetId;
    }

    /**
     * Setter $assetId
     * @param {string} value
     */
    public set $assetId(value: string) {
        this.assetId = value;
    }

    /**
     * Getter $description
     * @return {string}
     */
    public get $description(): string {
        return this.description;
    }

    /**
     * Setter $description
     * @param {string} value
     */
    public set $description(value: string) {
        this.description = value;
    }

    public toString(): string {
        return `ASSET:${this.assetId} ${this.description}`;
    }
}
