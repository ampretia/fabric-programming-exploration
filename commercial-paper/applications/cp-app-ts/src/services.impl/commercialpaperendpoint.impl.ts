/*
 * SPDX-License-Identifier: Apache-2.0
 */

 // AUTO_GENERATED

import {CommercialPaper} from 'cp-adt';
import {Service} from 'fabric-application';


export default class CommercialPaperEndpoint extends Service {

    public constructor(gateway, schema) {
        super(gateway, schema);
    }

    public async issue(commercialPaperId: string,
        issuer: string,
        issueDateTime: string,
        maturityDateTime: string,
        faceValue: number): Promise<CommercialPaper> {
        return super.submitTx('issue', ...arguments);
    }

    public async buy(
        issuer: string,
        commercialPaperId: string,
        currentOwner: string,
        newOwner: string,
        price: number,
        purchaseDateTime: string): Promise<CommercialPaper> {
        return super.submitTx('buy', ...arguments);
    }

    public async redeem(
        issuer: string,
        commercialPaperId: string,
        redeemingOwner: string,
        redeemDateTime: string): Promise<CommercialPaper> {
        return super.submitTx('redeem', ...arguments);
    }

    public async query(){
        return super.evaluateTx('query');
    }
}
