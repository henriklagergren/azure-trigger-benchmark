import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to fetch the Host Keys of an existing Function App
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.appservice.getFunctionAppHostKeys({
 *     name: "example-function",
 *     resourceGroupName: azurerm_resource_group.example.name,
 * });
 * ```
 */
export declare function getFunctionAppHostKeys(args: GetFunctionAppHostKeysArgs, opts?: pulumi.InvokeOptions): Promise<GetFunctionAppHostKeysResult>;
/**
 * A collection of arguments for invoking getFunctionAppHostKeys.
 */
export interface GetFunctionAppHostKeysArgs {
    /**
     * The name of the Function App.
     */
    name: string;
    /**
     * The name of the Resource Group where the Function App exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getFunctionAppHostKeys.
 */
export interface GetFunctionAppHostKeysResult {
    /**
     * Function App resource's default function key.
     */
    readonly defaultFunctionKey: string;
    /**
     * Function App resource's Durable Task Extension system key.
     */
    readonly durabletaskExtensionKey: string;
    /**
     * Function App resource's Event Grid Extension Config system key.
     */
    readonly eventGridExtensionConfigKey: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * Function App resource's secret key
     *
     * @deprecated This property has been renamed to `primary_key` and will be removed in v3.0 of the provider in support of HashiCorp's inclusive language policy which can be found here: https://discuss.hashicorp.com/t/inclusive-language-changes
     */
    readonly masterKey: string;
    readonly name: string;
    readonly primaryKey: string;
    readonly resourceGroupName: string;
    /**
     * Function App resource's SignalR Extension system key.
     */
    readonly signalrExtensionKey: string;
}
export declare function getFunctionAppHostKeysOutput(args: GetFunctionAppHostKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFunctionAppHostKeysResult>;
/**
 * A collection of arguments for invoking getFunctionAppHostKeys.
 */
export interface GetFunctionAppHostKeysOutputArgs {
    /**
     * The name of the Function App.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Function App exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
