import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Application Insights Smart Detection Rule.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleInsights = new azure.appinsights.Insights("exampleInsights", {
 *     location: "West Europe",
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationType: "web",
 * });
 * const exampleSmartDetectionRule = new azure.appinsights.SmartDetectionRule("exampleSmartDetectionRule", {
 *     applicationInsightsId: exampleInsights.id,
 *     enabled: false,
 * });
 * ```
 *
 * ## Import
 *
 * Application Insights Smart Detection Rules can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appinsights/smartDetectionRule:SmartDetectionRule rule1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Insights/components/mycomponent1/smartDetectionRule/myrule1
 * ```
 */
export declare class SmartDetectionRule extends pulumi.CustomResource {
    /**
     * Get an existing SmartDetectionRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SmartDetectionRuleState, opts?: pulumi.CustomResourceOptions): SmartDetectionRule;
    /**
     * Returns true if the given object is an instance of SmartDetectionRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SmartDetectionRule;
    /**
     * Specifies a list of additional recipients that will be sent emails on this Application Insights Smart Detection Rule.
     */
    readonly additionalEmailRecipients: pulumi.Output<string[] | undefined>;
    /**
     * The ID of the Application Insights component on which the Smart Detection Rule operates. Changing this forces a new resource to be created.
     */
    readonly applicationInsightsId: pulumi.Output<string>;
    /**
     * Is the Application Insights Smart Detection Rule enabled? Defaults to `true`.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the name of the Application Insights Smart Detection Rule. Valid values include `Slow page load time`, `Slow server response time`,
     * `Long dependency duration`, `Degradation in server response time`, `Degradation in dependency duration`, `Degradation in trace severity ratio`, `Abnormal rise in exception volume`,
     * `Potential memory leak detected`, `Potential security issue detected`, `Abnormal rise in daily data volume`.  Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Do emails get sent to subscription owners? Defaults to `true`.
     */
    readonly sendEmailsToSubscriptionOwners: pulumi.Output<boolean | undefined>;
    /**
     * Create a SmartDetectionRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SmartDetectionRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SmartDetectionRule resources.
 */
export interface SmartDetectionRuleState {
    /**
     * Specifies a list of additional recipients that will be sent emails on this Application Insights Smart Detection Rule.
     */
    additionalEmailRecipients?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of the Application Insights component on which the Smart Detection Rule operates. Changing this forces a new resource to be created.
     */
    applicationInsightsId?: pulumi.Input<string>;
    /**
     * Is the Application Insights Smart Detection Rule enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the Application Insights Smart Detection Rule. Valid values include `Slow page load time`, `Slow server response time`,
     * `Long dependency duration`, `Degradation in server response time`, `Degradation in dependency duration`, `Degradation in trace severity ratio`, `Abnormal rise in exception volume`,
     * `Potential memory leak detected`, `Potential security issue detected`, `Abnormal rise in daily data volume`.  Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Do emails get sent to subscription owners? Defaults to `true`.
     */
    sendEmailsToSubscriptionOwners?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a SmartDetectionRule resource.
 */
export interface SmartDetectionRuleArgs {
    /**
     * Specifies a list of additional recipients that will be sent emails on this Application Insights Smart Detection Rule.
     */
    additionalEmailRecipients?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of the Application Insights component on which the Smart Detection Rule operates. Changing this forces a new resource to be created.
     */
    applicationInsightsId: pulumi.Input<string>;
    /**
     * Is the Application Insights Smart Detection Rule enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the Application Insights Smart Detection Rule. Valid values include `Slow page load time`, `Slow server response time`,
     * `Long dependency duration`, `Degradation in server response time`, `Degradation in dependency duration`, `Degradation in trace severity ratio`, `Abnormal rise in exception volume`,
     * `Potential memory leak detected`, `Potential security issue detected`, `Abnormal rise in daily data volume`.  Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Do emails get sent to subscription owners? Defaults to `true`.
     */
    sendEmailsToSubscriptionOwners?: pulumi.Input<boolean>;
}
