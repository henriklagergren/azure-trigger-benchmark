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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.events = exports.EventGridCallbackSubscription = exports.EventGridFunction = void 0;
const pulumi = require("@pulumi/pulumi");
const node_fetch_1 = require("node-fetch");
const appservice = require("../appservice");
const eventSubscription_1 = require("./eventSubscription");
/**
 * Azure Function triggered by a Event Grid Topic.
 */
class EventGridFunction extends appservice.Function {
    constructor(name, args) {
        const trigger = {
            name: "message",
            direction: "in",
            type: "eventGridTrigger",
        };
        super(name, trigger, args);
    }
}
exports.EventGridFunction = EventGridFunction;
/**
 * A callback-based subscription to events coming from Event Grid. Creates an Azure Function and
 * an Event Grid Event Subscription with the webhook URL pointing to the Azure Function.
 */
class EventGridCallbackSubscription extends appservice.EventSubscription {
    constructor(name, scope, args, opts = {}) {
        const resourceGroupName = appservice.getResourceGroupName(args, pulumi.output(scope.resourceGroupName));
        super("azure:eventgrid:EventGridCallbackSubscription", name, new EventGridFunction(name, args), Object.assign(Object.assign({}, args), { resourceGroupName }), pulumi.mergeOptions(opts, {
            aliases: [{ type: "azure:eventhub:EventGridCallbackSubscription" }],
        }));
        const key = retrieveEventGridKey(this.functionApp, 30 /* 5 minutes */);
        const url = pulumi.interpolate `https://${this.functionApp.defaultHostname}/runtime/webhooks/eventgrid?functionName=${name}&code=${key}`;
        const liveUrl = url.apply(u => waitUntilEndpointIsUp(this, u));
        this.subscription = new eventSubscription_1.EventSubscription(name, Object.assign({ webhookEndpoint: { url: liveUrl }, scope: scope.id }, args), Object.assign(Object.assign({}, opts), { parent: this }));
        this.registerOutputs();
    }
}
exports.EventGridCallbackSubscription = EventGridCallbackSubscription;
function retrieveEventGridKey(functionApp, attempts) {
    return functionApp.getHostKeys().apply((ks) => __awaiter(this, void 0, void 0, function* () {
        const k = ks.systemKeys["eventgrid_extension"];
        if (k)
            return pulumi.output(k);
        if (attempts === 0) {
            throw new Error("timed out waiting for Webhook to become up");
        }
        // Wait for 10s between polls
        pulumi.log.info(`Waiting for 'eventgrid_extension' key to become available (${attempts})`, functionApp);
        yield new Promise(r => setTimeout(r, 10000));
        return retrieveEventGridKey(functionApp, attempts - 1);
    })).apply(v => v);
}
function waitUntilEndpointIsUp(resource, url) {
    return __awaiter(this, void 0, void 0, function* () {
        if (pulumi.runtime.isDryRun()) {
            return url;
        }
        // Prepare a sample webhook validation call.
        const headers = { "aeg-event-type": "SubscriptionValidation" };
        const body = "[{ \"data\": { \"validationCode\": \"pulumi-create\" }, \"eventType\": \"Microsoft.EventGrid.SubscriptionValidationEvent\" }]";
        // Wait for up to 5 minutes
        for (let i = 0; i < 30; i++) {
            let status;
            try {
                const response = yield (0, node_fetch_1.default)(url, { method: "POST", headers, body });
                if (response.ok) {
                    return url;
                }
                status = `${response.status}: ${response.statusText}`;
            }
            catch (e) {
                status = `Error: ${e}`;
            }
            pulumi.log.info(`Waiting for Webhook ${url} to become available (${status}, ${i})`, resource);
            // Wait for 10s between polls
            yield new Promise(r => setTimeout(r, 10000));
        }
        throw new Error("timed out waiting for Webhook to become up");
    });
}
/**
 * Contains hooks to subscribe to different kinds of Event Grid events.
 */
var events;
(function (events) {
    /**
     * Creates a new subscription to events fired from Event Grid. The callback is executed whenever
     * a new Blob is created in a container of the Storage Account.
     */
    function onGridBlobCreated(name, args, opts) {
        return new EventGridCallbackSubscription(name, args.storageAccount, Object.assign(Object.assign({}, args), { includedEventTypes: ["Microsoft.Storage.BlobCreated"] }), Object.assign({ parent: args.storageAccount }, opts));
    }
    events.onGridBlobCreated = onGridBlobCreated;
    /**
     * Creates a new subscription to events fired from Event Grid. The callback is executed whenever
     * a Blob is deleted from a container of the Storage Account.
     */
    function onGridBlobDeleted(name, args, opts) {
        return new EventGridCallbackSubscription(name, args.storageAccount, Object.assign(Object.assign({}, args), { includedEventTypes: ["Microsoft.Storage.BlobDeleted"] }), Object.assign({ parent: args.storageAccount }, opts));
    }
    events.onGridBlobDeleted = onGridBlobDeleted;
    /**
     * Creates a new subscription to events fired from Event Grid. The callback is executed whenever
     * an event associated with the Resource Group fires.
     */
    function onResourceGroupEvent(name, args, opts) {
        return new EventGridCallbackSubscription(name, { id: args.resourceGroup.id, resourceGroupName: args.resourceGroup.name }, args, Object.assign({ parent: args.resourceGroup }, opts));
    }
    events.onResourceGroupEvent = onResourceGroupEvent;
    ;
})(events = exports.events || (exports.events = {}));
//# sourceMappingURL=zMixins.js.map