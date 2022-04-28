import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Synapse Workspace Extended Auditing Policy.
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
 *     accountKind: "BlobStorage",
 * });
 * const exampleDataLakeGen2Filesystem = new azure.storage.DataLakeGen2Filesystem("exampleDataLakeGen2Filesystem", {storageAccountId: exampleAccount.id});
 * const exampleWorkspace = new azure.synapse.Workspace("exampleWorkspace", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     storageDataLakeGen2FilesystemId: exampleDataLakeGen2Filesystem.id,
 *     sqlAdministratorLogin: "sqladminuser",
 *     sqlAdministratorLoginPassword: "H@Sh1CoR3!",
 * });
 * const auditLogs = new azure.storage.Account("auditLogs", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleWorkspaceExtendedAuditingPolicy = new azure.synapse.WorkspaceExtendedAuditingPolicy("exampleWorkspaceExtendedAuditingPolicy", {
 *     synapseWorkspaceId: exampleWorkspace.id,
 *     storageEndpoint: auditLogs.primaryBlobEndpoint,
 *     storageAccountAccessKey: auditLogs.primaryAccessKey,
 *     storageAccountAccessKeyIsSecondary: false,
 *     retentionInDays: 6,
 * });
 * ```
 *
 * ## Import
 *
 * Synapse Workspace Extended Auditing Policys can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:synapse/workspaceExtendedAuditingPolicy:WorkspaceExtendedAuditingPolicy example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Synapse/workspaces/workspace1/extendedAuditingSettings/default
 * ```
 */
export declare class WorkspaceExtendedAuditingPolicy extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceExtendedAuditingPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkspaceExtendedAuditingPolicyState, opts?: pulumi.CustomResourceOptions): WorkspaceExtendedAuditingPolicy;
    /**
     * Returns true if the given object is an instance of WorkspaceExtendedAuditingPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WorkspaceExtendedAuditingPolicy;
    /**
     * Enable audit events to Azure Monitor? To enable server audit events to Azure Monitor, please enable its master database audit events to Azure Monitor.
     */
    readonly logMonitoringEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The number of days to retain logs for in the storage account.
     */
    readonly retentionInDays: pulumi.Output<number | undefined>;
    /**
     * The access key to use for the auditing storage account.
     */
    readonly storageAccountAccessKey: pulumi.Output<string | undefined>;
    /**
     * Is `storageAccountAccessKey` value the storage's secondary key?
     */
    readonly storageAccountAccessKeyIsSecondary: pulumi.Output<boolean | undefined>;
    /**
     * The blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all extended auditing logs.
     */
    readonly storageEndpoint: pulumi.Output<string | undefined>;
    /**
     * The ID of the Synapse workspace to set the extended auditing policy. Changing this forces a new resource to be created.
     */
    readonly synapseWorkspaceId: pulumi.Output<string>;
    /**
     * Create a WorkspaceExtendedAuditingPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceExtendedAuditingPolicyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WorkspaceExtendedAuditingPolicy resources.
 */
export interface WorkspaceExtendedAuditingPolicyState {
    /**
     * Enable audit events to Azure Monitor? To enable server audit events to Azure Monitor, please enable its master database audit events to Azure Monitor.
     */
    logMonitoringEnabled?: pulumi.Input<boolean>;
    /**
     * The number of days to retain logs for in the storage account.
     */
    retentionInDays?: pulumi.Input<number>;
    /**
     * The access key to use for the auditing storage account.
     */
    storageAccountAccessKey?: pulumi.Input<string>;
    /**
     * Is `storageAccountAccessKey` value the storage's secondary key?
     */
    storageAccountAccessKeyIsSecondary?: pulumi.Input<boolean>;
    /**
     * The blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all extended auditing logs.
     */
    storageEndpoint?: pulumi.Input<string>;
    /**
     * The ID of the Synapse workspace to set the extended auditing policy. Changing this forces a new resource to be created.
     */
    synapseWorkspaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a WorkspaceExtendedAuditingPolicy resource.
 */
export interface WorkspaceExtendedAuditingPolicyArgs {
    /**
     * Enable audit events to Azure Monitor? To enable server audit events to Azure Monitor, please enable its master database audit events to Azure Monitor.
     */
    logMonitoringEnabled?: pulumi.Input<boolean>;
    /**
     * The number of days to retain logs for in the storage account.
     */
    retentionInDays?: pulumi.Input<number>;
    /**
     * The access key to use for the auditing storage account.
     */
    storageAccountAccessKey?: pulumi.Input<string>;
    /**
     * Is `storageAccountAccessKey` value the storage's secondary key?
     */
    storageAccountAccessKeyIsSecondary?: pulumi.Input<boolean>;
    /**
     * The blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all extended auditing logs.
     */
    storageEndpoint?: pulumi.Input<string>;
    /**
     * The ID of the Synapse workspace to set the extended auditing policy. Changing this forces a new resource to be created.
     */
    synapseWorkspaceId: pulumi.Input<string>;
}
