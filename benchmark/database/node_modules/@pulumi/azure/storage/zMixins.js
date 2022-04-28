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
exports.TableOutputBinding = exports.TableInputBinding = exports.QueueOutputBinding = exports.QueueFunction = exports.QueueEventSubscription = exports.BlobInputBinding = exports.BlobFunction = exports.BlobEventSubscription = exports.signedBlobReadUrl = void 0;
const pulumi = require("@pulumi/pulumi");
const container_1 = require("./container");
const queue_1 = require("./queue");
const table_1 = require("./table");
const appservice = require("../appservice");
const storage = require("../storage");
/**
 * Produce a URL with read-only access to a Storage Blob with a Shared Access Signature (SAS).
 * @param blob Blob to construct URL for.
 * @param account Storage account.
 */
function signedBlobReadUrl(blob, account) {
    // Choose a fixed, far-future expiration date for signed blob URLs. The shared access signature
    // (SAS) we generate for the Azure storage blob must remain valid for as long as the Function
    // App is deployed, since new instances will download the code on startup. By using a fixed
    // date, rather than (e.g.) "today plus ten years", the signing operation is idempotent.
    const signatureExpiration = "2100-01-01";
    return pulumi.all([account.name, account.primaryConnectionString, blob.storageContainerName, blob.name]).apply(([accountName, connectionString, containerName, blobName]) => __awaiter(this, void 0, void 0, function* () {
        const sas = yield storage.getAccountBlobContainerSAS({
            connectionString,
            containerName,
            start: "2019-01-01",
            expiry: signatureExpiration,
            permissions: {
                read: true,
                write: false,
                delete: false,
                list: false,
                add: false,
                create: false,
            },
        }, { async: true });
        return `https://${accountName}.blob.core.windows.net/${containerName}/${blobName}${sas.sas}`;
    }));
}
exports.signedBlobReadUrl = signedBlobReadUrl;
container_1.Container.prototype.onBlobEvent = function (name, args, opts) {
    const functionArgs = args instanceof Function
        ? { callback: args }
        : args;
    return new BlobEventSubscription(name, this, functionArgs, opts);
};
container_1.Container.prototype.input = function (name, args) {
    return new BlobInputBinding(name, this, args);
};
container_1.Container.prototype.getEventFunction = function (name, args) {
    const functionArgs = args instanceof Function
        ? { callback: args, container: this }
        : Object.assign(Object.assign({}, args), { container: this });
    return new BlobFunction(name, functionArgs);
};
class BlobEventSubscription extends appservice.EventSubscription {
    constructor(name, container, args, opts = {}) {
        var _a;
        const resourceGroupName = (_a = args.resourceGroupName) !== null && _a !== void 0 ? _a : resolveResourceGroupName(container);
        super("azure:storage:BlobEventSubscription", name, new BlobFunction(name, Object.assign(Object.assign({}, args), { container })), Object.assign(Object.assign({}, args), { resourceGroupName }), Object.assign({ parent: container }, opts));
        this.registerOutputs();
    }
}
exports.BlobEventSubscription = BlobEventSubscription;
/**
 * Azure Function triggered by changes in a Storage Blob Container.
 */
