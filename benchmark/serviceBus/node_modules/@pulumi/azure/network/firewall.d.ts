import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure Firewall.
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
 * ```
 *
 * ## Import
 *
 * Azure Firewalls can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/firewall:Firewall example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/azureFirewalls/testfirewall
 * ```
 */
export declare class Firewall extends pulumi.CustomResource {
    /**
     * Get an existing Firewall resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallState, opts?: pulumi.CustomResourceOptions): Firewall;
    /**
     * Returns true if the given object is an instance of Firewall.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Firewall;
    /**
     * A list of DNS servers that the Azure Firewall will direct DNS traffic to the for name resolution.
     */
    readonly dnsServers: pulumi.Output<string[] | undefined>;
    /**
     * The ID of the Firewall Policy applied to this Firewall.
     */
    readonly firewallPolicyId: pulumi.Output<string | undefined>;
    /**
     * An `ipConfiguration` block as documented below.
     */
    readonly ipConfigurations: pulumi.Output<outputs.network.FirewallIpConfiguration[] | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * A `managementIpConfiguration` block as documented below, which allows force-tunnelling of traffic to be performed by the firewall. Adding or removing this block or changing the `subnetId` in an existing block forces a new resource to be created.
     */
    readonly managementIpConfiguration: pulumi.Output<outputs.network.FirewallManagementIpConfiguration | undefined>;
    /**
     * Specifies the name of the Firewall. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A list of SNAT private CIDR IP ranges, or the special string `IANAPrivateRanges`, which indicates Azure Firewall does not SNAT when the destination IP address is a private range per IANA RFC 1918.
     */
    readonly privateIpRanges: pulumi.Output<string[] | undefined>;
    /**
     * The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Sku name of the Firewall. Possible values are `AZFW_Hub` and `AZFW_VNet`.  Changing this forces a new resource to be created.
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * Sku tier of the Firewall. Possible values are `Premium` and `Standard`.  Changing this forces a new resource to be created.
     */
    readonly skuTier: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The operation mode for threat intelligence-based filtering. Possible values are: `Off`, `Alert`,`Deny` and `""`(empty string). Defaults to `Alert`.
     */
    readonly threatIntelMode: pulumi.Output<string | undefined>;
    /**
     * A `virtualHub` block as documented below.
     */
    readonly virtualHub: pulumi.Output<outputs.network.FirewallVirtualHub | undefined>;
    /**
     * Specifies the availability zones in which the Azure Firewall should be created. Changing this forces a new resource to be created.
     */
    readonly zones: pulumi.Output<string[] | undefined>;
    /**
     * Create a Firewall resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Firewall resources.
 */
export interface FirewallState {
    /**
     * A list of DNS servers that the Azure Firewall will direct DNS traffic to the for name resolution.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of the Firewall Policy applied to this Firewall.
     */
    firewallPolicyId?: pulumi.Input<string>;
    /**
     * An `ipConfiguration` block as documented below.
     */
    ipConfigurations?: pulumi.Input<pulumi.Input<inputs.network.FirewallIpConfiguration>[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A `managementIpConfiguration` block as documented below, which allows force-tunnelling of traffic to be performed by the firewall. Adding or removing this block or changing the `subnetId` in an existing block forces a new resource to be created.
     */
    managementIpConfiguration?: pulumi.Input<inputs.network.FirewallManagementIpConfiguration>;
    /**
     * Specifies the name of the Firewall. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of SNAT private CIDR IP ranges, or the special string `IANAPrivateRanges`, which indicates Azure Firewall does not SNAT when the destination IP address is a private range per IANA RFC 1918.
     */
    privateIpRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Sku name of the Firewall. Possible values are `AZFW_Hub` and `AZFW_VNet`.  Changing this forces a new resource to be created.
     */
    skuName?: pulumi.Input<string>;
    /**
     * Sku tier of the Firewall. Possible values are `Premium` and `Standard`.  Changing this forces a new resource to be created.
     */
    skuTier?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The operation mode for threat intelligence-based filtering. Possible values are: `Off`, `Alert`,`Deny` and `""`(empty string). Defaults to `Alert`.
     */
    threatIntelMode?: pulumi.Input<string>;
    /**
     * A `virtualHub` block as documented below.
     */
    virtualHub?: pulumi.Input<inputs.network.FirewallVirtualHub>;
    /**
     * Specifies the availability zones in which the Azure Firewall should be created. Changing this forces a new resource to be created.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a Firewall resource.
 */
export interface FirewallArgs {
    /**
     * A list of DNS servers that the Azure Firewall will direct DNS traffic to the for name resolution.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of the Firewall Policy applied to this Firewall.
     */
    firewallPolicyId?: pulumi.Input<string>;
    /**
     * An `ipConfiguration` block as documented below.
     */
    ipConfigurations?: pulumi.Input<pulumi.Input<inputs.network.FirewallIpConfiguration>[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A `managementIpConfiguration` block as documented below, which allows force-tunnelling of traffic to be performed by the firewall. Adding or removing this block or changing the `subnetId` in an existing block forces a new resource to be created.
     */
    managementIpConfiguration?: pulumi.Input<inputs.network.FirewallManagementIpConfiguration>;
    /**
     * Specifies the name of the Firewall. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of SNAT private CIDR IP ranges, or the special string `IANAPrivateRanges`, which indicates Azure Firewall does not SNAT when the destination IP address is a private range per IANA RFC 1918.
     */
    privateIpRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Sku name of the Firewall. Possible values are `AZFW_Hub` and `AZFW_VNet`.  Changing this forces a new resource to be created.
     */
    skuName?: pulumi.Input<string>;
    /**
     * Sku tier of the Firewall. Possible values are `Premium` and `Standard`.  Changing this forces a new resource to be created.
     */
    skuTier?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The operation mode for threat intelligence-based filtering. Possible values are: `Off`, `Alert`,`Deny` and `""`(empty string). Defaults to `Alert`.
     */
    threatIntelMode?: pulumi.Input<string>;
    /**
     * A `virtualHub` block as documented below.
     */
    virtualHub?: pulumi.Input<inputs.network.FirewallVirtualHub>;
    /**
     * Specifies the availability zones in which the Azure Firewall should be created. Changing this forces a new resource to be created.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
