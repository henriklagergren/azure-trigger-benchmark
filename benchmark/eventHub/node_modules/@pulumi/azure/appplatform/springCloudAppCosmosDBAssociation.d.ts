import * as pulumi from "@pulumi/pulumi";
/**
 * Associates a Spring Cloud Application with a CosmosDB Account.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleSpringCloudService = new azure.appplatform.SpringCloudService("exampleSpringCloudService", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * const exampleSpringCloudApp = new azure.appplatform.SpringCloudApp("exampleSpringCloudApp", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     serviceName: exampleSpringCloudService.name,
 * });
 * const exampleAccount = new azure.cosmosdb.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     offerType: "Standard",
 *     kind: "GlobalDocumentDB",
 *     consistencyPolicy: {
 *         consistencyLevel: "Strong",
 *     },
 *     geoLocations: [{
 *         location: exampleResourceGroup.location,
 *         failoverPriority: 0,
 *     }],
 * });
 * const exampleSpringCloudAppCosmosDBAssociation = new azure.appplatform.SpringCloudAppCosmosDBAssociation("exampleSpringCloudAppCosmosDBAssociation", {
 *     springCloudAppId: exampleSpringCloudApp.id,
 *     cosmosdbAccountId: exampleAccount.id,
 *     apiType: "table",
 *     cosmosdbAccessKey: exampleAccount.primaryKey,
 * });
 * ```
 *
 * ## Import
 *
 * Spring Cloud Application CosmosDB Association can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appplatform/springCloudAppCosmosDBAssociation:SpringCloudAppCosmosDBAssociation example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resourcegroup1/providers/Microsoft.AppPlatform/Spring/service1/apps/app1/bindings/bind1
 * ```
 */
export declare class SpringCloudAppCosmosDBAssociation extends pulumi.CustomResource {
    /**
     * Get an existing SpringCloudAppCosmosDBAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SpringCloudAppCosmosDBAssociationState, opts?: pulumi.CustomResourceOptions): SpringCloudAppCosmosDBAssociation;
    /**
     * Returns true if the given object is an instance of SpringCloudAppCosmosDBAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SpringCloudAppCosmosDBAssociation;
    /**
     * Specifies the api type which should be used when connecting to the CosmosDB Account. Possible values are `cassandra`, `gremlin`, `mongo`, `sql` or `table`. Changing this forces a new resource to be created.
     */
    readonly apiType: pulumi.Output<string>;
    /**
     * Specifies the CosmosDB Account access key.
     */
    readonly cosmosdbAccessKey: pulumi.Output<string>;
    /**
     * Specifies the ID of the CosmosDB Account. Changing this forces a new resource to be created.
     */
    readonly cosmosdbAccountId: pulumi.Output<string>;
    /**
     * Specifies the name of the Cassandra Keyspace which the Spring Cloud App should be associated with. Should only be set when `apiType` is `cassandra`.
     */
    readonly cosmosdbCassandraKeyspaceName: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Gremlin Database which the Spring Cloud App should be associated with. Should only be set when `apiType` is `gremlin`.
     */
    readonly cosmosdbGremlinDatabaseName: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Gremlin Graph which the Spring Cloud App should be associated with. Should only be set when `apiType` is `gremlin`.
     */
    readonly cosmosdbGremlinGraphName: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Mongo Database which the Spring Cloud App should be associated with. Should only be set when `apiType` is `mongo`.
     */
    readonly cosmosdbMongoDatabaseName: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Sql Database which the Spring Cloud App should be associated with. Should only be set when `apiType` is `sql`.
     */
    readonly cosmosdbSqlDatabaseName: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Spring Cloud Application Association. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the ID of the Spring Cloud Application where this Association is created. Changing this forces a new resource to be created.
     */
    readonly springCloudAppId: pulumi.Output<string>;
    /**
     * Create a SpringCloudAppCosmosDBAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SpringCloudAppCosmosDBAssociationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SpringCloudAppCosmosDBAssociation resources.
 */
export interface SpringCloudAppCosmosDBAssociationState {
    /**
     * Specifies the api type which should be used when connecting to the CosmosDB Account. Possible values are `cassandra`, `gremlin`, `mongo`, `sql` or `table`. Changing this forces a new resource to be created.
     */
    apiType?: pulumi.Input<string>;
    /**
     * Specifies the CosmosDB Account access key.
     */
    cosmosdbAccessKey?: pulumi.Input<string>;
    /**
     * Specifies the ID of the CosmosDB Account. Changing this forces a new resource to be created.
     */
    cosmosdbAccountId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Cassandra Keyspace which the Spring Cloud App should be associated with. Should only be set when `apiType` is `cassandra`.
     */
    cosmosdbCassandraKeyspaceName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Gremlin Database which the Spring Cloud App should be associated with. Should only be set when `apiType` is `gremlin`.
     */
    cosmosdbGremlinDatabaseName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Gremlin Graph which the Spring Cloud App should be associated with. Should only be set when `apiType` is `gremlin`.
     */
    cosmosdbGremlinGraphName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Mongo Database which the Spring Cloud App should be associated with. Should only be set when `apiType` is `mongo`.
     */
    cosmosdbMongoDatabaseName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Sql Database which the Spring Cloud App should be associated with. Should only be set when `apiType` is `sql`.
     */
    cosmosdbSqlDatabaseName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Spring Cloud Application Association. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the ID of the Spring Cloud Application where this Association is created. Changing this forces a new resource to be created.
     */
    springCloudAppId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SpringCloudAppCosmosDBAssociation resource.
 */
export interface SpringCloudAppCosmosDBAssociationArgs {
    /**
     * Specifies the api type which should be used when connecting to the CosmosDB Account. Possible values are `cassandra`, `gremlin`, `mongo`, `sql` or `table`. Changing this forces a new resource to be created.
     */
    apiType: pulumi.Input<string>;
    /**
     * Specifies the CosmosDB Account access key.
     */
    cosmosdbAccessKey: pulumi.Input<string>;
    /**
     * Specifies the ID of the CosmosDB Account. Changing this forces a new resource to be created.
     */
    cosmosdbAccountId: pulumi.Input<string>;
    /**
     * Specifies the name of the Cassandra Keyspace which the Spring Cloud App should be associated with. Should only be set when `apiType` is `cassandra`.
     */
    cosmosdbCassandraKeyspaceName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Gremlin Database which the Spring Cloud App should be associated with. Should only be set when `apiType` is `gremlin`.
     */
    cosmosdbGremlinDatabaseName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Gremlin Graph which the Spring Cloud App should be associated with. Should only be set when `apiType` is `gremlin`.
     */
    cosmosdbGremlinGraphName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Mongo Database which the Spring Cloud App should be associated with. Should only be set when `apiType` is `mongo`.
     */
    cosmosdbMongoDatabaseName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Sql Database which the Spring Cloud App should be associated with. Should only be set when `apiType` is `sql`.
     */
    cosmosdbSqlDatabaseName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Spring Cloud Application Association. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the ID of the Spring Cloud Application where this Association is created. Changing this forces a new resource to be created.
     */
    springCloudAppId: pulumi.Input<string>;
}
