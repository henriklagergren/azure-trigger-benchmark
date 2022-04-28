import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a local network gateway connection over which specific connections can be configured.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.core.ResourceGroup("example", {location: "West Europe"});
 * const home = new azure.network.LocalNetworkGateway("home", {
 *     resourceGroupName: example.name,
 *     location: example.location,
 *     gatewayAddress: "12.13.14.15",
 *     addressSpaces: ["10.0.0.0/16"],
 * });
 * ```
 *
 * ## Import
 *
 * Local Network Gateways can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/localNetworkGateway:LocalNetworkGateway lng1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/localNetworkGateways/lng1
 * ```
 */
export declare class LocalNetworkGateway extends pulumi.CustomResource {
    /**
     * Get an existing LocalNetworkGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LocalNetworkGatewayState, opts?: pulumi.CustomResourceOptions): LocalNetworkGateway;
    /**
     * Returns true if the given object is an instance of LocalNetworkGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LocalNetworkGateway;
    /**
     * The list of string CIDRs representing the
     * address spaces the gateway exposes.
     */
    readonly addressSpaces: pulumi.Output<string[] | undefined>;
    /**
     * A `bgpSettings` block as defined below containing the
     * Local Network Gateway's BGP speaker settings.
     */
    readonly bgpSettings: pulumi.Output<outputs.network.LocalNetworkGatewayBgpSettings | undefined>;
    /**
     * The gateway IP address to connect with.
     */
    readonly gatewayAddress: pulumi.Output<string | undefined>;
    /**
     * The gateway FQDN to connect with.
     */
    readonly gatewayFqdn: pulumi.Output<string | undefined>;
    /**
     * The location/region where the local network gateway is
     * created. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the local network gateway. Changing this
     * forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to
     * create the local network gateway.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a LocalNetworkGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LocalNetworkGatewayArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LocalNetworkGateway resources.
 */
export interface LocalNetworkGatewayState {
    /**
     * The list of string CIDRs representing the
     * address spaces the gateway exposes.
     */
    addressSpaces?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A `bgpSettings` block as defined below containing the
     * Local Network Gateway's BGP speaker settings.
     */
    bgpSettings?: pulumi.Input<inputs.network.LocalNetworkGatewayBgpSettings>;
    /**
     * The gateway IP address to connect with.
     */
    gatewayAddress?: pulumi.Input<string>;
    /**
     * The gateway FQDN to connect with.
     */
    gatewayFqdn?: pulumi.Input<string>;
    /**
     * The location/region where the local network gateway is
     * created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the local network gateway. Changing this
     * forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the local network gateway.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a LocalNetworkGateway resource.
 */
export interface LocalNetworkGatewayArgs {
    /**
     * The list of string CIDRs representing the
     * address spaces the gateway exposes.
     */
    addressSpaces?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A `bgpSettings` block as defined below containing the
     * Local Network Gateway's BGP speaker settings.
     */
    bgpSettings?: pulumi.Input<inputs.network.LocalNetworkGatewayBgpSettings>;
    /**
     * The gateway IP address to connect with.
     */
    gatewayAddress?: pulumi.Input<string>;
    /**
     * The gateway FQDN to connect with.
     */
    gatewayFqdn?: pulumi.Input<string>;
    /**
     * The location/region where the local network gateway is
     * created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the local network gateway. Changing this
     * forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the local network gateway.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
