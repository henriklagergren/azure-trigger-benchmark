import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Stream Analytics Stream Input Blob.
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
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: azurerm_resource_group.example.name,
 *     location: azurerm_resource_group.example.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleContainer = new azure.storage.Container("exampleContainer", {
 *     storageAccountName: exampleAccount.name,
 *     containerAccessType: "private",
 * });
 * const exampleStreamInputBlob = new azure.streamanalytics.StreamInputBlob("exampleStreamInputBlob", {
 *     streamAnalyticsJobName: exampleJob.then(exampleJob => exampleJob.name),
 *     resourceGroupName: exampleJob.then(exampleJob => exampleJob.resourceGroupName),
 *     storageAccountName: exampleAccount.name,
 *     storageAccountKey: exampleAccount.primaryAccessKey,
 *     storageContainerName: exampleContainer.name,
 *     pathPattern: "some-random-pattern",
 *     dateFormat: "yyyy/MM/dd",
 *     timeFormat: "HH",
 *     serialization: {
 *         type: "Json",
 *         encoding: "UTF8",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Stream Analytics Stream Input Blob's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:streamanalytics/streamInputBlob:StreamInputBlob example /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/group1/providers/Microsoft.StreamAnalytics/streamingjobs/job1/inputs/input1
 * ```
 */
export declare class StreamInputBlob extends pulumi.CustomResource {
    /**
     * Get an existing StreamInputBlob resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StreamInputBlobState, opts?: pulumi.CustomResourceOptions): StreamInputBlob;
    /**
     * Returns true if the given object is an instance of StreamInputBlob.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StreamInputBlob;
    /**
     * The date format. Wherever `{date}` appears in `pathPattern`, the value of this property is used as the date format instead.
     */
    readonly dateFormat: pulumi.Output<string>;
    /**
     * The name of the Stream Input Blob. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job.
     */
    readonly pathPattern: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `serialization` block as defined below.
     */
    readonly serialization: pulumi.Output<outputs.streamanalytics.StreamInputBlobSerialization>;
    /**
     * The Access Key which should be used to connect to this Storage Account.
     */
    readonly storageAccountKey: pulumi.Output<string>;
    /**
     * The name of the Storage Account.
     */
    readonly storageAccountName: pulumi.Output<string>;
    /**
     * The name of the Container within the Storage Account.
     */
    readonly storageContainerName: pulumi.Output<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    readonly streamAnalyticsJobName: pulumi.Output<string>;
    /**
     * The time format. Wherever `{time}` appears in `pathPattern`, the value of this property is used as the time format instead.
     */
    readonly timeFormat: pulumi.Output<string>;
    /**
     * Create a StreamInputBlob resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StreamInputBlobArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering StreamInputBlob resources.
 */
export interface StreamInputBlobState {
    /**
     * The date format. Wherever `{date}` appears in `pathPattern`, the value of this property is used as the date format instead.
     */
    dateFormat?: pulumi.Input<string>;
    /**
     * The name of the Stream Input Blob. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job.
     */
    pathPattern?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `serialization` block as defined below.
     */
    serialization?: pulumi.Input<inputs.streamanalytics.StreamInputBlobSerialization>;
    /**
     * The Access Key which should be used to connect to this Storage Account.
     */
    storageAccountKey?: pulumi.Input<string>;
    /**
     * The name of the Storage Account.
     */
    storageAccountName?: pulumi.Input<string>;
    /**
     * The name of the Container within the Storage Account.
     */
    storageContainerName?: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    streamAnalyticsJobName?: pulumi.Input<string>;
    /**
     * The time format. Wherever `{time}` appears in `pathPattern`, the value of this property is used as the time format instead.
     */
    timeFormat?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a StreamInputBlob resource.
 */
export interface StreamInputBlobArgs {
    /**
     * The date format. Wherever `{date}` appears in `pathPattern`, the value of this property is used as the date format instead.
     */
    dateFormat: pulumi.Input<string>;
    /**
     * The name of the Stream Input Blob. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job.
     */
    pathPattern: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `serialization` block as defined below.
     */
    serialization: pulumi.Input<inputs.streamanalytics.StreamInputBlobSerialization>;
    /**
     * The Access Key which should be used to connect to this Storage Account.
     */
    storageAccountKey: pulumi.Input<string>;
    /**
     * The name of the Storage Account.
     */
    storageAccountName: pulumi.Input<string>;
    /**
     * The name of the Container within the Storage Account.
     */
    storageContainerName: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    streamAnalyticsJobName: pulumi.Input<string>;
    /**
     * The time format. Wherever `{time}` appears in `pathPattern`, the value of this property is used as the time format instead.
     */
    timeFormat: pulumi.Input<string>;
}
