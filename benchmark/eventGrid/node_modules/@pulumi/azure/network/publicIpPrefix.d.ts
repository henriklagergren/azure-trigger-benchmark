import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Public IP Prefix.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePublicIpPrefix = new azure.network.PublicIpPrefix("examplePublicIpPrefix", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     prefixLength: 31,
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Public IP Prefixes can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/publicIpPrefix:PublicIpPrefix myPublicIpPrefix /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/publicIPPrefixes/myPublicIpPrefix1
 * ```
 */
export declare class PublicIpPrefix extends pulumi.CustomResource {
    /**
     * Get an existing PublicIpPrefix resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PublicIpPrefixState, opts?: pulumi.CustomResourceOptions): PublicIpPrefix;
    /**
     * Returns true if the given object is an instance of PublicIpPrefix.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PublicIpPrefix;
    /**
     * The availability zone to allocate the Public IP in. Possible values are `Zone-Redundant`, `1`, `2`, `3`, and `No-Zone`. Defaults to `Zone-Redundant`.
     */
    readonly availabilityZone: pulumi.Output<string>;
    /**
     * The IP address prefix value that was allocated.
     */
    readonly ipPrefix: pulumi.Output<string>;
    /**
     * The IP Version to use, `IPv6` or `IPv4`. Changing this forces a new resource to be created. Default is `IPv4`.
     */
    readonly ipVersion: pulumi.Output<string | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Public IP Prefix resource . Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the number of bits of the prefix. The value can be set between 0 (4,294,967,296 addresses) and 31 (2 addresses). Defaults to `28`(16 addresses). Changing this forces a new resource to be created.
     */
    readonly prefixLength: pulumi.Output<number | undefined>;
    /**
     * The name of the resource group in which to create the Public IP Prefix.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The SKU of the Public IP Prefix. Accepted values are `Standard`. Defaults to `Standard`. Changing this forces a new resource to be created.
     */
    readonly sku: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * @deprecated This property has been deprecated in favour of `availability_zone` due to a breaking behavioural change in Azure: https://azure.microsoft.com/en-us/updates/zone-behavior-change/
     */
    readonly zones: pulumi.Output<string>;
    /**
     * Create a PublicIpPrefix resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PublicIpPrefixArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering PublicIpPrefix resources.
 */
export interface PublicIpPrefixState {
    /**
     * The availability zone to allocate the Public IP in. Possible values are `Zone-Redundant`, `1`, `2`, `3`, and `No-Zone`. Defaults to `Zone-Redundant`.
     */
    availabilityZone?: pulumi.Input<string>;
    /**
     * The IP address prefix value that was allocated.
     */
    ipPrefix?: pulumi.Input<string>;
    /**
     * The IP Version to use, `IPv6` or `IPv4`. Changing this forces a new resource to be created. Default is `IPv4`.
     */
    ipVersion?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Public IP Prefix resource . Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the number of bits of the prefix. The value can be set between 0 (4,294,967,296 addresses) and 31 (2 addresses). Defaults to `28`(16 addresses). Changing this forces a new resource to be created.
     */
    prefixLength?: pulumi.Input<number>;
    /**
     * The name of the resource group in which to create the Public IP Prefix.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The SKU of the Public IP Prefix. Accepted values are `Standard`. Defaults to `Standard`. Changing this forces a new resource to be created.
     */
    sku?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * @deprecated This property has been deprecated in favour of `availability_zone` due to a breaking behavioural change in Azure: https://azure.microsoft.com/en-us/updates/zone-behavior-change/
     */
    zones?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a PublicIpPrefix resource.
 */
export interface PublicIpPrefixArgs {
    /**
     * The availability zone to allocate the Public IP in. Possible values are `Zone-Redundant`, `1`, `2`, `3`, and `No-Zone`. Defaults to `Zone-Redundant`.
     */
    availabilityZone?: pulumi.Input<string>;
    /**
     * The IP Version to use, `IPv6` or `IPv4`. Changing this forces a new resource to be created. Default is `IPv4`.
     */
    ipVersion?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Public IP Prefix resource . Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the number of bits of the prefix. The value can be set between 0 (4,294,967,296 addresses) and 31 (2 addresses). Defaults to `28`(16 addresses). Changing this forces a new resource to be created.
     */
    prefixLength?: pulumi.Input<number>;
    /**
     * The name of the resource group in which to create the Public IP Prefix.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of the Public IP Prefix. Accepted values are `Standard`. Defaults to `Standard`. Changing this forces a new resource to be created.
     */
    sku?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * @deprecated This property has been deprecated in favour of `availability_zone` due to a breaking behavioural change in Azure: https://azure.microsoft.com/en-us/updates/zone-behavior-change/
     */
    zones?: pulumi.Input<string>;
}
