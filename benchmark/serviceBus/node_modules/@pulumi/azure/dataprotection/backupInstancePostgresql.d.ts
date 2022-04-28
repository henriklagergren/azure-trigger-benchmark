import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Backup Instance to back up PostgreSQL.
 *
 * > **Note:** Before using this resource, there are some prerequisite permissions for configure backup and restore. See more details from https://docs.microsoft.com/en-us/azure/backup/backup-azure-database-postgresql#prerequisite-permissions-for-configure-backup-and-restore.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleServer = new azure.postgresql.Server("exampleServer", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     skuName: "B_Gen5_2",
 *     storageMb: 5120,
 *     backupRetentionDays: 7,
 *     geoRedundantBackupEnabled: false,
 *     autoGrowEnabled: true,
 *     administratorLogin: "psqladmin",
 *     administratorLoginPassword: "H@Sh1CoR3!",
 *     version: "9.5",
 *     sslEnforcementEnabled: true,
 * });
 * const exampleFirewallRule = new azure.postgresql.FirewallRule("exampleFirewallRule", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     serverName: exampleServer.name,
 *     startIpAddress: "0.0.0.0",
 *     endIpAddress: "0.0.0.0",
 * });
 * const exampleDatabase = new azure.postgresql.Database("exampleDatabase", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     serverName: exampleServer.name,
 *     charset: "UTF8",
 *     collation: "English_United States.1252",
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
 * const exampleKeyVault = new azure.keyvault.KeyVault("exampleKeyVault", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tenantId: current.then(current => current.tenantId),
 *     skuName: "premium",
 *     softDeleteRetentionDays: 7,
 *     accessPolicies: [
 *         {
 *             tenantId: current.then(current => current.tenantId),
 *             objectId: current.then(current => current.objectId),
 *             keyPermissions: [
 *                 "create",
 *                 "get",
 *             ],
 *             secretPermissions: [
 *                 "set",
 *                 "get",
 *                 "delete",
 *                 "purge",
 *                 "recover",
 *             ],
 *         },
 *         {
 *             tenantId: exampleBackupVault.identity.apply(identity => identity?.tenantId),
 *             objectId: exampleBackupVault.identity.apply(identity => identity?.principalId),
 *             keyPermissions: [
 *                 "create",
 *                 "get",
 *             ],
 *             secretPermissions: [
 *                 "set",
 *                 "get",
 *                 "delete",
 *                 "purge",
 *                 "recover",
 *             ],
 *         },
 *     ],
 * });
 * const exampleSecret = new azure.keyvault.Secret("exampleSecret", {
 *     value: pulumi.interpolate`Server=${exampleServer.name}.postgres.database.azure.com;Database=${exampleDatabase.name};Port=5432;User Id=psqladmin@${exampleServer.name};Password=H@Sh1CoR3!;Ssl Mode=Require;`,
 *     keyVaultId: exampleKeyVault.id,
 * });
 * const exampleBackupPolicyPostgresql = new azure.dataprotection.BackupPolicyPostgresql("exampleBackupPolicyPostgresql", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     vaultName: exampleBackupVault.name,
 *     backupRepeatingTimeIntervals: ["R/2021-05-23T02:30:00+00:00/P1W"],
 *     defaultRetentionDuration: "P4M",
 * });
 * const exampleAssignment = new azure.authorization.Assignment("exampleAssignment", {
 *     scope: exampleServer.id,
 *     roleDefinitionName: "Reader",
 *     principalId: exampleBackupVault.identity.apply(identity => identity?.principalId),
 * });
 * const exampleBackupInstancePostgresql = new azure.dataprotection.BackupInstancePostgresql("exampleBackupInstancePostgresql", {
 *     location: exampleResourceGroup.location,
 *     vaultId: exampleBackupVault.id,
 *     databaseId: exampleDatabase.id,
 *     backupPolicyId: exampleBackupPolicyPostgresql.id,
 *     databaseCredentialKeyVaultSecretId: exampleSecret.versionlessId,
 * });
 * ```
 *
 * ## Import
 *
 * Backup Instance PostgreSQL can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:dataprotection/backupInstancePostgresql:BackupInstancePostgresql example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DataProtection/backupVaults/vault1/backupInstances/backupInstance1
 * ```
 */
export declare class BackupInstancePostgresql extends pulumi.CustomResource {
    /**
     * Get an existing BackupInstancePostgresql resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackupInstancePostgresqlState, opts?: pulumi.CustomResourceOptions): BackupInstancePostgresql;
    /**
     * Returns true if the given object is an instance of BackupInstancePostgresql.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BackupInstancePostgresql;
    /**
     * The ID of the Backup Policy.
     */
    readonly backupPolicyId: pulumi.Output<string>;
    /**
     * The ID or versionless ID of the key vault secret which stores the connection string of the database.
     */
    readonly databaseCredentialKeyVaultSecretId: pulumi.Output<string | undefined>;
    /**
     * The ID of the source database. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    readonly databaseId: pulumi.Output<string>;
    /**
     * The location of the source database. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Backup Instance PostgreSQL. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the Backup Vault within which the PostgreSQL Backup Instance should exist. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    readonly vaultId: pulumi.Output<string>;
    /**
     * Create a BackupInstancePostgresql resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackupInstancePostgresqlArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering BackupInstancePostgresql resources.
 */
export interface BackupInstancePostgresqlState {
    /**
     * The ID of the Backup Policy.
     */
    backupPolicyId?: pulumi.Input<string>;
    /**
     * The ID or versionless ID of the key vault secret which stores the connection string of the database.
     */
    databaseCredentialKeyVaultSecretId?: pulumi.Input<string>;
    /**
     * The ID of the source database. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    databaseId?: pulumi.Input<string>;
    /**
     * The location of the source database. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Backup Instance PostgreSQL. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Backup Vault within which the PostgreSQL Backup Instance should exist. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    vaultId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a BackupInstancePostgresql resource.
 */
export interface BackupInstancePostgresqlArgs {
    /**
     * The ID of the Backup Policy.
     */
    backupPolicyId: pulumi.Input<string>;
    /**
     * The ID or versionless ID of the key vault secret which stores the connection string of the database.
     */
    databaseCredentialKeyVaultSecretId?: pulumi.Input<string>;
    /**
     * The ID of the source database. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    databaseId: pulumi.Input<string>;
    /**
     * The location of the source database. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Backup Instance PostgreSQL. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Backup Vault within which the PostgreSQL Backup Instance should exist. Changing this forces a new Backup Instance PostgreSQL to be created.
     */
    vaultId: pulumi.Input<string>;
}
