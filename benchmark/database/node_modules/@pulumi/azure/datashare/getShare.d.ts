import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Data Share.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleAccount = azure.datashare.getAccount({
 *     name: "example-account",
 *     resourceGroupName: "example-resource-group",
 * });
 * const exampleShare = exampleAccount.then(exampleAccount => azure.datashare.getShare({
 *     name: "existing",
 *     accountId: exampleAccount.id,
 * }));
 * export const id = exampleShare.then(exampleShare => exampleShare.id);
 * ```
 */
export declare function getShare(args: GetShareArgs, opts?: pulumi.InvokeOptions): Promise<GetShareResult>;
/**
 * A collection of arguments for invoking getShare.
 */
export interface GetShareArgs {
    /**
     * The ID of the Data Share account in which the Data Share is created.
     */
    accountId: string;
    /**
     * The name of this Data Share.
     */
    name: string;
}
/**
 * A collection of values returned by getShare.
 */
export interface GetShareResult {
    readonly accountId: string;
    /**
     * The description of the Data Share.
     */
    readonly description: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The kind of the Data Share.
     */
    readonly kind: string;
    /**
     * The name of the snapshot schedule.
     */
    readonly name: string;
    /**
     * A `snapshotSchedule` block as defined below.
     */
    readonly snapshotSchedules: outputs.datashare.GetShareSnapshotSchedule[];
    /**
     * The terms of the Data Share.
     */
    readonly terms: string;
}
export declare function getShareOutput(args: GetShareOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetShareResult>;
/**
 * A collection of arguments for invoking getShare.
 */
export interface GetShareOutputArgs {
    /**
     * The ID of the Data Share account in which the Data Share is created.
     */
    accountId: pulumi.Input<string>;
    /**
     * The name of this Data Share.
     */
    name: pulumi.Input<string>;
}
