import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Azure Site Recovery replication policy.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const policy = pulumi.output(azure.siterecovery.getReplicationPolicy({
 *     name: "replication-policy",
 *     recoveryVaultName: "tfex-recovery_vault",
 *     resourceGroupName: "tfex-resource_group",
 * }));
 * ```
 */
export declare function getReplicationPolicy(args: GetReplicationPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetReplicationPolicyResult>;
/**
 * A collection of arguments for invoking getReplicationPolicy.
 */
export interface GetReplicationPolicyArgs {
    /**
     * Specifies the name of the Azure Site Recovery replication policy.
     */
    name: string;
    /**
     * The name of the Recovery Services Vault that the Azure Site Recovery replication policy is associated witth.
     */
    recoveryVaultName: string;
    /**
     * The name of the resource group in which the associated Azure Site Recovery replication policy resides.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getReplicationPolicy.
 */
export interface GetReplicationPolicyResult {
    /**
     * Specifies the frequency (in minutes) at which to create application consistent recovery.
     */
    readonly applicationConsistentSnapshotFrequencyInMinutes: number;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    /**
     * The duration in minutes for which the recovery points need to be stored.
     */
    readonly recoveryPointRetentionInMinutes: number;
    readonly recoveryVaultName: string;
    readonly resourceGroupName: string;
}
export declare function getReplicationPolicyOutput(args: GetReplicationPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetReplicationPolicyResult>;
/**
 * A collection of arguments for invoking getReplicationPolicy.
 */
export interface GetReplicationPolicyOutputArgs {
    /**
     * Specifies the name of the Azure Site Recovery replication policy.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Recovery Services Vault that the Azure Site Recovery replication policy is associated witth.
     */
    recoveryVaultName: pulumi.Input<string>;
    /**
     * The name of the resource group in which the associated Azure Site Recovery replication policy resides.
     */
    resourceGroupName: pulumi.Input<string>;
}
