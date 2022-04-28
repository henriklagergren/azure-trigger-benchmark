import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Virtual Desktop Workspace Application Group Association.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.core.ResourceGroup("example", {location: "West Europe"});
 * const pooledbreadthfirst = new azure.desktopvirtualization.HostPool("pooledbreadthfirst", {
 *     location: example.location,
 *     resourceGroupName: example.name,
 *     type: "Pooled",
 *     loadBalancerType: "BreadthFirst",
 * });
 * const remoteapp = new azure.desktopvirtualization.ApplicationGroup("remoteapp", {
 *     location: example.location,
 *     resourceGroupName: example.name,
 *     type: "RemoteApp",
 *     hostPoolId: pooledbreadthfirst.id,
 * });
 * const workspace = new azure.desktopvirtualization.Workspace("workspace", {
 *     location: example.location,
 *     resourceGroupName: example.name,
 * });
 * const workspaceremoteapp = new azure.desktopvirtualization.WorkspaceApplicationGroupAssociation("workspaceremoteapp", {
 *     workspaceId: workspace.id,
 *     applicationGroupId: remoteapp.id,
 * });
 * ```
 *
 * ## Import
 *
 * Associations between Virtual Desktop Workspaces and Virtual Desktop Application Groups can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:desktopvirtualization/workspaceApplicationGroupAssociation:WorkspaceApplicationGroupAssociation association1 "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myGroup1/providers/Microsoft.DesktopVirtualization/workspaces/myworkspace|/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup1/providers/Microsoft.DesktopVirtualization/applicationGroups/myapplicationgroup"
 * ```
 */
export declare class WorkspaceApplicationGroupAssociation extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceApplicationGroupAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkspaceApplicationGroupAssociationState, opts?: pulumi.CustomResourceOptions): WorkspaceApplicationGroupAssociation;
    /**
     * Returns true if the given object is an instance of WorkspaceApplicationGroupAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WorkspaceApplicationGroupAssociation;
    /**
     * The resource ID for the Virtual Desktop Application Group.
     */
    readonly applicationGroupId: pulumi.Output<string>;
    /**
     * The resource ID for the Virtual Desktop Workspace.
     */
    readonly workspaceId: pulumi.Output<string>;
    /**
     * Create a WorkspaceApplicationGroupAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceApplicationGroupAssociationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WorkspaceApplicationGroupAssociation resources.
 */
export interface WorkspaceApplicationGroupAssociationState {
    /**
     * The resource ID for the Virtual Desktop Application Group.
     */
    applicationGroupId?: pulumi.Input<string>;
    /**
     * The resource ID for the Virtual Desktop Workspace.
     */
    workspaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a WorkspaceApplicationGroupAssociation resource.
 */
export interface WorkspaceApplicationGroupAssociationArgs {
    /**
     * The resource ID for the Virtual Desktop Application Group.
     */
    applicationGroupId: pulumi.Input<string>;
    /**
     * The resource ID for the Virtual Desktop Workspace.
     */
    workspaceId: pulumi.Input<string>;
}
