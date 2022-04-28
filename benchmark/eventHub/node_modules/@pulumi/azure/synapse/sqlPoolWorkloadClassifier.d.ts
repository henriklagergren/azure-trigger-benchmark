import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Synapse SQL Pool Workload Classifier.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountKind: "BlobStorage",
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleDataLakeGen2Filesystem = new azure.storage.DataLakeGen2Filesystem("exampleDataLakeGen2Filesystem", {storageAccountId: exampleAccount.id});
 * const exampleWorkspace = new azure.synapse.Workspace("exampleWorkspace", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     storageDataLakeGen2FilesystemId: exampleDataLakeGen2Filesystem.id,
 *     sqlAdministratorLogin: "sqladminuser",
 *     sqlAdministratorLoginPassword: "H@Sh1CoR3!",
 * });
 * const exampleSqlPool = new azure.synapse.SqlPool("exampleSqlPool", {
 *     synapseWorkspaceId: exampleWorkspace.id,
 *     skuName: "DW100c",
 *     createMode: "Default",
 * });
 * const exampleSqlPoolWorkloadGroup = new azure.synapse.SqlPoolWorkloadGroup("exampleSqlPoolWorkloadGroup", {
 *     sqlPoolId: exampleSqlPool.id,
 *     importance: "normal",
 *     maxResourcePercent: 100,
 *     minResourcePercent: 0,
 *     maxResourcePercentPerRequest: 3,
 *     minResourcePercentPerRequest: 3,
 *     queryExecutionTimeoutInSeconds: 0,
 * });
 * const exampleSqlPoolWorkloadClassifier = new azure.synapse.SqlPoolWorkloadClassifier("exampleSqlPoolWorkloadClassifier", {
 *     workloadGroupId: exampleSqlPoolWorkloadGroup.id,
 *     context: "example_context",
 *     endTime: "14:00",
 *     importance: "high",
 *     label: "example_label",
 *     memberName: "dbo",
 *     startTime: "12:00",
 * });
 * ```
 *
 * ## Import
 *
 * Synapse SQL Pool Workload Classifiers can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:synapse/sqlPoolWorkloadClassifier:SqlPoolWorkloadClassifier example /subscriptions/12345678-1234-9876-4563-123456789012/resourceGroups/resGroup1/providers/Microsoft.Synapse/workspaces/workspace1/sqlPools/sqlPool1/workloadGroups/workloadGroup1/workloadClassifiers/workloadClassifier1
 * ```
 */
export declare class SqlPoolWorkloadClassifier extends pulumi.CustomResource {
    /**
     * Get an existing SqlPoolWorkloadClassifier resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SqlPoolWorkloadClassifierState, opts?: pulumi.CustomResourceOptions): SqlPoolWorkloadClassifier;
    /**
     * Returns true if the given object is an instance of SqlPoolWorkloadClassifier.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SqlPoolWorkloadClassifier;
    /**
     * Specifies the session context value that a request can be classified against.
     */
    readonly context: pulumi.Output<string | undefined>;
    /**
     * The workload classifier end time for classification. It's of the `HH:MM` format in UTC time zone.
     */
    readonly endTime: pulumi.Output<string | undefined>;
    /**
     * The workload classifier importance. The allowed values are `low`, `belowNormal`, `normal`, `aboveNormal` and `high`.
     */
    readonly importance: pulumi.Output<string | undefined>;
    /**
     * Specifies the label value that a request can be classified against.
     */
    readonly label: pulumi.Output<string | undefined>;
    /**
     * The workload classifier member name used to classified against.
     */
    readonly memberName: pulumi.Output<string>;
    /**
     * The name which should be used for this Synapse SQL Pool Workload Classifier. Changing this forces a new Synapse SQL Pool Workload Classifier to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The workload classifier start time for classification. It's of the `HH:MM` format in UTC time zone.
     */
    readonly startTime: pulumi.Output<string | undefined>;
    /**
     * The ID of the Synapse Sql Pool Workload Group. Changing this forces a new Synapse SQL Pool Workload Classifier to be created.
     */
    readonly workloadGroupId: pulumi.Output<string>;
    /**
     * Create a SqlPoolWorkloadClassifier resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlPoolWorkloadClassifierArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SqlPoolWorkloadClassifier resources.
 */
export interface SqlPoolWorkloadClassifierState {
    /**
     * Specifies the session context value that a request can be classified against.
     */
    context?: pulumi.Input<string>;
    /**
     * The workload classifier end time for classification. It's of the `HH:MM` format in UTC time zone.
     */
    endTime?: pulumi.Input<string>;
    /**
     * The workload classifier importance. The allowed values are `low`, `belowNormal`, `normal`, `aboveNormal` and `high`.
     */
    importance?: pulumi.Input<string>;
    /**
     * Specifies the label value that a request can be classified against.
     */
    label?: pulumi.Input<string>;
    /**
     * The workload classifier member name used to classified against.
     */
    memberName?: pulumi.Input<string>;
    /**
     * The name which should be used for this Synapse SQL Pool Workload Classifier. Changing this forces a new Synapse SQL Pool Workload Classifier to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The workload classifier start time for classification. It's of the `HH:MM` format in UTC time zone.
     */
    startTime?: pulumi.Input<string>;
    /**
     * The ID of the Synapse Sql Pool Workload Group. Changing this forces a new Synapse SQL Pool Workload Classifier to be created.
     */
    workloadGroupId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SqlPoolWorkloadClassifier resource.
 */
export interface SqlPoolWorkloadClassifierArgs {
    /**
     * Specifies the session context value that a request can be classified against.
     */
    context?: pulumi.Input<string>;
    /**
     * The workload classifier end time for classification. It's of the `HH:MM` format in UTC time zone.
     */
    endTime?: pulumi.Input<string>;
    /**
     * The workload classifier importance. The allowed values are `low`, `belowNormal`, `normal`, `aboveNormal` and `high`.
     */
    importance?: pulumi.Input<string>;
    /**
     * Specifies the label value that a request can be classified against.
     */
    label?: pulumi.Input<string>;
    /**
     * The workload classifier member name used to classified against.
     */
    memberName: pulumi.Input<string>;
    /**
     * The name which should be used for this Synapse SQL Pool Workload Classifier. Changing this forces a new Synapse SQL Pool Workload Classifier to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The workload classifier start time for classification. It's of the `HH:MM` format in UTC time zone.
     */
    startTime?: pulumi.Input<string>;
    /**
     * The ID of the Synapse Sql Pool Workload Group. Changing this forces a new Synapse SQL Pool Workload Classifier to be created.
     */
    workloadGroupId: pulumi.Input<string>;
}