class BlobFunction extends appservice.Function {
    constructor(name, args) {
        const { connectionKey, settings } = resolveAccount(args.container);
        const prefix = args.filterPrefix || "";
        const suffix = args.filterSuffix || "";
        const path = pulumi.interpolate `${args.container.name}/${prefix}{blobName}${suffix}`;
        const trigger = {
            path,
            name: "blob",
            type: "blobTrigger",
            direction: "in",
            dataType: "binary",
            connection: connectionKey,
        };
        super(name, trigger, args, settings);
    }
}
exports.BlobFunction = BlobFunction;
class BlobInputBinding {
    constructor(name, container, args) {
        const { connectionKey, settings } = resolveAccount(container);
        const path = pulumi.interpolate `${container.name}/${args.blobName}`;
        this.binding = {
            name,
            type: "blob",
            direction: "in",
            dataType: "binary",
            path,
            connection: connectionKey,
        };
        this.settings = settings;
    }
}
exports.BlobInputBinding = BlobInputBinding;
;
queue_1.Queue.prototype.output = function (name) {
    return new QueueOutputBinding(name, this);
};
queue_1.Queue.prototype.onEvent = function (name, args, opts) {
    const functionArgs = args instanceof Function
        ? { callback: args }
        : args;
    return new QueueEventSubscription(name, this, functionArgs, opts);
};
queue_1.Queue.prototype.getEventFunction = function (name, args) {
    const functionArgs = args instanceof Function
        ? { callback: args, queue: this }
        : Object.assign(Object.assign({}, args), { queue: this });
    return new QueueFunction(name, functionArgs);
};
class QueueEventSubscription extends appservice.EventSubscription {
    constructor(name, queue, args, opts = {}) {
        var _a;
        opts = Object.assign({ parent: queue }, opts);
        const resourceGroupName = (_a = args.resourceGroupName) !== null && _a !== void 0 ? _a : resolveResourceGroupName(queue);
        super("azure:storage:QueueEventSubscription", name, new QueueFunction(name, Object.assign(Object.assign({}, args), { queue })), Object.assign(Object.assign({}, args), { resourceGroupName }), opts);
        this.registerOutputs();
    }
}
exports.QueueEventSubscription = QueueEventSubscription;
// Given a Queue or a Table, resolve the resource group name of the corresponding storage account
function resolveResourceGroupName(container) {
    const account = pulumi.all([container.id, container.storageAccountName]).apply(([_, storageAccountName]) => storage.getAccount({ name: storageAccountName }, { async: true }));
    return account.resourceGroupName;
}
// Given a Queue or a Table, produce App Settings and a Connection String Key relevant to the Storage Account
function resolveAccount(container) {
    const connectionKey = pulumi.interpolate `Storage${container.storageAccountName}ConnectionStringKey`;
    const account = pulumi.all([container.id, container.storageAccountName]).apply(([_, storageAccountName]) => storage.getAccount({ name: storageAccountName }, { async: true }));
    const settings = pulumi.all([account.primaryConnectionString, connectionKey]).apply(([connectionString, key]) => ({ [key]: connectionString }));
    return { connectionKey, settings };
}
/**
 * Azure Function triggered by a Storage Queue.
 */
class QueueFunction extends appservice.Function {
    constructor(name, args) {
        const { connectionKey, settings } = resolveAccount(args.queue);
        const trigger = {
            name: "queue",
            type: "queueTrigger",
            direction: "in",
            dataType: args.dataType || "string",
            queueName: args.queue.name,
            connection: connectionKey,
        };
        super(name, trigger, args, settings);
    }
}
exports.QueueFunction = QueueFunction;
/**
 * Azure Function's output binding that sends messages to a Storage Queue.
 */
class QueueOutputBinding {
    constructor(name, queue) {
        const { connectionKey, settings } = resolveAccount(queue);
        this.binding = {
            name,
            type: "queue",
            direction: "out",
            queueName: queue.name,
            connection: connectionKey,
        };
        this.settings = settings;
    }
}
exports.QueueOutputBinding = QueueOutputBinding;
class TableInputBinding {
    constructor(name, table, args) {
        const { connectionKey, settings } = resolveAccount(table);
        this.binding = Object.assign({ name, type: "table", direction: "in", tableName: table.name, connection: connectionKey }, args);
        this.settings = settings;
    }
}
exports.TableInputBinding = TableInputBinding;
class TableOutputBinding {
    constructor(name, table) {
        const { connectionKey, settings } = resolveAccount(table);
        this.binding = {
            name,
            type: "table",
            direction: "out",
            tableName: table.name,
            connection: connectionKey,
        };
        this.settings = settings;
    }
}
exports.TableOutputBinding = TableOutputBinding;
table_1.Table.prototype.input = function (name, args) {
    return new TableInputBinding(name, this, args);
};
table_1.Table.prototype.output = function (name) {
    return new TableOutputBinding(name, this);
};
//# sourceMappingURL=zMixins.js.map