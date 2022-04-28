import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Enables you to manage Private DNS zones within Azure DNS. These zones are hosted on Azure's name servers.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleZone = new azure.privatedns.Zone("exampleZone", {resourceGroupName: exampleResourceGroup.name});
 * ```
 *
 * ## Import
 *
 * Private DNS Zones can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:privatedns/zone:Zone zone1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/privateDnsZones/zone1
 * ```
 */
export declare class Zone extends pulumi.CustomResource {
    /**
     * Get an existing Zone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZoneState, opts?: pulumi.CustomResourceOptions): Zone;
    /**
     * Returns true if the given object is an instance of Zone.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Zone;
    /**
     * The maximum number of record sets that can be created in this Private DNS zone.
     */
    readonly maxNumberOfRecordSets: pulumi.Output<number>;
    /**
     * The maximum number of virtual networks that can be linked to this Private DNS zone.
     */
    readonly maxNumberOfVirtualNetworkLinks: pulumi.Output<number>;
    /**
     * The maximum number of virtual networks that can be linked to this Private DNS zone with registration enabled.
     */
    readonly maxNumberOfVirtualNetworkLinksWithRegistration: pulumi.Output<number>;
    /**
     * The name of the Private DNS Zone. Must be a valid domain name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The current number of record sets in this Private DNS zone.
     */
    readonly numberOfRecordSets: pulumi.Output<number>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * An `soaRecord` block as defined below. Changing this forces a new resource to be created.
     */
    readonly soaRecord: pulumi.Output<outputs.privatedns.ZoneSoaRecord>;
    /**
     * A mapping of tags to assign to the Record Set.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Zone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZoneArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Zone resources.
 */
export interface ZoneState {
    /**
     * The maximum number of record sets that can be created in this Private DNS zone.
     */
    maxNumberOfRecordSets?: pulumi.Input<number>;
    /**
     * The maximum number of virtual networks that can be linked to this Private DNS zone.
     */
    maxNumberOfVirtualNetworkLinks?: pulumi.Input<number>;
    /**
     * The maximum number of virtual networks that can be linked to this Private DNS zone with registration enabled.
     */
    maxNumberOfVirtualNetworkLinksWithRegistration?: pulumi.Input<number>;
    /**
     * The name of the Private DNS Zone. Must be a valid domain name.
     */
    name?: pulumi.Input<string>;
    /**
     * The current number of record sets in this Private DNS zone.
     */
    numberOfRecordSets?: pulumi.Input<number>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * An `soaRecord` block as defined below. Changing this forces a new resource to be created.
     */
    soaRecord?: pulumi.Input<inputs.privatedns.ZoneSoaRecord>;
    /**
     * A mapping of tags to assign to the Record Set.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Zone resource.
 */
export interface ZoneArgs {
    /**
     * The name of the Private DNS Zone. Must be a valid domain name.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * An `soaRecord` block as defined below. Changing this forces a new resource to be created.
     */
    soaRecord?: pulumi.Input<inputs.privatedns.ZoneSoaRecord>;
    /**
     * A mapping of tags to assign to the Record Set.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
