import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a MySQL Database within a MySQL Flexible Server
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const test = new azure.mysql.FlexibleServer("test", {
 *     resourceGroupName: azurerm_resource_group.test.name,
 *     location: azurerm_resource_group.test.location,
 *     administratorLogin: "mysqladminun",
 *     administratorPassword: "H@Sh1CoR3!",
 *     skuName: "B_Standard_B1s",
 * });
 * const exampleFlexibleDatabase = new azure.mysql.FlexibleDatabase("exampleFlexibleDatabase", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     serverName: azurerm_mysql_flexible_server.example.name,
 *     charset: "utf8",
 *     collation: "utf8_unicode_ci",
 * });
 * ```
 *
 * ## Import
 *
 * MySQL Database's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:mysql/flexibleDatabase:FlexibleDatabase database1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.DBforMySQL/flexibleServers/flexibleserver1/databases/database1
 * ```
 */
export declare class FlexibleDatabase extends pulumi.CustomResource {
    /**
     * Get an existing FlexibleDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FlexibleDatabaseState, opts?: pulumi.CustomResourceOptions): FlexibleDatabase;
    /**
     * Returns true if the given object is an instance of FlexibleDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FlexibleDatabase;
    /**
     * Specifies the Charset for the MySQL Database, which needs [to be a valid MySQL Charset](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html). Changing this forces a new resource to be created.
     */
    readonly charset: pulumi.Output<string>;
    /**
     * Specifies the Collation for the MySQL Database, which needs [to be a valid MySQL Collation](https://dev.mysql.com/doc/refman/5.7/en/charset-mysql.html). Changing this forces a new resource to be created.
     */
    readonly collation: pulumi.Output<string>;
    /**
     * Specifies the name of the MySQL Database, which needs [to be a valid MySQL identifier](https://dev.mysql.com/doc/refman/5.7/en/identifiers.html). Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which the MySQL Server exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Specifies the name of the MySQL Flexible Server. Changing this forces a new resource to be created.
     */
    readonly serverName: pulumi.Output<string>;
    /**
     * Create a FlexibleDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FlexibleDatabaseArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering FlexibleDatabase resources.
 */
export interface FlexibleDatabaseState {
    /**
     * Specifies the Charset for the MySQL Database, which needs [to be a valid MySQL Charset](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html). Changing this forces a new resource to be created.
     */
    charset?: pulumi.Input<string>;
    /**
     * Specifies the Collation for the MySQL Database, which needs [to be a valid MySQL Collation](https://dev.mysql.com/doc/refman/5.7/en/charset-mysql.html). Changing this forces a new resource to be created.
     */
    collation?: pulumi.Input<string>;
    /**
     * Specifies the name of the MySQL Database, which needs [to be a valid MySQL identifier](https://dev.mysql.com/doc/refman/5.7/en/identifiers.html). Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the MySQL Server exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies the name of the MySQL Flexible Server. Changing this forces a new resource to be created.
     */
    serverName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a FlexibleDatabase resource.
 */
export interface FlexibleDatabaseArgs {
    /**
     * Specifies the Charset for the MySQL Database, which needs [to be a valid MySQL Charset](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html). Changing this forces a new resource to be created.
     */
    charset: pulumi.Input<string>;
    /**
     * Specifies the Collation for the MySQL Database, which needs [to be a valid MySQL Collation](https://dev.mysql.com/doc/refman/5.7/en/charset-mysql.html). Changing this forces a new resource to be created.
     */
    collation: pulumi.Input<string>;
    /**
     * Specifies the name of the MySQL Database, which needs [to be a valid MySQL identifier](https://dev.mysql.com/doc/refman/5.7/en/identifiers.html). Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the MySQL Server exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the name of the MySQL Flexible Server. Changing this forces a new resource to be created.
     */
    serverName: pulumi.Input<string>;
}
