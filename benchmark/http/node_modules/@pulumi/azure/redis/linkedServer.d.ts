import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Redis Linked Server (ie Geo Location)
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example_primaryResourceGroup = new azure.core.ResourceGroup("example-primaryResourceGroup", {location: "East US"});
 * const example_primaryCache = new azure.redis.Cache("example-primaryCache", {
 *     location: example_primaryResourceGroup.location,
 *     resourceGroupName: example_primaryResourceGroup.name,
 *     capacity: 1,
 *     family: "P",
 *     skuName: "Premium",
 *     enableNonSslPort: false,
 *     redisConfiguration: {
 *         maxmemoryReserved: 2,
 *         maxmemoryDelta: 2,
 *         maxmemoryPolicy: "allkeys-lru",
 *     },
 * });
 * const example_secondaryResourceGroup = new azure.core.ResourceGroup("example-secondaryResourceGroup", {location: "West US"});
 * const example_secondaryCache = new azure.redis.Cache("example-secondaryCache", {
 *     location: example_secondaryResourceGroup.location,
 *     resourceGroupName: example_secondaryResourceGroup.name,
 *     capacity: 1,
 *     family: "P",
 *     skuName: "Premium",
 *     enableNonSslPort: false,
 *     redisConfiguration: {
 *         maxmemoryReserved: 2,
 *         maxmemoryDelta: 2,
 *         maxmemoryPolicy: "allkeys-lru",
 *     },
 * });
 * const example_link = new azure.redis.LinkedServer("example-link", {
 *     targetRedisCacheName: example_primaryCache.name,
 *     resourceGroupName: example_primaryCache.resourceGroupName,
 *     linkedRedisCacheId: example_secondaryCache.id,
 *     linkedRedisCacheLocation: example_secondaryCache.location,
 *     serverRole: "Secondary",
 * });
 * ```
 *
 * ## Import
 *
 * Redis can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:redis/linkedServer:LinkedServer example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Cache/Redis/cache1/linkedServers/cache2
 * ```
 */
export declare class LinkedServer extends pulumi.CustomResource {
    /**
     * Get an existing LinkedServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LinkedServerState, opts?: pulumi.CustomResourceOptions): LinkedServer;
    /**
     * Returns true if the given object is an instance of LinkedServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LinkedServer;
    /**
     * The ID of the linked Redis cache. Changing this forces a new Redis to be created.
     */
    readonly linkedRedisCacheId: pulumi.Output<string>;
    /**
     * The location of the linked Redis cache. Changing this forces a new Redis to be created.
     */
    readonly linkedRedisCacheLocation: pulumi.Output<string>;
    /**
     * The name of the linked server.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Redis caches exists. Changing this forces a new Redis to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The role of the linked Redis cache (eg "Secondary"). Changing this forces a new Redis to be created.
     */
    readonly serverRole: pulumi.Output<string>;
    /**
     * The name of Redis cache to link with. Changing this forces a new Redis to be created. (eg The primary role)
     */
    readonly targetRedisCacheName: pulumi.Output<string>;
    /**
     * Create a LinkedServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkedServerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LinkedServer resources.
 */
export interface LinkedServerState {
    /**
     * The ID of the linked Redis cache. Changing this forces a new Redis to be created.
     */
    linkedRedisCacheId?: pulumi.Input<string>;
    /**
     * The location of the linked Redis cache. Changing this forces a new Redis to be created.
     */
    linkedRedisCacheLocation?: pulumi.Input<string>;
    /**
     * The name of the linked server.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Redis caches exists. Changing this forces a new Redis to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The role of the linked Redis cache (eg "Secondary"). Changing this forces a new Redis to be created.
     */
    serverRole?: pulumi.Input<string>;
    /**
     * The name of Redis cache to link with. Changing this forces a new Redis to be created. (eg The primary role)
     */
    targetRedisCacheName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a LinkedServer resource.
 */
export interface LinkedServerArgs {
    /**
     * The ID of the linked Redis cache. Changing this forces a new Redis to be created.
     */
    linkedRedisCacheId: pulumi.Input<string>;
    /**
     * The location of the linked Redis cache. Changing this forces a new Redis to be created.
     */
    linkedRedisCacheLocation: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Redis caches exists. Changing this forces a new Redis to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The role of the linked Redis cache (eg "Secondary"). Changing this forces a new Redis to be created.
     */
    serverRole: pulumi.Input<string>;
    /**
     * The name of Redis cache to link with. Changing this forces a new Redis to be created. (eg The primary role)
     */
    targetRedisCacheName: pulumi.Input<string>;
}
