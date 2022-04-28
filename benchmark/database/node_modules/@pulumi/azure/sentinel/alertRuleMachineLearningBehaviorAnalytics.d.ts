import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Sentinel Machine Learning Behavior Analytics Alert Rule.
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
 * const exampleAlertRuleMachineLearningBehaviorAnalytics = new azure.sentinel.AlertRuleMachineLearningBehaviorAnalytics("exampleAlertRuleMachineLearningBehaviorAnalytics", {
 *     logAnalyticsWorkspaceId: exampleAnalyticsSolution.workspaceResourceId,
 *     alertRuleTemplateGuid: "737a2ce1-70a3-4968-9e90-3e6aca836abf",
 * });
 * ```
 *
 * ## Import
 *
 * Sentinel Machine Learning Behavior Analytics Rules can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:sentinel/alertRuleMachineLearningBehaviorAnalytics:AlertRuleMachineLearningBehaviorAnalytics example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.OperationalInsights/workspaces/workspace1/providers/Microsoft.SecurityInsights/alertRules/rule1
 * ```
 */
export declare class AlertRuleMachineLearningBehaviorAnalytics extends pulumi.CustomResource {
    /**
     * Get an existing AlertRuleMachineLearningBehaviorAnalytics resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlertRuleMachineLearningBehaviorAnalyticsState, opts?: pulumi.CustomResourceOptions): AlertRuleMachineLearningBehaviorAnalytics;
    /**
     * Returns true if the given object is an instance of AlertRuleMachineLearningBehaviorAnalytics.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AlertRuleMachineLearningBehaviorAnalytics;
    /**
     * The GUID of the alert rule template which is used for this Sentinel Machine Learning Behavior Analytics Alert Rule. Changing this forces a new Sentinel Machine Learning Behavior Analytics Alert Rule to be created.
     */
    readonly alertRuleTemplateGuid: pulumi.Output<string>;
    /**
     * Should this Sentinel Machine Learning Behavior Analytics Alert Rule be enabled? Defaults to `true`.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the Log Analytics Workspace this SentinelMachine Learning Behavior Analytics Alert Rule belongs to. Changing this forces a new Sentinel Machine Learning Behavior Analytics Alert Rule to be created.
     */
    readonly logAnalyticsWorkspaceId: pulumi.Output<string>;
    /**
     * The name which should be used for this SentinelMachine Learning Behavior Analytics Alert Rule. Changing this forces a new Sentinel Machine Learning Behavior Analytics Alert Rule to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Create a AlertRuleMachineLearningBehaviorAnalytics resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertRuleMachineLearningBehaviorAnalyticsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AlertRuleMachineLearningBehaviorAnalytics resources.
 */
export interface AlertRuleMachineLearningBehaviorAnalyticsState {
    /**
     * The GUID of the alert rule template which is used for this Sentinel Machine Learning Behavior Analytics Alert Rule. Changing this forces a new Sentinel Machine Learning Behavior Analytics Alert Rule to be created.
     */
    alertRuleTemplateGuid?: pulumi.Input<string>;
    /**
     * Should this Sentinel Machine Learning Behavior Analytics Alert Rule be enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The ID of the Log Analytics Workspace this SentinelMachine Learning Behavior Analytics Alert Rule belongs to. Changing this forces a new Sentinel Machine Learning Behavior Analytics Alert Rule to be created.
     */
    logAnalyticsWorkspaceId?: pulumi.Input<string>;
    /**
     * The name which should be used for this SentinelMachine Learning Behavior Analytics Alert Rule. Changing this forces a new Sentinel Machine Learning Behavior Analytics Alert Rule to be created.
     */
    name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AlertRuleMachineLearningBehaviorAnalytics resource.
 */
export interface AlertRuleMachineLearningBehaviorAnalyticsArgs {
    /**
     * The GUID of the alert rule template which is used for this Sentinel Machine Learning Behavior Analytics Alert Rule. Changing this forces a new Sentinel Machine Learning Behavior Analytics Alert Rule to be created.
     */
    alertRuleTemplateGuid: pulumi.Input<string>;
    /**
     * Should this Sentinel Machine Learning Behavior Analytics Alert Rule be enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The ID of the Log Analytics Workspace this SentinelMachine Learning Behavior Analytics Alert Rule belongs to. Changing this forces a new Sentinel Machine Learning Behavior Analytics Alert Rule to be created.
     */
    logAnalyticsWorkspaceId: pulumi.Input<string>;
    /**
     * The name which should be used for this SentinelMachine Learning Behavior Analytics Alert Rule. Changing this forces a new Sentinel Machine Learning Behavior Analytics Alert Rule to be created.
     */
    name?: pulumi.Input<string>;
}
