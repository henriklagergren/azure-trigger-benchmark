import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing API Management Gateway.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleService = azure.apimanagement.getService({
 *     name: "example-apim",
 *     resourceGroupName: "example-rg",
 * });
 * const exampleGateway = exampleService.then(exampleService => azure.apimanagement.getGateway({
 *     name: "example-api-gateway",
 *     apiManagementId: exampleService.id,
 * }));
 * ```
 */
export declare function getGateway(args: GetGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetGatewayResult>;
/**
 * A collection of arguments for invoking getGateway.
 */
export interface GetGatewayArgs {
    /**
     * The ID of the API Management Service in which the Gateway exists.
     */
    apiManagementId: string;
    /**
     * The name of the API Management Gateway.
     */
    name: string;
}
/**
 * A collection of values returned by getGateway.
 */
export interface GetGatewayResult {
    readonly apiManagementId: string;
    /**
     * The description of the API Management Gateway.
     */
    readonly description: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * A `locationData` block as documented below.
     */
    readonly locationDatas: outputs.apimanagement.GetGatewayLocationData[];
    /**
     * A canonical name for the geographic or physical location.
     */
    readonly name: string;
}
export declare function getGatewayOutput(args: GetGatewayOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGatewayResult>;
/**
 * A collection of arguments for invoking getGateway.
 */
export interface GetGatewayOutputArgs {
    /**
     * The ID of the API Management Service in which the Gateway exists.
     */
    apiManagementId: pulumi.Input<string>;
    /**
     * The name of the API Management Gateway.
     */
    name: pulumi.Input<string>;
}
