"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
class CommercialPaperEndpoint extends service_1.default {
    constructor(gateway, schema) {
        super(gateway, schema);
    }
    async issue(commercialPaperId, issuer, issueDateTime, maturityDateTime, faceValue) {
        return super.submitTx('issue', ...arguments);
    }
    async buy(issuer, commercialPaperId, currentOwner, newOwner, price, purchaseDateTime) {
        return super.submitTx('buy', ...arguments);
    }
    async redeem(issuer, commercialPaperId, redeemingOwner, redeemDateTime) {
        return super.submitTx('redeem', ...arguments);
    }
    async query() {
        return super.evaluateTx('query');
    }
}
exports.default = CommercialPaperEndpoint;
//# sourceMappingURL=commercialpaperendpoint.impl.js.map