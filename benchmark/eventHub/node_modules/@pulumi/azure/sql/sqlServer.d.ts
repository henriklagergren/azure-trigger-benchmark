import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Microsoft SQL Azure Database Server.
 *
 * > **Note:** This resource provides usage of Microsoft SQL Azure Database server using an older `sku` based model. It is recommended going forward to use `azure.mssql.Server` resource which provides support for `vcores`.
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
 * const exampleSqlServer = new azure.sql.SqlServer("exampleSqlServer", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     version: "12.0",
 *     administratorLogin: "mradministrator",
 *     administratorLoginPassword: "thisIsDog11",
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
 *  $ pulumi import azure:sql/sqlServer:SqlServer example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myresourcegroup/providers/Microsoft.Sql/servers/myserver
 * ```
 */
export declare class SqlServer extends pulumi.CustomResource {
    /**
     * Get an existing SqlServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SqlServerState, opts?: pulumi.CustomResourceOptions): SqlServer;
    /**
     * Returns true if the given object is an instance of SqlServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SqlServer;
    /**
     * The administrator login name for the new server. Changing this forces a new resource to be created.
     */
    readonly administratorLogin: pulumi.Output<string>;
    /**
     * The password associated with the `administratorLogin` user. Needs to comply with Azure's [Password Policy](https://msdn.microsoft.com/library/ms161959.aspx)
     */
    readonly administratorLoginPassword: pulumi.Output<string>;
    /**
     * The connection policy the server will use. Possible values are `Default`, `Proxy`, and `Redirect`. Defaults to `Default`.
     */
    readonly connectionPolicy: pulumi.Output<string | undefined>;
    /**
     * @deprecated the `extended_auditing_policy` block has been moved to `azurerm_mssql_server_extended_auditing_policy` and `azurerm_mssql_database_extended_auditing_policy`. This block will be removed in version 3.0 of the provider.
     */
    readonly extendedAuditingPolicy: pulumi.Output<outputs.sql.SqlServerExtendedAuditingPolicy>;
    /**
     * The fully qualified domain name of the Azure SQL Server (e.g. myServerName.database.windows.net)
     */
    readonly fullyQualifiedDomainName: pulumi.Output<string>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.sql.SqlServerIdentity | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the Microsoft SQL Server. This needs to be globally unique within Azure.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Microsoft SQL Server.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Threat detection policy configuration. The `threatDetectionPolicy` block supports fields documented below.
     */
    readonly threatDetectionPolicy: pulumi.Output<outputs.sql.SqlServerThreatDetectionPolicy>;
    /**
     * The version for the new server. Valid values are: 2.0 (for v11 server) and 12.0 (for v12 server).
     */
    readonly version: pulumi.Output<string>;
    /**
     * Create a SqlServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlServerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SqlServer resources.
 */
export interface SqlServerState {
    /**
     * The administrator login name for the new server. Changing this forces a new resource to be created.
     */
    administratorLogin?: pulumi.Input<string>;
    /**
     * The password associated with the `administratorLogin` user. Needs to comply with Azure's [Password Policy](https://msdn.microsoft.com/library/ms161959.aspx)
     */
    administratorLoginPassword?: pulumi.Input<string>;
    /**
     * The connection policy the server will use. Possible values are `Default`, `Proxy`, and `Redirect`. Defaults to `Default`.
     */
    connectionPolicy?: pulumi.Input<string>;
    /**
     * @deprecated the `extended_auditing_policy` block has been moved to `azurerm_mssql_server_extended_auditing_policy` and `azurerm_mssql_database_extended_auditing_policy`. This block will be removed in version 3.0 of the provider.
     */
    extendedAuditingPolicy?: pulumi.Input<inputs.sql.SqlServerExtendedAuditingPolicy>;
    /**
     * The fully qualified domain name of the Azure SQL Server (e.g. myServerName.database.windows.net)
     */
    fullyQualifiedDomainName?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.sql.SqlServerIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Microsoft SQL Server. This needs to be globally unique within Azure.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Microsoft SQL Server.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Threat detection policy configuration. The `threatDetectionPolicy` block supports fields documented below.
     */
    threatDetectionPolicy?: pulumi.Input<inputs.sql.SqlServerThreatDetectionPolicy>;
    /**
     * The version for the new server. Valid values are: 2.0 (for v11 server) and 12.0 (for v12 server).
     */
    version?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SqlServer resource.
 */
export interface SqlServerArgs {
    /**
     * The administrator login name for the new server. Changing this forces a new resource to be created.
     */
    administratorLogin: pulumi.Input<string>;
    /**
     * The password associated with the `administratorLogin` user. Needs to comply with Azure's [Password Policy](https://msdn.microsoft.com/library/ms161959.aspx)
     */
    administratorLoginPassword: pulumi.Input<string>;
    /**
     * The connection policy the server will use. Possible values are `Default`, `Proxy`, and `Redirect`. Defaults to `Default`.
     */
    connectionPolicy?: pulumi.Input<string>;
    /**
     * @deprecated the `extended_auditing_policy` block has been moved to `azurerm_mssql_server_extended_auditing_policy` and `azurerm_mssql_database_extended_auditing_policy`. This block will be removed in version 3.0 of the provider.
     */
    extendedAuditingPolicy?: pulumi.Input<inputs.sql.SqlServerExtendedAuditingPolicy>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.sql.SqlServerIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Microsoft SQL Server. This needs to be globally unique within Azure.
     */
    name?: pulumi.Input<string>;
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
     * Threat detection policy configuration. The `threatDetectionPolicy` block supports fields documented below.
     */
    threatDetectionPolicy?: pulumi.Input<inputs.sql.SqlServerThreatDetectionPolicy>;
    /**
     * The version for the new server. Valid values are: 2.0 (for v11 server) and 12.0 (for v12 server).
     */
    version: pulumi.Input<string>;
}
