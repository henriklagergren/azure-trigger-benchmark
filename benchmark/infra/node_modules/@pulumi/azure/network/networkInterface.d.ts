import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Network Interface.
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
 *     addressPrefixes: ["10.0.2.0/24"],
 * });
 * const exampleNetworkInterface = new azure.network.NetworkInterface("exampleNetworkInterface", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     ipConfigurations: [{
 *         name: "internal",
 *         subnetId: exampleSubnet.id,
 *         privateIpAddressAllocation: "Dynamic",
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Network Interfaces can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/networkInterface:NetworkInterface example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/networkInterfaces/nic1
 * ```
 */
export declare class NetworkInterface extends pulumi.CustomResource {
    /**
     * Get an existing NetworkInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkInterfaceState, opts?: pulumi.CustomResourceOptions): NetworkInterface;
    /**
     * Returns true if the given object is an instance of NetworkInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NetworkInterface;
    /**
     * If the Virtual Machine using this Network Interface is part of an Availability Set, then this list will have the union of all DNS servers from all Network Interfaces that are part of the Availability Set.
     */
    readonly appliedDnsServers: pulumi.Output<string[]>;
    /**
     * A list of IP Addresses defining the DNS Servers which should be used for this Network Interface.
     */
    readonly dnsServers: pulumi.Output<string[]>;
    /**
     * Should Accelerated Networking be enabled? Defaults to `false`.
     */
    readonly enableAcceleratedNetworking: pulumi.Output<boolean | undefined>;
    /**
     * Should IP Forwarding be enabled? Defaults to `false`.
     */
    readonly enableIpForwarding: pulumi.Output<boolean | undefined>;
    /**
     * The (relative) DNS Name used for internal communications between Virtual Machines in the same Virtual Network.
     */
    readonly internalDnsNameLabel: pulumi.Output<string>;
    /**
     * Even if `internalDnsNameLabel` is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of `internalDomainNameSuffix`.
     */
    readonly internalDomainNameSuffix: pulumi.Output<string>;
    /**
     * One or more `ipConfiguration` blocks as defined below.
     */
    readonly ipConfigurations: pulumi.Output<outputs.network.NetworkInterfaceIpConfiguration[]>;
    /**
     * The location where the Network Interface should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The Media Access Control (MAC) Address of the Network Interface.
     */
    readonly macAddress: pulumi.Output<string>;
    /**
     * The name of the Network Interface. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The Static IP Address which should be used.
     */
    readonly privateIpAddress: pulumi.Output<string>;
    /**
     * The private IP addresses of the network interface.
     */
    readonly privateIpAddresses: pulumi.Output<string[]>;
    /**
     * The name of the Resource Group in which to create the Network Interface. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The ID of the Virtual Machine which this Network Interface is connected to.
     */
    readonly virtualMachineId: pulumi.Output<string>;
    /**
     * Create a NetworkInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkInterfaceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NetworkInterface resources.
 */
export interface NetworkInterfaceState {
    /**
     * If the Virtual Machine using this Network Interface is part of an Availability Set, then this list will have the union of all DNS servers from all Network Interfaces that are part of the Availability Set.
     */
    appliedDnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of IP Addresses defining the DNS Servers which should be used for this Network Interface.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Should Accelerated Networking be enabled? Defaults to `false`.
     */
    enableAcceleratedNetworking?: pulumi.Input<boolean>;
    /**
     * Should IP Forwarding be enabled? Defaults to `false`.
     */
    enableIpForwarding?: pulumi.Input<boolean>;
    /**
     * The (relative) DNS Name used for internal communications between Virtual Machines in the same Virtual Network.
     */
    internalDnsNameLabel?: pulumi.Input<string>;
    /**
     * Even if `internalDnsNameLabel` is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of `internalDomainNameSuffix`.
     */
    internalDomainNameSuffix?: pulumi.Input<string>;
    /**
     * One or more `ipConfiguration` blocks as defined below.
     */
    ipConfigurations?: pulumi.Input<pulumi.Input<inputs.network.NetworkInterfaceIpConfiguration>[]>;
    /**
     * The location where the Network Interface should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The Media Access Control (MAC) Address of the Network Interface.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * The name of the Network Interface. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The Static IP Address which should be used.
     */
    privateIpAddress?: pulumi.Input<string>;
    /**
     * The private IP addresses of the network interface.
     */
    privateIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Resource Group in which to create the Network Interface. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The ID of the Virtual Machine which this Network Interface is connected to.
     */
    virtualMachineId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a NetworkInterface resource.
 */
export interface NetworkInterfaceArgs {
    /**
     * A list of IP Addresses defining the DNS Servers which should be used for this Network Interface.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Should Accelerated Networking be enabled? Defaults to `false`.
     */
    enableAcceleratedNetworking?: pulumi.Input<boolean>;
    /**
     * Should IP Forwarding be enabled? Defaults to `false`.
     */
    enableIpForwarding?: pulumi.Input<boolean>;
    /**
     * The (relative) DNS Name used for internal communications between Virtual Machines in the same Virtual Network.
     */
    internalDnsNameLabel?: pulumi.Input<string>;
    /**
     * One or more `ipConfiguration` blocks as defined below.
     */
    ipConfigurations: pulumi.Input<pulumi.Input<inputs.network.NetworkInterfaceIpConfiguration>[]>;
    /**
     * The location where the Network Interface should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Network Interface. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which to create the Network Interface. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
