import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Shared Image Gallery.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = pulumi.output(azure.compute.getSharedImageGallery({
 *     name: "my-image-gallery",
 *     resourceGroupName: "example-resources",
 * }));
 * ```
 */
export declare function getSharedImageGallery(args: GetSharedImageGalleryArgs, opts?: pulumi.InvokeOptions): Promise<GetSharedImageGalleryResult>;
/**
 * A collection of arguments for invoking getSharedImageGallery.
 */
export interface GetSharedImageGalleryArgs {
    /**
     * The name of the Shared Image Gallery.
     */
    name: string;
    /**
     * The name of the Resource Group in which the Shared Image Gallery exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getSharedImageGallery.
 */
export interface GetSharedImageGalleryResult {
    /**
     * A description for the Shared Image Gallery.
     */
    readonly description: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags which are assigned to the Shared Image Gallery.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The unique name assigned to the Shared Image Gallery.
     */
    readonly uniqueName: string;
}
export declare function getSharedImageGalleryOutput(args: GetSharedImageGalleryOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSharedImageGalleryResult>;
/**
 * A collection of arguments for invoking getSharedImageGallery.
 */
export interface GetSharedImageGalleryOutputArgs {
    /**
     * The name of the Shared Image Gallery.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Shared Image Gallery exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
