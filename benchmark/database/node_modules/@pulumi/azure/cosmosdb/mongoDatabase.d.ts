import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Mongo Database within a Cosmos DB Account.
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
 * const exampleMongoDatabase = new azure.cosmosdb.MongoDatabase("exampleMongoDatabase", {
 *     resourceGroupName: exampleAccount.then(exampleAccount => exampleAccount.resourceGroupName),
 *     accountName: exampleAccount.then(exampleAccount => exampleAccount.name),
 *     throughput: 400,
 * });
 * ```
 *
 * ## Import
 *
 * Cosmos Mongo Database can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:cosmosdb/mongoDatabase:MongoDatabase db1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.DocumentDB/databaseAccounts/account1/mongodbDatabases/db1
 * ```
 */
export declare class MongoDatabase extends pulumi.CustomResource {
    /**
     * Get an existing MongoDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MongoDatabaseState, opts?: pulumi.CustomResourceOptions): MongoDatabase;
    /**
     * Returns true if the given object is an instance of MongoDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is MongoDatabase;
    /**
     * The name of the Cosmos DB Mongo Database to create the table within. Changing this forces a new resource to be created.
     */
    readonly accountName: pulumi.Output<string>;
    /**
     * An `autoscaleSettings` block as defined below. This must be set upon database creation otherwise it cannot be updated without a manual destroy-apply.
     */
    readonly autoscaleSettings: pulumi.Output<outputs.cosmosdb.MongoDatabaseAutoscaleSettings | undefined>;
    /**
     * Specifies the name of the Cosmos DB Mongo Database. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which the Cosmos DB Mongo Database is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The throughput of the MongoDB collection (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon database creation otherwise it cannot be updated without a manual resource destroy-apply.
     */
    readonly throughput: pulumi.Output<number>;
    /**
     * Create a MongoDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MongoDatabaseArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering MongoDatabase resources.
 */
export interface MongoDatabaseState {
    /**
     * The name of the Cosmos DB Mongo Database to create the table within. Changing this forces a new resource to be created.
     */
    accountName?: pulumi.Input<string>;
    /**
     * An `autoscaleSettings` block as defined below. This must be set upon database creation otherwise it cannot be updated without a manual destroy-apply.
     */
    autoscaleSettings?: pulumi.Input<inputs.cosmosdb.MongoDatabaseAutoscaleSettings>;
    /**
     * Specifies the name of the Cosmos DB Mongo Database. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Cosmos DB Mongo Database is created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The throughput of the MongoDB collection (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon database creation otherwise it cannot be updated without a manual resource destroy-apply.
     */
    throughput?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a MongoDatabase resource.
 */
export interface MongoDatabaseArgs {
    /**
     * The name of the Cosmos DB Mongo Database to create the table within. Changing this forces a new resource to be created.
     */
    accountName: pulumi.Input<string>;
    /**
     * An `autoscaleSettings` block as defined below. This must be set upon database creation otherwise it cannot be updated without a manual destroy-apply.
     */
    autoscaleSettings?: pulumi.Input<inputs.cosmosdb.MongoDatabaseAutoscaleSettings>;
    /**
     * Specifies the name of the Cosmos DB Mongo Database. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Cosmos DB Mongo Database is created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The throughput of the MongoDB collection (RU/s). Must be set in increments of `100`. The minimum value is `400`. This must be set upon database creation otherwise it cannot be updated without a manual resource destroy-apply.
     */
    throughput?: pulumi.Input<number>;
}
