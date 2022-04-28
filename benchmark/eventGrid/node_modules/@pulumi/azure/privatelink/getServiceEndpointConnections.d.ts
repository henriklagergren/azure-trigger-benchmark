import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access endpoint connection information about an existing Private Link Service.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.privatelink.getServiceEndpointConnections({
 *     serviceId: azurerm_private_link_service.example.id,
 *     resourceGroupName: azurerm_resource_group.example.name,
 * });
 * export const privateEndpointStatus = example.then(example => example.privateEndpointConnections?[0]?.status);
 * ```
 */
export declare function getServiceEndpointConnections(args: GetServiceEndpointConnectionsArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceEndpointConnectionsResult>;
/**
 * A collection of arguments for invoking getServiceEndpointConnections.
 */
export interface GetServiceEndpointConnectionsArgs {
    /**
     * The name of the resource group in which the private link service resides.
     */
    resourceGroupName: string;
    /**
     * The resource ID of the private link service.
     */
    serviceId: string;
}
/**
 * A collection of values returned by getServiceEndpointConnections.
 */
export interface GetServiceEndpointConnectionsResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly location: string;
    readonly privateEndpointConnections: outputs.privatelink.GetServiceEndpointConnectionsPrivateEndpointConnection[];
    readonly resourceGroupName: string;
    readonly serviceId: string;
    /**
     * The name of the private link service.
     */
    readonly serviceName: string;
}
export declare function getServiceEndpointConnectionsOutput(args: GetServiceEndpointConnectionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceEndpointConnectionsResult>;
/**
 * A collection of arguments for invoking getServiceEndpointConnections.
 */
export interface GetServiceEndpointConnectionsOutputArgs {
    /**
     * The name of the resource group in which the private link service resides.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource ID of the private link service.
     */
    serviceId: pulumi.Input<string>;
}
