import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Backup Instance Blob Storage.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleBackupVault = new azure.dataprotection.BackupVault("exampleBackupVault", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     datastoreType: "VaultStore",
 *     redundancy: "LocallyRedundant",
 *     identity: {
 *         type: "SystemAssigned",
 *     },
 * });
 * const exampleAssignment = new azure.authorization.Assignment("exampleAssignment", {
 *     scope: exampleAccount.id,
 *     roleDefinitionName: "Storage Account Backup Contributor Role",
 *     principalId: exampleBackupVault.identity.apply(identity => identity?.principalId),
 * });
 * const exampleBackupPolicyBlobStorage = new azure.dataprotection.BackupPolicyBlobStorage("exampleBackupPolicyBlobStorage", {
 *     vaultId: exampleBackupVault.id,
 *     retentionDuration: "P30D",
 * });
 * const exampleBackupInstanceBlogStorage = new azure.dataprotection.BackupInstanceBlogStorage("exampleBackupInstanceBlogStorage", {
 *     vaultId: exampleBackupVault.id,
 *     location: exampleResourceGroup.location,
 *     storageAccountId: exampleAccount.id,
 *     backupPolicyId: exampleBackupPolicyBlobStorage.id,
 * }, {
 *     dependsOn: [exampleAssignment],
 * });
 * ```
 *
 * ## Import
 *
 * Backup Instance Blob Storages can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:dataprotection/backupInstanceBlogStorage:BackupInstanceBlogStorage example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DataProtection/backupVaults/vault1/backupInstances/backupInstance1
 * ```
 */
export declare class BackupInstanceBlogStorage extends pulumi.CustomResource {
    /**
     * Get an existing BackupInstanceBlogStorage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackupInstanceBlogStorageState, opts?: pulumi.CustomResourceOptions): BackupInstanceBlogStorage;
    /**
     * Returns true if the given object is an instance of BackupInstanceBlogStorage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BackupInstanceBlogStorage;
    /**
     * The ID of the Backup Policy.
     */
    readonly backupPolicyId: pulumi.Output<string>;
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Backup Instance Blob Storage. Changing this forces a new Backup Instance Blob Storage to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the source Storage Account. Changing this forces a new Backup Instance Blob Storage to be created.
     */
    readonly storageAccountId: pulumi.Output<string>;
    /**
     * The ID of the Backup Vault within which the Backup Instance Blob Storage should exist. Changing this forces a new Backup Instance Blob Storage to be created.
     */
    readonly vaultId: pulumi.Output<string>;
    /**
     * Create a BackupInstanceBlogStorage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupInstanceBlogStorageArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering BackupInstanceBlogStorage resources.
 */
export interface BackupInstanceBlogStorageState {
    /**
     * The ID of the Backup Policy.
     */
    backupPolicyId?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Backup Instance Blob Storage. Changing this forces a new Backup Instance Blob Storage to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the source Storage Account. Changing this forces a new Backup Instance Blob Storage to be created.
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * The ID of the Backup Vault within which the Backup Instance Blob Storage should exist. Changing this forces a new Backup Instance Blob Storage to be created.
     */
    vaultId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a BackupInstanceBlogStorage resource.
 */
export interface BackupInstanceBlogStorageArgs {
    /**
     * The ID of the Backup Policy.
     */
    backupPolicyId: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Backup Instance Blob Storage. Changing this forces a new Backup Instance Blob Storage to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the source Storage Account. Changing this forces a new Backup Instance Blob Storage to be created.
     */
    storageAccountId: pulumi.Input<string>;
    /**
     * The ID of the Backup Vault within which the Backup Instance Blob Storage should exist. Changing this forces a new Backup Instance Blob Storage to be created.
     */
    vaultId: pulumi.Input<string>;
}
