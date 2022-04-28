import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information on an existing Databricks Workspace private endpoint connection state.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.databricks.getWorkspacePrivateEndpointConnection({
 *     workspaceId: azurerm_databricks_workspace.example.id,
 *     privateEndpointId: azurerm_private_endpoint.example.id,
 * });
 * export const databricksWorkspacePrivateEndpointConnectionStatus = example.then(example => example.connections?[0]?.status);
 * ```
 */
export declare function getWorkspacePrivateEndpointConnection(args: GetWorkspacePrivateEndpointConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspacePrivateEndpointConnectionResult>;
/**
 * A collection of arguments for invoking getWorkspacePrivateEndpointConnection.
 */
export interface GetWorkspacePrivateEndpointConnectionArgs {
    /**
     * The resource ID of the Private Endpoint.
     */
    privateEndpointId: string;
    /**
     * The resource ID of the Databricks Workspace.
     */
    workspaceId: string;
}
/**
 * A collection of values returned by getWorkspacePrivateEndpointConnection.
 */
export interface GetWorkspacePrivateEndpointConnectionResult {
    /**
     * A `connections` block as documented below.
     */
    readonly connections: outputs.databricks.GetWorkspacePrivateEndpointConnectionConnection[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The resource ID of the Private Endpoint.
     */
    readonly privateEndpointId: string;
    /**
     * The resource ID of the Databricks Workspace.
     */
    readonly workspaceId: string;
}
export declare function getWorkspacePrivateEndpointConnectionOutput(args: GetWorkspacePrivateEndpointConnectionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspacePrivateEndpointConnectionResult>;
/**
 * A collection of arguments for invoking getWorkspacePrivateEndpointConnection.
 */
export interface GetWorkspacePrivateEndpointConnectionOutputArgs {
    /**
     * The resource ID of the Private Endpoint.
     */
    privateEndpointId: pulumi.Input<string>;
    /**
     * The resource ID of the Databricks Workspace.
     */
    workspaceId: pulumi.Input<string>;
}
