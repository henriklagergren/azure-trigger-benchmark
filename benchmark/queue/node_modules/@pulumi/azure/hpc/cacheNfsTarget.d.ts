import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a NFS Target within a HPC Cache.
 *
 * > **NOTE:**: By request of the service team the provider no longer automatically registering the `Microsoft.StorageCache` Resource Provider for this resource. To register it you can run `az provider register --namespace 'Microsoft.StorageCache'`.
 *
 * ## Import
 *
 * NFS Target within a HPC Cache can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:hpc/cacheNfsTarget:CacheNfsTarget example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.StorageCache/caches/cache1/storageTargets/target1
 * ```
 */
export declare class CacheNfsTarget extends pulumi.CustomResource {
    /**
     * Get an existing CacheNfsTarget resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CacheNfsTargetState, opts?: pulumi.CustomResourceOptions): CacheNfsTarget;
    /**
     * Returns true if the given object is an instance of CacheNfsTarget.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CacheNfsTarget;
    /**
     * The name HPC Cache, which the HPC Cache NFS Target will be added to. Changing this forces a new resource to be created.
     */
    readonly cacheName: pulumi.Output<string>;
    /**
     * The name of the HPC Cache NFS Target. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Can be specified multiple times to define multiple `namespaceJunction`. Each `namespaceJuntion` block supports fields documented below.
     */
    readonly namespaceJunctions: pulumi.Output<outputs.hpc.CacheNfsTargetNamespaceJunction[]>;
    /**
     * The name of the Resource Group in which to create the HPC Cache NFS Target. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The IP address or fully qualified domain name (FQDN) of the HPC Cache NFS target. Changing this forces a new resource to be created.
     */
    readonly targetHostName: pulumi.Output<string>;
    /**
     * The type of usage of the HPC Cache NFS Target. Possible values are: `READ_HEAVY_INFREQ`, `READ_HEAVY_CHECK_180`, `WRITE_WORKLOAD_15`, `WRITE_AROUND`, `WRITE_WORKLOAD_CHECK_30`, `WRITE_WORKLOAD_CHECK_60` and `WRITE_WORKLOAD_CLOUDWS`.
     */
    readonly usageModel: pulumi.Output<string>;
    /**
     * Create a CacheNfsTarget resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CacheNfsTargetArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CacheNfsTarget resources.
 */
export interface CacheNfsTargetState {
    /**
     * The name HPC Cache, which the HPC Cache NFS Target will be added to. Changing this forces a new resource to be created.
     */
    cacheName?: pulumi.Input<string>;
    /**
     * The name of the HPC Cache NFS Target. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Can be specified multiple times to define multiple `namespaceJunction`. Each `namespaceJuntion` block supports fields documented below.
     */
    namespaceJunctions?: pulumi.Input<pulumi.Input<inputs.hpc.CacheNfsTargetNamespaceJunction>[]>;
    /**
     * The name of the Resource Group in which to create the HPC Cache NFS Target. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The IP address or fully qualified domain name (FQDN) of the HPC Cache NFS target. Changing this forces a new resource to be created.
     */
    targetHostName?: pulumi.Input<string>;
    /**
     * The type of usage of the HPC Cache NFS Target. Possible values are: `READ_HEAVY_INFREQ`, `READ_HEAVY_CHECK_180`, `WRITE_WORKLOAD_15`, `WRITE_AROUND`, `WRITE_WORKLOAD_CHECK_30`, `WRITE_WORKLOAD_CHECK_60` and `WRITE_WORKLOAD_CLOUDWS`.
     */
    usageModel?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a CacheNfsTarget resource.
 */
export interface CacheNfsTargetArgs {
    /**
     * The name HPC Cache, which the HPC Cache NFS Target will be added to. Changing this forces a new resource to be created.
     */
    cacheName: pulumi.Input<string>;
    /**
     * The name of the HPC Cache NFS Target. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Can be specified multiple times to define multiple `namespaceJunction`. Each `namespaceJuntion` block supports fields documented below.
     */
    namespaceJunctions: pulumi.Input<pulumi.Input<inputs.hpc.CacheNfsTargetNamespaceJunction>[]>;
    /**
     * The name of the Resource Group in which to create the HPC Cache NFS Target. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The IP address or fully qualified domain name (FQDN) of the HPC Cache NFS target. Changing this forces a new resource to be created.
     */
    targetHostName: pulumi.Input<string>;
    /**
     * The type of usage of the HPC Cache NFS Target. Possible values are: `READ_HEAVY_INFREQ`, `READ_HEAVY_CHECK_180`, `WRITE_WORKLOAD_15`, `WRITE_AROUND`, `WRITE_WORKLOAD_CHECK_30`, `WRITE_WORKLOAD_CHECK_60` and `WRITE_WORKLOAD_CLOUDWS`.
     */
    usageModel: pulumi.Input<string>;
}
