import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Route within a Route Table.
 *
 * > **NOTE on Route Tables and Routes:** This provider currently
 * provides both a standalone Route resource, and allows for Routes to be defined in-line within the Route Table resource.
 * At this time you cannot use a Route Table with in-line Routes in conjunction with any Route resources. Doing so will cause a conflict of Route configurations and will overwrite Routes.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleRouteTable = new azure.network.RouteTable("exampleRouteTable", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleRoute = new azure.network.Route("exampleRoute", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     routeTableName: exampleRouteTable.name,
 *     addressPrefix: "10.1.0.0/16",
 *     nextHopType: "vnetlocal",
 * });
 * ```
 *
 * ## Import
 *
 * Routes can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/route:Route exampleRoute /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/routeTables/mytable1/routes/myroute1
 * ```
 */
export declare class Route extends pulumi.CustomResource {
    /**
     * Get an existing Route resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouteState, opts?: pulumi.CustomResourceOptions): Route;
    /**
     * Returns true if the given object is an instance of Route.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Route;
    /**
     * The destination CIDR to which the route applies, such as `10.1.0.0/16`
     */
    readonly addressPrefix: pulumi.Output<string>;
    /**
     * The name of the route. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Contains the IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is `VirtualAppliance`.
     */
    readonly nextHopInIpAddress: pulumi.Output<string | undefined>;
    /**
     * The type of Azure hop the packet should be sent to. Possible values are `VirtualNetworkGateway`, `VnetLocal`, `Internet`, `VirtualAppliance` and `None`
     */
    readonly nextHopType: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the route. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The name of the route table within which create the route. Changing this forces a new resource to be created.
     */
    readonly routeTableName: pulumi.Output<string>;
    /**
     * Create a Route resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouteArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Route resources.
 */
export interface RouteState {
    /**
     * The destination CIDR to which the route applies, such as `10.1.0.0/16`
     */
    addressPrefix?: pulumi.Input<string>;
    /**
     * The name of the route. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Contains the IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is `VirtualAppliance`.
     */
    nextHopInIpAddress?: pulumi.Input<string>;
    /**
     * The type of Azure hop the packet should be sent to. Possible values are `VirtualNetworkGateway`, `VnetLocal`, `Internet`, `VirtualAppliance` and `None`
     */
    nextHopType?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the route. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The name of the route table within which create the route. Changing this forces a new resource to be created.
     */
    routeTableName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Route resource.
 */
export interface RouteArgs {
    /**
     * The destination CIDR to which the route applies, such as `10.1.0.0/16`
     */
    addressPrefix: pulumi.Input<string>;
    /**
     * The name of the route. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Contains the IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is `VirtualAppliance`.
     */
    nextHopInIpAddress?: pulumi.Input<string>;
    /**
     * The type of Azure hop the packet should be sent to. Possible values are `VirtualNetworkGateway`, `VnetLocal`, `Internet`, `VirtualAppliance` and `None`
     */
    nextHopType: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the route. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the route table within which create the route. Changing this forces a new resource to be created.
     */
    routeTableName: pulumi.Input<string>;
}
