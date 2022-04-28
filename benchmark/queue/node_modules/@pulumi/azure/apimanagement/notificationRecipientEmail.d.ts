import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a API Management Notification Recipient Email.
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
 * const exampleNotificationRecipientEmail = new azure.apimanagement.NotificationRecipientEmail("exampleNotificationRecipientEmail", {
 *     apiManagementId: exampleService.id,
 *     notificationType: "AccountClosedPublisher",
 *     email: "foo@bar.com",
 * });
 * ```
 *
 * ## Import
 *
 * API Management Notification Recipient Emails can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/notificationRecipientEmail:NotificationRecipientEmail example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ApiManagement/service/service1/notifications/notificationName1/recipientEmails/email1
 * ```
 */
export declare class NotificationRecipientEmail extends pulumi.CustomResource {
    /**
     * Get an existing NotificationRecipientEmail resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotificationRecipientEmailState, opts?: pulumi.CustomResourceOptions): NotificationRecipientEmail;
    /**
     * Returns true if the given object is an instance of NotificationRecipientEmail.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NotificationRecipientEmail;
    /**
     * The ID of the API Management Service from which to create this Notification Recipient Email. Changing this forces a new API Management Notification Recipient Email to be created.
     */
    readonly apiManagementId: pulumi.Output<string>;
    /**
     * The recipient email address. Changing this forces a new API Management Notification Recipient Email to be created.
     */
    readonly email: pulumi.Output<string>;
    /**
     * The Notification Name to be received. Changing this forces a new API Management Notification Recipient Email to be created. Possible values are `AccountClosedPublisher`, `BCC`, `NewApplicationNotificationMessage`, `NewIssuePublisherNotificationMessage`, `PurchasePublisherNotificationMessage`, `QuotaLimitApproachingPublisherNotificationMessage`, and `RequestPublisherNotificationMessage`.
     */
    readonly notificationType: pulumi.Output<string>;
    /**
     * Create a NotificationRecipientEmail resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotificationRecipientEmailArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NotificationRecipientEmail resources.
 */
export interface NotificationRecipientEmailState {
    /**
     * The ID of the API Management Service from which to create this Notification Recipient Email. Changing this forces a new API Management Notification Recipient Email to be created.
     */
    apiManagementId?: pulumi.Input<string>;
    /**
     * The recipient email address. Changing this forces a new API Management Notification Recipient Email to be created.
     */
    email?: pulumi.Input<string>;
    /**
     * The Notification Name to be received. Changing this forces a new API Management Notification Recipient Email to be created. Possible values are `AccountClosedPublisher`, `BCC`, `NewApplicationNotificationMessage`, `NewIssuePublisherNotificationMessage`, `PurchasePublisherNotificationMessage`, `QuotaLimitApproachingPublisherNotificationMessage`, and `RequestPublisherNotificationMessage`.
     */
    notificationType?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a NotificationRecipientEmail resource.
 */
export interface NotificationRecipientEmailArgs {
    /**
     * The ID of the API Management Service from which to create this Notification Recipient Email. Changing this forces a new API Management Notification Recipient Email to be created.
     */
    apiManagementId: pulumi.Input<string>;
    /**
     * The recipient email address. Changing this forces a new API Management Notification Recipient Email to be created.
     */
    email: pulumi.Input<string>;
    /**
     * The Notification Name to be received. Changing this forces a new API Management Notification Recipient Email to be created. Possible values are `AccountClosedPublisher`, `BCC`, `NewApplicationNotificationMessage`, `NewIssuePublisherNotificationMessage`, `PurchasePublisherNotificationMessage`, `QuotaLimitApproachingPublisherNotificationMessage`, and `RequestPublisherNotificationMessage`.
     */
    notificationType: pulumi.Input<string>;
}
