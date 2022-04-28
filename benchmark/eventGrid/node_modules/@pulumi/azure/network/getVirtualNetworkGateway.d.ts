import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Virtual Network Gateway.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.network.getVirtualNetworkGateway({
 *     name: "production",
 *     resourceGroupName: "networking",
 * });
 * export const virtualNetworkGatewayId = example.then(example => example.id);
 * ```
 */
export declare function getVirtualNetworkGateway(args: GetVirtualNetworkGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualNetworkGatewayResult>;
/**
 * A collection of arguments for invoking getVirtualNetworkGateway.
 */
export interface GetVirtualNetworkGatewayArgs {
    /**
     * Specifies the name of the Virtual Network Gateway.
     */
    name: string;
    /**
     * Specifies the name of the resource group the Virtual Network Gateway is located in.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getVirtualNetworkGateway.
 */
export interface GetVirtualNetworkGatewayResult {
    /**
     * Is this an Active-Active Gateway?
     */
    readonly activeActive: boolean;
    readonly bgpSettings: outputs.network.GetVirtualNetworkGatewayBgpSetting[];
    readonly customRoutes: outputs.network.GetVirtualNetworkGatewayCustomRoute[];
    /**
     * The ID of the local network gateway
     * through which outbound Internet traffic from the virtual network in which the
     * gateway is created will be routed (*forced tunneling*). Refer to the
     * [Azure documentation on forced tunneling](https://docs.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-forced-tunneling-rm).
     */
    readonly defaultLocalNetworkGatewayId: string;
    /**
     * Will BGP (Border Gateway Protocol) will be enabled
     * for this Virtual Network Gateway.
     */
    readonly enableBgp: boolean;
    /**
     * The Generation of the Virtual Network Gateway.
     */
    readonly generation: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * One or two `ipConfiguration` blocks documented below.
     */
    readonly ipConfigurations: outputs.network.GetVirtualNetworkGatewayIpConfiguration[];
    /**
     * The location/region where the Virtual Network Gateway is located.
     */
    readonly location: string;
    /**
     * The user-defined name of the revoked certificate.
     */
    readonly name: string;
    /**
     * Whether a private IP will be used for this  gateway for connections.
     */
    readonly privateIpAddressEnabled: boolean;
    readonly resourceGroupName: string;
    /**
     * Configuration of the size and capacity of the Virtual Network Gateway.
     */
    readonly sku: string;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The type of the Virtual Network Gateway.
     */
    readonly type: string;
    /**
     * A `vpnClientConfiguration` block which is documented below.
     */
    readonly vpnClientConfigurations: outputs.network.GetVirtualNetworkGatewayVpnClientConfiguration[];
    /**
     * The routing type of the Virtual Network Gateway.
     */
    readonly vpnType: string;
}
export declare function getVirtualNetworkGatewayOutput(args: GetVirtualNetworkGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualNetworkGatewayResult>;
/**
 * A collection of arguments for invoking getVirtualNetworkGateway.
 */
export interface GetVirtualNetworkGatewayOutputArgs {
    /**
     * Specifies the name of the Virtual Network Gateway.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the name of the resource group the Virtual Network Gateway is located in.
     */
    resourceGroupName: pulumi.Input<string>;
}
