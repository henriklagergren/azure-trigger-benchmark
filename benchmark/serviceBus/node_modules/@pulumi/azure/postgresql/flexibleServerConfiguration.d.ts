import * as pulumi from "@pulumi/pulumi";
/**
 * Sets a PostgreSQL Configuration value on a Azure PostgreSQL Flexible Server.
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
 * const exampleFlexibleServerConfiguration = new azure.postgresql.FlexibleServerConfiguration("exampleFlexibleServerConfiguration", {
 *     serverId: exampleFlexibleServer.id,
 *     value: "on",
 * });
 * ```
 *
 * ## Import
 *
 * PostgreSQL Configurations can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:postgresql/flexibleServerConfiguration:FlexibleServerConfiguration example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.DBforPostgreSQL/flexibleServers/server1/configurations/configuration1
 * ```
 */
export declare class FlexibleServerConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing FlexibleServerConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FlexibleServerConfigurationState, opts?: pulumi.CustomResourceOptions): FlexibleServerConfiguration;
    /**
     * Returns true if the given object is an instance of FlexibleServerConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FlexibleServerConfiguration;
    /**
     * Specifies the name of the PostgreSQL Configuration, which needs [to be a valid PostgreSQL configuration name](https://www.postgresql.org/docs/current/static/sql-syntax-lexical.html#SQL-SYNTAX-IDENTIFIER). Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the PostgreSQL Flexible Server where we want to change configuration. Changing this forces a new PostgreSQL Flexible Server Configuration resource.
     */
    readonly serverId: pulumi.Output<string>;
    /**
     * Specifies the value of the PostgreSQL Configuration. See the PostgreSQL documentation for valid values.
     */
    readonly value: pulumi.Output<string>;
    /**
     * Create a FlexibleServerConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FlexibleServerConfigurationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering FlexibleServerConfiguration resources.
 */
export interface FlexibleServerConfigurationState {
    /**
     * Specifies the name of the PostgreSQL Configuration, which needs [to be a valid PostgreSQL configuration name](https://www.postgresql.org/docs/current/static/sql-syntax-lexical.html#SQL-SYNTAX-IDENTIFIER). Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the PostgreSQL Flexible Server where we want to change configuration. Changing this forces a new PostgreSQL Flexible Server Configuration resource.
     */
    serverId?: pulumi.Input<string>;
    /**
     * Specifies the value of the PostgreSQL Configuration. See the PostgreSQL documentation for valid values.
     */
    value?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a FlexibleServerConfiguration resource.
 */
export interface FlexibleServerConfigurationArgs {
    /**
     * Specifies the name of the PostgreSQL Configuration, which needs [to be a valid PostgreSQL configuration name](https://www.postgresql.org/docs/current/static/sql-syntax-lexical.html#SQL-SYNTAX-IDENTIFIER). Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the PostgreSQL Flexible Server where we want to change configuration. Changing this forces a new PostgreSQL Flexible Server Configuration resource.
     */
    serverId: pulumi.Input<string>;
    /**
     * Specifies the value of the PostgreSQL Configuration. See the PostgreSQL documentation for valid values.
     */
    value: pulumi.Input<string>;
}
