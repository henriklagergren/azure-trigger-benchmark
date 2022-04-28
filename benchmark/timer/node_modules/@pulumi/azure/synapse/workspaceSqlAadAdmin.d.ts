import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Azure Active Directory Sql Administrator setting for a Synapse Workspace
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
 * const current = azure.core.getClientConfig({});
 * const exampleKeyVault = new azure.keyvault.KeyVault("exampleKeyVault", {
 *     location: azurerm_resource_group.exampl.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tenantId: current.then(current => current.tenantId),
 *     skuName: "standard",
 *     purgeProtectionEnabled: true,
 * });
 * const deployer = new azure.keyvault.AccessPolicy("deployer", {
 *     keyVaultId: exampleKeyVault.id,
 *     tenantId: current.then(current => current.tenantId),
 *     objectId: current.then(current => current.objectId),
 *     keyPermissions: [
 *         "create",
 *         "get",
 *         "delete",
 *         "purge",
 *     ],
 * });
 * const exampleKey = new azure.keyvault.Key("exampleKey", {
 *     keyVaultId: exampleKeyVault.id,
 *     keyType: "RSA",
 *     keySize: 2048,
 *     keyOpts: [
 *         "unwrapKey",
 *         "wrapKey",
 *     ],
 * }, {
 *     dependsOn: [deployer],
 * });
 * const exampleWorkspace = new azure.synapse.Workspace("exampleWorkspace", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     storageDataLakeGen2FilesystemId: exampleDataLakeGen2Filesystem.id,
 *     sqlAdministratorLogin: "sqladminuser",
 *     sqlAdministratorLoginPassword: "H@Sh1CoR3!",
 *     tags: {
 *         Env: "production",
 *     },
 * });
 * const test = new azure.synapse.WorkspaceSqlAadAdmin("test", {
 *     synapseWorkspaceId: azurerm_synapse_workspace.test.id,
 *     login: "AzureAD Admin",
 *     objectId: current.then(current => current.objectId),
 *     tenantId: current.then(current => current.tenantId),
 * });
 * ```
 *
 * ## Import
 *
 * Synapse Workspace Azure AD Administrator can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:synapse/workspaceSqlAadAdmin:WorkspaceSqlAadAdmin example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resourceGroup1/providers/Microsoft.Synapse/workspaces/workspace1/sqlAdministrators/activeDirectory
 * ```
 */
export declare class WorkspaceSqlAadAdmin extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceSqlAadAdmin resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkspaceSqlAadAdminState, opts?: pulumi.CustomResourceOptions): WorkspaceSqlAadAdmin;
    /**
     * Returns true if the given object is an instance of WorkspaceSqlAadAdmin.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WorkspaceSqlAadAdmin;
    /**
     * The login name of the Azure AD Administrator of this Synapse Workspace.
     */
    readonly login: pulumi.Output<string>;
    /**
     * The object id of the Azure AD Administrator of this Synapse Workspace.
     */
    readonly objectId: pulumi.Output<string>;
    /**
     * The ID of the Synapse Workspace where the Azure AD Administrator should be configured.
     */
    readonly synapseWorkspaceId: pulumi.Output<string>;
    /**
     * The tenant id of the Azure AD Administrator of this Synapse Workspace.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Create a WorkspaceSqlAadAdmin resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceSqlAadAdminArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WorkspaceSqlAadAdmin resources.
 */
export interface WorkspaceSqlAadAdminState {
    /**
     * The login name of the Azure AD Administrator of this Synapse Workspace.
     */
    login?: pulumi.Input<string>;
    /**
     * The object id of the Azure AD Administrator of this Synapse Workspace.
     */
    objectId?: pulumi.Input<string>;
    /**
     * The ID of the Synapse Workspace where the Azure AD Administrator should be configured.
     */
    synapseWorkspaceId?: pulumi.Input<string>;
    /**
     * The tenant id of the Azure AD Administrator of this Synapse Workspace.
     */
    tenantId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a WorkspaceSqlAadAdmin resource.
 */
export interface WorkspaceSqlAadAdminArgs {
    /**
     * The login name of the Azure AD Administrator of this Synapse Workspace.
     */
    login: pulumi.Input<string>;
    /**
     * The object id of the Azure AD Administrator of this Synapse Workspace.
     */
    objectId: pulumi.Input<string>;
    /**
     * The ID of the Synapse Workspace where the Azure AD Administrator should be configured.
     */
    synapseWorkspaceId: pulumi.Input<string>;
    /**
     * The tenant id of the Azure AD Administrator of this Synapse Workspace.
     */
    tenantId: pulumi.Input<string>;
}
