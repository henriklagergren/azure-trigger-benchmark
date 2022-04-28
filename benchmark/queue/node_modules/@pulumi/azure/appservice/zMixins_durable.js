"use strict";
// Copyright 2016-2020, Pulumi Corporation.
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
exports.DurableEntityClientInputBindingSettings = exports.DurableOrchestrationClientInputBindingSettings = exports.DurableEntityFunction = exports.DurableActivityFunction = exports.DurableOrchestratorFunction = void 0;
const mod = require(".");
/**
 * Azure Durable Orchestrator Function
 */
class DurableOrchestratorFunction extends mod.Function {
    constructor(name, args) {
        if (args.callback) {
            throw new Error("Durable orchestrator functions need to use the [callbackFactory]");
        }
        const trigger = {
            name: "context",
            type: "orchestrationTrigger",
            direction: "in",
        };
        super(name, trigger, args);
    }
}
exports.DurableOrchestratorFunction = DurableOrchestratorFunction;
/**
 * Azure Durable Activity Function
 */
class DurableActivityFunction extends mod.Function {
    constructor(name, args) {
        const trigger = {
            name: args.activityInputName,
            type: "activityTrigger",
            direction: "in",
        };
        super(name, trigger, args);
    }
}
exports.DurableActivityFunction = DurableActivityFunction;
/**
 * Azure Durable Entity Function
 */
class DurableEntityFunction extends mod.Function {
    constructor(name, args) {
        if (args.callback) {
            throw new Error("Durable entity functions need to use the [callbackFactory]");
        }
        const trigger = {
            name: "context",
            type: "entityTrigger",
            direction: "in",
        };
        super(name, trigger, args);
    }
}
exports.DurableEntityFunction = DurableEntityFunction;
class DurableOrchestrationClientInputBindingSettings {
    constructor(name) {
        this.binding = {
            name,
            type: "orchestrationClient",
            direction: "in",
        };
        this.settings = {};
    }
}
exports.DurableOrchestrationClientInputBindingSettings = DurableOrchestrationClientInputBindingSettings;
class DurableEntityClientInputBindingSettings {
    constructor(name) {
        this.binding = {
            name,
            type: "durableClient",
            direction: "in",
        };
        this.settings = {};
    }
}
exports.DurableEntityClientInputBindingSettings = DurableEntityClientInputBindingSettings;
//# sourceMappingURL=zMixins_durable.js.map