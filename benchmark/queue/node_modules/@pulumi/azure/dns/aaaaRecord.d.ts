import * as pulumi from "@pulumi/pulumi";
/**
 * Enables you to manage DNS AAAA Records within Azure DNS.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleZone = new azure.dns.Zone("exampleZone", {resourceGroupName: exampleResourceGroup.name});
 * const exampleAaaaRecord = new azure.dns.AaaaRecord("exampleAaaaRecord", {
 *     zoneName: exampleZone.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     ttl: 300,
 *     records: ["2001:db8::1:0:0:1"],
 * });
 * ```
 * ### Alias Record)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleZone = new azure.dns.Zone("exampleZone", {resourceGroupName: exampleResourceGroup.name});
 * const examplePublicIp = new azure.network.PublicIp("examplePublicIp", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     allocationMethod: "Dynamic",
 *     ipVersion: "IPv6",
 * });
 * const exampleAaaaRecord = new azure.dns.AaaaRecord("exampleAaaaRecord", {
 *     zoneName: exampleZone.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     ttl: 300,
 *     targetResourceId: examplePublicIp.id,
 * });
 * ```
 *
 * ## Import
 *
 * AAAA records can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:dns/aaaaRecord:AaaaRecord example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/dnszones/zone1/AAAA/myrecord1
 * ```
 */
export declare class AaaaRecord extends pulumi.CustomResource {
    /**
     * Get an existing AaaaRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AaaaRecordState, opts?: pulumi.CustomResourceOptions): AaaaRecord;
    /**
     * Returns true if the given object is an instance of AaaaRecord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AaaaRecord;
    /**
     * The FQDN of the DNS AAAA Record.
     */
    readonly fqdn: pulumi.Output<string>;
    /**
     * The name of the DNS AAAA Record.
     */
    readonly name: pulumi.Output<string>;
    /**
     * List of IPv6 Addresses. Conflicts with `targetResourceId`.
     */
    readonly records: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the resource group where the DNS Zone (parent resource) exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The Azure resource id of the target object. Conflicts with `records`
     */
    readonly targetResourceId: pulumi.Output<string | undefined>;
    readonly ttl: pulumi.Output<number>;
    /**
     * Specifies the DNS Zone where the resource exists. Changing this forces a new resource to be created.
     */
    readonly zoneName: pulumi.Output<string>;
    /**
     * Create a AaaaRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AaaaRecordArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AaaaRecord resources.
 */
export interface AaaaRecordState {
    /**
     * The FQDN of the DNS AAAA Record.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * The name of the DNS AAAA Record.
     */
    name?: pulumi.Input<string>;
    /**
     * List of IPv6 Addresses. Conflicts with `targetResourceId`.
     */
    records?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the resource group where the DNS Zone (parent resource) exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The Azure resource id of the target object. Conflicts with `records`
     */
    targetResourceId?: pulumi.Input<string>;
    ttl?: pulumi.Input<number>;
    /**
     * Specifies the DNS Zone where the resource exists. Changing this forces a new resource to be created.
     */
    zoneName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AaaaRecord resource.
 */
export interface AaaaRecordArgs {
    /**
     * The name of the DNS AAAA Record.
     */
    name?: pulumi.Input<string>;
    /**
     * List of IPv6 Addresses. Conflicts with `targetResourceId`.
     */
    records?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the resource group where the DNS Zone (parent resource) exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The Azure resource id of the target object. Conflicts with `records`
     */
    targetResourceId?: pulumi.Input<string>;
    ttl: pulumi.Input<number>;
    /**
     * Specifies the DNS Zone where the resource exists. Changing this forces a new resource to be created.
     */
    zoneName: pulumi.Input<string>;
}
