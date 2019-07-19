import { Context } from 'fabric-contract-api';
import { Ledger } from './ledger-api';
import { TransactionService } from './transaction-api';

/**
 * Define custom context by extending the Context.
 *
 * Purpose here is to (a) show how context can be extended, but to act as vehicle to 
 * show the proposal.
 *
 * Function in here would be folded into the Context class
 */
export default class SmartContext extends Context {

    private transaction: TransactionService;
    private ledger: Ledger;

    /**
     * Get the transaction API.
     */
    public get $transaction(): TransactionService {
        return this.transaction;
    }

    constructor() {
        super();
        this.ledger = new LedgerService(this);
        this.transaction = new TransactionService(this);
    }


}
