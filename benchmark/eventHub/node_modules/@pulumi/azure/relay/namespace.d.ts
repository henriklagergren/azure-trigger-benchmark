import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Azure Relay Namespace.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleNamespace = new azure.relay.Namespace("exampleNamespace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     skuName: "Standard",
 *     tags: {
 *         source: "example",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Azure Relay Namespace's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:relay/namespace:Namespace relay1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Relay/namespaces/relay1
 * ```
 */
export declare class Namespace extends pulumi.CustomResource {
    /**
     * Get an existing Namespace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NamespaceState, opts?: pulumi.CustomResourceOptions): Namespace;
    /**
     * Returns true if the given object is an instance of Namespace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Namespace;
    /**
     * Specifies the supported Azure location where the Azure Relay Namespace exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The Identifier for Azure Insights metrics.
     */
    readonly metricId: pulumi.Output<string>;
    /**
     * Specifies the name of the Azure Relay Namespace. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The primary connection string for the authorization rule `RootManageSharedAccessKey`.
     */
    readonly primaryConnectionString: pulumi.Output<string>;
    /**
     * The primary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    readonly primaryKey: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Azure Relay Namespace.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The secondary connection string for the authorization rule `RootManageSharedAccessKey`.
     */
    readonly secondaryConnectionString: pulumi.Output<string>;
    /**
     * The secondary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    readonly secondaryKey: pulumi.Output<string>;
    /**
     * The name of the SKU to use. At this time the only supported value is `Standard`.
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Namespace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Namespace resources.
 */
export interface NamespaceState {
    /**
     * Specifies the supported Azure location where the Azure Relay Namespace exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The Identifier for Azure Insights metrics.
     */
    metricId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Azure Relay Namespace. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The primary connection string for the authorization rule `RootManageSharedAccessKey`.
     */
    primaryConnectionString?: pulumi.Input<string>;
    /**
     * The primary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    primaryKey?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Azure Relay Namespace.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The secondary connection string for the authorization rule `RootManageSharedAccessKey`.
     */
    secondaryConnectionString?: pulumi.Input<string>;
    /**
     * The secondary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    secondaryKey?: pulumi.Input<string>;
    /**
     * The name of the SKU to use. At this time the only supported value is `Standard`.
     */
    skuName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Namespace resource.
 */
export interface NamespaceArgs {
    /**
     * Specifies the supported Azure location where the Azure Relay Namespace exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Azure Relay Namespace. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Azure Relay Namespace.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the SKU to use. At this time the only supported value is `Standard`.
     */
    skuName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
