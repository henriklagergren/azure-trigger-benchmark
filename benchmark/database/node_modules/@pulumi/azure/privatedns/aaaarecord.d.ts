import * as pulumi from "@pulumi/pulumi";
/**
 * Enables you to manage DNS AAAA Records within Azure Private DNS.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const testResourceGroup = new azure.core.ResourceGroup("testResourceGroup", {location: "West Europe"});
 * const testZone = new azure.privatedns.Zone("testZone", {resourceGroupName: testResourceGroup.name});
 * const testAAAARecord = new azure.privatedns.AAAARecord("testAAAARecord", {
 *     zoneName: testZone.name,
 *     resourceGroupName: testResourceGroup.name,
 *     ttl: 300,
 *     records: [
 *         "fd5d:70bc:930e:d008:0000:0000:0000:7334",
 *         "fd5d:70bc:930e:d008::7335",
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * Private DNS AAAA Records can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:privatedns/aAAARecord:AAAARecord test /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/privateDnsZones/zone1/AAAA/myrecord1
 * ```
 */
export declare class AAAARecord extends pulumi.CustomResource {
    /**
     * Get an existing AAAARecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AAAARecordState, opts?: pulumi.CustomResourceOptions): AAAARecord;
    /**
     * Returns true if the given object is an instance of AAAARecord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AAAARecord;
    /**
     * The FQDN of the DNS AAAA Record.
     */
    readonly fqdn: pulumi.Output<string>;
    /**
     * The name of the DNS A Record.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A list of IPv6 Addresses.
     */
    readonly records: pulumi.Output<string[]>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    readonly ttl: pulumi.Output<number>;
    /**
     * Specifies the Private DNS Zone where the resource exists. Changing this forces a new resource to be created.
     */
    readonly zoneName: pulumi.Output<string>;
    /**
     * Create a AAAARecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AAAARecordArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AAAARecord resources.
 */
export interface AAAARecordState {
    /**
     * The FQDN of the DNS AAAA Record.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * The name of the DNS A Record.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of IPv6 Addresses.
     */
    records?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    ttl?: pulumi.Input<number>;
    /**
     * Specifies the Private DNS Zone where the resource exists. Changing this forces a new resource to be created.
     */
    zoneName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AAAARecord resource.
 */
export interface AAAARecordArgs {
    /**
     * The name of the DNS A Record.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of IPv6 Addresses.
     */
    records: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the resource group where the resource exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    ttl: pulumi.Input<number>;
    /**
     * Specifies the Private DNS Zone where the resource exists. Changing this forces a new resource to be created.
     */
    zoneName: pulumi.Input<string>;
}
