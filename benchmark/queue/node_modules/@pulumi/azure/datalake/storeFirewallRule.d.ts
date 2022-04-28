import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Azure Data Lake Store Firewall Rule.
 *
 * > **Note:** This resoruce manages an `Azure Data Lake Storage Gen1`, previously known as `Azure Data Lake Store`.
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
 * const exampleStoreFirewallRule = new azure.datalake.StoreFirewallRule("exampleStoreFirewallRule", {
 *     accountName: exampleStore.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     startIpAddress: "1.2.3.4",
 *     endIpAddress: "2.3.4.5",
 * });
 * ```
 *
 * ## Import
 *
 * Data Lake Store Firewall Rules can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datalake/storeFirewallRule:StoreFirewallRule rule1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.DataLakeStore/accounts/mydatalakeaccount/firewallRules/rule1
 * ```
 */
export declare class StoreFirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing StoreFirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StoreFirewallRuleState, opts?: pulumi.CustomResourceOptions): StoreFirewallRule;
    /**
     * Returns true if the given object is an instance of StoreFirewallRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StoreFirewallRule;
    /**
     * Specifies the name of the Data Lake Store for which the Firewall Rule should take effect.
     */
    readonly accountName: pulumi.Output<string>;
    /**
     * The End IP Address for the firewall rule.
     */
    readonly endIpAddress: pulumi.Output<string>;
    /**
     * Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Data Lake Store.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Start IP address for the firewall rule.
     */
    readonly startIpAddress: pulumi.Output<string>;
    /**
     * Create a StoreFirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StoreFirewallRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering StoreFirewallRule resources.
 */
export interface StoreFirewallRuleState {
    /**
     * Specifies the name of the Data Lake Store for which the Firewall Rule should take effect.
     */
    accountName?: pulumi.Input<string>;
    /**
     * The End IP Address for the firewall rule.
     */
    endIpAddress?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Data Lake Store.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Start IP address for the firewall rule.
     */
    startIpAddress?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a StoreFirewallRule resource.
 */
export interface StoreFirewallRuleArgs {
    /**
     * Specifies the name of the Data Lake Store for which the Firewall Rule should take effect.
     */
    accountName: pulumi.Input<string>;
    /**
     * The End IP Address for the firewall rule.
     */
    endIpAddress: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Data Lake Store.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Start IP address for the firewall rule.
     */
    startIpAddress: pulumi.Input<string>;
}
