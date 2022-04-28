import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Gremlin Graph within a Cosmos DB Account.
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
 * const exampleGremlinDatabase = new azure.cosmosdb.GremlinDatabase("exampleGremlinDatabase", {
 *     resourceGroupName: exampleAccount.then(exampleAccount => exampleAccount.resourceGroupName),
 *     accountName: exampleAccount.then(exampleAccount => exampleAccount.name),
 * });
 * const exampleGremlinGraph = new azure.cosmosdb.GremlinGraph("exampleGremlinGraph", {
 *     resourceGroupName: azurerm_cosmosdb_account.example.resource_group_name,
 *     accountName: azurerm_cosmosdb_account.example.name,
 *     databaseName: exampleGremlinDatabase.name,
 *     partitionKeyPath: "/Example",
 *     throughput: 400,
 *     indexPolicies: [{
 *         automatic: true,
 *         indexingMode: "Consistent",
 *         includedPaths: ["/*"],
 *         excludedPaths: ["/\"_etag\"/?"],
 *     }],
 *     conflictResolutionPolicies: [{
 *         mode: "LastWriterWins",
 *         conflictResolutionPath: "/_ts",
 *     }],
 *     uniqueKeys: [{
 *         paths: [
 *             "/definition/id1",
 *             "/definition/id2",
 *         ],
 *     }],
 * });
 * ```
 *
 * > **NOTE:** The CosmosDB Account needs to have the `EnableGremlin` capability enabled to use this resource - which can be done by adding this to the `capabilities` list within the `azure.cosmosdb.Account` resource.
 *
 * ## Import
 *
 * Cosmos Gremlin Graphs can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:cosmosdb/gremlinGraph:GremlinGraph example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.DocumentDB/databaseAccounts/account1/gremlinDatabases/db1/graphs/graphs1
 * ```
 */
export declare class GremlinGraph extends pulumi.CustomResource {
    /**
     * Get an existing GremlinGraph resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GremlinGraphState, opts?: pulumi.CustomResourceOptions): GremlinGraph;
    /**
     * Returns true if the given object is an instance of GremlinGraph.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is GremlinGraph;
    /**
     * The name of the CosmosDB Account to create the Gremlin Graph within. Changing this forces a new resource to be created.
     */
    readonly accountName: pulumi.Output<string>;
    readonly autoscaleSettings: pulumi.Output<outputs.cosmosdb.GremlinGraphAutoscaleSettings | undefined>;
    /**
     * A `conflictResolutionPolicy` blocks as defined below.
     */
    readonly conflictResolutionPolicies: pulumi.Output<outputs.cosmosdb.GremlinGraphConflictResolutionPolicy[]>;
    /**
     * The name of the Cosmos DB Graph Database in which the Cosmos DB Gremlin Graph is created. Changing this forces a new resource to be created.
     */
    readonly databaseName: pulumi.Output<string>;
    /**
     * The default time to live (TTL) of the Gremlin graph. If the value is missing or set to "-1", items don’t expire.
     */
    readonly defaultTtl: pulumi.Output<number>;
    /**
     * The configuration of the indexing policy. One or more `indexPolicy` blocks as defined below.
     */
    readonly indexPolicies: pulumi.Output<outputs.cosmosdb.GremlinGraphIndexPolicy[]>;
    /**
     * Specifies the name of the Cosmos DB Gremlin Graph. Changing this forces a new resource to be created.
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
     * The name of the resource group in which the Cosmos DB Gremlin Graph is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The throughput of the Gremlin graph (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon database creation otherwise it cannot be updated without a manual destroy-apply.
     */
    readonly throughput: pulumi.Output<number>;
    /**
     * One or more `uniqueKey` blocks as defined below. Changing this forces a new resource to be created.
     */
    readonly uniqueKeys: pulumi.Output<outputs.cosmosdb.GremlinGraphUniqueKey[] | undefined>;
    /**
     * Create a GremlinGraph resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GremlinGraphArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering GremlinGraph resources.
 */
export interface GremlinGraphState {
    /**
     * The name of the CosmosDB Account to create the Gremlin Graph within. Changing this forces a new resource to be created.
     */
    accountName?: pulumi.Input<string>;
    autoscaleSettings?: pulumi.Input<inputs.cosmosdb.GremlinGraphAutoscaleSettings>;
    /**
     * A `conflictResolutionPolicy` blocks as defined below.
     */
    conflictResolutionPolicies?: pulumi.Input<pulumi.Input<inputs.cosmosdb.GremlinGraphConflictResolutionPolicy>[]>;
    /**
     * The name of the Cosmos DB Graph Database in which the Cosmos DB Gremlin Graph is created. Changing this forces a new resource to be created.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The default time to live (TTL) of the Gremlin graph. If the value is missing or set to "-1", items don’t expire.
     */
    defaultTtl?: pulumi.Input<number>;
    /**
     * The configuration of the indexing policy. One or more `indexPolicy` blocks as defined below.
     */
    indexPolicies?: pulumi.Input<pulumi.Input<inputs.cosmosdb.GremlinGraphIndexPolicy>[]>;
    /**
     * Specifies the name of the Cosmos DB Gremlin Graph. Changing this forces a new resource to be created.
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
     * The name of the resource group in which the Cosmos DB Gremlin Graph is created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The throughput of the Gremlin graph (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon database creation otherwise it cannot be updated without a manual destroy-apply.
     */
    throughput?: pulumi.Input<number>;
    /**
     * One or more `uniqueKey` blocks as defined below. Changing this forces a new resource to be created.
     */
    uniqueKeys?: pulumi.Input<pulumi.Input<inputs.cosmosdb.GremlinGraphUniqueKey>[]>;
}
/**
 * The set of arguments for constructing a GremlinGraph resource.
 */
export interface GremlinGraphArgs {
    /**
     * The name of the CosmosDB Account to create the Gremlin Graph within. Changing this forces a new resource to be created.
     */
    accountName: pulumi.Input<string>;
    autoscaleSettings?: pulumi.Input<inputs.cosmosdb.GremlinGraphAutoscaleSettings>;
    /**
     * A `conflictResolutionPolicy` blocks as defined below.
     */
    conflictResolutionPolicies?: pulumi.Input<pulumi.Input<inputs.cosmosdb.GremlinGraphConflictResolutionPolicy>[]>;
    /**
     * The name of the Cosmos DB Graph Database in which the Cosmos DB Gremlin Graph is created. Changing this forces a new resource to be created.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The default time to live (TTL) of the Gremlin graph. If the value is missing or set to "-1", items don’t expire.
     */
    defaultTtl?: pulumi.Input<number>;
    /**
     * The configuration of the indexing policy. One or more `indexPolicy` blocks as defined below.
     */
    indexPolicies?: pulumi.Input<pulumi.Input<inputs.cosmosdb.GremlinGraphIndexPolicy>[]>;
    /**
     * Specifies the name of the Cosmos DB Gremlin Graph. Changing this forces a new resource to be created.
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
     * The name of the resource group in which the Cosmos DB Gremlin Graph is created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The throughput of the Gremlin graph (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon database creation otherwise it cannot be updated without a manual destroy-apply.
     */
    throughput?: pulumi.Input<number>;
    /**
     * One or more `uniqueKey` blocks as defined below. Changing this forces a new resource to be created.
     */
    uniqueKeys?: pulumi.Input<pulumi.Input<inputs.cosmosdb.GremlinGraphUniqueKey>[]>;
}
