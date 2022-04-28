import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Storage Sync.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.core.ResourceGroup("example", {location: "West Europe"});
 * const test = new azure.storage.Sync("test", {
 *     resourceGroupName: azurerm_resource_group.test.name,
 *     location: azurerm_resource_group.test.location,
 *     tags: {
 *         foo: "bar",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Storage Syncs can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:storage/sync:Sync example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.StorageSync/storageSyncServices/sync1
 * ```
 */
export declare class Sync extends pulumi.CustomResource {
    /**
     * Get an existing Sync resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SyncState, opts?: pulumi.CustomResourceOptions): Sync;
    /**
     * Returns true if the given object is an instance of Sync.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Sync;
    /**
     * Incoming traffic policy. Possible values are `AllowAllTraffic` and `AllowVirtualNetworksOnly`.
     */
    readonly incomingTrafficPolicy: pulumi.Output<string | undefined>;
    /**
     * The Azure Region where the Storage Sync should exist. Changing this forces a new Storage Sync to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Storage Sync. Changing this forces a new Storage Sync to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Storage Sync should exist. Changing this forces a new Storage Sync to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Storage Sync.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Sync resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SyncArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Sync resources.
 */
export interface SyncState {
    /**
     * Incoming traffic policy. Possible values are `AllowAllTraffic` and `AllowVirtualNetworksOnly`.
     */
    incomingTrafficPolicy?: pulumi.Input<string>;
    /**
     * The Azure Region where the Storage Sync should exist. Changing this forces a new Storage Sync to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Storage Sync. Changing this forces a new Storage Sync to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Storage Sync should exist. Changing this forces a new Storage Sync to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Storage Sync.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Sync resource.
 */
export interface SyncArgs {
    /**
     * Incoming traffic policy. Possible values are `AllowAllTraffic` and `AllowVirtualNetworksOnly`.
     */
    incomingTrafficPolicy?: pulumi.Input<string>;
    /**
     * The Azure Region where the Storage Sync should exist. Changing this forces a new Storage Sync to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Storage Sync. Changing this forces a new Storage Sync to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Storage Sync should exist. Changing this forces a new Storage Sync to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Storage Sync.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
