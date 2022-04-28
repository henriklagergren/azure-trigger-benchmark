import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an ExpressRoute Circuit Authorization.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleExpressRouteCircuit = new azure.network.ExpressRouteCircuit("exampleExpressRouteCircuit", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     serviceProviderName: "Equinix",
 *     peeringLocation: "Silicon Valley",
 *     bandwidthInMbps: 50,
 *     sku: {
 *         tier: "Standard",
 *         family: "MeteredData",
 *     },
 *     allowClassicOperations: false,
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * const exampleExpressRouteCircuitAuthorization = new azure.network.ExpressRouteCircuitAuthorization("exampleExpressRouteCircuitAuthorization", {
 *     expressRouteCircuitName: exampleExpressRouteCircuit.name,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * ```
 *
 * ## Import
 *
 * ExpressRoute Circuit Authorizations can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/expressRouteCircuitAuthorization:ExpressRouteCircuitAuthorization auth1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/expressRouteCircuits/myExpressRoute/authorizations/auth1
 * ```
 */
export declare class ExpressRouteCircuitAuthorization extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRouteCircuitAuthorization resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ExpressRouteCircuitAuthorizationState, opts?: pulumi.CustomResourceOptions): ExpressRouteCircuitAuthorization;
    /**
     * Returns true if the given object is an instance of ExpressRouteCircuitAuthorization.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ExpressRouteCircuitAuthorization;
    /**
     * The Authorization Key.
     */
    readonly authorizationKey: pulumi.Output<string>;
    /**
     * The authorization use status.
     */
    readonly authorizationUseStatus: pulumi.Output<string>;
    /**
     * The name of the Express Route Circuit in which to create the Authorization.
     */
    readonly expressRouteCircuitName: pulumi.Output<string>;
    /**
     * The name of the ExpressRoute circuit. Changing this forces a
     * new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to
     * create the ExpressRoute circuit. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a ExpressRouteCircuitAuthorization resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRouteCircuitAuthorizationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ExpressRouteCircuitAuthorization resources.
 */
export interface ExpressRouteCircuitAuthorizationState {
    /**
     * The Authorization Key.
     */
    authorizationKey?: pulumi.Input<string>;
    /**
     * The authorization use status.
     */
    authorizationUseStatus?: pulumi.Input<string>;
    /**
     * The name of the Express Route Circuit in which to create the Authorization.
     */
    expressRouteCircuitName?: pulumi.Input<string>;
    /**
     * The name of the ExpressRoute circuit. Changing this forces a
     * new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the ExpressRoute circuit. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ExpressRouteCircuitAuthorization resource.
 */
export interface ExpressRouteCircuitAuthorizationArgs {
    /**
     * The name of the Express Route Circuit in which to create the Authorization.
     */
    expressRouteCircuitName: pulumi.Input<string>;
    /**
     * The name of the ExpressRoute circuit. Changing this forces a
     * new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the ExpressRoute circuit. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
