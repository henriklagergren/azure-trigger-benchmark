import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Azure recovery vault protection container mapping. A protection container mapping decides how to translate the protection container when a VM is migrated from one region to another.
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
 * });
 * const primaryProtectionContainer = new azure.siterecovery.ProtectionContainer("primaryProtectionContainer", {
 *     resourceGroupName: secondaryResourceGroup.name,
 *     recoveryVaultName: vault.name,
 *     recoveryFabricName: primaryFabric.name,
 * });
 * const secondaryProtectionContainer = new azure.siterecovery.ProtectionContainer("secondaryProtectionContainer", {
 *     resourceGroupName: secondaryResourceGroup.name,
 *     recoveryVaultName: vault.name,
 *     recoveryFabricName: secondaryFabric.name,
 * });
 * const policy = new azure.siterecovery.ReplicationPolicy("policy", {
 *     resourceGroupName: secondaryResourceGroup.name,
 *     recoveryVaultName: vault.name,
 *     recoveryPointRetentionInMinutes: 24 * 60,
 *     applicationConsistentSnapshotFrequencyInMinutes: 4 * 60,
 * });
 * const container_mapping = new azure.siterecovery.ProtectionContainerMapping("container-mapping", {
 *     resourceGroupName: secondaryResourceGroup.name,
 *     recoveryVaultName: vault.name,
 *     recoveryFabricName: primaryFabric.name,
 *     recoverySourceProtectionContainerName: primaryProtectionContainer.name,
 *     recoveryTargetProtectionContainerId: secondaryProtectionContainer.id,
 *     recoveryReplicationPolicyId: policy.id,
 * });
 * ```
 *
 * ## Import
 *
 * Site Recovery Protection Container Mappings can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:siterecovery/protectionContainerMapping:ProtectionContainerMapping mymapping /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resource-group-name/providers/Microsoft.RecoveryServices/vaults/recovery-vault-name
 * ```
 */
export declare class ProtectionContainerMapping extends pulumi.CustomResource {
    /**
     * Get an existing ProtectionContainerMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProtectionContainerMappingState, opts?: pulumi.CustomResourceOptions): ProtectionContainerMapping;
    /**
     * Returns true if the given object is an instance of ProtectionContainerMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ProtectionContainerMapping;
    /**
     * The name of the protection container mapping.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Name of fabric that should contains the protection container to map.
     */
    readonly recoveryFabricName: pulumi.Output<string>;
    /**
     * Id of the policy to use for this mapping.
     */
    readonly recoveryReplicationPolicyId: pulumi.Output<string>;
    /**
     * Name of the source protection container to map.
     */
    readonly recoverySourceProtectionContainerName: pulumi.Output<string>;
    /**
     * Id of target protection container to map to.
     */
    readonly recoveryTargetProtectionContainerId: pulumi.Output<string>;
    /**
     * The name of the vault that should be updated.
     */
    readonly recoveryVaultName: pulumi.Output<string>;
    /**
     * Name of the resource group where the vault that should be updated is located.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a ProtectionContainerMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProtectionContainerMappingArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ProtectionContainerMapping resources.
 */
export interface ProtectionContainerMappingState {
    /**
     * The name of the protection container mapping.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of fabric that should contains the protection container to map.
     */
    recoveryFabricName?: pulumi.Input<string>;
    /**
     * Id of the policy to use for this mapping.
     */
    recoveryReplicationPolicyId?: pulumi.Input<string>;
    /**
     * Name of the source protection container to map.
     */
    recoverySourceProtectionContainerName?: pulumi.Input<string>;
    /**
     * Id of target protection container to map to.
     */
    recoveryTargetProtectionContainerId?: pulumi.Input<string>;
    /**
     * The name of the vault that should be updated.
     */
    recoveryVaultName?: pulumi.Input<string>;
    /**
     * Name of the resource group where the vault that should be updated is located.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ProtectionContainerMapping resource.
 */
export interface ProtectionContainerMappingArgs {
    /**
     * The name of the protection container mapping.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of fabric that should contains the protection container to map.
     */
    recoveryFabricName: pulumi.Input<string>;
    /**
     * Id of the policy to use for this mapping.
     */
    recoveryReplicationPolicyId: pulumi.Input<string>;
    /**
     * Name of the source protection container to map.
     */
    recoverySourceProtectionContainerName: pulumi.Input<string>;
    /**
     * Id of target protection container to map to.
     */
    recoveryTargetProtectionContainerId: pulumi.Input<string>;
    /**
     * The name of the vault that should be updated.
     */
    recoveryVaultName: pulumi.Input<string>;
    /**
     * Name of the resource group where the vault that should be updated is located.
     */
    resourceGroupName: pulumi.Input<string>;
}
