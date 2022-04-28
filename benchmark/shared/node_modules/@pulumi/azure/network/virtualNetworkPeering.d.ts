import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a virtual network peering which allows resources to access other
 * resources in the linked virtual network.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.core.ResourceGroup("example", {location: "West Europe"});
 * const example_1VirtualNetwork = new azure.network.VirtualNetwork("example-1VirtualNetwork", {
 *     resourceGroupName: example.name,
 *     addressSpaces: ["10.0.1.0/24"],
 *     location: "West US",
 * });
 * const example_2VirtualNetwork = new azure.network.VirtualNetwork("example-2VirtualNetwork", {
 *     resourceGroupName: example.name,
 *     addressSpaces: ["10.0.2.0/24"],
 *     location: "West US",
 * });
 * const example_1VirtualNetworkPeering = new azure.network.VirtualNetworkPeering("example-1VirtualNetworkPeering", {
 *     resourceGroupName: example.name,
 *     virtualNetworkName: example_1VirtualNetwork.name,
 *     remoteVirtualNetworkId: example_2VirtualNetwork.id,
 * });
 * const example_2VirtualNetworkPeering = new azure.network.VirtualNetworkPeering("example-2VirtualNetworkPeering", {
 *     resourceGroupName: example.name,
 *     virtualNetworkName: example_2VirtualNetwork.name,
 *     remoteVirtualNetworkId: example_1VirtualNetwork.id,
 * });
 * ```
 * ## Note
 *
 * Virtual Network peerings cannot be created, updated or deleted concurrently.
 *
 * ## Import
 *
 * Virtual Network Peerings can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/virtualNetworkPeering:VirtualNetworkPeering examplePeering /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/virtualNetworks/myvnet1/virtualNetworkPeerings/myvnet1peering
 * ```
 */
export declare class VirtualNetworkPeering extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetworkPeering resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualNetworkPeeringState, opts?: pulumi.CustomResourceOptions): VirtualNetworkPeering;
    /**
     * Returns true if the given object is an instance of VirtualNetworkPeering.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualNetworkPeering;
    /**
     * Controls if forwarded traffic from  VMs
     * in the remote virtual network is allowed. Defaults to false.
     */
    readonly allowForwardedTraffic: pulumi.Output<boolean>;
    /**
     * Controls gatewayLinks can be used in the
     * remote virtual network’s link to the local virtual network.
     */
    readonly allowGatewayTransit: pulumi.Output<boolean>;
    /**
     * Controls if the VMs in the remote
     * virtual network can access VMs in the local virtual network. Defaults to
     * true.
     */
    readonly allowVirtualNetworkAccess: pulumi.Output<boolean | undefined>;
    /**
     * The name of the virtual network peering. Changing this
     * forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The full Azure resource ID of the
     * remote virtual network.  Changing this forces a new resource to be created.
     */
    readonly remoteVirtualNetworkId: pulumi.Output<string>;
    /**
     * The name of the resource group in which to
     * create the virtual network peering. Changing this forces a new resource to be
     * created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Controls if remote gateways can be used on
     * the local virtual network. If the flag is set to `true`, and
     * `allowGatewayTransit` on the remote peering is also `true`, virtual network will
     * use gateways of remote virtual network for transit. Only one peering can
     * have this flag set to `true`. This flag cannot be set if virtual network
     * already has a gateway. Defaults to `false`.
     */
    readonly useRemoteGateways: pulumi.Output<boolean>;
    /**
     * The name of the virtual network. Changing
     * this forces a new resource to be created.
     */
    readonly virtualNetworkName: pulumi.Output<string>;
    /**
     * Create a VirtualNetworkPeering resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkPeeringArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering VirtualNetworkPeering resources.
 */
export interface VirtualNetworkPeeringState {
    /**
     * Controls if forwarded traffic from  VMs
     * in the remote virtual network is allowed. Defaults to false.
     */
    allowForwardedTraffic?: pulumi.Input<boolean>;
    /**
     * Controls gatewayLinks can be used in the
     * remote virtual network’s link to the local virtual network.
     */
    allowGatewayTransit?: pulumi.Input<boolean>;
    /**
     * Controls if the VMs in the remote
     * virtual network can access VMs in the local virtual network. Defaults to
     * true.
     */
    allowVirtualNetworkAccess?: pulumi.Input<boolean>;
    /**
     * The name of the virtual network peering. Changing this
     * forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The full Azure resource ID of the
     * remote virtual network.  Changing this forces a new resource to be created.
     */
    remoteVirtualNetworkId?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the virtual network peering. Changing this forces a new resource to be
     * created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Controls if remote gateways can be used on
     * the local virtual network. If the flag is set to `true`, and
     * `allowGatewayTransit` on the remote peering is also `true`, virtual network will
     * use gateways of remote virtual network for transit. Only one peering can
     * have this flag set to `true`. This flag cannot be set if virtual network
     * already has a gateway. Defaults to `false`.
     */
    useRemoteGateways?: pulumi.Input<boolean>;
    /**
     * The name of the virtual network. Changing
     * this forces a new resource to be created.
     */
    virtualNetworkName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a VirtualNetworkPeering resource.
 */
export interface VirtualNetworkPeeringArgs {
    /**
     * Controls if forwarded traffic from  VMs
     * in the remote virtual network is allowed. Defaults to false.
     */
    allowForwardedTraffic?: pulumi.Input<boolean>;
    /**
     * Controls gatewayLinks can be used in the
     * remote virtual network’s link to the local virtual network.
     */
    allowGatewayTransit?: pulumi.Input<boolean>;
    /**
     * Controls if the VMs in the remote
     * virtual network can access VMs in the local virtual network. Defaults to
     * true.
     */
    allowVirtualNetworkAccess?: pulumi.Input<boolean>;
    /**
     * The name of the virtual network peering. Changing this
     * forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The full Azure resource ID of the
     * remote virtual network.  Changing this forces a new resource to be created.
     */
    remoteVirtualNetworkId: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the virtual network peering. Changing this forces a new resource to be
     * created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Controls if remote gateways can be used on
     * the local virtual network. If the flag is set to `true`, and
     * `allowGatewayTransit` on the remote peering is also `true`, virtual network will
     * use gateways of remote virtual network for transit. Only one peering can
     * have this flag set to `true`. This flag cannot be set if virtual network
     * already has a gateway. Defaults to `false`.
     */
    useRemoteGateways?: pulumi.Input<boolean>;
    /**
     * The name of the virtual network. Changing
     * this forces a new resource to be created.
     */
    virtualNetworkName: pulumi.Input<string>;
}
