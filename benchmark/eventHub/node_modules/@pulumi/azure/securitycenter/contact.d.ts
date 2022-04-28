import * as pulumi from "@pulumi/pulumi";
/**
 * Manages the subscription's Security Center Contact.
 *
 * > **NOTE:** Owner access permission is required.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.securitycenter.Contact("example", {
 *     alertNotifications: true,
 *     alertsToAdmins: true,
 *     email: "contact@example.com",
 *     phone: "+1-555-555-5555",
 * });
 * ```
 *
 * ## Import
 *
 * The contact can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:securitycenter/contact:Contact example /subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.Security/securityContacts/default1
 * ```
 */
export declare class Contact extends pulumi.CustomResource {
    /**
     * Get an existing Contact resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContactState, opts?: pulumi.CustomResourceOptions): Contact;
    /**
     * Returns true if the given object is an instance of Contact.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Contact;
    /**
     * Whether to send security alerts notifications to the security contact.
     */
    readonly alertNotifications: pulumi.Output<boolean>;
    /**
     * Whether to send security alerts notifications to subscription admins.
     */
    readonly alertsToAdmins: pulumi.Output<boolean>;
    /**
     * The email of the Security Center Contact.
     */
    readonly email: pulumi.Output<string>;
    /**
     * The phone number of the Security Center Contact.
     */
    readonly phone: pulumi.Output<string | undefined>;
    /**
     * Create a Contact resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContactArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Contact resources.
 */
export interface ContactState {
    /**
     * Whether to send security alerts notifications to the security contact.
     */
    alertNotifications?: pulumi.Input<boolean>;
    /**
     * Whether to send security alerts notifications to subscription admins.
     */
    alertsToAdmins?: pulumi.Input<boolean>;
    /**
     * The email of the Security Center Contact.
     */
    email?: pulumi.Input<string>;
    /**
     * The phone number of the Security Center Contact.
     */
    phone?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Contact resource.
 */
export interface ContactArgs {
    /**
     * Whether to send security alerts notifications to the security contact.
     */
    alertNotifications: pulumi.Input<boolean>;
    /**
     * Whether to send security alerts notifications to subscription admins.
     */
    alertsToAdmins: pulumi.Input<boolean>;
    /**
     * The email of the Security Center Contact.
     */
    email: pulumi.Input<string>;
    /**
     * The phone number of the Security Center Contact.
     */
    phone?: pulumi.Input<string>;
}
