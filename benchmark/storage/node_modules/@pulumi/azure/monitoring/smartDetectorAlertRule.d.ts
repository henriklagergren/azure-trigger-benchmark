import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Monitor Smart Detector Alert Rule.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleInsights = new azure.appinsights.Insights("exampleInsights", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationType: "web",
 * });
 * const exampleActionGroup = new azure.monitoring.ActionGroup("exampleActionGroup", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     shortName: "exampleactiongroup",
 * });
 * const exampleSmartDetectorAlertRule = new azure.monitoring.SmartDetectorAlertRule("exampleSmartDetectorAlertRule", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     severity: "Sev0",
 *     scopeResourceIds: [exampleInsights.id],
 *     frequency: "PT1M",
 *     detectorType: "FailureAnomaliesDetector",
 *     actionGroup: {
 *         ids: [azurerm_monitor_action_group.test.id],
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Monitor Smart Detector Alert Rule can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:monitoring/smartDetectorAlertRule:SmartDetectorAlertRule example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.AlertsManagement/smartdetectoralertrules/rule1
 * ```
 */
export declare class SmartDetectorAlertRule extends pulumi.CustomResource {
    /**
     * Get an existing SmartDetectorAlertRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SmartDetectorAlertRuleState, opts?: pulumi.CustomResourceOptions): SmartDetectorAlertRule;
    /**
     * Returns true if the given object is an instance of SmartDetectorAlertRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SmartDetectorAlertRule;
    /**
     * An `actionGroup` block as defined below.
     */
    readonly actionGroup: pulumi.Output<outputs.monitoring.SmartDetectorAlertRuleActionGroup>;
    /**
     * Specifies a description for the Smart Detector Alert Rule.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Specifies the Built-In Smart Detector type that this alert rule will use. Currently the only possible values are `FailureAnomaliesDetector`, `RequestPerformanceDegradationDetector`, `DependencyPerformanceDegradationDetector`, `ExceptionVolumeChangedDetector`, `TraceSeverityDetector`, `MemoryLeakDetector`.
     */
    readonly detectorType: pulumi.Output<string>;
    /**
     * Is the Smart Detector Alert Rule enabled? Defaults to `true`.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the frequency of this Smart Detector Alert Rule in ISO8601 format.
     */
    readonly frequency: pulumi.Output<string>;
    /**
     * Specifies the name of the Monitor Smart Detector Alert Rule. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the name of the resource group in which the Monitor Smart Detector Alert Rule should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Specifies the scopes of this Smart Detector Alert Rule.
     */
    readonly scopeResourceIds: pulumi.Output<string[]>;
    /**
     * Specifies the severity of this Smart Detector Alert Rule. Possible values are `Sev0`, `Sev1`, `Sev2`, `Sev3` or `Sev4`.
     */
    readonly severity: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the duration (in ISO8601 format) to wait before notifying on the alert rule again.
     */
    readonly throttlingDuration: pulumi.Output<string | undefined>;
    /**
     * Create a SmartDetectorAlertRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SmartDetectorAlertRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SmartDetectorAlertRule resources.
 */
export interface SmartDetectorAlertRuleState {
    /**
     * An `actionGroup` block as defined below.
     */
    actionGroup?: pulumi.Input<inputs.monitoring.SmartDetectorAlertRuleActionGroup>;
    /**
     * Specifies a description for the Smart Detector Alert Rule.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the Built-In Smart Detector type that this alert rule will use. Currently the only possible values are `FailureAnomaliesDetector`, `RequestPerformanceDegradationDetector`, `DependencyPerformanceDegradationDetector`, `ExceptionVolumeChangedDetector`, `TraceSeverityDetector`, `MemoryLeakDetector`.
     */
    detectorType?: pulumi.Input<string>;
    /**
     * Is the Smart Detector Alert Rule enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Specifies the frequency of this Smart Detector Alert Rule in ISO8601 format.
     */
    frequency?: pulumi.Input<string>;
    /**
     * Specifies the name of the Monitor Smart Detector Alert Rule. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the resource group in which the Monitor Smart Detector Alert Rule should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies the scopes of this Smart Detector Alert Rule.
     */
    scopeResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the severity of this Smart Detector Alert Rule. Possible values are `Sev0`, `Sev1`, `Sev2`, `Sev3` or `Sev4`.
     */
    severity?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the duration (in ISO8601 format) to wait before notifying on the alert rule again.
     */
    throttlingDuration?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SmartDetectorAlertRule resource.
 */
export interface SmartDetectorAlertRuleArgs {
    /**
     * An `actionGroup` block as defined below.
     */
    actionGroup: pulumi.Input<inputs.monitoring.SmartDetectorAlertRuleActionGroup>;
    /**
     * Specifies a description for the Smart Detector Alert Rule.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the Built-In Smart Detector type that this alert rule will use. Currently the only possible values are `FailureAnomaliesDetector`, `RequestPerformanceDegradationDetector`, `DependencyPerformanceDegradationDetector`, `ExceptionVolumeChangedDetector`, `TraceSeverityDetector`, `MemoryLeakDetector`.
     */
    detectorType: pulumi.Input<string>;
    /**
     * Is the Smart Detector Alert Rule enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Specifies the frequency of this Smart Detector Alert Rule in ISO8601 format.
     */
    frequency: pulumi.Input<string>;
    /**
     * Specifies the name of the Monitor Smart Detector Alert Rule. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the resource group in which the Monitor Smart Detector Alert Rule should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the scopes of this Smart Detector Alert Rule.
     */
    scopeResourceIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the severity of this Smart Detector Alert Rule. Possible values are `Sev0`, `Sev1`, `Sev2`, `Sev3` or `Sev4`.
     */
    severity: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the duration (in ISO8601 format) to wait before notifying on the alert rule again.
     */
    throttlingDuration?: pulumi.Input<string>;
}
