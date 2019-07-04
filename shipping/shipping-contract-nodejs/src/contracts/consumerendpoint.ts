import { Transaction } from 'fabric-contract-api';
import { Shipment } from 'shipping-adt';
import ShippingContext from './shippingcontext';
import ShippingContract from './shippingcontract';

export default class ConsumerEndpoint extends ShippingContract {

    @Transaction(false)
    public async queryExpectedShipments(ctx: ShippingContext): Promise<Shipment[]> {
        return null;
    }

    @Transaction()
    public async setShipmentReceived(ctx: ShippingContext, shipmentId: string): Promise<void> {
        return;
    }

}
