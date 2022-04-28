import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a SQL Database within a Cosmos DB Account.
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
 * ```
 *
 * ## Import
 *
 * Cosmos SQL Database can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:cosmosdb/sqlDatabase:SqlDatabase db1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.DocumentDB/databaseAccounts/account1/sqlDatabases/db1
 * ```
 */
export declare class SqlDatabase extends pulumi.CustomResource {
    /**
     * Get an existing SqlDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SqlDatabaseState, opts?: pulumi.CustomResourceOptions): SqlDatabase;
    /**
     * Returns true if the given object is an instance of SqlDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SqlDatabase;
    /**
     * The name of the Cosmos DB SQL Database to create the table within. Changing this forces a new resource to be created.
     */
    readonly accountName: pulumi.Output<string>;
    /**
     * An `autoscaleSettings` block as defined below. This must be set upon database creation otherwise it cannot be updated without a manual destroy-apply.
     */
    readonly autoscaleSettings: pulumi.Output<outputs.cosmosdb.SqlDatabaseAutoscaleSettings | undefined>;
    /**
     * Specifies the name of the Cosmos DB SQL Database. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which the Cosmos DB SQL Database is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    readonly throughput: pulumi.Output<number>;
    /**
     * Create a SqlDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlDatabaseArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SqlDatabase resources.
 */
export interface SqlDatabaseState {
    /**
     * The name of the Cosmos DB SQL Database to create the table within. Changing this forces a new resource to be created.
     */
    accountName?: pulumi.Input<string>;
    /**
     * An `autoscaleSettings` block as defined below. This must be set upon database creation otherwise it cannot be updated without a manual destroy-apply.
     */
    autoscaleSettings?: pulumi.Input<inputs.cosmosdb.SqlDatabaseAutoscaleSettings>;
    /**
     * Specifies the name of the Cosmos DB SQL Database. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Cosmos DB SQL Database is created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    throughput?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a SqlDatabase resource.
 */
export interface SqlDatabaseArgs {
    /**
     * The name of the Cosmos DB SQL Database to create the table within. Changing this forces a new resource to be created.
     */
    accountName: pulumi.Input<string>;
    /**
     * An `autoscaleSettings` block as defined below. This must be set upon database creation otherwise it cannot be updated without a manual destroy-apply.
     */
    autoscaleSettings?: pulumi.Input<inputs.cosmosdb.SqlDatabaseAutoscaleSettings>;
    /**
     * Specifies the name of the Cosmos DB SQL Database. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Cosmos DB SQL Database is created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    throughput?: pulumi.Input<number>;
}
