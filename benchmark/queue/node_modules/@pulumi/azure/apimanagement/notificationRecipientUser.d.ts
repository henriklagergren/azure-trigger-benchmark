import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a API Management Notification Recipient User.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleService = new azure.apimanagement.Service("exampleService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     publisherName: "My Company",
 *     publisherEmail: "company@terraform.io",
 *     skuName: "Developer_1",
 * });
 * const exampleUser = new azure.apimanagement.User("exampleUser", {
 *     userId: "123",
 *     apiManagementName: exampleService.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     firstName: "Example",
 *     lastName: "User",
 *     email: "foo@bar.com",
 *     state: "active",
 * });
 * const exampleNotificationRecipientUser = new azure.apimanagement.NotificationRecipientUser("exampleNotificationRecipientUser", {
 *     apiManagementId: exampleService.id,
 *     notificationType: "AccountClosedPublisher",
 *     userId: exampleUser.userId,
 * });
 * ```
 *
 * ## Import
 *
 * API Management Notification Recipient Users can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/notificationRecipientUser:NotificationRecipientUser example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ApiManagement/service/service1/notifications/notificationName1/recipientUsers/userid1
 * ```
 */
export declare class NotificationRecipientUser extends pulumi.CustomResource {
    /**
     * Get an existing NotificationRecipientUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationRecipientUserState, opts?: pulumi.CustomResourceOptions): NotificationRecipientUser;
    /**
     * Returns true if the given object is an instance of NotificationRecipientUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NotificationRecipientUser;
    /**
     * The ID of the API Management Service from which to create this Notification Recipient User. Changing this forces a new API Management Notification Recipient User to be created.
     */
    readonly apiManagementId: pulumi.Output<string>;
    /**
     * The Notification Name to be received. Changing this forces a new API Management Notification Recipient User to be created. Possible values are `AccountClosedPublisher`, `BCC`, `NewApplicationNotificationMessage`, `NewIssuePublisherNotificationMessage`, `PurchasePublisherNotificationMessage`, `QuotaLimitApproachingPublisherNotificationMessage`, and `RequestPublisherNotificationMessage`.
     */
    readonly notificationType: pulumi.Output<string>;
    /**
     * The recipient user ID. Changing this forces a new API Management Notification Recipient User to be created.
     */
    readonly userId: pulumi.Output<string>;
    /**
     * Create a NotificationRecipientUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationRecipientUserArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NotificationRecipientUser resources.
 */
export interface NotificationRecipientUserState {
    /**
     * The ID of the API Management Service from which to create this Notification Recipient User. Changing this forces a new API Management Notification Recipient User to be created.
     */
    apiManagementId?: pulumi.Input<string>;
    /**
     * The Notification Name to be received. Changing this forces a new API Management Notification Recipient User to be created. Possible values are `AccountClosedPublisher`, `BCC`, `NewApplicationNotificationMessage`, `NewIssuePublisherNotificationMessage`, `PurchasePublisherNotificationMessage`, `QuotaLimitApproachingPublisherNotificationMessage`, and `RequestPublisherNotificationMessage`.
     */
    notificationType?: pulumi.Input<string>;
    /**
     * The recipient user ID. Changing this forces a new API Management Notification Recipient User to be created.
     */
    userId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a NotificationRecipientUser resource.
 */
export interface NotificationRecipientUserArgs {
    /**
     * The ID of the API Management Service from which to create this Notification Recipient User. Changing this forces a new API Management Notification Recipient User to be created.
     */
    apiManagementId: pulumi.Input<string>;
    /**
     * The Notification Name to be received. Changing this forces a new API Management Notification Recipient User to be created. Possible values are `AccountClosedPublisher`, `BCC`, `NewApplicationNotificationMessage`, `NewIssuePublisherNotificationMessage`, `PurchasePublisherNotificationMessage`, `QuotaLimitApproachingPublisherNotificationMessage`, and `RequestPublisherNotificationMessage`.
     */
    notificationType: pulumi.Input<string>;
    /**
     * The recipient user ID. Changing this forces a new API Management Notification Recipient User to be created.
     */
    userId: pulumi.Input<string>;
}
