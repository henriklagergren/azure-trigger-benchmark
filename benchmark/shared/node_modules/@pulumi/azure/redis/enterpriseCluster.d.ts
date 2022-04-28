import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Redis Enterprise Cluster.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleEnterpriseCluster = new azure.redis.EnterpriseCluster("exampleEnterpriseCluster", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     skuName: "EnterpriseFlash_F300-3",
 * });
 * ```
 *
 * ## Import
 *
 * Redis Enterprise Clusters can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:redis/enterpriseCluster:EnterpriseCluster example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Cache/redisEnterprise/cluster1
 * ```
 */
export declare class EnterpriseCluster extends pulumi.CustomResource {
    /**
     * Get an existing EnterpriseCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EnterpriseClusterState, opts?: pulumi.CustomResourceOptions): EnterpriseCluster;
    /**
     * Returns true if the given object is an instance of EnterpriseCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EnterpriseCluster;
    /**
     * DNS name of the cluster endpoint.
     */
    readonly hostname: pulumi.Output<string>;
    /**
     * The Azure Region where the Redis Enterprise Cluster should exist. Changing this forces a new Redis Enterprise Cluster to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The minimum TLS version.  Defaults to `1.2`. Changing this forces a new Redis Enterprise Cluster to be created.
     */
    readonly minimumTlsVersion: pulumi.Output<string | undefined>;
    /**
     * The name which should be used for this Redis Enterprise Cluster. Changing this forces a new Redis Enterprise Cluster to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Redis Enterprise Cluster should exist. Changing this forces a new Redis Enterprise Cluster to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The `skuName` is comprised of two segments separated by a hyphen (e.g. `Enterprise_E10-2`). The first segment of the `skuName` defines the `name` of the sku, possible values are `Enterprise_E10`, `Enterprise_E20"`, `Enterprise_E50`, `Enterprise_E100`, `EnterpriseFlash_F300`, `EnterpriseFlash_F700` or `EnterpriseFlash_F1500`. The second segment defines the `capacity` of the `skuName`, possible values for `Enteprise` skus are (`2`, `4`, `6`, ...). Possible values for `EnterpriseFlash` skus are (`3`, `9`, `15`, ...). Changing this forces a new Redis Enterprise Cluster to be created.
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Redis Enterprise Cluster.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Version of redis the cluster supports, e.g. '6'.
     *
     * @deprecated This field currently is not yet being returned from the service API, please see https://github.com/Azure/azure-sdk-for-go/issues/14420 for more information
     */
    readonly version: pulumi.Output<string>;
    /**
     * A list of a one or more Availability Zones, where the Redis Cache should be allocated. Possible values are: `1`, `2` and `3`. Changing this forces a new Redis Enterprise Cluster to be created.
     */
    readonly zones: pulumi.Output<string[] | undefined>;
    /**
     * Create a EnterpriseCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnterpriseClusterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering EnterpriseCluster resources.
 */
export interface EnterpriseClusterState {
    /**
     * DNS name of the cluster endpoint.
     */
    hostname?: pulumi.Input<string>;
    /**
     * The Azure Region where the Redis Enterprise Cluster should exist. Changing this forces a new Redis Enterprise Cluster to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The minimum TLS version.  Defaults to `1.2`. Changing this forces a new Redis Enterprise Cluster to be created.
     */
    minimumTlsVersion?: pulumi.Input<string>;
    /**
     * The name which should be used for this Redis Enterprise Cluster. Changing this forces a new Redis Enterprise Cluster to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Redis Enterprise Cluster should exist. Changing this forces a new Redis Enterprise Cluster to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The `skuName` is comprised of two segments separated by a hyphen (e.g. `Enterprise_E10-2`). The first segment of the `skuName` defines the `name` of the sku, possible values are `Enterprise_E10`, `Enterprise_E20"`, `Enterprise_E50`, `Enterprise_E100`, `EnterpriseFlash_F300`, `EnterpriseFlash_F700` or `EnterpriseFlash_F1500`. The second segment defines the `capacity` of the `skuName`, possible values for `Enteprise` skus are (`2`, `4`, `6`, ...). Possible values for `EnterpriseFlash` skus are (`3`, `9`, `15`, ...). Changing this forces a new Redis Enterprise Cluster to be created.
     */
    skuName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Redis Enterprise Cluster.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Version of redis the cluster supports, e.g. '6'.
     *
     * @deprecated This field currently is not yet being returned from the service API, please see https://github.com/Azure/azure-sdk-for-go/issues/14420 for more information
     */
    version?: pulumi.Input<string>;
    /**
     * A list of a one or more Availability Zones, where the Redis Cache should be allocated. Possible values are: `1`, `2` and `3`. Changing this forces a new Redis Enterprise Cluster to be created.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a EnterpriseCluster resource.
 */
export interface EnterpriseClusterArgs {
    /**
     * The Azure Region where the Redis Enterprise Cluster should exist. Changing this forces a new Redis Enterprise Cluster to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The minimum TLS version.  Defaults to `1.2`. Changing this forces a new Redis Enterprise Cluster to be created.
     */
    minimumTlsVersion?: pulumi.Input<string>;
    /**
     * The name which should be used for this Redis Enterprise Cluster. Changing this forces a new Redis Enterprise Cluster to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Redis Enterprise Cluster should exist. Changing this forces a new Redis Enterprise Cluster to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The `skuName` is comprised of two segments separated by a hyphen (e.g. `Enterprise_E10-2`). The first segment of the `skuName` defines the `name` of the sku, possible values are `Enterprise_E10`, `Enterprise_E20"`, `Enterprise_E50`, `Enterprise_E100`, `EnterpriseFlash_F300`, `EnterpriseFlash_F700` or `EnterpriseFlash_F1500`. The second segment defines the `capacity` of the `skuName`, possible values for `Enteprise` skus are (`2`, `4`, `6`, ...). Possible values for `EnterpriseFlash` skus are (`3`, `9`, `15`, ...). Changing this forces a new Redis Enterprise Cluster to be created.
     */
    skuName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Redis Enterprise Cluster.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A list of a one or more Availability Zones, where the Redis Cache should be allocated. Possible values are: `1`, `2` and `3`. Changing this forces a new Redis Enterprise Cluster to be created.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
