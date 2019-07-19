/*
SPDX-License-Identifier: Apache-2.0
*/

'use strict';

import { DataType, Property, State } from 'fabric-data';
// Utility class for ledger state


// // Enumerate commercial paper state values
// const cpState = {
//     ISSUED: 1,
//     TRADING: 2,
//     REDEEMED: 3
// };

/**
 * CommercialPaper class extends State class
 * Class will be used by application and smart contract to define a paper
 */
@DataType()
export default class CommercialPaper extends State {

    constructor(obj) {
        super();
        Object.assign(this, obj);
    }

    /**
     * Getter $issuer
     * @return {string}
     */
    public get $issuer(): string {
        return this.issuer;
    }

    /**
     * Setter $issuer
     * @param {string} value
     */
    public set $issuer(value: string) {
        this.issuer = value;
    }

    /**
     * Getter $paperId
     * @return {string}
     */
    public get $paperId(): string {
        return this.paperId;
    }

    /**
     * Setter $paperId
     * @param {string} value
     */
    public set $paperId(value: string) {
        this.paperId = value;
    }

    /**
     * Getter $issueDateTime
     * @return {string}
     */
    public get $issueDateTime(): string {
        return this.issueDateTime;
    }

    /**
     * Setter $issueDateTime
     * @param {string} value
     */
    public set $issueDateTime(value: string) {
        this.issueDateTime = value;
    }

    /**
     * Getter $faceValue
     * @return {number}
     */
    public get $faceValue(): number {
        return this.faceValue;
    }

    /**
     * Setter $faceValue
     * @param {number} value
     */
    public set $faceValue(value: number) {
        this.faceValue = value;
    }

    /**
     * Getter $owner
     * @return {string}
     */
    public get $owner(): string {
        return this.owner;
    }

    /**
     * Setter $owner
     * @param {string} value
     */
    public set $owner(value: string) {
        this.owner = value;
    }

    /**
     * Getter $maturityDateTime
     * @return {string}
     */
    public get $maturityDateTime(): string {
        return this.maturityDateTime;
    }

    /**
     * Setter $maturityDateTime
     * @param {string} value
     */
    public set $maturityDateTime(value: string) {
        this.maturityDateTime = value;
    }

    /**
     * Getter $state
     * @return {string}
     */
    public get $state(): string {
        return this.state;
    }

    /**
     * Setter $state
     * @param {string} value
     */
    public set $state(value: string) {
        this.state = value;
    }

    @Property()
    private paperId: string;

    @Property()
    private issueDateTime: string;

    @Property()
    private faceValue: number;

    @Property()
    private maturityDateTime: string;

    @Property()
    private issuer: string;

    @Property()
    private owner: string;

    @Property()
    private state: string;

}

