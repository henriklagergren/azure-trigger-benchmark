import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a subnet. Subnets represent network segments within the IP space defined by the virtual network.
 *
 * > **NOTE on Virtual Networks and Subnet's:** This provider currently
 * provides both a standalone Subnet resource, and allows for Subnets to be defined in-line within the Virtual Network resource.
 * At this time you cannot use a Virtual Network with in-line Subnets in conjunction with any Subnet resources. Doing so will cause a conflict of Subnet configurations and will overwrite Subnet's.
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
 *     delegations: [{
 *         name: "delegation",
 *         serviceDelegation: {
 *             name: "Microsoft.ContainerInstance/containerGroups",
 *             actions: [
 *                 "Microsoft.Network/virtualNetworks/subnets/join/action",
 *                 "Microsoft.Network/virtualNetworks/subnets/prepareNetworkPolicies/action",
 *             ],
 *         },
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Subnets can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/subnet:Subnet exampleSubnet /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/virtualNetworks/myvnet1/subnets/mysubnet1
 * ```
 */
export declare class Subnet extends pulumi.CustomResource {
    /**
     * Get an existing Subnet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SubnetState, opts?: pulumi.CustomResourceOptions): Subnet;
    /**
     * Returns true if the given object is an instance of Subnet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Subnet;
    /**
     * The address prefix to use for the subnet.
     *
     * @deprecated Use the `address_prefixes` property instead.
     */
    readonly addressPrefix: pulumi.Output<string>;
    /**
     * The address prefixes to use for the subnet.
     */
    readonly addressPrefixes: pulumi.Output<string[]>;
    /**
     * One or more `delegation` blocks as defined below.
     */
    readonly delegations: pulumi.Output<outputs.network.SubnetDelegation[] | undefined>;
    /**
     * Enable or Disable network policies for the private link endpoint on the subnet. Setting this to `true` will **Disable** the policy and setting this to `false` will **Enable** the policy. Default value is `false`.
     */
    readonly enforcePrivateLinkEndpointNetworkPolicies: pulumi.Output<boolean | undefined>;
    /**
     * Enable or Disable network policies for the private link service on the subnet. Setting this to `true` will **Disable** the policy and setting this to `false` will **Enable** the policy. Default value is `false`.
     */
    readonly enforcePrivateLinkServiceNetworkPolicies: pulumi.Output<boolean | undefined>;
    /**
     * The name of the subnet. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the subnet. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The list of IDs of Service Endpoint Policies to associate with the subnet.
     */
    readonly serviceEndpointPolicyIds: pulumi.Output<string[] | undefined>;
    /**
     * The list of Service endpoints to associate with the subnet. Possible values include: `Microsoft.AzureActiveDirectory`, `Microsoft.AzureCosmosDB`, `Microsoft.ContainerRegistry`, `Microsoft.EventHub`, `Microsoft.KeyVault`, `Microsoft.ServiceBus`, `Microsoft.Sql`, `Microsoft.Storage` and `Microsoft.Web`.
     */
    readonly serviceEndpoints: pulumi.Output<string[] | undefined>;
    /**
     * The name of the virtual network to which to attach the subnet. Changing this forces a new resource to be created.
     */
    readonly virtualNetworkName: pulumi.Output<string>;
    /**
     * Create a Subnet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubnetArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Subnet resources.
 */
export interface SubnetState {
    /**
     * The address prefix to use for the subnet.
     *
     * @deprecated Use the `address_prefixes` property instead.
     */
    addressPrefix?: pulumi.Input<string>;
    /**
     * The address prefixes to use for the subnet.
     */
    addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * One or more `delegation` blocks as defined below.
     */
    delegations?: pulumi.Input<pulumi.Input<inputs.network.SubnetDelegation>[]>;
    /**
     * Enable or Disable network policies for the private link endpoint on the subnet. Setting this to `true` will **Disable** the policy and setting this to `false` will **Enable** the policy. Default value is `false`.
     */
    enforcePrivateLinkEndpointNetworkPolicies?: pulumi.Input<boolean>;
    /**
     * Enable or Disable network policies for the private link service on the subnet. Setting this to `true` will **Disable** the policy and setting this to `false` will **Enable** the policy. Default value is `false`.
     */
    enforcePrivateLinkServiceNetworkPolicies?: pulumi.Input<boolean>;
    /**
     * The name of the subnet. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the subnet. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The list of IDs of Service Endpoint Policies to associate with the subnet.
     */
    serviceEndpointPolicyIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of Service endpoints to associate with the subnet. Possible values include: `Microsoft.AzureActiveDirectory`, `Microsoft.AzureCosmosDB`, `Microsoft.ContainerRegistry`, `Microsoft.EventHub`, `Microsoft.KeyVault`, `Microsoft.ServiceBus`, `Microsoft.Sql`, `Microsoft.Storage` and `Microsoft.Web`.
     */
    serviceEndpoints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the virtual network to which to attach the subnet. Changing this forces a new resource to be created.
     */
    virtualNetworkName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Subnet resource.
 */
export interface SubnetArgs {
    /**
     * The address prefix to use for the subnet.
     *
     * @deprecated Use the `address_prefixes` property instead.
     */
    addressPrefix?: pulumi.Input<string>;
    /**
     * The address prefixes to use for the subnet.
     */
    addressPrefixes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * One or more `delegation` blocks as defined below.
     */
    delegations?: pulumi.Input<pulumi.Input<inputs.network.SubnetDelegation>[]>;
    /**
     * Enable or Disable network policies for the private link endpoint on the subnet. Setting this to `true` will **Disable** the policy and setting this to `false` will **Enable** the policy. Default value is `false`.
     */
    enforcePrivateLinkEndpointNetworkPolicies?: pulumi.Input<boolean>;
    /**
     * Enable or Disable network policies for the private link service on the subnet. Setting this to `true` will **Disable** the policy and setting this to `false` will **Enable** the policy. Default value is `false`.
     */
    enforcePrivateLinkServiceNetworkPolicies?: pulumi.Input<boolean>;
    /**
     * The name of the subnet. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the subnet. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The list of IDs of Service Endpoint Policies to associate with the subnet.
     */
    serviceEndpointPolicyIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of Service endpoints to associate with the subnet. Possible values include: `Microsoft.AzureActiveDirectory`, `Microsoft.AzureCosmosDB`, `Microsoft.ContainerRegistry`, `Microsoft.EventHub`, `Microsoft.KeyVault`, `Microsoft.ServiceBus`, `Microsoft.Sql`, `Microsoft.Storage` and `Microsoft.Web`.
     */
    serviceEndpoints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the virtual network to which to attach the subnet. Changing this forces a new resource to be created.
     */
    virtualNetworkName: pulumi.Input<string>;
}
