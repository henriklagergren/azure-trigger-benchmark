import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Azure IoT Time Series Insights EventHub Event Source.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleEventHubNamespace = new azure.eventhub.EventHubNamespace("exampleEventHubNamespace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard",
 * });
 * const exampleEventHub = new azure.eventhub.EventHub("exampleEventHub", {
 *     namespaceName: exampleEventHubNamespace.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     partitionCount: 2,
 *     messageRetention: 7,
 * });
 * const exampleConsumerGroup = new azure.eventhub.ConsumerGroup("exampleConsumerGroup", {
 *     namespaceName: exampleEventHubNamespace.name,
 *     eventhubName: exampleEventHub.name,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleAuthorizationRule = new azure.eventhub.AuthorizationRule("exampleAuthorizationRule", {
 *     namespaceName: exampleEventHubNamespace.name,
 *     eventhubName: exampleEventHub.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     listen: true,
 *     send: false,
 *     manage: false,
 * });
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleTimeSeriesInsightsGen2Environment = new azure.iot.TimeSeriesInsightsGen2Environment("exampleTimeSeriesInsightsGen2Environment", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     skuName: "L1",
 *     idProperties: ["id"],
 *     storage: {
 *         name: exampleAccount.name,
 *         key: exampleAccount.primaryAccessKey,
 *     },
 * });
 * const exampleTimeSeriesInsightsEventSourceEventhub = new azure.iot.TimeSeriesInsightsEventSourceEventhub("exampleTimeSeriesInsightsEventSourceEventhub", {
 *     location: exampleResourceGroup.location,
 *     environmentId: exampleTimeSeriesInsightsGen2Environment.id,
 *     eventhubName: exampleEventHub.name,
 *     namespaceName: exampleEventHubNamespace.name,
 *     sharedAccessKey: exampleAuthorizationRule.primaryKey,
 *     sharedAccessKeyName: exampleAuthorizationRule.name,
 *     consumerGroupName: exampleConsumerGroup.name,
 *     eventSourceResourceId: exampleEventHub.id,
 * });
 * ```
 *
 * ## Import
 *
 * Azure IoT Time Series Insights EventHub Event Source can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:iot/timeSeriesInsightsEventSourceEventhub:TimeSeriesInsightsEventSourceEventhub example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.TimeSeriesInsights/environments/environment1/eventSources/example
 * ```
 */
export declare class TimeSeriesInsightsEventSourceEventhub extends pulumi.CustomResource {
    /**
     * Get an existing TimeSeriesInsightsEventSourceEventhub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TimeSeriesInsightsEventSourceEventhubState, opts?: pulumi.CustomResourceOptions): TimeSeriesInsightsEventSourceEventhub;
    /**
     * Returns true if the given object is an instance of TimeSeriesInsightsEventSourceEventhub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TimeSeriesInsightsEventSourceEventhub;
    /**
     * Specifies the name of the EventHub Consumer Group that holds the partitions from which events will be read.
     */
    readonly consumerGroupName: pulumi.Output<string>;
    /**
     * Specifies the id of the IoT Time Series Insights Environment that the Event Source should be associated with. Changing this forces a new resource to created.
     */
    readonly environmentId: pulumi.Output<string>;
    /**
     * Specifies the resource id where events will be coming from.
     */
    readonly eventSourceResourceId: pulumi.Output<string>;
    /**
     * Specifies the name of the EventHub which will be associated with this resource.
     */
    readonly eventhubName: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Azure IoT Time Series Insights EventHub Event Source. Changing this forces a new resource to be created. Must be globally unique.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the EventHub Namespace name.
     */
    readonly namespaceName: pulumi.Output<string>;
    /**
     * Specifies the value of the Shared Access Policy key that grants the Time Series Insights service read access to the EventHub.
     */
    readonly sharedAccessKey: pulumi.Output<string>;
    /**
     * Specifies the name of the Shared Access key that grants the Event Source access to the EventHub.
     */
    readonly sharedAccessKeyName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the value that will be used as the event source's timestamp. This value defaults to the event creation time.
     */
    readonly timestampPropertyName: pulumi.Output<string>;
    /**
     * Create a TimeSeriesInsightsEventSourceEventhub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TimeSeriesInsightsEventSourceEventhubArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering TimeSeriesInsightsEventSourceEventhub resources.
 */
export interface TimeSeriesInsightsEventSourceEventhubState {
    /**
     * Specifies the name of the EventHub Consumer Group that holds the partitions from which events will be read.
     */
    consumerGroupName?: pulumi.Input<string>;
    /**
     * Specifies the id of the IoT Time Series Insights Environment that the Event Source should be associated with. Changing this forces a new resource to created.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * Specifies the resource id where events will be coming from.
     */
    eventSourceResourceId?: pulumi.Input<string>;
    /**
     * Specifies the name of the EventHub which will be associated with this resource.
     */
    eventhubName?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Azure IoT Time Series Insights EventHub Event Source. Changing this forces a new resource to be created. Must be globally unique.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the EventHub Namespace name.
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * Specifies the value of the Shared Access Policy key that grants the Time Series Insights service read access to the EventHub.
     */
    sharedAccessKey?: pulumi.Input<string>;
    /**
     * Specifies the name of the Shared Access key that grants the Event Source access to the EventHub.
     */
    sharedAccessKeyName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the value that will be used as the event source's timestamp. This value defaults to the event creation time.
     */
    timestampPropertyName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a TimeSeriesInsightsEventSourceEventhub resource.
 */
export interface TimeSeriesInsightsEventSourceEventhubArgs {
    /**
     * Specifies the name of the EventHub Consumer Group that holds the partitions from which events will be read.
     */
    consumerGroupName: pulumi.Input<string>;
    /**
     * Specifies the id of the IoT Time Series Insights Environment that the Event Source should be associated with. Changing this forces a new resource to created.
     */
    environmentId: pulumi.Input<string>;
    /**
     * Specifies the resource id where events will be coming from.
     */
    eventSourceResourceId: pulumi.Input<string>;
    /**
     * Specifies the name of the EventHub which will be associated with this resource.
     */
    eventhubName: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Azure IoT Time Series Insights EventHub Event Source. Changing this forces a new resource to be created. Must be globally unique.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the EventHub Namespace name.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Specifies the value of the Shared Access Policy key that grants the Time Series Insights service read access to the EventHub.
     */
    sharedAccessKey: pulumi.Input<string>;
    /**
     * Specifies the name of the Shared Access key that grants the Event Source access to the EventHub.
     */
    sharedAccessKeyName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the value that will be used as the event source's timestamp. This value defaults to the event creation time.
     */
    timestampPropertyName?: pulumi.Input<string>;
}
