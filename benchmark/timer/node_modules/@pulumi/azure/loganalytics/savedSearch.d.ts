import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Log Analytics (formally Operational Insights) Saved Search.
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
 *     retentionInDays: 30,
 * });
 * const exampleSavedSearch = new azure.loganalytics.SavedSearch("exampleSavedSearch", {
 *     logAnalyticsWorkspaceId: azurerm_log_analytics_workspace.test.id,
 *     category: "exampleCategory",
 *     displayName: "exampleDisplayName",
 *     query: "exampleQuery",
 * });
 * ```
 *
 * ## Import
 *
 * Log Analytics Saved Searches can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:loganalytics/savedSearch:SavedSearch search1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.OperationalInsights/workspaces/workspace1/savedSearches/search1
 * ```
 */
export declare class SavedSearch extends pulumi.CustomResource {
    /**
     * Get an existing SavedSearch resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SavedSearchState, opts?: pulumi.CustomResourceOptions): SavedSearch;
    /**
     * Returns true if the given object is an instance of SavedSearch.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SavedSearch;
    /**
     * The category that the Saved Search will be listed under. Changing this forces a new resource to be created.
     */
    readonly category: pulumi.Output<string>;
    /**
     * The name that Saved Search will be displayed as. Changing this forces a new resource to be created.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * The function alias if the query serves as a function. Changing this forces a new resource to be created.
     */
    readonly functionAlias: pulumi.Output<string | undefined>;
    /**
     * The function parameters if the query serves as a function. Changing this forces a new resource to be created.
     */
    readonly functionParameters: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the ID of the Log Analytics Workspace that the Saved Search will be associated with. Changing this forces a new resource to be created.
     */
    readonly logAnalyticsWorkspaceId: pulumi.Output<string>;
    /**
     * Specifies the name of the Log Analytics Saved Search. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The query expression for the saved search. Changing this forces a new resource to be created.
     */
    readonly query: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Logs Analytics Saved Search.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a SavedSearch resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SavedSearchArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SavedSearch resources.
 */
export interface SavedSearchState {
    /**
     * The category that the Saved Search will be listed under. Changing this forces a new resource to be created.
     */
    category?: pulumi.Input<string>;
    /**
     * The name that Saved Search will be displayed as. Changing this forces a new resource to be created.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The function alias if the query serves as a function. Changing this forces a new resource to be created.
     */
    functionAlias?: pulumi.Input<string>;
    /**
     * The function parameters if the query serves as a function. Changing this forces a new resource to be created.
     */
    functionParameters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the ID of the Log Analytics Workspace that the Saved Search will be associated with. Changing this forces a new resource to be created.
     */
    logAnalyticsWorkspaceId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Log Analytics Saved Search. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The query expression for the saved search. Changing this forces a new resource to be created.
     */
    query?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Logs Analytics Saved Search.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a SavedSearch resource.
 */
export interface SavedSearchArgs {
    /**
     * The category that the Saved Search will be listed under. Changing this forces a new resource to be created.
     */
    category: pulumi.Input<string>;
    /**
     * The name that Saved Search will be displayed as. Changing this forces a new resource to be created.
     */
    displayName: pulumi.Input<string>;
    /**
     * The function alias if the query serves as a function. Changing this forces a new resource to be created.
     */
    functionAlias?: pulumi.Input<string>;
    /**
     * The function parameters if the query serves as a function. Changing this forces a new resource to be created.
     */
    functionParameters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the ID of the Log Analytics Workspace that the Saved Search will be associated with. Changing this forces a new resource to be created.
     */
    logAnalyticsWorkspaceId: pulumi.Input<string>;
    /**
     * Specifies the name of the Log Analytics Saved Search. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The query expression for the saved search. Changing this forces a new resource to be created.
     */
    query: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Logs Analytics Saved Search.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
