import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Sentinel MS Security Incident Alert Rule.
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
 * const exampleAlertRuleMsSecurityIncident = new azure.sentinel.AlertRuleMsSecurityIncident("exampleAlertRuleMsSecurityIncident", {
 *     logAnalyticsWorkspaceId: exampleAnalyticsSolution.workspaceResourceId,
 *     productFilter: "Microsoft Cloud App Security",
 *     displayName: "example rule",
 *     severityFilters: ["High"],
 * });
 * ```
 *
 * ## Import
 *
 * Sentinel MS Security Incident Alert Rules can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:sentinel/alertRuleMsSecurityIncident:AlertRuleMsSecurityIncident example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.OperationalInsights/workspaces/workspace1/providers/Microsoft.SecurityInsights/alertRules/rule1
 * ```
 */
export declare class AlertRuleMsSecurityIncident extends pulumi.CustomResource {
    /**
     * Get an existing AlertRuleMsSecurityIncident resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlertRuleMsSecurityIncidentState, opts?: pulumi.CustomResourceOptions): AlertRuleMsSecurityIncident;
    /**
     * Returns true if the given object is an instance of AlertRuleMsSecurityIncident.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AlertRuleMsSecurityIncident;
    /**
     * The GUID of the alert rule template which is used to create this Sentinel Scheduled Alert Rule. Changing this forces a new Sentinel MS Security Incident Alert Rule to be created.
     */
    readonly alertRuleTemplateGuid: pulumi.Output<string | undefined>;
    /**
     * The description of this Sentinel MS Security Incident Alert Rule.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The friendly name of this Sentinel MS Security Incident Alert Rule.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * Only create incidents when the alert display name doesn't contain text from this list.
     */
    readonly displayNameExcludeFilters: pulumi.Output<string[] | undefined>;
    /**
     * Only create incidents when the alert display name contain text from this list, leave empty to apply no filter.
     */
    readonly displayNameFilters: pulumi.Output<string[]>;
    /**
     * Should this Sentinel MS Security Incident Alert Rule be enabled? Defaults to `true`.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the Log Analytics Workspace this Sentinel MS Security Incident Alert Rule belongs to. Changing this forces a new Sentinel MS Security Incident Alert Rule to be created.
     */
    readonly logAnalyticsWorkspaceId: pulumi.Output<string>;
    /**
     * The name which should be used for this Sentinel MS Security Incident Alert Rule. Changing this forces a new Sentinel MS Security Incident Alert Rule to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The Microsoft Security Service from where the alert will be generated. Possible values are `Azure Active Directory Identity Protection`, `Azure Advanced Threat Protection`, `Azure Security Center`, `Azure Security Center for IoT`, `Microsoft Cloud App Security`, `Microsoft Defender Advanced Threat Protection` and `Office 365 Advanced Threat Protection`.
     */
    readonly productFilter: pulumi.Output<string>;
    /**
     * Only create incidents from alerts when alert severity level is contained in this list. Possible values are `High`, `Medium`, `Low` and `Informational`.
     */
    readonly severityFilters: pulumi.Output<string[]>;
    /**
     * @deprecated this property has been renamed to display_name_filter to better match the SDK & API
     */
    readonly textWhitelists: pulumi.Output<string[]>;
    /**
     * Create a AlertRuleMsSecurityIncident resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertRuleMsSecurityIncidentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AlertRuleMsSecurityIncident resources.
 */
export interface AlertRuleMsSecurityIncidentState {
    /**
     * The GUID of the alert rule template which is used to create this Sentinel Scheduled Alert Rule. Changing this forces a new Sentinel MS Security Incident Alert Rule to be created.
     */
    alertRuleTemplateGuid?: pulumi.Input<string>;
    /**
     * The description of this Sentinel MS Security Incident Alert Rule.
     */
    description?: pulumi.Input<string>;
    /**
     * The friendly name of this Sentinel MS Security Incident Alert Rule.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Only create incidents when the alert display name doesn't contain text from this list.
     */
    displayNameExcludeFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Only create incidents when the alert display name contain text from this list, leave empty to apply no filter.
     */
    displayNameFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Should this Sentinel MS Security Incident Alert Rule be enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The ID of the Log Analytics Workspace this Sentinel MS Security Incident Alert Rule belongs to. Changing this forces a new Sentinel MS Security Incident Alert Rule to be created.
     */
    logAnalyticsWorkspaceId?: pulumi.Input<string>;
    /**
     * The name which should be used for this Sentinel MS Security Incident Alert Rule. Changing this forces a new Sentinel MS Security Incident Alert Rule to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The Microsoft Security Service from where the alert will be generated. Possible values are `Azure Active Directory Identity Protection`, `Azure Advanced Threat Protection`, `Azure Security Center`, `Azure Security Center for IoT`, `Microsoft Cloud App Security`, `Microsoft Defender Advanced Threat Protection` and `Office 365 Advanced Threat Protection`.
     */
    productFilter?: pulumi.Input<string>;
    /**
     * Only create incidents from alerts when alert severity level is contained in this list. Possible values are `High`, `Medium`, `Low` and `Informational`.
     */
    severityFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * @deprecated this property has been renamed to display_name_filter to better match the SDK & API
     */
    textWhitelists?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a AlertRuleMsSecurityIncident resource.
 */
export interface AlertRuleMsSecurityIncidentArgs {
    /**
     * The GUID of the alert rule template which is used to create this Sentinel Scheduled Alert Rule. Changing this forces a new Sentinel MS Security Incident Alert Rule to be created.
     */
    alertRuleTemplateGuid?: pulumi.Input<string>;
    /**
     * The description of this Sentinel MS Security Incident Alert Rule.
     */
    description?: pulumi.Input<string>;
    /**
     * The friendly name of this Sentinel MS Security Incident Alert Rule.
     */
    displayName: pulumi.Input<string>;
    /**
     * Only create incidents when the alert display name doesn't contain text from this list.
     */
    displayNameExcludeFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Only create incidents when the alert display name contain text from this list, leave empty to apply no filter.
     */
    displayNameFilters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Should this Sentinel MS Security Incident Alert Rule be enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The ID of the Log Analytics Workspace this Sentinel MS Security Incident Alert Rule belongs to. Changing this forces a new Sentinel MS Security Incident Alert Rule to be created.
     */
    logAnalyticsWorkspaceId: pulumi.Input<string>;
    /**
     * The name which should be used for this Sentinel MS Security Incident Alert Rule. Changing this forces a new Sentinel MS Security Incident Alert Rule to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The Microsoft Security Service from where the alert will be generated. Possible values are `Azure Active Directory Identity Protection`, `Azure Advanced Threat Protection`, `Azure Security Center`, `Azure Security Center for IoT`, `Microsoft Cloud App Security`, `Microsoft Defender Advanced Threat Protection` and `Office 365 Advanced Threat Protection`.
     */
    productFilter: pulumi.Input<string>;
    /**
     * Only create incidents from alerts when alert severity level is contained in this list. Possible values are `High`, `Medium`, `Low` and `Informational`.
     */
    severityFilters: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * @deprecated this property has been renamed to display_name_filter to better match the SDK & API
     */
    textWhitelists?: pulumi.Input<pulumi.Input<string>[]>;
}
