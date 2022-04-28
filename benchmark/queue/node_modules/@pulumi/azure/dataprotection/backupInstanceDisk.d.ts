import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Backup Instance to back up Disk.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const rg = new azure.core.ResourceGroup("rg", {location: "West Europe"});
 * const exampleManagedDisk = new azure.compute.ManagedDisk("exampleManagedDisk", {
 *     location: rg.location,
 *     resourceGroupName: rg.name,
 *     storageAccountType: "Standard_LRS",
 *     createOption: "Empty",
 *     diskSizeGb: "1",
 * });
 * const exampleBackupVault = new azure.dataprotection.BackupVault("exampleBackupVault", {
 *     resourceGroupName: rg.name,
 *     location: rg.location,
 *     datastoreType: "VaultStore",
 *     redundancy: "LocallyRedundant",
 *     identity: {
 *         type: "SystemAssigned",
 *     },
 * });
 * const example1 = new azure.authorization.Assignment("example1", {
 *     scope: rg.id,
 *     roleDefinitionName: "Disk Snapshot Contributor",
 *     principalId: exampleBackupVault.identity.apply(identity => identity?.principalId),
 * });
 * const example2 = new azure.authorization.Assignment("example2", {
 *     scope: exampleManagedDisk.id,
 *     roleDefinitionName: "Disk Backup Reader",
 *     principalId: exampleBackupVault.identity.apply(identity => identity?.principalId),
 * });
 * const exampleBackupPolicyDisk = new azure.dataprotection.BackupPolicyDisk("exampleBackupPolicyDisk", {
 *     vaultId: exampleBackupVault.id,
 *     backupRepeatingTimeIntervals: ["R/2021-05-19T06:33:16+00:00/PT4H"],
 *     defaultRetentionDuration: "P7D",
 * });
 * const exampleBackupInstanceDisk = new azure.dataprotection.BackupInstanceDisk("exampleBackupInstanceDisk", {
 *     location: exampleBackupVault.location,
 *     vaultId: exampleBackupVault.id,
 *     diskId: exampleManagedDisk.id,
 *     snapshotResourceGroupName: rg.name,
 *     backupPolicyId: exampleBackupPolicyDisk.id,
 * });
 * ```
 *
 * ## Import
 *
 * Backup Instance Disks can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:dataprotection/backupInstanceDisk:BackupInstanceDisk example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DataProtection/backupVaults/vault1/backupInstances/backupInstance1
 * ```
 */
export declare class BackupInstanceDisk extends pulumi.CustomResource {
    /**
     * Get an existing BackupInstanceDisk resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackupInstanceDiskState, opts?: pulumi.CustomResourceOptions): BackupInstanceDisk;
    /**
     * Returns true if the given object is an instance of BackupInstanceDisk.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BackupInstanceDisk;
    /**
     * The ID of the Backup Policy.
     */
    readonly backupPolicyId: pulumi.Output<string>;
    /**
     * The ID of the source Disk. Changing this forces a new Backup Instance Disk to be created.
     */
    readonly diskId: pulumi.Output<string>;
    /**
     * The Azure Region where the Backup Instance Disk should exist. Changing this forces a new Backup Instance Disk to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Backup Instance Disk. Changing this forces a new Backup Instance Disk to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where snapshots are stored. Changing this forces a new Backup Instance Disk to be created.
     */
    readonly snapshotResourceGroupName: pulumi.Output<string>;
    /**
     * The ID of the Backup Vault within which the Backup Instance Disk should exist. Changing this forces a new Backup Instance Disk to be created.
     */
    readonly vaultId: pulumi.Output<string>;
    /**
     * Create a BackupInstanceDisk resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupInstanceDiskArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering BackupInstanceDisk resources.
 */
export interface BackupInstanceDiskState {
    /**
     * The ID of the Backup Policy.
     */
    backupPolicyId?: pulumi.Input<string>;
    /**
     * The ID of the source Disk. Changing this forces a new Backup Instance Disk to be created.
     */
    diskId?: pulumi.Input<string>;
    /**
     * The Azure Region where the Backup Instance Disk should exist. Changing this forces a new Backup Instance Disk to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Backup Instance Disk. Changing this forces a new Backup Instance Disk to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where snapshots are stored. Changing this forces a new Backup Instance Disk to be created.
     */
    snapshotResourceGroupName?: pulumi.Input<string>;
    /**
     * The ID of the Backup Vault within which the Backup Instance Disk should exist. Changing this forces a new Backup Instance Disk to be created.
     */
    vaultId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a BackupInstanceDisk resource.
 */
export interface BackupInstanceDiskArgs {
    /**
     * The ID of the Backup Policy.
     */
    backupPolicyId: pulumi.Input<string>;
    /**
     * The ID of the source Disk. Changing this forces a new Backup Instance Disk to be created.
     */
    diskId: pulumi.Input<string>;
    /**
     * The Azure Region where the Backup Instance Disk should exist. Changing this forces a new Backup Instance Disk to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Backup Instance Disk. Changing this forces a new Backup Instance Disk to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where snapshots are stored. Changing this forces a new Backup Instance Disk to be created.
     */
    snapshotResourceGroupName: pulumi.Input<string>;
    /**
     * The ID of the Backup Vault within which the Backup Instance Disk should exist. Changing this forces a new Backup Instance Disk to be created.
     */
    vaultId: pulumi.Input<string>;
}
