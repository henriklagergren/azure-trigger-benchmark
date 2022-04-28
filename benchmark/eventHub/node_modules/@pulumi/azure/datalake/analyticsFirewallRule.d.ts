import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Azure Data Lake Analytics Firewall Rule.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleStore = new azure.datalake.Store("exampleStore", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * const exampleAnalyticsAccount = new azure.datalake.AnalyticsAccount("exampleAnalyticsAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     defaultStoreAccountName: exampleStore.name,
 * });
 * const exampleAnalyticsFirewallRule = new azure.datalake.AnalyticsFirewallRule("exampleAnalyticsFirewallRule", {
 *     accountName: azurerm_data_lake_analytics.example.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     startIpAddress: "1.2.3.4",
 *     endIpAddress: "2.3.4.5",
 * });
 * ```
 *
 * ## Import
 *
 * Data Lake Analytics Firewall Rules can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datalake/analyticsFirewallRule:AnalyticsFirewallRule rule1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.DataLakeAnalytics/accounts/mydatalakeaccount/firewallRules/rule1
 * ```
 */
export declare class AnalyticsFirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing AnalyticsFirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AnalyticsFirewallRuleState, opts?: pulumi.CustomResourceOptions): AnalyticsFirewallRule;
    /**
     * Returns true if the given object is an instance of AnalyticsFirewallRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AnalyticsFirewallRule;
    /**
     * Specifies the name of the Data Lake Analytics for which the Firewall Rule should take effect.
     */
    readonly accountName: pulumi.Output<string>;
    /**
     * The End IP Address for the firewall rule.
     */
    readonly endIpAddress: pulumi.Output<string>;
    /**
     * Specifies the name of the Data Lake Analytics. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Data Lake Analytics.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Start IP address for the firewall rule.
     */
    readonly startIpAddress: pulumi.Output<string>;
    /**
     * Create a AnalyticsFirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AnalyticsFirewallRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AnalyticsFirewallRule resources.
 */
export interface AnalyticsFirewallRuleState {
    /**
     * Specifies the name of the Data Lake Analytics for which the Firewall Rule should take effect.
     */
    accountName?: pulumi.Input<string>;
    /**
     * The End IP Address for the firewall rule.
     */
    endIpAddress?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Lake Analytics. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Data Lake Analytics.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Start IP address for the firewall rule.
     */
    startIpAddress?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AnalyticsFirewallRule resource.
 */
export interface AnalyticsFirewallRuleArgs {
    /**
     * Specifies the name of the Data Lake Analytics for which the Firewall Rule should take effect.
     */
    accountName: pulumi.Input<string>;
    /**
     * The End IP Address for the firewall rule.
     */
    endIpAddress: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Lake Analytics. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Data Lake Analytics.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Start IP address for the firewall rule.
     */
    startIpAddress: pulumi.Input<string>;
}
