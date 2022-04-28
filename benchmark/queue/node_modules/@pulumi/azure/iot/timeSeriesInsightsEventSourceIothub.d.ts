import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Azure IoT Time Series Insights IoTHub Event Source.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleIoTHub = new azure.iot.IoTHub("exampleIoTHub", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: {
 *         name: "B1",
 *         capacity: "1",
 *     },
 * });
 * const exampleConsumerGroup = new azure.iot.ConsumerGroup("exampleConsumerGroup", {
 *     iothubName: exampleIoTHub.name,
 *     eventhubEndpointName: "events",
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const storage = new azure.storage.Account("storage", {
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
 *         name: storage.name,
 *         key: storage.primaryAccessKey,
 *     },
 * });
 * const exampleTimeSeriesInsightsEventSourceIothub = new azure.iot.TimeSeriesInsightsEventSourceIothub("exampleTimeSeriesInsightsEventSourceIothub", {
 *     location: exampleResourceGroup.location,
 *     environmentId: exampleTimeSeriesInsightsGen2Environment.id,
 *     iothubName: exampleIoTHub.name,
 *     sharedAccessKey: exampleIoTHub.sharedAccessPolicies.apply(sharedAccessPolicies => sharedAccessPolicies[0].primaryKey),
 *     sharedAccessKeyName: exampleIoTHub.sharedAccessPolicies.apply(sharedAccessPolicies => sharedAccessPolicies[0].keyName),
 *     consumerGroupName: exampleConsumerGroup.name,
 *     eventSourceResourceId: exampleIoTHub.id,
 * });
 * ```
 *
 * ## Import
 *
 * Azure IoT Time Series Insights IoTHub Event Source can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:iot/timeSeriesInsightsEventSourceIothub:TimeSeriesInsightsEventSourceIothub example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.TimeSeriesInsights/environments/environment1/eventSources/example
 * ```
 */
export declare class TimeSeriesInsightsEventSourceIothub extends pulumi.CustomResource {
    /**
     * Get an existing TimeSeriesInsightsEventSourceIothub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TimeSeriesInsightsEventSourceIothubState, opts?: pulumi.CustomResourceOptions): TimeSeriesInsightsEventSourceIothub;
    /**
     * Returns true if the given object is an instance of TimeSeriesInsightsEventSourceIothub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TimeSeriesInsightsEventSourceIothub;
    /**
     * Specifies the name of the IotHub Consumer Group that holds the partitions from which events will be read.
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
     * Specifies the name of the IotHub which will be associated with this resource.
     */
    readonly iothubName: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Azure IoT Time Series Insights IoTHub Event Source. Changing this forces a new resource to be created. Must be globally unique.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the value of the Shared Access Policy key that grants the Time Series Insights service read access to the IotHub.
     */
    readonly sharedAccessKey: pulumi.Output<string>;
    /**
     * Specifies the name of the Shared Access key that grants the Event Source access to the IotHub.
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
     * Create a TimeSeriesInsightsEventSourceIothub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TimeSeriesInsightsEventSourceIothubArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering TimeSeriesInsightsEventSourceIothub resources.
 */
export interface TimeSeriesInsightsEventSourceIothubState {
    /**
     * Specifies the name of the IotHub Consumer Group that holds the partitions from which events will be read.
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
     * Specifies the name of the IotHub which will be associated with this resource.
     */
    iothubName?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Azure IoT Time Series Insights IoTHub Event Source. Changing this forces a new resource to be created. Must be globally unique.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the value of the Shared Access Policy key that grants the Time Series Insights service read access to the IotHub.
     */
    sharedAccessKey?: pulumi.Input<string>;
    /**
     * Specifies the name of the Shared Access key that grants the Event Source access to the IotHub.
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
 * The set of arguments for constructing a TimeSeriesInsightsEventSourceIothub resource.
 */
export interface TimeSeriesInsightsEventSourceIothubArgs {
    /**
     * Specifies the name of the IotHub Consumer Group that holds the partitions from which events will be read.
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
     * Specifies the name of the IotHub which will be associated with this resource.
     */
    iothubName: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Azure IoT Time Series Insights IoTHub Event Source. Changing this forces a new resource to be created. Must be globally unique.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the value of the Shared Access Policy key that grants the Time Series Insights service read access to the IotHub.
     */
    sharedAccessKey: pulumi.Input<string>;
    /**
     * Specifies the name of the Shared Access key that grants the Event Source access to the IotHub.
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
