import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Azure NAT Gateway.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePublicIp = new azure.network.PublicIp("examplePublicIp", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     allocationMethod: "Static",
 *     sku: "Standard",
 *     zones: ["1"],
 * });
 * const examplePublicIpPrefix = new azure.network.PublicIpPrefix("examplePublicIpPrefix", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     prefixLength: 30,
 *     zones: ["1"],
 * });
 * const exampleNatGateway = new azure.network.NatGateway("exampleNatGateway", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     publicIpAddressIds: [examplePublicIp.id],
 *     publicIpPrefixIds: [examplePublicIpPrefix.id],
 *     skuName: "Standard",
 *     idleTimeoutInMinutes: 10,
 *     zones: ["1"],
 * });
 * ```
 *
 * ## Import
 *
 * NAT Gateway can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/natGateway:NatGateway test /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/natGateways/gateway1
 * ```
 */
export declare class NatGateway extends pulumi.CustomResource {
    /**
     * Get an existing NatGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NatGatewayState, opts?: pulumi.CustomResourceOptions): NatGateway;
    /**
     * Returns true if the given object is an instance of NatGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NatGateway;
    /**
     * The idle timeout which should be used in minutes. Defaults to `4`.
     */
    readonly idleTimeoutInMinutes: pulumi.Output<number | undefined>;
    /**
     * Specifies the supported Azure location where the NAT Gateway should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the NAT Gateway. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A list of Public IP Address ID's which should be associated with the NAT Gateway resource.
     *
     * @deprecated Inline Public IP Address ID Associations have been deprecated in favour of the `azurerm_nat_gateway_public_ip_association` resource. This field will be removed in the next major version of the Azure Provider.
     */
    readonly publicIpAddressIds: pulumi.Output<string[]>;
    /**
     * / **Deprecated in favour of `azure.network.NatGatewayPublicIpPrefixAssociation`**) A list of Public IP Prefix ID's which should be associated with the NAT Gateway resource.
     *
     * @deprecated Inline Public IP Prefix ID Associations have been deprecated in favour of the `azurerm_nat_gateway_public_ip_prefix_association` resource. This field will be removed in the next major version of the Azure Provider.
     */
    readonly publicIpPrefixIds: pulumi.Output<string[]>;
    /**
     * Specifies the name of the Resource Group in which the NAT Gateway should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The resource GUID property of the NAT Gateway.
     */
    readonly resourceGuid: pulumi.Output<string>;
    /**
     * The SKU which should be used. At this time the only supported value is `Standard`. Defaults to `Standard`.
     */
    readonly skuName: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * A list of availability zones where the NAT Gateway should be provisioned. Changing this forces a new resource to be created.
     */
    readonly zones: pulumi.Output<string[] | undefined>;
    /**
     * Create a NatGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NatGatewayArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NatGateway resources.
 */
export interface NatGatewayState {
    /**
     * The idle timeout which should be used in minutes. Defaults to `4`.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * Specifies the supported Azure location where the NAT Gateway should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the NAT Gateway. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of Public IP Address ID's which should be associated with the NAT Gateway resource.
     *
     * @deprecated Inline Public IP Address ID Associations have been deprecated in favour of the `azurerm_nat_gateway_public_ip_association` resource. This field will be removed in the next major version of the Azure Provider.
     */
    publicIpAddressIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * / **Deprecated in favour of `azure.network.NatGatewayPublicIpPrefixAssociation`**) A list of Public IP Prefix ID's which should be associated with the NAT Gateway resource.
     *
     * @deprecated Inline Public IP Prefix ID Associations have been deprecated in favour of the `azurerm_nat_gateway_public_ip_prefix_association` resource. This field will be removed in the next major version of the Azure Provider.
     */
    publicIpPrefixIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the name of the Resource Group in which the NAT Gateway should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The resource GUID property of the NAT Gateway.
     */
    resourceGuid?: pulumi.Input<string>;
    /**
     * The SKU which should be used. At this time the only supported value is `Standard`. Defaults to `Standard`.
     */
    skuName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A list of availability zones where the NAT Gateway should be provisioned. Changing this forces a new resource to be created.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a NatGateway resource.
 */
export interface NatGatewayArgs {
    /**
     * The idle timeout which should be used in minutes. Defaults to `4`.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * Specifies the supported Azure location where the NAT Gateway should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the NAT Gateway. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of Public IP Address ID's which should be associated with the NAT Gateway resource.
     *
     * @deprecated Inline Public IP Address ID Associations have been deprecated in favour of the `azurerm_nat_gateway_public_ip_association` resource. This field will be removed in the next major version of the Azure Provider.
     */
    publicIpAddressIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * / **Deprecated in favour of `azure.network.NatGatewayPublicIpPrefixAssociation`**) A list of Public IP Prefix ID's which should be associated with the NAT Gateway resource.
     *
     * @deprecated Inline Public IP Prefix ID Associations have been deprecated in favour of the `azurerm_nat_gateway_public_ip_prefix_association` resource. This field will be removed in the next major version of the Azure Provider.
     */
    publicIpPrefixIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the name of the Resource Group in which the NAT Gateway should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU which should be used. At this time the only supported value is `Standard`. Defaults to `Standard`.
     */
    skuName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A list of availability zones where the NAT Gateway should be provisioned. Changing this forces a new resource to be created.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
