import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing MySQL Flexible Server.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.mysql.getFlexibleServer({
 *     name: "existingMySqlFlexibleServer",
 *     resourceGroupName: "existingResGroup",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getFlexibleServer(args: GetFlexibleServerArgs, opts?: pulumi.InvokeOptions): Promise<GetFlexibleServerResult>;
/**
 * A collection of arguments for invoking getFlexibleServer.
 */
export interface GetFlexibleServerArgs {
    /**
     * Specifies the name of the MySQL Flexible Server.
     */
    name: string;
    /**
     * The name of the resource group for the MySQL Flexible Server.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getFlexibleServer.
 */
export interface GetFlexibleServerResult {
    /**
     * The Administrator Login of the MySQL Flexible Server.
     */
    readonly administratorLogin: string;
    /**
     * The backup retention days of the MySQL Flexible Server.
     */
    readonly backupRetentionDays: number;
    /**
     * The ID of the virtual network subnet the MySQL Flexible Server is created in.
     */
    readonly delegatedSubnetId: string;
    /**
     * The fully qualified domain name of the MySQL Flexible Server.
     */
    readonly fqdn: string;
    /**
     * Is geo redundant backup enabled?
     */
    readonly geoRedundantBackupEnabled: boolean;
    /**
     * A `highAvailability` block for this MySQL Flexible Server as defined below.
     */
    readonly highAvailabilities: outputs.mysql.GetFlexibleServerHighAvailability[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The Azure Region of the MySQL Flexible Server.
     */
    readonly location: string;
    /**
     * A `maintenanceWindow` block for this MySQL Flexible Server as defined below.
     */
    readonly maintenanceWindows: outputs.mysql.GetFlexibleServerMaintenanceWindow[];
    readonly name: string;
    /**
     * The ID of the private dns zone of the MySQL Flexible Server.
     */
    readonly privateDnsZoneId: string;
    /**
     * Is the public network access enabled?
     */
    readonly publicNetworkAccessEnabled: boolean;
    /**
     * The maximum number of replicas that a primary MySQL Flexible Server can have.
     */
    readonly replicaCapacity: number;
    /**
     * The replication role of the MySQL Flexible Server.
     */
    readonly replicationRole: string;
    readonly resourceGroupName: string;
    readonly restorePointInTime: string;
    /**
     * The SKU Name of the MySQL Flexible Server.
     */
    readonly skuName: string;
    /**
     * A `storage` block for this MySQL Flexible Server as defined below.
     */
    readonly storages: outputs.mysql.GetFlexibleServerStorage[];
    /**
     * A mapping of tags which are assigned to the MySQL Flexible Server.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The version of the MySQL Flexible Server.
     */
    readonly version: string;
    /**
     * The availability zones of the MySQL Flexible Server.
     */
    readonly zone: string;
}
export declare function getFlexibleServerOutput(args: GetFlexibleServerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFlexibleServerResult>;
/**
 * A collection of arguments for invoking getFlexibleServer.
 */
export interface GetFlexibleServerOutputArgs {
    /**
     * Specifies the name of the MySQL Flexible Server.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group for the MySQL Flexible Server.
     */
    resourceGroupName: pulumi.Input<string>;
}
