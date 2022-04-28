import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Synapse Workspace.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.synapse.getWorkspace({
 *     name: "existing",
 *     resourceGroupName: "example-resource-group",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getWorkspace(args: GetWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceResult>;
/**
 * A collection of arguments for invoking getWorkspace.
 */
export interface GetWorkspaceArgs {
    /**
     * The name of this Synapse Workspace.
     */
    name: string;
    /**
     * The name of the Resource Group where the Synapse Workspace exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getWorkspace.
 */
export interface GetWorkspaceResult {
    /**
     * A list of Connectivity endpoints for this Synapse Workspace.
     */
    readonly connectivityEndpoints: {
        [key: string]: string;
    };
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * An `identity` block as defined below, which contains the Managed Service Identity information for this Synapse Workspace.
     */
    readonly identities: outputs.synapse.GetWorkspaceIdentity[];
    /**
     * The Azure location where the Synapse Workspace exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: {
        [key: string]: string;
    };
}
export declare function getWorkspaceOutput(args: GetWorkspaceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceResult>;
/**
 * A collection of arguments for invoking getWorkspace.
 */
export interface GetWorkspaceOutputArgs {
    /**
     * The name of this Synapse Workspace.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Synapse Workspace exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
