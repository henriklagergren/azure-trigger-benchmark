import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Public IP Address.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePublicIp = new azure.network.PublicIp("examplePublicIp", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     allocationMethod: "Static",
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Public IPs can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/publicIp:PublicIp myPublicIp /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/publicIPAddresses/myPublicIpAddress1
 * ```
 */
export declare class PublicIp extends pulumi.CustomResource {
    /**
     * Get an existing PublicIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PublicIpState, opts?: pulumi.CustomResourceOptions): PublicIp;
    /**
     * Returns true if the given object is an instance of PublicIp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PublicIp;
    /**
     * Defines the allocation method for this IP address. Possible values are `Static` or `Dynamic`.
     */
    readonly allocationMethod: pulumi.Output<string>;
    /**
     * The availability zone to allocate the Public IP in. Possible values are `Zone-Redundant`, `1`, `2`, `3`, and `No-Zone`. Defaults to `Zone-Redundant`.
     */
    readonly availabilityZone: pulumi.Output<string>;
    /**
     * Label for the Domain Name. Will be used to make up the FQDN.  If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
     */
    readonly domainNameLabel: pulumi.Output<string | undefined>;
    /**
     * Fully qualified domain name of the A DNS record associated with the public IP. `domainNameLabel` must be specified to get the `fqdn`. This is the concatenation of the `domainNameLabel` and the regionalized DNS zone
     */
    readonly fqdn: pulumi.Output<string>;
    /**
     * Specifies the timeout for the TCP idle connection. The value can be set between 4 and 30 minutes.
     */
    readonly idleTimeoutInMinutes: pulumi.Output<number | undefined>;
    /**
     * The IP address value that was allocated.
     */
    readonly ipAddress: pulumi.Output<string>;
    /**
     * A mapping of IP tags to assign to the public IP.
     */
    readonly ipTags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The IP Version to use, IPv6 or IPv4.
     */
    readonly ipVersion: pulumi.Output<string | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Public IP resource . Changing this forces a
     * new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * If specified then public IP address allocated will be provided from the public IP prefix resource.
     */
    readonly publicIpPrefixId: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group in which to
     * create the public ip.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.
     */
    readonly reverseFqdn: pulumi.Output<string | undefined>;
    /**
     * The SKU of the Public IP. Accepted values are `Basic` and `Standard`. Defaults to `Basic`.
     */
    readonly sku: pulumi.Output<string | undefined>;
    /**
     * The SKU Tier that should be used for the Public IP. Possible values are `Regional` and `Global`. Defaults to `Regional`.
     */
    readonly skuTier: pulumi.Output<string | undefined>;
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
     * Create a PublicIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PublicIpArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering PublicIp resources.
 */
export interface PublicIpState {
    /**
     * Defines the allocation method for this IP address. Possible values are `Static` or `Dynamic`.
     */
    allocationMethod?: pulumi.Input<string>;
    /**
     * The availability zone to allocate the Public IP in. Possible values are `Zone-Redundant`, `1`, `2`, `3`, and `No-Zone`. Defaults to `Zone-Redundant`.
     */
    availabilityZone?: pulumi.Input<string>;
    /**
     * Label for the Domain Name. Will be used to make up the FQDN.  If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
     */
    domainNameLabel?: pulumi.Input<string>;
    /**
     * Fully qualified domain name of the A DNS record associated with the public IP. `domainNameLabel` must be specified to get the `fqdn`. This is the concatenation of the `domainNameLabel` and the regionalized DNS zone
     */
    fqdn?: pulumi.Input<string>;
    /**
     * Specifies the timeout for the TCP idle connection. The value can be set between 4 and 30 minutes.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * The IP address value that was allocated.
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * A mapping of IP tags to assign to the public IP.
     */
    ipTags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The IP Version to use, IPv6 or IPv4.
     */
    ipVersion?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Public IP resource . Changing this forces a
     * new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * If specified then public IP address allocated will be provided from the public IP prefix resource.
     */
    publicIpPrefixId?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the public ip.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.
     */
    reverseFqdn?: pulumi.Input<string>;
    /**
     * The SKU of the Public IP. Accepted values are `Basic` and `Standard`. Defaults to `Basic`.
     */
    sku?: pulumi.Input<string>;
    /**
     * The SKU Tier that should be used for the Public IP. Possible values are `Regional` and `Global`. Defaults to `Regional`.
     */
    skuTier?: pulumi.Input<string>;
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
 * The set of arguments for constructing a PublicIp resource.
 */
export interface PublicIpArgs {
    /**
     * Defines the allocation method for this IP address. Possible values are `Static` or `Dynamic`.
     */
    allocationMethod: pulumi.Input<string>;
    /**
     * The availability zone to allocate the Public IP in. Possible values are `Zone-Redundant`, `1`, `2`, `3`, and `No-Zone`. Defaults to `Zone-Redundant`.
     */
    availabilityZone?: pulumi.Input<string>;
    /**
     * Label for the Domain Name. Will be used to make up the FQDN.  If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
     */
    domainNameLabel?: pulumi.Input<string>;
    /**
     * Specifies the timeout for the TCP idle connection. The value can be set between 4 and 30 minutes.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * A mapping of IP tags to assign to the public IP.
     */
    ipTags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The IP Version to use, IPv6 or IPv4.
     */
    ipVersion?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Public IP resource . Changing this forces a
     * new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * If specified then public IP address allocated will be provided from the public IP prefix resource.
     */
    publicIpPrefixId?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to
     * create the public ip.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.
     */
    reverseFqdn?: pulumi.Input<string>;
    /**
     * The SKU of the Public IP. Accepted values are `Basic` and `Standard`. Defaults to `Basic`.
     */
    sku?: pulumi.Input<string>;
    /**
     * The SKU Tier that should be used for the Public IP. Possible values are `Regional` and `Global`. Defaults to `Regional`.
     */
    skuTier?: pulumi.Input<string>;
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
