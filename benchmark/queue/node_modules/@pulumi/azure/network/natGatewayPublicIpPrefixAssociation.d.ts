import * as pulumi from "@pulumi/pulumi";
/**
 * Manages the association between a Nat Gateway and a Public IP Prefix.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePublicIpPrefix = new azure.network.PublicIpPrefix("examplePublicIpPrefix", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     prefixLength: 30,
 *     zones: ["1"],
 * });
 * const exampleNatGateway = new azure.network.NatGateway("exampleNatGateway", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     skuName: "Standard",
 * });
 * const exampleNatGatewayPublicIpPrefixAssociation = new azure.network.NatGatewayPublicIpPrefixAssociation("exampleNatGatewayPublicIpPrefixAssociation", {
 *     natGatewayId: exampleNatGateway.id,
 *     publicIpPrefixId: examplePublicIpPrefix.id,
 * });
 * ```
 *
 * ## Import
 *
 * Associations between Nat Gateway and Public IP Prefixes can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/natGatewayPublicIpPrefixAssociation:NatGatewayPublicIpPrefixAssociation example "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/natGateways/gateway1|/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/publicIPPrefixes/myPublicIpPrefix1"
 * ```
 */
export declare class NatGatewayPublicIpPrefixAssociation extends pulumi.CustomResource {
    /**
     * Get an existing NatGatewayPublicIpPrefixAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NatGatewayPublicIpPrefixAssociationState, opts?: pulumi.CustomResourceOptions): NatGatewayPublicIpPrefixAssociation;
    /**
     * Returns true if the given object is an instance of NatGatewayPublicIpPrefixAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NatGatewayPublicIpPrefixAssociation;
    /**
     * The ID of the Nat Gateway. Changing this forces a new resource to be created.
     */
    readonly natGatewayId: pulumi.Output<string>;
    /**
     * The ID of the Public IP Prefix which this Nat Gateway which should be connected to. Changing this forces a new resource to be created.
     */
    readonly publicIpPrefixId: pulumi.Output<string>;
    /**
     * Create a NatGatewayPublicIpPrefixAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NatGatewayPublicIpPrefixAssociationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NatGatewayPublicIpPrefixAssociation resources.
 */
export interface NatGatewayPublicIpPrefixAssociationState {
    /**
     * The ID of the Nat Gateway. Changing this forces a new resource to be created.
     */
    natGatewayId?: pulumi.Input<string>;
    /**
     * The ID of the Public IP Prefix which this Nat Gateway which should be connected to. Changing this forces a new resource to be created.
     */
    publicIpPrefixId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a NatGatewayPublicIpPrefixAssociation resource.
 */
export interface NatGatewayPublicIpPrefixAssociationArgs {
    /**
     * The ID of the Nat Gateway. Changing this forces a new resource to be created.
     */
    natGatewayId: pulumi.Input<string>;
    /**
     * The ID of the Public IP Prefix which this Nat Gateway which should be connected to. Changing this forces a new resource to be created.
     */
    publicIpPrefixId: pulumi.Input<string>;
}
