import State from "../ledger-api/state";
/**
 * CommercialPaper class extends State class
 * Class will be used by application and smart contract to define a paper
 */
export default class CommercialPaper extends State {
    constructor(obj: any);
    /**
     * Getter $issuer
     * @return {string}
     */
    /**
    * Setter $issuer
    * @param {string} value
    */
    $issuer: string;
    /**
     * Getter $paperId
     * @return {string}
     */
    /**
    * Setter $paperId
    * @param {string} value
    */
    $paperId: string;
    /**
     * Getter $issueDateTime
     * @return {string}
     */
    /**
    * Setter $issueDateTime
    * @param {string} value
    */
    $issueDateTime: string;
    /**
     * Getter $faceValue
     * @return {number}
     */
    /**
    * Setter $faceValue
    * @param {number} value
    */
    $faceValue: number;
    /**
     * Getter $owner
     * @return {string}
     */
    /**
    * Setter $owner
    * @param {string} value
    */
    $owner: string;
    /**
     * Getter $maturityDateTime
     * @return {string}
     */
    /**
    * Setter $maturityDateTime
    * @param {string} value
    */
    $maturityDateTime: string;
    /**
     * Getter $state
     * @return {string}
     */
    /**
    * Setter $state
    * @param {string} value
    */
    $state: string;
    private paperId;
    private issueDateTime;
    private faceValue;
    private maturityDateTime;
    private issuer;
    private owner;
    private state;
}
