import * as pulumi from "@pulumi/pulumi";
/**
 * Enables you to manage Private DNS zone Virtual Network Links. These Links enable DNS resolution and registration inside Azure Virtual Networks using Azure Private DNS.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleZone = new azure.privatedns.Zone("exampleZone", {resourceGroupName: exampleResourceGroup.name});
 * const exampleZoneVirtualNetworkLink = new azure.privatedns.ZoneVirtualNetworkLink("exampleZoneVirtualNetworkLink", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     privateDnsZoneName: exampleZone.name,
 *     virtualNetworkId: azurerm_virtual_network.example.id,
 * });
 * ```
 *
 * ## Import
 *
 * Private DNS Zone Virtual Network Links can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:privatedns/zoneVirtualNetworkLink:ZoneVirtualNetworkLink link1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/privateDnsZones/zone1.com/virtualNetworkLinks/myVnetLink1
 * ```
 */
export declare class ZoneVirtualNetworkLink extends pulumi.CustomResource {
    /**
     * Get an existing ZoneVirtualNetworkLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZoneVirtualNetworkLinkState, opts?: pulumi.CustomResourceOptions): ZoneVirtualNetworkLink;
    /**
     * Returns true if the given object is an instance of ZoneVirtualNetworkLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ZoneVirtualNetworkLink;
    /**
     * The name of the Private DNS Zone Virtual Network Link. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Private DNS zone (without a terminating dot). Changing this forces a new resource to be created.
     */
    readonly privateDnsZoneName: pulumi.Output<string>;
    /**
     * Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled? Defaults to `false`.
     */
    readonly registrationEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the resource group where the Private DNS Zone exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The ID of the Virtual Network that should be linked to the DNS Zone. Changing this forces a new resource to be created.
     */
    readonly virtualNetworkId: pulumi.Output<string>;
    /**
     * Create a ZoneVirtualNetworkLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZoneVirtualNetworkLinkArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ZoneVirtualNetworkLink resources.
 */
export interface ZoneVirtualNetworkLinkState {
    /**
     * The name of the Private DNS Zone Virtual Network Link. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Private DNS zone (without a terminating dot). Changing this forces a new resource to be created.
     */
    privateDnsZoneName?: pulumi.Input<string>;
    /**
     * Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled? Defaults to `false`.
     */
    registrationEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the resource group where the Private DNS Zone exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The ID of the Virtual Network that should be linked to the DNS Zone. Changing this forces a new resource to be created.
     */
    virtualNetworkId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ZoneVirtualNetworkLink resource.
 */
export interface ZoneVirtualNetworkLinkArgs {
    /**
     * The name of the Private DNS Zone Virtual Network Link. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Private DNS zone (without a terminating dot). Changing this forces a new resource to be created.
     */
    privateDnsZoneName: pulumi.Input<string>;
    /**
     * Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled? Defaults to `false`.
     */
    registrationEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the resource group where the Private DNS Zone exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The ID of the Virtual Network that should be linked to the DNS Zone. Changing this forces a new resource to be created.
     */
    virtualNetworkId: pulumi.Input<string>;
}
