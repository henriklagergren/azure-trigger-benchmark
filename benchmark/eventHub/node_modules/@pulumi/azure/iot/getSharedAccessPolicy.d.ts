import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing IotHub Shared Access Policy
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.iot.getSharedAccessPolicy({
 *     name: "example",
 *     resourceGroupName: azurerm_resource_group.example.name,
 *     iothubName: azurerm_iothub.example.name,
 * });
 * ```
 */
export declare function getSharedAccessPolicy(args: GetSharedAccessPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetSharedAccessPolicyResult>;
/**
 * A collection of arguments for invoking getSharedAccessPolicy.
 */
export interface GetSharedAccessPolicyArgs {
    /**
     * The name of the IoTHub to which this Shared Access Policy belongs.
     */
    iothubName: string;
    /**
     * Specifies the name of the IotHub Shared Access Policy resource.
     */
    name: string;
    /**
     * The name of the resource group under which the IotHub Shared Access Policy resource has to be created.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getSharedAccessPolicy.
 */
export interface GetSharedAccessPolicyResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly iothubName: string;
    readonly name: string;
    /**
     * The primary connection string of the Shared Access Policy.
     */
    readonly primaryConnectionString: string;
    /**
     * The primary key used to create the authentication token.
     */
    readonly primaryKey: string;
    readonly resourceGroupName: string;
    /**
     * The secondary connection string of the Shared Access Policy.
     */
    readonly secondaryConnectionString: string;
    /**
     * The secondary key used to create the authentication token.
     */
    readonly secondaryKey: string;
}
export declare function getSharedAccessPolicyOutput(args: GetSharedAccessPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSharedAccessPolicyResult>;
/**
 * A collection of arguments for invoking getSharedAccessPolicy.
 */
export interface GetSharedAccessPolicyOutputArgs {
    /**
     * The name of the IoTHub to which this Shared Access Policy belongs.
     */
    iothubName: pulumi.Input<string>;
    /**
     * Specifies the name of the IotHub Shared Access Policy resource.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group under which the IotHub Shared Access Policy resource has to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
