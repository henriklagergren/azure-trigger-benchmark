import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a PostgreSQL Server.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleServer = new azure.postgresql.Server("exampleServer", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     administratorLogin: "psqladmin",
 *     administratorLoginPassword: "H@Sh1CoR3!",
 *     skuName: "GP_Gen5_4",
 *     version: "9.6",
 *     storageMb: 640000,
 *     backupRetentionDays: 7,
 *     geoRedundantBackupEnabled: true,
 *     autoGrowEnabled: true,
 *     publicNetworkAccessEnabled: false,
 *     sslEnforcementEnabled: true,
 *     sslMinimalTlsVersionEnforced: "TLS1_2",
 * });
 * ```
 *
 * ## Import
 *
 * PostgreSQL Server's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:postgresql/server:Server server1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.DBforPostgreSQL/servers/server1
 * ```
 */
export declare class Server extends pulumi.CustomResource {
    /**
     * Get an existing Server resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServerState, opts?: pulumi.CustomResourceOptions): Server;
    /**
     * Returns true if the given object is an instance of Server.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Server;
    /**
     * The Administrator Login for the PostgreSQL Server. Required when `createMode` is `Default`. Changing this forces a new resource to be created.
     */
    readonly administratorLogin: pulumi.Output<string>;
    /**
     * The Password associated with the `administratorLogin` for the PostgreSQL Server. Required when `createMode` is `Default`.
     */
    readonly administratorLoginPassword: pulumi.Output<string | undefined>;
    /**
     * Enable/Disable auto-growing of the storage. Storage auto-grow prevents your server from running out of storage and becoming read-only. If storage auto grow is enabled, the storage automatically grows without impacting the workload. The default value if not explicitly specified is `true`.
     */
    readonly autoGrowEnabled: pulumi.Output<boolean>;
    /**
     * Backup retention days for the server, supported values are between `7` and `35` days.
     */
    readonly backupRetentionDays: pulumi.Output<number>;
    /**
     * The creation mode. Can be used to restore or replicate existing servers. Possible values are `Default`, `Replica`, `GeoRestore`, and `PointInTimeRestore`. Defaults to `Default.`
     */
    readonly createMode: pulumi.Output<string | undefined>;
    /**
     * For creation modes other then default the source server ID to use.
     */
    readonly creationSourceServerId: pulumi.Output<string | undefined>;
    /**
     * The FQDN of the PostgreSQL Server.
     */
    readonly fqdn: pulumi.Output<string>;
    /**
     * Turn Geo-redundant server backups on/off. This allows you to choose between locally redundant or geo-redundant backup storage in the General Purpose and Memory Optimized tiers. When the backups are stored in geo-redundant backup storage, they are not only stored within the region in which your server is hosted, but are also replicated to a paired data center. This provides better protection and ability to restore your server in a different region in the event of a disaster. This is not support for the Basic tier. Changing this forces a new resource to be created.
     */
    readonly geoRedundantBackupEnabled: pulumi.Output<boolean>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.postgresql.ServerIdentity | undefined>;
    /**
     * Whether or not infrastructure is encrypted for this server. Defaults to `false`. Changing this forces a new resource to be created.
     */
    readonly infrastructureEncryptionEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the PostgreSQL Server. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Whether or not public network access is allowed for this server. Defaults to `true`.
     */
    readonly publicNetworkAccessEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource group in which to create the PostgreSQL Server. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * When `createMode` is `PointInTimeRestore` the point in time to restore from `creationSourceServerId`.
     */
    readonly restorePointInTime: pulumi.Output<string | undefined>;
    /**
     * Specifies the SKU Name for this PostgreSQL Server. The name of the SKU, follows the `tier` + `family` + `cores` pattern (e.g. `B_Gen4_1`, `GP_Gen5_8`). For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/postgresql/singleserver/servers/create#sku).
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * @deprecated this has been renamed to the boolean `ssl_enforcement_enabled` and will be removed in version 3.0 of the provider.
     */
    readonly sslEnforcement: pulumi.Output<string>;
    /**
     * Specifies if SSL should be enforced on connections. Possible values are `true` and `false`.
     */
    readonly sslEnforcementEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The mimimun TLS version to support on the sever. Possible values are `TLSEnforcementDisabled`, `TLS1_0`, `TLS1_1`, and `TLS1_2`. Defaults to `TLSEnforcementDisabled`.
     */
    readonly sslMinimalTlsVersionEnforced: pulumi.Output<string | undefined>;
    /**
     * Max storage allowed for a server. Possible values are between `5120` MB(5GB) and `1048576` MB(1TB) for the Basic SKU and between `5120` MB(5GB) and `16777216` MB(16TB) for General Purpose/Memory Optimized SKUs. For more information see the [product documentation](https://docs.microsoft.com/en-us/azure/postgresql/concepts-pricing-tiers#storage).
     */
    readonly storageMb: pulumi.Output<number>;
    /**
     * @deprecated all storage_profile properties have been move to the top level. This block will be removed in version 3.0 of the provider.
     */
    readonly storageProfile: pulumi.Output<outputs.postgresql.ServerStorageProfile>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Threat detection policy configuration, known in the API as Server Security Alerts Policy. The `threatDetectionPolicy` block supports fields documented below.
     */
    readonly threatDetectionPolicy: pulumi.Output<outputs.postgresql.ServerThreatDetectionPolicy | undefined>;
    /**
     * Specifies the version of PostgreSQL to use. Valid values are `9.5`, `9.6`, `10`, `10.0`, and `11`. Changing this forces a new resource to be created.
     */
    readonly version: pulumi.Output<string>;
    /**
     * Create a Server resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Server resources.
 */
export interface ServerState {
    /**
     * The Administrator Login for the PostgreSQL Server. Required when `createMode` is `Default`. Changing this forces a new resource to be created.
     */
    administratorLogin?: pulumi.Input<string>;
    /**
     * The Password associated with the `administratorLogin` for the PostgreSQL Server. Required when `createMode` is `Default`.
     */
    administratorLoginPassword?: pulumi.Input<string>;
    /**
     * Enable/Disable auto-growing of the storage. Storage auto-grow prevents your server from running out of storage and becoming read-only. If storage auto grow is enabled, the storage automatically grows without impacting the workload. The default value if not explicitly specified is `true`.
     */
    autoGrowEnabled?: pulumi.Input<boolean>;
    /**
     * Backup retention days for the server, supported values are between `7` and `35` days.
     */
    backupRetentionDays?: pulumi.Input<number>;
    /**
     * The creation mode. Can be used to restore or replicate existing servers. Possible values are `Default`, `Replica`, `GeoRestore`, and `PointInTimeRestore`. Defaults to `Default.`
     */
    createMode?: pulumi.Input<string>;
    /**
     * For creation modes other then default the source server ID to use.
     */
    creationSourceServerId?: pulumi.Input<string>;
    /**
     * The FQDN of the PostgreSQL Server.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * Turn Geo-redundant server backups on/off. This allows you to choose between locally redundant or geo-redundant backup storage in the General Purpose and Memory Optimized tiers. When the backups are stored in geo-redundant backup storage, they are not only stored within the region in which your server is hosted, but are also replicated to a paired data center. This provides better protection and ability to restore your server in a different region in the event of a disaster. This is not support for the Basic tier. Changing this forces a new resource to be created.
     */
    geoRedundantBackupEnabled?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.postgresql.ServerIdentity>;
    /**
     * Whether or not infrastructure is encrypted for this server. Defaults to `false`. Changing this forces a new resource to be created.
     */
    infrastructureEncryptionEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the PostgreSQL Server. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether or not public network access is allowed for this server. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the resource group in which to create the PostgreSQL Server. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * When `createMode` is `PointInTimeRestore` the point in time to restore from `creationSourceServerId`.
     */
    restorePointInTime?: pulumi.Input<string>;
    /**
     * Specifies the SKU Name for this PostgreSQL Server. The name of the SKU, follows the `tier` + `family` + `cores` pattern (e.g. `B_Gen4_1`, `GP_Gen5_8`). For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/postgresql/singleserver/servers/create#sku).
     */
    skuName?: pulumi.Input<string>;
    /**
     * @deprecated this has been renamed to the boolean `ssl_enforcement_enabled` and will be removed in version 3.0 of the provider.
     */
    sslEnforcement?: pulumi.Input<string>;
    /**
     * Specifies if SSL should be enforced on connections. Possible values are `true` and `false`.
     */
    sslEnforcementEnabled?: pulumi.Input<boolean>;
    /**
     * The mimimun TLS version to support on the sever. Possible values are `TLSEnforcementDisabled`, `TLS1_0`, `TLS1_1`, and `TLS1_2`. Defaults to `TLSEnforcementDisabled`.
     */
    sslMinimalTlsVersionEnforced?: pulumi.Input<string>;
    /**
     * Max storage allowed for a server. Possible values are between `5120` MB(5GB) and `1048576` MB(1TB) for the Basic SKU and between `5120` MB(5GB) and `16777216` MB(16TB) for General Purpose/Memory Optimized SKUs. For more information see the [product documentation](https://docs.microsoft.com/en-us/azure/postgresql/concepts-pricing-tiers#storage).
     */
    storageMb?: pulumi.Input<number>;
    /**
     * @deprecated all storage_profile properties have been move to the top level. This block will be removed in version 3.0 of the provider.
     */
    storageProfile?: pulumi.Input<inputs.postgresql.ServerStorageProfile>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Threat detection policy configuration, known in the API as Server Security Alerts Policy. The `threatDetectionPolicy` block supports fields documented below.
     */
    threatDetectionPolicy?: pulumi.Input<inputs.postgresql.ServerThreatDetectionPolicy>;
    /**
     * Specifies the version of PostgreSQL to use. Valid values are `9.5`, `9.6`, `10`, `10.0`, and `11`. Changing this forces a new resource to be created.
     */
    version?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Server resource.
 */
export interface ServerArgs {
    /**
     * The Administrator Login for the PostgreSQL Server. Required when `createMode` is `Default`. Changing this forces a new resource to be created.
     */
    administratorLogin?: pulumi.Input<string>;
    /**
     * The Password associated with the `administratorLogin` for the PostgreSQL Server. Required when `createMode` is `Default`.
     */
    administratorLoginPassword?: pulumi.Input<string>;
    /**
     * Enable/Disable auto-growing of the storage. Storage auto-grow prevents your server from running out of storage and becoming read-only. If storage auto grow is enabled, the storage automatically grows without impacting the workload. The default value if not explicitly specified is `true`.
     */
    autoGrowEnabled?: pulumi.Input<boolean>;
    /**
     * Backup retention days for the server, supported values are between `7` and `35` days.
     */
    backupRetentionDays?: pulumi.Input<number>;
    /**
     * The creation mode. Can be used to restore or replicate existing servers. Possible values are `Default`, `Replica`, `GeoRestore`, and `PointInTimeRestore`. Defaults to `Default.`
     */
    createMode?: pulumi.Input<string>;
    /**
     * For creation modes other then default the source server ID to use.
     */
    creationSourceServerId?: pulumi.Input<string>;
    /**
     * Turn Geo-redundant server backups on/off. This allows you to choose between locally redundant or geo-redundant backup storage in the General Purpose and Memory Optimized tiers. When the backups are stored in geo-redundant backup storage, they are not only stored within the region in which your server is hosted, but are also replicated to a paired data center. This provides better protection and ability to restore your server in a different region in the event of a disaster. This is not support for the Basic tier. Changing this forces a new resource to be created.
     */
    geoRedundantBackupEnabled?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.postgresql.ServerIdentity>;
    /**
     * Whether or not infrastructure is encrypted for this server. Defaults to `false`. Changing this forces a new resource to be created.
     */
    infrastructureEncryptionEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the PostgreSQL Server. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether or not public network access is allowed for this server. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the resource group in which to create the PostgreSQL Server. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * When `createMode` is `PointInTimeRestore` the point in time to restore from `creationSourceServerId`.
     */
    restorePointInTime?: pulumi.Input<string>;
    /**
     * Specifies the SKU Name for this PostgreSQL Server. The name of the SKU, follows the `tier` + `family` + `cores` pattern (e.g. `B_Gen4_1`, `GP_Gen5_8`). For more information see the [product documentation](https://docs.microsoft.com/en-us/rest/api/postgresql/singleserver/servers/create#sku).
     */
    skuName: pulumi.Input<string>;
    /**
     * @deprecated this has been renamed to the boolean `ssl_enforcement_enabled` and will be removed in version 3.0 of the provider.
     */
    sslEnforcement?: pulumi.Input<string>;
    /**
     * Specifies if SSL should be enforced on connections. Possible values are `true` and `false`.
     */
    sslEnforcementEnabled?: pulumi.Input<boolean>;
    /**
     * The mimimun TLS version to support on the sever. Possible values are `TLSEnforcementDisabled`, `TLS1_0`, `TLS1_1`, and `TLS1_2`. Defaults to `TLSEnforcementDisabled`.
     */
    sslMinimalTlsVersionEnforced?: pulumi.Input<string>;
    /**
     * Max storage allowed for a server. Possible values are between `5120` MB(5GB) and `1048576` MB(1TB) for the Basic SKU and between `5120` MB(5GB) and `16777216` MB(16TB) for General Purpose/Memory Optimized SKUs. For more information see the [product documentation](https://docs.microsoft.com/en-us/azure/postgresql/concepts-pricing-tiers#storage).
     */
    storageMb?: pulumi.Input<number>;
    /**
     * @deprecated all storage_profile properties have been move to the top level. This block will be removed in version 3.0 of the provider.
     */
    storageProfile?: pulumi.Input<inputs.postgresql.ServerStorageProfile>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Threat detection policy configuration, known in the API as Server Security Alerts Policy. The `threatDetectionPolicy` block supports fields documented below.
     */
    threatDetectionPolicy?: pulumi.Input<inputs.postgresql.ServerThreatDetectionPolicy>;
    /**
     * Specifies the version of PostgreSQL to use. Valid values are `9.5`, `9.6`, `10`, `10.0`, and `11`. Changing this forces a new resource to be created.
     */
    version: pulumi.Input<string>;
}
