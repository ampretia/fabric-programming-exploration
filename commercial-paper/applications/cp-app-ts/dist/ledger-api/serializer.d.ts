/// <reference types="node" />
/**
 * State class. States have a type, unique key, and a lifecycle current state
 * the current state is determined by the specific subclass
 */
export default interface ISerializer<T> {
    fromBuffer(buffer: Buffer): T;
    toBuffer(state: T): Buffer;
}
