/*
 * SPDX-License-Identifier: Apache-2.0
 */

import AgentContract from './contracts/agentendpoint';
import ConsumerEndpoint from './contracts/consumerendpoint';
import ProducerEndpoint from './contracts/producerendpoint';
import ShippingContract from './contracts/shippingcontract';

export * from 'shipping-adt';
export * from './contracts/testtypes';
import * as test from './contracts/testtypes';

export const contracts: any[] = [ProducerEndpoint, ConsumerEndpoint, AgentContract, ShippingContract];

// import CustomJSONSerializer from './customjsonserializer';
// export const serializers: any = {
//     transaction: 'jsonSerializer',
//     serializers: {
//         jsonSerializer : CustomJSONSerializer
//     }
// }
