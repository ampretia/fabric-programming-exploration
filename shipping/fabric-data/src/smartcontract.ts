import { Contract } from 'fabric-contract-api';
import SmartContext from './smartcontext';

/** Extension of the Contract interface to demonstrate the usage of the suggested
 * updates to the APIs used in Contracts.
 * 
 * This class itself is a 'vehicle' to demonstrate this, and not part of the proposal.
 */
export default class SmartContract extends Contract {

    constructor(alias: string) {
        super(alias);
    }

    public createContext(): SmartContext {
        return new SmartContext();
    }


    // what follows is what could be in any contract


}
