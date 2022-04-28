import * as pulumi from "@pulumi/pulumi";
/**
 * Uses this data source to access information about an existing Managed Application Definition.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.managedapplication.getDefinition({
 *     name: "example-managedappdef",
 *     resourceGroupName: "example-resources",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getDefinition(args: GetDefinitionArgs, opts?: pulumi.InvokeOptions): Promise<GetDefinitionResult>;
/**
 * A collection of arguments for invoking getDefinition.
 */
export interface GetDefinitionArgs {
    /**
     * Specifies the name of the Managed Application Definition.
     */
    name: string;
    /**
     * Specifies the name of the Resource Group where this Managed Application Definition exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getDefinition.
 */
export interface GetDefinitionResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
}
export declare function getDefinitionOutput(args: GetDefinitionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDefinitionResult>;
/**
 * A collection of arguments for invoking getDefinition.
 */
export interface GetDefinitionOutputArgs {
    /**
     * Specifies the name of the Managed Application Definition.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group where this Managed Application Definition exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
