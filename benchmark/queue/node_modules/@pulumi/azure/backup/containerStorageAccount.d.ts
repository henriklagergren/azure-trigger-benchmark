import * as pulumi from "@pulumi/pulumi";
/**
 * Manages registration of a storage account with Azure Backup. Storage accounts must be registered with an Azure Recovery Vault in order to backup file shares within the storage account. Registering a storage account with a vault creates what is known as a protection container within Azure Recovery Services. Once the container is created, Azure file shares within the storage account can be backed up using the `azure.backup.ProtectedFileShare` resource.
 *
 * > **NOTE:** Azure Backup for Azure File Shares is currently in public preview. During the preview, the service is subject to additional limitations and unsupported backup scenarios. [Read More](https://docs.microsoft.com/en-us/azure/backup/backup-azure-files#limitations-for-azure-file-share-backup-during-preview)
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const rg = new azure.core.ResourceGroup("rg", {location: "West Europe"});
 * const vault = new azure.recoveryservices.Vault("vault", {
 *     location: rg.location,
 *     resourceGroupName: rg.name,
 *     sku: "Standard",
 * });
 * const sa = new azure.storage.Account("sa", {
 *     location: rg.location,
 *     resourceGroupName: rg.name,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const container = new azure.backup.ContainerStorageAccount("container", {
 *     resourceGroupName: rg.name,
 *     recoveryVaultName: vault.name,
 *     storageAccountId: sa.id,
 * });
 * ```
 *
 * ## Import
 *
 * Backup Storage Account Containers can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:backup/containerStorageAccount:ContainerStorageAccount mycontainer "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resource-group-name/providers/Microsoft.RecoveryServices/vaults/recovery-vault-name/backupFabrics/Azure/protectionContainers/StorageContainer;storage;storage-rg-name;storage-account"
 * ```
 *
 *  Note the ID requires quoting as there are semicolons
 */
export declare class ContainerStorageAccount extends pulumi.CustomResource {
    /**
     * Get an existing ContainerStorageAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContainerStorageAccountState, opts?: pulumi.CustomResourceOptions): ContainerStorageAccount;
    /**
     * Returns true if the given object is an instance of ContainerStorageAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ContainerStorageAccount;
    /**
     * The name of the vault where the storage account will be registered.
     */
    readonly recoveryVaultName: pulumi.Output<string>;
    /**
     * Name of the resource group where the vault is located.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The ID of the Storage Account to be registered
     */
    readonly storageAccountId: pulumi.Output<string>;
    /**
     * Create a ContainerStorageAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerStorageAccountArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ContainerStorageAccount resources.
 */
export interface ContainerStorageAccountState {
    /**
     * The name of the vault where the storage account will be registered.
     */
    recoveryVaultName?: pulumi.Input<string>;
    /**
     * Name of the resource group where the vault is located.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The ID of the Storage Account to be registered
     */
    storageAccountId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ContainerStorageAccount resource.
 */
export interface ContainerStorageAccountArgs {
    /**
     * The name of the vault where the storage account will be registered.
     */
    recoveryVaultName: pulumi.Input<string>;
    /**
     * Name of the resource group where the vault is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of the Storage Account to be registered
     */
    storageAccountId: pulumi.Input<string>;
}
