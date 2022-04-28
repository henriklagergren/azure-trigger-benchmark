import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Bgp Connection for a Virtual Hub.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualHub = new azure.network.VirtualHub("exampleVirtualHub", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: "Standard",
 * });
 * const examplePublicIp = new azure.network.PublicIp("examplePublicIp", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     allocationMethod: "Dynamic",
 * });
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     addressSpaces: ["10.5.0.0/16"],
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleSubnet = new azure.network.Subnet("exampleSubnet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefix: "10.5.1.0/24",
 * });
 * const exampleVirtualHubIp = new azure.network.VirtualHubIp("exampleVirtualHubIp", {
 *     virtualHubId: exampleVirtualHub.id,
 *     privateIpAddress: "10.5.1.18",
 *     privateIpAllocationMethod: "Static",
 *     publicIpAddressId: examplePublicIp.id,
 *     subnetId: exampleSubnet.id,
 * });
 * const exampleBgpConnection = new azure.network.BgpConnection("exampleBgpConnection", {
 *     virtualHubId: exampleVirtualHub.id,
 *     peerAsn: 65514,
 *     peerIp: "169.254.21.5",
 * }, {
 *     dependsOn: [exampleVirtualHubIp],
 * });
 * ```
 *
 * ## Import
 *
 * Virtual Hub Bgp Connections can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/bgpConnection:BgpConnection example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/virtualHubs/virtualHub1/bgpConnections/connection1
 * ```
 */
export declare class BgpConnection extends pulumi.CustomResource {
    /**
     * Get an existing BgpConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BgpConnectionState, opts?: pulumi.CustomResourceOptions): BgpConnection;
    /**
     * Returns true if the given object is an instance of BgpConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BgpConnection;
    /**
     * The name which should be used for this Virtual Hub Bgp Connection. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The peer autonomous system number for the Virtual Hub Bgp Connection. Changing this forces a new resource to be created.
     */
    readonly peerAsn: pulumi.Output<number>;
    /**
     * The peer ip address for the Virtual Hub Bgp Connection. Changing this forces a new resource to be created.
     */
    readonly peerIp: pulumi.Output<string>;
    /**
     * The ID of the Virtual Hub within which this Bgp connection should be created. Changing this forces a new resource to be created.
     */
    readonly virtualHubId: pulumi.Output<string>;
    /**
     * Create a BgpConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BgpConnectionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering BgpConnection resources.
 */
export interface BgpConnectionState {
    /**
     * The name which should be used for this Virtual Hub Bgp Connection. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The peer autonomous system number for the Virtual Hub Bgp Connection. Changing this forces a new resource to be created.
     */
    peerAsn?: pulumi.Input<number>;
    /**
     * The peer ip address for the Virtual Hub Bgp Connection. Changing this forces a new resource to be created.
     */
    peerIp?: pulumi.Input<string>;
    /**
     * The ID of the Virtual Hub within which this Bgp connection should be created. Changing this forces a new resource to be created.
     */
    virtualHubId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a BgpConnection resource.
 */
export interface BgpConnectionArgs {
    /**
     * The name which should be used for this Virtual Hub Bgp Connection. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The peer autonomous system number for the Virtual Hub Bgp Connection. Changing this forces a new resource to be created.
     */
    peerAsn: pulumi.Input<number>;
    /**
     * The peer ip address for the Virtual Hub Bgp Connection. Changing this forces a new resource to be created.
     */
    peerIp: pulumi.Input<string>;
    /**
     * The ID of the Virtual Hub within which this Bgp connection should be created. Changing this forces a new resource to be created.
     */
    virtualHubId: pulumi.Input<string>;
}
