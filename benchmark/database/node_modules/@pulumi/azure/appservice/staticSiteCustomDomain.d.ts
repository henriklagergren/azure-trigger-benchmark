import * as pulumi from "@pulumi/pulumi";
/**
 * ## Example Usage
 * ### CNAME validation
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleStaticSite = new azure.appservice.StaticSite("exampleStaticSite", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * const exampleCNameRecord = new azure.dns.CNameRecord("exampleCNameRecord", {
 *     zoneName: "contoso.com",
 *     resourceGroupName: exampleResourceGroup.name,
 *     ttl: 300,
 *     record: exampleStaticSite.defaultHostName,
 * });
 * const exampleStaticSiteCustomDomain = new azure.appservice.StaticSiteCustomDomain("exampleStaticSiteCustomDomain", {
 *     staticSiteId: exampleStaticSite.id,
 *     domainName: pulumi.interpolate`${exampleCNameRecord.name}.${exampleCNameRecord.zoneName}`,
 *     validationType: "cname-delegation",
 * });
 * ```
 * ### TXT validation
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleStaticSite = new azure.appservice.StaticSite("exampleStaticSite", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * const exampleStaticSiteCustomDomain = new azure.appservice.StaticSiteCustomDomain("exampleStaticSiteCustomDomain", {
 *     staticSiteId: exampleStaticSite.id,
 *     domainName: `my-domain.${azurerm_dns_cname_record.example.zone_name}`,
 *     validationType: "dns-txt-token",
 * });
 * const exampleTxtRecord = new azure.dns.TxtRecord("exampleTxtRecord", {
 *     zoneName: "contoso.com",
 *     resourceGroupName: exampleResourceGroup.name,
 *     ttl: 300,
 *     records: [{
 *         value: exampleStaticSiteCustomDomain.validationToken,
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Static Site Custom Domains can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appservice/staticSiteCustomDomain:StaticSiteCustomDomain example /subscriptions/12345678-1234-9876-4563-123456789012/resourceGroups/group1/providers/Microsoft.Web/staticSites/my-static-site1/customDomains/name.contoso.com
 * ```
 */
export declare class StaticSiteCustomDomain extends pulumi.CustomResource {
    /**
     * Get an existing StaticSiteCustomDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StaticSiteCustomDomainState, opts?: pulumi.CustomResourceOptions): StaticSiteCustomDomain;
    /**
     * Returns true if the given object is an instance of StaticSiteCustomDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StaticSiteCustomDomain;
    /**
     * The Domain Name which should be associated with this Static Site. Changing this forces a new Static Site Custom Domain to be created.
     */
    readonly domainName: pulumi.Output<string>;
    /**
     * The ID of the Static Site. Changing this forces a new Static Site Custom Domain to be created.
     */
    readonly staticSiteId: pulumi.Output<string>;
    /**
     * Token to be used with `dns-txt-token` validation.
     */
    readonly validationToken: pulumi.Output<string>;
    /**
     * One of `cname-delegation` or `dns-txt-token`. Changing this forces a new Static Site Custom Domain to be created.
     */
    readonly validationType: pulumi.Output<string>;
    /**
     * Create a StaticSiteCustomDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StaticSiteCustomDomainArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering StaticSiteCustomDomain resources.
 */
export interface StaticSiteCustomDomainState {
    /**
     * The Domain Name which should be associated with this Static Site. Changing this forces a new Static Site Custom Domain to be created.
     */
    domainName?: pulumi.Input<string>;
    /**
     * The ID of the Static Site. Changing this forces a new Static Site Custom Domain to be created.
     */
    staticSiteId?: pulumi.Input<string>;
    /**
     * Token to be used with `dns-txt-token` validation.
     */
    validationToken?: pulumi.Input<string>;
    /**
     * One of `cname-delegation` or `dns-txt-token`. Changing this forces a new Static Site Custom Domain to be created.
     */
    validationType?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a StaticSiteCustomDomain resource.
 */
export interface StaticSiteCustomDomainArgs {
    /**
     * The Domain Name which should be associated with this Static Site. Changing this forces a new Static Site Custom Domain to be created.
     */
    domainName: pulumi.Input<string>;
    /**
     * The ID of the Static Site. Changing this forces a new Static Site Custom Domain to be created.
     */
    staticSiteId: pulumi.Input<string>;
    /**
     * One of `cname-delegation` or `dns-txt-token`. Changing this forces a new Static Site Custom Domain to be created.
     */
    validationType: pulumi.Input<string>;
}
