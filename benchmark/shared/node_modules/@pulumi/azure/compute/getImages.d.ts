import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about existing Images within a Resource Group.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = pulumi.output(azure.compute.getImages({
 *     resourceGroupName: "example-resources",
 * }));
 * ```
 */
export declare function getImages(args: GetImagesArgs, opts?: pulumi.InvokeOptions): Promise<GetImagesResult>;
/**
 * A collection of arguments for invoking getImages.
 */
export interface GetImagesArgs {
    /**
     * The name of the Resource Group in which the Image exists.
     */
    resourceGroupName: string;
    /**
     * A mapping of tags to filter the list of images against.
     */
    tagsFilter?: {
        [key: string]: string;
    };
}
/**
 * A collection of values returned by getImages.
 */
export interface GetImagesResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * One or more `images` blocks as defined below:
     */
    readonly images: outputs.compute.GetImagesImage[];
    readonly resourceGroupName: string;
    readonly tagsFilter?: {
        [key: string]: string;
    };
}
export declare function getImagesOutput(args: GetImagesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetImagesResult>;
/**
 * A collection of arguments for invoking getImages.
 */
export interface GetImagesOutputArgs {
    /**
     * The name of the Resource Group in which the Image exists.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to filter the list of images against.
     */
    tagsFilter?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
