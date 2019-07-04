/*
 * SPDX-License-Identifier:
 */
package org.example;

import java.util.Iterator;

import org.hyperledger.fabric.contract.Context;
import org.hyperledger.fabric.contract.ContractInterface;
import org.hyperledger.fabric.contract.TransactionException;
import org.hyperledger.fabric.contract.annotation.Contract;
import org.hyperledger.fabric.contract.annotation.Default;
import org.hyperledger.fabric.contract.annotation.Transaction;
import org.hyperledger.fabric.shim.ChaincodeStub;

import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;

@Contract(name = "CommercialPaperContract", info = @Info(title = "CommercialPaper contract", description = "Commercial Paper Demo", version = "0.1.1", license = @License(name = "SPDX-License-Identifier: ", url = ""), contact = @Contact(email = "CommercialPaper@example.com", name = "CommercialPaper", url = "http://CommercialPaper.me")))
@Default
public class CommercialPaperContract implements ContractInterface {
    public CommercialPaperContract() {

    }

    @Override
    public Context createContext(ChaincodeStub stub) {
        return new CommercialPaperContext(stub);
    }

    @Transaction(submit = false)
    public boolean commercialPaperExists(CommercialPaperContext ctx, String commercialPaperId) {
        try {

            System.out.println(">> exists");
            CommercialPaper cp = ctx.getPaperList().get(commercialPaperId);
            return (cp != null);
        }
        catch (Throwable e){
            
            e.printStackTrace(System.out);
            throw new TransactionException(e);
        }
    }

    @Transaction()
    public CommercialPaper issue(CommercialPaperContext ctx, String commercialPaperId, String issuer,
            String issueDateTime, String maturityDateTime, int faceValue) {

        System.out.println(">> issue");
        boolean exists = commercialPaperExists(ctx, commercialPaperId);
        if (exists) {
            System.out.println(">>> Already exists");
            throw new TransactionException("The CommercialPaper " + commercialPaperId + " already exists");
        }
        CommercialPaper asset = new CommercialPaper();
        asset.setPaperId(commercialPaperId);
        asset.setIssuer(issuer);
        asset.setFaceValue(faceValue);
        asset.setIssueDateTime(issueDateTime);
        asset.setMaturityDateTime(maturityDateTime);
        asset.setOwner(issuer);

        asset.setState("ISSUED");
        ctx.getPaperList().add(asset);

        return asset;
    }

    @Transaction()
    public CommercialPaper buy(CommercialPaperContext ctx, String issuer, String paperNumber, String currentOwner, String newOwner, int price, String purchaseDateTime ){
        CommercialPaper paper = ctx.getPaperList().get(paperNumber);

        if (paper == null) {
            throw new TransactionException("The asset " + paperNumber + " does not exist");
        }

        // Validate current owner
        if (!paper.getOwner().equals(currentOwner)) {
            throw new TransactionException("The asset " + paperNumber + " is not owned by " + currentOwner);
        }

        // First buy moves state from ISSUED to TRADING
        if (paper.isIssued()) {
            paper.setState("TRADING");
        }

        // Check paper is not already REDEEMED
        if (paper.isTrading()) {
            paper.setOwner(newOwner);
        } else {
            throw new TransactionException("Paper " + issuer + paperNumber + " is not trading. Current state = " +paper.getState());
        }

        // Update the paper
        ctx.getPaperList().update(paper);
        return paper;
    }

    @Transaction()
    /**
     * Redeem commercial paper
     *
     * @param {Context} ctx the transaction context
     * @param {String} issuer commercial paper issuer
     * @param {Integer} paperNumber paper number for this issuer
     * @param {String} redeemingOwner redeeming owner of paper
     * @param {String} redeemDateTime time paper was redeemed
    */
    public CommercialPaper redeem(CommercialPaperContext ctx, String issuer,String paperNumber, String redeemingOwner, String redeemDateTime) {
        
        CommercialPaper paper = ctx.getPaperList().get(paperNumber);

        // Check paper is not REDEEMED
        if (paper.isRedeemed()) {
            throw new TransactionException("Paper " + issuer + paperNumber + " already redeemed");
        }

        // Verify that the redeemer owns the commercial paper before redeeming it
        if (paper.getOwner().equals(redeemingOwner)) {
            paper.setOwner(paper.getIssuer());
            paper.setState("REDEEMED");
        } else {
            throw new TransactionException("Redeeming owner does not own paper" + issuer + paperNumber);
        }

        // Update the paper
        ctx.getPaperList().update(paper);
        return paper;
    }

    @Transaction(submit = false)
    public void query(CommercialPaperContext ctx){
        try {
            Iterator<CommercialPaper> allcp = ctx.getPaperList().getIterator("0000","9999");
            allcp.forEachRemaining(System.out::println);    
        } catch (Throwable t){
            t.printStackTrace(System.out);
            throw new TransactionException(t);
        }
    }

    // Not used currently.
    // TODO: addin example of getting the identity and logging
    // @Override
    // public void afterTransaction(Context ctx, Object value) {
    //     System.out.println(">> Custom After Transaction function impl");
    // }

    // @Override
    // public void beforeTransaction(Context ctx) {
    //     System.out.println(">> Custom Before Transaction function impl");
    // }
}