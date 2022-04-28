import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Stream Analytics Output Table.
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
 *     resourceGroupName: exampleResourceGroup.then(exampleResourceGroup => exampleResourceGroup.name),
 *     location: exampleResourceGroup.then(exampleResourceGroup => exampleResourceGroup.location),
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleTable = new azure.storage.Table("exampleTable", {storageAccountName: exampleAccount.name});
 * const exampleOutputTable = new azure.streamanalytics.OutputTable("exampleOutputTable", {
 *     streamAnalyticsJobName: azurerm_stream_analytics_job.example.name,
 *     resourceGroupName: azurerm_stream_analytics_job.example.resource_group_name,
 *     storageAccountName: exampleAccount.name,
 *     storageAccountKey: exampleAccount.primaryAccessKey,
 *     table: exampleTable.name,
 *     partitionKey: "foo",
 *     rowKey: "bar",
 *     batchSize: 100,
 * });
 * ```
 *
 * ## Import
 *
 * Stream Analytics Output to Table can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:streamanalytics/outputTable:OutputTable example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.StreamAnalytics/streamingjobs/job1/outputs/output1
 * ```
 */
export declare class OutputTable extends pulumi.CustomResource {
    /**
     * Get an existing OutputTable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OutputTableState, opts?: pulumi.CustomResourceOptions): OutputTable;
    /**
     * Returns true if the given object is an instance of OutputTable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is OutputTable;
    /**
     * The number of records for a batch operation. Must be between `1` and `100`.
     */
    readonly batchSize: pulumi.Output<number>;
    /**
     * The name of the Stream Output. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the output column that contains the partition key.
     */
    readonly partitionKey: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The name of the output column that contains the row key.
     */
    readonly rowKey: pulumi.Output<string>;
    /**
     * The Access Key which should be used to connect to this Storage Account.
     */
    readonly storageAccountKey: pulumi.Output<string>;
    /**
     * The name of the Storage Account.
     */
    readonly storageAccountName: pulumi.Output<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    readonly streamAnalyticsJobName: pulumi.Output<string>;
    /**
     * The name of the table where the stream should be output to.
     */
    readonly table: pulumi.Output<string>;
    /**
     * Create a OutputTable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OutputTableArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering OutputTable resources.
 */
export interface OutputTableState {
    /**
     * The number of records for a batch operation. Must be between `1` and `100`.
     */
    batchSize?: pulumi.Input<number>;
    /**
     * The name of the Stream Output. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the output column that contains the partition key.
     */
    partitionKey?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The name of the output column that contains the row key.
     */
    rowKey?: pulumi.Input<string>;
    /**
     * The Access Key which should be used to connect to this Storage Account.
     */
    storageAccountKey?: pulumi.Input<string>;
    /**
     * The name of the Storage Account.
     */
    storageAccountName?: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    streamAnalyticsJobName?: pulumi.Input<string>;
    /**
     * The name of the table where the stream should be output to.
     */
    table?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a OutputTable resource.
 */
export interface OutputTableArgs {
    /**
     * The number of records for a batch operation. Must be between `1` and `100`.
     */
    batchSize: pulumi.Input<number>;
    /**
     * The name of the Stream Output. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the output column that contains the partition key.
     */
    partitionKey: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the output column that contains the row key.
     */
    rowKey: pulumi.Input<string>;
    /**
     * The Access Key which should be used to connect to this Storage Account.
     */
    storageAccountKey: pulumi.Input<string>;
    /**
     * The name of the Storage Account.
     */
    storageAccountName: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    streamAnalyticsJobName: pulumi.Input<string>;
    /**
     * The name of the table where the stream should be output to.
     */
    table: pulumi.Input<string>;
}
