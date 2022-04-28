import * as pulumi from "@pulumi/pulumi";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.sql.ManagedDatabase("example", {
 *     sqlManagedInstanceId: azurerm_sql_managed_instance.example.id,
 *     location: azurerm_resource_group.example.location,
 * });
 * ```
 *
 * ## Import
 *
 * SQL Managed Databases can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:sql/managedDatabase:ManagedDatabase example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myresourcegroup/providers/Microsoft.Sql/managedInstances/myserver/databases/mydatabase
 * ```
 */
export declare class ManagedDatabase extends pulumi.CustomResource {
    /**
     * Get an existing ManagedDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagedDatabaseState, opts?: pulumi.CustomResourceOptions): ManagedDatabase;
    /**
     * Returns true if the given object is an instance of ManagedDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ManagedDatabase;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the SQL Managed Instance. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The SQL Managed Instance ID that this Managed Database will be associated with. Changing this forces a new resource to be created.
     */
    readonly sqlManagedInstanceId: pulumi.Output<string>;
    /**
     * Create a ManagedDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedDatabaseArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ManagedDatabase resources.
 */
export interface ManagedDatabaseState {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the SQL Managed Instance. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The SQL Managed Instance ID that this Managed Database will be associated with. Changing this forces a new resource to be created.
     */
    sqlManagedInstanceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ManagedDatabase resource.
 */
export interface ManagedDatabaseArgs {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the SQL Managed Instance. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The SQL Managed Instance ID that this Managed Database will be associated with. Changing this forces a new resource to be created.
     */
    sqlManagedInstanceId: pulumi.Input<string>;
}
