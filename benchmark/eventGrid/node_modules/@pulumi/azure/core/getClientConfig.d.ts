import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access the configuration of the AzureRM provider.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * export const accountId = current.then(current => current.clientId);
 * ```
 */
export declare function getClientConfig(opts?: pulumi.InvokeOptions): Promise<GetClientConfigResult>;
/**
 * A collection of values returned by getClientConfig.
 */
export interface GetClientConfigResult {
    readonly clientId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly objectId: string;
    readonly subscriptionId: string;
    readonly tenantId: string;
}
