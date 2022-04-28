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
exports.getResourceGroupName = exports.EventSubscription = exports.MultiCallbackFunctionApp = exports.ArchiveFunctionApp = exports.PackagedFunctionApp = exports.CallbackFunctionApp = exports.Function = void 0;
const pulumi = require("@pulumi/pulumi");
const ms_rest_azure_js_1 = require("@azure/ms-rest-azure-js");
const functionApp_1 = require("./functionApp");
const appservice = require("../appservice");
const core = require("../core");
const util = require("../util");
function serializeFunctionCallback(args) {
    if (args.callback && args.callbackFactory) {
        throw new Error("Cannot provide both [callback] and [callbackFactory]");
    }
    if (!args.callback && !args.callbackFactory) {
        throw new Error("One of [callback] or [callbackFactory] must be provided.");
    }
    const func = args.callback
        ? redirectConsoleOutput(args.callback)
        : () => redirectConsoleOutput(args.callbackFactory());
    return pulumi.runtime.serializeFunction(func, {
        isFactoryFunction: !!args.callbackFactory,
        allowSecrets: true,
    });
}
function produceDeploymentArchive(args) {
    const deploymentArchivePromise = produceDeploymentArchiveAsync(args);
    const ret = pulumi.output(deploymentArchivePromise.then(d => d.archive));
    ret.isSecret = deploymentArchivePromise.then(d => d.containsSecrets);
    return ret;
}
function produceDeploymentArchiveAsync(args) {
    return __awaiter(this, void 0, void 0, function* () {
        const map = {};
        map["host.json"] = new pulumi.asset.StringAsset(JSON.stringify(Object.assign({ version: "2.0", tracing: { consoleLevel: "verbose" }, extensionBundle: {
                id: "Microsoft.Azure.Functions.ExtensionBundle",
                version: "[1.*, 2.0.0)"
            } }, args.hostSettings)));
        const pathSet = yield pulumi.runtime.computeCodePaths(args.codePathOptions);
        for (const [path, value] of pathSet.entries()) {
            map[path] = value;
        }
        let containsSecrets = false;
        for (const func of args.functions) {
            map[`${func.name}/function.json`] = pulumi.output(func.bindings).apply(bs => new pulumi.asset.StringAsset(JSON.stringify({
                disabled: false,
                bindings: bs,
            })));
            const body = yield serializeFunctionCallback(func.callback);
            containsSecrets = containsSecrets || body.containsSecrets;
            map[`${func.name}/index.js`] = new pulumi.asset.StringAsset(`module.exports = require("./handler").handler`);
            map[`${func.name}/handler.js`] = new pulumi.asset.StringAsset(body.text);
        }
        return {
            archive: new pulumi.asset.AssetArchive(map),
            containsSecrets: containsSecrets,
        };
    });
}
function combineFunctionAppSettings(args) {
    const applicationSetting = args.appSettings || {};
    const perFunctionSettings = args.functions !== undefined ? args.functions.map(c => c.appSettings || {}) : [];
    return combineAppSettings([{ FUNCTIONS_WORKER_RUNTIME: "node" }, applicationSetting, ...perFunctionSettings]);
}
function redirectConsoleOutput(callback) {
    return (context, event, ...inputs) => {
        // Redirect console logging to context logging.
        console.log = context.log;
        console.error = context.log.error;
        console.warn = context.log.warn;
        // tslint:disable-next-line:no-console
        console.info = context.log.info;
        return callback(context, event, ...inputs);
    };
}
/**
 * Azure Function base class.
 */
