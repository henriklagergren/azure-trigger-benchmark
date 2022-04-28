import * as pulumi from "@pulumi/pulumi";
/**
 * Enables you to manage DNS NS Records within Azure DNS.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleZone = new azure.dns.Zone("exampleZone", {resourceGroupName: exampleResourceGroup.name});
 * const exampleNsRecord = new azure.dns.NsRecord("exampleNsRecord", {
 *     zoneName: exampleZone.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     ttl: 300,
 *     records: [
 *         "ns1.contoso.com",
 *         "ns2.contoso.com",
 *     ],
 *     tags: {
 *         Environment: "Production",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * NS records can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:dns/nsRecord:NsRecord example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/dnszones/zone1/NS/myrecord1
 * ```
 */
export declare class NsRecord extends pulumi.CustomResource {
    /**
     * Get an existing NsRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NsRecordState, opts?: pulumi.CustomResourceOptions): NsRecord;
    /**
     * Returns true if the given object is an instance of NsRecord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NsRecord;
    /**
     * The FQDN of the DNS NS Record.
     */
    readonly fqdn: pulumi.Output<string>;
    /**
     * The name of the DNS NS Record.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A list of values that make up the NS record.
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
    /**
     * The Time To Live (TTL) of the DNS record in seconds.
     */
    readonly ttl: pulumi.Output<number>;
    /**
     * Specifies the DNS Zone where the DNS Zone (parent resource) exists. Changing this forces a new resource to be created.
     */
    readonly zoneName: pulumi.Output<string>;
    /**
     * Create a NsRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NsRecordArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NsRecord resources.
 */
export interface NsRecordState {
    /**
     * The FQDN of the DNS NS Record.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * The name of the DNS NS Record.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of values that make up the NS record.
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
    /**
     * The Time To Live (TTL) of the DNS record in seconds.
     */
    ttl?: pulumi.Input<number>;
    /**
     * Specifies the DNS Zone where the DNS Zone (parent resource) exists. Changing this forces a new resource to be created.
     */
    zoneName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a NsRecord resource.
 */
export interface NsRecordArgs {
    /**
     * The name of the DNS NS Record.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of values that make up the NS record.
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
    /**
     * The Time To Live (TTL) of the DNS record in seconds.
     */
    ttl: pulumi.Input<number>;
    /**
     * Specifies the DNS Zone where the DNS Zone (parent resource) exists. Changing this forces a new resource to be created.
     */
    zoneName: pulumi.Input<string>;
}
