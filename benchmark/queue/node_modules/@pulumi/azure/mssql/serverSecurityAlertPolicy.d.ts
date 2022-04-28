import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Security Alert Policy for a MSSQL Server.
 *
 * > **NOTE** Security Alert Policy is currently only available for MS SQL databases.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleSqlServer = new azure.sql.SqlServer("exampleSqlServer", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     version: "12.0",
 *     administratorLogin: "4dm1n157r470r",
 *     administratorLoginPassword: "4-v3ry-53cr37-p455w0rd",
 * });
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "GRS",
 * });
 * const exampleServerSecurityAlertPolicy = new azure.mssql.ServerSecurityAlertPolicy("exampleServerSecurityAlertPolicy", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     serverName: exampleSqlServer.name,
 *     state: "Enabled",
 *     storageEndpoint: exampleAccount.primaryBlobEndpoint,
 *     storageAccountAccessKey: exampleAccount.primaryAccessKey,
 *     disabledAlerts: [
 *         "Sql_Injection",
 *         "Data_Exfiltration",
 *     ],
 *     retentionDays: 20,
 * });
 * ```
 *
 * ## Import
 *
 * MS SQL Server Security Alert Policy can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:mssql/serverSecurityAlertPolicy:ServerSecurityAlertPolicy example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/acceptanceTestResourceGroup1/providers/Microsoft.Sql/servers/mssqlserver/securityAlertPolicies/Default
 * ```
 */
export declare class ServerSecurityAlertPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ServerSecurityAlertPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServerSecurityAlertPolicyState, opts?: pulumi.CustomResourceOptions): ServerSecurityAlertPolicy;
    /**
     * Returns true if the given object is an instance of ServerSecurityAlertPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ServerSecurityAlertPolicy;
    /**
     * Specifies an array of alerts that are disabled. Allowed values are: `Sql_Injection`, `Sql_Injection_Vulnerability`, `Access_Anomaly`, `Data_Exfiltration`, `Unsafe_Action`.
     */
    readonly disabledAlerts: pulumi.Output<string[] | undefined>;
    /**
     * Boolean flag which specifies if the alert is sent to the account administrators or not. Defaults to `false`.
     */
    readonly emailAccountAdmins: pulumi.Output<boolean | undefined>;
    /**
     * Specifies an array of e-mail addresses to which the alert is sent.
     */
    readonly emailAddresses: pulumi.Output<string[] | undefined>;
    /**
     * The name of the resource group that contains the MS SQL Server. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Specifies the number of days to keep in the Threat Detection audit logs. Defaults to `0`.
     */
    readonly retentionDays: pulumi.Output<number | undefined>;
    /**
     * Specifies the name of the MS SQL Server. Changing this forces a new resource to be created.
     */
    readonly serverName: pulumi.Output<string>;
    /**
     * Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database server. Allowed values are: `Disabled`, `Enabled`.
     */
    readonly state: pulumi.Output<string>;
    /**
     * Specifies the identifier key of the Threat Detection audit storage account.
     */
    readonly storageAccountAccessKey: pulumi.Output<string | undefined>;
    /**
     * Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.
     */
    readonly storageEndpoint: pulumi.Output<string | undefined>;
    /**
     * Create a ServerSecurityAlertPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerSecurityAlertPolicyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ServerSecurityAlertPolicy resources.
 */
export interface ServerSecurityAlertPolicyState {
    /**
     * Specifies an array of alerts that are disabled. Allowed values are: `Sql_Injection`, `Sql_Injection_Vulnerability`, `Access_Anomaly`, `Data_Exfiltration`, `Unsafe_Action`.
     */
    disabledAlerts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Boolean flag which specifies if the alert is sent to the account administrators or not. Defaults to `false`.
     */
    emailAccountAdmins?: pulumi.Input<boolean>;
    /**
     * Specifies an array of e-mail addresses to which the alert is sent.
     */
    emailAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group that contains the MS SQL Server. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies the number of days to keep in the Threat Detection audit logs. Defaults to `0`.
     */
    retentionDays?: pulumi.Input<number>;
    /**
     * Specifies the name of the MS SQL Server. Changing this forces a new resource to be created.
     */
    serverName?: pulumi.Input<string>;
    /**
     * Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database server. Allowed values are: `Disabled`, `Enabled`.
     */
    state?: pulumi.Input<string>;
    /**
     * Specifies the identifier key of the Threat Detection audit storage account.
     */
    storageAccountAccessKey?: pulumi.Input<string>;
    /**
     * Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.
     */
    storageEndpoint?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ServerSecurityAlertPolicy resource.
 */
export interface ServerSecurityAlertPolicyArgs {
    /**
     * Specifies an array of alerts that are disabled. Allowed values are: `Sql_Injection`, `Sql_Injection_Vulnerability`, `Access_Anomaly`, `Data_Exfiltration`, `Unsafe_Action`.
     */
    disabledAlerts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Boolean flag which specifies if the alert is sent to the account administrators or not. Defaults to `false`.
     */
    emailAccountAdmins?: pulumi.Input<boolean>;
    /**
     * Specifies an array of e-mail addresses to which the alert is sent.
     */
    emailAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group that contains the MS SQL Server. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the number of days to keep in the Threat Detection audit logs. Defaults to `0`.
     */
    retentionDays?: pulumi.Input<number>;
    /**
     * Specifies the name of the MS SQL Server. Changing this forces a new resource to be created.
     */
    serverName: pulumi.Input<string>;
    /**
     * Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database server. Allowed values are: `Disabled`, `Enabled`.
     */
    state: pulumi.Input<string>;
    /**
     * Specifies the identifier key of the Threat Detection audit storage account.
     */
    storageAccountAccessKey?: pulumi.Input<string>;
    /**
     * Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.
     */
    storageEndpoint?: pulumi.Input<string>;
}
