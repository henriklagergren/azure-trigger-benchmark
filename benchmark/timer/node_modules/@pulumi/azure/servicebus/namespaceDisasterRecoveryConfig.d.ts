import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Disaster Recovery Config for a Service Bus Namespace.
 *
 * > **NOTE:** Disaster Recovery Config is a Premium Sku only capability.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const primary = new azure.servicebus.Namespace("primary", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Premium",
 *     capacity: "1",
 * });
 * const secondary = new azure.servicebus.Namespace("secondary", {
 *     location: "West US",
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Premium",
 *     capacity: "1",
 * });
 * const exampleNamespaceDisasterRecoveryConfig = new azure.servicebus.NamespaceDisasterRecoveryConfig("exampleNamespaceDisasterRecoveryConfig", {
 *     primaryNamespaceId: primary.id,
 *     partnerNamespaceId: secondary.id,
 * });
 * ```
 *
 * ## Import
 *
 * Service Bus DR configs can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:servicebus/namespaceDisasterRecoveryConfig:NamespaceDisasterRecoveryConfig config1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ServiceBus/namespaces/namespace1/disasterRecoveryConfigs/config1
 * ```
 */
export declare class NamespaceDisasterRecoveryConfig extends pulumi.CustomResource {
    /**
     * Get an existing NamespaceDisasterRecoveryConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NamespaceDisasterRecoveryConfigState, opts?: pulumi.CustomResourceOptions): NamespaceDisasterRecoveryConfig;
    /**
     * Returns true if the given object is an instance of NamespaceDisasterRecoveryConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NamespaceDisasterRecoveryConfig;
    /**
     * The primary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    readonly defaultPrimaryKey: pulumi.Output<string>;
    /**
     * The secondary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    readonly defaultSecondaryKey: pulumi.Output<string>;
    /**
     * Specifies the name of the Disaster Recovery Config. This is the alias DNS name that will be created. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the Service Bus Namespace to replicate to.
     */
    readonly partnerNamespaceId: pulumi.Output<string>;
    /**
     * The alias Primary Connection String for the ServiceBus Namespace.
     */
    readonly primaryConnectionStringAlias: pulumi.Output<string>;
    /**
     * The ID of the primary Service Bus Namespace to replicate. Changing this forces a new resource to be created.
     */
    readonly primaryNamespaceId: pulumi.Output<string>;
    /**
     * The alias Secondary Connection String for the ServiceBus Namespace
     */
    readonly secondaryConnectionStringAlias: pulumi.Output<string>;
    /**
     * Create a NamespaceDisasterRecoveryConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceDisasterRecoveryConfigArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NamespaceDisasterRecoveryConfig resources.
 */
export interface NamespaceDisasterRecoveryConfigState {
    /**
     * The primary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    defaultPrimaryKey?: pulumi.Input<string>;
    /**
     * The secondary access key for the authorization rule `RootManageSharedAccessKey`.
     */
    defaultSecondaryKey?: pulumi.Input<string>;
    /**
     * Specifies the name of the Disaster Recovery Config. This is the alias DNS name that will be created. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Service Bus Namespace to replicate to.
     */
    partnerNamespaceId?: pulumi.Input<string>;
    /**
     * The alias Primary Connection String for the ServiceBus Namespace.
     */
    primaryConnectionStringAlias?: pulumi.Input<string>;
    /**
     * The ID of the primary Service Bus Namespace to replicate. Changing this forces a new resource to be created.
     */
    primaryNamespaceId?: pulumi.Input<string>;
    /**
     * The alias Secondary Connection String for the ServiceBus Namespace
     */
    secondaryConnectionStringAlias?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a NamespaceDisasterRecoveryConfig resource.
 */
export interface NamespaceDisasterRecoveryConfigArgs {
    /**
     * Specifies the name of the Disaster Recovery Config. This is the alias DNS name that will be created. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Service Bus Namespace to replicate to.
     */
    partnerNamespaceId: pulumi.Input<string>;
    /**
     * The ID of the primary Service Bus Namespace to replicate. Changing this forces a new resource to be created.
     */
    primaryNamespaceId: pulumi.Input<string>;
}
