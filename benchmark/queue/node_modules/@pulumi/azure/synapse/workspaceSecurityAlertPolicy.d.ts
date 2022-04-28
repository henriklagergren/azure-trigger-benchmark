import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Security Alert Policy for a Synapse Workspace.
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
 *     accountKind: "StorageV2",
 *     isHnsEnabled: "true",
 * });
 * const exampleDataLakeGen2Filesystem = new azure.storage.DataLakeGen2Filesystem("exampleDataLakeGen2Filesystem", {storageAccountId: exampleAccount.id});
 * const exampleWorkspace = new azure.synapse.Workspace("exampleWorkspace", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     storageDataLakeGen2FilesystemId: exampleDataLakeGen2Filesystem.id,
 *     sqlAdministratorLogin: "sqladminuser",
 *     sqlAdministratorLoginPassword: "H@Sh1CoR3!",
 *     aadAdmin: {
 *         login: "AzureAD Admin",
 *         objectId: "00000000-0000-0000-0000-000000000000",
 *         tenantId: "00000000-0000-0000-0000-000000000000",
 *     },
 *     tags: {
 *         Env: "production",
 *     },
 * });
 * const auditLogs = new azure.storage.Account("auditLogs", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleWorkspaceSecurityAlertPolicy = new azure.synapse.WorkspaceSecurityAlertPolicy("exampleWorkspaceSecurityAlertPolicy", {
 *     synapseWorkspaceId: exampleWorkspace.id,
 *     policyState: "Enabled",
 *     storageEndpoint: auditLogs.primaryBlobEndpoint,
 *     storageAccountAccessKey: auditLogs.primaryAccessKey,
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
 * Synapse Workspace Security Alert Policies can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:synapse/workspaceSecurityAlertPolicy:WorkspaceSecurityAlertPolicy example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Synapse/workspaces/workspace1/securityAlertPolicies/Default
 * ```
 */
export declare class WorkspaceSecurityAlertPolicy extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceSecurityAlertPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkspaceSecurityAlertPolicyState, opts?: pulumi.CustomResourceOptions): WorkspaceSecurityAlertPolicy;
    /**
     * Returns true if the given object is an instance of WorkspaceSecurityAlertPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WorkspaceSecurityAlertPolicy;
    /**
     * Specifies an array of alerts that are disabled. Allowed values are: `Sql_Injection`, `Sql_Injection_Vulnerability`, `Access_Anomaly`, `Data_Exfiltration`, `Unsafe_Action`.
     */
    readonly disabledAlerts: pulumi.Output<string[] | undefined>;
    /**
     * Boolean flag which specifies if the alert is sent to the account administrators or not. Defaults to `false`.
     */
    readonly emailAccountAdminsEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies an array of e-mail addresses to which the alert is sent.
     */
    readonly emailAddresses: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific workspace. Allowed values are: `Disabled`, `Enabled`.
     */
    readonly policyState: pulumi.Output<string>;
    /**
     * Specifies the number of days to keep in the Threat Detection audit logs. Defaults to `0`.
     */
    readonly retentionDays: pulumi.Output<number | undefined>;
    /**
     * Specifies the identifier key of the Threat Detection audit storage account.
     */
    readonly storageAccountAccessKey: pulumi.Output<string | undefined>;
    /**
     * Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.
     */
    readonly storageEndpoint: pulumi.Output<string | undefined>;
    /**
     * Specifies the ID of the Synapse Workspace. Changing this forces a new resource to be created.
     */
    readonly synapseWorkspaceId: pulumi.Output<string>;
    /**
     * Create a WorkspaceSecurityAlertPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceSecurityAlertPolicyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WorkspaceSecurityAlertPolicy resources.
 */
export interface WorkspaceSecurityAlertPolicyState {
    /**
     * Specifies an array of alerts that are disabled. Allowed values are: `Sql_Injection`, `Sql_Injection_Vulnerability`, `Access_Anomaly`, `Data_Exfiltration`, `Unsafe_Action`.
     */
    disabledAlerts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Boolean flag which specifies if the alert is sent to the account administrators or not. Defaults to `false`.
     */
    emailAccountAdminsEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies an array of e-mail addresses to which the alert is sent.
     */
    emailAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific workspace. Allowed values are: `Disabled`, `Enabled`.
     */
    policyState?: pulumi.Input<string>;
    /**
     * Specifies the number of days to keep in the Threat Detection audit logs. Defaults to `0`.
     */
    retentionDays?: pulumi.Input<number>;
    /**
     * Specifies the identifier key of the Threat Detection audit storage account.
     */
    storageAccountAccessKey?: pulumi.Input<string>;
    /**
     * Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.
     */
    storageEndpoint?: pulumi.Input<string>;
    /**
     * Specifies the ID of the Synapse Workspace. Changing this forces a new resource to be created.
     */
    synapseWorkspaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a WorkspaceSecurityAlertPolicy resource.
 */
export interface WorkspaceSecurityAlertPolicyArgs {
    /**
     * Specifies an array of alerts that are disabled. Allowed values are: `Sql_Injection`, `Sql_Injection_Vulnerability`, `Access_Anomaly`, `Data_Exfiltration`, `Unsafe_Action`.
     */
    disabledAlerts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Boolean flag which specifies if the alert is sent to the account administrators or not. Defaults to `false`.
     */
    emailAccountAdminsEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies an array of e-mail addresses to which the alert is sent.
     */
    emailAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific workspace. Allowed values are: `Disabled`, `Enabled`.
     */
    policyState: pulumi.Input<string>;
    /**
     * Specifies the number of days to keep in the Threat Detection audit logs. Defaults to `0`.
     */
    retentionDays?: pulumi.Input<number>;
    /**
     * Specifies the identifier key of the Threat Detection audit storage account.
     */
    storageAccountAccessKey?: pulumi.Input<string>;
    /**
     * Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs.
     */
    storageEndpoint?: pulumi.Input<string>;
    /**
     * Specifies the ID of the Synapse Workspace. Changing this forces a new resource to be created.
     */
    synapseWorkspaceId: pulumi.Input<string>;
}
