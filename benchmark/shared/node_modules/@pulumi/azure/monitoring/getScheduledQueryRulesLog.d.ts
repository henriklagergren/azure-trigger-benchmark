import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access the properties of a LogToMetricAction scheduled query rule.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.monitoring.getScheduledQueryRulesLog({
 *     resourceGroupName: "example-rg",
 *     name: "tfex-queryrule",
 * });
 * export const queryRuleId = example.then(example => example.id);
 * ```
 */
export declare function getScheduledQueryRulesLog(args: GetScheduledQueryRulesLogArgs, opts?: pulumi.InvokeOptions): Promise<GetScheduledQueryRulesLogResult>;
/**
 * A collection of arguments for invoking getScheduledQueryRulesLog.
 */
export interface GetScheduledQueryRulesLogArgs {
    /**
     * Specifies the name of the scheduled query rule.
     */
    name: string;
    /**
     * Specifies the name of the resource group where the scheduled query rule is located.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getScheduledQueryRulesLog.
 */
export interface GetScheduledQueryRulesLogResult {
    readonly authorizedResourceIds: string[];
    /**
     * A `criteria` block as defined below.
     */
    readonly criterias: outputs.monitoring.GetScheduledQueryRulesLogCriteria[];
    /**
     * The resource URI over which log search query is to be run.
     */
    readonly dataSourceId: string;
    /**
     * The description of the scheduled query rule.
     */
    readonly description: string;
    /**
     * Whether this scheduled query rule is enabled.
     */
    readonly enabled: boolean;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly location: string;
    /**
     * Name of the dimension.
     */
    readonly name: string;
    readonly resourceGroupName: string;
    readonly tags: {
        [key: string]: string;
    };
}
export declare function getScheduledQueryRulesLogOutput(args: GetScheduledQueryRulesLogOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetScheduledQueryRulesLogResult>;
/**
 * A collection of arguments for invoking getScheduledQueryRulesLog.
 */
export interface GetScheduledQueryRulesLogOutputArgs {
    /**
     * Specifies the name of the scheduled query rule.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the name of the resource group where the scheduled query rule is located.
     */
    resourceGroupName: pulumi.Input<string>;
}
