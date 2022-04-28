import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Recovery Services Vault.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const rg = new azure.core.ResourceGroup("rg", {location: "West Europe"});
 * const vault = new azure.recoveryservices.Vault("vault", {
 *     location: rg.location,
 *     resourceGroupName: rg.name,
 *     sku: "Standard",
 *     softDeleteEnabled: true,
 * });
 * ```
 *
 * ## Import
 *
 * Recovery Services Vaults can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:recoveryservices/vault:Vault vault1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.RecoveryServices/vaults/vault1
 * ```
 */
export declare class Vault extends pulumi.CustomResource {
    /**
     * Get an existing Vault resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VaultState, opts?: pulumi.CustomResourceOptions): Vault;
    /**
     * Returns true if the given object is an instance of Vault.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Vault;
    /**
     * Is cross region restore enabled for this Vault? Only can be `true`, when `storageModeType` is `GeoRedundant`. Defaults to `false`.
     */
    readonly crossRegionRestoreEnabled: pulumi.Output<boolean | undefined>;
    /**
     * An `encryption` block as defined below. Required with `identity`.
     */
    readonly encryption: pulumi.Output<outputs.recoveryservices.VaultEncryption | undefined>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.recoveryservices.VaultIdentity | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Recovery Services Vault. Recovery Service Vault name must be 2 - 50 characters long, start with a letter, contain only letters, numbers and hyphens. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Recovery Services Vault. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Sets the vault's SKU. Possible values include: `Standard`, `RS0`.
     */
    readonly sku: pulumi.Output<string>;
    /**
     * Is soft delete enable for this Vault? Defaults to `true`.
     */
    readonly softDeleteEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The storage type of the Recovery Services Vault. Possible values are `GeoRedundant`, `LocallyRedundant` and `ZoneRedundant`. Defaults to `GeoRedundant`.
     */
    readonly storageModeType: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Vault resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VaultArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Vault resources.
 */
export interface VaultState {
    /**
     * Is cross region restore enabled for this Vault? Only can be `true`, when `storageModeType` is `GeoRedundant`. Defaults to `false`.
     */
    crossRegionRestoreEnabled?: pulumi.Input<boolean>;
    /**
     * An `encryption` block as defined below. Required with `identity`.
     */
    encryption?: pulumi.Input<inputs.recoveryservices.VaultEncryption>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.recoveryservices.VaultIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Recovery Services Vault. Recovery Service Vault name must be 2 - 50 characters long, start with a letter, contain only letters, numbers and hyphens. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Recovery Services Vault. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Sets the vault's SKU. Possible values include: `Standard`, `RS0`.
     */
    sku?: pulumi.Input<string>;
    /**
     * Is soft delete enable for this Vault? Defaults to `true`.
     */
    softDeleteEnabled?: pulumi.Input<boolean>;
    /**
     * The storage type of the Recovery Services Vault. Possible values are `GeoRedundant`, `LocallyRedundant` and `ZoneRedundant`. Defaults to `GeoRedundant`.
     */
    storageModeType?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Vault resource.
 */
export interface VaultArgs {
    /**
     * Is cross region restore enabled for this Vault? Only can be `true`, when `storageModeType` is `GeoRedundant`. Defaults to `false`.
     */
    crossRegionRestoreEnabled?: pulumi.Input<boolean>;
    /**
     * An `encryption` block as defined below. Required with `identity`.
     */
    encryption?: pulumi.Input<inputs.recoveryservices.VaultEncryption>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.recoveryservices.VaultIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Recovery Services Vault. Recovery Service Vault name must be 2 - 50 characters long, start with a letter, contain only letters, numbers and hyphens. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Recovery Services Vault. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Sets the vault's SKU. Possible values include: `Standard`, `RS0`.
     */
    sku: pulumi.Input<string>;
    /**
     * Is soft delete enable for this Vault? Defaults to `true`.
     */
    softDeleteEnabled?: pulumi.Input<boolean>;
    /**
     * The storage type of the Recovery Services Vault. Possible values are `GeoRedundant`, `LocallyRedundant` and `ZoneRedundant`. Defaults to `GeoRedundant`.
     */
    storageModeType?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
