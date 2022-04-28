import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Consumer Group within an IotHub
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
 *         name: "S1",
 *         capacity: "1",
 *     },
 *     tags: {
 *         purpose: "testing",
 *     },
 * });
 * const exampleConsumerGroup = new azure.iot.ConsumerGroup("exampleConsumerGroup", {
 *     iothubName: exampleIoTHub.name,
 *     eventhubEndpointName: "events",
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * ```
 *
 * ## Import
 *
 * IoTHub Consumer Groups can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:iot/consumerGroup:ConsumerGroup group1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Devices/IotHubs/hub1/eventHubEndpoints/events/ConsumerGroups/group1
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
     * The name of the Event Hub-compatible endpoint in the IoT hub. Changing this forces a new resource to be created.
     */
    readonly eventhubEndpointName: pulumi.Output<string>;
    /**
     * The name of the IoT Hub. Changing this forces a new resource to be created.
     */
    readonly iothubName: pulumi.Output<string>;
    /**
     * The name of this Consumer Group. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group that contains the IoT hub. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
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
     * The name of the Event Hub-compatible endpoint in the IoT hub. Changing this forces a new resource to be created.
     */
    eventhubEndpointName?: pulumi.Input<string>;
    /**
     * The name of the IoT Hub. Changing this forces a new resource to be created.
     */
    iothubName?: pulumi.Input<string>;
    /**
     * The name of this Consumer Group. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the IoT hub. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ConsumerGroup resource.
 */
export interface ConsumerGroupArgs {
    /**
     * The name of the Event Hub-compatible endpoint in the IoT hub. Changing this forces a new resource to be created.
     */
    eventhubEndpointName: pulumi.Input<string>;
    /**
     * The name of the IoT Hub. Changing this forces a new resource to be created.
     */
    iothubName: pulumi.Input<string>;
    /**
     * The name of this Consumer Group. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the IoT hub. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
