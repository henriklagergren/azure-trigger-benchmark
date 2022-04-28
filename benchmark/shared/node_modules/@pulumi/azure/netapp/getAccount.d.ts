import * as pulumi from "@pulumi/pulumi";
/**
 * Uses this data source to access information about an existing NetApp Account.
 *
 * ## NetApp Account Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.netapp.getAccount({
 *     resourceGroupName: "acctestRG",
 *     name: "acctestnetappaccount",
 * });
 * export const netappAccountId = example.then(example => example.id);
 * ```
 */
export declare function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult>;
/**
 * A collection of arguments for invoking getAccount.
 */
export interface GetAccountArgs {
    /**
     * The name of the NetApp Account.
     */
    name: string;
    /**
     * The Name of the Resource Group where the NetApp Account exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getAccount.
 */
export interface GetAccountResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The Azure Region where the NetApp Account exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
}
export declare function getAccountOutput(args: GetAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccountResult>;
/**
 * A collection of arguments for invoking getAccount.
 */
export interface GetAccountOutputArgs {
    /**
     * The name of the NetApp Account.
     */
    name: pulumi.Input<string>;
    /**
     * The Name of the Resource Group where the NetApp Account exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
