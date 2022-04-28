import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Virtual Hub Route Table.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     addressSpaces: ["10.5.0.0/16"],
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleNetworkSecurityGroup = new azure.network.NetworkSecurityGroup("exampleNetworkSecurityGroup", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleSubnet = new azure.network.Subnet("exampleSubnet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.5.1.0/24"],
 * });
 * const exampleSubnetNetworkSecurityGroupAssociation = new azure.network.SubnetNetworkSecurityGroupAssociation("exampleSubnetNetworkSecurityGroupAssociation", {
 *     subnetId: exampleSubnet.id,
 *     networkSecurityGroupId: exampleNetworkSecurityGroup.id,
 * });
 * const exampleVirtualWan = new azure.network.VirtualWan("exampleVirtualWan", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * const exampleVirtualHub = new azure.network.VirtualHub("exampleVirtualHub", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     virtualWanId: exampleVirtualWan.id,
 *     addressPrefix: "10.0.2.0/24",
 * });
 * const exampleVirtualHubConnection = new azure.network.VirtualHubConnection("exampleVirtualHubConnection", {
 *     virtualHubId: exampleVirtualHub.id,
 *     remoteVirtualNetworkId: exampleVirtualNetwork.id,
 * });
 * const exampleVirtualHubRouteTable = new azure.network.VirtualHubRouteTable("exampleVirtualHubRouteTable", {
 *     virtualHubId: exampleVirtualHub.id,
 *     labels: ["label1"],
 *     routes: [{
 *         name: "example-route",
 *         destinationsType: "CIDR",
 *         destinations: ["10.0.0.0/16"],
 *         nextHopType: "ResourceId",
 *         nextHop: exampleVirtualHubConnection.id,
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Virtual Hub Route Tables can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/virtualHubRouteTable:VirtualHubRouteTable example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/routeTable1
 * ```
 */
export declare class VirtualHubRouteTable extends pulumi.CustomResource {
    /**
     * Get an existing VirtualHubRouteTable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualHubRouteTableState, opts?: pulumi.CustomResourceOptions): VirtualHubRouteTable;
    /**
     * Returns true if the given object is an instance of VirtualHubRouteTable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualHubRouteTable;
    /**
     * List of labels associated with this route table.
     */
    readonly labels: pulumi.Output<string[] | undefined>;
    /**
     * The name which should be used for Virtual Hub Route Table. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `route` block as defined below.
     */
    readonly routes: pulumi.Output<outputs.network.VirtualHubRouteTableRoute[]>;
    /**
     * The ID of the Virtual Hub within which this route table should be created. Changing this forces a new resource to be created.
     */
    readonly virtualHubId: pulumi.Output<string>;
    /**
     * Create a VirtualHubRouteTable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualHubRouteTableArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering VirtualHubRouteTable resources.
 */
export interface VirtualHubRouteTableState {
    /**
     * List of labels associated with this route table.
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name which should be used for Virtual Hub Route Table. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `route` block as defined below.
     */
    routes?: pulumi.Input<pulumi.Input<inputs.network.VirtualHubRouteTableRoute>[]>;
    /**
     * The ID of the Virtual Hub within which this route table should be created. Changing this forces a new resource to be created.
     */
    virtualHubId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a VirtualHubRouteTable resource.
 */
export interface VirtualHubRouteTableArgs {
    /**
     * List of labels associated with this route table.
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name which should be used for Virtual Hub Route Table. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `route` block as defined below.
     */
    routes?: pulumi.Input<pulumi.Input<inputs.network.VirtualHubRouteTableRoute>[]>;
    /**
     * The ID of the Virtual Hub within which this route table should be created. Changing this forces a new resource to be created.
     */
    virtualHubId: pulumi.Input<string>;
}
