import { State } from 'fabric-data';
export declare class Event extends State {
    /**
     * Getter $eventId
     * @return {string}
     */
    /**
    * Setter $eventId
    * @param {string} value
    */
    $eventId: string;
    /**
     * Getter $description
     * @return {string}
     */
    /**
    * Setter $description
    * @param {string} value
    */
    $description: string;
    /**
     * Getter $timezone
     * @return {string}
     */
    /**
    * Setter $timezone
    * @param {string} value
    */
    $timezone: string;
    static new(eventId: string): Event;
    private eventId;
    private description;
    private timezone;
    private constructor();
}
