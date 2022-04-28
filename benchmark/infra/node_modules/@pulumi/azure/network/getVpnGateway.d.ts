import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing VPN Gateway within a Virtual Hub.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.network.getVpnGateway({
 *     name: "existing-local-vpn_gateway",
 *     resourceGroupName: "existing-vpn_gateway",
 * });
 * export const azurermVpnGatewayId = example.then(example => example.id);
 * ```
 */
export declare function getVpnGateway(args: GetVpnGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetVpnGatewayResult>;
/**
 * A collection of arguments for invoking getVpnGateway.
 */
export interface GetVpnGatewayArgs {
    /**
     * The Name of the VPN Gateway.
     */
    name: string;
    /**
     * The name of the Resource Group where the VPN Gateway exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getVpnGateway.
 */
export interface GetVpnGatewayResult {
    /**
     * A `bgpSettings` block as defined below.
     */
    readonly bgpSettings: outputs.network.GetVpnGatewayBgpSetting[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The Azure location where the VPN Gateway exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * The Scale Unit of this VPN Gateway.
     */
    readonly scaleUnit: number;
    /**
     * A mapping of tags assigned to the VPN Gateway.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The ID of the Virtual Hub within which this VPN Gateway has been created.
     */
    readonly virtualHubId: string;
}
export declare function getVpnGatewayOutput(args: GetVpnGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVpnGatewayResult>;
/**
 * A collection of arguments for invoking getVpnGateway.
 */
export interface GetVpnGatewayOutputArgs {
    /**
     * The Name of the VPN Gateway.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the VPN Gateway exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
