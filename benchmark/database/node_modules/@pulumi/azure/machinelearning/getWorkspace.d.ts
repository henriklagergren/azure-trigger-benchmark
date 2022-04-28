import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Machine Learning Workspace.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const existing = azure.machinelearning.getWorkspace({
 *     name: "example-workspace",
 *     resourceGroupName: "example-resources",
 * });
 * export const id = azurerm_machine_learning_workspace.existing.id;
 * ```
 */
export declare function getWorkspace(args: GetWorkspaceArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceResult>;
/**
 * A collection of arguments for invoking getWorkspace.
 */
export interface GetWorkspaceArgs {
    /**
     * The name of the Machine Learning Workspace exists.
     */
    name: string;
    /**
     * The name of the Resource Group where the Machine Learning Workspace exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getWorkspace.
 */
export interface GetWorkspaceResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * An `identity` block as defined below.
     */
    readonly identities: outputs.machinelearning.GetWorkspaceIdentity[];
    /**
     * The location where the Machine Learning Workspace exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags assigned to the Machine Learning Workspace.
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
     * The name of the Machine Learning Workspace exists.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Machine Learning Workspace exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
