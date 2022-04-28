import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Automation Account.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.automation.getAccount({
 *     name: "example-account",
 *     resourceGroupName: "example-resources",
 * });
 * export const automationAccountId = example.then(example => example.id);
 * ```
 */
export declare function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult>;
/**
 * A collection of arguments for invoking getAccount.
 */
export interface GetAccountArgs {
    /**
     * The name of the Automation Account.
     */
    name: string;
    /**
     * Specifies the name of the Resource Group where the Automation Account exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getAccount.
 */
export interface GetAccountResult {
    /**
     * The Endpoint for this Automation Account.
     */
    readonly endpoint: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    /**
     * The Primary Access Key for the Automation Account.
     */
    readonly primaryKey: string;
    readonly resourceGroupName: string;
    /**
     * The Secondary Access Key for the Automation Account.
     */
    readonly secondaryKey: string;
}
export declare function getAccountOutput(args: GetAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccountResult>;
/**
 * A collection of arguments for invoking getAccount.
 */
export interface GetAccountOutputArgs {
    /**
     * The name of the Automation Account.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group where the Automation Account exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