class Function {
    constructor(name, trigger, args, settings) {
        const triggerSettings = { binding: trigger, settings: settings || {} };
        const { bindings, appSettings } = combineBindingSettings(triggerSettings, args.inputs, args.outputs);
        this.name = name;
        this.bindings = bindings;
        this.callback = args;
        this.appSettings = appSettings;
    }
}
exports.Function = Function;
;
;
function createFunctionAppParts(name, args, opts = {}) {
    if (!args.archive) {
        throw new Error("Deployment [archive] must be provided.");
    }
    const resourceGroupName = getResourceGroupName(args, undefined);
    const resourceGroupArgs = { resourceGroupName, location: args.location };
    const plan = args.plan || new appservice.Plan(name, Object.assign(Object.assign({}, resourceGroupArgs), { kind: "FunctionApp", sku: {
            tier: "Dynamic",
            size: "Y1",
        } }), opts);
    const storageMod = require("../storage");
    const account = args.account || new storageMod.Account(makeSafeStorageAccountName(name), Object.assign(Object.assign({}, resourceGroupArgs), { accountKind: "StorageV2", accountTier: "Standard", accountReplicationType: "LRS" }), opts);
    const container = args.container || new storageMod.Container(makeSafeStorageContainerName(name), {
        storageAccountName: account.name,
        containerAccessType: "private",
    }, opts);
    const zipBlob = new storageMod.Blob(name, {
        storageAccountName: account.name,
        storageContainerName: container.name,
        type: "Block",
        source: args.archive,
    }, opts);
    const codeBlobUrl = storageMod.signedBlobReadUrl(zipBlob, account);
    const functionArgs = Object.assign(Object.assign(Object.assign({}, args), resourceGroupArgs), { appServicePlanId: plan.id, storageAccountName: account.name, storageAccountAccessKey: account.primaryAccessKey, version: args.version || "~3", appSettings: pulumi.output(args.appSettings).apply(settings => {
            return Object.assign(Object.assign({}, settings), { WEBSITE_RUN_FROM_PACKAGE: codeBlobUrl, WEBSITE_NODE_DEFAULT_VERSION: util.ifUndefined(args.nodeVersion, "~12") });
        }) });
    const routePrefix = args.hostSettings
        && args.hostSettings.extensions
        && args.hostSettings.extensions.http
        && args.hostSettings.extensions.http.routePrefix;
    const rootPath = routePrefix === "" ? "" : `${routePrefix === undefined ? "api" : routePrefix}/`;
    return { account, container, plan, zipBlob, functionArgs, rootPath };
}
/**
  * A CallbackFunctionApp is a special type of azure.appservice.FunctionApp that can be created out
  * of an actual JavaScript function instance.  The function instance will be analyzed and packaged
  * up (including dependencies) into a form that can be used by Azure Functions. See
  * https://github.com/pulumi/docs/blob/master/reference/serializing-functions.md for additional
  * details on this process.
 */
class CallbackFunctionApp extends functionApp_1.FunctionApp {
    constructor(name, bindingsOrFunc, args, opts = {}) {
        const functions = bindingsOrFunc instanceof Function ? [bindingsOrFunc] : [{ name, bindings: bindingsOrFunc, callback: args }];
        const parts = createFunctionAppParts(name, Object.assign(Object.assign({}, args), { archive: produceDeploymentArchive(Object.assign(Object.assign({}, args), { functions })), appSettings: combineFunctionAppSettings(Object.assign(Object.assign({}, args), { functions })) }), opts);
        super(name, parts.functionArgs, opts);
        this.account = parts.account;
        this.container = parts.container;
        this.plan = parts.plan;
        this.zipBlob = parts.zipBlob;
        this.endpoint = getEndpoint(this, parts.rootPath);
    }
}
exports.CallbackFunctionApp = CallbackFunctionApp;
function getEndpoint(app, rootPath) {
    return pulumi.interpolate `https://${app.defaultHostname}/${rootPath}`;
}
/**
 * A base component for custom Function App components. It is required to provide a common parent
 * for all resources, so that they are logically grouped under the same root in the Pulumi resource
 * tree.
 */
class PackagedFunctionApp extends pulumi.ComponentResource {
    constructor(type, name, args, opts = {}) {
        super(type, name, undefined, opts);
        const parentOpts = { parent: this };
        const parts = createFunctionAppParts(name, args, parentOpts);
        this.account = parts.account;
        this.container = parts.container;
        this.zipBlob = parts.zipBlob;
        this.plan = parts.plan;
        this.functionApp = new functionApp_1.FunctionApp(name, parts.functionArgs, parentOpts);
        this.endpoint = getEndpoint(this.functionApp, parts.rootPath);
    }
}
exports.PackagedFunctionApp = PackagedFunctionApp;
/**
  * A ArchiveFunctionApp is a component that instantiates a azure.appservice.FunctionApp and all the required
  * dependencies and deploys the specified archive into it. The archive must contain the full artifact to be deployed
  * into the Function App.
 */
class ArchiveFunctionApp extends PackagedFunctionApp {
    constructor(name, args, opts = {}) {
        super("azure:appservice:ArchiveFunctionApp", name, args, opts);
        this.registerOutputs();
    }
}
exports.ArchiveFunctionApp = ArchiveFunctionApp;
/**
  * A MultiCallbackFunctionApp is a component that instantiates a azure.appservice.FunctionApp and all the required
  * dependencies out of multiple actual JavaScript functions. At least 1 function is required. The function instances
  * will be analyzed and packaged up (including dependencies) into a form that can be used by Azure Functions. See
  * https://github.com/pulumi/docs/blob/master/reference/serializing-functions.md for additional
  * details on this process.
 */
