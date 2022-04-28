import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Virtual WAN.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualWan = new azure.network.VirtualWan("exampleVirtualWan", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * ```
 *
 * ## Import
 *
 * Virtual WAN can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/virtualWan:VirtualWan example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/virtualWans/testvwan
 * ```
 */
export declare class VirtualWan extends pulumi.CustomResource {
    /**
     * Get an existing VirtualWan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualWanState, opts?: pulumi.CustomResourceOptions): VirtualWan;
    /**
     * Returns true if the given object is an instance of VirtualWan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualWan;
    /**
     * Boolean flag to specify whether branch to branch traffic is allowed. Defaults to `true`.
     */
    readonly allowBranchToBranchTraffic: pulumi.Output<boolean | undefined>;
    /**
     * @deprecated this property has been removed from the API and will be removed in version 3.0 of the provider
     */
    readonly allowVnetToVnetTraffic: pulumi.Output<boolean | undefined>;
    /**
     * Boolean flag to specify whether VPN encryption is disabled. Defaults to `false`.
     */
    readonly disableVpnEncryption: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Virtual WAN. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the Office365 local breakout category. Possible values include: `Optimize`, `OptimizeAndAllow`, `All`, `None`. Defaults to `None`.
     */
    readonly office365LocalBreakoutCategory: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group in which to create the Virtual WAN. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the Virtual WAN.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the Virtual WAN type. Possible Values include: `Basic` and `Standard`. Defaults to `Standard`.
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Create a VirtualWan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualWanArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering VirtualWan resources.
 */
export interface VirtualWanState {
    /**
     * Boolean flag to specify whether branch to branch traffic is allowed. Defaults to `true`.
     */
    allowBranchToBranchTraffic?: pulumi.Input<boolean>;
    /**
     * @deprecated this property has been removed from the API and will be removed in version 3.0 of the provider
     */
    allowVnetToVnetTraffic?: pulumi.Input<boolean>;
    /**
     * Boolean flag to specify whether VPN encryption is disabled. Defaults to `false`.
     */
    disableVpnEncryption?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Virtual WAN. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the Office365 local breakout category. Possible values include: `Optimize`, `OptimizeAndAllow`, `All`, `None`. Defaults to `None`.
     */
    office365LocalBreakoutCategory?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Virtual WAN. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the Virtual WAN.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the Virtual WAN type. Possible Values include: `Basic` and `Standard`. Defaults to `Standard`.
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a VirtualWan resource.
 */
export interface VirtualWanArgs {
    /**
     * Boolean flag to specify whether branch to branch traffic is allowed. Defaults to `true`.
     */
    allowBranchToBranchTraffic?: pulumi.Input<boolean>;
    /**
     * @deprecated this property has been removed from the API and will be removed in version 3.0 of the provider
     */
    allowVnetToVnetTraffic?: pulumi.Input<boolean>;
    /**
     * Boolean flag to specify whether VPN encryption is disabled. Defaults to `false`.
     */
    disableVpnEncryption?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Virtual WAN. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the Office365 local breakout category. Possible values include: `Optimize`, `OptimizeAndAllow`, `All`, `None`. Defaults to `None`.
     */
    office365LocalBreakoutCategory?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Virtual WAN. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the Virtual WAN.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the Virtual WAN type. Possible Values include: `Basic` and `Standard`. Defaults to `Standard`.
     */
    type?: pulumi.Input<string>;
}
