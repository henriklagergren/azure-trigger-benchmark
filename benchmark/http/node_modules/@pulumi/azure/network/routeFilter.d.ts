import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Route Filter.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.network.RouteFilter("example", {
 *     location: "East US",
 *     resourceGroupName: "example",
 *     rule: {
 *         access: "Allow",
 *         communities: ["12076:52004"],
 *         name: "rule",
 *         ruleType: "Community",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Route Filters can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/routeFilter:RouteFilter example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/routeFilters/routeFilter1
 * ```
 */
export declare class RouteFilter extends pulumi.CustomResource {
    /**
     * Get an existing RouteFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouteFilterState, opts?: pulumi.CustomResourceOptions): RouteFilter;
    /**
     * Returns true if the given object is an instance of RouteFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RouteFilter;
    /**
     * The Azure Region where the Route Filter should exist. Changing this forces a new Route Filter to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The Name which should be used for this Route Filter.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Route Filter should exist. Changing this forces a new Route Filter to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `rules` block as defined below.
     */
    readonly rule: pulumi.Output<outputs.network.RouteFilterRule>;
    /**
     * A mapping of tags which should be assigned to the Route Filter.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a RouteFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouteFilterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RouteFilter resources.
 */
export interface RouteFilterState {
    /**
     * The Azure Region where the Route Filter should exist. Changing this forces a new Route Filter to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The Name which should be used for this Route Filter.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Route Filter should exist. Changing this forces a new Route Filter to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `rules` block as defined below.
     */
    rule?: pulumi.Input<inputs.network.RouteFilterRule>;
    /**
     * A mapping of tags which should be assigned to the Route Filter.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a RouteFilter resource.
 */
export interface RouteFilterArgs {
    /**
     * The Azure Region where the Route Filter should exist. Changing this forces a new Route Filter to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The Name which should be used for this Route Filter.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Route Filter should exist. Changing this forces a new Route Filter to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `rules` block as defined below.
     */
    rule?: pulumi.Input<inputs.network.RouteFilterRule>;
    /**
     * A mapping of tags which should be assigned to the Route Filter.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
