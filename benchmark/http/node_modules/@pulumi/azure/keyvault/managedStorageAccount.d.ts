import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Key Vault Managed Storage Account.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleClientConfig = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleAccountSAS = azure.storage.getAccountSASOutput({
 *     connectionString: exampleAccount.primaryConnectionString,
 *     httpsOnly: true,
 *     resourceTypes: {
 *         service: true,
 *         container: false,
 *         object: false,
 *     },
 *     services: {
 *         blob: true,
 *         queue: false,
 *         table: false,
 *         file: false,
 *     },
 *     start: "2021-04-30T00:00:00Z",
 *     expiry: "2023-04-30T00:00:00Z",
 *     permissions: {
 *         read: true,
 *         write: true,
 *         "delete": false,
 *         list: false,
 *         add: true,
 *         create: true,
 *         update: false,
 *         process: false,
 *     },
 * });
 * const exampleKeyVault = new azure.keyvault.KeyVault("exampleKeyVault", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tenantId: data.azurerm_client_config.current.tenant_id,
 *     skuName: "standard",
 *     accessPolicies: [{
 *         tenantId: data.azurerm_client_config.current.tenant_id,
 *         objectId: data.azurerm_client_config.current.object_id,
 *         secretPermissions: [
 *             "Get",
 *             "Delete",
 *         ],
 *         storagePermissions: [
 *             "Get",
 *             "List",
 *             "Set",
 *             "SetSAS",
 *             "GetSAS",
 *             "DeleteSAS",
 *             "Update",
 *             "RegenerateKey",
 *         ],
 *     }],
 * });
 * const exampleManagedStorageAccount = new azure.keyvault.ManagedStorageAccount("exampleManagedStorageAccount", {
 *     keyVaultId: exampleKeyVault.id,
 *     storageAccountId: exampleAccount.id,
 *     storageAccountKey: "key1",
 *     regenerateKeyAutomatically: false,
 * });
 * ```
 * ### Automatically Regenerate Storage Account Access Key)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleClientConfig = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleAccountSAS = azure.storage.getAccountSASOutput({
 *     connectionString: exampleAccount.primaryConnectionString,
 *     httpsOnly: true,
 *     resourceTypes: {
 *         service: true,
 *         container: false,
 *         object: false,
 *     },
 *     services: {
 *         blob: true,
 *         queue: false,
 *         table: false,
 *         file: false,
 *     },
 *     start: "2021-04-30T00:00:00Z",
 *     expiry: "2023-04-30T00:00:00Z",
 *     permissions: {
 *         read: true,
 *         write: true,
 *         "delete": false,
 *         list: false,
 *         add: true,
 *         create: true,
 *         update: false,
 *         process: false,
 *     },
 * });
 * const exampleKeyVault = new azure.keyvault.KeyVault("exampleKeyVault", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tenantId: data.azurerm_client_config.current.tenant_id,
 *     skuName: "standard",
 *     accessPolicies: [{
 *         tenantId: data.azurerm_client_config.current.tenant_id,
 *         objectId: data.azurerm_client_config.current.object_id,
 *         secretPermissions: [
 *             "Get",
 *             "Delete",
 *         ],
 *         storagePermissions: [
 *             "Get",
 *             "List",
 *             "Set",
 *             "SetSAS",
 *             "GetSAS",
 *             "DeleteSAS",
 *             "Update",
 *             "RegenerateKey",
 *         ],
 *     }],
 * });
 * const exampleAssignment = new azure.authorization.Assignment("exampleAssignment", {
 *     scope: exampleAccount.id,
 *     roleDefinitionName: "Storage Account Key Operator Service Role",
 *     principalId: "727055f9-0386-4ccb-bcf1-9237237ee102",
 * });
 * const exampleManagedStorageAccount = new azure.keyvault.ManagedStorageAccount("exampleManagedStorageAccount", {
 *     keyVaultId: exampleKeyVault.id,
 *     storageAccountId: exampleAccount.id,
 *     storageAccountKey: "key1",
 *     regenerateKeyAutomatically: true,
 *     regenerationPeriod: "P1D",
 * });
 * ```
 *
 * ## Import
 *
 * Key Vault Managed Storage Accounts can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:keyvault/managedStorageAccount:ManagedStorageAccount example https://example-keyvault.vault.azure.net/storage/exampleStorageAcc01
 * ```
 */
export declare class ManagedStorageAccount extends pulumi.CustomResource {
    /**
     * Get an existing ManagedStorageAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagedStorageAccountState, opts?: pulumi.CustomResourceOptions): ManagedStorageAccount;
    /**
     * Returns true if the given object is an instance of ManagedStorageAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ManagedStorageAccount;
    /**
     * The ID of the Key Vault where the Managed Storage Account should be created. Changing this forces a new resource to be created.
     */
    readonly keyVaultId: pulumi.Output<string>;
    /**
     * The name which should be used for this Key Vault Managed Storage Account. Changing this forces a new Key Vault Managed Storage Account to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Should Storage Account access key be regenerated periodically?
     */
    readonly regenerateKeyAutomatically: pulumi.Output<boolean | undefined>;
    /**
     * How often Storage Account access key should be regenerated. Value needs to be in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations).
     */
    readonly regenerationPeriod: pulumi.Output<string | undefined>;
    /**
     * The ID of the Storage Account.
     */
    readonly storageAccountId: pulumi.Output<string>;
    /**
     * Which Storage Account access key that is managed by Key Vault. Possible values are `key1` and `key2`.
     */
    readonly storageAccountKey: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Key Vault Managed Storage Account.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a ManagedStorageAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedStorageAccountArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ManagedStorageAccount resources.
 */
export interface ManagedStorageAccountState {
    /**
     * The ID of the Key Vault where the Managed Storage Account should be created. Changing this forces a new resource to be created.
     */
    keyVaultId?: pulumi.Input<string>;
    /**
     * The name which should be used for this Key Vault Managed Storage Account. Changing this forces a new Key Vault Managed Storage Account to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Should Storage Account access key be regenerated periodically?
     */
    regenerateKeyAutomatically?: pulumi.Input<boolean>;
    /**
     * How often Storage Account access key should be regenerated. Value needs to be in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations).
     */
    regenerationPeriod?: pulumi.Input<string>;
    /**
     * The ID of the Storage Account.
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * Which Storage Account access key that is managed by Key Vault. Possible values are `key1` and `key2`.
     */
    storageAccountKey?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Key Vault Managed Storage Account.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a ManagedStorageAccount resource.
 */
export interface ManagedStorageAccountArgs {
    /**
     * The ID of the Key Vault where the Managed Storage Account should be created. Changing this forces a new resource to be created.
     */
    keyVaultId: pulumi.Input<string>;
    /**
     * The name which should be used for this Key Vault Managed Storage Account. Changing this forces a new Key Vault Managed Storage Account to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Should Storage Account access key be regenerated periodically?
     */
    regenerateKeyAutomatically?: pulumi.Input<boolean>;
    /**
     * How often Storage Account access key should be regenerated. Value needs to be in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations).
     */
    regenerationPeriod?: pulumi.Input<string>;
    /**
     * The ID of the Storage Account.
     */
    storageAccountId: pulumi.Input<string>;
    /**
     * Which Storage Account access key that is managed by Key Vault. Possible values are `key1` and `key2`.
     */
    storageAccountKey: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Key Vault Managed Storage Account.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
