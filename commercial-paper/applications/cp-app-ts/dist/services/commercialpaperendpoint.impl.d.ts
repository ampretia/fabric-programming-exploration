import CommercialPaper from '../adt/paper';
import Service from './service';
export default class CommercialPaperEndpoint extends Service {
    constructor(gateway: any, schema: any);
    issue(commercialPaperId: string, issuer: string, issueDateTime: string, maturityDateTime: string, faceValue: number): Promise<CommercialPaper>;
    buy(issuer: string, commercialPaperId: string, currentOwner: string, newOwner: string, price: number, purchaseDateTime: string): Promise<CommercialPaper>;
    redeem(issuer: string, commercialPaperId: string, redeemingOwner: string, redeemDateTime: string): Promise<CommercialPaper>;
    query(): Promise<any>;
}
