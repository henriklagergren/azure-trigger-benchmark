import * as pulumi from "@pulumi/pulumi";
/**
 * Allows you to set a user or group as the AD administrator for an MySQL server in Azure
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleServer = new azure.mysql.Server("exampleServer", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     administratorLogin: "mysqladminun",
 *     administratorLoginPassword: "H@Sh1CoR3!",
 *     skuName: "B_Gen5_2",
 *     storageMb: 5120,
 *     version: "5.7",
 * });
 * const exampleActiveDirectoryAdministrator = new azure.mysql.ActiveDirectoryAdministrator("exampleActiveDirectoryAdministrator", {
 *     serverName: exampleServer.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     login: "sqladmin",
 *     tenantId: current.then(current => current.tenantId),
 *     objectId: current.then(current => current.objectId),
 * });
 * ```
 *
 * ## Import
 *
 * A MySQL Active Directory Administrator can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:mysql/activeDirectoryAdministrator:ActiveDirectoryAdministrator administrator /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myresourcegroup/providers/Microsoft.DBforMySQL/servers/myserver/administrators/activeDirectory
 * ```
 */
export declare class ActiveDirectoryAdministrator extends pulumi.CustomResource {
    /**
     * Get an existing ActiveDirectoryAdministrator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ActiveDirectoryAdministratorState, opts?: pulumi.CustomResourceOptions): ActiveDirectoryAdministrator;
    /**
     * Returns true if the given object is an instance of ActiveDirectoryAdministrator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ActiveDirectoryAdministrator;
    /**
     * The login name of the principal to set as the server administrator
     */
    readonly login: pulumi.Output<string>;
    /**
     * The ID of the principal to set as the server administrator. For a managed identity this should be the Client ID of the identity.
     */
    readonly objectId: pulumi.Output<string>;
    /**
     * The name of the resource group for the MySQL server. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The name of the MySQL Server on which to set the administrator. Changing this forces a new resource to be created.
     */
    readonly serverName: pulumi.Output<string>;
    /**
     * The Azure Tenant ID
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Create a ActiveDirectoryAdministrator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActiveDirectoryAdministratorArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ActiveDirectoryAdministrator resources.
 */
export interface ActiveDirectoryAdministratorState {
    /**
     * The login name of the principal to set as the server administrator
     */
    login?: pulumi.Input<string>;
    /**
     * The ID of the principal to set as the server administrator. For a managed identity this should be the Client ID of the identity.
     */
    objectId?: pulumi.Input<string>;
    /**
     * The name of the resource group for the MySQL server. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The name of the MySQL Server on which to set the administrator. Changing this forces a new resource to be created.
     */
    serverName?: pulumi.Input<string>;
    /**
     * The Azure Tenant ID
     */
    tenantId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ActiveDirectoryAdministrator resource.
 */
export interface ActiveDirectoryAdministratorArgs {
    /**
     * The login name of the principal to set as the server administrator
     */
    login: pulumi.Input<string>;
    /**
     * The ID of the principal to set as the server administrator. For a managed identity this should be the Client ID of the identity.
     */
    objectId: pulumi.Input<string>;
    /**
     * The name of the resource group for the MySQL server. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the MySQL Server on which to set the administrator. Changing this forces a new resource to be created.
     */
    serverName: pulumi.Input<string>;
    /**
     * The Azure Tenant ID
     */
    tenantId: pulumi.Input<string>;
}
