import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a LogToMetricAction Scheduled Query Rules resource within Azure Monitor.
 *
 * ## Import
 *
 * Scheduled Query Rule Log can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:monitoring/scheduledQueryRulesLog:ScheduledQueryRulesLog example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Insights/scheduledQueryRules/myrulename
 * ```
 */
export declare class ScheduledQueryRulesLog extends pulumi.CustomResource {
    /**
     * Get an existing ScheduledQueryRulesLog resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScheduledQueryRulesLogState, opts?: pulumi.CustomResourceOptions): ScheduledQueryRulesLog;
    /**
     * Returns true if the given object is an instance of ScheduledQueryRulesLog.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ScheduledQueryRulesLog;
    readonly authorizedResourceIds: pulumi.Output<string[] | undefined>;
    /**
     * A `criteria` block as defined below.
     */
    readonly criteria: pulumi.Output<outputs.monitoring.ScheduledQueryRulesLogCriteria>;
    /**
     * The resource uri over which log search query is to be run.
     */
    readonly dataSourceId: pulumi.Output<string>;
    /**
     * The description of the scheduled query rule.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Whether this scheduled query rule is enabled.  Default is `true`.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    readonly location: pulumi.Output<string>;
    /**
     * The name of the scheduled query rule. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the scheduled query rule instance.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a ScheduledQueryRulesLog resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScheduledQueryRulesLogArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ScheduledQueryRulesLog resources.
 */
export interface ScheduledQueryRulesLogState {
    authorizedResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A `criteria` block as defined below.
     */
    criteria?: pulumi.Input<inputs.monitoring.ScheduledQueryRulesLogCriteria>;
    /**
     * The resource uri over which log search query is to be run.
     */
    dataSourceId?: pulumi.Input<string>;
    /**
     * The description of the scheduled query rule.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether this scheduled query rule is enabled.  Default is `true`.
     */
    enabled?: pulumi.Input<boolean>;
    location?: pulumi.Input<string>;
    /**
     * The name of the scheduled query rule. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the scheduled query rule instance.
     */
    resourceGroupName?: pulumi.Input<string>;
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a ScheduledQueryRulesLog resource.
 */
export interface ScheduledQueryRulesLogArgs {
    authorizedResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A `criteria` block as defined below.
     */
    criteria: pulumi.Input<inputs.monitoring.ScheduledQueryRulesLogCriteria>;
    /**
     * The resource uri over which log search query is to be run.
     */
    dataSourceId: pulumi.Input<string>;
    /**
     * The description of the scheduled query rule.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether this scheduled query rule is enabled.  Default is `true`.
     */
    enabled?: pulumi.Input<boolean>;
    location?: pulumi.Input<string>;
    /**
     * The name of the scheduled query rule. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the scheduled query rule instance.
     */
    resourceGroupName: pulumi.Input<string>;
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
