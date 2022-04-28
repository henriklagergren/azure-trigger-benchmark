import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a resources Advanced Threat Protection setting.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const rg = new azure.core.ResourceGroup("rg", {location: "West Europe"});
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: azurerm_resource_group.example.name,
 *     location: azurerm_resource_group.example.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 *     tags: {
 *         environment: "example",
 *     },
 * });
 * const exampleAdvancedThreatProtection = new azure.securitycenter.AdvancedThreatProtection("exampleAdvancedThreatProtection", {
 *     targetResourceId: exampleAccount.id,
 *     enabled: true,
 * });
 * ```
 *
 * ## Import
 *
 * Advanced Threat Protection can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:securitycenter/advancedThreatProtection:AdvancedThreatProtection example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/exampleResourceGroup/providers/Microsoft.Storage/storageAccounts/exampleaccount/providers/Microsoft.Security/advancedThreatProtectionSettings/default
 * ```
 */
export declare class AdvancedThreatProtection extends pulumi.CustomResource {
    /**
     * Get an existing AdvancedThreatProtection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AdvancedThreatProtectionState, opts?: pulumi.CustomResourceOptions): AdvancedThreatProtection;
    /**
     * Returns true if the given object is an instance of AdvancedThreatProtection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AdvancedThreatProtection;
    /**
     * Should Advanced Threat Protection be enabled on this resource?
     */
    readonly enabled: pulumi.Output<boolean>;
    /**
     * The ID of the Azure Resource which to enable Advanced Threat Protection on. Changing this forces a new resource to be created.
     */
    readonly targetResourceId: pulumi.Output<string>;
    /**
     * Create a AdvancedThreatProtection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AdvancedThreatProtectionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AdvancedThreatProtection resources.
 */
export interface AdvancedThreatProtectionState {
    /**
     * Should Advanced Threat Protection be enabled on this resource?
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The ID of the Azure Resource which to enable Advanced Threat Protection on. Changing this forces a new resource to be created.
     */
    targetResourceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AdvancedThreatProtection resource.
 */
export interface AdvancedThreatProtectionArgs {
    /**
     * Should Advanced Threat Protection be enabled on this resource?
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The ID of the Azure Resource which to enable Advanced Threat Protection on. Changing this forces a new resource to be created.
     */
    targetResourceId: pulumi.Input<string>;
}
