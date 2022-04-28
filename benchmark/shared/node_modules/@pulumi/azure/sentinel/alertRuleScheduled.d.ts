import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Sentinel Scheduled Alert Rule.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAnalyticsWorkspace = new azure.operationalinsights.AnalyticsWorkspace("exampleAnalyticsWorkspace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "pergb2018",
 * });
 * const exampleAnalyticsSolution = new azure.operationalinsights.AnalyticsSolution("exampleAnalyticsSolution", {
 *     solutionName: "SecurityInsights",
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     workspaceResourceId: exampleAnalyticsWorkspace.id,
 *     workspaceName: exampleAnalyticsWorkspace.name,
 *     plan: {
 *         publisher: "Microsoft",
 *         product: "OMSGallery/SecurityInsights",
 *     },
 * });
 * const exampleAlertRuleScheduled = new azure.sentinel.AlertRuleScheduled("exampleAlertRuleScheduled", {
 *     logAnalyticsWorkspaceId: exampleAnalyticsSolution.workspaceResourceId,
 *     displayName: "example",
 *     severity: "High",
 *     query: `AzureActivity |
 *   where OperationName == "Create or Update Virtual Machine" or OperationName =="Create Deployment" |
 *   where ActivityStatus == "Succeeded" |
 *   make-series dcount(ResourceId) default=0 on EventSubmissionTimestamp in range(ago(7d), now(), 1d) by Caller
 * `,
 * });
 * ```
 *
 * ## Import
 *
 * Sentinel Scheduled Alert Rules can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:sentinel/alertRuleScheduled:AlertRuleScheduled example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.OperationalInsights/workspaces/workspace1/providers/Microsoft.SecurityInsights/alertRules/rule1
 * ```
 */
