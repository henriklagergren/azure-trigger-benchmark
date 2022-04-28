import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an AlertingAction Scheduled Query Rules resource within Azure Monitor.
 *
 * ## Import
 *
 * Scheduled Query Rule Alerts can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:monitoring/scheduledQueryRulesAlert:ScheduledQueryRulesAlert example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Insights/scheduledqueryrules/myrulename
 * ```
 */
export declare class ScheduledQueryRulesAlert extends pulumi.CustomResource {
    /**
     * Get an existing ScheduledQueryRulesAlert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScheduledQueryRulesAlertState, opts?: pulumi.CustomResourceOptions): ScheduledQueryRulesAlert;
    /**
     * Returns true if the given object is an instance of ScheduledQueryRulesAlert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ScheduledQueryRulesAlert;
    /**
     * An `action` block as defined below.
     */
    readonly action: pulumi.Output<outputs.monitoring.ScheduledQueryRulesAlertAction>;
    /**
     * List of Resource IDs referred into query.
     */
    readonly authorizedResourceIds: pulumi.Output<string[] | undefined>;
    /**
     * Should the alerts in this Metric Alert be auto resolved? Defaults to `false`.
     * > **NOTE** `autoMitigationEnabled` and `throttling` are mutually exclusive and cannot both be set.
     */
    readonly autoMitigationEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The resource URI over which log search query is to be run.
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
    /**
     * Frequency (in minutes) at which rule condition should be evaluated.  Values must be between 5 and 1440 (inclusive).
     */
    readonly frequency: pulumi.Output<number>;
    readonly location: pulumi.Output<string>;
    /**
     * The name of the scheduled query rule. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Log search query.
     */
    readonly query: pulumi.Output<string>;
    readonly queryType: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group in which to create the scheduled query rule instance.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Severity of the alert. Possible values include: 0, 1, 2, 3, or 4.
     */
    readonly severity: pulumi.Output<number | undefined>;
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Time (in minutes) for which Alerts should be throttled or suppressed.  Values must be between 0 and 10000 (inclusive).
     */
    readonly throttling: pulumi.Output<number | undefined>;
    /**
     * Time window for which data needs to be fetched for query (must be greater than or equal to `frequency`).  Values must be between 5 and 2880 (inclusive).
     */
    readonly timeWindow: pulumi.Output<number>;
    /**
     * The condition that results in the alert rule being run.
     */
    readonly trigger: pulumi.Output<outputs.monitoring.ScheduledQueryRulesAlertTrigger>;
    /**
     * Create a ScheduledQueryRulesAlert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScheduledQueryRulesAlertArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ScheduledQueryRulesAlert resources.
 */
export interface ScheduledQueryRulesAlertState {
    /**
     * An `action` block as defined below.
     */
    action?: pulumi.Input<inputs.monitoring.ScheduledQueryRulesAlertAction>;
    /**
     * List of Resource IDs referred into query.
     */
    authorizedResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Should the alerts in this Metric Alert be auto resolved? Defaults to `false`.
     * > **NOTE** `autoMitigationEnabled` and `throttling` are mutually exclusive and cannot both be set.
     */
    autoMitigationEnabled?: pulumi.Input<boolean>;
    /**
     * The resource URI over which log search query is to be run.
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
    /**
     * Frequency (in minutes) at which rule condition should be evaluated.  Values must be between 5 and 1440 (inclusive).
     */
    frequency?: pulumi.Input<number>;
    location?: pulumi.Input<string>;
    /**
     * The name of the scheduled query rule. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Log search query.
     */
    query?: pulumi.Input<string>;
    queryType?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the scheduled query rule instance.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Severity of the alert. Possible values include: 0, 1, 2, 3, or 4.
     */
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Time (in minutes) for which Alerts should be throttled or suppressed.  Values must be between 0 and 10000 (inclusive).
     */
    throttling?: pulumi.Input<number>;
    /**
     * Time window for which data needs to be fetched for query (must be greater than or equal to `frequency`).  Values must be between 5 and 2880 (inclusive).
     */
    timeWindow?: pulumi.Input<number>;
    /**
     * The condition that results in the alert rule being run.
     */
    trigger?: pulumi.Input<inputs.monitoring.ScheduledQueryRulesAlertTrigger>;
}
/**
 * The set of arguments for constructing a ScheduledQueryRulesAlert resource.
 */
export interface ScheduledQueryRulesAlertArgs {
    /**
     * An `action` block as defined below.
     */
    action: pulumi.Input<inputs.monitoring.ScheduledQueryRulesAlertAction>;
    /**
     * List of Resource IDs referred into query.
     */
    authorizedResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Should the alerts in this Metric Alert be auto resolved? Defaults to `false`.
     * > **NOTE** `autoMitigationEnabled` and `throttling` are mutually exclusive and cannot both be set.
     */
    autoMitigationEnabled?: pulumi.Input<boolean>;
    /**
     * The resource URI over which log search query is to be run.
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
    /**
     * Frequency (in minutes) at which rule condition should be evaluated.  Values must be between 5 and 1440 (inclusive).
     */
    frequency: pulumi.Input<number>;
    location?: pulumi.Input<string>;
    /**
     * The name of the scheduled query rule. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Log search query.
     */
    query: pulumi.Input<string>;
    queryType?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the scheduled query rule instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Severity of the alert. Possible values include: 0, 1, 2, 3, or 4.
     */
    severity?: pulumi.Input<number>;
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Time (in minutes) for which Alerts should be throttled or suppressed.  Values must be between 0 and 10000 (inclusive).
     */
    throttling?: pulumi.Input<number>;
    /**
     * Time window for which data needs to be fetched for query (must be greater than or equal to `frequency`).  Values must be between 5 and 2880 (inclusive).
     */
    timeWindow: pulumi.Input<number>;
    /**
     * The condition that results in the alert rule being run.
     */
    trigger: pulumi.Input<inputs.monitoring.ScheduledQueryRulesAlertTrigger>;
}
