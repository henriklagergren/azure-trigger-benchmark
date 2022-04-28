import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Stream Analytics Reference Input from MS SQL. Reference data (also known as a lookup table) is a finite data set that is static or slowly changing in nature, used to perform a lookup or to correlate with your data stream. Learn more [here](https://docs.microsoft.com/en-us/azure/stream-analytics/stream-analytics-use-reference-data#azure-sql-database).
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
 * const exampleServer = new azure.mssql.Server("exampleServer", {
 *     resourceGroupName: azurerm_resource_group.example.name,
 *     location: azurerm_resource_group.example.location,
 *     version: "12.0",
 *     administratorLogin: "admin",
 *     administratorLoginPassword: "password",
 * });
 * const exampleDatabase = new azure.mssql.Database("exampleDatabase", {serverId: exampleServer.id});
 * const exampleReferenceInputMssql = new azure.streamanalytics.ReferenceInputMssql("exampleReferenceInputMssql", {
 *     resourceGroupName: azurerm_stream_analytics_job.example.resource_group_name,
 *     streamAnalyticsJobName: azurerm_stream_analytics_job.example.name,
 *     server: exampleServer.fullyQualifiedDomainName,
 *     database: exampleDatabase.name,
 *     username: "exampleuser",
 *     password: "examplepassword",
 *     refreshType: "RefreshPeriodicallyWithFull",
 *     refreshIntervalDuration: "00:20:00",
 *     fullSnapshotQuery: `    SELECT *
 *     INTO [YourOutputAlias]
 *     FROM [YourInputAlias]
 * `,
 * });
 * ```
 *
 * ## Import
 *
 * Stream Analytics can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:streamanalytics/referenceInputMssql:ReferenceInputMssql example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.StreamAnalytics/streamingjobs/job1/inputs/input1
 * ```
 */
export declare class ReferenceInputMssql extends pulumi.CustomResource {
    /**
     * Get an existing ReferenceInputMssql resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ReferenceInputMssqlState, opts?: pulumi.CustomResourceOptions): ReferenceInputMssql;
    /**
     * Returns true if the given object is an instance of ReferenceInputMssql.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ReferenceInputMssql;
    /**
     * The MS SQL database name where the reference data exists.
     */
    readonly database: pulumi.Output<string>;
    /**
     * The query used to retrieve incremental changes in the reference data from the MS SQL database. Cannot be set when `refreshType` is `Static`.
     */
    readonly deltaSnapshotQuery: pulumi.Output<string | undefined>;
    /**
     * The query used to retrieve the reference data from the MS SQL database.
     */
    readonly fullSnapshotQuery: pulumi.Output<string>;
    /**
     * The name of the Reference Input MS SQL data. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The username to connect to the MS SQL database.
     */
    readonly password: pulumi.Output<string>;
    /**
     * The frequency in `hh:mm:ss` with which the reference data should be retrieved from the MS SQL database e.g. `00:20:00` for every 20 minutes. Must be set when `refreshType` is `RefreshPeriodicallyWithFull` or `RefreshPeriodicallyWithDelta`.
     */
    readonly refreshIntervalDuration: pulumi.Output<string | undefined>;
    /**
     * Defines whether and how the reference data should be refreshed. Accepted values are `Static`, `RefreshPeriodicallyWithFull` and `RefreshPeriodicallyWithDelta`.
     */
    readonly refreshType: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The fully qualified domain name of the MS SQL server.
     */
    readonly server: pulumi.Output<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    readonly streamAnalyticsJobName: pulumi.Output<string>;
    /**
     * The username to connect to the MS SQL database.
     */
    readonly username: pulumi.Output<string>;
    /**
     * Create a ReferenceInputMssql resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReferenceInputMssqlArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ReferenceInputMssql resources.
 */
export interface ReferenceInputMssqlState {
    /**
     * The MS SQL database name where the reference data exists.
     */
    database?: pulumi.Input<string>;
    /**
     * The query used to retrieve incremental changes in the reference data from the MS SQL database. Cannot be set when `refreshType` is `Static`.
     */
    deltaSnapshotQuery?: pulumi.Input<string>;
    /**
     * The query used to retrieve the reference data from the MS SQL database.
     */
    fullSnapshotQuery?: pulumi.Input<string>;
    /**
     * The name of the Reference Input MS SQL data. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The username to connect to the MS SQL database.
     */
    password?: pulumi.Input<string>;
    /**
     * The frequency in `hh:mm:ss` with which the reference data should be retrieved from the MS SQL database e.g. `00:20:00` for every 20 minutes. Must be set when `refreshType` is `RefreshPeriodicallyWithFull` or `RefreshPeriodicallyWithDelta`.
     */
    refreshIntervalDuration?: pulumi.Input<string>;
    /**
     * Defines whether and how the reference data should be refreshed. Accepted values are `Static`, `RefreshPeriodicallyWithFull` and `RefreshPeriodicallyWithDelta`.
     */
    refreshType?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The fully qualified domain name of the MS SQL server.
     */
    server?: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    streamAnalyticsJobName?: pulumi.Input<string>;
    /**
     * The username to connect to the MS SQL database.
     */
    username?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ReferenceInputMssql resource.
 */
export interface ReferenceInputMssqlArgs {
    /**
     * The MS SQL database name where the reference data exists.
     */
    database: pulumi.Input<string>;
    /**
     * The query used to retrieve incremental changes in the reference data from the MS SQL database. Cannot be set when `refreshType` is `Static`.
     */
    deltaSnapshotQuery?: pulumi.Input<string>;
    /**
     * The query used to retrieve the reference data from the MS SQL database.
     */
    fullSnapshotQuery: pulumi.Input<string>;
    /**
     * The name of the Reference Input MS SQL data. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The username to connect to the MS SQL database.
     */
    password: pulumi.Input<string>;
    /**
     * The frequency in `hh:mm:ss` with which the reference data should be retrieved from the MS SQL database e.g. `00:20:00` for every 20 minutes. Must be set when `refreshType` is `RefreshPeriodicallyWithFull` or `RefreshPeriodicallyWithDelta`.
     */
    refreshIntervalDuration?: pulumi.Input<string>;
    /**
     * Defines whether and how the reference data should be refreshed. Accepted values are `Static`, `RefreshPeriodicallyWithFull` and `RefreshPeriodicallyWithDelta`.
     */
    refreshType: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The fully qualified domain name of the MS SQL server.
     */
    server: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    streamAnalyticsJobName: pulumi.Input<string>;
    /**
     * The username to connect to the MS SQL database.
     */
    username: pulumi.Input<string>;
}
