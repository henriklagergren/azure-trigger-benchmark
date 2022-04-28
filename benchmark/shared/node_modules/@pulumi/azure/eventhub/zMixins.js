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
exports.events = exports.EventGridCallbackSubscription = exports.EventGridFunction = exports.TopicEventSubscription = exports.ServiceBusFunction = exports.QueueEventSubscription = exports.EventHubFunction = exports.DefaultConsumerGroup = exports.EventHubSubscription = void 0;
const pulumi = require("@pulumi/pulumi");
const _1 = require(".");
const _2 = require(".");
const eventgrid = require("../eventgrid");
const servicebus = require("../servicebus");
const appservice = require("../appservice");
_2.EventHub.prototype.onEvent = function (name, args, opts) {
    const functionArgs = args instanceof Function
        ? { callback: args }
        : args;
    return new EventHubSubscription(name, this, functionArgs, opts);
};
_2.EventHub.prototype.getEventFunction = function (name, args) {
    const functionArgs = args instanceof Function
        ? { callback: args, eventHub: this }
        : Object.assign(Object.assign({}, args), { eventHub: this });
    return new EventHubFunction(name, functionArgs);
};
class EventHubSubscription extends appservice.EventSubscription {
    constructor(name, eventHub, args, opts = {}) {
        opts = Object.assign({ parent: eventHub }, opts);
        const resourceGroupName = appservice.getResourceGroupName(args, eventHub.resourceGroupName);
        super("azure:eventhub:EventHubSubscription", name, new EventHubFunction(name, Object.assign(Object.assign({}, args), { eventHub })), Object.assign(Object.assign({}, args), { resourceGroupName }), opts);
        this.eventHub = eventHub;
        this.consumerGroup = args.consumerGroup;
        this.registerOutputs();
    }
}
exports.EventHubSubscription = EventHubSubscription;
exports.DefaultConsumerGroup = "$Default";
/**
 * Azure Function triggered by an Event Hub.
 */
class EventHubFunction extends appservice.Function {
    constructor(name, args) {
        // The event hub binding does not store the Event Hubs connection string directly.  Instead, the
        // connection string is put into the app settings (under whatever key we want). Then, the
        // .connection property of the binding contains the *name* of that app setting key.
        const bindingConnectionKey = pulumi.interpolate `EventHub${args.eventHub.namespaceName}ConnectionKey`;
        const trigger = {
            name: "eventHub",
            direction: "in",
            type: "eventHubTrigger",
            eventHubName: args.eventHub.name,
            consumerGroup: args.consumerGroup !== undefined ? args.consumerGroup.name : exports.DefaultConsumerGroup,
            cardinality: args.cardinality,
            connection: bindingConnectionKey,
        };
        // Fold the event hub ID into the all so we don't attempt to fetch the namespace until we're sure it has been created.
        const namespace = pulumi.all([args.eventHub.namespaceName, args.eventHub.resourceGroupName, args.eventHub.id])
            .apply(([namespaceName, resourceGroupName]) => (0, _2.getEventhubNamespace)({ name: namespaceName, resourceGroupName }));
        // Place the mapping from the well known key name to the Event Hubs account connection string in
        // the 'app settings' object.
        const appSettings = pulumi.all([namespace.defaultPrimaryConnectionString, bindingConnectionKey]).apply(([connectionString, key]) => ({ [key]: connectionString }));
        super(name, trigger, args, appSettings);
    }
}
exports.EventHubFunction = EventHubFunction;
// Legacy exports we keep around for compat.  All of these forward to the respective
// functionality in their new module locations.
// Re-export these classes so we get the value *and* type side of things.
const servicebus_1 = require("../servicebus");
Object.defineProperty(exports, "QueueEventSubscription", { enumerable: true, get: function () { return servicebus_1.QueueEventSubscription; } });
Object.defineProperty(exports, "ServiceBusFunction", { enumerable: true, get: function () { return servicebus_1.ServiceBusFunction; } });
Object.defineProperty(exports, "TopicEventSubscription", { enumerable: true, get: function () { return servicebus_1.TopicEventSubscription; } });
_1.Queue.prototype.onEvent = servicebus.Queue.prototype.onEvent;
_1.Queue.prototype.getEventFunction = servicebus.Queue.prototype.getEventFunction;
_1.Topic.prototype.onEvent = servicebus.Topic.prototype.onEvent;
_1.Topic.prototype.getEventFunction = servicebus.Topic.prototype.getEventFunction;
var eventgrid_1 = require("../eventgrid");
Object.defineProperty(exports, "EventGridFunction", { enumerable: true, get: function () { return eventgrid_1.EventGridFunction; } });
Object.defineProperty(exports, "EventGridCallbackSubscription", { enumerable: true, get: function () { return eventgrid_1.EventGridCallbackSubscription; } });
/**
 * Contains hooks to subscribe to different kinds of Event Grid events.
 */
var events;
(function (events) {
    /**
     * @deprecated This function has moved to the [eventgrid] module.
     */
    events.onGridBlobCreated = eventgrid.events.onGridBlobCreated;
    /**
     * @deprecated This function has moved to the [eventgrid] module.
     */
    events.onGridBlobDeleted = eventgrid.events.onGridBlobDeleted;
    /**
     * @deprecated This function has moved to the [eventgrid] module.
     */
    events.onResourceGroupEvent = eventgrid.events.onResourceGroupEvent;
})(events = exports.events || (exports.events = {}));
//# sourceMappingURL=zMixins.js.map