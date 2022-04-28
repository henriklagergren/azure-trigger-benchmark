import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a NAT Rule Collection within an Azure Firewall.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleSubnet = new azure.network.Subnet("exampleSubnet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.0.1.0/24"],
 * });
 * const examplePublicIp = new azure.network.PublicIp("examplePublicIp", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     allocationMethod: "Static",
 *     sku: "Standard",
 * });
 * const exampleFirewall = new azure.network.Firewall("exampleFirewall", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     ipConfigurations: [{
 *         name: "configuration",
 *         subnetId: exampleSubnet.id,
 *         publicIpAddressId: examplePublicIp.id,
 *     }],
 * });
 * const exampleFirewallNatRuleCollection = new azure.network.FirewallNatRuleCollection("exampleFirewallNatRuleCollection", {
 *     azureFirewallName: exampleFirewall.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     priority: 100,
 *     action: "Dnat",
 *     rules: [{
 *         name: "testrule",
 *         sourceAddresses: ["10.0.0.0/16"],
 *         destinationPorts: ["53"],
 *         destinationAddresses: [examplePublicIp.ipAddress],
 *         translatedPort: 53,
 *         translatedAddress: "8.8.8.8",
 *         protocols: [
 *             "TCP",
 *             "UDP",
 *         ],
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Azure Firewall NAT Rule Collections can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/firewallNatRuleCollection:FirewallNatRuleCollection example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/azureFirewalls/myfirewall/natRuleCollections/mycollection
 * ```
 */
export declare class FirewallNatRuleCollection extends pulumi.CustomResource {
    /**
     * Get an existing FirewallNatRuleCollection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallNatRuleCollectionState, opts?: pulumi.CustomResourceOptions): FirewallNatRuleCollection;
    /**
     * Returns true if the given object is an instance of FirewallNatRuleCollection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FirewallNatRuleCollection;
    /**
     * Specifies the action the rule will apply to matching traffic. Possible values are `Dnat` and `Snat`.
     */
    readonly action: pulumi.Output<string>;
    /**
     * Specifies the name of the Firewall in which the NAT Rule Collection should be created. Changing this forces a new resource to be created.
     */
    readonly azureFirewallName: pulumi.Output<string>;
    /**
     * Specifies the name of the NAT Rule Collection which must be unique within the Firewall. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the priority of the rule collection. Possible values are between `100` - `65000`.
     */
    readonly priority: pulumi.Output<number>;
    /**
     * Specifies the name of the Resource Group in which the Firewall exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * One or more `rule` blocks as defined below.
     */
    readonly rules: pulumi.Output<outputs.network.FirewallNatRuleCollectionRule[]>;
    /**
     * Create a FirewallNatRuleCollection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallNatRuleCollectionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering FirewallNatRuleCollection resources.
 */
export interface FirewallNatRuleCollectionState {
    /**
     * Specifies the action the rule will apply to matching traffic. Possible values are `Dnat` and `Snat`.
     */
    action?: pulumi.Input<string>;
    /**
     * Specifies the name of the Firewall in which the NAT Rule Collection should be created. Changing this forces a new resource to be created.
     */
    azureFirewallName?: pulumi.Input<string>;
    /**
     * Specifies the name of the NAT Rule Collection which must be unique within the Firewall. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the priority of the rule collection. Possible values are between `100` - `65000`.
     */
    priority?: pulumi.Input<number>;
    /**
     * Specifies the name of the Resource Group in which the Firewall exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * One or more `rule` blocks as defined below.
     */
    rules?: pulumi.Input<pulumi.Input<inputs.network.FirewallNatRuleCollectionRule>[]>;
}
/**
 * The set of arguments for constructing a FirewallNatRuleCollection resource.
 */
export interface FirewallNatRuleCollectionArgs {
    /**
     * Specifies the action the rule will apply to matching traffic. Possible values are `Dnat` and `Snat`.
     */
    action: pulumi.Input<string>;
    /**
     * Specifies the name of the Firewall in which the NAT Rule Collection should be created. Changing this forces a new resource to be created.
     */
    azureFirewallName: pulumi.Input<string>;
    /**
     * Specifies the name of the NAT Rule Collection which must be unique within the Firewall. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the priority of the rule collection. Possible values are between `100` - `65000`.
     */
    priority: pulumi.Input<number>;
    /**
     * Specifies the name of the Resource Group in which the Firewall exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * One or more `rule` blocks as defined below.
     */
    rules: pulumi.Input<pulumi.Input<inputs.network.FirewallNatRuleCollectionRule>[]>;
}
