import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing SQL elastic pool.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.mssql.getElasticPool({
 *     name: "mssqlelasticpoolname",
 *     resourceGroupName: "example-resources",
 *     serverName: "example-sql-server",
 * });
 * export const elasticpoolId = example.then(example => example.id);
 * ```
 */
export declare function getElasticPool(args: GetElasticPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetElasticPoolResult>;
/**
 * A collection of arguments for invoking getElasticPool.
 */
export interface GetElasticPoolArgs {
    /**
     * The name of the elastic pool.
     */
    name: string;
    /**
     * The name of the resource group which contains the elastic pool.
     */
    resourceGroupName: string;
    /**
     * The name of the SQL Server which contains the elastic pool.
     */
    serverName: string;
}
/**
 * A collection of values returned by getElasticPool.
 */
export interface GetElasticPoolResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The license type to apply for this database.
     */
    readonly licenseType: string;
    /**
     * Specifies the supported Azure location where the resource exists.
     */
    readonly location: string;
    /**
     * The max data size of the elastic pool in bytes.
     */
    readonly maxSizeBytes: number;
    /**
     * The max data size of the elastic pool in gigabytes.
     */
    readonly maxSizeGb: number;
    /**
     * Specifies the SKU Name for this Elasticpool.
     */
    readonly name: string;
    /**
     * The maximum capacity any one database can consume.
     */
    readonly perDbMaxCapacity: number;
    /**
     * The minimum capacity all databases are guaranteed.
     */
    readonly perDbMinCapacity: number;
    readonly resourceGroupName: string;
    readonly serverName: string;
    /**
     * A `sku` block as defined below.
     */
    readonly skus: outputs.mssql.GetElasticPoolSkus[];
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * Whether or not this elastic pool is zone redundant.
     */
    readonly zoneRedundant: boolean;
}
export declare function getElasticPoolOutput(args: GetElasticPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetElasticPoolResult>;
/**
 * A collection of arguments for invoking getElasticPool.
 */
export interface GetElasticPoolOutputArgs {
    /**
     * The name of the elastic pool.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group which contains the elastic pool.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the SQL Server which contains the elastic pool.
     */
    serverName: pulumi.Input<string>;
}
