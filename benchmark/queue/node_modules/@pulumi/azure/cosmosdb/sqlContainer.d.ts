import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a SQL Container within a Cosmos DB Account.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.cosmosdb.SqlContainer("example", {
 *     resourceGroupName: azurerm_cosmosdb_account.example.resource_group_name,
 *     accountName: azurerm_cosmosdb_account.example.name,
 *     databaseName: azurerm_cosmosdb_sql_database.example.name,
 *     partitionKeyPath: "/definition/id",
 *     partitionKeyVersion: 1,
 *     throughput: 400,
 *     indexingPolicy: {
 *         indexingMode: "Consistent",
 *         includedPaths: [
 *             {
 *                 path: "/*",
 *             },
 *             {
 *                 path: "/included/?",
 *             },
 *         ],
 *         excludedPaths: [{
 *             path: "/excluded/?",
 *         }],
 *     },
 *     uniqueKeys: [{
 *         paths: [
 *             "/definition/idlong",
 *             "/definition/idshort",
 *         ],
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Cosmos SQL Containers can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:cosmosdb/sqlContainer:SqlContainer example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DocumentDB/databaseAccounts/account1/sqlDatabases/database1/containers/container1
 * ```
 */
export declare class SqlContainer extends pulumi.CustomResource {
    /**
     * Get an existing SqlContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SqlContainerState, opts?: pulumi.CustomResourceOptions): SqlContainer;
    /**
     * Returns true if the given object is an instance of SqlContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SqlContainer;
    /**
     * The name of the Cosmos DB Account to create the container within. Changing this forces a new resource to be created.
     */
    readonly accountName: pulumi.Output<string>;
    /**
     * The default time to live of Analytical Storage for this SQL container. If present and the value is set to `-1`, it is equal to infinity, and items don’t expire by default. If present and the value is set to some number `n` – items will expire `n` seconds after their last modified time.
     */
    readonly analyticalStorageTtl: pulumi.Output<number | undefined>;
    /**
     * An `autoscaleSettings` block as defined below. This must be set upon database creation otherwise it cannot be updated without a manual destroy-apply. Requires `partitionKeyPath` to be set.
     */
    readonly autoscaleSettings: pulumi.Output<outputs.cosmosdb.SqlContainerAutoscaleSettings | undefined>;
    /**
     * A `conflictResolutionPolicy` blocks as defined below.
     */
    readonly conflictResolutionPolicy: pulumi.Output<outputs.cosmosdb.SqlContainerConflictResolutionPolicy>;
    /**
     * The name of the Cosmos DB SQL Database to create the container within. Changing this forces a new resource to be created.
     */
    readonly databaseName: pulumi.Output<string>;
    /**
     * The default time to live of SQL container. If missing, items are not expired automatically. If present and the value is set to `-1`, it is equal to infinity, and items don’t expire by default. If present and the value is set to some number `n` – items will expire `n` seconds after their last modified time.
     */
    readonly defaultTtl: pulumi.Output<number>;
    /**
     * An `indexingPolicy` block as defined below.
     */
    readonly indexingPolicy: pulumi.Output<outputs.cosmosdb.SqlContainerIndexingPolicy>;
    /**
     * Specifies the name of the Cosmos DB SQL Container. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Define a partition key. Changing this forces a new resource to be created.
     */
    readonly partitionKeyPath: pulumi.Output<string>;
    /**
     * Define a partition key version. Changing this forces a new resource to be created. Possible values are `1 `and `2`. This should be set to `2` in order to use large partition keys.
     */
    readonly partitionKeyVersion: pulumi.Output<number | undefined>;
    /**
     * The name of the resource group in which the Cosmos DB SQL Container is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The throughput of SQL container (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon container creation otherwise it cannot be updated without a manual resource destroy-apply.
     */
    readonly throughput: pulumi.Output<number>;
    /**
     * One or more `uniqueKey` blocks as defined below. Changing this forces a new resource to be created.
     */
    readonly uniqueKeys: pulumi.Output<outputs.cosmosdb.SqlContainerUniqueKey[] | undefined>;
    /**
     * Create a SqlContainer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlContainerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SqlContainer resources.
 */
export interface SqlContainerState {
    /**
     * The name of the Cosmos DB Account to create the container within. Changing this forces a new resource to be created.
     */
    accountName?: pulumi.Input<string>;
    /**
     * The default time to live of Analytical Storage for this SQL container. If present and the value is set to `-1`, it is equal to infinity, and items don’t expire by default. If present and the value is set to some number `n` – items will expire `n` seconds after their last modified time.
     */
    analyticalStorageTtl?: pulumi.Input<number>;
    /**
     * An `autoscaleSettings` block as defined below. This must be set upon database creation otherwise it cannot be updated without a manual destroy-apply. Requires `partitionKeyPath` to be set.
     */
    autoscaleSettings?: pulumi.Input<inputs.cosmosdb.SqlContainerAutoscaleSettings>;
    /**
     * A `conflictResolutionPolicy` blocks as defined below.
     */
    conflictResolutionPolicy?: pulumi.Input<inputs.cosmosdb.SqlContainerConflictResolutionPolicy>;
    /**
     * The name of the Cosmos DB SQL Database to create the container within. Changing this forces a new resource to be created.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The default time to live of SQL container. If missing, items are not expired automatically. If present and the value is set to `-1`, it is equal to infinity, and items don’t expire by default. If present and the value is set to some number `n` – items will expire `n` seconds after their last modified time.
     */
    defaultTtl?: pulumi.Input<number>;
    /**
     * An `indexingPolicy` block as defined below.
     */
    indexingPolicy?: pulumi.Input<inputs.cosmosdb.SqlContainerIndexingPolicy>;
    /**
     * Specifies the name of the Cosmos DB SQL Container. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Define a partition key. Changing this forces a new resource to be created.
     */
    partitionKeyPath?: pulumi.Input<string>;
    /**
     * Define a partition key version. Changing this forces a new resource to be created. Possible values are `1 `and `2`. This should be set to `2` in order to use large partition keys.
     */
    partitionKeyVersion?: pulumi.Input<number>;
    /**
     * The name of the resource group in which the Cosmos DB SQL Container is created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The throughput of SQL container (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon container creation otherwise it cannot be updated without a manual resource destroy-apply.
     */
    throughput?: pulumi.Input<number>;
    /**
     * One or more `uniqueKey` blocks as defined below. Changing this forces a new resource to be created.
     */
    uniqueKeys?: pulumi.Input<pulumi.Input<inputs.cosmosdb.SqlContainerUniqueKey>[]>;
}
/**
 * The set of arguments for constructing a SqlContainer resource.
 */
export interface SqlContainerArgs {
    /**
     * The name of the Cosmos DB Account to create the container within. Changing this forces a new resource to be created.
     */
    accountName: pulumi.Input<string>;
    /**
     * The default time to live of Analytical Storage for this SQL container. If present and the value is set to `-1`, it is equal to infinity, and items don’t expire by default. If present and the value is set to some number `n` – items will expire `n` seconds after their last modified time.
     */
    analyticalStorageTtl?: pulumi.Input<number>;
    /**
     * An `autoscaleSettings` block as defined below. This must be set upon database creation otherwise it cannot be updated without a manual destroy-apply. Requires `partitionKeyPath` to be set.
     */
    autoscaleSettings?: pulumi.Input<inputs.cosmosdb.SqlContainerAutoscaleSettings>;
    /**
     * A `conflictResolutionPolicy` blocks as defined below.
     */
    conflictResolutionPolicy?: pulumi.Input<inputs.cosmosdb.SqlContainerConflictResolutionPolicy>;
    /**
     * The name of the Cosmos DB SQL Database to create the container within. Changing this forces a new resource to be created.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The default time to live of SQL container. If missing, items are not expired automatically. If present and the value is set to `-1`, it is equal to infinity, and items don’t expire by default. If present and the value is set to some number `n` – items will expire `n` seconds after their last modified time.
     */
    defaultTtl?: pulumi.Input<number>;
    /**
     * An `indexingPolicy` block as defined below.
     */
    indexingPolicy?: pulumi.Input<inputs.cosmosdb.SqlContainerIndexingPolicy>;
    /**
     * Specifies the name of the Cosmos DB SQL Container. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Define a partition key. Changing this forces a new resource to be created.
     */
    partitionKeyPath: pulumi.Input<string>;
    /**
     * Define a partition key version. Changing this forces a new resource to be created. Possible values are `1 `and `2`. This should be set to `2` in order to use large partition keys.
     */
    partitionKeyVersion?: pulumi.Input<number>;
    /**
     * The name of the resource group in which the Cosmos DB SQL Container is created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The throughput of SQL container (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon container creation otherwise it cannot be updated without a manual resource destroy-apply.
     */
    throughput?: pulumi.Input<number>;
    /**
     * One or more `uniqueKey` blocks as defined below. Changing this forces a new resource to be created.
     */
    uniqueKeys?: pulumi.Input<pulumi.Input<inputs.cosmosdb.SqlContainerUniqueKey>[]>;
}
