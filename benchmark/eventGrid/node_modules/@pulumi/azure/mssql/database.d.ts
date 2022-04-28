import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a MS SQL Database.
 *
 * > **Note:** The Database Extended Auditing Policy can be set inline here, as well as with the mssqlDatabaseExtendedAuditingPolicy resource resource. You can only use one or the other and using both will cause a conflict.
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
 * const exampleServer = new azure.mssql.Server("exampleServer", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     version: "12.0",
 *     administratorLogin: "4dm1n157r470r",
 *     administratorLoginPassword: "4-v3ry-53cr37-p455w0rd",
 * });
 * const test = new azure.mssql.Database("test", {
 *     serverId: exampleServer.id,
 *     collation: "SQL_Latin1_General_CP1_CI_AS",
 *     licenseType: "LicenseIncluded",
 *     maxSizeGb: 4,
 *     readScale: true,
 *     skuName: "BC_Gen5_2",
 *     zoneRedundant: true,
 *     extendedAuditingPolicy: {
 *         storageEndpoint: exampleAccount.primaryBlobEndpoint,
 *         storageAccountAccessKey: exampleAccount.primaryAccessKey,
 *         storageAccountAccessKeyIsSecondary: true,
 *         retentionInDays: 6,
 *     },
 *     tags: {
 *         foo: "bar",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * SQL Database can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:mssql/database:Database example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/databases/example1
 * ```
 */
export declare class Database extends pulumi.CustomResource {
    /**
     * Get an existing Database resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseState, opts?: pulumi.CustomResourceOptions): Database;
    /**
     * Returns true if the given object is an instance of Database.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Database;
    /**
     * Time in minutes after which database is automatically paused. A value of `-1` means that automatic pause is disabled. This property is only settable for General Purpose Serverless databases.
     */
    readonly autoPauseDelayInMinutes: pulumi.Output<number>;
    /**
     * Specifies the collation of the database. Changing this forces a new resource to be created.
     */
    readonly collation: pulumi.Output<string>;
    /**
     * The create mode of the database. Possible values are `Copy`, `Default`, `OnlineSecondary`, `PointInTimeRestore`, `Recovery`, `Restore`, `RestoreExternalBackup`, `RestoreExternalBackupSecondary`, `RestoreLongTermRetentionBackup` and `Secondary`.
     */
    readonly createMode: pulumi.Output<string | undefined>;
    /**
     * The ID of the source database from which to create the new database. This should only be used for databases with `createMode` values that use another database as reference. Changing this forces a new resource to be created.
     */
    readonly creationSourceDatabaseId: pulumi.Output<string>;
    /**
     * Specifies the ID of the elastic pool containing this database.
     */
    readonly elasticPoolId: pulumi.Output<string | undefined>;
    /**
     * A `extendedAuditingPolicy` block as defined below.
     *
     * @deprecated the `extended_auditing_policy` block has been moved to `azurerm_mssql_server_extended_auditing_policy` and `azurerm_mssql_database_extended_auditing_policy`. This block will be removed in version 3.0 of the provider.
     */
    readonly extendedAuditingPolicy: pulumi.Output<outputs.mssql.DatabaseExtendedAuditingPolicy>;
    /**
     * A boolean that specifies if the Geo Backup Policy is enabled.
     */
    readonly geoBackupEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the license type applied to this database. Possible values are `LicenseIncluded` and `BasePrice`.
     */
    readonly licenseType: pulumi.Output<string>;
    /**
     * A `longTermRetentionPolicy` block as defined below.
     */
    readonly longTermRetentionPolicy: pulumi.Output<outputs.mssql.DatabaseLongTermRetentionPolicy>;
    /**
     * The max size of the database in gigabytes.
     */
    readonly maxSizeGb: pulumi.Output<number>;
    /**
     * Minimal capacity that database will always have allocated, if not paused. This property is only settable for General Purpose Serverless databases.
     */
    readonly minCapacity: pulumi.Output<number>;
    /**
     * The name of the Ms SQL Database. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The number of readonly secondary replicas associated with the database to which readonly application intent connections may be routed. This property is only settable for Hyperscale edition databases.
     */
    readonly readReplicaCount: pulumi.Output<number>;
    /**
     * If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases.
     */
    readonly readScale: pulumi.Output<boolean>;
    /**
     * The ID of the database to be recovered. This property is only applicable when the `createMode` is `Recovery`.
     */
    readonly recoverDatabaseId: pulumi.Output<string | undefined>;
    /**
     * The ID of the database to be restored. This property is only applicable when the `createMode` is `Restore`.
     */
    readonly restoreDroppedDatabaseId: pulumi.Output<string | undefined>;
    /**
     * Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. This property is only settable for `createMode`= `PointInTimeRestore`  databases.
     */
    readonly restorePointInTime: pulumi.Output<string>;
    /**
     * Specifies the name of the sample schema to apply when creating this database. Possible value is `AdventureWorksLT`.
     */
    readonly sampleName: pulumi.Output<string>;
    /**
     * The id of the Ms SQL Server on which to create the database. Changing this forces a new resource to be created.
     */
    readonly serverId: pulumi.Output<string>;
    /**
     * A `shortTermRetentionPolicy` block as defined below.
     */
    readonly shortTermRetentionPolicy: pulumi.Output<outputs.mssql.DatabaseShortTermRetentionPolicy>;
    /**
     * Specifies the name of the SKU used by the database. For example, `GP_S_Gen5_2`,`HS_Gen4_1`,`BC_Gen5_2`, `ElasticPool`, `Basic`,`S0`, `P2` ,`DW100c`, `DS100`. Changing this from the HyperScale service tier to another service tier will force a new resource to be created.
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * Specifies the storage account type used to store backups for this database. Changing this forces a new resource to be created.  Possible values are `GRS`, `LRS` and `ZRS`.  The default value is `GRS`.
     */
    readonly storageAccountType: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Threat detection policy configuration. The `threatDetectionPolicy` block supports fields documented below.
     */
    readonly threatDetectionPolicy: pulumi.Output<outputs.mssql.DatabaseThreatDetectionPolicy>;
    /**
     * Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones. This property is only settable for Premium and Business Critical databases.
     */
    readonly zoneRedundant: pulumi.Output<boolean>;
    /**
     * Create a Database resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Database resources.
 */
export interface DatabaseState {
    /**
     * Time in minutes after which database is automatically paused. A value of `-1` means that automatic pause is disabled. This property is only settable for General Purpose Serverless databases.
     */
    autoPauseDelayInMinutes?: pulumi.Input<number>;
    /**
     * Specifies the collation of the database. Changing this forces a new resource to be created.
     */
    collation?: pulumi.Input<string>;
    /**
     * The create mode of the database. Possible values are `Copy`, `Default`, `OnlineSecondary`, `PointInTimeRestore`, `Recovery`, `Restore`, `RestoreExternalBackup`, `RestoreExternalBackupSecondary`, `RestoreLongTermRetentionBackup` and `Secondary`.
     */
    createMode?: pulumi.Input<string>;
    /**
     * The ID of the source database from which to create the new database. This should only be used for databases with `createMode` values that use another database as reference. Changing this forces a new resource to be created.
     */
    creationSourceDatabaseId?: pulumi.Input<string>;
    /**
     * Specifies the ID of the elastic pool containing this database.
     */
    elasticPoolId?: pulumi.Input<string>;
    /**
     * A `extendedAuditingPolicy` block as defined below.
     *
     * @deprecated the `extended_auditing_policy` block has been moved to `azurerm_mssql_server_extended_auditing_policy` and `azurerm_mssql_database_extended_auditing_policy`. This block will be removed in version 3.0 of the provider.
     */
    extendedAuditingPolicy?: pulumi.Input<inputs.mssql.DatabaseExtendedAuditingPolicy>;
    /**
     * A boolean that specifies if the Geo Backup Policy is enabled.
     */
    geoBackupEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the license type applied to this database. Possible values are `LicenseIncluded` and `BasePrice`.
     */
    licenseType?: pulumi.Input<string>;
    /**
     * A `longTermRetentionPolicy` block as defined below.
     */
    longTermRetentionPolicy?: pulumi.Input<inputs.mssql.DatabaseLongTermRetentionPolicy>;
    /**
     * The max size of the database in gigabytes.
     */
    maxSizeGb?: pulumi.Input<number>;
    /**
     * Minimal capacity that database will always have allocated, if not paused. This property is only settable for General Purpose Serverless databases.
     */
    minCapacity?: pulumi.Input<number>;
    /**
     * The name of the Ms SQL Database. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The number of readonly secondary replicas associated with the database to which readonly application intent connections may be routed. This property is only settable for Hyperscale edition databases.
     */
    readReplicaCount?: pulumi.Input<number>;
    /**
     * If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases.
     */
    readScale?: pulumi.Input<boolean>;
    /**
     * The ID of the database to be recovered. This property is only applicable when the `createMode` is `Recovery`.
     */
    recoverDatabaseId?: pulumi.Input<string>;
    /**
     * The ID of the database to be restored. This property is only applicable when the `createMode` is `Restore`.
     */
    restoreDroppedDatabaseId?: pulumi.Input<string>;
    /**
     * Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. This property is only settable for `createMode`= `PointInTimeRestore`  databases.
     */
    restorePointInTime?: pulumi.Input<string>;
    /**
     * Specifies the name of the sample schema to apply when creating this database. Possible value is `AdventureWorksLT`.
     */
    sampleName?: pulumi.Input<string>;
    /**
     * The id of the Ms SQL Server on which to create the database. Changing this forces a new resource to be created.
     */
    serverId?: pulumi.Input<string>;
    /**
     * A `shortTermRetentionPolicy` block as defined below.
     */
    shortTermRetentionPolicy?: pulumi.Input<inputs.mssql.DatabaseShortTermRetentionPolicy>;
    /**
     * Specifies the name of the SKU used by the database. For example, `GP_S_Gen5_2`,`HS_Gen4_1`,`BC_Gen5_2`, `ElasticPool`, `Basic`,`S0`, `P2` ,`DW100c`, `DS100`. Changing this from the HyperScale service tier to another service tier will force a new resource to be created.
     */
    skuName?: pulumi.Input<string>;
    /**
     * Specifies the storage account type used to store backups for this database. Changing this forces a new resource to be created.  Possible values are `GRS`, `LRS` and `ZRS`.  The default value is `GRS`.
     */
    storageAccountType?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Threat detection policy configuration. The `threatDetectionPolicy` block supports fields documented below.
     */
    threatDetectionPolicy?: pulumi.Input<inputs.mssql.DatabaseThreatDetectionPolicy>;
    /**
     * Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones. This property is only settable for Premium and Business Critical databases.
     */
    zoneRedundant?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a Database resource.
 */
export interface DatabaseArgs {
    /**
     * Time in minutes after which database is automatically paused. A value of `-1` means that automatic pause is disabled. This property is only settable for General Purpose Serverless databases.
     */
    autoPauseDelayInMinutes?: pulumi.Input<number>;
    /**
     * Specifies the collation of the database. Changing this forces a new resource to be created.
     */
    collation?: pulumi.Input<string>;
    /**
     * The create mode of the database. Possible values are `Copy`, `Default`, `OnlineSecondary`, `PointInTimeRestore`, `Recovery`, `Restore`, `RestoreExternalBackup`, `RestoreExternalBackupSecondary`, `RestoreLongTermRetentionBackup` and `Secondary`.
     */
    createMode?: pulumi.Input<string>;
    /**
     * The ID of the source database from which to create the new database. This should only be used for databases with `createMode` values that use another database as reference. Changing this forces a new resource to be created.
     */
    creationSourceDatabaseId?: pulumi.Input<string>;
    /**
     * Specifies the ID of the elastic pool containing this database.
     */
    elasticPoolId?: pulumi.Input<string>;
    /**
     * A `extendedAuditingPolicy` block as defined below.
     *
     * @deprecated the `extended_auditing_policy` block has been moved to `azurerm_mssql_server_extended_auditing_policy` and `azurerm_mssql_database_extended_auditing_policy`. This block will be removed in version 3.0 of the provider.
     */
    extendedAuditingPolicy?: pulumi.Input<inputs.mssql.DatabaseExtendedAuditingPolicy>;
    /**
     * A boolean that specifies if the Geo Backup Policy is enabled.
     */
    geoBackupEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the license type applied to this database. Possible values are `LicenseIncluded` and `BasePrice`.
     */
    licenseType?: pulumi.Input<string>;
    /**
     * A `longTermRetentionPolicy` block as defined below.
     */
    longTermRetentionPolicy?: pulumi.Input<inputs.mssql.DatabaseLongTermRetentionPolicy>;
    /**
     * The max size of the database in gigabytes.
     */
    maxSizeGb?: pulumi.Input<number>;
    /**
     * Minimal capacity that database will always have allocated, if not paused. This property is only settable for General Purpose Serverless databases.
     */
    minCapacity?: pulumi.Input<number>;
    /**
     * The name of the Ms SQL Database. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The number of readonly secondary replicas associated with the database to which readonly application intent connections may be routed. This property is only settable for Hyperscale edition databases.
     */
    readReplicaCount?: pulumi.Input<number>;
    /**
     * If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases.
     */
    readScale?: pulumi.Input<boolean>;
    /**
     * The ID of the database to be recovered. This property is only applicable when the `createMode` is `Recovery`.
     */
    recoverDatabaseId?: pulumi.Input<string>;
    /**
     * The ID of the database to be restored. This property is only applicable when the `createMode` is `Restore`.
     */
    restoreDroppedDatabaseId?: pulumi.Input<string>;
    /**
     * Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. This property is only settable for `createMode`= `PointInTimeRestore`  databases.
     */
    restorePointInTime?: pulumi.Input<string>;
    /**
     * Specifies the name of the sample schema to apply when creating this database. Possible value is `AdventureWorksLT`.
     */
    sampleName?: pulumi.Input<string>;
    /**
     * The id of the Ms SQL Server on which to create the database. Changing this forces a new resource to be created.
     */
    serverId: pulumi.Input<string>;
    /**
     * A `shortTermRetentionPolicy` block as defined below.
     */
    shortTermRetentionPolicy?: pulumi.Input<inputs.mssql.DatabaseShortTermRetentionPolicy>;
    /**
     * Specifies the name of the SKU used by the database. For example, `GP_S_Gen5_2`,`HS_Gen4_1`,`BC_Gen5_2`, `ElasticPool`, `Basic`,`S0`, `P2` ,`DW100c`, `DS100`. Changing this from the HyperScale service tier to another service tier will force a new resource to be created.
     */
    skuName?: pulumi.Input<string>;
    /**
     * Specifies the storage account type used to store backups for this database. Changing this forces a new resource to be created.  Possible values are `GRS`, `LRS` and `ZRS`.  The default value is `GRS`.
     */
    storageAccountType?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Threat detection policy configuration. The `threatDetectionPolicy` block supports fields documented below.
     */
    threatDetectionPolicy?: pulumi.Input<inputs.mssql.DatabaseThreatDetectionPolicy>;
    /**
     * Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones. This property is only settable for Premium and Business Critical databases.
     */
    zoneRedundant?: pulumi.Input<boolean>;
}
