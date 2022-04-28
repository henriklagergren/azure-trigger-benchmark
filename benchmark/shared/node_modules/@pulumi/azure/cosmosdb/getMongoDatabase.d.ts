import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Cosmos DB Mongo Database.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.cosmosdb.getMongoDatabase({
 *     name: "test-cosmosdb-mongo-db",
 *     resourceGroupName: "test-cosmosdb-account-rg",
 *     accountName: "test-cosmosdb-account",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getMongoDatabase(args: GetMongoDatabaseArgs, opts?: pulumi.InvokeOptions): Promise<GetMongoDatabaseResult>;
/**
 * A collection of arguments for invoking getMongoDatabase.
 */
export interface GetMongoDatabaseArgs {
    /**
     * The name of the Cosmos DB Account where the Mongo Database exists.
     */
    accountName: string;
    /**
     * The name of this Cosmos DB Mongo Database.
     */
    name: string;
    /**
     * The name of the Resource Group where the Cosmos DB Mongo Database exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getMongoDatabase.
 */
export interface GetMongoDatabaseResult {
    readonly accountName: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags assigned to the Cosmos DB Mongo Database.
     */
    readonly tags: {
        [key: string]: string;
    };
}
export declare function getMongoDatabaseOutput(args: GetMongoDatabaseOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMongoDatabaseResult>;
/**
 * A collection of arguments for invoking getMongoDatabase.
 */
export interface GetMongoDatabaseOutputArgs {
    /**
     * The name of the Cosmos DB Account where the Mongo Database exists.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of this Cosmos DB Mongo Database.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Cosmos DB Mongo Database exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
