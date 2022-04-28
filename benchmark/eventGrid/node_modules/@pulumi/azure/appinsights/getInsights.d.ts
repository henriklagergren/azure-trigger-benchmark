import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Application Insights component.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.appinsights.getInsights({
 *     name: "production",
 *     resourceGroupName: "networking",
 * });
 * export const applicationInsightsInstrumentationKey = example.then(example => example.instrumentationKey);
 * ```
 */
export declare function getInsights(args: GetInsightsArgs, opts?: pulumi.InvokeOptions): Promise<GetInsightsResult>;
/**
 * A collection of arguments for invoking getInsights.
 */
export interface GetInsightsArgs {
    /**
     * Specifies the name of the Application Insights component.
     */
    name: string;
    /**
     * Specifies the name of the resource group the Application Insights component is located in.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getInsights.
 */
export interface GetInsightsResult {
    /**
     * The App ID associated with this Application Insights component.
     */
    readonly appId: string;
    /**
     * The type of the component.
     */
    readonly applicationType: string;
    /**
     * The connection string of the Application Insights component. (Sensitive)
     */
    readonly connectionString: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The instrumentation key of the Application Insights component.
     */
    readonly instrumentationKey: string;
    /**
     * The Azure location where the component exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * The retention period in days.
     */
    readonly retentionInDays: number;
    /**
     * Tags applied to the component.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The id of the associated Log Analytics workspace
     */
    readonly workspaceId: string;
}
export declare function getInsightsOutput(args: GetInsightsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInsightsResult>;
/**
 * A collection of arguments for invoking getInsights.
 */
export interface GetInsightsOutputArgs {
    /**
     * Specifies the name of the Application Insights component.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the name of the resource group the Application Insights component is located in.
     */
    resourceGroupName: pulumi.Input<string>;
}
