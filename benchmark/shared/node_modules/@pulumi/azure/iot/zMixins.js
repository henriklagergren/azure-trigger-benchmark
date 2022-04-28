"use strict";
// Copyright 2016-2018, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoTHubFunction = exports.IoTHubEventSubscription = void 0;
const pulumi = require("@pulumi/pulumi");
const appservice = require("../appservice");
const ioTHub_1 = require("./ioTHub");
const eventhub_1 = require("../eventhub");
ioTHub_1.IoTHub.prototype.onEvent = function (name, args, opts) {
    const functionArgs = args instanceof Function
        ? { callback: args }
        : args;
    return new IoTHubEventSubscription(name, this, functionArgs, opts);
};
ioTHub_1.IoTHub.prototype.getEventFunction = function (name, args) {
    const functionArgs = args instanceof Function
        ? { callback: args, iotHub: this }
        : Object.assign(Object.assign({}, args), { iotHub: this });
    return new IoTHubFunction(name, functionArgs);
};
class IoTHubEventSubscription extends appservice.EventSubscription {
    constructor(name, iotHub, args, opts = {}) {
        const resourceGroupName = appservice.getResourceGroupName(args, iotHub.resourceGroupName);
        super("azure:eventhub:IoTHubEventSubscription", name, new IoTHubFunction(name, Object.assign(Object.assign({}, args), { iotHub })), Object.assign(Object.assign({}, args), { resourceGroupName }), Object.assign({ parent: iotHub }, opts));
        this.iotHub = iotHub;
        this.registerOutputs();
    }
}
exports.IoTHubEventSubscription = IoTHubEventSubscription;
/**
 * Azure Function triggered by an IoT Hub.
 */
class IoTHubFunction extends appservice.Function {
    constructor(name, args) {
        // The event hub binding does not store the Event Hubs connection string directly.  Instead, the
        // connection string is put into the app settings (under whatever key we want). Then, the
        // .connection property of the binding contains the *name* of that app setting key.
        const bindingConnectionKey = pulumi.interpolate `IoTHub${args.iotHub.name}ConnectionKey`;
        const trigger = {
            name: "eventHub",
            direction: "in",
            type: "eventHubTrigger",
            eventHubName: args.iotHub.name,
            consumerGroup: args.consumerGroup ? args.consumerGroup.name : eventhub_1.DefaultConsumerGroup,
            cardinality: args.cardinality,
            connection: bindingConnectionKey,
        };
        pulumi.all([args.iotHub.fallbackRoute, args.iotHub.routes]).apply(([fallbackRoute, routes]) => {
            if (fallbackRoute && fallbackRoute.enabled) {
                return;
            }
            if (routes && routes.length > 0) {
                return;
            }
            throw new pulumi.ResourceError("IoT Hub must have a route or fallback route enabled.", args.iotHub);
        });
        // Place the mapping from the well known key name to the Event Hubs account connection string in
        // the 'app settings' object.
        // The connection string is built from the IoT Hub "event hub compatible endpoint"
        // and the iothubowner access policy key
        // see https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-messages-read-builtin
        const appSettings = pulumi.all([args.iotHub.eventHubEventsEndpoint, args.iotHub.sharedAccessPolicies, bindingConnectionKey]).apply(([eventHubEventsEndpoint, sharedAccessPolicies, key]) => ({
            [key]: `Endpoint=${eventHubEventsEndpoint};SharedAccessKeyName=iothubowner;SharedAccessKey=${sharedAccessPolicies.find(p => p.keyName === "iothubowner").primaryKey}`
        }));
        super(name, trigger, args, appSettings);
    }
}
exports.IoTHubFunction = IoTHubFunction;
//# sourceMappingURL=zMixins.js.map