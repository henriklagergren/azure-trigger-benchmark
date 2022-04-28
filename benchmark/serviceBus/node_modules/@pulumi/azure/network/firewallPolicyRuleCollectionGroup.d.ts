import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Firewall Policy Rule Collection Group.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleFirewallPolicy = new azure.network.FirewallPolicy("exampleFirewallPolicy", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * const exampleFirewallPolicyRuleCollectionGroup = new azure.network.FirewallPolicyRuleCollectionGroup("exampleFirewallPolicyRuleCollectionGroup", {
 *     firewallPolicyId: exampleFirewallPolicy.id,
 *     priority: 500,
 *     applicationRuleCollections: [{
 *         name: "app_rule_collection1",
 *         priority: 500,
 *         action: "Deny",
 *         rules: [{
 *             name: "app_rule_collection1_rule1",
 *             protocols: [
 *                 {
 *                     type: "Http",
 *                     port: 80,
 *                 },
 *                 {
 *                     type: "Https",
 *                     port: 443,
 *                 },
 *             ],
 *             sourceAddresses: ["10.0.0.1"],
 *             destinationFqdns: [".microsoft.com"],
 *         }],
 *     }],
 *     networkRuleCollections: [{
 *         name: "network_rule_collection1",
 *         priority: 400,
 *         action: "Deny",
 *         rules: [{
 *             name: "network_rule_collection1_rule1",
 *             protocols: [
 *                 "TCP",
 *                 "UDP",
 *             ],
 *             sourceAddresses: ["10.0.0.1"],
 *             destinationAddresses: [
 *                 "192.168.1.1",
 *                 "192.168.1.2",
 *             ],
 *             destinationPorts: [
 *                 "80",
 *                 "1000-2000",
 *             ],
 *         }],
 *     }],
 *     natRuleCollections: [{
 *         name: "nat_rule_collection1",
 *         priority: 300,
 *         action: "Dnat",
 *         rules: [{
 *             name: "nat_rule_collection1_rule1",
 *             protocols: [
 *                 "TCP",
 *                 "UDP",
 *             ],
 *             sourceAddresses: [
 *                 "10.0.0.1",
 *                 "10.0.0.2",
 *             ],
 *             destinationAddress: "192.168.1.1",
 *             destinationPorts: [
 *                 "80",
 *                 "1000-2000",
 *             ],
 *             translatedAddress: "192.168.0.1",
 *             translatedPort: "8080",
 *         }],
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Firewall Policy Rule Collection Groups can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/firewallPolicyRuleCollectionGroup:FirewallPolicyRuleCollectionGroup example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/firewallPolicies/policy1/ruleCollectionGroups/gruop1
 * ```
 */
export declare class FirewallPolicyRuleCollectionGroup extends pulumi.CustomResource {
    /**
     * Get an existing FirewallPolicyRuleCollectionGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallPolicyRuleCollectionGroupState, opts?: pulumi.CustomResourceOptions): FirewallPolicyRuleCollectionGroup;
    /**
     * Returns true if the given object is an instance of FirewallPolicyRuleCollectionGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FirewallPolicyRuleCollectionGroup;
    /**
     * One or more `applicationRuleCollection` blocks as defined below.
     */
    readonly applicationRuleCollections: pulumi.Output<outputs.network.FirewallPolicyRuleCollectionGroupApplicationRuleCollection[] | undefined>;
    /**
     * The ID of the Firewall Policy where the Firewall Policy Rule Collection Group should exist. Changing this forces a new Firewall Policy Rule Collection Group to be created.
     */
    readonly firewallPolicyId: pulumi.Output<string>;
    /**
     * The name which should be used for this Firewall Policy Rule Collection Group. Changing this forces a new Firewall Policy Rule Collection Group to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * One or more `natRuleCollection` blocks as defined below.
     */
    readonly natRuleCollections: pulumi.Output<outputs.network.FirewallPolicyRuleCollectionGroupNatRuleCollection[] | undefined>;
    /**
     * One or more `networkRuleCollection` blocks as defined below.
     */
    readonly networkRuleCollections: pulumi.Output<outputs.network.FirewallPolicyRuleCollectionGroupNetworkRuleCollection[] | undefined>;
    /**
     * The priority of the Firewall Policy Rule Collection Group. The range is 100-65000.
     */
    readonly priority: pulumi.Output<number>;
    /**
     * Create a FirewallPolicyRuleCollectionGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallPolicyRuleCollectionGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering FirewallPolicyRuleCollectionGroup resources.
 */
export interface FirewallPolicyRuleCollectionGroupState {
    /**
     * One or more `applicationRuleCollection` blocks as defined below.
     */
    applicationRuleCollections?: pulumi.Input<pulumi.Input<inputs.network.FirewallPolicyRuleCollectionGroupApplicationRuleCollection>[]>;
    /**
     * The ID of the Firewall Policy where the Firewall Policy Rule Collection Group should exist. Changing this forces a new Firewall Policy Rule Collection Group to be created.
     */
    firewallPolicyId?: pulumi.Input<string>;
    /**
     * The name which should be used for this Firewall Policy Rule Collection Group. Changing this forces a new Firewall Policy Rule Collection Group to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `natRuleCollection` blocks as defined below.
     */
    natRuleCollections?: pulumi.Input<pulumi.Input<inputs.network.FirewallPolicyRuleCollectionGroupNatRuleCollection>[]>;
    /**
     * One or more `networkRuleCollection` blocks as defined below.
     */
    networkRuleCollections?: pulumi.Input<pulumi.Input<inputs.network.FirewallPolicyRuleCollectionGroupNetworkRuleCollection>[]>;
    /**
     * The priority of the Firewall Policy Rule Collection Group. The range is 100-65000.
     */
    priority?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a FirewallPolicyRuleCollectionGroup resource.
 */
export interface FirewallPolicyRuleCollectionGroupArgs {
    /**
     * One or more `applicationRuleCollection` blocks as defined below.
     */
    applicationRuleCollections?: pulumi.Input<pulumi.Input<inputs.network.FirewallPolicyRuleCollectionGroupApplicationRuleCollection>[]>;
    /**
     * The ID of the Firewall Policy where the Firewall Policy Rule Collection Group should exist. Changing this forces a new Firewall Policy Rule Collection Group to be created.
     */
    firewallPolicyId: pulumi.Input<string>;
    /**
     * The name which should be used for this Firewall Policy Rule Collection Group. Changing this forces a new Firewall Policy Rule Collection Group to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `natRuleCollection` blocks as defined below.
     */
    natRuleCollections?: pulumi.Input<pulumi.Input<inputs.network.FirewallPolicyRuleCollectionGroupNatRuleCollection>[]>;
    /**
     * One or more `networkRuleCollection` blocks as defined below.
     */
    networkRuleCollections?: pulumi.Input<pulumi.Input<inputs.network.FirewallPolicyRuleCollectionGroupNetworkRuleCollection>[]>;
    /**
     * The priority of the Firewall Policy Rule Collection Group. The range is 100-65000.
     */
    priority: pulumi.Input<number>;
}
