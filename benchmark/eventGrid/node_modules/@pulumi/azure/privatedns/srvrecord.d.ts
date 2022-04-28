import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Enables you to manage DNS SRV Records within Azure Private DNS.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.core.ResourceGroup("example", {location: "West Europe"});
 * const testZone = new azure.privatedns.Zone("testZone", {resourceGroupName: azurerm_resource_group.test.name});
 * const testSRVRecord = new azure.privatedns.SRVRecord("testSRVRecord", {
 *     resourceGroupName: azurerm_resource_group.test.name,
 *     zoneName: testZone.name,
 *     ttl: 300,
 *     records: [
 *         {
 *             priority: 1,
 *             weight: 5,
 *             port: 8080,
 *             target: "target1.contoso.com",
 *         },
 *         {
 *             priority: 10,
 *             weight: 10,
 *             port: 8080,
 *             target: "target2.contoso.com",
 *         },
 *     ],
 *     tags: {
 *         Environment: "Production",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Private DNS SRV Records can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:privatedns/sRVRecord:SRVRecord test /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/privateDnsZones/contoso.com/SRV/test
 * ```
 */
export declare class SRVRecord extends pulumi.CustomResource {
    /**
     * Get an existing SRVRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SRVRecordState, opts?: pulumi.CustomResourceOptions): SRVRecord;
    /**
     * Returns true if the given object is an instance of SRVRecord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SRVRecord;
    /**
     * The FQDN of the DNS SRV Record.
     */
    readonly fqdn: pulumi.Output<string>;
    /**
     * The name of the DNS SRV Record. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * One or more `record` blocks as defined below.
     */
    readonly records: pulumi.Output<outputs.privatedns.SRVRecordRecord[]>;
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
     * Create a SRVRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SRVRecordArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SRVRecord resources.
 */
export interface SRVRecordState {
    /**
     * The FQDN of the DNS SRV Record.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * The name of the DNS SRV Record. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `record` blocks as defined below.
     */
    records?: pulumi.Input<pulumi.Input<inputs.privatedns.SRVRecordRecord>[]>;
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
 * The set of arguments for constructing a SRVRecord resource.
 */
export interface SRVRecordArgs {
    /**
     * The name of the DNS SRV Record. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `record` blocks as defined below.
     */
    records: pulumi.Input<pulumi.Input<inputs.privatedns.SRVRecordRecord>[]>;
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
