import { Context } from 'fabric-contract-api';
import { State, StateList } from '..';

export default class LedgerService {

    private ctx: Context;

    public constructor(ctx) {
        this.ctx = ctx;
    }

    public getStateList<T extends State>(collection: string, type: new () => T, generation: string): StateList<T> {
        return new StateList<T>(this.ctx, type.prototype, generation);
    }

}