class MultiCallbackFunctionApp extends PackagedFunctionApp {
    constructor(name, args, opts = {}) {
        if (args.functions.length == 0) {
            throw new Error("At least one function must be provided.");
        }
        const names = args.functions.map(f => f.name);
        const duplicates = names.filter((item, index) => names.indexOf(item) !== index);
        if (duplicates.length > 0) {
            const msg = [...new Set(duplicates)].map(s => `[${s}]`).join(", ");
            throw new Error(`Function names must be unique within a given Function App. Duplicate functions: ${msg}.`);
        }
        super("azure:appservice:MultiCallbackFunctionApp", name, Object.assign(Object.assign({}, args), { archive: produceDeploymentArchive(args), appSettings: combineFunctionAppSettings(args) }), opts);
        this.registerOutputs();
    }
}
exports.MultiCallbackFunctionApp = MultiCallbackFunctionApp;
/**
 * Base type for all subscription types.  An event subscription represents a connection between some
 * azure resource an an FunctionApp that will be triggered when something happens to that resource.
 */
class EventSubscription extends pulumi.ComponentResource {
    constructor(type, name, bindingsOrFunc, args, opts = {}) {
        super(type, name, undefined, opts);
        this.functionApp = new CallbackFunctionApp(name, bindingsOrFunc, args, { parent: this });
    }
}
exports.EventSubscription = EventSubscription;
function makeSafeStorageAccountName(prefix) {
    // Account name needs to be at max 24 chars (minus the extra 8 random chars);
    // not exceed the max length of 24.
    // Name must be alphanumeric.
    return prefix.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().substr(0, 24 - 8);
}
function makeSafeStorageContainerName(prefix) {
    // Account name needs to be at max 63 chars (minus the extra 8 random chars);
    // Name must be alphanumeric (and hyphens).
    return prefix.replace(/[^a-zA-Z0-9-]/g, "").toLowerCase().substr(0, 63 - 8);
}
/** @internal */
function getResourceGroupName(args, fallbackResourceGroupName) {
    if (args.resourceGroup) {
        return args.resourceGroup.name;
    }
    if (!args.resourceGroupName && !fallbackResourceGroupName) {
        throw new Error("Either [args.resourceGroup] or [args.resourceGroupName] must be provided.");
    }
    return util.ifUndefined(args.resourceGroupName, fallbackResourceGroupName);
}
exports.getResourceGroupName = getResourceGroupName;
function combineAppSettings(settings) {
    return pulumi.all(settings).apply(items => items.reduce((a, b) => (Object.assign(Object.assign({}, a), b)), {}));
}
function combineBindingSettings(trigger, inputs, outputs) {
    const all = [trigger, ...inputs || [], ...outputs || []];
    const bindings = pulumi.all(all.map(bs => bs.binding));
    const appSettings = combineAppSettings(all.map(bs => bs.settings));
    return { bindings, appSettings };
}
function getHostKeysWithRetries(functionAppId, retryAttempts) {
    return __awaiter(this, void 0, void 0, function* () {
        const credentials = yield core.getServiceClientCredentials();
        const client = new ms_rest_azure_js_1.AzureServiceClient(credentials);
        const url = `https://management.azure.com${functionAppId}/host/default/listkeys?api-version=2018-02-01`;
        const response = yield client.sendRequest({ method: "POST", url });
        if (response.status >= 400 && retryAttempts === 0) {
            throw new Error(`Failed to retrieve the host keys: ${response.bodyAsText}`);
        }
        if (response.status < 400) {
            const body = response.parsedBody;
            if (body.masterKey === undefined || body.systemKeys === undefined || body.functionKeys === undefined) {
                throw new Error(`Wrong shape of the host keys response: ${response.bodyAsText}`);
            }
            return body;
        }
        yield new Promise(r => setTimeout(r, 10000));
        return getHostKeysWithRetries(functionAppId, retryAttempts - 1);
    });
}
functionApp_1.FunctionApp.prototype.getHostKeys = function () {
    return this.id.apply((id) => __awaiter(this, void 0, void 0, function* () { return yield getHostKeysWithRetries(id, 5); }));
};
functionApp_1.FunctionApp.prototype.getFunctionKeys = function (functionName) {
    return pulumi.all([this.id, functionName]).apply(([id, functionName]) => __awaiter(this, void 0, void 0, function* () {
        const credentials = yield core.getServiceClientCredentials();
        const client = new ms_rest_azure_js_1.AzureServiceClient(credentials);
        const url = `https://management.azure.com${id}/functions/${functionName}/listkeys?api-version=2018-02-01`;
        const response = yield client.sendRequest({ method: "POST", url });
        if (response.status >= 400) {
            throw new Error(`Failed to retrieve the function keys: ${response.bodyAsText}`);
        }
        const body = response.parsedBody;
        if (body.default === undefined) {
            throw new Error(`Wrong shape of the function keys response: ${response.bodyAsText}`);
        }
        return body;
    }));
};
//# sourceMappingURL=zMixins.js.map