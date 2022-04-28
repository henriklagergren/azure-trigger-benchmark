import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Backup Vault.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const rg = new azure.core.ResourceGroup("rg", {location: "West Europe"});
 * const example = new azure.dataprotection.BackupVault("example", {
 *     resourceGroupName: rg.name,
 *     location: rg.location,
 *     datastoreType: "VaultStore",
 *     redundancy: "LocallyRedundant",
 * });
 * ```
 *
 * ## Import
 *
 * Backup Vaults can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:dataprotection/backupVault:BackupVault example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DataProtection/backupVaults/vault1
 * ```
 */
export declare class BackupVault extends pulumi.CustomResource {
    /**
     * Get an existing BackupVault resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackupVaultState, opts?: pulumi.CustomResourceOptions): BackupVault;
    /**
     * Returns true if the given object is an instance of BackupVault.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BackupVault;
    /**
     * Specifies the type of the data store. Possible values are `ArchiveStore`, `SnapshotStore` and `VaultStore`.
     */
    readonly datastoreType: pulumi.Output<string>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.dataprotection.BackupVaultIdentity | undefined>;
    /**
     * The Azure Region where the Backup Vault should exist. Changing this forces a new Backup Vault to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Backup Vault. Changing this forces a new Backup Vault to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the backup storage redundancy. Possible values are `GeoRedundant` and `LocallyRedundant`. Changing this forces a new Backup Vault to be created.
     */
    readonly redundancy: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Backup Vault should exist. Changing this forces a new Backup Vault to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Backup Vault.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a BackupVault resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupVaultArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering BackupVault resources.
 */
export interface BackupVaultState {
    /**
     * Specifies the type of the data store. Possible values are `ArchiveStore`, `SnapshotStore` and `VaultStore`.
     */
    datastoreType?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.dataprotection.BackupVaultIdentity>;
    /**
     * The Azure Region where the Backup Vault should exist. Changing this forces a new Backup Vault to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Backup Vault. Changing this forces a new Backup Vault to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the backup storage redundancy. Possible values are `GeoRedundant` and `LocallyRedundant`. Changing this forces a new Backup Vault to be created.
     */
    redundancy?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Backup Vault should exist. Changing this forces a new Backup Vault to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Backup Vault.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a BackupVault resource.
 */
export interface BackupVaultArgs {
    /**
     * Specifies the type of the data store. Possible values are `ArchiveStore`, `SnapshotStore` and `VaultStore`.
     */
    datastoreType: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.dataprotection.BackupVaultIdentity>;
    /**
     * The Azure Region where the Backup Vault should exist. Changing this forces a new Backup Vault to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Backup Vault. Changing this forces a new Backup Vault to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the backup storage redundancy. Possible values are `GeoRedundant` and `LocallyRedundant`. Changing this forces a new Backup Vault to be created.
     */
    redundancy: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Backup Vault should exist. Changing this forces a new Backup Vault to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Backup Vault.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
