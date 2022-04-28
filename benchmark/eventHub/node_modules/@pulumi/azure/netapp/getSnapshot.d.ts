import * as pulumi from "@pulumi/pulumi";
/**
 * Uses this data source to access information about an existing NetApp Snapshot.
 *
 * ## NetApp Snapshot Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const test = azure.netapp.getSnapshot({
 *     resourceGroupName: "acctestRG",
 *     name: "acctestnetappsnapshot",
 *     accountName: "acctestnetappaccount",
 *     poolName: "acctestnetapppool",
 *     volumeName: "acctestnetappvolume",
 * });
 * export const netappSnapshotId = data.azurerm_netapp_snapshot.example.id;
 * ```
 */
export declare function getSnapshot(args: GetSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetSnapshotResult>;
/**
 * A collection of arguments for invoking getSnapshot.
 */
export interface GetSnapshotArgs {
    /**
     * The name of the NetApp Account where the NetApp Pool exists.
     */
    accountName: string;
    /**
     * The name of the NetApp Snapshot.
     */
    name: string;
    /**
     * The name of the NetApp Pool where the NetApp Volume exists.
     */
    poolName: string;
    /**
     * The Name of the Resource Group where the NetApp Snapshot exists.
     */
    resourceGroupName: string;
    /**
     * The name of the NetApp Volume where the NetApp Snapshot exists.
     */
    volumeName: string;
}
/**
 * A collection of values returned by getSnapshot.
 */
export interface GetSnapshotResult {
    readonly accountName: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The Azure Region where the NetApp Snapshot exists.
     */
    readonly location: string;
    readonly name: string;
    readonly poolName: string;
    readonly resourceGroupName: string;
    readonly volumeName: string;
}
export declare function getSnapshotOutput(args: GetSnapshotOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSnapshotResult>;
/**
 * A collection of arguments for invoking getSnapshot.
 */
export interface GetSnapshotOutputArgs {
    /**
     * The name of the NetApp Account where the NetApp Pool exists.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the NetApp Snapshot.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the NetApp Pool where the NetApp Volume exists.
     */
    poolName: pulumi.Input<string>;
    /**
     * The Name of the Resource Group where the NetApp Snapshot exists.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the NetApp Volume where the NetApp Snapshot exists.
     */
    volumeName: pulumi.Input<string>;
}
