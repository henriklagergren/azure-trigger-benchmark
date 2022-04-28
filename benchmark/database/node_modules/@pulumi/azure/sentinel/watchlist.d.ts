import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Sentinel Watchlist.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAnalyticsWorkspace = new azure.operationalinsights.AnalyticsWorkspace("exampleAnalyticsWorkspace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "PerGB2018",
 * });
 * const exampleAnalyticsSolution = new azure.operationalinsights.AnalyticsSolution("exampleAnalyticsSolution", {
 *     solutionName: "SecurityInsights",
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     workspaceResourceId: exampleAnalyticsWorkspace.id,
 *     workspaceName: exampleAnalyticsWorkspace.name,
 *     plan: {
 *         publisher: "Microsoft",
 *         product: "OMSGallery/SecurityInsights",
 *     },
 * });
 * const exampleWatchlist = new azure.sentinel.Watchlist("exampleWatchlist", {
 *     logAnalyticsWorkspaceId: exampleAnalyticsSolution.workspaceResourceId,
 *     displayName: "example-wl",
 * });
 * ```
 *
 * ## Import
 *
 * Sentinel Watchlists can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:sentinel/watchlist:Watchlist example /subscriptions/12345678-1234-9876-4563-123456789012/resourceGroups/resGroup1/providers/Microsoft.OperationalInsights/workspaces/workspace1/providers/Microsoft.SecurityInsights/watchlists/list1
 * ```
 */
export declare class Watchlist extends pulumi.CustomResource {
    /**
     * Get an existing Watchlist resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WatchlistState, opts?: pulumi.CustomResourceOptions): Watchlist;
    /**
     * Returns true if the given object is an instance of Watchlist.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Watchlist;
    /**
     * The default duration in ISO8601 duration form of this Sentinel Watchlist. Changing this forces a new Sentinel Watchlist to be created.
     */
    readonly defaultDuration: pulumi.Output<string | undefined>;
    /**
     * The description of this Sentinel Watchlist. Changing this forces a new Sentinel Watchlist to be created.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The display name of this Sentinel Watchlist. Changing this forces a new Sentinel Watchlist to be created.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * Specifies a list of labels related to this Sentinel Watchlist. Changing this forces a new Sentinel Watchlist to be created.
     */
    readonly labels: pulumi.Output<string[] | undefined>;
    /**
     * The ID of the Log Analytics Workspace where this Sentinel Watchlist resides in. Changing this forces a new Sentinel Watchlist to be created.
     */
    readonly logAnalyticsWorkspaceId: pulumi.Output<string>;
    /**
     * The name which should be used for this Sentinel Watchlist. Changing this forces a new Sentinel Watchlist to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Create a Watchlist resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WatchlistArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Watchlist resources.
 */
export interface WatchlistState {
    /**
     * The default duration in ISO8601 duration form of this Sentinel Watchlist. Changing this forces a new Sentinel Watchlist to be created.
     */
    defaultDuration?: pulumi.Input<string>;
    /**
     * The description of this Sentinel Watchlist. Changing this forces a new Sentinel Watchlist to be created.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of this Sentinel Watchlist. Changing this forces a new Sentinel Watchlist to be created.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Specifies a list of labels related to this Sentinel Watchlist. Changing this forces a new Sentinel Watchlist to be created.
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of the Log Analytics Workspace where this Sentinel Watchlist resides in. Changing this forces a new Sentinel Watchlist to be created.
     */
    logAnalyticsWorkspaceId?: pulumi.Input<string>;
    /**
     * The name which should be used for this Sentinel Watchlist. Changing this forces a new Sentinel Watchlist to be created.
     */
    name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Watchlist resource.
 */
export interface WatchlistArgs {
    /**
     * The default duration in ISO8601 duration form of this Sentinel Watchlist. Changing this forces a new Sentinel Watchlist to be created.
     */
    defaultDuration?: pulumi.Input<string>;
    /**
     * The description of this Sentinel Watchlist. Changing this forces a new Sentinel Watchlist to be created.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of this Sentinel Watchlist. Changing this forces a new Sentinel Watchlist to be created.
     */
    displayName: pulumi.Input<string>;
    /**
     * Specifies a list of labels related to this Sentinel Watchlist. Changing this forces a new Sentinel Watchlist to be created.
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of the Log Analytics Workspace where this Sentinel Watchlist resides in. Changing this forces a new Sentinel Watchlist to be created.
     */
    logAnalyticsWorkspaceId: pulumi.Input<string>;
    /**
     * The name which should be used for this Sentinel Watchlist. Changing this forces a new Sentinel Watchlist to be created.
     */
    name?: pulumi.Input<string>;
}
