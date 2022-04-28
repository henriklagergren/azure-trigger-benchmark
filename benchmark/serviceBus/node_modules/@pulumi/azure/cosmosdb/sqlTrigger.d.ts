import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an SQL Trigger.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleAccount = azure.cosmosdb.getAccount({
 *     name: "tfex-cosmosdb-account",
 *     resourceGroupName: "tfex-cosmosdb-account-rg",
 * });
 * const exampleSqlDatabase = new azure.cosmosdb.SqlDatabase("exampleSqlDatabase", {
 *     resourceGroupName: exampleAccount.then(exampleAccount => exampleAccount.resourceGroupName),
 *     accountName: exampleAccount.then(exampleAccount => exampleAccount.name),
 *     throughput: 400,
 * });
 * const exampleSqlContainer = new azure.cosmosdb.SqlContainer("exampleSqlContainer", {
 *     resourceGroupName: azurerm_cosmosdb_account.example.resource_group_name,
 *     accountName: azurerm_cosmosdb_account.example.name,
 *     databaseName: exampleSqlDatabase.name,
 *     partitionKeyPath: "/id",
 * });
 * const exampleSqlTrigger = new azure.cosmosdb.SqlTrigger("exampleSqlTrigger", {
 *     containerId: exampleSqlContainer.id,
 *     body: "function trigger(){}",
 *     operation: "Delete",
 *     type: "Post",
 * });
 * ```
 *
 * ## Import
 *
 * SQL Triggers can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:cosmosdb/sqlTrigger:SqlTrigger example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DocumentDB/databaseAccounts/account1/sqlDatabases/database1/containers/container1/triggers/trigger1
 * ```
 */
export declare class SqlTrigger extends pulumi.CustomResource {
    /**
     * Get an existing SqlTrigger resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SqlTriggerState, opts?: pulumi.CustomResourceOptions): SqlTrigger;
    /**
     * Returns true if the given object is an instance of SqlTrigger.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SqlTrigger;
    /**
     * Body of the Trigger.
     */
    readonly body: pulumi.Output<string>;
    /**
     * The id of the Cosmos DB SQL Container to create the SQL Trigger within. Changing this forces a new SQL Trigger to be created.
     */
    readonly containerId: pulumi.Output<string>;
    /**
     * The name which should be used for this SQL Trigger. Changing this forces a new SQL Trigger to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The operation the trigger is associated with. Possible values are `All`, `Create`, `Update`, `Delete` and `Replace`.
     */
    readonly operation: pulumi.Output<string>;
    /**
     * Type of the Trigger. Possible values are `Pre` and `Post`.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a SqlTrigger resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlTriggerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SqlTrigger resources.
 */
export interface SqlTriggerState {
    /**
     * Body of the Trigger.
     */
    body?: pulumi.Input<string>;
    /**
     * The id of the Cosmos DB SQL Container to create the SQL Trigger within. Changing this forces a new SQL Trigger to be created.
     */
    containerId?: pulumi.Input<string>;
    /**
     * The name which should be used for this SQL Trigger. Changing this forces a new SQL Trigger to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The operation the trigger is associated with. Possible values are `All`, `Create`, `Update`, `Delete` and `Replace`.
     */
    operation?: pulumi.Input<string>;
    /**
     * Type of the Trigger. Possible values are `Pre` and `Post`.
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SqlTrigger resource.
 */
export interface SqlTriggerArgs {
    /**
     * Body of the Trigger.
     */
    body: pulumi.Input<string>;
    /**
     * The id of the Cosmos DB SQL Container to create the SQL Trigger within. Changing this forces a new SQL Trigger to be created.
     */
    containerId: pulumi.Input<string>;
    /**
     * The name which should be used for this SQL Trigger. Changing this forces a new SQL Trigger to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The operation the trigger is associated with. Possible values are `All`, `Create`, `Update`, `Delete` and `Replace`.
     */
    operation: pulumi.Input<string>;
    /**
     * Type of the Trigger. Possible values are `Pre` and `Post`.
     */
    type: pulumi.Input<string>;
}
