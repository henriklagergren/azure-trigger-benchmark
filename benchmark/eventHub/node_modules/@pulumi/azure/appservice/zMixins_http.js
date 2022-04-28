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
exports.HttpFunction = exports.HttpEventSubscription = void 0;
const pulumi = require("@pulumi/pulumi");
const mod = require(".");
;
/**
 * An Azure Function exposed via an HTTP endpoint that is implemented on top of a
 * JavaScript/TypeScript callback function.
 */
class HttpEventSubscription extends mod.EventSubscription {
    constructor(name, args, opts = {}) {
        super("azure:appservice:HttpEventSubscription", name, new HttpFunction(name, args), args, opts);
        this.url = pulumi.interpolate `${this.functionApp.endpoint}${args.route || name}`;
        this.registerOutputs();
    }
}
exports.HttpEventSubscription = HttpEventSubscription;
/**
 * Azure Function triggered by HTTP requests.
 */
class HttpFunction extends mod.Function {
    constructor(name, args) {
        const trigger = {
            authLevel: "anonymous",
            type: "httpTrigger",
            direction: "in",
            name: "req",
            route: args.route,
            methods: args.methods,
        };
        // There are two modes to return an HTTP response:
        // 1. When there's no other output bindings, take the returned value of the callback,
        //    so the binding has to be named '$return' (mandated by Azure Functions)
        // 2. When there are other output bindings, it's a property of the returned value
        //    with a fixed name 'response' (picked by us)
        const response = {
            binding: {
                type: "http",
                direction: "out",
                name: args.outputs && args.outputs.length > 0 ? "response" : "$return",
            },
            settings: {},
        };
        // Include HTTP response into the list of output bindings
        const extendedArgs = Object.assign(Object.assign({}, args), { outputs: [response, ...args.outputs || []] });
        super(name, trigger, extendedArgs);
    }
}
exports.HttpFunction = HttpFunction;
//# sourceMappingURL=zMixins_http.js.map