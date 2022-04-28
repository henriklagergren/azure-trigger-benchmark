import { ServiceClientCredentials } from "@azure/ms-rest-js";
/**
 * Obtain credentials to query Azure Management API. Depending on the environment configuration, this
 * are either based on MSI, a service principal, or Azure CLI user credentials.
 */
export declare function getServiceClientCredentials(): Promise<ServiceClientCredentials>;
