import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Stream Analytics Output to Microsoft SQL Server Database.
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
 * const exampleSqlServer = new azure.sql.SqlServer("exampleSqlServer", {
 *     resourceGroupName: azurerm_resource_group.example.name,
 *     location: azurerm_resource_group.example.location,
 *     version: "12.0",
 *     administratorLogin: "dbadmin",
 *     administratorLoginPassword: "example-password",
 * });
 * const exampleDatabase = new azure.sql.Database("exampleDatabase", {
 *     resourceGroupName: azurerm_resource_group.example.name,
 *     location: azurerm_resource_group.example.location,
 *     serverName: exampleSqlServer.name,
 *     requestedServiceObjectiveName: "S0",
 *     collation: "SQL_LATIN1_GENERAL_CP1_CI_AS",
 *     maxSizeBytes: "268435456000",
 *     createMode: "Default",
 * });
 * const exampleOutputMssql = new azure.streamanalytics.OutputMssql("exampleOutputMssql", {
 *     streamAnalyticsJobName: azurerm_stream_analytics_job.example.name,
 *     resourceGroupName: azurerm_stream_analytics_job.example.resource_group_name,
 *     server: exampleSqlServer.fullyQualifiedDomainName,
 *     user: exampleSqlServer.administratorLogin,
 *     password: exampleSqlServer.administratorLoginPassword,
 *     database: exampleDatabase.name,
 *     table: "ExampleTable",
 * });
 * ```
 *
 * ## Import
 *
 * Stream Analytics Outputs to Microsoft SQL Server Database can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:streamanalytics/outputMssql:OutputMssql example /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/group1/providers/Microsoft.StreamAnalytics/streamingjobs/job1/outputs/output1
 * ```
 */
export declare class OutputMssql extends pulumi.CustomResource {
    /**
     * Get an existing OutputMssql resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OutputMssqlState, opts?: pulumi.CustomResourceOptions): OutputMssql;
    /**
     * Returns true if the given object is an instance of OutputMssql.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is OutputMssql;
    readonly database: pulumi.Output<string>;
    /**
     * The name of the Stream Output. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Password used together with username, to login to the Microsoft SQL Server. Changing this forces a new resource to be created.
     */
    readonly password: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The SQL server url. Changing this forces a new resource to be created.
     */
    readonly server: pulumi.Output<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    readonly streamAnalyticsJobName: pulumi.Output<string>;
    /**
     * Table in the database that the output points to. Changing this forces a new resource to be created.
     */
    readonly table: pulumi.Output<string>;
    /**
     * Username used to login to the Microsoft SQL Server. Changing this forces a new resource to be created.
     */
    readonly user: pulumi.Output<string>;
    /**
     * Create a OutputMssql resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OutputMssqlArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering OutputMssql resources.
 */
export interface OutputMssqlState {
    database?: pulumi.Input<string>;
    /**
     * The name of the Stream Output. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Password used together with username, to login to the Microsoft SQL Server. Changing this forces a new resource to be created.
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The SQL server url. Changing this forces a new resource to be created.
     */
    server?: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    streamAnalyticsJobName?: pulumi.Input<string>;
    /**
     * Table in the database that the output points to. Changing this forces a new resource to be created.
     */
    table?: pulumi.Input<string>;
    /**
     * Username used to login to the Microsoft SQL Server. Changing this forces a new resource to be created.
     */
    user?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a OutputMssql resource.
 */
export interface OutputMssqlArgs {
    database: pulumi.Input<string>;
    /**
     * The name of the Stream Output. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Password used together with username, to login to the Microsoft SQL Server. Changing this forces a new resource to be created.
     */
    password: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SQL server url. Changing this forces a new resource to be created.
     */
    server: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    streamAnalyticsJobName: pulumi.Input<string>;
    /**
     * Table in the database that the output points to. Changing this forces a new resource to be created.
     */
    table: pulumi.Input<string>;
    /**
     * Username used to login to the Microsoft SQL Server. Changing this forces a new resource to be created.
     */
    user: pulumi.Input<string>;
}
