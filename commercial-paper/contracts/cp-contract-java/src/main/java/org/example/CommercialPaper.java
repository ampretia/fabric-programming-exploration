/*
 * SPDX-License-Identifier:
 */

package org.example;

import org.hyperledger.fabric.contract.annotation.DataType;
import org.hyperledger.fabric.contract.annotation.Property;
import org.ledgerapi.State;
import org.json.JSONPropertyIgnore;

@DataType()
public class CommercialPaper extends State {

    // TODO: Issue to fix on the subject of enumerations
    // Enumerate commercial paper state values
    // @DataType()
    // public enum CPState {
    //     ISSUED, TRADING, REDEEMED
    // };

    @Property()
    private String  state;

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    @JSONPropertyIgnore()
    public boolean isIssued() {
        return this.state.equals("ISSUED");
    }

    @JSONPropertyIgnore()
    public boolean isTrading() {
        return this.state.equals("TRADING");
    }

    @JSONPropertyIgnore()
    public boolean isRedeemed() {
        return this.state.equals("ISSUED");
    }

    @Property()
    private String paperId;

    @Property()
    private String issuer;

    @Property()
    private String issueDateTime;

    @Property()
    private int faceValue;

    @Property()
    private String maturityDateTime;

    @Property()
    private String owner;

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public CommercialPaper() {
        //TODO: move the paperId here to be part of the annotation
        super(CommercialPaper.class, new String[] { "paperId" });
    }

    public String getPaperId() {
        return paperId;
    }

    public void setPaperId(String paperId) {
        this.paperId = paperId;
    }

    public String getIssuer() {
        return issuer;
    }

    public void setIssuer(String issuer) {
        this.issuer = issuer;
    }

    public String getIssueDateTime() {
        return issueDateTime;
    }

    public void setIssueDateTime(String issueDateTime) {
        this.issueDateTime = issueDateTime;
    }

    public int getFaceValue() {
        return faceValue;
    }

    public void setFaceValue(int faceValue) {
        this.faceValue = faceValue;
    }

    public String getMaturityDateTime() {
        return maturityDateTime;
    }

    public void setMaturityDateTime(String maturityDateTime) {
        this.maturityDateTime = maturityDateTime;
    }

    public String toString(){
        return "Paper::"+this.getPaperId()+" "+getIssuer()+" "+getFaceValue();
    }
}
