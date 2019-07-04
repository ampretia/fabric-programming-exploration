
import { Ledger, StateList } from '..';
import SmartContext from '../smartcontext';
import Greeting from './greeting';

/**
 * Define custom context for commercial paper by extending Fabric ContractAPI's Context class
 */
export default class GreetingContext extends SmartContext {

    private greetings: StateList<Greeting>;

    constructor() {
        super();
        this.greetings = new Ledger(this).getStateList(StateList.WORLD_STATE, Greeting, 'gen_a');
        // this.greetings = new StateList<Greeting>(this, Greeting.prototype, StateList.WORLD_STATE);
    }

    public get $greetings(): StateList<Greeting> {
        return this.greetings;
    }

}
