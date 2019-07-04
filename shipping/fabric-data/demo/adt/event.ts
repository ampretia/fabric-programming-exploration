import { Object, Property } from 'fabric-contract-api';
import { State } from '../../';

@Object()
export class Event extends State {

    /**
     * Getter $eventId
     * @return {string}
     */
    public get $eventId(): string {
        return this.eventId;
    }

    /**
     * Setter $eventId
     * @param {string} value
     */
    public set $eventId(value: string) {
        this.eventId = value;
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

    /**
     * Getter $timezone
     * @return {string}
     */
    public get $timezone(): string {
        return this.timezone;
    }

    /**
     * Setter $timezone
     * @param {string} value
     */
    public set $timezone(value: string) {
        this.timezone = value;
    }
    public static new(eventId: string): Event {
        const s = new Event();
        s.$eventId = eventId;
        return s;
    }
    @Property()
    private eventId: string;
    @Property()
    private description: string;
    @Property()
    private timezone: string;

    private constructor() {
        // includes what the type of the primary key is
        super('Event', ['eventId']);
    }
}
