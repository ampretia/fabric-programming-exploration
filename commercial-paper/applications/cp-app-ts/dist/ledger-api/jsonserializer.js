"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
class JSONSerializer {
    constructor(type) {
        this.cnstr = type.constructor;
    }
    static getSerializer(type) {
        return new JSONSerializer(type.prototype);
    }
    fromBuffer(buffer) {
        const json = JSON.parse(buffer.toString('utf8'));
        const object = class_transformer_1.plainToClass(this.cnstr, json);
        return object;
    }
    toBuffer(state) {
        return Buffer.from(JSON.stringify(class_transformer_1.classToPlain(state)));
    }
}
exports.default = JSONSerializer;
//# sourceMappingURL=jsonserializer.js.map