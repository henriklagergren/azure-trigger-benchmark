import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a VPN Gateway Connection.
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
 *     addressPrefix: "10.0.0.0/24",
 * });
 * const exampleVpnGateway = new azure.network.VpnGateway("exampleVpnGateway", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualHubId: exampleVirtualHub.id,
 * });
 * const exampleVpnSite = new azure.network.VpnSite("exampleVpnSite", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualWanId: exampleVirtualWan.id,
 *     links: [
 *         {
 *             name: "link1",
 *             ipAddress: "10.1.0.0",
 *         },
 *         {
 *             name: "link2",
 *             ipAddress: "10.2.0.0",
 *         },
 *     ],
 * });
 * const exampleVpnGatewayConnection = new azure.network.VpnGatewayConnection("exampleVpnGatewayConnection", {
 *     vpnGatewayId: exampleVpnGateway.id,
 *     remoteVpnSiteId: exampleVpnSite.id,
 *     vpnLinks: [
 *         {
 *             name: "link1",
 *             vpnSiteLinkId: exampleVpnSite.links.apply(links => links?[0]?.id),
 *         },
 *         {
 *             name: "link2",
 *             vpnSiteLinkId: exampleVpnSite.links.apply(links => links?[1]?.id),
 *         },
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * VPN Gateway Connections can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/vpnGatewayConnection:VpnGatewayConnection example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/vpnGateways/gateway1/vpnConnections/conn1
 * ```
 */
export declare class VpnGatewayConnection extends pulumi.CustomResource {
    /**
     * Get an existing VpnGatewayConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpnGatewayConnectionState, opts?: pulumi.CustomResourceOptions): VpnGatewayConnection;
    /**
     * Returns true if the given object is an instance of VpnGatewayConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VpnGatewayConnection;
    /**
     * Whether Internet Security is enabled for this VPN Connection. Defaults to `false`.
     */
    readonly internetSecurityEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The name which should be used for this VPN Gateway Connection. Changing this forces a new VPN Gateway Connection to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the remote VPN Site, which will connect to the VPN Gateway. Changing this forces a new VPN Gateway Connection to be created.
     */
    readonly remoteVpnSiteId: pulumi.Output<string>;
    /**
     * A `routing` block as defined below. If this is not specified, there will be a default route table created implicitly.
     */
    readonly routings: pulumi.Output<outputs.network.VpnGatewayConnectionRouting[]>;
    /**
     * One or more `trafficSelectorPolicy` blocks as defined below.
     */
    readonly trafficSelectorPolicies: pulumi.Output<outputs.network.VpnGatewayConnectionTrafficSelectorPolicy[] | undefined>;
    /**
     * The ID of the VPN Gateway that this VPN Gateway Connection belongs to. Changing this forces a new VPN Gateway Connection to be created.
     */
    readonly vpnGatewayId: pulumi.Output<string>;
    /**
     * One or more `vpnLink` blocks as defined below.
     */
    readonly vpnLinks: pulumi.Output<outputs.network.VpnGatewayConnectionVpnLink[]>;
    /**
     * Create a VpnGatewayConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnGatewayConnectionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering VpnGatewayConnection resources.
 */
export interface VpnGatewayConnectionState {
    /**
     * Whether Internet Security is enabled for this VPN Connection. Defaults to `false`.
     */
    internetSecurityEnabled?: pulumi.Input<boolean>;
    /**
     * The name which should be used for this VPN Gateway Connection. Changing this forces a new VPN Gateway Connection to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the remote VPN Site, which will connect to the VPN Gateway. Changing this forces a new VPN Gateway Connection to be created.
     */
    remoteVpnSiteId?: pulumi.Input<string>;
    /**
     * A `routing` block as defined below. If this is not specified, there will be a default route table created implicitly.
     */
    routings?: pulumi.Input<pulumi.Input<inputs.network.VpnGatewayConnectionRouting>[]>;
    /**
     * One or more `trafficSelectorPolicy` blocks as defined below.
     */
    trafficSelectorPolicies?: pulumi.Input<pulumi.Input<inputs.network.VpnGatewayConnectionTrafficSelectorPolicy>[]>;
    /**
     * The ID of the VPN Gateway that this VPN Gateway Connection belongs to. Changing this forces a new VPN Gateway Connection to be created.
     */
    vpnGatewayId?: pulumi.Input<string>;
    /**
     * One or more `vpnLink` blocks as defined below.
     */
    vpnLinks?: pulumi.Input<pulumi.Input<inputs.network.VpnGatewayConnectionVpnLink>[]>;
}
/**
 * The set of arguments for constructing a VpnGatewayConnection resource.
 */
export interface VpnGatewayConnectionArgs {
    /**
     * Whether Internet Security is enabled for this VPN Connection. Defaults to `false`.
     */
    internetSecurityEnabled?: pulumi.Input<boolean>;
    /**
     * The name which should be used for this VPN Gateway Connection. Changing this forces a new VPN Gateway Connection to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the remote VPN Site, which will connect to the VPN Gateway. Changing this forces a new VPN Gateway Connection to be created.
     */
    remoteVpnSiteId: pulumi.Input<string>;
    /**
     * A `routing` block as defined below. If this is not specified, there will be a default route table created implicitly.
     */
    routings?: pulumi.Input<pulumi.Input<inputs.network.VpnGatewayConnectionRouting>[]>;
    /**
     * One or more `trafficSelectorPolicy` blocks as defined below.
     */
    trafficSelectorPolicies?: pulumi.Input<pulumi.Input<inputs.network.VpnGatewayConnectionTrafficSelectorPolicy>[]>;
    /**
     * The ID of the VPN Gateway that this VPN Gateway Connection belongs to. Changing this forces a new VPN Gateway Connection to be created.
     */
    vpnGatewayId: pulumi.Input<string>;
    /**
     * One or more `vpnLink` blocks as defined below.
     */
    vpnLinks: pulumi.Input<pulumi.Input<inputs.network.VpnGatewayConnectionVpnLink>[]>;
}
