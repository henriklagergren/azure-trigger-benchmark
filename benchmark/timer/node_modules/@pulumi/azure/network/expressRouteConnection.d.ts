import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Express Route Connection.
 *
 * > **NOTE:** The provider status of the Express Route Circuit must be set as provisioned while creating the Express Route Connection. See more details [here](https://docs.microsoft.com/en-us/azure/expressroute/expressroute-howto-circuit-portal-resource-manager#send-the-service-key-to-your-connectivity-provider-for-provisioning).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualWan = new azure.network.VirtualWan("exampleVirtualWan", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * const exampleVirtualHub = new azure.network.VirtualHub("exampleVirtualHub", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     virtualWanId: exampleVirtualWan.id,
 *     addressPrefix: "10.0.1.0/24",
 * });
 * const exampleExpressRouteGateway = new azure.network.ExpressRouteGateway("exampleExpressRouteGateway", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     virtualHubId: exampleVirtualHub.id,
 *     scaleUnits: 1,
 * });
 * const exampleExpressRoutePort = new azure.network.ExpressRoutePort("exampleExpressRoutePort", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     peeringLocation: "Equinix-Seattle-SE2",
 *     bandwidthInGbps: 10,
 *     encapsulation: "Dot1Q",
 * });
 * const exampleExpressRouteCircuit = new azure.network.ExpressRouteCircuit("exampleExpressRouteCircuit", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     expressRoutePortId: exampleExpressRoutePort.id,
 *     bandwidthInGbps: 5,
 *     sku: {
 *         tier: "Standard",
 *         family: "MeteredData",
 *     },
 * });
 * const exampleExpressRouteCircuitPeering = new azure.network.ExpressRouteCircuitPeering("exampleExpressRouteCircuitPeering", {
 *     peeringType: "AzurePrivatePeering",
 *     expressRouteCircuitName: exampleExpressRouteCircuit.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sharedKey: "ItsASecret",
 *     peerAsn: 100,
 *     primaryPeerAddressPrefix: "192.168.1.0/30",
 *     secondaryPeerAddressPrefix: "192.168.2.0/30",
 *     vlanId: 100,
 * });
 * const exampleExpressRouteConnection = new azure.network.ExpressRouteConnection("exampleExpressRouteConnection", {
 *     expressRouteGatewayId: exampleExpressRouteGateway.id,
 *     expressRouteCircuitPeeringId: exampleExpressRouteCircuitPeering.id,
 * });
 * ```
 *
 * ## Import
 *
 * Express Route Connections can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/expressRouteConnection:ExpressRouteConnection example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/expressRouteGateways/expressRouteGateway1/expressRouteConnections/connection1
 * ```
 */
export declare class ExpressRouteConnection extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRouteConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ExpressRouteConnectionState, opts?: pulumi.CustomResourceOptions): ExpressRouteConnection;
    /**
     * Returns true if the given object is an instance of ExpressRouteConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ExpressRouteConnection;
    /**
     * The authorization key to establish the Express Route Connection.
     */
    readonly authorizationKey: pulumi.Output<string | undefined>;
    /**
     * Is Internet security enabled for this Express Route Connection?
     */
    readonly enableInternetSecurity: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the Express Route Circuit Peering that this Express Route Connection connects with. Changing this forces a new resource to be created.
     */
    readonly expressRouteCircuitPeeringId: pulumi.Output<string>;
    /**
     * The ID of the Express Route Gateway that this Express Route Connection connects with. Changing this forces a new resource to be created.
     */
    readonly expressRouteGatewayId: pulumi.Output<string>;
    /**
     * The name which should be used for this Express Route Connection. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `routing` block as defined below.
     */
    readonly routing: pulumi.Output<outputs.network.ExpressRouteConnectionRouting>;
    /**
     * The routing weight associated to the Express Route Connection. Possible value is between `0` and `32000`. Defaults to `0`.
     */
    readonly routingWeight: pulumi.Output<number | undefined>;
    /**
     * Create a ExpressRouteConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRouteConnectionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ExpressRouteConnection resources.
 */
export interface ExpressRouteConnectionState {
    /**
     * The authorization key to establish the Express Route Connection.
     */
    authorizationKey?: pulumi.Input<string>;
    /**
     * Is Internet security enabled for this Express Route Connection?
     */
    enableInternetSecurity?: pulumi.Input<boolean>;
    /**
     * The ID of the Express Route Circuit Peering that this Express Route Connection connects with. Changing this forces a new resource to be created.
     */
    expressRouteCircuitPeeringId?: pulumi.Input<string>;
    /**
     * The ID of the Express Route Gateway that this Express Route Connection connects with. Changing this forces a new resource to be created.
     */
    expressRouteGatewayId?: pulumi.Input<string>;
    /**
     * The name which should be used for this Express Route Connection. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `routing` block as defined below.
     */
    routing?: pulumi.Input<inputs.network.ExpressRouteConnectionRouting>;
    /**
     * The routing weight associated to the Express Route Connection. Possible value is between `0` and `32000`. Defaults to `0`.
     */
    routingWeight?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a ExpressRouteConnection resource.
 */
export interface ExpressRouteConnectionArgs {
    /**
     * The authorization key to establish the Express Route Connection.
     */
    authorizationKey?: pulumi.Input<string>;
    /**
     * Is Internet security enabled for this Express Route Connection?
     */
    enableInternetSecurity?: pulumi.Input<boolean>;
    /**
     * The ID of the Express Route Circuit Peering that this Express Route Connection connects with. Changing this forces a new resource to be created.
     */
    expressRouteCircuitPeeringId: pulumi.Input<string>;
    /**
     * The ID of the Express Route Gateway that this Express Route Connection connects with. Changing this forces a new resource to be created.
     */
    expressRouteGatewayId: pulumi.Input<string>;
    /**
     * The name which should be used for this Express Route Connection. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `routing` block as defined below.
     */
    routing?: pulumi.Input<inputs.network.ExpressRouteConnectionRouting>;
    /**
     * The routing weight associated to the Express Route Connection. Possible value is between `0` and `32000`. Defaults to `0`.
     */
    routingWeight?: pulumi.Input<number>;
}
