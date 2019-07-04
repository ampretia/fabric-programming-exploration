import { Shipment, Transport } from 'shipping-adt';
import ShippingContext from './shippingcontext';
import ShippingContract from './shippingcontract';

export default class AgentContract extends ShippingContract {

    public async queryRequestedShipments(): Promise<Shipment[]> {
        return null;
    }

    public async setTransport(ctx: ShippingContext, shippingId: string, transportId: string): Promise<void>  {
        return;
    }

    public async addTransport(ctx: ShippingContext, transport: Transport): Promise<void> {
        return;
    }
}
