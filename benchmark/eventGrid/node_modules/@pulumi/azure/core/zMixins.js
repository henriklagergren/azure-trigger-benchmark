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
exports.getServiceClientCredentials = void 0;
const msnodeauth = require("@azure/ms-rest-nodeauth");
const config = require("../config");
const utilities = require("../utilities");
/**
 * Obtain credentials to query Azure Management API. Depending on the environment configuration, this
 * are either based on MSI, a service principal, or Azure CLI user credentials.
 */
function getServiceClientCredentials() {
    return __awaiter(this, void 0, void 0, function* () {
        let credentials;
        const useMsi = config.useMsi || utilities.getEnvBoolean("ARM_USE_MSI");
        const msiEndpoint = config.msiEndpoint || utilities.getEnv("ARM_MSI_ENDPOINT");
        const clientId = config.clientId || utilities.getEnv("AZURE_CLIENT_ID", "ARM_CLIENT_ID");
        const clientSecret = config.clientSecret || utilities.getEnv("AZURE_CLIENT_SECRET", "ARM_CLIENT_SECRET");
        const tenantId = config.tenantId || utilities.getEnv("AZURE_TENANT_ID", "ARM_TENANT_ID");
        if (useMsi) {
            credentials = yield msnodeauth.loginWithAppServiceMSI({ msiEndpoint: msiEndpoint });
        }
        else if (clientId && clientSecret && tenantId) {
            credentials = yield msnodeauth.loginWithServicePrincipalSecret(clientId, clientSecret, tenantId);
        }
        else {
            // `create()` will throw an error if the Az CLI is not installed or `az login` has never been run.
            credentials = yield msnodeauth.AzureCliCredentials.create();
        }
        return credentials;
    });
}
exports.getServiceClientCredentials = getServiceClientCredentials;
//# sourceMappingURL=zMixins.js.map