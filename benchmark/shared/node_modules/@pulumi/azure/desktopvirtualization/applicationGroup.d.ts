import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Virtual Desktop Application Group.
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
 * const personalautomatic = new azure.desktopvirtualization.HostPool("personalautomatic", {
 *     location: example.location,
 *     resourceGroupName: example.name,
 *     type: "Personal",
 *     personalDesktopAssignmentType: "Automatic",
 * });
 * const remoteapp = new azure.desktopvirtualization.ApplicationGroup("remoteapp", {
 *     location: example.location,
 *     resourceGroupName: example.name,
 *     type: "RemoteApp",
 *     hostPoolId: pooledbreadthfirst.id,
 *     friendlyName: "TestAppGroup",
 *     description: "Acceptance Test: An application group",
 * });
 * const desktopapp = new azure.desktopvirtualization.ApplicationGroup("desktopapp", {
 *     location: example.location,
 *     resourceGroupName: example.name,
 *     type: "Desktop",
 *     hostPoolId: personalautomatic.id,
 *     friendlyName: "TestAppGroup",
 *     description: "Acceptance Test: An application group",
 * });
 * ```
 *
 * ## Import
 *
 * Virtual Desktop Application Groups can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:desktopvirtualization/applicationGroup:ApplicationGroup example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup1/providers/Microsoft.DesktopVirtualization/applicationGroups/myapplicationgroup
 * ```
 */
export declare class ApplicationGroup extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationGroupState, opts?: pulumi.CustomResourceOptions): ApplicationGroup;
    /**
     * Returns true if the given object is an instance of ApplicationGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApplicationGroup;
    /**
     * Option to set the display name for the default sessionDesktop desktop when `type` is set to `Desktop`.
     */
    readonly defaultDesktopDisplayName: pulumi.Output<string | undefined>;
    /**
     * Option to set a description for the Virtual Desktop Application Group.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Option to set a friendly name for the Virtual Desktop Application Group.
     */
    readonly friendlyName: pulumi.Output<string | undefined>;
    /**
     * Resource ID for a Virtual Desktop Host Pool to associate with the
     * Virtual Desktop Application Group.
     */
    readonly hostPoolId: pulumi.Output<string>;
    /**
     * The location/region where the Virtual Desktop Application Group is
     * located. Changing the location/region forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the Virtual Desktop Application Group. Changing the name forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to
     * create the Virtual Desktop Application Group. Changing the resource group name forces
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
     * Type of Virtual Desktop Application Group.
     * Valid options are `RemoteApp` or `Desktop` application groups.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ApplicationGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ApplicationGroup resources.
 */
export interface ApplicationGroupState {
    /**
     * Option to set the display name for the default sessionDesktop desktop when `type` is set to `Desktop`.
     */
    defaultDesktopDisplayName?: pulumi.Input<string>;
    /**
     * Option to set a description for the Virtual Desktop Application Group.
     */
    description?: pulumi.Input<string>;
    /**
     * Option to set a friendly name for the Virtual Desktop Application Group.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Resource ID for a Virtual Desktop Host Pool to associate with the
     * Virtual Desktop Application Group.
     */
    hostPoolId?: pulumi.Input<string>;
    /**
     * The location/region where the Virtual Desktop Application Group is
     * located. Changing the location/region forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Virtual Desktop Application Group. Changing the name forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the Virtual Desktop Application Group. Changing the resource group name forces
     * a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Type of Virtual Desktop Application Group.
     * Valid options are `RemoteApp` or `Desktop` application groups.
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ApplicationGroup resource.
 */
export interface ApplicationGroupArgs {
    /**
     * Option to set the display name for the default sessionDesktop desktop when `type` is set to `Desktop`.
     */
    defaultDesktopDisplayName?: pulumi.Input<string>;
    /**
     * Option to set a description for the Virtual Desktop Application Group.
     */
    description?: pulumi.Input<string>;
    /**
     * Option to set a friendly name for the Virtual Desktop Application Group.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Resource ID for a Virtual Desktop Host Pool to associate with the
     * Virtual Desktop Application Group.
     */
    hostPoolId: pulumi.Input<string>;
    /**
     * The location/region where the Virtual Desktop Application Group is
     * located. Changing the location/region forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Virtual Desktop Application Group. Changing the name forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the Virtual Desktop Application Group. Changing the resource group name forces
     * a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Type of Virtual Desktop Application Group.
     * Valid options are `RemoteApp` or `Desktop` application groups.
     */
    type: pulumi.Input<string>;
}
