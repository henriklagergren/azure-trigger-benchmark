import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Azure Maps Account.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.maps.getAccount({
 *     name: "production",
 *     resourceGroupName: "maps",
 * });
 * export const mapsAccountId = example.then(example => example.id);
 * ```
 */
export declare function getAccount(args: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult>;
/**
 * A collection of arguments for invoking getAccount.
 */
export interface GetAccountArgs {
    /**
     * Specifies the name of the Maps Account.
     */
    name: string;
    /**
     * Specifies the name of the Resource Group in which the Maps Account is located.
     */
    resourceGroupName: string;
    tags?: {
        [key: string]: string;
    };
}
/**
 * A collection of values returned by getAccount.
 */
export interface GetAccountResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    /**
     * The primary key used to authenticate and authorize access to the Maps REST APIs.
     */
    readonly primaryAccessKey: string;
    readonly resourceGroupName: string;
    /**
     * The primary key used to authenticate and authorize access to the Maps REST APIs. The second key is given to provide seamless key regeneration.
     */
    readonly secondaryAccessKey: string;
    /**
     * The sku of the Azure Maps Account.
     */
    readonly skuName: string;
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * A unique identifier for the Maps Account.
     */
    readonly xMsClientId: string;
}
export declare function getAccountOutput(args: GetAccountOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccountResult>;
/**
 * A collection of arguments for invoking getAccount.
 */
export interface GetAccountOutputArgs {
    /**
     * Specifies the name of the Maps Account.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group in which the Maps Account is located.
     */
    resourceGroupName: pulumi.Input<string>;
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
