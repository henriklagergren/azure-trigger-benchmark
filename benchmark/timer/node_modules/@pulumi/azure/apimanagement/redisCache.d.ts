import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a API Management Redis Cache.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleService = new azure.apimanagement.Service("exampleService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     publisherName: "pub1",
 *     publisherEmail: "pub1@email.com",
 *     skuName: "Consumption_0",
 * });
 * const exampleCache = new azure.redis.Cache("exampleCache", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     capacity: 1,
 *     family: "C",
 *     skuName: "Basic",
 *     enableNonSslPort: false,
 *     minimumTlsVersion: "1.2",
 *     redisConfiguration: {},
 * });
 * const exampleRedisCache = new azure.apimanagement.RedisCache("exampleRedisCache", {
 *     apiManagementId: exampleService.id,
 *     connectionString: exampleCache.primaryConnectionString,
 *     description: "Redis cache instances",
 *     redisCacheId: exampleCache.id,
 *     cacheLocation: "East Us",
 * });
 * ```
 *
 * ## Import
 *
 * API Management Redis Caches can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/redisCache:RedisCache example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ApiManagement/service/service1/caches/cache1
 * ```
 */
export declare class RedisCache extends pulumi.CustomResource {
    /**
     * Get an existing RedisCache resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RedisCacheState, opts?: pulumi.CustomResourceOptions): RedisCache;
    /**
     * Returns true if the given object is an instance of RedisCache.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RedisCache;
    /**
     * The resource ID of the Api Management Service from which to create this external cache. Changing this forces a new API Management Redis Cache to be created.
     */
    readonly apiManagementId: pulumi.Output<string>;
    /**
     * The location where to use cache from. Possible values are `default` and valid Azure regions. Defaults to `default`.
     */
    readonly cacheLocation: pulumi.Output<string | undefined>;
    /**
     * The connection string to the Cache for Redis.
     */
    readonly connectionString: pulumi.Output<string>;
    /**
     * The description of the API Management Redis Cache.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The name which should be used for this API Management Redis Cache. Changing this forces a new API Management Redis Cache to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The resource ID of the Cache for Redis.
     */
    readonly redisCacheId: pulumi.Output<string | undefined>;
    /**
     * Create a RedisCache resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RedisCacheArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RedisCache resources.
 */
export interface RedisCacheState {
    /**
     * The resource ID of the Api Management Service from which to create this external cache. Changing this forces a new API Management Redis Cache to be created.
     */
    apiManagementId?: pulumi.Input<string>;
    /**
     * The location where to use cache from. Possible values are `default` and valid Azure regions. Defaults to `default`.
     */
    cacheLocation?: pulumi.Input<string>;
    /**
     * The connection string to the Cache for Redis.
     */
    connectionString?: pulumi.Input<string>;
    /**
     * The description of the API Management Redis Cache.
     */
    description?: pulumi.Input<string>;
    /**
     * The name which should be used for this API Management Redis Cache. Changing this forces a new API Management Redis Cache to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource ID of the Cache for Redis.
     */
    redisCacheId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a RedisCache resource.
 */
export interface RedisCacheArgs {
    /**
     * The resource ID of the Api Management Service from which to create this external cache. Changing this forces a new API Management Redis Cache to be created.
     */
    apiManagementId: pulumi.Input<string>;
    /**
     * The location where to use cache from. Possible values are `default` and valid Azure regions. Defaults to `default`.
     */
    cacheLocation?: pulumi.Input<string>;
    /**
     * The connection string to the Cache for Redis.
     */
    connectionString: pulumi.Input<string>;
    /**
     * The description of the API Management Redis Cache.
     */
    description?: pulumi.Input<string>;
    /**
     * The name which should be used for this API Management Redis Cache. Changing this forces a new API Management Redis Cache to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource ID of the Cache for Redis.
     */
    redisCacheId?: pulumi.Input<string>;
}
