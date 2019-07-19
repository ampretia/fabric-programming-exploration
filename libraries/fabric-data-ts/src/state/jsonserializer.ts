import { classToPlain, plainToClass } from 'class-transformer';
import ISerializer from './serializer';
import State from './state';

export default class JSONSerializer<T extends State> implements ISerializer<T> {

    public static getSerializer<I extends State>(type) {
        return new JSONSerializer<I>(type.prototype);
    }

    public supportedTypes: object;
    private cnstr;

    public constructor(type: T) {
        this.cnstr = type.constructor;
    }

    public fromBuffer(buffer: Buffer): T {
        const json = JSON.parse(buffer.toString('utf8'));
        const object = plainToClass(this.cnstr, json);
        return (object as unknown as T);
    }

    public toBuffer(state: T): Buffer {
        return Buffer.from(JSON.stringify(classToPlain(state)));
    }

}
