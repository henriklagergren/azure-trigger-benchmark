import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Backup Vault.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.dataprotection.getBackupVault({
 *     name: "existing-backup-vault",
 *     resourceGroupName: "existing-resource-group",
 * });
 * export const azurermDataProtectionBackupVaultId = data.azurerm_vpn_gateway.example.id;
 * export const azurermDataProtectionBackupVaultPrincipalId = example.then(example => example.identities?[0]?.principalId);
 * ```
 */
export declare function getBackupVault(args: GetBackupVaultArgs, opts?: pulumi.InvokeOptions): Promise<GetBackupVaultResult>;
/**
 * A collection of arguments for invoking getBackupVault.
 */
export interface GetBackupVaultArgs {
    /**
     * Specifies the name of the Backup Vault.
     */
    name: string;
    /**
     * The name of the Resource Group where the Backup Vault exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getBackupVault.
 */
export interface GetBackupVaultResult {
    /**
     * Specifies the type of the data store.
     */
    readonly datastoreType: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * A `identity` block as defined below.
     */
    readonly identities: outputs.dataprotection.GetBackupVaultIdentity[];
    /**
     * The Azure Region where the Backup Vault exists.
     */
    readonly location: string;
    readonly name: string;
    /**
     * Specifies the backup storage redundancy.
     */
    readonly redundancy: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags which are assigned to the Backup Vault.
     */
    readonly tags: {
        [key: string]: string;
    };
}
export declare function getBackupVaultOutput(args: GetBackupVaultOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBackupVaultResult>;
/**
 * A collection of arguments for invoking getBackupVault.
 */
export interface GetBackupVaultOutputArgs {
    /**
     * Specifies the name of the Backup Vault.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Backup Vault exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
