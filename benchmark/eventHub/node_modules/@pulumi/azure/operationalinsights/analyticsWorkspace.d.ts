import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Log Analytics (formally Operational Insights) Workspace.
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
 * ```
 *
 * ## Import
 *
 * Log Analytics Workspaces can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:operationalinsights/analyticsWorkspace:AnalyticsWorkspace workspace1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.OperationalInsights/workspaces/workspace1
 * ```
 */
export declare class AnalyticsWorkspace extends pulumi.CustomResource {
    /**
     * Get an existing AnalyticsWorkspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AnalyticsWorkspaceState, opts?: pulumi.CustomResourceOptions): AnalyticsWorkspace;
    /**
     * Returns true if the given object is an instance of AnalyticsWorkspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AnalyticsWorkspace;
    /**
     * The workspace daily quota for ingestion in GB.  Defaults to -1 (unlimited) if omitted.
     */
    readonly dailyQuotaGb: pulumi.Output<number | undefined>;
    readonly internetIngestionEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Should the Log Analytics Workflow support querying over the Public Internet? Defaults to `true`.
     */
    readonly internetQueryEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Log Analytics Workspace. Workspace name should include 4-63 letters, digits or '-'. The '-' shouldn't be the first or the last symbol. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * @deprecated this property has been removed from the API and will be removed in version 3.0 of the provider
     */
    readonly portalUrl: pulumi.Output<string>;
    /**
     * The Primary shared key for the Log Analytics Workspace.
     */
    readonly primarySharedKey: pulumi.Output<string>;
    /**
     * The capacity reservation level in GB for this workspace.  Must be in increments of 100  between 100 and 5000.
     */
    readonly reservationCapacityInGbPerDay: pulumi.Output<number>;
    /**
     * @deprecated As this property name contained a typo originally, please switch to using 'reservation_capacity_in_gb_per_day' instead.
     */
    readonly reservationCapcityInGbPerDay: pulumi.Output<number>;
    /**
     * The name of the resource group in which the Log Analytics workspace is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The workspace data retention in days. Possible values are either 7 (Free Tier only) or range between 30 and 730.
     */
    readonly retentionInDays: pulumi.Output<number>;
    /**
     * The Secondary shared key for the Log Analytics Workspace.
     */
    readonly secondarySharedKey: pulumi.Output<string>;
    /**
     * Specifies the Sku of the Log Analytics Workspace. Possible values are `Free`, `PerNode`, `Premium`, `Standard`, `Standalone`, `Unlimited`, `CapacityReservation`, and `PerGB2018` (new Sku as of `2018-04-03`). Defaults to `PerGB2018`.
     */
    readonly sku: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The Workspace (or Customer) ID for the Log Analytics Workspace.
     */
    readonly workspaceId: pulumi.Output<string>;
    /**
     * Create a AnalyticsWorkspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AnalyticsWorkspaceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AnalyticsWorkspace resources.
 */
export interface AnalyticsWorkspaceState {
    /**
     * The workspace daily quota for ingestion in GB.  Defaults to -1 (unlimited) if omitted.
     */
    dailyQuotaGb?: pulumi.Input<number>;
    internetIngestionEnabled?: pulumi.Input<boolean>;
    /**
     * Should the Log Analytics Workflow support querying over the Public Internet? Defaults to `true`.
     */
    internetQueryEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Log Analytics Workspace. Workspace name should include 4-63 letters, digits or '-'. The '-' shouldn't be the first or the last symbol. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * @deprecated this property has been removed from the API and will be removed in version 3.0 of the provider
     */
    portalUrl?: pulumi.Input<string>;
    /**
     * The Primary shared key for the Log Analytics Workspace.
     */
    primarySharedKey?: pulumi.Input<string>;
    /**
     * The capacity reservation level in GB for this workspace.  Must be in increments of 100  between 100 and 5000.
     */
    reservationCapacityInGbPerDay?: pulumi.Input<number>;
    /**
     * @deprecated As this property name contained a typo originally, please switch to using 'reservation_capacity_in_gb_per_day' instead.
     */
    reservationCapcityInGbPerDay?: pulumi.Input<number>;
    /**
     * The name of the resource group in which the Log Analytics workspace is created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The workspace data retention in days. Possible values are either 7 (Free Tier only) or range between 30 and 730.
     */
    retentionInDays?: pulumi.Input<number>;
    /**
     * The Secondary shared key for the Log Analytics Workspace.
     */
    secondarySharedKey?: pulumi.Input<string>;
    /**
     * Specifies the Sku of the Log Analytics Workspace. Possible values are `Free`, `PerNode`, `Premium`, `Standard`, `Standalone`, `Unlimited`, `CapacityReservation`, and `PerGB2018` (new Sku as of `2018-04-03`). Defaults to `PerGB2018`.
     */
    sku?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The Workspace (or Customer) ID for the Log Analytics Workspace.
     */
    workspaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AnalyticsWorkspace resource.
 */
export interface AnalyticsWorkspaceArgs {
    /**
     * The workspace daily quota for ingestion in GB.  Defaults to -1 (unlimited) if omitted.
     */
    dailyQuotaGb?: pulumi.Input<number>;
    internetIngestionEnabled?: pulumi.Input<boolean>;
    /**
     * Should the Log Analytics Workflow support querying over the Public Internet? Defaults to `true`.
     */
    internetQueryEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Log Analytics Workspace. Workspace name should include 4-63 letters, digits or '-'. The '-' shouldn't be the first or the last symbol. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The capacity reservation level in GB for this workspace.  Must be in increments of 100  between 100 and 5000.
     */
    reservationCapacityInGbPerDay?: pulumi.Input<number>;
    /**
     * @deprecated As this property name contained a typo originally, please switch to using 'reservation_capacity_in_gb_per_day' instead.
     */
    reservationCapcityInGbPerDay?: pulumi.Input<number>;
    /**
     * The name of the resource group in which the Log Analytics workspace is created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The workspace data retention in days. Possible values are either 7 (Free Tier only) or range between 30 and 730.
     */
    retentionInDays?: pulumi.Input<number>;
    /**
     * Specifies the Sku of the Log Analytics Workspace. Possible values are `Free`, `PerNode`, `Premium`, `Standard`, `Standalone`, `Unlimited`, `CapacityReservation`, and `PerGB2018` (new Sku as of `2018-04-03`). Defaults to `PerGB2018`.
     */
    sku?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
