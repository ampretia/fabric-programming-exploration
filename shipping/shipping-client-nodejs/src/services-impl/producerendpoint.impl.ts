
import { Asset, Business, Shipment } from 'shipping-adt';
import Service from '../services/service';

export default class ProducerEndpoint extends Service {

    public constructor(gateway, schema) {
        super(gateway, schema);
    }

    public async init(name: string): Promise<void> {
        return super.init(name, 'ProducerEndpoint');
    }

    public async requestShipment(asset: Asset, consumer: Business): Promise<string> {
        return super.submitTx('requestShipment', asset, consumer);
    }

    public async queryShipments(): Promise<Shipment[]> {
        throw new Error('Method not implemented.');
    }

    public async queryShipment(shipmentId: string): Promise<Shipment> {
        return super.evaluateTx('queryShipment', shipmentId);
    }

}
