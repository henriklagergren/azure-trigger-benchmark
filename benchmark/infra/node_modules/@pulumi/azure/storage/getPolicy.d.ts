import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Storage Management Policy.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleAccount = azure.storage.getAccount({
 *     name: "storageaccountname",
 *     resourceGroupName: "resourcegroupname",
 * });
 * const examplePolicy = azure.storage.getPolicy({
 *     storageAccountId: azurerm_storage_account.example.id,
 * });
 * ```
 */
export declare function getPolicy(args: GetPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyResult>;
/**
 * A collection of arguments for invoking getPolicy.
 */
export interface GetPolicyArgs {
    /**
     * Specifies the id of the storage account to retrieve the management policy for.
     */
    storageAccountId: string;
}
/**
 * A collection of values returned by getPolicy.
 */
export interface GetPolicyResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * A `rule` block as documented below.
     */
    readonly rules: outputs.storage.GetPolicyRule[];
    readonly storageAccountId: string;
}
export declare function getPolicyOutput(args: GetPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPolicyResult>;
/**
 * A collection of arguments for invoking getPolicy.
 */
export interface GetPolicyOutputArgs {
    /**
     * Specifies the id of the storage account to retrieve the management policy for.
     */
    storageAccountId: pulumi.Input<string>;
}
