/// <reference types="node" />
import ISerializer from './serializer';
import State from './state';
export default class JSONSerializer<T extends State> implements ISerializer<T> {
    static getSerializer<I extends State>(type: any): JSONSerializer<I>;
    supportedTypes: object;
    private cnstr;
    constructor(type: T);
    fromBuffer(buffer: Buffer): T;
    toBuffer(state: T): Buffer;
}
