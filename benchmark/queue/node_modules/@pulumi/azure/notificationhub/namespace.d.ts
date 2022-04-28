import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Notification Hub Namespace.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleNamespace = new azure.notificationhub.Namespace("exampleNamespace", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     namespaceType: "NotificationHub",
 *     skuName: "Free",
 * });
 * ```
 *
 * ## Import
 *
 * Notification Hub Namespaces can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:notificationhub/namespace:Namespace namespace1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.NotificationHubs/namespaces/namespace1
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
     * Is this Notification Hub Namespace enabled? Defaults to `true`.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * The Azure Region in which this Notification Hub Namespace should be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name to use for this Notification Hub Namespace. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The Type of Namespace - possible values are `Messaging` or `NotificationHub`. Changing this forces a new resource to be created.
     */
    readonly namespaceType: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the Notification Hub Namespace should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The ServiceBus Endpoint for this Notification Hub Namespace.
     */
    readonly servicebusEndpoint: pulumi.Output<string>;
    /**
     * The name of the SKU to use for this Notification Hub Namespace. Possible values are `Free`, `Basic` or `Standard`. Changing this forces a new resource to be created.
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
     * Is this Notification Hub Namespace enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The Azure Region in which this Notification Hub Namespace should be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name to use for this Notification Hub Namespace. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The Type of Namespace - possible values are `Messaging` or `NotificationHub`. Changing this forces a new resource to be created.
     */
    namespaceType?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Notification Hub Namespace should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The ServiceBus Endpoint for this Notification Hub Namespace.
     */
    servicebusEndpoint?: pulumi.Input<string>;
    /**
     * The name of the SKU to use for this Notification Hub Namespace. Possible values are `Free`, `Basic` or `Standard`. Changing this forces a new resource to be created.
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
     * Is this Notification Hub Namespace enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The Azure Region in which this Notification Hub Namespace should be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name to use for this Notification Hub Namespace. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The Type of Namespace - possible values are `Messaging` or `NotificationHub`. Changing this forces a new resource to be created.
     */
    namespaceType: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Notification Hub Namespace should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the SKU to use for this Notification Hub Namespace. Possible values are `Free`, `Basic` or `Standard`. Changing this forces a new resource to be created.
     */
    skuName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
