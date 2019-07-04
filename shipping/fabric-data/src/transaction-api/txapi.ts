
export default class TransactionAPI {

    private args;
    private bufferArgs;
    private txId;

    private channelId: any;
    private txTimestamp: any;
    private creator: any;
    private transientMap: any;

    constructor() {
        //
    }

    /**
     * Parse the fcn name to be name and function.  These are separated by a :
     * Anything after the : is treated as the function name
     * No : implies that the whole string is a function name
     *
     * @param {String} fcn the combined function and name string
     * @return {Object} split into name and string
     */
    public _splitFunctionName(fcn) {
        // Did consider using a split(':') call to do this; however I chose regular expression for
        // the reason that it provides definitive description.
        // Split will just split - you would then need to write the code to handle edge cases
        // for no input, for multiple :, for multiple : without intervening characters
        // https://regex101.com/ is very useful for understanding

        const regex = /([^:]*)(?::|^)(.*)/g;
        const result = { contractName: '', function: '' };

        const m = regex.exec(fcn);
        result.contractName = m[1];
        result.function = m[2];

        return result;
    }

    /**
     * Returns the arguments as array of strings from the chaincode invocation request
     * @returns {string[]}
     */
    public getStringArgs(): string[] {
        return this.args;
    }

    public getBufferArgs(): Buffer[] {
        return this.bufferArgs;
    }

    public getFunctionName(): string {
        return 'name';
    }

    /**
     * Returns the transaction ID for the current chaincode invocation request. The transaction
     * ID uniquely identifies the transaction within the scope of the channel.
     */
    public getTxID() {
        return this.txId;
    }

    /**
     * Returns the channel ID for the proposal for chaincode to process.
     * This would be the 'channel_id' of the transaction proposal (see ChannelHeader
     * in protos/common/common.proto) except where the chaincode is calling another on
     * a different channel.
     */
    public getChannelID() {
        return this.channelId;
    }

    /**
     * Returns the timestamp when the transaction was created. This
     * is taken from the transaction {@link ChannelHeader}, therefore it will indicate the
     * client's timestamp, and will have the same value across all endorsers.
     */
    public getTxTimestamp() {
        return this.txTimestamp;
    }

    /**
     * Returns the identity object of the chaincode invocation's submitter
     * @returns {ProposalCreator}
     */
    public getCreator() {
        return this.creator;
    }

    /**
     * Returns the transient map that can be used by the chaincode but not
     * saved in the ledger, such as cryptographic information for encryption and decryption
     * @returns {Map<string:Buffer>}
     */
    public getTransient() {
        return this.transientMap;
    }

}
