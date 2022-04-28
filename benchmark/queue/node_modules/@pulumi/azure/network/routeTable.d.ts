import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Route Table
 *
 * > **NOTE on Route Tables and Routes:** There is both a standalone `route` resource, and allows for Routes to be defined in-line within the `routeTable` resource.
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
 *     disableBgpRoutePropagation: false,
 *     routes: [{
 *         name: "route1",
 *         addressPrefix: "10.1.0.0/16",
 *         nextHopType: "vnetlocal",
 *     }],
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Route Tables can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/routeTable:RouteTable example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/routeTables/mytable1
 * ```
 */
export declare class RouteTable extends pulumi.CustomResource {
    /**
     * Get an existing RouteTable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouteTableState, opts?: pulumi.CustomResourceOptions): RouteTable;
    /**
     * Returns true if the given object is an instance of RouteTable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RouteTable;
    /**
     * Boolean flag which controls propagation of routes learned by BGP on that route table. True means disable.
     */
    readonly disableBgpRoutePropagation: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the route.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the route table. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A list of objects representing routes. Each object accepts the arguments documented below.
     */
    readonly routes: pulumi.Output<outputs.network.RouteTableRoute[]>;
    /**
     * The collection of Subnets associated with this route table.
     */
    readonly subnets: pulumi.Output<string[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a RouteTable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouteTableArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RouteTable resources.
 */
export interface RouteTableState {
    /**
     * Boolean flag which controls propagation of routes learned by BGP on that route table. True means disable.
     */
    disableBgpRoutePropagation?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the route.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the route table. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A list of objects representing routes. Each object accepts the arguments documented below.
     */
    routes?: pulumi.Input<pulumi.Input<inputs.network.RouteTableRoute>[]>;
    /**
     * The collection of Subnets associated with this route table.
     */
    subnets?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a RouteTable resource.
 */
export interface RouteTableArgs {
    /**
     * Boolean flag which controls propagation of routes learned by BGP on that route table. True means disable.
     */
    disableBgpRoutePropagation?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the route.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the route table. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A list of objects representing routes. Each object accepts the arguments documented below.
     */
    routes?: pulumi.Input<pulumi.Input<inputs.network.RouteTableRoute>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
