import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Event Hubs as a nested resource within a Event Hubs namespace.
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
 *     capacity: 1,
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * const exampleEventHub = new azure.eventhub.EventHub("exampleEventHub", {
 *     namespaceName: exampleEventHubNamespace.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     partitionCount: 2,
 *     messageRetention: 1,
 * });
 * ```
 *
 * ## Import
 *
 * EventHubs can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:eventhub/eventHub:EventHub eventhub1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.EventHub/namespaces/namespace1/eventhubs/eventhub1
 * ```
 */
export declare class EventHub extends pulumi.CustomResource {
    /**
     * Get an existing EventHub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventHubState, opts?: pulumi.CustomResourceOptions): EventHub;
    /**
     * Returns true if the given object is an instance of EventHub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EventHub;
    /**
     * A `captureDescription` block as defined below.
     */
    readonly captureDescription: pulumi.Output<outputs.eventhub.EventHubCaptureDescription | undefined>;
    /**
     * Specifies the number of days to retain the events for this Event Hub.
     */
    readonly messageRetention: pulumi.Output<number>;
    /**
     * Specifies the name of the EventHub resource. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
     */
    readonly namespaceName: pulumi.Output<string>;
    /**
     * Specifies the current number of shards on the Event Hub.
     */
    readonly partitionCount: pulumi.Output<number>;
    /**
     * The identifiers for partitions created for Event Hubs.
     */
    readonly partitionIds: pulumi.Output<string[]>;
    /**
     * The name of the resource group in which the EventHub's parent Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Specifies the status of the Event Hub resource. Possible values are `Active`, `Disabled` and `SendDisabled`. Defaults to `Active`.
     */
    readonly status: pulumi.Output<string | undefined>;
    /**
     * Create a EventHub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventHubArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering EventHub resources.
 */
export interface EventHubState {
    /**
     * A `captureDescription` block as defined below.
     */
    captureDescription?: pulumi.Input<inputs.eventhub.EventHubCaptureDescription>;
    /**
     * Specifies the number of days to retain the events for this Event Hub.
     */
    messageRetention?: pulumi.Input<number>;
    /**
     * Specifies the name of the EventHub resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * Specifies the current number of shards on the Event Hub.
     */
    partitionCount?: pulumi.Input<number>;
    /**
     * The identifiers for partitions created for Event Hubs.
     */
    partitionIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group in which the EventHub's parent Namespace exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies the status of the Event Hub resource. Possible values are `Active`, `Disabled` and `SendDisabled`. Defaults to `Active`.
     */
    status?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a EventHub resource.
 */
export interface EventHubArgs {
    /**
     * A `captureDescription` block as defined below.
     */
    captureDescription?: pulumi.Input<inputs.eventhub.EventHubCaptureDescription>;
    /**
     * Specifies the number of days to retain the events for this Event Hub.
     */
    messageRetention: pulumi.Input<number>;
    /**
     * Specifies the name of the EventHub resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Specifies the current number of shards on the Event Hub.
     */
    partitionCount: pulumi.Input<number>;
    /**
     * The name of the resource group in which the EventHub's parent Namespace exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the status of the Event Hub resource. Possible values are `Active`, `Disabled` and `SendDisabled`. Defaults to `Active`.
     */
    status?: pulumi.Input<string>;
}
