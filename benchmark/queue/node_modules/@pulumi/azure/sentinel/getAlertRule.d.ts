import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Sentinel Alert Rule.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleAnalyticsWorkspace = azure.operationalinsights.getAnalyticsWorkspace({
 *     name: "example",
 *     resourceGroupName: "example-resources",
 * });
 * const exampleAlertRule = exampleAnalyticsWorkspace.then(exampleAnalyticsWorkspace => azure.sentinel.getAlertRule({
 *     name: "existing",
 *     logAnalyticsWorkspaceId: exampleAnalyticsWorkspace.id,
 * }));
 * export const id = exampleAlertRule.then(exampleAlertRule => exampleAlertRule.id);
 * ```
 */
export declare function getAlertRule(args: GetAlertRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetAlertRuleResult>;
/**
 * A collection of arguments for invoking getAlertRule.
 */
export interface GetAlertRuleArgs {
    /**
     * The ID of the Log Analytics Workspace this Sentinel Alert Rule belongs to.
     */
    logAnalyticsWorkspaceId: string;
    /**
     * The name which should be used for this Sentinel Alert Rule.
     */
    name: string;
}
/**
 * A collection of values returned by getAlertRule.
 */
export interface GetAlertRuleResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly logAnalyticsWorkspaceId: string;
    readonly name: string;
}
export declare function getAlertRuleOutput(args: GetAlertRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAlertRuleResult>;
/**
 * A collection of arguments for invoking getAlertRule.
 */
export interface GetAlertRuleOutputArgs {
    /**
     * The ID of the Log Analytics Workspace this Sentinel Alert Rule belongs to.
     */
    logAnalyticsWorkspaceId: pulumi.Input<string>;
    /**
     * The name which should be used for this Sentinel Alert Rule.
     */
    name: pulumi.Input<string>;
}
