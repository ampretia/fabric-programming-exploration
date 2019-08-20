/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';
import { Context } from 'fabric-contract-api';
import JSONSerializer from './jsonserializer';
import ISerializer from './serializer';
import State from './state';

// TODO: Add in update iterators as per the recent node.js chaincode updates

/**
 * StateList provides a named virtual container for a set of ledger states.
 * Each state has unique key which associates it with the container, rather
 * than the container containing a link to the state. This minimizes collisions
 * for parallel transactions on different states.
 */
export default class StateList<T extends State> {

    public static WORLD_STATE: string = '';

    public type: string;
    public collection: string;
    public domainhash: string;
    public generation: string;
    public ctx: Context;
    public serializer: ISerializer<T>;

    /**
     * Store Fabric context for subsequent API access, and name of list
     */
    public constructor(ctx, type: T, collection: string = '', generation: string = '', domainhash = '') {
        this.ctx = ctx;
        this.type = type.constructor.name;
        this.collection = collection;
        this.generation = generation;
        this.domainhash = domainhash; // should come from the value of the model
        this.serializer = new JSONSerializer<T>(type);
    }

    // CRUD style operations on the states    

    /**
     * Add a state to the list. Creates a new state in worldstate with
     * appropriate composite key.  Note that state defines its own key.
     * State object is serialized before writing.
     */
    public async add(state: T) {
        const key = this.formKey(state.getSplitKey());
        const data = this.serializer.toBuffer(state);
        await this.ctx.stub.putPrivateData(this.collection, key, data);
    }

    /**
     * Get a state from the list using supplied keys. Form composite
     * keys to retrieve state from world state. State data is deserialized
     * into JSON object before being returned.
     */
    public async get(key): Promise<T> {
        const ledgerkey = this.formKey(State.splitKey(key));
        const data = await this.ctx.stub.getPrivateData(this.collection, ledgerkey);
        const state = this.serializer.fromBuffer(data);
        return state as T;
    }

    /**
     * Update a state in the list. Puts the new state in world state with
     * appropriate composite key.  Note that state defines its own key.
     * A state is serialized before writing. Logic is very similar to
     * addState() but kept separate becuase it is semantically distinct.
     */
    public async update(state: T) {
        const ledgerkey = this.formKey(state.getSplitKey());
        const data = this.serializer.toBuffer(state);
        await this.ctx.stub.putPrivateData(this.collection, ledgerkey, data);
    }

    /**
     *
     * @param key
     */
    public async delete(key): Promise<void> {
        const ledgerkey = this.formKey(State.splitKey(key));
        await this.ctx.stub.deletePrivateData(this.collection, ledgerkey);
    }

    // QUERY operations on the states, can be expensive due to size of results sets

    /**
     * Gets an array of all the states
     * Should be used with caution
     */
    public async getAllStates(): Promise<T[]> {
        const iterator = this.ctx.stub.getStateByPartialCompositeKey(this.type, [this.domainhash, this.generation]);

        const result = [];
        while (iterator && true) {
            const { data, done } = await (iterator as any).next();
            result.push(this.serializer.fromBuffer(data));
            if (done) {
                break;
            }
        }

        return result;
    }

    /**
     *
     */
    public async getRange(primarykeys: string[]): Promise<T[]> {
        const iterator = this.ctx.stub.getStateByPartialCompositeKey(this.type, [this.domainhash, this.generation, ...primarykeys]);

        const result = [];
        while (iterator && true) {
            const { data, done } = await (iterator as any).next();
            result.push(this.serializer.fromBuffer(data));
            if (done) {
                break;
            }
        }

        return result;
    }

    /**
     *
     * @param primarykeys
     */
    public async getRangeWithPaginsation(primarykeys: string[]): Promise<T[]> {
        throw new Error('not implemented yet');
    }

    /**
     * Move to the generation specified
     *
     * @param key
     * @param ageTo
     */
    public async age(key: string, ageTo: string) {
        const stateKeys = State.splitKey(key);
        const ledgerkey = this.formKey(stateKeys);
        const data = await this.ctx.stub.getPrivateData(this.collection, ledgerkey);

        const k = this.ctx.stub.createCompositeKey(this.type, [this.domainhash, ageTo, ...stateKeys]);
        await this.ctx.stub.putPrivateData(this.collection, k, data);

        await this.ctx.stub.deletePrivateData(this.collection, ledgerkey);
    }



    private formKey(stateKeys: string[]): string {
        const k = this.ctx.stub.createCompositeKey(this.type, [this.domainhash, this.generation, ...stateKeys]);
        return k;
    }

}
