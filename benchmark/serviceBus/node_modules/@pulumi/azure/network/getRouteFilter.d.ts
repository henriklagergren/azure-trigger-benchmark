import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Route Filter.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.network.getRouteFilter({
 *     name: "existing",
 *     resourceGroupName: "existing",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getRouteFilter(args: GetRouteFilterArgs, opts?: pulumi.InvokeOptions): Promise<GetRouteFilterResult>;
/**
 * A collection of arguments for invoking getRouteFilter.
 */
export interface GetRouteFilterArgs {
    /**
     * The Name of this Route Filter.
     */
    name: string;
    /**
     * The name of the Resource Group where the Route Filter exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getRouteFilter.
 */
export interface GetRouteFilterResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The Azure Region where the Route Filter exists.
     */
    readonly location: string;
    /**
     * The Name of Route Filter Rule
     */
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * A `rule` block as defined below.
     */
    readonly rules: outputs.network.GetRouteFilterRule[];
    /**
     * A mapping of tags assigned to the Route Filter.
     */
    readonly tags: {
        [key: string]: string;
    };
}
export declare function getRouteFilterOutput(args: GetRouteFilterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRouteFilterResult>;
/**
 * A collection of arguments for invoking getRouteFilter.
 */
export interface GetRouteFilterOutputArgs {
    /**
     * The Name of this Route Filter.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Route Filter exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
