import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Management Group Subscription Association.
 *
 * !> **Note:** When using this resource, configuring `subscriptionIds` on the `azure.management.Group` resource is not supported.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleGroup = azure.management.getGroup({
 *     name: "exampleManagementGroup",
 * });
 * const exampleSubscription = azure.core.getSubscription({
 *     subscriptionId: "12345678-1234-1234-1234-123456789012",
 * });
 * const exampleGroupSubscriptionAssociation = new azure.management.GroupSubscriptionAssociation("exampleGroupSubscriptionAssociation", {
 *     managementGroupId: exampleGroup.then(exampleGroup => exampleGroup.id),
 *     subscriptionId: exampleSubscription.then(exampleSubscription => exampleSubscription.id),
 * });
 * ```
 *
 * ## Import
 *
 * Managements can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:management/groupSubscriptionAssociation:GroupSubscriptionAssociation example /managementGroup/MyManagementGroup/subscription/12345678-1234-1234-1234-123456789012
 * ```
 */
export declare class GroupSubscriptionAssociation extends pulumi.CustomResource {
    /**
     * Get an existing GroupSubscriptionAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupSubscriptionAssociationState, opts?: pulumi.CustomResourceOptions): GroupSubscriptionAssociation;
    /**
     * Returns true if the given object is an instance of GroupSubscriptionAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is GroupSubscriptionAssociation;
    /**
     * The ID of the Management Group to associate the Subscription with. Changing this forces a new Management to be created.
     */
    readonly managementGroupId: pulumi.Output<string>;
    /**
     * The ID of the Subscription to be associated with the Management Group. Changing this forces a new Management to be created.
     */
    readonly subscriptionId: pulumi.Output<string>;
    /**
     * Create a GroupSubscriptionAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupSubscriptionAssociationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering GroupSubscriptionAssociation resources.
 */
export interface GroupSubscriptionAssociationState {
    /**
     * The ID of the Management Group to associate the Subscription with. Changing this forces a new Management to be created.
     */
    managementGroupId?: pulumi.Input<string>;
    /**
     * The ID of the Subscription to be associated with the Management Group. Changing this forces a new Management to be created.
     */
    subscriptionId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a GroupSubscriptionAssociation resource.
 */
export interface GroupSubscriptionAssociationArgs {
    /**
     * The ID of the Management Group to associate the Subscription with. Changing this forces a new Management to be created.
     */
    managementGroupId: pulumi.Input<string>;
    /**
     * The ID of the Subscription to be associated with the Management Group. Changing this forces a new Management to be created.
     */
    subscriptionId: pulumi.Input<string>;
}
