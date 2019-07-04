/* tslint:disable */
import { Returns, Transaction } from 'fabric-contract-api';
import { StateList } from 'fabric-data';
import { Asset, Business, Shipment } from 'shipping-adt';
import ShippingContext from './shippingcontext';
import ShippingContract from './shippingcontract';

export default class ProducerEndpoint extends ShippingContract {

    @Transaction()
    public async requestShipment(ctx: ShippingContext, asset: Asset, consumer: Business): Promise<string> {
        const shipmentId = `${asset.$assetId}-${consumer.$name}`;

        const shipment = Shipment.new(shipmentId);
        shipment.$asset = asset;
        shipment.$buisness = consumer;

        ctx.shippinglist.addState(shipment);

        return shipmentId;
    }

    @Transaction(false)
    @Returns('Shipment[]')
    public async queryShipments(ctx: ShippingContext): Promise<Shipment[]> {
        const slist: Shipment[] = await ctx.shippinglist.getAllStates();
        return slist;
    }

    @Transaction(false)
    @Returns('Shipment')
    public async queryShipment(ctx: ShippingContext, shipmentId: string): Promise<Shipment> {
        const s: Shipment = await ctx.shippinglist.getState(shipmentId);
        return s;
    }
    
    public async kitchenSink(ctx: ShippingContext): Promise<void> {
        //
        const collectionO1O2: string = 'Org1-Org2-Shipments';

        // tslint:disable-file

        // determine which collecition to access 

        shipmentList.setCollection(WORD_STATE);
        shipmentList.setCollection(collectionO1O2);

        // fix the domain version that this using;
        // 
        shipmentList.setDomainVersion(DOMAIN_VERSION_IDENTIFIER)

        shipmentList.setGeneration('inflight');
        shipmentList.setGeneration('archive');

        shipmentList.getAllStates();
        shipmentList.getState();
        shipmentList.updateState();
        shipmentList.addState();


        // State-based endorsement here
        shipmentList.protectState()

    }


}
