import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access the ID of a specified Traffic Manager Geographical Location within the Geographical Hierarchy.
 *
 * ## Example Usage
 * ### World)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.network.getTrafficManager({
 *     name: "World",
 * });
 * export const locationCode = example.then(example => example.id);
 * ```
 */
/** @deprecated azure.trafficmanager.getGeographicalLocation has been deprecated in favor of azure.network.getTrafficManager */
export declare function getGeographicalLocation(args: GetGeographicalLocationArgs, opts?: pulumi.InvokeOptions): Promise<GetGeographicalLocationResult>;
/**
 * A collection of arguments for invoking getGeographicalLocation.
 */
export interface GetGeographicalLocationArgs {
    /**
     * Specifies the name of the Location, for example `World`, `Europe` or `Germany`.
     */
    name: string;
}
/**
 * A collection of values returned by getGeographicalLocation.
 */
export interface GetGeographicalLocationResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
}
export declare function getGeographicalLocationOutput(args: GetGeographicalLocationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGeographicalLocationResult>;
/**
 * A collection of arguments for invoking getGeographicalLocation.
 */
export interface GetGeographicalLocationOutputArgs {
    /**
     * Specifies the name of the Location, for example `World`, `Europe` or `Germany`.
     */
    name: pulumi.Input<string>;
}
