import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing ServiceBus Namespace.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.servicebus.getNamespace({
 *     name: "examplenamespace",
 *     resourceGroupName: "example-resources",
 * });
 * export const location = example.then(example => example.location);
 * ```
 */
export declare function getNamespace(args: GetNamespaceArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceResult>;
/**
 * A collection of arguments for invoking getNamespace.
 */
export interface GetNamespaceArgs {
    /**
     * Specifies the name of the ServiceBus Namespace.
     */
    name: string;
    /**
     * Specifies the name of the Resource Group where the ServiceBus Namespace exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getNamespace.
 */
export interface GetNamespaceResult {
    /**
     * The capacity of the ServiceBus Namespace.
     */
    readonly capacity: number;
    /**
     * The primary connection string for the authorization
     * rule `RootManageSharedAccessKey`.
     */
    readonly defaultPrimaryConnectionString: string;
    /**
     * The primary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    readonly defaultPrimaryKey: string;
    /**
     * The secondary connection string for the
     * authorization rule `RootManageSharedAccessKey`.
     */
    readonly defaultSecondaryConnectionString: string;
    /**
     * The secondary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    readonly defaultSecondaryKey: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The location of the Resource Group in which the ServiceBus Namespace exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * The Tier used for the ServiceBus Namespace.
     */
    readonly sku: string;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * Whether or not this ServiceBus Namespace is zone redundant.
     */
    readonly zoneRedundant: boolean;
}
export declare function getNamespaceOutput(args: GetNamespaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNamespaceResult>;
/**
 * A collection of arguments for invoking getNamespace.
 */
export interface GetNamespaceOutputArgs {
    /**
     * Specifies the name of the ServiceBus Namespace.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group where the ServiceBus Namespace exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
