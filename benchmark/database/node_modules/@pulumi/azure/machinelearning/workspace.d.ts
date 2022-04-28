import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleInsights = new azure.appinsights.Insights("exampleInsights", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationType: "web",
 * });
 * const exampleKeyVault = new azure.keyvault.KeyVault("exampleKeyVault", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tenantId: current.then(current => current.tenantId),
 *     skuName: "premium",
 * });
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     accountTier: "Standard",
 *     accountReplicationType: "GRS",
 * });
 * const exampleWorkspace = new azure.machinelearning.Workspace("exampleWorkspace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationInsightsId: exampleInsights.id,
 *     keyVaultId: exampleKeyVault.id,
 *     storageAccountId: exampleAccount.id,
 *     identity: {
 *         type: "SystemAssigned",
 *     },
 * });
 * ```
 * ### With Data Encryption
 *
 * > **NOTE:** The Key Vault must enable purge protection.
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleInsights = new azure.appinsights.Insights("exampleInsights", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationType: "web",
 * });
 * const exampleKeyVault = new azure.keyvault.KeyVault("exampleKeyVault", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tenantId: current.then(current => current.tenantId),
 *     skuName: "premium",
 *     purgeProtectionEnabled: true,
 * });
 * const exampleAccessPolicy = new azure.keyvault.AccessPolicy("exampleAccessPolicy", {
 *     keyVaultId: exampleKeyVault.id,
 *     tenantId: current.then(current => current.tenantId),
 *     objectId: current.then(current => current.objectId),
 *     keyPermissions: [
 *         "Create",
 *         "Get",
 *         "Delete",
 *         "Purge",
 *     ],
 * });
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     accountTier: "Standard",
 *     accountReplicationType: "GRS",
 * });
 * const exampleKey = new azure.keyvault.Key("exampleKey", {
 *     keyVaultId: exampleKeyVault.id,
 *     keyType: "RSA",
 *     keySize: 2048,
 *     keyOpts: [
 *         "decrypt",
 *         "encrypt",
 *         "sign",
 *         "unwrapKey",
 *         "verify",
 *         "wrapKey",
 *     ],
 * }, {
 *     dependsOn: [
 *         exampleKeyVault,
 *         exampleAccessPolicy,
 *     ],
 * });
 * const exampleWorkspace = new azure.machinelearning.Workspace("exampleWorkspace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationInsightsId: exampleInsights.id,
 *     keyVaultId: exampleKeyVault.id,
 *     storageAccountId: exampleAccount.id,
 *     identity: {
 *         type: "SystemAssigned",
 *     },
 *     encryption: {
 *         keyVaultId: exampleKeyVault.id,
 *         keyId: exampleKey.id,
 *     },
 * });
 * ```
 * ### With User Assigned Identity And Data Encryption
 *
 * > **NOTE:** The Key Vault must enable purge protection.
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * as azuread from "@pulumi/azuread";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleInsights = new azure.appinsights.Insights("exampleInsights", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationType: "web",
 * });
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     accountTier: "Standard",
 *     accountReplicationType: "GRS",
 * });
 * const exampleKeyVault = new azure.keyvault.KeyVault("exampleKeyVault", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tenantId: current.then(current => current.tenantId),
 *     skuName: "premium",
 *     purgeProtectionEnabled: true,
 * });
 * const exampleUserAssignedIdentity = new azure.authorization.UserAssignedIdentity("exampleUserAssignedIdentity", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const example_identity = new azure.keyvault.AccessPolicy("example-identity", {
 *     keyVaultId: exampleKeyVault.id,
 *     tenantId: current.then(current => current.tenantId),
 *     objectId: exampleUserAssignedIdentity.principalId,
 *     keyPermissions: [
 *         "wrapKey",
 *         "unwrapKey",
 *         "get",
 *         "recover",
 *     ],
 *     secretPermissions: [
 *         "get",
 *         "list",
 *         "set",
 *         "delete",
 *         "recover",
 *         "backup",
 *         "restore",
 *     ],
 * });
 * const example_sp = new azure.keyvault.AccessPolicy("example-sp", {
 *     keyVaultId: exampleKeyVault.id,
 *     tenantId: current.then(current => current.tenantId),
 *     objectId: current.then(current => current.objectId),
 *     keyPermissions: [
 *         "Get",
 *         "Create",
 *         "Recover",
 *         "Delete",
 *         "Purge",
 *     ],
 * });
 * const test = azuread.getServicePrincipal({
 *     displayName: "Azure Cosmos DB",
 * });
 * const example_cosmosdb = new azure.keyvault.AccessPolicy("example-cosmosdb", {
 *     keyVaultId: exampleKeyVault.id,
 *     tenantId: current.then(current => current.tenantId),
 *     objectId: test.then(test => test.objectId),
 *     keyPermissions: [
 *         "Get",
 *         "Recover",
 *         "UnwrapKey",
 *         "WrapKey",
 *     ],
 * }, {
 *     dependsOn: [
 *         test,
 *         current,
 *     ],
 * });
 * const exampleKey = new azure.keyvault.Key("exampleKey", {
 *     keyVaultId: exampleKeyVault.id,
 *     keyType: "RSA",
 *     keySize: 2048,
 *     keyOpts: [
 *         "decrypt",
 *         "encrypt",
 *         "sign",
 *         "unwrapKey",
 *         "verify",
 *         "wrapKey",
 *     ],
 * }, {
 *     dependsOn: [
 *         exampleKeyVault,
 *         example_sp,
 *     ],
 * });
 * const example_role1 = new azure.authorization.Assignment("example-role1", {
 *     scope: exampleKeyVault.id,
 *     roleDefinitionName: "Contributor",
 *     principalId: exampleUserAssignedIdentity.principalId,
 * });
 * const example_role2 = new azure.authorization.Assignment("example-role2", {
 *     scope: exampleAccount.id,
 *     roleDefinitionName: "Storage Blob Data Contributor",
 *     principalId: exampleUserAssignedIdentity.principalId,
 * });
 * const example_role3 = new azure.authorization.Assignment("example-role3", {
 *     scope: exampleAccount.id,
 *     roleDefinitionName: "Contributor",
 *     principalId: exampleUserAssignedIdentity.principalId,
 * });
 * const example_role4 = new azure.authorization.Assignment("example-role4", {
 *     scope: exampleInsights.id,
 *     roleDefinitionName: "Contributor",
 *     principalId: exampleUserAssignedIdentity.principalId,
 * });
 * const exampleWorkspace = new azure.machinelearning.Workspace("exampleWorkspace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationInsightsId: exampleInsights.id,
 *     keyVaultId: exampleKeyVault.id,
 *     storageAccountId: exampleAccount.id,
 *     highBusinessImpact: true,
 *     primaryUserAssignedIdentity: exampleUserAssignedIdentity.id,
 *     identity: {
 *         type: "UserAssigned",
 *         identityIds: [exampleUserAssignedIdentity.id],
 *     },
 *     encryption: {
 *         userAssignedIdentityId: exampleUserAssignedIdentity.id,
 *         keyVaultId: exampleKeyVault.id,
 *         keyId: exampleKey.id,
 *     },
 * }, {
 *     dependsOn: [
 *         example_role1,
 *         example_role2,
 *         example_role3,
 *         example_role4,
 *         example_cosmosdb,
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * Machine Learning Workspace can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:machinelearning/workspace:Workspace example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.MachineLearningServices/workspaces/workspace1
 * ```
 */
export declare class Workspace extends pulumi.CustomResource {
    /**
     * Get an existing Workspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WorkspaceState, opts?: pulumi.CustomResourceOptions): Workspace;
    /**
     * Returns true if the given object is an instance of Workspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Workspace;
    /**
     * The ID of the Application Insights associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    readonly applicationInsightsId: pulumi.Output<string>;
    /**
     * The ID of the container registry associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    readonly containerRegistryId: pulumi.Output<string | undefined>;
    /**
     * The description of this Machine Learning Workspace.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The url for the discovery service to identify regional endpoints for machine learning experimentation services.
     */
    readonly discoveryUrl: pulumi.Output<string>;
    readonly encryption: pulumi.Output<outputs.machinelearning.WorkspaceEncryption | undefined>;
    /**
     * Display name for this Machine Learning Workspace.
     */
    readonly friendlyName: pulumi.Output<string | undefined>;
    /**
     * Flag to signal High Business Impact (HBI) data in the workspace and reduce diagnostic data collected by the service
     */
    readonly highBusinessImpact: pulumi.Output<boolean | undefined>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.machinelearning.WorkspaceIdentity>;
    /**
     * The compute name for image build of the Machine Learning Workspace.
     */
    readonly imageBuildComputeName: pulumi.Output<string | undefined>;
    /**
     * The ID of key vault associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    readonly keyVaultId: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the Machine Learning Workspace should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The user assigned identity id that represents the workspace identity.
     */
    readonly primaryUserAssignedIdentity: pulumi.Output<string | undefined>;
    /**
     * Enable public access when this Machine Learning Workspace is behind VNet.
     */
    readonly publicNetworkAccessEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the name of the Resource Group in which the Machine Learning Workspace should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * SKU/edition of the Machine Learning Workspace, possible values are `Basic`. Defaults to `Basic`.
     */
    readonly skuName: pulumi.Output<string | undefined>;
    /**
     * The ID of the Storage Account associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    readonly storageAccountId: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Workspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WorkspaceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Workspace resources.
 */
export interface WorkspaceState {
    /**
     * The ID of the Application Insights associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    applicationInsightsId?: pulumi.Input<string>;
    /**
     * The ID of the container registry associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    containerRegistryId?: pulumi.Input<string>;
    /**
     * The description of this Machine Learning Workspace.
     */
    description?: pulumi.Input<string>;
    /**
     * The url for the discovery service to identify regional endpoints for machine learning experimentation services.
     */
    discoveryUrl?: pulumi.Input<string>;
    encryption?: pulumi.Input<inputs.machinelearning.WorkspaceEncryption>;
    /**
     * Display name for this Machine Learning Workspace.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Flag to signal High Business Impact (HBI) data in the workspace and reduce diagnostic data collected by the service
     */
    highBusinessImpact?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.machinelearning.WorkspaceIdentity>;
    /**
     * The compute name for image build of the Machine Learning Workspace.
     */
    imageBuildComputeName?: pulumi.Input<string>;
    /**
     * The ID of key vault associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    keyVaultId?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the Machine Learning Workspace should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The user assigned identity id that represents the workspace identity.
     */
    primaryUserAssignedIdentity?: pulumi.Input<string>;
    /**
     * Enable public access when this Machine Learning Workspace is behind VNet.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the Resource Group in which the Machine Learning Workspace should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * SKU/edition of the Machine Learning Workspace, possible values are `Basic`. Defaults to `Basic`.
     */
    skuName?: pulumi.Input<string>;
    /**
     * The ID of the Storage Account associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Workspace resource.
 */
export interface WorkspaceArgs {
    /**
     * The ID of the Application Insights associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    applicationInsightsId: pulumi.Input<string>;
    /**
     * The ID of the container registry associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    containerRegistryId?: pulumi.Input<string>;
    /**
     * The description of this Machine Learning Workspace.
     */
    description?: pulumi.Input<string>;
    encryption?: pulumi.Input<inputs.machinelearning.WorkspaceEncryption>;
    /**
     * Display name for this Machine Learning Workspace.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * Flag to signal High Business Impact (HBI) data in the workspace and reduce diagnostic data collected by the service
     */
    highBusinessImpact?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    identity: pulumi.Input<inputs.machinelearning.WorkspaceIdentity>;
    /**
     * The compute name for image build of the Machine Learning Workspace.
     */
    imageBuildComputeName?: pulumi.Input<string>;
    /**
     * The ID of key vault associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    keyVaultId: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the Machine Learning Workspace should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The user assigned identity id that represents the workspace identity.
     */
    primaryUserAssignedIdentity?: pulumi.Input<string>;
    /**
     * Enable public access when this Machine Learning Workspace is behind VNet.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the Resource Group in which the Machine Learning Workspace should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SKU/edition of the Machine Learning Workspace, possible values are `Basic`. Defaults to `Basic`.
     */
    skuName?: pulumi.Input<string>;
    /**
     * The ID of the Storage Account associated with this Machine Learning Workspace. Changing this forces a new resource to be created.
     */
    storageAccountId: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
