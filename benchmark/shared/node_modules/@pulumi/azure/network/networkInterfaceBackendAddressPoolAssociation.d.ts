import * as pulumi from "@pulumi/pulumi";
/**
 * Manages the association between a Network Interface and a Load Balancer's Backend Address Pool.
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
 * const examplePublicIp = new azure.network.PublicIp("examplePublicIp", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     allocationMethod: "Static",
 * });
 * const exampleLoadBalancer = new azure.lb.LoadBalancer("exampleLoadBalancer", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     frontendIpConfigurations: [{
 *         name: "primary",
 *         publicIpAddressId: examplePublicIp.id,
 *     }],
 * });
 * const exampleBackendAddressPool = new azure.lb.BackendAddressPool("exampleBackendAddressPool", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     loadbalancerId: exampleLoadBalancer.id,
 * });
 * const exampleNetworkInterface = new azure.network.NetworkInterface("exampleNetworkInterface", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     ipConfigurations: [{
 *         name: "testconfiguration1",
 *         subnetId: exampleSubnet.id,
 *         privateIpAddressAllocation: "Dynamic",
 *     }],
 * });
 * const exampleNetworkInterfaceBackendAddressPoolAssociation = new azure.network.NetworkInterfaceBackendAddressPoolAssociation("exampleNetworkInterfaceBackendAddressPoolAssociation", {
 *     networkInterfaceId: exampleNetworkInterface.id,
 *     ipConfigurationName: "testconfiguration1",
 *     backendAddressPoolId: exampleBackendAddressPool.id,
 * });
 * ```
 *
 * ## Import
 *
 * Associations between Network Interfaces and Load Balancer Backend Address Pools can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/networkInterfaceBackendAddressPoolAssociation:NetworkInterfaceBackendAddressPoolAssociation association1 "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/microsoft.network/networkInterfaces/nic1/ipConfigurations/example|/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/loadBalancers/lb1/backendAddressPools/pool1"
 * ```
 */
export declare class NetworkInterfaceBackendAddressPoolAssociation extends pulumi.CustomResource {
    /**
     * Get an existing NetworkInterfaceBackendAddressPoolAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkInterfaceBackendAddressPoolAssociationState, opts?: pulumi.CustomResourceOptions): NetworkInterfaceBackendAddressPoolAssociation;
    /**
     * Returns true if the given object is an instance of NetworkInterfaceBackendAddressPoolAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NetworkInterfaceBackendAddressPoolAssociation;
    /**
     * The ID of the Load Balancer Backend Address Pool which this Network Interface should be connected to. Changing this forces a new resource to be created.
     */
    readonly backendAddressPoolId: pulumi.Output<string>;
    /**
     * The Name of the IP Configuration within the Network Interface which should be connected to the Backend Address Pool. Changing this forces a new resource to be created.
     */
    readonly ipConfigurationName: pulumi.Output<string>;
    /**
     * The ID of the Network Interface. Changing this forces a new resource to be created.
     */
    readonly networkInterfaceId: pulumi.Output<string>;
    /**
     * Create a NetworkInterfaceBackendAddressPoolAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkInterfaceBackendAddressPoolAssociationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NetworkInterfaceBackendAddressPoolAssociation resources.
 */
export interface NetworkInterfaceBackendAddressPoolAssociationState {
    /**
     * The ID of the Load Balancer Backend Address Pool which this Network Interface should be connected to. Changing this forces a new resource to be created.
     */
    backendAddressPoolId?: pulumi.Input<string>;
    /**
     * The Name of the IP Configuration within the Network Interface which should be connected to the Backend Address Pool. Changing this forces a new resource to be created.
     */
    ipConfigurationName?: pulumi.Input<string>;
    /**
     * The ID of the Network Interface. Changing this forces a new resource to be created.
     */
    networkInterfaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a NetworkInterfaceBackendAddressPoolAssociation resource.
 */
export interface NetworkInterfaceBackendAddressPoolAssociationArgs {
    /**
     * The ID of the Load Balancer Backend Address Pool which this Network Interface should be connected to. Changing this forces a new resource to be created.
     */
    backendAddressPoolId: pulumi.Input<string>;
    /**
     * The Name of the IP Configuration within the Network Interface which should be connected to the Backend Address Pool. Changing this forces a new resource to be created.
     */
    ipConfigurationName: pulumi.Input<string>;
    /**
     * The ID of the Network Interface. Changing this forces a new resource to be created.
     */
    networkInterfaceId: pulumi.Input<string>;
}
