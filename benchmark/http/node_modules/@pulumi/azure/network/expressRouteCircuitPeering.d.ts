import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an ExpressRoute Circuit Peering.
 *
 * ## Example Usage
 * ### Creating A Microsoft Peering)
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
 * const exampleExpressRouteCircuitPeering = new azure.network.ExpressRouteCircuitPeering("exampleExpressRouteCircuitPeering", {
 *     peeringType: "MicrosoftPeering",
 *     expressRouteCircuitName: exampleExpressRouteCircuit.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     peerAsn: 100,
 *     primaryPeerAddressPrefix: "123.0.0.0/30",
 *     secondaryPeerAddressPrefix: "123.0.0.4/30",
 *     vlanId: 300,
 *     microsoftPeeringConfig: {
 *         advertisedPublicPrefixes: ["123.1.0.0/24"],
 *     },
 *     ipv6: {
 *         primaryPeerAddressPrefix: "2002:db01::/126",
 *         secondaryPeerAddressPrefix: "2003:db01::/126",
 *         microsoftPeering: {
 *             advertisedPublicPrefixes: ["2002:db01::/126"],
 *         },
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * ExpressRoute Circuit Peerings can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/expressRouteCircuitPeering:ExpressRouteCircuitPeering peering1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/expressRouteCircuits/myExpressRoute/peerings/peering1
 * ```
 */
export declare class ExpressRouteCircuitPeering extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRouteCircuitPeering resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ExpressRouteCircuitPeeringState, opts?: pulumi.CustomResourceOptions): ExpressRouteCircuitPeering;
    /**
     * Returns true if the given object is an instance of ExpressRouteCircuitPeering.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ExpressRouteCircuitPeering;
    /**
     * The ASN used by Azure.
     */
    readonly azureAsn: pulumi.Output<number>;
    /**
     * The name of the ExpressRoute Circuit in which to create the Peering.
     */
    readonly expressRouteCircuitName: pulumi.Output<string>;
    /**
     * A `ipv6` block as defined below.
     */
    readonly ipv6: pulumi.Output<outputs.network.ExpressRouteCircuitPeeringIpv6 | undefined>;
    /**
     * A `microsoftPeeringConfig` block as defined below. Required when `peeringType` is set to `MicrosoftPeering`.
     */
    readonly microsoftPeeringConfig: pulumi.Output<outputs.network.ExpressRouteCircuitPeeringMicrosoftPeeringConfig | undefined>;
    /**
     * The Either a 16-bit or a 32-bit ASN. Can either be public or private.
     */
    readonly peerAsn: pulumi.Output<number>;
    /**
     * The type of the ExpressRoute Circuit Peering. Acceptable values include `AzurePrivatePeering`, `AzurePublicPeering` and `MicrosoftPeering`. Changing this forces a new resource to be created.
     */
    readonly peeringType: pulumi.Output<string>;
    /**
     * The Primary Port used by Azure for this Peering.
     */
    readonly primaryAzurePort: pulumi.Output<string>;
    /**
     * A subnet for the primary link.
     */
    readonly primaryPeerAddressPrefix: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Express Route Circuit Peering. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The ID of the Route Filter. Only available when `peeringType` is set to `MicrosoftPeering`.
     */
    readonly routeFilterId: pulumi.Output<string | undefined>;
    /**
     * The Secondary Port used by Azure for this Peering.
     */
    readonly secondaryAzurePort: pulumi.Output<string>;
    /**
     * A subnet for the secondary link.
     */
    readonly secondaryPeerAddressPrefix: pulumi.Output<string>;
    /**
     * The shared key. Can be a maximum of 25 characters.
     */
    readonly sharedKey: pulumi.Output<string | undefined>;
    /**
     * A valid VLAN ID to establish this peering on.
     */
    readonly vlanId: pulumi.Output<number>;
    /**
     * Create a ExpressRouteCircuitPeering resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRouteCircuitPeeringArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ExpressRouteCircuitPeering resources.
 */
export interface ExpressRouteCircuitPeeringState {
    /**
     * The ASN used by Azure.
     */
    azureAsn?: pulumi.Input<number>;
    /**
     * The name of the ExpressRoute Circuit in which to create the Peering.
     */
    expressRouteCircuitName?: pulumi.Input<string>;
    /**
     * A `ipv6` block as defined below.
     */
    ipv6?: pulumi.Input<inputs.network.ExpressRouteCircuitPeeringIpv6>;
    /**
     * A `microsoftPeeringConfig` block as defined below. Required when `peeringType` is set to `MicrosoftPeering`.
     */
    microsoftPeeringConfig?: pulumi.Input<inputs.network.ExpressRouteCircuitPeeringMicrosoftPeeringConfig>;
    /**
     * The Either a 16-bit or a 32-bit ASN. Can either be public or private.
     */
    peerAsn?: pulumi.Input<number>;
    /**
     * The type of the ExpressRoute Circuit Peering. Acceptable values include `AzurePrivatePeering`, `AzurePublicPeering` and `MicrosoftPeering`. Changing this forces a new resource to be created.
     */
    peeringType?: pulumi.Input<string>;
    /**
     * The Primary Port used by Azure for this Peering.
     */
    primaryAzurePort?: pulumi.Input<string>;
    /**
     * A subnet for the primary link.
     */
    primaryPeerAddressPrefix?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Express Route Circuit Peering. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The ID of the Route Filter. Only available when `peeringType` is set to `MicrosoftPeering`.
     */
    routeFilterId?: pulumi.Input<string>;
    /**
     * The Secondary Port used by Azure for this Peering.
     */
    secondaryAzurePort?: pulumi.Input<string>;
    /**
     * A subnet for the secondary link.
     */
    secondaryPeerAddressPrefix?: pulumi.Input<string>;
    /**
     * The shared key. Can be a maximum of 25 characters.
     */
    sharedKey?: pulumi.Input<string>;
    /**
     * A valid VLAN ID to establish this peering on.
     */
    vlanId?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a ExpressRouteCircuitPeering resource.
 */
export interface ExpressRouteCircuitPeeringArgs {
    /**
     * The name of the ExpressRoute Circuit in which to create the Peering.
     */
    expressRouteCircuitName: pulumi.Input<string>;
    /**
     * A `ipv6` block as defined below.
     */
    ipv6?: pulumi.Input<inputs.network.ExpressRouteCircuitPeeringIpv6>;
    /**
     * A `microsoftPeeringConfig` block as defined below. Required when `peeringType` is set to `MicrosoftPeering`.
     */
    microsoftPeeringConfig?: pulumi.Input<inputs.network.ExpressRouteCircuitPeeringMicrosoftPeeringConfig>;
    /**
     * The Either a 16-bit or a 32-bit ASN. Can either be public or private.
     */
    peerAsn?: pulumi.Input<number>;
    /**
     * The type of the ExpressRoute Circuit Peering. Acceptable values include `AzurePrivatePeering`, `AzurePublicPeering` and `MicrosoftPeering`. Changing this forces a new resource to be created.
     */
    peeringType: pulumi.Input<string>;
    /**
     * A subnet for the primary link.
     */
    primaryPeerAddressPrefix: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Express Route Circuit Peering. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of the Route Filter. Only available when `peeringType` is set to `MicrosoftPeering`.
     */
    routeFilterId?: pulumi.Input<string>;
    /**
     * A subnet for the secondary link.
     */
    secondaryPeerAddressPrefix: pulumi.Input<string>;
    /**
     * The shared key. Can be a maximum of 25 characters.
     */
    sharedKey?: pulumi.Input<string>;
    /**
     * A valid VLAN ID to establish this peering on.
     */
    vlanId: pulumi.Input<number>;
}
