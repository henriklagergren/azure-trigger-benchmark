import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Synapse Sql Pool.
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
 *     accountKind: "BlobStorage",
 * });
 * const exampleDataLakeGen2Filesystem = new azure.storage.DataLakeGen2Filesystem("exampleDataLakeGen2Filesystem", {storageAccountId: exampleAccount.id});
 * const exampleWorkspace = new azure.synapse.Workspace("exampleWorkspace", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     storageDataLakeGen2FilesystemId: exampleDataLakeGen2Filesystem.id,
 *     sqlAdministratorLogin: "sqladminuser",
 *     sqlAdministratorLoginPassword: "H@Sh1CoR3!",
 * });
 * const exampleSqlPool = new azure.synapse.SqlPool("exampleSqlPool", {
 *     synapseWorkspaceId: exampleWorkspace.id,
 *     skuName: "DW100c",
 *     createMode: "Default",
 * });
 * ```
 *
 * ## Import
 *
 * Synapse Sql Pool can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:synapse/sqlPool:SqlPool example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Synapse/workspaces/workspace1/sqlPools/sqlPool1
 * ```
 */
export declare class SqlPool extends pulumi.CustomResource {
    /**
     * Get an existing SqlPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SqlPoolState, opts?: pulumi.CustomResourceOptions): SqlPool;
    /**
     * Returns true if the given object is an instance of SqlPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SqlPool;
    /**
     * The name of the collation to use with this pool, only applicable when `createMode` is set to `Default`. Azure default is `SQL_LATIN1_GENERAL_CP1_CI_AS`. Changing this forces a new resource to be created.
     */
    readonly collation: pulumi.Output<string>;
    /**
     * Specifies how to create the Sql Pool. Valid values are: `Default`, `Recovery` or `PointInTimeRestore`. Must be `Default` to create a new database. Defaults to `Default`.
     */
    readonly createMode: pulumi.Output<string | undefined>;
    /**
     * Is transparent data encryption enabled? Defaults to `false`.
     */
    readonly dataEncrypted: pulumi.Output<boolean | undefined>;
    /**
     * The name which should be used for this Synapse Sql Pool. Changing this forces a new synapse SqlPool to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the Synapse Sql Pool or Sql Database which is to back up, only applicable when `createMode` is set to `Recovery`. Changing this forces a new Synapse Sql Pool to be created.
     */
    readonly recoveryDatabaseId: pulumi.Output<string | undefined>;
    /**
     * A `restore` block as defined below. only applicable when `createMode` is set to `PointInTimeRestore`.
     */
    readonly restore: pulumi.Output<outputs.synapse.SqlPoolRestore | undefined>;
    /**
     * Specifies the SKU Name for this Synapse Sql Pool. Possible values are `DW100c`, `DW200c`, `DW300c`, `DW400c`, `DW500c`, `DW1000c`, `DW1500c`, `DW2000c`, `DW2500c`, `DW3000c`, `DW5000c`, `DW6000c`, `DW7500c`, `DW10000c`, `DW15000c` or `DW30000c`.
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * The ID of Synapse Workspace within which this Sql Pool should be created. Changing this forces a new Synapse Sql Pool to be created.
     */
    readonly synapseWorkspaceId: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Synapse Sql Pool.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a SqlPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlPoolArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SqlPool resources.
 */
export interface SqlPoolState {
    /**
     * The name of the collation to use with this pool, only applicable when `createMode` is set to `Default`. Azure default is `SQL_LATIN1_GENERAL_CP1_CI_AS`. Changing this forces a new resource to be created.
     */
    collation?: pulumi.Input<string>;
    /**
     * Specifies how to create the Sql Pool. Valid values are: `Default`, `Recovery` or `PointInTimeRestore`. Must be `Default` to create a new database. Defaults to `Default`.
     */
    createMode?: pulumi.Input<string>;
    /**
     * Is transparent data encryption enabled? Defaults to `false`.
     */
    dataEncrypted?: pulumi.Input<boolean>;
    /**
     * The name which should be used for this Synapse Sql Pool. Changing this forces a new synapse SqlPool to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Synapse Sql Pool or Sql Database which is to back up, only applicable when `createMode` is set to `Recovery`. Changing this forces a new Synapse Sql Pool to be created.
     */
    recoveryDatabaseId?: pulumi.Input<string>;
    /**
     * A `restore` block as defined below. only applicable when `createMode` is set to `PointInTimeRestore`.
     */
    restore?: pulumi.Input<inputs.synapse.SqlPoolRestore>;
    /**
     * Specifies the SKU Name for this Synapse Sql Pool. Possible values are `DW100c`, `DW200c`, `DW300c`, `DW400c`, `DW500c`, `DW1000c`, `DW1500c`, `DW2000c`, `DW2500c`, `DW3000c`, `DW5000c`, `DW6000c`, `DW7500c`, `DW10000c`, `DW15000c` or `DW30000c`.
     */
    skuName?: pulumi.Input<string>;
    /**
     * The ID of Synapse Workspace within which this Sql Pool should be created. Changing this forces a new Synapse Sql Pool to be created.
     */
    synapseWorkspaceId?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Synapse Sql Pool.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a SqlPool resource.
 */
export interface SqlPoolArgs {
    /**
     * The name of the collation to use with this pool, only applicable when `createMode` is set to `Default`. Azure default is `SQL_LATIN1_GENERAL_CP1_CI_AS`. Changing this forces a new resource to be created.
     */
    collation?: pulumi.Input<string>;
    /**
     * Specifies how to create the Sql Pool. Valid values are: `Default`, `Recovery` or `PointInTimeRestore`. Must be `Default` to create a new database. Defaults to `Default`.
     */
    createMode?: pulumi.Input<string>;
    /**
     * Is transparent data encryption enabled? Defaults to `false`.
     */
    dataEncrypted?: pulumi.Input<boolean>;
    /**
     * The name which should be used for this Synapse Sql Pool. Changing this forces a new synapse SqlPool to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Synapse Sql Pool or Sql Database which is to back up, only applicable when `createMode` is set to `Recovery`. Changing this forces a new Synapse Sql Pool to be created.
     */
    recoveryDatabaseId?: pulumi.Input<string>;
    /**
     * A `restore` block as defined below. only applicable when `createMode` is set to `PointInTimeRestore`.
     */
    restore?: pulumi.Input<inputs.synapse.SqlPoolRestore>;
    /**
     * Specifies the SKU Name for this Synapse Sql Pool. Possible values are `DW100c`, `DW200c`, `DW300c`, `DW400c`, `DW500c`, `DW1000c`, `DW1500c`, `DW2000c`, `DW2500c`, `DW3000c`, `DW5000c`, `DW6000c`, `DW7500c`, `DW10000c`, `DW15000c` or `DW30000c`.
     */
    skuName: pulumi.Input<string>;
    /**
     * The ID of Synapse Workspace within which this Sql Pool should be created. Changing this forces a new Synapse Sql Pool to be created.
     */
    synapseWorkspaceId: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Synapse Sql Pool.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
