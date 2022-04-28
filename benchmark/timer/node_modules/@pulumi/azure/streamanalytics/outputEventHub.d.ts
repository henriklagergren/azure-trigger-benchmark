import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Stream Analytics Output to an EventHub.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = azure.core.getResourceGroup({
 *     name: "example-resources",
 * });
 * const exampleJob = azure.streamanalytics.getJob({
 *     name: "example-job",
 *     resourceGroupName: azurerm_resource_group.example.name,
 * });
 * const exampleEventHubNamespace = new azure.eventhub.EventHubNamespace("exampleEventHubNamespace", {
 *     location: exampleResourceGroup.then(exampleResourceGroup => exampleResourceGroup.location),
 *     resourceGroupName: exampleResourceGroup.then(exampleResourceGroup => exampleResourceGroup.name),
 *     sku: "Standard",
 *     capacity: 1,
 * });
 * const exampleEventHub = new azure.eventhub.EventHub("exampleEventHub", {
 *     namespaceName: exampleEventHubNamespace.name,
 *     resourceGroupName: exampleResourceGroup.then(exampleResourceGroup => exampleResourceGroup.name),
 *     partitionCount: 2,
 *     messageRetention: 1,
 * });
 * const exampleOutputEventHub = new azure.streamanalytics.OutputEventHub("exampleOutputEventHub", {
 *     streamAnalyticsJobName: exampleJob.then(exampleJob => exampleJob.name),
 *     resourceGroupName: exampleJob.then(exampleJob => exampleJob.resourceGroupName),
 *     eventhubName: exampleEventHub.name,
 *     servicebusNamespace: exampleEventHubNamespace.name,
 *     sharedAccessPolicyKey: exampleEventHubNamespace.defaultPrimaryKey,
 *     sharedAccessPolicyName: "RootManageSharedAccessKey",
 *     serialization: {
 *         type: "Avro",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Stream Analytics Outputs to an EventHub can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:streamanalytics/outputEventHub:OutputEventHub example /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/group1/providers/Microsoft.StreamAnalytics/streamingjobs/job1/outputs/output1
 * ```
 */
export declare class OutputEventHub extends pulumi.CustomResource {
    /**
     * Get an existing OutputEventHub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OutputEventHubState, opts?: pulumi.CustomResourceOptions): OutputEventHub;
    /**
     * Returns true if the given object is an instance of OutputEventHub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is OutputEventHub;
    /**
     * The name of the Event Hub.
     */
    readonly eventhubName: pulumi.Output<string>;
    /**
     * The name of the Stream Output. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The column that is used for the Event Hub partition key.
     */
    readonly partitionKey: pulumi.Output<string | undefined>;
    /**
     * A list of property columns to add to the Event Hub output.
     */
    readonly propertyColumns: pulumi.Output<string[] | undefined>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `serialization` block as defined below.
     */
    readonly serialization: pulumi.Output<outputs.streamanalytics.OutputEventHubSerialization>;
    /**
     * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc.
     */
    readonly servicebusNamespace: pulumi.Output<string>;
    /**
     * The shared access policy key for the specified shared access policy.
     */
    readonly sharedAccessPolicyKey: pulumi.Output<string>;
    /**
     * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc.
     */
    readonly sharedAccessPolicyName: pulumi.Output<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    readonly streamAnalyticsJobName: pulumi.Output<string>;
    /**
     * Create a OutputEventHub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OutputEventHubArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering OutputEventHub resources.
 */
export interface OutputEventHubState {
    /**
     * The name of the Event Hub.
     */
    eventhubName?: pulumi.Input<string>;
    /**
     * The name of the Stream Output. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The column that is used for the Event Hub partition key.
     */
    partitionKey?: pulumi.Input<string>;
    /**
     * A list of property columns to add to the Event Hub output.
     */
    propertyColumns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `serialization` block as defined below.
     */
    serialization?: pulumi.Input<inputs.streamanalytics.OutputEventHubSerialization>;
    /**
     * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc.
     */
    servicebusNamespace?: pulumi.Input<string>;
    /**
     * The shared access policy key for the specified shared access policy.
     */
    sharedAccessPolicyKey?: pulumi.Input<string>;
    /**
     * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc.
     */
    sharedAccessPolicyName?: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    streamAnalyticsJobName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a OutputEventHub resource.
 */
export interface OutputEventHubArgs {
    /**
     * The name of the Event Hub.
     */
    eventhubName: pulumi.Input<string>;
    /**
     * The name of the Stream Output. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The column that is used for the Event Hub partition key.
     */
    partitionKey?: pulumi.Input<string>;
    /**
     * A list of property columns to add to the Event Hub output.
     */
    propertyColumns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `serialization` block as defined below.
     */
    serialization: pulumi.Input<inputs.streamanalytics.OutputEventHubSerialization>;
    /**
     * The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc.
     */
    servicebusNamespace: pulumi.Input<string>;
    /**
     * The shared access policy key for the specified shared access policy.
     */
    sharedAccessPolicyKey: pulumi.Input<string>;
    /**
     * The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc.
     */
    sharedAccessPolicyName: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    streamAnalyticsJobName: pulumi.Input<string>;
}
