import * as uuid from 'uuid';
import JSONSerializer from '../ledger-api/jsonserializer';
import { Asset } from './adt/asset';
import { Business } from './adt/business';
import { Shipment } from './adt/shipment';
console.log('Creating a new Asset');

const asset = Asset.new(uuid.v4());
asset.$description = 'Very valuable antique S/390 mainframe';

const shipment = Shipment.new('00008');
shipment.$asset = asset;

shipment.$buisness = Business.new('AcmeInc');

const serializer = JSONSerializer.getSerializer<Shipment>(Shipment);
const buffer = serializer.toBuffer(shipment);

// -------------------------------------------
const sameAsset: Shipment = JSONSerializer.getSerializer<Shipment>(Shipment).fromBuffer(buffer);

console.log(sameAsset);
console.log(`Assets UUID is ${sameAsset.$asset}`);
