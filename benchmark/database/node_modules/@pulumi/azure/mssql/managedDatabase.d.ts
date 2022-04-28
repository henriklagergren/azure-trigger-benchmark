import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Azure SQL Azure Managed Database for a SQL Managed Instance.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.mssql.ManagedDatabase("example", {managedInstanceId: azurerm_mssql_managed_instance.example.id});
 * ```
 *
 * ## Import
 *
 * SQL Managed Databases can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:mssql/managedDatabase:ManagedDatabase example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myresourcegroup/providers/Microsoft.Sql/managedInstances/myserver/databases/mydatabase
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
     * The ID of the Azure SQL Managed Instance on which to create this Managed Database. Changing this forces a new resource to be created.
     */
    readonly managedInstanceId: pulumi.Output<string>;
    /**
     * The name of the Managed Database to create. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
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
     * The ID of the Azure SQL Managed Instance on which to create this Managed Database. Changing this forces a new resource to be created.
     */
    managedInstanceId?: pulumi.Input<string>;
    /**
     * The name of the Managed Database to create. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ManagedDatabase resource.
 */
export interface ManagedDatabaseArgs {
    /**
     * The ID of the Azure SQL Managed Instance on which to create this Managed Database. Changing this forces a new resource to be created.
     */
    managedInstanceId: pulumi.Input<string>;
    /**
     * The name of the Managed Database to create. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
}
