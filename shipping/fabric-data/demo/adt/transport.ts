import { Object, Property } from 'fabric-contract-api';
import { State } from '../../';

@Object()
export class Transport extends State {
    /**
     * Getter $transportId
     * @return {string}
     */
    public get $transportId(): string {
        return this.transportId;
    }

    /**
     * Setter $transportId
     * @param {string} value
     */
    public set $transportId(value: string) {
        this.transportId = value;
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

    public static new(transportId: string): Transport {
        const s = new Transport();
        s.$transportId = transportId;
        return s;
    }

    @Property()
    private transportId: string;

    @Property()
    private description: string;

    private constructor() {
        // includes what the type of the primary key is
        super('Transport', ['transportId']);
    }
}
