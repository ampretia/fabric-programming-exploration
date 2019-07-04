// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var shipping_pb = require('./shipping_pb.js');

function serialize_shipping_Request(arg) {
  if (!(arg instanceof shipping_pb.Request)) {
    throw new Error('Expected argument of type shipping.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shipping_Request(buffer_arg) {
  return shipping_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shipping_Response(arg) {
  if (!(arg instanceof shipping_pb.Response)) {
    throw new Error('Expected argument of type shipping.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shipping_Response(buffer_arg) {
  return shipping_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProducerEndpointService = exports.ProducerEndpointService = {
  requestShipping: {
    path: '/shipping.ProducerEndpoint/RequestShipping',
    requestStream: false,
    responseStream: false,
    requestType: shipping_pb.Request,
    responseType: shipping_pb.Response,
    requestSerialize: serialize_shipping_Request,
    requestDeserialize: deserialize_shipping_Request,
    responseSerialize: serialize_shipping_Response,
    responseDeserialize: deserialize_shipping_Response,
  },
};

exports.ProducerEndpointClient = grpc.makeGenericClientConstructor(ProducerEndpointService);
