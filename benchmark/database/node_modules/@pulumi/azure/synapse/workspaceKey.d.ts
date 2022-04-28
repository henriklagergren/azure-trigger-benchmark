import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Synapse Workspace.
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
 * ```
 * ### Creating A Workspace With Customer Managed Key And Azure AD Admin
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
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
 * const exampleKeyVault = new azure.keyvault.KeyVault("exampleKeyVault", {
 *     location: exampleResourceGroup.location,
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
 *     customerManagedKey: {
 *         keyVersionlessId: exampleKey.versionlessId,
 *         keyName: "enckey",
 *     },
 *     tags: {
 *         Env: "production",
 *     },
 * });
 * const workspacePolicy = new azure.keyvault.AccessPolicy("workspacePolicy", {
 *     keyVaultId: exampleKeyVault.id,
 *     tenantId: exampleWorkspace.identities.apply(identities => identities[0].tenantId),
 *     objectId: exampleWorkspace.identities.apply(identities => identities[0].principalId),
 *     keyPermissions: [
 *         "Get",
 *         "WrapKey",
 *         "UnwrapKey",
 *     ],
 * });
 * const exampleWorkspaceKey = new azure.synapse.WorkspaceKey("exampleWorkspaceKey", {
 *     customerManagedKeyVersionlessId: exampleKey.versionlessId,
 *     synapseWorkspaceId: exampleWorkspace.id,
 *     active: true,
 *     customerManagedKeyName: "enckey",
 * }, {
 *     dependsOn: [workspacePolicy],
 * });
 * const exampleWorkspaceAadAdmin = new azure.synapse.WorkspaceAadAdmin("exampleWorkspaceAadAdmin", {
 *     synapseWorkspaceId: exampleWorkspace.id,
 *     login: "AzureAD Admin",
 *     objectId: "00000000-0000-0000-0000-000000000000",
 *     tenantId: "00000000-0000-0000-0000-000000000000",
 * }, {
 *     dependsOn: [exampleWorkspaceKey],
 * });
 * ```
 *
 * ## Import
 *
 * Synapse Workspace can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:synapse/workspaceKey:WorkspaceKey example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Synapse/workspaces/workspace1
 * ```
 */
export declare class WorkspaceKey extends pulumi.CustomResource {
    /**
     * Get an existing WorkspaceKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkspaceKeyState, opts?: pulumi.CustomResourceOptions): WorkspaceKey;
    /**
     * Returns true if the given object is an instance of WorkspaceKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WorkspaceKey;
    readonly active: pulumi.Output<boolean>;
    /**
     * @deprecated As this property name contained a typo originally, please switch to using 'customer_managed_key_name' instead.
     */
    readonly cusomterManagedKeyName: pulumi.Output<string>;
    readonly customerManagedKeyName: pulumi.Output<string>;
    readonly customerManagedKeyVersionlessId: pulumi.Output<string | undefined>;
    readonly synapseWorkspaceId: pulumi.Output<string>;
    /**
     * Create a WorkspaceKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceKeyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WorkspaceKey resources.
 */
export interface WorkspaceKeyState {
    active?: pulumi.Input<boolean>;
    /**
     * @deprecated As this property name contained a typo originally, please switch to using 'customer_managed_key_name' instead.
     */
    cusomterManagedKeyName?: pulumi.Input<string>;
    customerManagedKeyName?: pulumi.Input<string>;
    customerManagedKeyVersionlessId?: pulumi.Input<string>;
    synapseWorkspaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a WorkspaceKey resource.
 */
export interface WorkspaceKeyArgs {
    active: pulumi.Input<boolean>;
    /**
     * @deprecated As this property name contained a typo originally, please switch to using 'customer_managed_key_name' instead.
     */
    cusomterManagedKeyName?: pulumi.Input<string>;
    customerManagedKeyName?: pulumi.Input<string>;
    customerManagedKeyVersionlessId?: pulumi.Input<string>;
    synapseWorkspaceId: pulumi.Input<string>;
}
