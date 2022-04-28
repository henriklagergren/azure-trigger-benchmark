import * as pulumi from "@pulumi/pulumi";
/**
 * Associates a Spring Cloud Application with a Redis Cache.
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
 * const exampleCache = new azure.redis.Cache("exampleCache", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     capacity: 0,
 *     family: "C",
 *     skuName: "Basic",
 *     enableNonSslPort: true,
 * });
 * const exampleSpringCloudAppRedisAssociation = new azure.appplatform.SpringCloudAppRedisAssociation("exampleSpringCloudAppRedisAssociation", {
 *     springCloudAppId: exampleSpringCloudApp.id,
 *     redisCacheId: exampleCache.id,
 *     redisAccessKey: exampleCache.primaryAccessKey,
 *     sslEnabled: true,
 * });
 * ```
 *
 * ## Import
 *
 * Spring Cloud Application Redis Association can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appplatform/springCloudAppRedisAssociation:SpringCloudAppRedisAssociation example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myresourcegroup/providers/Microsoft.AppPlatform/Spring/myservice/apps/myapp/bindings/bind1
 * ```
 */
export declare class SpringCloudAppRedisAssociation extends pulumi.CustomResource {
    /**
     * Get an existing SpringCloudAppRedisAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SpringCloudAppRedisAssociationState, opts?: pulumi.CustomResourceOptions): SpringCloudAppRedisAssociation;
    /**
     * Returns true if the given object is an instance of SpringCloudAppRedisAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SpringCloudAppRedisAssociation;
    /**
     * Specifies the name of the Spring Cloud Application Association. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the Redis Cache access key.
     */
    readonly redisAccessKey: pulumi.Output<string>;
    /**
     * Specifies the Redis Cache resource ID. Changing this forces a new resource to be created.
     */
    readonly redisCacheId: pulumi.Output<string>;
    /**
     * Specifies the Spring Cloud Application resource ID in which the Association is created. Changing this forces a new resource to be created.
     */
    readonly springCloudAppId: pulumi.Output<string>;
    /**
     * Should SSL be used when connecting to Redis? Defaults to `true`.
     */
    readonly sslEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Create a SpringCloudAppRedisAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SpringCloudAppRedisAssociationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SpringCloudAppRedisAssociation resources.
 */
export interface SpringCloudAppRedisAssociationState {
    /**
     * Specifies the name of the Spring Cloud Application Association. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the Redis Cache access key.
     */
    redisAccessKey?: pulumi.Input<string>;
    /**
     * Specifies the Redis Cache resource ID. Changing this forces a new resource to be created.
     */
    redisCacheId?: pulumi.Input<string>;
    /**
     * Specifies the Spring Cloud Application resource ID in which the Association is created. Changing this forces a new resource to be created.
     */
    springCloudAppId?: pulumi.Input<string>;
    /**
     * Should SSL be used when connecting to Redis? Defaults to `true`.
     */
    sslEnabled?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a SpringCloudAppRedisAssociation resource.
 */
export interface SpringCloudAppRedisAssociationArgs {
    /**
     * Specifies the name of the Spring Cloud Application Association. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the Redis Cache access key.
     */
    redisAccessKey: pulumi.Input<string>;
    /**
     * Specifies the Redis Cache resource ID. Changing this forces a new resource to be created.
     */
    redisCacheId: pulumi.Input<string>;
    /**
     * Specifies the Spring Cloud Application resource ID in which the Association is created. Changing this forces a new resource to be created.
     */
    springCloudAppId: pulumi.Input<string>;
    /**
     * Should SSL be used when connecting to Redis? Defaults to `true`.
     */
    sslEnabled?: pulumi.Input<boolean>;
}
