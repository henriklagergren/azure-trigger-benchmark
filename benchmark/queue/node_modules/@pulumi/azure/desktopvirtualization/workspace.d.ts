import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Virtual Desktop Workspace.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.core.ResourceGroup("example", {location: "West Europe"});
 * const workspace = new azure.desktopvirtualization.Workspace("workspace", {
 *     location: example.location,
 *     resourceGroupName: example.name,
 *     friendlyName: "FriendlyName",
 *     description: "A description of my workspace",
 * });
 * ```
 *
 * ## Import
 *
 * Virtual Desktop Workspaces can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:desktopvirtualization/workspace:Workspace example /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myGroup1/providers/Microsoft.DesktopVirtualization/workspaces/myworkspace
 * ```
 */
export declare class Workspace extends pulumi.CustomResource {
    /**
     * Get an existing Workspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkspaceState, opts?: pulumi.CustomResourceOptions): Workspace;
    /**
     * Returns true if the given object is an instance of Workspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Workspace;
    /**
     * A description for the Virtual Desktop Workspace.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * A friendly name for the Virtual Desktop Workspace.
     */
    readonly friendlyName: pulumi.Output<string | undefined>;
    /**
     * The location/region where the Virtual Desktop Workspace is located. Changing the location/region forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the Virtual Desktop Workspace. Changing the name
     * forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to
     * create the Virtual Desktop Workspace. Changing the resource group name forces
     * a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Workspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Workspace resources.
 */
export interface WorkspaceState {
    /**
     * A description for the Virtual Desktop Workspace.
     */
    description?: pulumi.Input<string>;
    /**
     * A friendly name for the Virtual Desktop Workspace.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * The location/region where the Virtual Desktop Workspace is located. Changing the location/region forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Virtual Desktop Workspace. Changing the name
     * forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the Virtual Desktop Workspace. Changing the resource group name forces
     * a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Workspace resource.
 */
export interface WorkspaceArgs {
    /**
     * A description for the Virtual Desktop Workspace.
     */
    description?: pulumi.Input<string>;
    /**
     * A friendly name for the Virtual Desktop Workspace.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * The location/region where the Virtual Desktop Workspace is located. Changing the location/region forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Virtual Desktop Workspace. Changing the name
     * forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the Virtual Desktop Workspace. Changing the resource group name forces
     * a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
