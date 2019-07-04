import { Context } from 'fabric-contract-api';
import { Ledger } from '.';
import TransactionAPI from './transaction-api/txapi';

/**
 * Define custom context by extending the Context.
 *
 * Purpose here is to (a) show how context can be extended, but to act as vehicle to 
 * show the proposal.
 *
 * Function in here would be folded into the Context class
 */
export default class SmartContext extends Context {

    private transaction: TransactionAPI;
    private ledger: Ledger;

    /**
     * Get the transaction API.
     */
    public get $transaction(): TransactionAPI {
        return this.transaction;
    }

    constructor() {
        super();
        this.ledger = new Ledger(this);
        this.transaction = new TransactionAPI(this);
    }

}
