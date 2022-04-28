import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a PostgreSQL Flexible Server Database.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleFlexibleServer = new azure.postgresql.FlexibleServer("exampleFlexibleServer", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     version: "12",
 *     administratorLogin: "psqladmin",
 *     administratorPassword: "H@Sh1CoR3!",
 *     storageMb: 32768,
 *     skuName: "GP_Standard_D4s_v3",
 * });
 * const exampleFlexibleServerDatabase = new azure.postgresql.FlexibleServerDatabase("exampleFlexibleServerDatabase", {
 *     serverId: exampleFlexibleServer.id,
 *     collation: "en_US.utf8",
 *     charset: "utf8",
 * });
 * ```
 *
 * ## Import
 *
 * Azure PostgreSQL Flexible Server Database can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:postgresql/flexibleServerDatabase:FlexibleServerDatabase example /subscriptions/12345678-1234-9876-4563-123456789012/resourceGroups/resGroup1/providers/Microsoft.DBforPostgreSQL/flexibleServers/flexibleServer1/databases/database1
 * ```
 */
export declare class FlexibleServerDatabase extends pulumi.CustomResource {
    /**
     * Get an existing FlexibleServerDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FlexibleServerDatabaseState, opts?: pulumi.CustomResourceOptions): FlexibleServerDatabase;
    /**
     * Returns true if the given object is an instance of FlexibleServerDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FlexibleServerDatabase;
    /**
     * Specifies the Charset for the Azure PostgreSQL Flexible Server Database, which needs [to be a valid PostgreSQL Charset](https://www.postgresql.org/docs/current/static/multibyte.html). Defaults to `UTF8`. Changing this forces a new Azure PostgreSQL Flexible Server Database to be created.
     */
    readonly charset: pulumi.Output<string | undefined>;
    /**
     * Specifies the Collation for the Azure PostgreSQL Flexible Server Database, which needs [to be a valid PostgreSQL Collation](https://www.postgresql.org/docs/current/static/collation.html). Defaults to `en_US.utf8`. Changing this forces a new Azure PostgreSQL Flexible Server Database to be created.
     */
    readonly collation: pulumi.Output<string | undefined>;
    /**
     * The name which should be used for this Azure PostgreSQL Flexible Server Database. Changing this forces a new Azure PostgreSQL Flexible Server Database to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the Azure PostgreSQL Flexible Server from which to create this PostgreSQL Flexible Server Database. Changing this forces a new Azure PostgreSQL Flexible Server Database to be created.
     */
    readonly serverId: pulumi.Output<string>;
    /**
     * Create a FlexibleServerDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FlexibleServerDatabaseArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering FlexibleServerDatabase resources.
 */
export interface FlexibleServerDatabaseState {
    /**
     * Specifies the Charset for the Azure PostgreSQL Flexible Server Database, which needs [to be a valid PostgreSQL Charset](https://www.postgresql.org/docs/current/static/multibyte.html). Defaults to `UTF8`. Changing this forces a new Azure PostgreSQL Flexible Server Database to be created.
     */
    charset?: pulumi.Input<string>;
    /**
     * Specifies the Collation for the Azure PostgreSQL Flexible Server Database, which needs [to be a valid PostgreSQL Collation](https://www.postgresql.org/docs/current/static/collation.html). Defaults to `en_US.utf8`. Changing this forces a new Azure PostgreSQL Flexible Server Database to be created.
     */
    collation?: pulumi.Input<string>;
    /**
     * The name which should be used for this Azure PostgreSQL Flexible Server Database. Changing this forces a new Azure PostgreSQL Flexible Server Database to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Azure PostgreSQL Flexible Server from which to create this PostgreSQL Flexible Server Database. Changing this forces a new Azure PostgreSQL Flexible Server Database to be created.
     */
    serverId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a FlexibleServerDatabase resource.
 */
export interface FlexibleServerDatabaseArgs {
    /**
     * Specifies the Charset for the Azure PostgreSQL Flexible Server Database, which needs [to be a valid PostgreSQL Charset](https://www.postgresql.org/docs/current/static/multibyte.html). Defaults to `UTF8`. Changing this forces a new Azure PostgreSQL Flexible Server Database to be created.
     */
    charset?: pulumi.Input<string>;
    /**
     * Specifies the Collation for the Azure PostgreSQL Flexible Server Database, which needs [to be a valid PostgreSQL Collation](https://www.postgresql.org/docs/current/static/collation.html). Defaults to `en_US.utf8`. Changing this forces a new Azure PostgreSQL Flexible Server Database to be created.
     */
    collation?: pulumi.Input<string>;
    /**
     * The name which should be used for this Azure PostgreSQL Flexible Server Database. Changing this forces a new Azure PostgreSQL Flexible Server Database to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Azure PostgreSQL Flexible Server from which to create this PostgreSQL Flexible Server Database. Changing this forces a new Azure PostgreSQL Flexible Server Database to be created.
     */
    serverId: pulumi.Input<string>;
}
