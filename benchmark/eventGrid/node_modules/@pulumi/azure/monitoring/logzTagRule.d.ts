import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a logz Tag Rule.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleLogzMonitor = new azure.monitoring.LogzMonitor("exampleLogzMonitor", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     plan: {
 *         billingCycle: "Monthly",
 *         effectiveDate: "2022-06-06T00:00:00Z",
 *         planId: "100gb14days",
 *         usageType: "Committed",
 *     },
 *     user: {
 *         email: "user@example.com",
 *         firstName: "Example",
 *         lastName: "User",
 *         phoneNumber: "+12313803556",
 *     },
 * });
 * const exampleLogzTagRule = new azure.monitoring.LogzTagRule("exampleLogzTagRule", {
 *     logzMonitorId: exampleLogzMonitor.id,
 *     tagFilters: [
 *         {
 *             name: "name1",
 *             action: "Include",
 *             value: "value1",
 *         },
 *         {
 *             name: "name2",
 *             action: "Exclude",
 *             value: "value2",
 *         },
 *     ],
 *     sendAadLogs: true,
 *     sendActivityLogs: true,
 *     sendSubscriptionLogs: true,
 * });
 * ```
 *
 * ## Import
 *
 * logz Tag Rules can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:monitoring/logzTagRule:LogzTagRule example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Logz/monitors/monitor1/tagRules/ruleSet1
 * ```
 */
export declare class LogzTagRule extends pulumi.CustomResource {
    /**
     * Get an existing LogzTagRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogzTagRuleState, opts?: pulumi.CustomResourceOptions): LogzTagRule;
    /**
     * Returns true if the given object is an instance of LogzTagRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LogzTagRule;
    /**
     * The ID of the Logz Monitor. Changing this forces a new logz Tag Rule to be created.
     */
    readonly logzMonitorId: pulumi.Output<string>;
    /**
     * Whether AAD logs should be sent to the Monitor resource?
     */
    readonly sendAadLogs: pulumi.Output<boolean | undefined>;
    /**
     * Whether activity logs from Azure resources should be sent to the Monitor resource?
     */
    readonly sendActivityLogs: pulumi.Output<boolean | undefined>;
    /**
     * Whether subscription logs should be sent to the Monitor resource?
     */
    readonly sendSubscriptionLogs: pulumi.Output<boolean | undefined>;
    /**
     * One or more (up to 10) `tagFilter` blocks as defined below.
     */
    readonly tagFilters: pulumi.Output<outputs.monitoring.LogzTagRuleTagFilter[] | undefined>;
    /**
     * Create a LogzTagRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LogzTagRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LogzTagRule resources.
 */
export interface LogzTagRuleState {
    /**
     * The ID of the Logz Monitor. Changing this forces a new logz Tag Rule to be created.
     */
    logzMonitorId?: pulumi.Input<string>;
    /**
     * Whether AAD logs should be sent to the Monitor resource?
     */
    sendAadLogs?: pulumi.Input<boolean>;
    /**
     * Whether activity logs from Azure resources should be sent to the Monitor resource?
     */
    sendActivityLogs?: pulumi.Input<boolean>;
    /**
     * Whether subscription logs should be sent to the Monitor resource?
     */
    sendSubscriptionLogs?: pulumi.Input<boolean>;
    /**
     * One or more (up to 10) `tagFilter` blocks as defined below.
     */
    tagFilters?: pulumi.Input<pulumi.Input<inputs.monitoring.LogzTagRuleTagFilter>[]>;
}
/**
 * The set of arguments for constructing a LogzTagRule resource.
 */
export interface LogzTagRuleArgs {
    /**
     * The ID of the Logz Monitor. Changing this forces a new logz Tag Rule to be created.
     */
    logzMonitorId: pulumi.Input<string>;
    /**
     * Whether AAD logs should be sent to the Monitor resource?
     */
    sendAadLogs?: pulumi.Input<boolean>;
    /**
     * Whether activity logs from Azure resources should be sent to the Monitor resource?
     */
    sendActivityLogs?: pulumi.Input<boolean>;
    /**
     * Whether subscription logs should be sent to the Monitor resource?
     */
    sendSubscriptionLogs?: pulumi.Input<boolean>;
    /**
     * One or more (up to 10) `tagFilter` blocks as defined below.
     */
    tagFilters?: pulumi.Input<pulumi.Input<inputs.monitoring.LogzTagRuleTagFilter>[]>;
}
