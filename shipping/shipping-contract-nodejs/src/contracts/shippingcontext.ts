
import { StateList } from 'fabric-data';
import { FDMContext } from 'fabric-data';
import { Shipment } from 'shipping-adt';

/**
 * Define custom context for commercial paper by extending Fabric ContractAPI's Context class
 */
export default class ShippingContext extends FDMContext {

    public shippinglist: StateList<Shipment>;

    constructor() {
        super();
        this.shippinglist = new StateList<Shipment>(this, Shipment.prototype);
    }

}
