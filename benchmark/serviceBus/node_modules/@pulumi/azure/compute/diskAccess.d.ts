import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Disk Access.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.compute.DiskAccess("example", {
 *     location: "West Europe",
 *     resourceGroupName: "example",
 * });
 * ```
 *
 * ## Import
 *
 * Disk Access resource can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:compute/diskAccess:DiskAccess example /subscriptions/12345678-1234-9876-4563-123456789012/resourceGroups/resGroup1/providers/Microsoft.Compute/diskAccesses/diskAccess1
 * ```
 */
export declare class DiskAccess extends pulumi.CustomResource {
    /**
     * Get an existing DiskAccess resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DiskAccessState, opts?: pulumi.CustomResourceOptions): DiskAccess;
    /**
     * Returns true if the given object is an instance of DiskAccess.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DiskAccess;
    /**
     * The Azure Region where the Disk Access should exist. Changing this forces a new Disk to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Disk Access. Changing this forces a new Disk Access to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Disk Access should exist. Changing this forces a new Disk Access to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Disk Access.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a DiskAccess resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiskAccessArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DiskAccess resources.
 */
export interface DiskAccessState {
    /**
     * The Azure Region where the Disk Access should exist. Changing this forces a new Disk to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Disk Access. Changing this forces a new Disk Access to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Disk Access should exist. Changing this forces a new Disk Access to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Disk Access.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a DiskAccess resource.
 */
export interface DiskAccessArgs {
    /**
     * The Azure Region where the Disk Access should exist. Changing this forces a new Disk to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Disk Access. Changing this forces a new Disk Access to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Disk Access should exist. Changing this forces a new Disk Access to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Disk Access.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