export declare class AlertRuleScheduled extends pulumi.CustomResource {
    /**
     * Get an existing AlertRuleScheduled resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlertRuleScheduledState, opts?: pulumi.CustomResourceOptions): AlertRuleScheduled;
    /**
     * Returns true if the given object is an instance of AlertRuleScheduled.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AlertRuleScheduled;
    /**
     * The GUID of the alert rule template which is used for this Sentinel Scheduled Alert Rule. Changing this forces a new Sentinel Scheduled Alert Rule to be created.
     */
    readonly alertRuleTemplateGuid: pulumi.Output<string | undefined>;
    /**
     * The description of this Sentinel Scheduled Alert Rule.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The friendly name of this Sentinel Scheduled Alert Rule.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * Should the Sentinel Scheduled Alert Rule be enabled? Defaults to `true`.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * A `eventGrouping` block as defined below.
     */
    readonly eventGrouping: pulumi.Output<outputs.sentinel.AlertRuleScheduledEventGrouping | undefined>;
    /**
     * A `incidentConfiguration` block as defined below.
     */
    readonly incidentConfiguration: pulumi.Output<outputs.sentinel.AlertRuleScheduledIncidentConfiguration>;
    /**
     * The ID of the Log Analytics Workspace this Sentinel Scheduled Alert Rule belongs to. Changing this forces a new Sentinel Scheduled Alert Rule to be created.
     */
    readonly logAnalyticsWorkspaceId: pulumi.Output<string>;
    /**
     * The name which should be used for this Sentinel Scheduled Alert Rule. Changing this forces a new Sentinel Scheduled Alert Rule to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The query of this Sentinel Scheduled Alert Rule.
     */
    readonly query: pulumi.Output<string>;
    /**
     * The ISO 8601 timespan duration between two consecutive queries. Defaults to `PT5H`.
     */
    readonly queryFrequency: pulumi.Output<string | undefined>;
    /**
     * The ISO 8601 timespan duration, which determine the time period of the data covered by the query. For example, it can query the past 10 minutes of data, or the past 6 hours of data. Defaults to `PT5H`.
     */
    readonly queryPeriod: pulumi.Output<string | undefined>;
    /**
     * The alert severity of this Sentinel Scheduled Alert Rule. Possible values are `High`, `Medium`, `Low` and `Informational`.
     */
    readonly severity: pulumi.Output<string>;
    /**
     * If `suppressionEnabled` is `true`, this is ISO 8601 timespan duration, which specifies the amount of time the query should stop running after alert is generated. Defaults to `PT5H`.
     */
    readonly suppressionDuration: pulumi.Output<string | undefined>;
    /**
     * Should the Sentinel Scheduled Alert Rulea stop running query after alert is generated? Defaults to `false`.
     */
    readonly suppressionEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A list of categories of attacks by which to classify the rule. Possible values are `Collection`, `CommandAndControl`, `CredentialAccess`, `DefenseEvasion`, `Discovery`, `Execution`, `Exfiltration`, `Impact`, `InitialAccess`, `LateralMovement`, `Persistence` and `PrivilegeEscalation`.
     */
    readonly tactics: pulumi.Output<string[] | undefined>;
    /**
     * The alert trigger operator, combined with `triggerThreshold`, setting alert threshold of this Sentinel Scheduled Alert Rule. Possible values are `Equal`, `GreaterThan`, `LessThan`, `NotEqual`.
     */
    readonly triggerOperator: pulumi.Output<string | undefined>;
    /**
     * The baseline number of query results generated, combined with `triggerOperator`, setting alert threshold of this Sentinel Scheduled Alert Rule.
     */
    readonly triggerThreshold: pulumi.Output<number | undefined>;
    /**
     * Create a AlertRuleScheduled resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertRuleScheduledArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AlertRuleScheduled resources.
 */
export interface AlertRuleScheduledState {
    /**
     * The GUID of the alert rule template which is used for this Sentinel Scheduled Alert Rule. Changing this forces a new Sentinel Scheduled Alert Rule to be created.
     */
    alertRuleTemplateGuid?: pulumi.Input<string>;
    /**
     * The description of this Sentinel Scheduled Alert Rule.
     */
    description?: pulumi.Input<string>;
    /**
     * The friendly name of this Sentinel Scheduled Alert Rule.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Should the Sentinel Scheduled Alert Rule be enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * A `eventGrouping` block as defined below.
     */
    eventGrouping?: pulumi.Input<inputs.sentinel.AlertRuleScheduledEventGrouping>;
    /**
     * A `incidentConfiguration` block as defined below.
     */
    incidentConfiguration?: pulumi.Input<inputs.sentinel.AlertRuleScheduledIncidentConfiguration>;
    /**
     * The ID of the Log Analytics Workspace this Sentinel Scheduled Alert Rule belongs to. Changing this forces a new Sentinel Scheduled Alert Rule to be created.
     */
    logAnalyticsWorkspaceId?: pulumi.Input<string>;
    /**
     * The name which should be used for this Sentinel Scheduled Alert Rule. Changing this forces a new Sentinel Scheduled Alert Rule to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The query of this Sentinel Scheduled Alert Rule.
     */
    query?: pulumi.Input<string>;
    /**
     * The ISO 8601 timespan duration between two consecutive queries. Defaults to `PT5H`.
     */
    queryFrequency?: pulumi.Input<string>;
    /**
     * The ISO 8601 timespan duration, which determine the time period of the data covered by the query. For example, it can query the past 10 minutes of data, or the past 6 hours of data. Defaults to `PT5H`.
     */
    queryPeriod?: pulumi.Input<string>;
    /**
     * The alert severity of this Sentinel Scheduled Alert Rule. Possible values are `High`, `Medium`, `Low` and `Informational`.
     */
    severity?: pulumi.Input<string>;
    /**
     * If `suppressionEnabled` is `true`, this is ISO 8601 timespan duration, which specifies the amount of time the query should stop running after alert is generated. Defaults to `PT5H`.
     */
    suppressionDuration?: pulumi.Input<string>;
    /**
     * Should the Sentinel Scheduled Alert Rulea stop running query after alert is generated? Defaults to `false`.
     */
    suppressionEnabled?: pulumi.Input<boolean>;
    /**
     * A list of categories of attacks by which to classify the rule. Possible values are `Collection`, `CommandAndControl`, `CredentialAccess`, `DefenseEvasion`, `Discovery`, `Execution`, `Exfiltration`, `Impact`, `InitialAccess`, `LateralMovement`, `Persistence` and `PrivilegeEscalation`.
     */
    tactics?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The alert trigger operator, combined with `triggerThreshold`, setting alert threshold of this Sentinel Scheduled Alert Rule. Possible values are `Equal`, `GreaterThan`, `LessThan`, `NotEqual`.
     */
    triggerOperator?: pulumi.Input<string>;
    /**
     * The baseline number of query results generated, combined with `triggerOperator`, setting alert threshold of this Sentinel Scheduled Alert Rule.
     */
    triggerThreshold?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a AlertRuleScheduled resource.
 */
export interface AlertRuleScheduledArgs {
    /**
     * The GUID of the alert rule template which is used for this Sentinel Scheduled Alert Rule. Changing this forces a new Sentinel Scheduled Alert Rule to be created.
     */
    alertRuleTemplateGuid?: pulumi.Input<string>;
    /**
     * The description of this Sentinel Scheduled Alert Rule.
     */
    description?: pulumi.Input<string>;
    /**
     * The friendly name of this Sentinel Scheduled Alert Rule.
     */
    displayName: pulumi.Input<string>;
    /**
     * Should the Sentinel Scheduled Alert Rule be enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * A `eventGrouping` block as defined below.
     */
    eventGrouping?: pulumi.Input<inputs.sentinel.AlertRuleScheduledEventGrouping>;
    /**
     * A `incidentConfiguration` block as defined below.
     */
    incidentConfiguration?: pulumi.Input<inputs.sentinel.AlertRuleScheduledIncidentConfiguration>;
    /**
     * The ID of the Log Analytics Workspace this Sentinel Scheduled Alert Rule belongs to. Changing this forces a new Sentinel Scheduled Alert Rule to be created.
     */
    logAnalyticsWorkspaceId: pulumi.Input<string>;
    /**
     * The name which should be used for this Sentinel Scheduled Alert Rule. Changing this forces a new Sentinel Scheduled Alert Rule to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The query of this Sentinel Scheduled Alert Rule.
     */
    query: pulumi.Input<string>;
    /**
     * The ISO 8601 timespan duration between two consecutive queries. Defaults to `PT5H`.
     */
    queryFrequency?: pulumi.Input<string>;
    /**
     * The ISO 8601 timespan duration, which determine the time period of the data covered by the query. For example, it can query the past 10 minutes of data, or the past 6 hours of data. Defaults to `PT5H`.
     */
    queryPeriod?: pulumi.Input<string>;
    /**
     * The alert severity of this Sentinel Scheduled Alert Rule. Possible values are `High`, `Medium`, `Low` and `Informational`.
     */
    severity: pulumi.Input<string>;
    /**
     * If `suppressionEnabled` is `true`, this is ISO 8601 timespan duration, which specifies the amount of time the query should stop running after alert is generated. Defaults to `PT5H`.
     */
    suppressionDuration?: pulumi.Input<string>;
    /**
     * Should the Sentinel Scheduled Alert Rulea stop running query after alert is generated? Defaults to `false`.
     */
    suppressionEnabled?: pulumi.Input<boolean>;
    /**
     * A list of categories of attacks by which to classify the rule. Possible values are `Collection`, `CommandAndControl`, `CredentialAccess`, `DefenseEvasion`, `Discovery`, `Execution`, `Exfiltration`, `Impact`, `InitialAccess`, `LateralMovement`, `Persistence` and `PrivilegeEscalation`.
     */
    tactics?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The alert trigger operator, combined with `triggerThreshold`, setting alert threshold of this Sentinel Scheduled Alert Rule. Possible values are `Equal`, `GreaterThan`, `LessThan`, `NotEqual`.
     */
    triggerOperator?: pulumi.Input<string>;
    /**
     * The baseline number of query results generated, combined with `triggerOperator`, setting alert threshold of this Sentinel Scheduled Alert Rule.
     */
    triggerThreshold?: pulumi.Input<number>;
}
