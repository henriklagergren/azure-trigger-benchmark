import * as pulumi from "@pulumi/pulumi";
/**
 * Allows accepting the Legal Terms for a Marketplace Image.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const barracuda = new azure.marketplace.Agreement("barracuda", {
 *     offer: "waf",
 *     plan: "hourly",
 *     publisher: "barracudanetworks",
 * });
 * ```
 *
 * ## Import
 *
 * Marketplace Agreement can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:marketplace/agreement:Agreement example /subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.MarketplaceOrdering/agreements/publisher1/offers/offer1/plans/plan1
 * ```
 */
export declare class Agreement extends pulumi.CustomResource {
    /**
     * Get an existing Agreement resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AgreementState, opts?: pulumi.CustomResourceOptions): Agreement;
    /**
     * Returns true if the given object is an instance of Agreement.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Agreement;
    readonly licenseTextLink: pulumi.Output<string>;
    /**
     * The Offer of the Marketplace Image. Changing this forces a new resource to be created.
     */
    readonly offer: pulumi.Output<string>;
    /**
     * The Plan of the Marketplace Image. Changing this forces a new resource to be created.
     */
    readonly plan: pulumi.Output<string>;
    readonly privacyPolicyLink: pulumi.Output<string>;
    /**
     * The Publisher of the Marketplace Image. Changing this forces a new resource to be created.
     */
    readonly publisher: pulumi.Output<string>;
    /**
     * Create a Agreement resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AgreementArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Agreement resources.
 */
export interface AgreementState {
    licenseTextLink?: pulumi.Input<string>;
    /**
     * The Offer of the Marketplace Image. Changing this forces a new resource to be created.
     */
    offer?: pulumi.Input<string>;
    /**
     * The Plan of the Marketplace Image. Changing this forces a new resource to be created.
     */
    plan?: pulumi.Input<string>;
    privacyPolicyLink?: pulumi.Input<string>;
    /**
     * The Publisher of the Marketplace Image. Changing this forces a new resource to be created.
     */
    publisher?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Agreement resource.
 */
export interface AgreementArgs {
    /**
     * The Offer of the Marketplace Image. Changing this forces a new resource to be created.
     */
    offer: pulumi.Input<string>;
    /**
     * The Plan of the Marketplace Image. Changing this forces a new resource to be created.
     */
    plan: pulumi.Input<string>;
    /**
     * The Publisher of the Marketplace Image. Changing this forces a new resource to be created.
     */
    publisher: pulumi.Input<string>;
}
