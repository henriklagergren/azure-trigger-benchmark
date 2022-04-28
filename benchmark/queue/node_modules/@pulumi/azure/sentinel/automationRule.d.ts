import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Sentinel Automation Rule.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "west europe"});
 * const exampleAnalyticsWorkspace = new azure.operationalinsights.AnalyticsWorkspace("exampleAnalyticsWorkspace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "pergb2018",
 * });
 * const sentinel = new azure.operationalinsights.AnalyticsSolution("sentinel", {
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
 * const exampleAutomationRule = new azure.sentinel.AutomationRule("exampleAutomationRule", {
 *     logAnalyticsWorkspaceId: sentinel.workspaceResourceId,
 *     displayName: "automation_rule1",
 *     order: 1,
 *     actionIncidents: [{
 *         order: 1,
 *         status: "Active",
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Sentinel Automation Rules can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:sentinel/automationRule:AutomationRule example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.OperationalInsights/workspaces/workspace1/providers/Microsoft.SecurityInsights/AutomationRules/rule1
 * ```
 */
export declare class AutomationRule extends pulumi.CustomResource {
    /**
     * Get an existing AutomationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AutomationRuleState, opts?: pulumi.CustomResourceOptions): AutomationRule;
    /**
     * Returns true if the given object is an instance of AutomationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AutomationRule;
    /**
     * One or more `actionIncident` blocks as defined below.
     */
    readonly actionIncidents: pulumi.Output<outputs.sentinel.AutomationRuleActionIncident[] | undefined>;
    /**
     * One or more `actionPlaybook` blocks as defined below.
     */
    readonly actionPlaybooks: pulumi.Output<outputs.sentinel.AutomationRuleActionPlaybook[] | undefined>;
    /**
     * One or more `condition` blocks as defined below.
     */
    readonly conditions: pulumi.Output<outputs.sentinel.AutomationRuleCondition[] | undefined>;
    /**
     * The display name which should be used for this Sentinel Automation Rule.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * Whether this Sentinel Automation Rule is enabled? Defaults to `true`.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * The time in RFC3339 format of kind `UTC` that determines when this Automation Rule should expire and be disabled.
     */
    readonly expiration: pulumi.Output<string | undefined>;
    /**
     * The ID of the Log Analytics Workspace where this Sentinel applies to. Changing this forces a new Sentinel Automation Rule to be created.
     */
    readonly logAnalyticsWorkspaceId: pulumi.Output<string>;
    /**
     * The UUID which should be used for this Sentinel Automation Rule. Changing this forces a new Sentinel Automation Rule to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The order of this Sentinel Automation Rule. Possible values varies between `1` and `1000`.
     */
    readonly order: pulumi.Output<number>;
    /**
     * Create a AutomationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AutomationRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AutomationRule resources.
 */
export interface AutomationRuleState {
    /**
     * One or more `actionIncident` blocks as defined below.
     */
    actionIncidents?: pulumi.Input<pulumi.Input<inputs.sentinel.AutomationRuleActionIncident>[]>;
    /**
     * One or more `actionPlaybook` blocks as defined below.
     */
    actionPlaybooks?: pulumi.Input<pulumi.Input<inputs.sentinel.AutomationRuleActionPlaybook>[]>;
    /**
     * One or more `condition` blocks as defined below.
     */
    conditions?: pulumi.Input<pulumi.Input<inputs.sentinel.AutomationRuleCondition>[]>;
    /**
     * The display name which should be used for this Sentinel Automation Rule.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Whether this Sentinel Automation Rule is enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The time in RFC3339 format of kind `UTC` that determines when this Automation Rule should expire and be disabled.
     */
    expiration?: pulumi.Input<string>;
    /**
     * The ID of the Log Analytics Workspace where this Sentinel applies to. Changing this forces a new Sentinel Automation Rule to be created.
     */
    logAnalyticsWorkspaceId?: pulumi.Input<string>;
    /**
     * The UUID which should be used for this Sentinel Automation Rule. Changing this forces a new Sentinel Automation Rule to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The order of this Sentinel Automation Rule. Possible values varies between `1` and `1000`.
     */
    order?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a AutomationRule resource.
 */
export interface AutomationRuleArgs {
    /**
     * One or more `actionIncident` blocks as defined below.
     */
    actionIncidents?: pulumi.Input<pulumi.Input<inputs.sentinel.AutomationRuleActionIncident>[]>;
    /**
     * One or more `actionPlaybook` blocks as defined below.
     */
    actionPlaybooks?: pulumi.Input<pulumi.Input<inputs.sentinel.AutomationRuleActionPlaybook>[]>;
    /**
     * One or more `condition` blocks as defined below.
     */
    conditions?: pulumi.Input<pulumi.Input<inputs.sentinel.AutomationRuleCondition>[]>;
    /**
     * The display name which should be used for this Sentinel Automation Rule.
     */
    displayName: pulumi.Input<string>;
    /**
     * Whether this Sentinel Automation Rule is enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The time in RFC3339 format of kind `UTC` that determines when this Automation Rule should expire and be disabled.
     */
    expiration?: pulumi.Input<string>;
    /**
     * The ID of the Log Analytics Workspace where this Sentinel applies to. Changing this forces a new Sentinel Automation Rule to be created.
     */
    logAnalyticsWorkspaceId: pulumi.Input<string>;
    /**
     * The UUID which should be used for this Sentinel Automation Rule. Changing this forces a new Sentinel Automation Rule to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The order of this Sentinel Automation Rule. Possible values varies between `1` and `1000`.
     */
    order: pulumi.Input<number>;
}
