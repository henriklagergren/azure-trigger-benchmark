import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Cassandra KeySpace within a Cosmos DB Account.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = azure.core.getResourceGroup({
 *     name: "tflex-cosmosdb-account-rg",
 * });
 * const exampleAccount = new azure.cosmosdb.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.then(exampleResourceGroup => exampleResourceGroup.name),
 *     location: exampleResourceGroup.then(exampleResourceGroup => exampleResourceGroup.location),
 *     offerType: "Standard",
 *     capabilities: [{
 *         name: "EnableCassandra",
 *     }],
 *     consistencyPolicy: {
 *         consistencyLevel: "Strong",
 *     },
 *     geoLocations: [{
 *         location: "West US",
 *         failoverPriority: 0,
 *     }],
 * });
 * const exampleCassandraKeyspace = new azure.cosmosdb.CassandraKeyspace("exampleCassandraKeyspace", {
 *     resourceGroupName: exampleAccount.resourceGroupName,
 *     accountName: exampleAccount.name,
 *     throughput: 400,
 * });
 * ```
 *
 * ## Import
 *
 * Cosmos Cassandra KeySpace can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:cosmosdb/cassandraKeyspace:CassandraKeyspace ks1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.DocumentDB/databaseAccounts/account1/cassandraKeyspaces/ks1
 * ```
 */
export declare class CassandraKeyspace extends pulumi.CustomResource {
    /**
     * Get an existing CassandraKeyspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CassandraKeyspaceState, opts?: pulumi.CustomResourceOptions): CassandraKeyspace;
    /**
     * Returns true if the given object is an instance of CassandraKeyspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CassandraKeyspace;
    /**
     * The name of the Cosmos DB Cassandra KeySpace to create the table within. Changing this forces a new resource to be created.
     */
    readonly accountName: pulumi.Output<string>;
    /**
     * An `autoscaleSettings` block as defined below. This must be set upon database creation otherwise it cannot be updated without a manual resource destroy-apply.
     */
    readonly autoscaleSettings: pulumi.Output<outputs.cosmosdb.CassandraKeyspaceAutoscaleSettings | undefined>;
    /**
     * Specifies the name of the Cosmos DB Cassandra KeySpace. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which the Cosmos DB Cassandra KeySpace is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The throughput of Cassandra KeySpace (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon database creation otherwise it cannot be updated without a manual resource destroy-apply.
     */
    readonly throughput: pulumi.Output<number>;
    /**
     * Create a CassandraKeyspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CassandraKeyspaceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CassandraKeyspace resources.
 */
export interface CassandraKeyspaceState {
    /**
     * The name of the Cosmos DB Cassandra KeySpace to create the table within. Changing this forces a new resource to be created.
     */
    accountName?: pulumi.Input<string>;
    /**
     * An `autoscaleSettings` block as defined below. This must be set upon database creation otherwise it cannot be updated without a manual resource destroy-apply.
     */
    autoscaleSettings?: pulumi.Input<inputs.cosmosdb.CassandraKeyspaceAutoscaleSettings>;
    /**
     * Specifies the name of the Cosmos DB Cassandra KeySpace. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Cosmos DB Cassandra KeySpace is created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The throughput of Cassandra KeySpace (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon database creation otherwise it cannot be updated without a manual resource destroy-apply.
     */
    throughput?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a CassandraKeyspace resource.
 */
export interface CassandraKeyspaceArgs {
    /**
     * The name of the Cosmos DB Cassandra KeySpace to create the table within. Changing this forces a new resource to be created.
     */
    accountName: pulumi.Input<string>;
    /**
     * An `autoscaleSettings` block as defined below. This must be set upon database creation otherwise it cannot be updated without a manual resource destroy-apply.
     */
    autoscaleSettings?: pulumi.Input<inputs.cosmosdb.CassandraKeyspaceAutoscaleSettings>;
    /**
     * Specifies the name of the Cosmos DB Cassandra KeySpace. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Cosmos DB Cassandra KeySpace is created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The throughput of Cassandra KeySpace (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon database creation otherwise it cannot be updated without a manual resource destroy-apply.
     */
    throughput?: pulumi.Input<number>;
}
