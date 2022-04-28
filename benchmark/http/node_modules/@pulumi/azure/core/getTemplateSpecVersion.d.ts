import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Template Spec Version.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.core.getTemplateSpecVersion({
 *     name: "exampleTemplateSpec",
 *     resourceGroupName: "MyResourceGroup",
 *     version: "v1.0.4",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getTemplateSpecVersion(args: GetTemplateSpecVersionArgs, opts?: pulumi.InvokeOptions): Promise<GetTemplateSpecVersionResult>;
/**
 * A collection of arguments for invoking getTemplateSpecVersion.
 */
export interface GetTemplateSpecVersionArgs {
    /**
     * The name of this Template Spec.
     */
    name: string;
    /**
     * The name of the Resource Group where the Template Spec exists.
     */
    resourceGroupName: string;
    /**
     * The Version Name of the Template Spec.
     */
    version: string;
}
/**
 * A collection of values returned by getTemplateSpecVersion.
 */
export interface GetTemplateSpecVersionResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags assigned to the Template.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The ARM Template body of the Template Spec Version.
     */
    readonly templateBody: string;
    readonly version: string;
}
export declare function getTemplateSpecVersionOutput(args: GetTemplateSpecVersionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTemplateSpecVersionResult>;
/**
 * A collection of arguments for invoking getTemplateSpecVersion.
 */
export interface GetTemplateSpecVersionOutputArgs {
    /**
     * The name of this Template Spec.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Template Spec exists.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Version Name of the Template Spec.
     */
    version: pulumi.Input<string>;
}
