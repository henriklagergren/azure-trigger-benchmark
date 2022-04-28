import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Image.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const search = azure.compute.getImage({
 *     name: "search-api",
 *     resourceGroupName: "packerimages",
 * });
 * export const imageId = search.then(search => search.id);
 * ```
 */
export declare function getImage(args: GetImageArgs, opts?: pulumi.InvokeOptions): Promise<GetImageResult>;
/**
 * A collection of arguments for invoking getImage.
 */
export interface GetImageArgs {
    /**
     * The name of the Image.
     */
    name?: string;
    /**
     * Regex pattern of the image to match.
     */
    nameRegex?: string;
    /**
     * The Name of the Resource Group where this Image exists.
     */
    resourceGroupName: string;
    /**
     * By default when matching by regex, images are sorted by name in ascending order and the first match is chosen, to sort descending, set this flag.
     */
    sortDescending?: boolean;
}
/**
 * A collection of values returned by getImage.
 */
export interface GetImageResult {
    /**
     * a collection of `dataDisk` blocks as defined below.
     */
    readonly dataDisks: outputs.compute.GetImageDataDisk[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * the Azure Location where this Image exists.
     */
    readonly location: string;
    /**
     * the name of the Image.
     */
    readonly name?: string;
    readonly nameRegex?: string;
    /**
     * a `osDisk` block as defined below.
     */
    readonly osDisks: outputs.compute.GetImageOsDisk[];
    readonly resourceGroupName: string;
    readonly sortDescending?: boolean;
    /**
     * a mapping of tags to assigned to the resource.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * is zone resiliency enabled?
     */
    readonly zoneResilient: boolean;
}
export declare function getImageOutput(args: GetImageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetImageResult>;
/**
 * A collection of arguments for invoking getImage.
 */
export interface GetImageOutputArgs {
    /**
     * The name of the Image.
     */
    name?: pulumi.Input<string>;
    /**
     * Regex pattern of the image to match.
     */
    nameRegex?: pulumi.Input<string>;
    /**
     * The Name of the Resource Group where this Image exists.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * By default when matching by regex, images are sorted by name in ascending order and the first match is chosen, to sort descending, set this flag.
     */
    sortDescending?: pulumi.Input<boolean>;
}
