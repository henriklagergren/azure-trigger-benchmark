import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Azure App Configuration Key.
 *
 * > **Note:** App Configuration Keys are provisioned using a Data Plane API which requires the role `App Configuration Data Owner` on either the App Configuration or a parent scope (such as the Resource Group/Subscription). [More information can be found in the Azure Documentation for App Configuration](https://docs.microsoft.com/azure/azure-app-configuration/concept-enable-rbac#azure-built-in-roles-for-azure-app-configuration).
 *
 * ## Example Usage
 * ### `Kv` Type
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const rg = new azure.core.ResourceGroup("rg", {location: "West Europe"});
 * const appconf = new azure.appconfiguration.ConfigurationStore("appconf", {
 *     resourceGroupName: rg.name,
 *     location: rg.location,
 * });
 * const current = azure.core.getClientConfig({});
 * const appconfDataowner = new azure.authorization.Assignment("appconfDataowner", {
 *     scope: appconf.id,
 *     roleDefinitionName: "App Configuration Data Owner",
 *     principalId: current.then(current => current.objectId),
 * });
 * const test = new azure.appconfiguration.ConfigurationKey("test", {
 *     configurationStoreId: appconf.id,
 *     key: "appConfKey1",
 *     label: "somelabel",
 *     value: "a test",
 * }, {
 *     dependsOn: [appconfDataowner],
 * });
 * ```
 * ### `Vault` Type
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const rg = new azure.core.ResourceGroup("rg", {location: "West Europe"});
 * const appconf = new azure.appconfiguration.ConfigurationStore("appconf", {
 *     resourceGroupName: rg.name,
 *     location: rg.location,
 * });
 * const current = azure.core.getClientConfig({});
 * const kv = new azure.keyvault.KeyVault("kv", {
 *     location: azurerm_resource_group.test.location,
 *     resourceGroupName: azurerm_resource_group.test.name,
 *     tenantId: current.then(current => current.tenantId),
 *     skuName: "premium",
 *     softDeleteRetentionDays: 7,
 *     accessPolicies: [{
 *         tenantId: current.then(current => current.tenantId),
 *         objectId: current.then(current => current.objectId),
 *         keyPermissions: [
 *             "create",
 *             "get",
 *         ],
 *         secretPermissions: [
 *             "set",
 *             "get",
 *             "delete",
 *             "purge",
 *             "recover",
 *         ],
 *     }],
 * });
 * const kvs = new azure.keyvault.Secret("kvs", {
 *     value: "szechuan",
 *     keyVaultId: kv.id,
 * });
 * const appconfDataowner = new azure.authorization.Assignment("appconfDataowner", {
 *     scope: appconf.id,
 *     roleDefinitionName: "App Configuration Data Owner",
 *     principalId: current.then(current => current.objectId),
 * });
 * const test = new azure.appconfiguration.ConfigurationKey("test", {
 *     configurationStoreId: azurerm_app_configuration.test.id,
 *     key: "key1",
 *     type: "vault",
 *     label: "label1",
 *     vaultKeyReference: kvs.id,
 * }, {
 *     dependsOn: [appconfDataowner],
 * });
 * ```
 *
 * ## Import
 *
 * App Configuration Keys can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appconfiguration/configurationKey:ConfigurationKey test /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resourceGroup1/providers/Microsoft.AppConfiguration/configurationStores/appConf1/AppConfigurationKey/appConfKey1/Label/label1
 * ```
 *
 *  If you wish to import a key with an empty label then sustitute the label's name with `%00`, like this
 *
 * ```sh
 *  $ pulumi import azure:appconfiguration/configurationKey:ConfigurationKey test /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resourceGroup1/providers/Microsoft.AppConfiguration/configurationStores/appConf1/AppConfigurationKey/appConfKey1/Label/%00
 * ```
 */
export declare class ConfigurationKey extends pulumi.CustomResource {
    /**
     * Get an existing ConfigurationKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConfigurationKeyState, opts?: pulumi.CustomResourceOptions): ConfigurationKey;
    /**
     * Returns true if the given object is an instance of ConfigurationKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ConfigurationKey;
    /**
     * Specifies the id of the App Configuration. Changing this forces a new resource to be created.
     */
    readonly configurationStoreId: pulumi.Output<string>;
    /**
     * The content type of the App Configuration Key. This should only be set when type is set to `kv`.
     */
    readonly contentType: pulumi.Output<string>;
    /**
     * The ETag of the key.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The name of the App Configuration Key to create. Changing this forces a new resource to be created.
     */
    readonly key: pulumi.Output<string>;
    /**
     * The label of the App Configuration Key.  Changing this forces a new resource to be created.
     */
    readonly label: pulumi.Output<string | undefined>;
    /**
     * Should this App Configuration Key be Locked to prevent changes?
     */
    readonly locked: pulumi.Output<boolean | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the App Configuration Key. It can either be `kv` (simple [key/value](https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-key-value)) or `vault` (where the value is a reference to a [Key Vault Secret](https://azure.microsoft.com/en-gb/services/key-vault/).
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * The value of the App Configuration Key. This should only be set when type is set to `kv`.
     */
    readonly value: pulumi.Output<string>;
    /**
     * The ID of the vault secret this App Configuration Key refers to, when `type` is set to `vault`.
     */
    readonly vaultKeyReference: pulumi.Output<string | undefined>;
    /**
     * Create a ConfigurationKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConfigurationKeyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ConfigurationKey resources.
 */
export interface ConfigurationKeyState {
    /**
     * Specifies the id of the App Configuration. Changing this forces a new resource to be created.
     */
    configurationStoreId?: pulumi.Input<string>;
    /**
     * The content type of the App Configuration Key. This should only be set when type is set to `kv`.
     */
    contentType?: pulumi.Input<string>;
    /**
     * The ETag of the key.
     */
    etag?: pulumi.Input<string>;
    /**
     * The name of the App Configuration Key to create. Changing this forces a new resource to be created.
     */
    key?: pulumi.Input<string>;
    /**
     * The label of the App Configuration Key.  Changing this forces a new resource to be created.
     */
    label?: pulumi.Input<string>;
    /**
     * Should this App Configuration Key be Locked to prevent changes?
     */
    locked?: pulumi.Input<boolean>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The type of the App Configuration Key. It can either be `kv` (simple [key/value](https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-key-value)) or `vault` (where the value is a reference to a [Key Vault Secret](https://azure.microsoft.com/en-gb/services/key-vault/).
     */
    type?: pulumi.Input<string>;
    /**
     * The value of the App Configuration Key. This should only be set when type is set to `kv`.
     */
    value?: pulumi.Input<string>;
    /**
     * The ID of the vault secret this App Configuration Key refers to, when `type` is set to `vault`.
     */
    vaultKeyReference?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ConfigurationKey resource.
 */
export interface ConfigurationKeyArgs {
    /**
     * Specifies the id of the App Configuration. Changing this forces a new resource to be created.
     */
    configurationStoreId: pulumi.Input<string>;
    /**
     * The content type of the App Configuration Key. This should only be set when type is set to `kv`.
     */
    contentType?: pulumi.Input<string>;
    /**
     * The ETag of the key.
     */
    etag?: pulumi.Input<string>;
    /**
     * The name of the App Configuration Key to create. Changing this forces a new resource to be created.
     */
    key: pulumi.Input<string>;
    /**
     * The label of the App Configuration Key.  Changing this forces a new resource to be created.
     */
    label?: pulumi.Input<string>;
    /**
     * Should this App Configuration Key be Locked to prevent changes?
     */
    locked?: pulumi.Input<boolean>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The type of the App Configuration Key. It can either be `kv` (simple [key/value](https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-key-value)) or `vault` (where the value is a reference to a [Key Vault Secret](https://azure.microsoft.com/en-gb/services/key-vault/).
     */
    type?: pulumi.Input<string>;
    /**
     * The value of the App Configuration Key. This should only be set when type is set to `kv`.
     */
    value?: pulumi.Input<string>;
    /**
     * The ID of the vault secret this App Configuration Key refers to, when `type` is set to `vault`.
     */
    vaultKeyReference?: pulumi.Input<string>;
}
