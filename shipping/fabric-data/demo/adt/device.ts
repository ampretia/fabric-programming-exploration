import { Object, Property } from 'fabric-contract-api';
import { State } from '../../';

@Object()
export class Device extends State {

    public static new(deviceId: string): Device {
        const s = new Device();
        s.deviceId = deviceId;
        return s;
    }

    @Property()
    private deviceId: string;
    @Property()
    private details: string;
    @Property()
    private class: string;
    @Property()
    private code: string;

    private constructor() {
        // includes what the type of the primary key is
        super('Device', ['deviceId']);
    }
}
