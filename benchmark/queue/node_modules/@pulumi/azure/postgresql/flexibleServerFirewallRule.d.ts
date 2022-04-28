import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a PostgreSQL Flexible Server Firewall Rule.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleFlexibleServer = new azure.postgresql.FlexibleServer("exampleFlexibleServer", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     version: "12",
 *     administratorLogin: "psqladmin",
 *     administratorPassword: "H@Sh1CoR3!",
 *     storageMb: 32768,
 *     skuName: "GP_Standard_D4s_v3",
 * });
 * const exampleFlexibleServerFirewallRule = new azure.postgresql.FlexibleServerFirewallRule("exampleFlexibleServerFirewallRule", {
 *     serverId: exampleFlexibleServer.id,
 *     startIpAddress: "122.122.0.0",
 *     endIpAddress: "122.122.0.0",
 * });
 * ```
 *
 * ## Import
 *
 * PostgreSQL Flexible Server Firewall Rules can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:postgresql/flexibleServerFirewallRule:FlexibleServerFirewallRule example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DBforPostgreSQL/flexibleServers/flexibleServer1/firewallRules/firewallRule1
 * ```
 */
export declare class FlexibleServerFirewallRule extends pulumi.CustomResource {
    /**
     * Get an existing FlexibleServerFirewallRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FlexibleServerFirewallRuleState, opts?: pulumi.CustomResourceOptions): FlexibleServerFirewallRule;
    /**
     * Returns true if the given object is an instance of FlexibleServerFirewallRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FlexibleServerFirewallRule;
    /**
     * The End IP Address associated with this PostgreSQL Flexible Server Firewall Rule.
     */
    readonly endIpAddress: pulumi.Output<string>;
    /**
     * The name which should be used for this PostgreSQL Flexible Server Firewall Rule. Changing this forces a new PostgreSQL Flexible Server Firewall Rule to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the PostgreSQL Flexible Server from which to create this PostgreSQL Flexible Server Firewall Rule. Changing this forces a new PostgreSQL Flexible Server Firewall Rule to be created.
     */
    readonly serverId: pulumi.Output<string>;
    /**
     * The Start IP Address associated with this PostgreSQL Flexible Server Firewall Rule.
     */
    readonly startIpAddress: pulumi.Output<string>;
    /**
     * Create a FlexibleServerFirewallRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FlexibleServerFirewallRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering FlexibleServerFirewallRule resources.
 */
export interface FlexibleServerFirewallRuleState {
    /**
     * The End IP Address associated with this PostgreSQL Flexible Server Firewall Rule.
     */
    endIpAddress?: pulumi.Input<string>;
    /**
     * The name which should be used for this PostgreSQL Flexible Server Firewall Rule. Changing this forces a new PostgreSQL Flexible Server Firewall Rule to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the PostgreSQL Flexible Server from which to create this PostgreSQL Flexible Server Firewall Rule. Changing this forces a new PostgreSQL Flexible Server Firewall Rule to be created.
     */
    serverId?: pulumi.Input<string>;
    /**
     * The Start IP Address associated with this PostgreSQL Flexible Server Firewall Rule.
     */
    startIpAddress?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a FlexibleServerFirewallRule resource.
 */
export interface FlexibleServerFirewallRuleArgs {
    /**
     * The End IP Address associated with this PostgreSQL Flexible Server Firewall Rule.
     */
    endIpAddress: pulumi.Input<string>;
    /**
     * The name which should be used for this PostgreSQL Flexible Server Firewall Rule. Changing this forces a new PostgreSQL Flexible Server Firewall Rule to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the PostgreSQL Flexible Server from which to create this PostgreSQL Flexible Server Firewall Rule. Changing this forces a new PostgreSQL Flexible Server Firewall Rule to be created.
     */
    serverId: pulumi.Input<string>;
    /**
     * The Start IP Address associated with this PostgreSQL Flexible Server Firewall Rule.
     */
    startIpAddress: pulumi.Input<string>;
}
