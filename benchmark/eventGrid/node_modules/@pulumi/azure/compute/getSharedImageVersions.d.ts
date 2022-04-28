import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about existing Versions of a Shared Image within a Shared Image Gallery.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = pulumi.output(azure.compute.getSharedImageVersions({
 *     galleryName: "my-image-gallery",
 *     imageName: "my-image",
 *     resourceGroupName: "example-resources",
 * }));
 * ```
 */
export declare function getSharedImageVersions(args: GetSharedImageVersionsArgs, opts?: pulumi.InvokeOptions): Promise<GetSharedImageVersionsResult>;
/**
 * A collection of arguments for invoking getSharedImageVersions.
 */
export interface GetSharedImageVersionsArgs {
    /**
     * The name of the Shared Image in which the Shared Image exists.
     */
    galleryName: string;
    /**
     * The name of the Shared Image in which this Version exists.
     */
    imageName: string;
    /**
     * The name of the Resource Group in which the Shared Image Gallery exists.
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
 * A collection of values returned by getSharedImageVersions.
 */
export interface GetSharedImageVersionsResult {
    readonly galleryName: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly imageName: string;
    /**
     * An `images` block as defined below:
     */
    readonly images: outputs.compute.GetSharedImageVersionsImage[];
    readonly resourceGroupName: string;
    readonly tagsFilter?: {
        [key: string]: string;
    };
}
export declare function getSharedImageVersionsOutput(args: GetSharedImageVersionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSharedImageVersionsResult>;
/**
 * A collection of arguments for invoking getSharedImageVersions.
 */
export interface GetSharedImageVersionsOutputArgs {
    /**
     * The name of the Shared Image in which the Shared Image exists.
     */
    galleryName: pulumi.Input<string>;
    /**
     * The name of the Shared Image in which this Version exists.
     */
    imageName: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Shared Image Gallery exists.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to filter the list of images against.
     */
    tagsFilter?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
