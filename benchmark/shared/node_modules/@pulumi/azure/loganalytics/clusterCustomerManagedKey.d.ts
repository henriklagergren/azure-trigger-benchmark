import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Log Analytics Cluster Customer Managed Key.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleCluster = new azure.loganalytics.Cluster("exampleCluster", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     identity: {
 *         type: "SystemAssigned",
 *     },
 * });
 * const exampleKeyVault = new azure.keyvault.KeyVault("exampleKeyVault", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tenantId: data.azurerm_client_config.current.tenant_id,
 *     skuName: "premium",
 *     accessPolicies: [
 *         {
 *             tenantId: data.azurerm_client_config.current.tenant_id,
 *             objectId: data.azurerm_client_config.current.object_id,
 *             keyPermissions: [
 *                 "create",
 *                 "get",
 *             ],
 *             secretPermissions: ["set"],
 *         },
 *         {
 *             tenantId: exampleCluster.identity.apply(identity => identity.tenantId),
 *             objectId: exampleCluster.identity.apply(identity => identity.principalId),
 *             keyPermissions: [
 *                 "get",
 *                 "unwrapkey",
 *                 "wrapkey",
 *             ],
 *         },
 *     ],
 *     tags: {
 *         environment: "Production",
 *     },
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
 * });
 * const exampleClusterCustomerManagedKey = new azure.loganalytics.ClusterCustomerManagedKey("exampleClusterCustomerManagedKey", {
 *     logAnalyticsClusterId: exampleCluster.id,
 *     keyVaultKeyId: exampleKey.id,
 * });
 * ```
 *
 * ## Import
 *
 * Log Analytics Cluster Customer Managed Keys can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:loganalytics/clusterCustomerManagedKey:ClusterCustomerManagedKey example /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/group1/providers/Microsoft.OperationalInsights/clusters/cluster1/CMK
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
     * The ID of the Key Vault Key to use for encryption.
     */
    readonly keyVaultKeyId: pulumi.Output<string>;
    /**
     * The ID of the Log Analytics Cluster. Changing this forces a new Log Analytics Cluster Customer Managed Key to be created.
     */
    readonly logAnalyticsClusterId: pulumi.Output<string>;
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
     * The ID of the Key Vault Key to use for encryption.
     */
    keyVaultKeyId?: pulumi.Input<string>;
    /**
     * The ID of the Log Analytics Cluster. Changing this forces a new Log Analytics Cluster Customer Managed Key to be created.
     */
    logAnalyticsClusterId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ClusterCustomerManagedKey resource.
 */
export interface ClusterCustomerManagedKeyArgs {
    /**
     * The ID of the Key Vault Key to use for encryption.
     */
    keyVaultKeyId: pulumi.Input<string>;
    /**
     * The ID of the Log Analytics Cluster. Changing this forces a new Log Analytics Cluster Customer Managed Key to be created.
     */
    logAnalyticsClusterId: pulumi.Input<string>;
}
