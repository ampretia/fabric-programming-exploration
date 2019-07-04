package org.example;

import org.hyperledger.fabric.contract.Context;
import org.hyperledger.fabric.shim.ChaincodeStub;
import org.ledgerapi.StateList;

public class CommercialPaperContext extends Context {

    private StateList<CommercialPaper> paperList;

    public CommercialPaperContext(ChaincodeStub stub) {
        super(stub);

        this.paperList = new StateList<CommercialPaper>(this, CommercialPaper.class, "", "", "");
    }

    StateList<CommercialPaper> getPaperList() {
        return this.paperList;
    }

}
