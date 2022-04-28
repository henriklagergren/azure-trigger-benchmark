import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Stream Analytics Output to an Azure Synapse Analytics Workspace.
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
 *     accountKind: "StorageV2",
 *     isHnsEnabled: "true",
 * });
 * const exampleDataLakeGen2Filesystem = new azure.storage.DataLakeGen2Filesystem("exampleDataLakeGen2Filesystem", {storageAccountId: exampleAccount.id});
 * const exampleWorkspace = new azure.synapse.Workspace("exampleWorkspace", {
 *     resourceGroupName: azurerm_resource_group.example.name,
 *     location: azurerm_resource_group.example.location,
 *     storageDataLakeGen2FilesystemId: exampleDataLakeGen2Filesystem.id,
 *     sqlAdministratorLogin: "sqladminuser",
 *     sqlAdministratorLoginPassword: "H@Sh1CoR3!",
 * });
 * const exampleOutputSynapse = new azure.streamanalytics.OutputSynapse("exampleOutputSynapse", {
 *     streamAnalyticsJobName: azurerm_stream_analytics_job.example.name,
 *     resourceGroupName: azurerm_stream_analytics_job.example.resource_group_name,
 *     server: azurerm_synapse_workspace.test.connectivity_endpoints.sqlOnDemand,
 *     user: azurerm_synapse_workspace.test.sql_administrator_login,
 *     password: azurerm_synapse_workspace.test.sql_administrator_login_password,
 *     database: "master",
 *     table: "ExampleTable",
 * });
 * ```
 *
 * ## Import
 *
 * A Stream Analytics Output to an Azure Synapse Analytics Workspace can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:streamanalytics/outputSynapse:OutputSynapse example /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/group1/providers/Microsoft.StreamAnalytics/streamingjobs/job1/outputs/output1
 * ```
 */
export declare class OutputSynapse extends pulumi.CustomResource {
    /**
     * Get an existing OutputSynapse resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OutputSynapseState, opts?: pulumi.CustomResourceOptions): OutputSynapse;
    /**
     * Returns true if the given object is an instance of OutputSynapse.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is OutputSynapse;
    /**
     * The name of the Azure SQL database. Changing this forces a new resource to be created.
     */
    readonly database: pulumi.Output<string>;
    /**
     * The name of the Stream Output. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The password that will be used to connect to the Azure SQL database. Changing this forces a new resource to be created.
     */
    readonly password: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The name of the SQL server containing the Azure SQL database. Changing this forces a new resource to be created.
     */
    readonly server: pulumi.Output<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    readonly streamAnalyticsJobName: pulumi.Output<string>;
    /**
     * The name of the table in the Azure SQL database. Changing this forces a new resource to be created.
     */
    readonly table: pulumi.Output<string>;
    /**
     * The user name that will be used to connect to the Azure SQL database. Changing this forces a new resource to be created.
     */
    readonly user: pulumi.Output<string>;
    /**
     * Create a OutputSynapse resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OutputSynapseArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering OutputSynapse resources.
 */
export interface OutputSynapseState {
    /**
     * The name of the Azure SQL database. Changing this forces a new resource to be created.
     */
    database?: pulumi.Input<string>;
    /**
     * The name of the Stream Output. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The password that will be used to connect to the Azure SQL database. Changing this forces a new resource to be created.
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The name of the SQL server containing the Azure SQL database. Changing this forces a new resource to be created.
     */
    server?: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    streamAnalyticsJobName?: pulumi.Input<string>;
    /**
     * The name of the table in the Azure SQL database. Changing this forces a new resource to be created.
     */
    table?: pulumi.Input<string>;
    /**
     * The user name that will be used to connect to the Azure SQL database. Changing this forces a new resource to be created.
     */
    user?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a OutputSynapse resource.
 */
export interface OutputSynapseArgs {
    /**
     * The name of the Azure SQL database. Changing this forces a new resource to be created.
     */
    database: pulumi.Input<string>;
    /**
     * The name of the Stream Output. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The password that will be used to connect to the Azure SQL database. Changing this forces a new resource to be created.
     */
    password: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the SQL server containing the Azure SQL database. Changing this forces a new resource to be created.
     */
    server: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    streamAnalyticsJobName: pulumi.Input<string>;
    /**
     * The name of the table in the Azure SQL database. Changing this forces a new resource to be created.
     */
    table: pulumi.Input<string>;
    /**
     * The user name that will be used to connect to the Azure SQL database. Changing this forces a new resource to be created.
     */
    user: pulumi.Input<string>;
}
