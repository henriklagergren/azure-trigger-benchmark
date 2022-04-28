import * as pulumi from "@pulumi/pulumi";
/**
 * Associates a NAT Gateway with a Subnet within a Virtual Network.
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
 * const exampleNatGateway = new azure.network.NatGateway("exampleNatGateway", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleSubnetNatGatewayAssociation = new azure.network.SubnetNatGatewayAssociation("exampleSubnetNatGatewayAssociation", {
 *     subnetId: exampleSubnet.id,
 *     natGatewayId: exampleNatGateway.id,
 * });
 * ```
 *
 * ## Import
 *
 * Subnet NAT Gateway Associations can be imported using the `resource id` of the Subnet, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/subnetNatGatewayAssociation:SubnetNatGatewayAssociation association1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/virtualNetworks/myvnet1/subnets/mysubnet1
 * ```
 */
export declare class SubnetNatGatewayAssociation extends pulumi.CustomResource {
    /**
     * Get an existing SubnetNatGatewayAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SubnetNatGatewayAssociationState, opts?: pulumi.CustomResourceOptions): SubnetNatGatewayAssociation;
    /**
     * Returns true if the given object is an instance of SubnetNatGatewayAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SubnetNatGatewayAssociation;
    /**
     * The ID of the NAT Gateway which should be associated with the Subnet. Changing this forces a new resource to be created.
     */
    readonly natGatewayId: pulumi.Output<string>;
    /**
     * The ID of the Subnet. Changing this forces a new resource to be created.
     */
    readonly subnetId: pulumi.Output<string>;
    /**
     * Create a SubnetNatGatewayAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubnetNatGatewayAssociationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SubnetNatGatewayAssociation resources.
 */
export interface SubnetNatGatewayAssociationState {
    /**
     * The ID of the NAT Gateway which should be associated with the Subnet. Changing this forces a new resource to be created.
     */
    natGatewayId?: pulumi.Input<string>;
    /**
     * The ID of the Subnet. Changing this forces a new resource to be created.
     */
    subnetId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SubnetNatGatewayAssociation resource.
 */
export interface SubnetNatGatewayAssociationArgs {
    /**
     * The ID of the NAT Gateway which should be associated with the Subnet. Changing this forces a new resource to be created.
     */
    natGatewayId: pulumi.Input<string>;
    /**
     * The ID of the Subnet. Changing this forces a new resource to be created.
     */
    subnetId: pulumi.Input<string>;
}
