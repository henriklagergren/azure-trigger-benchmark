import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Stream Analytics Output to a ServiceBus Topic.
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
 * const exampleNamespace = new azure.servicebus.Namespace("exampleNamespace", {
 *     location: exampleResourceGroup.then(exampleResourceGroup => exampleResourceGroup.location),
 *     resourceGroupName: exampleResourceGroup.then(exampleResourceGroup => exampleResourceGroup.name),
 *     sku: "Standard",
 * });
 * const exampleTopic = new azure.servicebus.Topic("exampleTopic", {
 *     namespaceId: exampleNamespace.id,
 *     enablePartitioning: true,
 * });
 * const exampleOutputServicebusTopic = new azure.streamanalytics.OutputServicebusTopic("exampleOutputServicebusTopic", {
 *     streamAnalyticsJobName: exampleJob.then(exampleJob => exampleJob.name),
 *     resourceGroupName: exampleJob.then(exampleJob => exampleJob.resourceGroupName),
 *     topicName: exampleTopic.name,
 *     servicebusNamespace: exampleNamespace.name,
 *     sharedAccessPolicyKey: exampleNamespace.defaultPrimaryKey,
 *     sharedAccessPolicyName: "RootManageSharedAccessKey",
 *     propertyColumns: [
 *         "col1",
 *         "col2",
 *     ],
 *     serialization: {
 *         format: "Avro",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Stream Analytics Output ServiceBus Topic's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:streamanalytics/outputServicebusTopic:OutputServicebusTopic example /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/group1/providers/Microsoft.StreamAnalytics/streamingjobs/job1/outputs/output1
 * ```
 */
export declare class OutputServicebusTopic extends pulumi.CustomResource {
    /**
     * Get an existing OutputServicebusTopic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OutputServicebusTopicState, opts?: pulumi.CustomResourceOptions): OutputServicebusTopic;
    /**
     * Returns true if the given object is an instance of OutputServicebusTopic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is OutputServicebusTopic;
    /**
     * The name of the Stream Output. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A list of property columns to add to the Service Bus Topic output.
     */
    readonly propertyColumns: pulumi.Output<string[] | undefined>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `serialization` block as defined below.
     */
    readonly serialization: pulumi.Output<outputs.streamanalytics.OutputServicebusTopicSerialization>;
    /**
     * The namespace that is associated with the desired Event Hub, Service Bus Topic, Service Bus Topic, etc.
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
     * The name of the Service Bus Topic.
     */
    readonly topicName: pulumi.Output<string>;
    /**
     * Create a OutputServicebusTopic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OutputServicebusTopicArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering OutputServicebusTopic resources.
 */
export interface OutputServicebusTopicState {
    /**
     * The name of the Stream Output. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of property columns to add to the Service Bus Topic output.
     */
    propertyColumns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `serialization` block as defined below.
     */
    serialization?: pulumi.Input<inputs.streamanalytics.OutputServicebusTopicSerialization>;
    /**
     * The namespace that is associated with the desired Event Hub, Service Bus Topic, Service Bus Topic, etc.
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
    /**
     * The name of the Service Bus Topic.
     */
    topicName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a OutputServicebusTopic resource.
 */
export interface OutputServicebusTopicArgs {
    /**
     * The name of the Stream Output. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of property columns to add to the Service Bus Topic output.
     */
    propertyColumns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `serialization` block as defined below.
     */
    serialization: pulumi.Input<inputs.streamanalytics.OutputServicebusTopicSerialization>;
    /**
     * The namespace that is associated with the desired Event Hub, Service Bus Topic, Service Bus Topic, etc.
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
    /**
     * The name of the Service Bus Topic.
     */
    topicName: pulumi.Input<string>;
}
