import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure Front Door Rules Engine configuration and rules.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleRulesEngine = new azure.frontdoor.RulesEngine("exampleRulesEngine", {
 *     frontdoorName: azurerm_frontdoor.example.name,
 *     resourceGroupName: azurerm_frontdoor.example.resource_group_name,
 *     rules: [
 *         {
 *             name: "debuggingoutput",
 *             priority: 1,
 *             action: {
 *                 responseHeaders: [{
 *                     headerActionType: "Append",
 *                     headerName: "X-TEST-HEADER",
 *                     value: "Append Header Rule",
 *                 }],
 *             },
 *         },
 *         {
 *             name: "overwriteorigin",
 *             priority: 2,
 *             matchConditions: [{
 *                 variable: "RequestMethod",
 *                 operator: "Equal",
 *                 values: [
 *                     "GET",
 *                     "POST",
 *                 ],
 *             }],
 *             action: {
 *                 responseHeaders: [
 *                     {
 *                         headerActionType: "Overwrite",
 *                         headerName: "Access-Control-Allow-Origin",
 *                         value: "*",
 *                     },
 *                     {
 *                         headerActionType: "Overwrite",
 *                         headerName: "Access-Control-Allow-Credentials",
 *                         value: "true",
 *                     },
 *                 ],
 *             },
 *         },
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * Azure Front Door Rules Engine's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:frontdoor/rulesEngine:RulesEngine example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resGroup1/providers/Microsoft.Network/frontdoors/frontdoor1/rulesengines/rule1
 * ```
 */
export declare class RulesEngine extends pulumi.CustomResource {
    /**
     * Get an existing RulesEngine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RulesEngineState, opts?: pulumi.CustomResourceOptions): RulesEngine;
    /**
     * Returns true if the given object is an instance of RulesEngine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RulesEngine;
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * The name of the Front Door instance. Changing this forces a new resource to be created.
     */
    readonly frontdoorName: pulumi.Output<string>;
    readonly location: pulumi.Output<string>;
    /**
     * The name of the Rules engine configuration. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `rule` block as defined below.
     */
    readonly rules: pulumi.Output<outputs.frontdoor.RulesEngineRule[] | undefined>;
    /**
     * Create a RulesEngine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RulesEngineArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RulesEngine resources.
 */
export interface RulesEngineState {
    enabled?: pulumi.Input<boolean>;
    /**
     * The name of the Front Door instance. Changing this forces a new resource to be created.
     */
    frontdoorName?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    /**
     * The name of the Rules engine configuration. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `rule` block as defined below.
     */
    rules?: pulumi.Input<pulumi.Input<inputs.frontdoor.RulesEngineRule>[]>;
}
/**
 * The set of arguments for constructing a RulesEngine resource.
 */
export interface RulesEngineArgs {
    enabled?: pulumi.Input<boolean>;
    /**
     * The name of the Front Door instance. Changing this forces a new resource to be created.
     */
    frontdoorName: pulumi.Input<string>;
    /**
     * The name of the Rules engine configuration. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `rule` block as defined below.
     */
    rules?: pulumi.Input<pulumi.Input<inputs.frontdoor.RulesEngineRule>[]>;
}
