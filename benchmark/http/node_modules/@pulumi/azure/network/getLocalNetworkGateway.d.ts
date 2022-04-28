import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Local Network Gateway.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.network.getLocalNetworkGateway({
 *     name: "existing-local-network-gateway",
 *     resourceGroupName: "existing-resources",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getLocalNetworkGateway(args: GetLocalNetworkGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetLocalNetworkGatewayResult>;
/**
 * A collection of arguments for invoking getLocalNetworkGateway.
 */
export interface GetLocalNetworkGatewayArgs {
    /**
     * The name of the Local Network Gateway.
     */
    name: string;
    /**
     * The name of the Resource Group where the Local Network Gateway exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getLocalNetworkGateway.
 */
export interface GetLocalNetworkGatewayResult {
    /**
     * The list of string CIDRs representing the address spaces the gateway exposes.
     */
    readonly addressSpaces: string[];
    /**
     * A `bgpSettings` block as defined below containing the Local Network Gateway's BGP speaker settings.
     */
    readonly bgpSettings: outputs.network.GetLocalNetworkGatewayBgpSetting[];
    /**
     * The gateway IP address the Local Network Gateway uses.
     */
    readonly gatewayAddress: string;
    /**
     * The gateway FQDN the Local Network Gateway uses.
     */
    readonly gatewayFqdn: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The Azure Region where the Local Network Gateway exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags assigned to the Local Network Gateway.
     */
    readonly tags: {
        [key: string]: string;
    };
}
export declare function getLocalNetworkGatewayOutput(args: GetLocalNetworkGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLocalNetworkGatewayResult>;
/**
 * A collection of arguments for invoking getLocalNetworkGateway.
 */
export interface GetLocalNetworkGatewayOutputArgs {
    /**
     * The name of the Local Network Gateway.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Local Network Gateway exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
