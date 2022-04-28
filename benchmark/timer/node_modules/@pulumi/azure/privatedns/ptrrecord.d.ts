import * as pulumi from "@pulumi/pulumi";
/**
 * Enables you to manage DNS PTR Records within Azure Private DNS.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleZone = new azure.privatedns.Zone("exampleZone", {resourceGroupName: exampleResourceGroup.name});
 * const examplePTRRecord = new azure.privatedns.PTRRecord("examplePTRRecord", {
 *     zoneName: exampleZone.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     ttl: 300,
 *     records: ["test.example.com"],
 * });
 * ```
 *
 * ## Import
 *
 * Private DNS PTR Records can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:privatedns/pTRRecord:PTRRecord example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/privateDnsZones/2.0.192.in-addr.arpa/PTR/15
 * ```
 */
export declare class PTRRecord extends pulumi.CustomResource {
    /**
     * Get an existing PTRRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PTRRecordState, opts?: pulumi.CustomResourceOptions): PTRRecord;
    /**
     * Returns true if the given object is an instance of PTRRecord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PTRRecord;
    /**
     * The FQDN of the DNS PTR Record.
     */
    readonly fqdn: pulumi.Output<string>;
    /**
     * The name of the DNS PTR Record. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * List of Fully Qualified Domain Names.
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
     * Create a PTRRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PTRRecordArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering PTRRecord resources.
 */
export interface PTRRecordState {
    /**
     * The FQDN of the DNS PTR Record.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * The name of the DNS PTR Record. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * List of Fully Qualified Domain Names.
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
 * The set of arguments for constructing a PTRRecord resource.
 */
export interface PTRRecordArgs {
    /**
     * The name of the DNS PTR Record. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * List of Fully Qualified Domain Names.
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
