import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Use this data source to access information about an existing File Share.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.storage.getShare({
 *     name: "existing",
 *     storageAccountName: "existing",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getShare(args: GetShareArgs, opts?: pulumi.InvokeOptions): Promise<GetShareResult>;
/**
 * A collection of arguments for invoking getShare.
 */
export interface GetShareArgs {
    /**
     * One or more acl blocks as defined below.
     */
    acls?: inputs.storage.GetShareAcl[];
    /**
     * A map of custom file share metadata.
     */
    metadata?: {
        [key: string]: string;
    };
    /**
     * The name of the share.
     */
    name: string;
    /**
     * The name of the storage account.
     */
    storageAccountName: string;
}
/**
 * A collection of values returned by getShare.
 */
export interface GetShareResult {
    /**
     * One or more acl blocks as defined below.
     */
    readonly acls?: outputs.storage.GetShareAcl[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * A map of custom file share metadata.
     */
    readonly metadata: {
        [key: string]: string;
    };
    readonly name: string;
    /**
     * The quota of the File Share in GB.
     */
    readonly quota: number;
    readonly resourceManagerId: string;
    readonly storageAccountName: string;
}
export declare function getShareOutput(args: GetShareOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetShareResult>;
/**
 * A collection of arguments for invoking getShare.
 */
export interface GetShareOutputArgs {
    /**
     * One or more acl blocks as defined below.
     */
    acls?: pulumi.Input<pulumi.Input<inputs.storage.GetShareAclArgs>[]>;
    /**
     * A map of custom file share metadata.
     */
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the share.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the storage account.
     */
    storageAccountName: pulumi.Input<string>;
}
