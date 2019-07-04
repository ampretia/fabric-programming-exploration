/*
 * SPDX-License-Identifier: Apache-2.0
 */

import { Transaction } from 'fabric-contract-api';
import { FDMContract } from 'fabric-data';
import ShippingContext from './shippingcontext';

export default class ShippingContract extends FDMContract {

    public createContext() {
        return new ShippingContext();
    }

    public async beforeTransaction(ctx: ShippingContext): Promise<any> {
        // do ACL checking her
        const log = ctx.logging.getLogger();
        log.info('Need to do checking here of identity');
        log.info(`Running function ${ctx.$functionExecuting}`);
    }

    @Transaction()
    public async tracing(ctx: ShippingContext): Promise<void> {
        ctx.logging.setLevel('DEBUG');
    }

}
