import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Network Rule Collection within an Azure Firewall.
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
 * const exampleFirewallNetworkRuleCollection = new azure.network.FirewallNetworkRuleCollection("exampleFirewallNetworkRuleCollection", {
 *     azureFirewallName: exampleFirewall.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     priority: 100,
 *     action: "Allow",
 *     rules: [{
 *         name: "testrule",
 *         sourceAddresses: ["10.0.0.0/16"],
 *         destinationPorts: ["53"],
 *         destinationAddresses: [
 *             "8.8.8.8",
 *             "8.8.4.4",
 *         ],
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
 * Azure Firewall Network Rule Collections can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/firewallNetworkRuleCollection:FirewallNetworkRuleCollection example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/azureFirewalls/myfirewall/networkRuleCollections/mycollection
 * ```
 */
export declare class FirewallNetworkRuleCollection extends pulumi.CustomResource {
    /**
     * Get an existing FirewallNetworkRuleCollection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallNetworkRuleCollectionState, opts?: pulumi.CustomResourceOptions): FirewallNetworkRuleCollection;
    /**
     * Returns true if the given object is an instance of FirewallNetworkRuleCollection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FirewallNetworkRuleCollection;
    /**
     * Specifies the action the rule will apply to matching traffic. Possible values are `Allow` and `Deny`.
     */
    readonly action: pulumi.Output<string>;
    /**
     * Specifies the name of the Firewall in which the Network Rule Collection should be created. Changing this forces a new resource to be created.
     */
    readonly azureFirewallName: pulumi.Output<string>;
    /**
     * Specifies the name of the Network Rule Collection which must be unique within the Firewall. Changing this forces a new resource to be created.
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
    readonly rules: pulumi.Output<outputs.network.FirewallNetworkRuleCollectionRule[]>;
    /**
     * Create a FirewallNetworkRuleCollection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallNetworkRuleCollectionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering FirewallNetworkRuleCollection resources.
 */
export interface FirewallNetworkRuleCollectionState {
    /**
     * Specifies the action the rule will apply to matching traffic. Possible values are `Allow` and `Deny`.
     */
    action?: pulumi.Input<string>;
    /**
     * Specifies the name of the Firewall in which the Network Rule Collection should be created. Changing this forces a new resource to be created.
     */
    azureFirewallName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Network Rule Collection which must be unique within the Firewall. Changing this forces a new resource to be created.
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
    rules?: pulumi.Input<pulumi.Input<inputs.network.FirewallNetworkRuleCollectionRule>[]>;
}
/**
 * The set of arguments for constructing a FirewallNetworkRuleCollection resource.
 */
export interface FirewallNetworkRuleCollectionArgs {
    /**
     * Specifies the action the rule will apply to matching traffic. Possible values are `Allow` and `Deny`.
     */
    action: pulumi.Input<string>;
    /**
     * Specifies the name of the Firewall in which the Network Rule Collection should be created. Changing this forces a new resource to be created.
     */
    azureFirewallName: pulumi.Input<string>;
    /**
     * Specifies the name of the Network Rule Collection which must be unique within the Firewall. Changing this forces a new resource to be created.
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
    rules: pulumi.Input<pulumi.Input<inputs.network.FirewallNetworkRuleCollectionRule>[]>;
}
