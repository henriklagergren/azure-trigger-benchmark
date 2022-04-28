import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Snapshot.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = pulumi.output(azure.compute.getSnapshot({
 *     name: "my-snapshot",
 *     resourceGroupName: "my-resource-group",
 * }));
 * ```
 */
export declare function getSnapshot(args: GetSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetSnapshotResult>;
/**
 * A collection of arguments for invoking getSnapshot.
 */
export interface GetSnapshotArgs {
    /**
     * Specifies the name of the Snapshot.
     */
    name: string;
    /**
     * Specifies the name of the resource group the Snapshot is located in.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getSnapshot.
 */
export interface GetSnapshotResult {
    readonly creationOption: string;
    /**
     * The size of the Snapshotted Disk in GB.
     */
    readonly diskSizeGb: number;
    readonly encryptionSettings: outputs.compute.GetSnapshotEncryptionSetting[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly osType: string;
    readonly resourceGroupName: string;
    /**
     * The reference to an existing snapshot.
     */
    readonly sourceResourceId: string;
    /**
     * The URI to a Managed or Unmanaged Disk.
     */
    readonly sourceUri: string;
    /**
     * The ID of an storage account.
     */
    readonly storageAccountId: string;
    readonly timeCreated: string;
}
export declare function getSnapshotOutput(args: GetSnapshotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSnapshotResult>;
/**
 * A collection of arguments for invoking getSnapshot.
 */
export interface GetSnapshotOutputArgs {
    /**
     * Specifies the name of the Snapshot.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the name of the resource group the Snapshot is located in.
     */
    resourceGroupName: pulumi.Input<string>;
}
