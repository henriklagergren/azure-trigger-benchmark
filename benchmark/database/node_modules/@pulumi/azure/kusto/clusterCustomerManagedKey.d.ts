import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Customer Managed Key for a Kusto Cluster.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleKeyVault = new azure.keyvault.KeyVault("exampleKeyVault", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tenantId: current.then(current => current.tenantId),
 *     skuName: "standard",
 *     purgeProtectionEnabled: true,
 * });
 * const exampleCluster = new azure.kusto.Cluster("exampleCluster", {
 *     location: azurerm_resource_group.rg.location,
 *     resourceGroupName: azurerm_resource_group.rg.name,
 *     sku: {
 *         name: "Standard_D13_v2",
 *         capacity: 2,
 *     },
 *     identity: {
 *         type: "SystemAssigned",
 *     },
 * });
 * const cluster = new azure.keyvault.AccessPolicy("cluster", {
 *     keyVaultId: exampleKeyVault.id,
 *     tenantId: current.then(current => current.tenantId),
 *     objectId: exampleCluster.identity.apply(identity => identity?.principalId),
 *     keyPermissions: [
 *         "get",
 *         "unwrapkey",
 *         "wrapkey",
 *     ],
 * });
 * const client = new azure.keyvault.AccessPolicy("client", {
 *     keyVaultId: exampleKeyVault.id,
 *     tenantId: current.then(current => current.tenantId),
 *     objectId: current.then(current => current.objectId),
 *     keyPermissions: [
 *         "get",
 *         "list",
 *         "create",
 *         "delete",
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
 *         client,
 *         cluster,
 *     ],
 * });
 * const exampleClusterCustomerManagedKey = new azure.kusto.ClusterCustomerManagedKey("exampleClusterCustomerManagedKey", {
 *     clusterId: exampleCluster.id,
 *     keyVaultId: exampleKeyVault.id,
 *     keyName: exampleKey.name,
 *     keyVersion: exampleKey.version,
 * });
 * ```
 *
 * ## Import
 *
 * Customer Managed Keys for a Kusto Cluster can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:kusto/clusterCustomerManagedKey:ClusterCustomerManagedKey example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Kusto/Clusters/cluster1
 * ```
 */
export declare class ClusterCustomerManagedKey extends pulumi.CustomResource {
    /**
     * Get an existing ClusterCustomerManagedKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterCustomerManagedKeyState, opts?: pulumi.CustomResourceOptions): ClusterCustomerManagedKey;
    /**
     * Returns true if the given object is an instance of ClusterCustomerManagedKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ClusterCustomerManagedKey;
    /**
     * The ID of the Kusto Cluster. Changing this forces a new resource to be created.
     */
    readonly clusterId: pulumi.Output<string>;
    /**
     * The name of Key Vault Key.
     */
    readonly keyName: pulumi.Output<string>;
    /**
     * The ID of the Key Vault. Changing this forces a new resource to be created.
     */
    readonly keyVaultId: pulumi.Output<string>;
    /**
     * The version of Key Vault Key.
     */
    readonly keyVersion: pulumi.Output<string>;
    /**
     * The user assigned identity that has access to the Key Vault Key. If not specified, system assigned identity will be used.
     */
    readonly userIdentity: pulumi.Output<string | undefined>;
    /**
     * Create a ClusterCustomerManagedKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterCustomerManagedKeyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ClusterCustomerManagedKey resources.
 */
export interface ClusterCustomerManagedKeyState {
    /**
     * The ID of the Kusto Cluster. Changing this forces a new resource to be created.
     */
    clusterId?: pulumi.Input<string>;
    /**
     * The name of Key Vault Key.
     */
    keyName?: pulumi.Input<string>;
    /**
     * The ID of the Key Vault. Changing this forces a new resource to be created.
     */
    keyVaultId?: pulumi.Input<string>;
    /**
     * The version of Key Vault Key.
     */
    keyVersion?: pulumi.Input<string>;
    /**
     * The user assigned identity that has access to the Key Vault Key. If not specified, system assigned identity will be used.
     */
    userIdentity?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ClusterCustomerManagedKey resource.
 */
export interface ClusterCustomerManagedKeyArgs {
    /**
     * The ID of the Kusto Cluster. Changing this forces a new resource to be created.
     */
    clusterId: pulumi.Input<string>;
    /**
     * The name of Key Vault Key.
     */
    keyName: pulumi.Input<string>;
    /**
     * The ID of the Key Vault. Changing this forces a new resource to be created.
     */
    keyVaultId: pulumi.Input<string>;
    /**
     * The version of Key Vault Key.
     */
    keyVersion: pulumi.Input<string>;
    /**
     * The user assigned identity that has access to the Key Vault Key. If not specified, system assigned identity will be used.
     */
    userIdentity?: pulumi.Input<string>;
}
