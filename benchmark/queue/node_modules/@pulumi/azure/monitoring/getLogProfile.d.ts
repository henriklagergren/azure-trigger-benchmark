import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access the properties of a Log Profile.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.monitoring.getLogProfile({
 *     name: "test-logprofile",
 * });
 * export const logProfileStorageAccountId = example.then(example => example.storageAccountId);
 * ```
 */
export declare function getLogProfile(args: GetLogProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetLogProfileResult>;
/**
 * A collection of arguments for invoking getLogProfile.
 */
export interface GetLogProfileArgs {
    /**
     * Specifies the Name of the Log Profile.
     */
    name: string;
}
/**
 * A collection of values returned by getLogProfile.
 */
export interface GetLogProfileResult {
    /**
     * List of categories of the logs.
     */
    readonly categories: string[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * List of regions for which Activity Log events are stored or streamed.
     */
    readonly locations: string[];
    readonly name: string;
    readonly retentionPolicies: outputs.monitoring.GetLogProfileRetentionPolicy[];
    /**
     * The service bus (or event hub) rule ID of the service bus (or event hub) namespace in which the Activity Log is streamed to.
     */
    readonly servicebusRuleId: string;
    /**
     * The resource id of the storage account in which the Activity Log is stored.
     */
    readonly storageAccountId: string;
}
export declare function getLogProfileOutput(args: GetLogProfileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetLogProfileResult>;
/**
 * A collection of arguments for invoking getLogProfile.
 */
export interface GetLogProfileOutputArgs {
    /**
     * Specifies the Name of the Log Profile.
     */
    name: pulumi.Input<string>;
}
