import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Azure Site Recovery Replication Fabric within a Recovery Services vault. Only Azure fabrics are supported at this time. Replication Fabrics serve as a container within an Azure region for other Site Recovery resources such as protection containers, protected items, network mappings.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const primary = new azure.core.ResourceGroup("primary", {location: "West US"});
 * const secondary = new azure.core.ResourceGroup("secondary", {location: "East US"});
 * const vault = new azure.recoveryservices.Vault("vault", {
 *     location: secondary.location,
 *     resourceGroupName: secondary.name,
 *     sku: "Standard",
 * });
 * const fabric = new azure.siterecovery.Fabric("fabric", {
 *     resourceGroupName: secondary.name,
 *     recoveryVaultName: vault.name,
 *     location: primary.location,
 * });
 * ```
 *
 * ## Import
 *
 * Site Recovery Fabric can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:siterecovery/fabric:Fabric myfabric /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resource-group-name/providers/Microsoft.RecoveryServices/vaults/recovery-vault-name/replicationFabrics/fabric-name
 * ```
 */
export declare class Fabric extends pulumi.CustomResource {
    /**
     * Get an existing Fabric resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FabricState, opts?: pulumi.CustomResourceOptions): Fabric;
    /**
     * Returns true if the given object is an instance of Fabric.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Fabric;
    /**
     * In what region should the fabric be located.
     */
    readonly location: pulumi.Output<string>;
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
     * Create a Fabric resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FabricArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Fabric resources.
 */
export interface FabricState {
    /**
     * In what region should the fabric be located.
     */
    location?: pulumi.Input<string>;
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
}
/**
 * The set of arguments for constructing a Fabric resource.
 */
export interface FabricArgs {
    /**
     * In what region should the fabric be located.
     */
    location?: pulumi.Input<string>;
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
}
