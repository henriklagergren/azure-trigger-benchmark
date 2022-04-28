import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Storage Sync Group.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.storage.getSyncGroup({
 *     name: "existing-ss-group",
 *     storageSyncId: "existing-ss-id",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getSyncGroup(args: GetSyncGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetSyncGroupResult>;
/**
 * A collection of arguments for invoking getSyncGroup.
 */
export interface GetSyncGroupArgs {
    /**
     * The name of this Storage Sync Group.
     */
    name: string;
    /**
     * The resource ID of the Storage Sync where this Storage Sync Group is.
     */
    storageSyncId: string;
}
/**
 * A collection of values returned by getSyncGroup.
 */
export interface GetSyncGroupResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly storageSyncId: string;
}
export declare function getSyncGroupOutput(args: GetSyncGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSyncGroupResult>;
/**
 * A collection of arguments for invoking getSyncGroup.
 */
export interface GetSyncGroupOutputArgs {
    /**
     * The name of this Storage Sync Group.
     */
    name: pulumi.Input<string>;
    /**
     * The resource ID of the Storage Sync where this Storage Sync Group is.
     */
    storageSyncId: pulumi.Input<string>;
}
