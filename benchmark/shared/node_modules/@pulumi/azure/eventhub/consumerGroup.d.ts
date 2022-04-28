import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Event Hubs Consumer Group as a nested resource within an Event Hub.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleEventHubNamespace = new azure.eventhub.EventHubNamespace("exampleEventHubNamespace", {
 *     location: "West US",
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Basic",
 *     capacity: 2,
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * const exampleEventHub = new azure.eventhub.EventHub("exampleEventHub", {
 *     namespaceName: exampleEventHubNamespace.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     partitionCount: 2,
 *     messageRetention: 2,
 * });
 * const exampleConsumerGroup = new azure.eventhub.ConsumerGroup("exampleConsumerGroup", {
 *     namespaceName: exampleEventHubNamespace.name,
 *     eventhubName: exampleEventHub.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     userMetadata: "some-meta-data",
 * });
 * ```
 *
 * ## Import
 *
 * EventHub Consumer Groups can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:eventhub/consumerGroup:ConsumerGroup consumerGroup1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.EventHub/namespaces/namespace1/eventhubs/eventhub1/consumerGroups/consumerGroup1
 * ```
 */
export declare class ConsumerGroup extends pulumi.CustomResource {
    /**
     * Get an existing ConsumerGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConsumerGroupState, opts?: pulumi.CustomResourceOptions): ConsumerGroup;
    /**
     * Returns true if the given object is an instance of ConsumerGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ConsumerGroup;
    /**
     * Specifies the name of the EventHub. Changing this forces a new resource to be created.
     */
    readonly eventhubName: pulumi.Output<string>;
    /**
     * Specifies the name of the EventHub Consumer Group resource. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the name of the grandparent EventHub Namespace. Changing this forces a new resource to be created.
     */
    readonly namespaceName: pulumi.Output<string>;
    /**
     * The name of the resource group in which the EventHub Consumer Group's grandparent Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Specifies the user metadata.
     */
    readonly userMetadata: pulumi.Output<string | undefined>;
    /**
     * Create a ConsumerGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConsumerGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ConsumerGroup resources.
 */
export interface ConsumerGroupState {
    /**
     * Specifies the name of the EventHub. Changing this forces a new resource to be created.
     */
    eventhubName?: pulumi.Input<string>;
    /**
     * Specifies the name of the EventHub Consumer Group resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the grandparent EventHub Namespace. Changing this forces a new resource to be created.
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the EventHub Consumer Group's grandparent Namespace exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies the user metadata.
     */
    userMetadata?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ConsumerGroup resource.
 */
export interface ConsumerGroupArgs {
    /**
     * Specifies the name of the EventHub. Changing this forces a new resource to be created.
     */
    eventhubName: pulumi.Input<string>;
    /**
     * Specifies the name of the EventHub Consumer Group resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the grandparent EventHub Namespace. Changing this forces a new resource to be created.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group in which the EventHub Consumer Group's grandparent Namespace exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the user metadata.
     */
    userMetadata?: pulumi.Input<string>;
}
