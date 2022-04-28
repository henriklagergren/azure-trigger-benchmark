import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Customer Managed Key for a EventHub Namespace.
 *
 * !> **Note:** In 2.x versions of the Azure Provider during deletion this resource will **delete and recreate the parent EventHub Namespace which may involve data loss** as it's not possible to remove the Customer Managed Key from the EventHub Namespace once it's been added. Version 3.0 of the Azure Provider will change this so that the Delete operation is a noop, requiring the parent EventHub Namespace is deleted/recreated to remove the Customer Managed Key.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleCluster = new azure.eventhub.Cluster("exampleCluster", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     skuName: "Dedicated_1",
 * });
 * const exampleEventHubNamespace = new azure.eventhub.EventHubNamespace("exampleEventHubNamespace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard",
 *     dedicatedClusterId: exampleCluster.id,
 *     identity: {
 *         type: "SystemAssigned",
 *     },
 * });
 * const current = azure.core.getClientConfig({});
 * const exampleKeyVault = new azure.keyvault.KeyVault("exampleKeyVault", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tenantId: current.then(current => current.tenantId),
 *     skuName: "standard",
 *     softDeleteEnabled: true,
 *     purgeProtectionEnabled: true,
 * });
 * const exampleAccessPolicy = new azure.keyvault.AccessPolicy("exampleAccessPolicy", {
 *     keyVaultId: exampleKeyVault.id,
 *     tenantId: exampleEventHubNamespace.identity.apply(identity => identity?.tenantId),
 *     objectId: exampleEventHubNamespace.identity.apply(identity => identity?.principalId),
 *     keyPermissions: [
 *         "get",
 *         "unwrapkey",
 *         "wrapkey",
 *     ],
 * });
 * const example2 = new azure.keyvault.AccessPolicy("example2", {
 *     keyVaultId: exampleKeyVault.id,
 *     tenantId: current.then(current => current.tenantId),
 *     objectId: current.then(current => current.objectId),
 *     keyPermissions: [
 *         "create",
 *         "delete",
 *         "get",
 *         "list",
 *         "purge",
 *         "recover",
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
 *         exampleAccessPolicy,
 *         example2,
 *     ],
 * });
 * const exampleNamespaceCustomerManagedKey = new azure.eventhub.NamespaceCustomerManagedKey("exampleNamespaceCustomerManagedKey", {
 *     eventhubNamespaceId: exampleEventHubNamespace.id,
 *     keyVaultKeyIds: [exampleKey.id],
 * });
 * ```
 *
 * ## Import
 *
 * Customer Managed Keys for a EventHub Namespace can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:eventhub/namespaceCustomerManagedKey:NamespaceCustomerManagedKey example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.EventHub/namespaces/namespace1
 * ```
 */
export declare class NamespaceCustomerManagedKey extends pulumi.CustomResource {
    /**
     * Get an existing NamespaceCustomerManagedKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NamespaceCustomerManagedKeyState, opts?: pulumi.CustomResourceOptions): NamespaceCustomerManagedKey;
    /**
     * Returns true if the given object is an instance of NamespaceCustomerManagedKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NamespaceCustomerManagedKey;
    /**
     * The ID of the EventHub Namespace. Changing this forces a new resource to be created.
     */
    readonly eventhubNamespaceId: pulumi.Output<string>;
    /**
     * The list of keys of Key Vault.
     */
    readonly keyVaultKeyIds: pulumi.Output<string[]>;
    /**
     * Create a NamespaceCustomerManagedKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceCustomerManagedKeyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NamespaceCustomerManagedKey resources.
 */
export interface NamespaceCustomerManagedKeyState {
    /**
     * The ID of the EventHub Namespace. Changing this forces a new resource to be created.
     */
    eventhubNamespaceId?: pulumi.Input<string>;
    /**
     * The list of keys of Key Vault.
     */
    keyVaultKeyIds?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a NamespaceCustomerManagedKey resource.
 */
export interface NamespaceCustomerManagedKeyArgs {
    /**
     * The ID of the EventHub Namespace. Changing this forces a new resource to be created.
     */
    eventhubNamespaceId: pulumi.Input<string>;
    /**
     * The list of keys of Key Vault.
     */
    keyVaultKeyIds: pulumi.Input<pulumi.Input<string>[]>;
}
