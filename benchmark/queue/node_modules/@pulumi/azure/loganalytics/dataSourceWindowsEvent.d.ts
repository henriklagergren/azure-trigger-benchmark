import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Log Analytics Windows Event DataSource.
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
 * const exampleDataSourceWindowsEvent = new azure.loganalytics.DataSourceWindowsEvent("exampleDataSourceWindowsEvent", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     workspaceName: exampleAnalyticsWorkspace.name,
 *     eventLogName: "Application",
 *     eventTypes: ["error"],
 * });
 * ```
 *
 * ## Import
 *
 * Log Analytics Windows Event DataSources can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:loganalytics/dataSourceWindowsEvent:DataSourceWindowsEvent example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.OperationalInsights/workspaces/workspace1/datasources/datasource1
 * ```
 */
export declare class DataSourceWindowsEvent extends pulumi.CustomResource {
    /**
     * Get an existing DataSourceWindowsEvent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataSourceWindowsEventState, opts?: pulumi.CustomResourceOptions): DataSourceWindowsEvent;
    /**
     * Returns true if the given object is an instance of DataSourceWindowsEvent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DataSourceWindowsEvent;
    /**
     * Specifies the name of the Windows Event Log to collect events from.
     */
    readonly eventLogName: pulumi.Output<string>;
    /**
     * Specifies an array of event types applied to the specified event log. Possible values include `error`, `warning` and `information`.
     */
    readonly eventTypes: pulumi.Output<string[]>;
    /**
     * The name which should be used for this Log Analytics Windows Event DataSource. Changing this forces a new Log Analytics Windows Event DataSource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Log Analytics Windows Event DataSource should exist. Changing this forces a new Log Analytics Windows Event DataSource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The name of the Log Analytics Workspace where the Log Analytics Windows Event DataSource should exist. Changing this forces a new Log Analytics Windows Event DataSource to be created.
     */
    readonly workspaceName: pulumi.Output<string>;
    /**
     * Create a DataSourceWindowsEvent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataSourceWindowsEventArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DataSourceWindowsEvent resources.
 */
export interface DataSourceWindowsEventState {
    /**
     * Specifies the name of the Windows Event Log to collect events from.
     */
    eventLogName?: pulumi.Input<string>;
    /**
     * Specifies an array of event types applied to the specified event log. Possible values include `error`, `warning` and `information`.
     */
    eventTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name which should be used for this Log Analytics Windows Event DataSource. Changing this forces a new Log Analytics Windows Event DataSource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Log Analytics Windows Event DataSource should exist. Changing this forces a new Log Analytics Windows Event DataSource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The name of the Log Analytics Workspace where the Log Analytics Windows Event DataSource should exist. Changing this forces a new Log Analytics Windows Event DataSource to be created.
     */
    workspaceName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DataSourceWindowsEvent resource.
 */
export interface DataSourceWindowsEventArgs {
    /**
     * Specifies the name of the Windows Event Log to collect events from.
     */
    eventLogName: pulumi.Input<string>;
    /**
     * Specifies an array of event types applied to the specified event log. Possible values include `error`, `warning` and `information`.
     */
    eventTypes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name which should be used for this Log Analytics Windows Event DataSource. Changing this forces a new Log Analytics Windows Event DataSource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Log Analytics Windows Event DataSource should exist. Changing this forces a new Log Analytics Windows Event DataSource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Log Analytics Workspace where the Log Analytics Windows Event DataSource should exist. Changing this forces a new Log Analytics Windows Event DataSource to be created.
     */
    workspaceName: pulumi.Input<string>;
}
