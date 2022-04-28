import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Virtual Hub IP. This resource is also known as a Route Server.
 *
 * > **NOTE** Virtual Hub IP only supports Standard Virtual Hub without Virtual Wan.
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
 * ```
 *
 * ## Import
 *
 * Virtual Hub IPs can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/virtualHubIp:VirtualHubIp example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/virtualHubs/virtualHub1/ipConfigurations/ipConfig1
 * ```
 */
export declare class VirtualHubIp extends pulumi.CustomResource {
    /**
     * Get an existing VirtualHubIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualHubIpState, opts?: pulumi.CustomResourceOptions): VirtualHubIp;
    /**
     * Returns true if the given object is an instance of VirtualHubIp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualHubIp;
    /**
     * The name which should be used for this Virtual Hub IP. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The private IP address of the IP configuration.
     */
    readonly privateIpAddress: pulumi.Output<string | undefined>;
    /**
     * The private IP address allocation method. Possible values are `Static` and `Dynamic` is allowed. Defaults to `Dynamic`.
     */
    readonly privateIpAllocationMethod: pulumi.Output<string | undefined>;
    /**
     * The ID of the Public IP Address. This option is required since September 1st 2021. Changing this forces a new resource to be created.
     */
    readonly publicIpAddressId: pulumi.Output<string | undefined>;
    /**
     * The ID of the Subnet that the IP will reside. Changing this forces a new resource to be created.
     */
    readonly subnetId: pulumi.Output<string>;
    /**
     * The ID of the Virtual Hub within which this ip configuration should be created. Changing this forces a new resource to be created.
     */
    readonly virtualHubId: pulumi.Output<string>;
    /**
     * Create a VirtualHubIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualHubIpArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering VirtualHubIp resources.
 */
export interface VirtualHubIpState {
    /**
     * The name which should be used for this Virtual Hub IP. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The private IP address of the IP configuration.
     */
    privateIpAddress?: pulumi.Input<string>;
    /**
     * The private IP address allocation method. Possible values are `Static` and `Dynamic` is allowed. Defaults to `Dynamic`.
     */
    privateIpAllocationMethod?: pulumi.Input<string>;
    /**
     * The ID of the Public IP Address. This option is required since September 1st 2021. Changing this forces a new resource to be created.
     */
    publicIpAddressId?: pulumi.Input<string>;
    /**
     * The ID of the Subnet that the IP will reside. Changing this forces a new resource to be created.
     */
    subnetId?: pulumi.Input<string>;
    /**
     * The ID of the Virtual Hub within which this ip configuration should be created. Changing this forces a new resource to be created.
     */
    virtualHubId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a VirtualHubIp resource.
 */
export interface VirtualHubIpArgs {
    /**
     * The name which should be used for this Virtual Hub IP. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The private IP address of the IP configuration.
     */
    privateIpAddress?: pulumi.Input<string>;
    /**
     * The private IP address allocation method. Possible values are `Static` and `Dynamic` is allowed. Defaults to `Dynamic`.
     */
    privateIpAllocationMethod?: pulumi.Input<string>;
    /**
     * The ID of the Public IP Address. This option is required since September 1st 2021. Changing this forces a new resource to be created.
     */
    publicIpAddressId?: pulumi.Input<string>;
    /**
     * The ID of the Subnet that the IP will reside. Changing this forces a new resource to be created.
     */
    subnetId: pulumi.Input<string>;
    /**
     * The ID of the Virtual Hub within which this ip configuration should be created. Changing this forces a new resource to be created.
     */
    virtualHubId: pulumi.Input<string>;
}
