import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a site recovery network mapping on Azure. A network mapping decides how to translate connected netwroks when a VM is migrated from one region to another.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const primaryResourceGroup = new azure.core.ResourceGroup("primaryResourceGroup", {location: "West US"});
 * const secondaryResourceGroup = new azure.core.ResourceGroup("secondaryResourceGroup", {location: "East US"});
 * const vault = new azure.recoveryservices.Vault("vault", {
 *     location: secondaryResourceGroup.location,
 *     resourceGroupName: secondaryResourceGroup.name,
 *     sku: "Standard",
 * });
 * const primaryFabric = new azure.siterecovery.Fabric("primaryFabric", {
 *     resourceGroupName: secondaryResourceGroup.name,
 *     recoveryVaultName: vault.name,
 *     location: primaryResourceGroup.location,
 * });
 * const secondaryFabric = new azure.siterecovery.Fabric("secondaryFabric", {
 *     resourceGroupName: secondaryResourceGroup.name,
 *     recoveryVaultName: vault.name,
 *     location: secondaryResourceGroup.location,
 * }, {
 *     dependsOn: [primaryFabric],
 * });
 * // Avoids issues with creating fabrics simultaneously
 * const primaryVirtualNetwork = new azure.network.VirtualNetwork("primaryVirtualNetwork", {
 *     resourceGroupName: primaryResourceGroup.name,
 *     addressSpaces: ["192.168.1.0/24"],
 *     location: primaryResourceGroup.location,
 * });
 * const secondaryVirtualNetwork = new azure.network.VirtualNetwork("secondaryVirtualNetwork", {
 *     resourceGroupName: secondaryResourceGroup.name,
 *     addressSpaces: ["192.168.2.0/24"],
 *     location: secondaryResourceGroup.location,
 * });
 * const recovery_mapping = new azure.siterecovery.NetworkMapping("recovery-mapping", {
 *     resourceGroupName: secondaryResourceGroup.name,
 *     recoveryVaultName: vault.name,
 *     sourceRecoveryFabricName: "primary-fabric",
 *     targetRecoveryFabricName: "secondary-fabric",
 *     sourceNetworkId: primaryVirtualNetwork.id,
 *     targetNetworkId: secondaryVirtualNetwork.id,
 * });
 * ```
 *
 * ## Import
 *
 * Site Recovery Network Mapping can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:siterecovery/networkMapping:NetworkMapping mymapping /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resource-group-name/providers/Microsoft.RecoveryServices/vaults/recovery-vault-name/replicationFabrics/primary-fabric-name/replicationNetworks/azureNetwork/replicationNetworkMappings/mapping-name
 * ```
 */
export declare class NetworkMapping extends pulumi.CustomResource {
    /**
     * Get an existing NetworkMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkMappingState, opts?: pulumi.CustomResourceOptions): NetworkMapping;
    /**
     * Returns true if the given object is an instance of NetworkMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NetworkMapping;
    /**
     * The name of the network mapping.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the vault that should be updated.
     */
    readonly recoveryVaultName: pulumi.Output<string>;
    /**
     * Name of the resource group where the vault that should be updated is located.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The id of the primary network.
     */
    readonly sourceNetworkId: pulumi.Output<string>;
    /**
     * Specifies the ASR fabric where mapping should be created.
     */
    readonly sourceRecoveryFabricName: pulumi.Output<string>;
    /**
     * The id of the recovery network.
     */
    readonly targetNetworkId: pulumi.Output<string>;
    /**
     * The Azure Site Recovery fabric object corresponding to the recovery Azure region.
     */
    readonly targetRecoveryFabricName: pulumi.Output<string>;
    /**
     * Create a NetworkMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkMappingArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NetworkMapping resources.
 */
export interface NetworkMappingState {
    /**
     * The name of the network mapping.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the vault that should be updated.
     */
    recoveryVaultName?: pulumi.Input<string>;
    /**
     * Name of the resource group where the vault that should be updated is located.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The id of the primary network.
     */
    sourceNetworkId?: pulumi.Input<string>;
    /**
     * Specifies the ASR fabric where mapping should be created.
     */
    sourceRecoveryFabricName?: pulumi.Input<string>;
    /**
     * The id of the recovery network.
     */
    targetNetworkId?: pulumi.Input<string>;
    /**
     * The Azure Site Recovery fabric object corresponding to the recovery Azure region.
     */
    targetRecoveryFabricName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a NetworkMapping resource.
 */
export interface NetworkMappingArgs {
    /**
     * The name of the network mapping.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the vault that should be updated.
     */
    recoveryVaultName: pulumi.Input<string>;
    /**
     * Name of the resource group where the vault that should be updated is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The id of the primary network.
     */
    sourceNetworkId: pulumi.Input<string>;
    /**
     * Specifies the ASR fabric where mapping should be created.
     */
    sourceRecoveryFabricName: pulumi.Input<string>;
    /**
     * The id of the recovery network.
     */
    targetNetworkId: pulumi.Input<string>;
    /**
     * The Azure Site Recovery fabric object corresponding to the recovery Azure region.
     */
    targetRecoveryFabricName: pulumi.Input<string>;
}
