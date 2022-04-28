import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Allows you to manage an Azure SQL Elastic Pool via the `v3.0` API which allows for `vCore` and `DTU` based configurations.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleSqlServer = new azure.sql.SqlServer("exampleSqlServer", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     version: "12.0",
 *     administratorLogin: "4dm1n157r470r",
 *     administratorLoginPassword: "4-v3ry-53cr37-p455w0rd",
 * });
 * const exampleElasticPool = new azure.mssql.ElasticPool("exampleElasticPool", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     serverName: exampleSqlServer.name,
 *     licenseType: "LicenseIncluded",
 *     maxSizeGb: 756,
 *     sku: {
 *         name: "BasicPool",
 *         tier: "Basic",
 *         family: "Gen4",
 *         capacity: 4,
 *     },
 *     perDatabaseSettings: {
 *         minCapacity: 0.25,
 *         maxCapacity: 4,
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * SQL Elastic Pool can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:mssql/elasticPool:ElasticPool example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myresourcegroup/providers/Microsoft.Sql/servers/myserver/elasticPools/myelasticpoolname
 * ```
 */
export declare class ElasticPool extends pulumi.CustomResource {
    /**
     * Get an existing ElasticPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ElasticPoolState, opts?: pulumi.CustomResourceOptions): ElasticPool;
    /**
     * Returns true if the given object is an instance of ElasticPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ElasticPool;
    /**
     * Specifies the license type applied to this database. Possible values are `LicenseIncluded` and `BasePrice`.
     */
    readonly licenseType: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The max data size of the elastic pool in bytes. Conflicts with `maxSizeGb`.
     */
    readonly maxSizeBytes: pulumi.Output<number>;
    /**
     * The max data size of the elastic pool in gigabytes. Conflicts with `maxSizeBytes`.
     */
    readonly maxSizeGb: pulumi.Output<number>;
    /**
     * The name of the elastic pool. This needs to be globally unique. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `perDatabaseSettings` block as defined below.
     */
    readonly perDatabaseSettings: pulumi.Output<outputs.mssql.ElasticPoolPerDatabaseSettings>;
    /**
     * The name of the resource group in which to create the elastic pool. This must be the same as the resource group of the underlying SQL server.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The name of the SQL Server on which to create the elastic pool. Changing this forces a new resource to be created.
     */
    readonly serverName: pulumi.Output<string>;
    /**
     * A `sku` block as defined below.
     */
    readonly sku: pulumi.Output<outputs.mssql.ElasticPoolSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Whether or not this elastic pool is zone redundant. `tier` needs to be `Premium` for `DTU` based  or `BusinessCritical` for `vCore` based `sku`. Defaults to `false`.
     */
    readonly zoneRedundant: pulumi.Output<boolean | undefined>;
    /**
     * Create a ElasticPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ElasticPoolArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ElasticPool resources.
 */
export interface ElasticPoolState {
    /**
     * Specifies the license type applied to this database. Possible values are `LicenseIncluded` and `BasePrice`.
     */
    licenseType?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The max data size of the elastic pool in bytes. Conflicts with `maxSizeGb`.
     */
    maxSizeBytes?: pulumi.Input<number>;
    /**
     * The max data size of the elastic pool in gigabytes. Conflicts with `maxSizeBytes`.
     */
    maxSizeGb?: pulumi.Input<number>;
    /**
     * The name of the elastic pool. This needs to be globally unique. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `perDatabaseSettings` block as defined below.
     */
    perDatabaseSettings?: pulumi.Input<inputs.mssql.ElasticPoolPerDatabaseSettings>;
    /**
     * The name of the resource group in which to create the elastic pool. This must be the same as the resource group of the underlying SQL server.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The name of the SQL Server on which to create the elastic pool. Changing this forces a new resource to be created.
     */
    serverName?: pulumi.Input<string>;
    /**
     * A `sku` block as defined below.
     */
    sku?: pulumi.Input<inputs.mssql.ElasticPoolSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Whether or not this elastic pool is zone redundant. `tier` needs to be `Premium` for `DTU` based  or `BusinessCritical` for `vCore` based `sku`. Defaults to `false`.
     */
    zoneRedundant?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a ElasticPool resource.
 */
export interface ElasticPoolArgs {
    /**
     * Specifies the license type applied to this database. Possible values are `LicenseIncluded` and `BasePrice`.
     */
    licenseType?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The max data size of the elastic pool in bytes. Conflicts with `maxSizeGb`.
     */
    maxSizeBytes?: pulumi.Input<number>;
    /**
     * The max data size of the elastic pool in gigabytes. Conflicts with `maxSizeBytes`.
     */
    maxSizeGb?: pulumi.Input<number>;
    /**
     * The name of the elastic pool. This needs to be globally unique. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `perDatabaseSettings` block as defined below.
     */
    perDatabaseSettings: pulumi.Input<inputs.mssql.ElasticPoolPerDatabaseSettings>;
    /**
     * The name of the resource group in which to create the elastic pool. This must be the same as the resource group of the underlying SQL server.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the SQL Server on which to create the elastic pool. Changing this forces a new resource to be created.
     */
    serverName: pulumi.Input<string>;
    /**
     * A `sku` block as defined below.
     */
    sku: pulumi.Input<inputs.mssql.ElasticPoolSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Whether or not this elastic pool is zone redundant. `tier` needs to be `Premium` for `DTU` based  or `BusinessCritical` for `vCore` based `sku`. Defaults to `false`.
     */
    zoneRedundant?: pulumi.Input<boolean>;
}
