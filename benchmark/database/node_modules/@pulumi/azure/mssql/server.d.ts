import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Microsoft SQL Azure Database Server.
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
 * });
 * const exampleServer = new azure.mssql.Server("exampleServer", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     version: "12.0",
 *     administratorLogin: "missadministrator",
 *     administratorLoginPassword: "thisIsKat11",
 *     minimumTlsVersion: "1.2",
 *     azureadAdministrator: {
 *         loginUsername: "AzureAD Admin",
 *         objectId: "00000000-0000-0000-0000-000000000000",
 *     },
 *     tags: {
 *         environment: "production",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * SQL Servers can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:mssql/server:Server example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myresourcegroup/providers/Microsoft.Sql/servers/myserver
 * ```
 */
export declare class Server extends pulumi.CustomResource {
    /**
     * Get an existing Server resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServerState, opts?: pulumi.CustomResourceOptions): Server;
    /**
     * Returns true if the given object is an instance of Server.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Server;
    /**
     * The administrator login name for the new server. Required unless `azureadAuthenticationOnly` in the `azureadAdministrator` block is `true`. When omitted, Azure will generate a default username which cannot be subsequently changed. Changing this forces a new resource to be created.
     */
    readonly administratorLogin: pulumi.Output<string>;
    /**
     * The password associated with the `administratorLogin` user. Needs to comply with Azure's [Password Policy](https://msdn.microsoft.com/library/ms161959.aspx). Required unless `azureadAuthenticationOnly` in the `azureadAdministrator` block is `true`.
     */
    readonly administratorLoginPassword: pulumi.Output<string | undefined>;
    /**
     * An `azureadAdministrator` block as defined below.
     */
    readonly azureadAdministrator: pulumi.Output<outputs.mssql.ServerAzureadAdministrator | undefined>;
    /**
     * The connection policy the server will use. Possible values are `Default`, `Proxy`, and `Redirect`. Defaults to `Default`.
     */
    readonly connectionPolicy: pulumi.Output<string | undefined>;
    /**
     * @deprecated the `extended_auditing_policy` block has been moved to `azurerm_mssql_server_extended_auditing_policy` and `azurerm_mssql_database_extended_auditing_policy`. This block will be removed in version 3.0 of the provider.
     */
    readonly extendedAuditingPolicy: pulumi.Output<outputs.mssql.ServerExtendedAuditingPolicy>;
    readonly foo: pulumi.Output<outputs.mssql.ServerFoo | undefined>;
    /**
     * The fully qualified domain name of the Azure SQL Server (e.g. myServerName.database.windows.net)
     */
    readonly fullyQualifiedDomainName: pulumi.Output<string>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.mssql.ServerIdentity | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The Minimum TLS Version for all SQL Database and SQL Data Warehouse databases associated with the server. Valid values are: `1.0`, `1.1` and `1.2`.
     */
    readonly minimumTlsVersion: pulumi.Output<string | undefined>;
    /**
     * The name of the Microsoft SQL Server. This needs to be globally unique within Azure.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Whether outbound network traffic is restricted for this server. Defaults to `false`.
     */
    readonly outboundNetworkRestrictionEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the primary user managed identity id. Required if `type` is `UserAssigned` and should be combined with `userAssignedIdentityIds`.
     */
    readonly primaryUserAssignedIdentityId: pulumi.Output<string>;
    /**
     * Whether public network access is allowed for this server. Defaults to `true`.
     */
    readonly publicNetworkAccessEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource group in which to create the Microsoft SQL Server.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A list of dropped restorable database IDs on the server.
     */
    readonly restorableDroppedDatabaseIds: pulumi.Output<string[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The version for the new server. Valid values are: 2.0 (for v11 server) and 12.0 (for v12 server).
     */
    readonly version: pulumi.Output<string>;
    /**
     * Create a Server resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Server resources.
 */
export interface ServerState {
    /**
     * The administrator login name for the new server. Required unless `azureadAuthenticationOnly` in the `azureadAdministrator` block is `true`. When omitted, Azure will generate a default username which cannot be subsequently changed. Changing this forces a new resource to be created.
     */
    administratorLogin?: pulumi.Input<string>;
    /**
     * The password associated with the `administratorLogin` user. Needs to comply with Azure's [Password Policy](https://msdn.microsoft.com/library/ms161959.aspx). Required unless `azureadAuthenticationOnly` in the `azureadAdministrator` block is `true`.
     */
    administratorLoginPassword?: pulumi.Input<string>;
    /**
     * An `azureadAdministrator` block as defined below.
     */
    azureadAdministrator?: pulumi.Input<inputs.mssql.ServerAzureadAdministrator>;
    /**
     * The connection policy the server will use. Possible values are `Default`, `Proxy`, and `Redirect`. Defaults to `Default`.
     */
    connectionPolicy?: pulumi.Input<string>;
    /**
     * @deprecated the `extended_auditing_policy` block has been moved to `azurerm_mssql_server_extended_auditing_policy` and `azurerm_mssql_database_extended_auditing_policy`. This block will be removed in version 3.0 of the provider.
     */
    extendedAuditingPolicy?: pulumi.Input<inputs.mssql.ServerExtendedAuditingPolicy>;
    foo?: pulumi.Input<inputs.mssql.ServerFoo>;
    /**
     * The fully qualified domain name of the Azure SQL Server (e.g. myServerName.database.windows.net)
     */
    fullyQualifiedDomainName?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.mssql.ServerIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The Minimum TLS Version for all SQL Database and SQL Data Warehouse databases associated with the server. Valid values are: `1.0`, `1.1` and `1.2`.
     */
    minimumTlsVersion?: pulumi.Input<string>;
    /**
     * The name of the Microsoft SQL Server. This needs to be globally unique within Azure.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether outbound network traffic is restricted for this server. Defaults to `false`.
     */
    outboundNetworkRestrictionEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the primary user managed identity id. Required if `type` is `UserAssigned` and should be combined with `userAssignedIdentityIds`.
     */
    primaryUserAssignedIdentityId?: pulumi.Input<string>;
    /**
     * Whether public network access is allowed for this server. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the resource group in which to create the Microsoft SQL Server.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A list of dropped restorable database IDs on the server.
     */
    restorableDroppedDatabaseIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The version for the new server. Valid values are: 2.0 (for v11 server) and 12.0 (for v12 server).
     */
    version?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Server resource.
 */
export interface ServerArgs {
    /**
     * The administrator login name for the new server. Required unless `azureadAuthenticationOnly` in the `azureadAdministrator` block is `true`. When omitted, Azure will generate a default username which cannot be subsequently changed. Changing this forces a new resource to be created.
     */
    administratorLogin?: pulumi.Input<string>;
    /**
     * The password associated with the `administratorLogin` user. Needs to comply with Azure's [Password Policy](https://msdn.microsoft.com/library/ms161959.aspx). Required unless `azureadAuthenticationOnly` in the `azureadAdministrator` block is `true`.
     */
    administratorLoginPassword?: pulumi.Input<string>;
    /**
     * An `azureadAdministrator` block as defined below.
     */
    azureadAdministrator?: pulumi.Input<inputs.mssql.ServerAzureadAdministrator>;
    /**
     * The connection policy the server will use. Possible values are `Default`, `Proxy`, and `Redirect`. Defaults to `Default`.
     */
    connectionPolicy?: pulumi.Input<string>;
    /**
     * @deprecated the `extended_auditing_policy` block has been moved to `azurerm_mssql_server_extended_auditing_policy` and `azurerm_mssql_database_extended_auditing_policy`. This block will be removed in version 3.0 of the provider.
     */
    extendedAuditingPolicy?: pulumi.Input<inputs.mssql.ServerExtendedAuditingPolicy>;
    foo?: pulumi.Input<inputs.mssql.ServerFoo>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.mssql.ServerIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The Minimum TLS Version for all SQL Database and SQL Data Warehouse databases associated with the server. Valid values are: `1.0`, `1.1` and `1.2`.
     */
    minimumTlsVersion?: pulumi.Input<string>;
    /**
     * The name of the Microsoft SQL Server. This needs to be globally unique within Azure.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether outbound network traffic is restricted for this server. Defaults to `false`.
     */
    outboundNetworkRestrictionEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the primary user managed identity id. Required if `type` is `UserAssigned` and should be combined with `userAssignedIdentityIds`.
     */
    primaryUserAssignedIdentityId?: pulumi.Input<string>;
    /**
     * Whether public network access is allowed for this server. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the resource group in which to create the Microsoft SQL Server.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The version for the new server. Valid values are: 2.0 (for v11 server) and 12.0 (for v12 server).
     */
    version: pulumi.Input<string>;
}
