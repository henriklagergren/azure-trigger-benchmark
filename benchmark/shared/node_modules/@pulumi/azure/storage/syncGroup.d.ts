import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Storage Sync Group.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleSync = new azure.storage.Sync("exampleSync", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * const exampleSyncGroup = new azure.storage.SyncGroup("exampleSyncGroup", {storageSyncId: exampleSync.id});
 * ```
 *
 * ## Import
 *
 * Storage Sync Groups can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:storage/syncGroup:SyncGroup example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resGroup1/providers/Microsoft.StorageSync/storageSyncServices/sync1/syncGroups/group1
 * ```
 */
export declare class SyncGroup extends pulumi.CustomResource {
    /**
     * Get an existing SyncGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SyncGroupState, opts?: pulumi.CustomResourceOptions): SyncGroup;
    /**
     * Returns true if the given object is an instance of SyncGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SyncGroup;
    /**
     * The name which should be used for this Storage Sync Group. Changing this forces a new Storage Sync Group to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The resource ID of the Storage Sync where this Storage Sync Group is. Changing this forces a new Storage Sync Group to be created.
     */
    readonly storageSyncId: pulumi.Output<string>;
    /**
     * Create a SyncGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SyncGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SyncGroup resources.
 */
export interface SyncGroupState {
    /**
     * The name which should be used for this Storage Sync Group. Changing this forces a new Storage Sync Group to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource ID of the Storage Sync where this Storage Sync Group is. Changing this forces a new Storage Sync Group to be created.
     */
    storageSyncId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SyncGroup resource.
 */
export interface SyncGroupArgs {
    /**
     * The name which should be used for this Storage Sync Group. Changing this forces a new Storage Sync Group to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource ID of the Storage Sync where this Storage Sync Group is. Changing this forces a new Storage Sync Group to be created.
     */
    storageSyncId: pulumi.Input<string>;
}
