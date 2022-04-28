import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Disaster Recovery Config for an Event Hub Namespace.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const primary = new azure.eventhub.EventHubNamespace("primary", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard",
 * });
 * const secondary = new azure.eventhub.EventHubNamespace("secondary", {
 *     location: "West US",
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard",
 * });
 * const exampleEventhubNamespaceDisasterRecoveryConfig = new azure.eventhub.EventhubNamespaceDisasterRecoveryConfig("exampleEventhubNamespaceDisasterRecoveryConfig", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     namespaceName: primary.name,
 *     partnerNamespaceId: secondary.id,
 * });
 * ```
 *
 * ## Import
 *
 * EventHubs can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:eventhub/eventhubNamespaceDisasterRecoveryConfig:EventhubNamespaceDisasterRecoveryConfig config1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.EventHub/namespaces/namespace1/disasterRecoveryConfigs/config1
 * ```
 */
export declare class EventhubNamespaceDisasterRecoveryConfig extends pulumi.CustomResource {
    /**
     * Get an existing EventhubNamespaceDisasterRecoveryConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventhubNamespaceDisasterRecoveryConfigState, opts?: pulumi.CustomResourceOptions): EventhubNamespaceDisasterRecoveryConfig;
    /**
     * Returns true if the given object is an instance of EventhubNamespaceDisasterRecoveryConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EventhubNamespaceDisasterRecoveryConfig;
    /**
     * @deprecated This property has been deprecated and will be removed in v3.0 of the provider as any DRC created with an alternate name cannot be deleted and the service is not going to change this. Please see: https://github.com/Azure/azure-sdk-for-go/issues/5893
     */
    readonly alternateName: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Disaster Recovery Config. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the name of the primary EventHub Namespace to replicate. Changing this forces a new resource to be created.
     */
    readonly namespaceName: pulumi.Output<string>;
    /**
     * The ID of the EventHub Namespace to replicate to.
     */
    readonly partnerNamespaceId: pulumi.Output<string>;
    /**
     * The name of the resource group in which the Disaster Recovery Config exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a EventhubNamespaceDisasterRecoveryConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventhubNamespaceDisasterRecoveryConfigArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering EventhubNamespaceDisasterRecoveryConfig resources.
 */
export interface EventhubNamespaceDisasterRecoveryConfigState {
    /**
     * @deprecated This property has been deprecated and will be removed in v3.0 of the provider as any DRC created with an alternate name cannot be deleted and the service is not going to change this. Please see: https://github.com/Azure/azure-sdk-for-go/issues/5893
     */
    alternateName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Disaster Recovery Config. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the primary EventHub Namespace to replicate. Changing this forces a new resource to be created.
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * The ID of the EventHub Namespace to replicate to.
     */
    partnerNamespaceId?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Disaster Recovery Config exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a EventhubNamespaceDisasterRecoveryConfig resource.
 */
export interface EventhubNamespaceDisasterRecoveryConfigArgs {
    /**
     * @deprecated This property has been deprecated and will be removed in v3.0 of the provider as any DRC created with an alternate name cannot be deleted and the service is not going to change this. Please see: https://github.com/Azure/azure-sdk-for-go/issues/5893
     */
    alternateName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Disaster Recovery Config. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the primary EventHub Namespace to replicate. Changing this forces a new resource to be created.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The ID of the EventHub Namespace to replicate to.
     */
    partnerNamespaceId: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Disaster Recovery Config exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
