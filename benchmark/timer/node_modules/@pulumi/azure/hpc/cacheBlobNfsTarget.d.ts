import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Blob NFSv3 Target within a HPC Cache.
 *
 * > **NOTE:**: By request of the service team the provider no longer automatically registering the `Microsoft.StorageCache` Resource Provider for this resource. To register it you can run `az provider register --namespace 'Microsoft.StorageCache'`.
 *
 * > **NOTE:**: This resource depends on the NFSv3 enabled Storage Account, which has some prerequisites need to meet. Please checkout: https://docs.microsoft.com/en-us/azure/storage/blobs/network-file-system-protocol-support-how-to?tabs=azure-powershell.
 *
 * ## Import
 *
 * HPC Cache Blob NFS Targets can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:hpc/cacheBlobNfsTarget:CacheBlobNfsTarget example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.StorageCache/caches/cache1/storageTargets/target1
 * ```
 */
export declare class CacheBlobNfsTarget extends pulumi.CustomResource {
    /**
     * Get an existing CacheBlobNfsTarget resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CacheBlobNfsTargetState, opts?: pulumi.CustomResourceOptions): CacheBlobNfsTarget;
    /**
     * Returns true if the given object is an instance of CacheBlobNfsTarget.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CacheBlobNfsTarget;
    /**
     * The name of the access policy applied to this target. Defaults to `default`.
     */
    readonly accessPolicyName: pulumi.Output<string | undefined>;
    /**
     * The name of the HPC Cache, which the HPC Cache Blob NFS Target will be added to. Changing this forces a new HPC Cache Blob NFS Target to be created.
     */
    readonly cacheName: pulumi.Output<string>;
    /**
     * The name which should be used for this HPC Cache Blob NFS Target. Changing this forces a new HPC Cache Blob NFS Target to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The client-facing file path of the HPC Cache Blob NFS Target.
     */
    readonly namespacePath: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the HPC Cache Blob NFS Target should exist. Changing this forces a new HPC Cache Blob NFS Target to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Resource Manager ID of the Storage Container used as the HPC Cache Blob NFS Target. Changing this forces a new resource to be created.
     */
    readonly storageContainerId: pulumi.Output<string>;
    /**
     * The type of usage of the HPC Cache Blob NFS Target. Possible values are: `READ_HEAVY_INFREQ`, `READ_HEAVY_CHECK_180`, `WRITE_WORKLOAD_15`, `WRITE_AROUND`, `WRITE_WORKLOAD_CHECK_30`, `WRITE_WORKLOAD_CHECK_60` and `WRITE_WORKLOAD_CLOUDWS`.
     */
    readonly usageModel: pulumi.Output<string>;
    /**
     * Create a CacheBlobNfsTarget resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CacheBlobNfsTargetArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CacheBlobNfsTarget resources.
 */
export interface CacheBlobNfsTargetState {
    /**
     * The name of the access policy applied to this target. Defaults to `default`.
     */
    accessPolicyName?: pulumi.Input<string>;
    /**
     * The name of the HPC Cache, which the HPC Cache Blob NFS Target will be added to. Changing this forces a new HPC Cache Blob NFS Target to be created.
     */
    cacheName?: pulumi.Input<string>;
    /**
     * The name which should be used for this HPC Cache Blob NFS Target. Changing this forces a new HPC Cache Blob NFS Target to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The client-facing file path of the HPC Cache Blob NFS Target.
     */
    namespacePath?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the HPC Cache Blob NFS Target should exist. Changing this forces a new HPC Cache Blob NFS Target to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Resource Manager ID of the Storage Container used as the HPC Cache Blob NFS Target. Changing this forces a new resource to be created.
     */
    storageContainerId?: pulumi.Input<string>;
    /**
     * The type of usage of the HPC Cache Blob NFS Target. Possible values are: `READ_HEAVY_INFREQ`, `READ_HEAVY_CHECK_180`, `WRITE_WORKLOAD_15`, `WRITE_AROUND`, `WRITE_WORKLOAD_CHECK_30`, `WRITE_WORKLOAD_CHECK_60` and `WRITE_WORKLOAD_CLOUDWS`.
     */
    usageModel?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a CacheBlobNfsTarget resource.
 */
export interface CacheBlobNfsTargetArgs {
    /**
     * The name of the access policy applied to this target. Defaults to `default`.
     */
    accessPolicyName?: pulumi.Input<string>;
    /**
     * The name of the HPC Cache, which the HPC Cache Blob NFS Target will be added to. Changing this forces a new HPC Cache Blob NFS Target to be created.
     */
    cacheName: pulumi.Input<string>;
    /**
     * The name which should be used for this HPC Cache Blob NFS Target. Changing this forces a new HPC Cache Blob NFS Target to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The client-facing file path of the HPC Cache Blob NFS Target.
     */
    namespacePath: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the HPC Cache Blob NFS Target should exist. Changing this forces a new HPC Cache Blob NFS Target to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Resource Manager ID of the Storage Container used as the HPC Cache Blob NFS Target. Changing this forces a new resource to be created.
     */
    storageContainerId: pulumi.Input<string>;
    /**
     * The type of usage of the HPC Cache Blob NFS Target. Possible values are: `READ_HEAVY_INFREQ`, `READ_HEAVY_CHECK_180`, `WRITE_WORKLOAD_15`, `WRITE_AROUND`, `WRITE_WORKLOAD_CHECK_30`, `WRITE_WORKLOAD_CHECK_60` and `WRITE_WORKLOAD_CLOUDWS`.
     */
    usageModel: pulumi.Input<string>;
}
