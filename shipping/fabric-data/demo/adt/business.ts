import { Object, Property } from 'fabric-contract-api';
import { State } from '../../';

@Object()
export class Business extends State {

    public static new(name: string): Business {
        const s = new Business();
        s.$name = name;
        return s;
    }

    /**
     * Getter $name
     * @return {string}
     */
    public get $name(): string {
        return this.name;
    }

    /**
     * Setter $name
     * @param {string} value
     */
    public set $name(value: string) {
        this.name = value;
    }

    /**
     * Getter $address
     * @return {string}
     */
    public get $address(): string {
        return this.address;
    }

    /**
     * Setter $address
     * @param {string} value
     */
    public set $address(value: string) {
        this.address = value;
    }

    /**
     * Getter $phone
     * @return {string}
     */
    public get $phone(): string {
        return this.phone;
    }

    /**
     * Setter $phone
     * @param {string} value
     */
    public set $phone(value: string) {
        this.phone = value;
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

    @Property()
    private name: string;

    @Property()
    private address: string;

    @Property()
    private phone: string;

    @Property()
    private description: string;

    private constructor() {
        // includes what the type of the primary key is
        super('Business', ['name']);
    }
}
