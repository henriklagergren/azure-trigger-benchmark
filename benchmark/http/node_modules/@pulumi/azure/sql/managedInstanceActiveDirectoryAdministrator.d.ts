import * as pulumi from "@pulumi/pulumi";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleManagedInstance = new azure.sql.ManagedInstance("exampleManagedInstance", {
 *     resourceGroupName: azurerm_resource_group.example.name,
 *     location: azurerm_resource_group.example.location,
 *     administratorLogin: "mradministrator",
 *     administratorLoginPassword: "thisIsDog11",
 *     licenseType: "BasePrice",
 *     subnetId: azurerm_subnet.example.id,
 *     skuName: "GP_Gen5",
 *     vcores: 4,
 *     storageSizeInGb: 32,
 * }, {
 *     dependsOn: [
 *         azurerm_subnet_network_security_group_association.example,
 *         azurerm_subnet_route_table_association.example,
 *     ],
 * });
 * const current = azure.core.getClientConfig({});
 * const exampleManagedInstanceActiveDirectoryAdministrator = new azure.sql.ManagedInstanceActiveDirectoryAdministrator("exampleManagedInstanceActiveDirectoryAdministrator", {
 *     managedInstanceName: exampleManagedInstance.name,
 *     resourceGroupName: azurerm_resource_group.example.name,
 *     login: "sqladmin",
 *     tenantId: current.then(current => current.tenantId),
 *     objectId: current.then(current => current.objectId),
 * });
 * ```
 *
 * ## Import
 *
 * A SQL Active Directory Administrator can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:sql/managedInstanceActiveDirectoryAdministrator:ManagedInstanceActiveDirectoryAdministrator administrator /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myresourcegroup/providers/Microsoft.Sql/managedInstances/mymanagedinstance/administrators/activeDirectory
 * ```
 */
export declare class ManagedInstanceActiveDirectoryAdministrator extends pulumi.CustomResource {
    /**
     * Get an existing ManagedInstanceActiveDirectoryAdministrator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagedInstanceActiveDirectoryAdministratorState, opts?: pulumi.CustomResourceOptions): ManagedInstanceActiveDirectoryAdministrator;
    /**
     * Returns true if the given object is an instance of ManagedInstanceActiveDirectoryAdministrator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ManagedInstanceActiveDirectoryAdministrator;
    /**
     * Specifies whether only AD Users and administrators can be used to login (`true`) or also local database users (`false`). Defaults to `false`.
     */
    readonly azureadAuthenticationOnly: pulumi.Output<boolean | undefined>;
    /**
     * The login name of the principal to set as the Managed Instance administrator
     */
    readonly login: pulumi.Output<string>;
    /**
     * The name of the SQL Managed Instance on which to set the administrator. Changing this forces a new resource to be created.
     */
    readonly managedInstanceName: pulumi.Output<string>;
    /**
     * The ID of the principal to set as the Managed Instance administrator
     */
    readonly objectId: pulumi.Output<string>;
    /**
     * The name of the resource group for the SQL Managed Instance. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Azure Tenant ID
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Create a ManagedInstanceActiveDirectoryAdministrator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedInstanceActiveDirectoryAdministratorArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ManagedInstanceActiveDirectoryAdministrator resources.
 */
export interface ManagedInstanceActiveDirectoryAdministratorState {
    /**
     * Specifies whether only AD Users and administrators can be used to login (`true`) or also local database users (`false`). Defaults to `false`.
     */
    azureadAuthenticationOnly?: pulumi.Input<boolean>;
    /**
     * The login name of the principal to set as the Managed Instance administrator
     */
    login?: pulumi.Input<string>;
    /**
     * The name of the SQL Managed Instance on which to set the administrator. Changing this forces a new resource to be created.
     */
    managedInstanceName?: pulumi.Input<string>;
    /**
     * The ID of the principal to set as the Managed Instance administrator
     */
    objectId?: pulumi.Input<string>;
    /**
     * The name of the resource group for the SQL Managed Instance. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Azure Tenant ID
     */
    tenantId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ManagedInstanceActiveDirectoryAdministrator resource.
 */
export interface ManagedInstanceActiveDirectoryAdministratorArgs {
    /**
     * Specifies whether only AD Users and administrators can be used to login (`true`) or also local database users (`false`). Defaults to `false`.
     */
    azureadAuthenticationOnly?: pulumi.Input<boolean>;
    /**
     * The login name of the principal to set as the Managed Instance administrator
     */
    login: pulumi.Input<string>;
    /**
     * The name of the SQL Managed Instance on which to set the administrator. Changing this forces a new resource to be created.
     */
    managedInstanceName: pulumi.Input<string>;
    /**
     * The ID of the principal to set as the Managed Instance administrator
     */
    objectId: pulumi.Input<string>;
    /**
     * The name of the resource group for the SQL Managed Instance. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Azure Tenant ID
     */
    tenantId: pulumi.Input<string>;
}
