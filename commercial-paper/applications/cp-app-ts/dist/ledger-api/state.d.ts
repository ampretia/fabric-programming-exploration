/**
 * State class. States have a type, unique key, and a lifecycle current state
 * the current state is determined by the specific subclass.
 *
 * The underlying key is important as it indexes more than for example a single person.
 * Also the key is important as it at the key level that 'state based endorsement' takes
 * place.
 *
 *
 * [collection]:[type]:[model]:[generation]:[pk_1]:[pk_2]:...:[pk_n]
 */
export default class State {
    static splitKey(key: any): any;
    private type;
    private keyParts;
    /**
     * @param {String|Object} type  An indentifiable type of the instance
     * @param {keyParts[]} elements name of the properties that form the primary key lements.. in order
     */
    constructor(type: string, keyParts: string[], obj?: any);
    getType(): string;
    getSplitKey(): any[];
}
