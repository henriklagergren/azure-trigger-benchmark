import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Log Analytics Data Export Rule.
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
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleDataExportRule = new azure.loganalytics.DataExportRule("exampleDataExportRule", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     workspaceResourceId: exampleAnalyticsWorkspace.id,
 *     destinationResourceId: exampleAccount.id,
 *     tableNames: ["Heartbeat"],
 *     enabled: true,
 * });
 * ```
 *
 * ## Import
 *
 * Log Analytics Data Export Rule can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:loganalytics/dataExportRule:DataExportRule example /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/group1/providers/Microsoft.OperationalInsights/workspaces/workspace1/dataExports/dataExport1
 * ```
 */
export declare class DataExportRule extends pulumi.CustomResource {
    /**
     * Get an existing DataExportRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataExportRuleState, opts?: pulumi.CustomResourceOptions): DataExportRule;
    /**
     * Returns true if the given object is an instance of DataExportRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DataExportRule;
    /**
     * The destination resource ID. It should be a storage account, an event hub namespace or an event hub. If the destination is an event hub namespace, an event hub would be created for each table automatically.
     */
    readonly destinationResourceId: pulumi.Output<string>;
    /**
     * Is this Log Analytics Data Export Rule enabled? Possible values include `true` or `false`. Defaults to `false`.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the created Data Export Rule.
     */
    readonly exportRuleId: pulumi.Output<string>;
    /**
     * The name of the Log Analytics Data Export Rule. Changing this forces a new Log Analytics Data Export Rule to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Log Analytics Data Export should exist. Changing this forces a new Log Analytics Data Export Rule to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A list of table names to export to the destination resource, for example: `["Heartbeat", "SecurityEvent"]`.
     */
    readonly tableNames: pulumi.Output<string[]>;
    /**
     * The resource ID of the workspace. Changing this forces a new Log Analytics Data Export Rule to be created.
     */
    readonly workspaceResourceId: pulumi.Output<string>;
    /**
     * Create a DataExportRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataExportRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DataExportRule resources.
 */
export interface DataExportRuleState {
    /**
     * The destination resource ID. It should be a storage account, an event hub namespace or an event hub. If the destination is an event hub namespace, an event hub would be created for each table automatically.
     */
    destinationResourceId?: pulumi.Input<string>;
    /**
     * Is this Log Analytics Data Export Rule enabled? Possible values include `true` or `false`. Defaults to `false`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The ID of the created Data Export Rule.
     */
    exportRuleId?: pulumi.Input<string>;
    /**
     * The name of the Log Analytics Data Export Rule. Changing this forces a new Log Analytics Data Export Rule to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Log Analytics Data Export should exist. Changing this forces a new Log Analytics Data Export Rule to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A list of table names to export to the destination resource, for example: `["Heartbeat", "SecurityEvent"]`.
     */
    tableNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The resource ID of the workspace. Changing this forces a new Log Analytics Data Export Rule to be created.
     */
    workspaceResourceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DataExportRule resource.
 */
export interface DataExportRuleArgs {
    /**
     * The destination resource ID. It should be a storage account, an event hub namespace or an event hub. If the destination is an event hub namespace, an event hub would be created for each table automatically.
     */
    destinationResourceId: pulumi.Input<string>;
    /**
     * Is this Log Analytics Data Export Rule enabled? Possible values include `true` or `false`. Defaults to `false`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The name of the Log Analytics Data Export Rule. Changing this forces a new Log Analytics Data Export Rule to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Log Analytics Data Export should exist. Changing this forces a new Log Analytics Data Export Rule to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A list of table names to export to the destination resource, for example: `["Heartbeat", "SecurityEvent"]`.
     */
    tableNames: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The resource ID of the workspace. Changing this forces a new Log Analytics Data Export Rule to be created.
     */
    workspaceResourceId: pulumi.Input<string>;
}
