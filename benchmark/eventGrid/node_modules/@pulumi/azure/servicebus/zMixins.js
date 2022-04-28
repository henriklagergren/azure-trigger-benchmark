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
exports.ServiceBusFunction = exports.TopicEventSubscription = exports.QueueEventSubscription = void 0;
const pulumi = require("@pulumi/pulumi");
const _1 = require(".");
const appservice = require("../appservice");
_1.Queue.prototype.onEvent = function (name, args, opts) {
    const functionArgs = args instanceof Function
        ? { callback: args }
        : args;
    return new QueueEventSubscription(name, this, functionArgs, opts);
};
_1.Queue.prototype.getEventFunction = function (name, args) {
    const functionArgs = args instanceof Function
        ? { callback: args, queue: this }
        : Object.assign(Object.assign({}, args), { queue: this });
    return new ServiceBusFunction(name, functionArgs);
};
class QueueEventSubscription extends appservice.EventSubscription {
    constructor(name, queue, args, opts = {}) {
        const resourceGroupName = appservice.getResourceGroupName(args, queue.resourceGroupName);
        super("azure:servicehub:QueueEventSubscription", name, new ServiceBusFunction(name, Object.assign(Object.assign({}, args), { queue })), Object.assign(Object.assign({}, args), { resourceGroupName }), pulumi.mergeOptions(Object.assign({ parent: queue }, opts), { aliases: [{ type: "azure:eventhub:QueueEventSubscription" }] }));
        this.queue = queue;
        this.registerOutputs();
    }
}
exports.QueueEventSubscription = QueueEventSubscription;
_1.Topic.prototype.onEvent = function (name, args, opts) {
    const functionArgs = args instanceof Function
        ? { callback: args }
        : args;
    return new TopicEventSubscription(name, this, functionArgs, opts);
};
_1.Topic.prototype.getEventFunction = function (name, args) {
    return new ServiceBusFunction(name, Object.assign(Object.assign({}, args), { topic: this }));
};
class TopicEventSubscription extends appservice.EventSubscription {
    constructor(name, topic, args, opts = {}) {
        opts = Object.assign({ parent: topic }, opts);
        const resourceGroupName = appservice.getResourceGroupName(args, topic.resourceGroupName);
        const subscription = args.subscription || new _1.Subscription(name, {
            resourceGroupName,
            namespaceName: topic.namespaceName,
            topicName: topic.name,
            maxDeliveryCount: pulumi.output(args.maxDeliveryCount).apply(c => c === undefined ? 10 : c),
        }, opts);
        super("azure:servicehub:TopicEventSubscription", name, new ServiceBusFunction(name, Object.assign(Object.assign({}, args), { topic, subscription })), Object.assign(Object.assign({}, args), { resourceGroupName }), pulumi.mergeOptions(opts, {
            aliases: [{ type: "azure:eventhub:TopicEventSubscription" }]
        }));
        this.topic = topic;
        this.subscription = subscription;
        this.registerOutputs();
    }
}
exports.TopicEventSubscription = TopicEventSubscription;
/**
 * Azure Function triggered by a ServiceBus Topic.
 */
class ServiceBusFunction extends appservice.Function {
    constructor(name, args) {
        if (!args.queue && !args.topic) {
            throw new Error("Either [queue] or [topic] has to be specified");
        }
        if (args.queue && args.topic) {
            throw new Error("Either one of [queue] or [topic] has to be specified, not both");
        }
        if (args.queue && args.subscription) {
            throw new Error("[subscription] can't be specified in combination with [queue]");
        }
        if (args.topic && !args.subscription) {
            throw new Error("[subscription] must be specified in combination with [topic]");
        }
        const queueOrTopicId = (args.queue && args.queue.id) || args.topic.id;
        const namespaceName = (args.queue && args.queue.namespaceName) || args.topic.namespaceName;
        const resourceGroupName = (args.queue && args.queue.resourceGroupName) || args.topic.resourceGroupName;
        // The binding does not store the Service Bus connection string directly.  Instead, the
        // connection string is put into the app settings (under whatever key we want). Then, the
        // .connection property of the binding contains the *name* of that app setting key.
        const bindingConnectionKey = pulumi.interpolate `ServiceBus${namespaceName}ConnectionKey`;
        const trigger = {
            name: "message",
            direction: "in",
            type: "serviceBusTrigger",
            queueName: args.queue && args.queue.name,
            topicName: args.topic && args.topic.name,
            subscriptionName: args.subscription && args.subscription.name,
            connection: bindingConnectionKey,
        };
        // Fold the queue/topic ID into the all so we don't attempt to fetch the namespace until we're sure it has been created.
        const namespace = pulumi.all([namespaceName, resourceGroupName, queueOrTopicId])
            .apply(([namespaceName, resourceGroupName]) => (0, _1.getNamespace)({ name: namespaceName, resourceGroupName }));
        const appSettings = pulumi.all([namespace.defaultPrimaryConnectionString, bindingConnectionKey]).apply(([connectionString, key]) => ({ [key]: connectionString }));
        super(name, trigger, args, appSettings);
    }
}
exports.ServiceBusFunction = ServiceBusFunction;
//# sourceMappingURL=zMixins.js.map