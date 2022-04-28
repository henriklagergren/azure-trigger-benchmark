import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a API Management Email Template.
 *
 * ## Import
 *
 * API Management Email Templates can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/emailTemplate:EmailTemplate example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ApiManagement/service/instance1/templates/template1
 * ```
 */
export declare class EmailTemplate extends pulumi.CustomResource {
    /**
     * Get an existing EmailTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EmailTemplateState, opts?: pulumi.CustomResourceOptions): EmailTemplate;
    /**
     * Returns true if the given object is an instance of EmailTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EmailTemplate;
    /**
     * The name of the API Management Service in which the Email Template should exist. Changing this forces a new API Management Email Template to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * The body of the Email. Its format has to be a well-formed HTML document.
     */
    readonly body: pulumi.Output<string>;
    /**
     * The description of the Email Template.
     */
    readonly description: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the API Management Email Template should exist. Changing this forces a new API Management Email Template to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The subject of the Email.
     */
    readonly subject: pulumi.Output<string>;
    /**
     * The name of the Email Template. Possible values are `AccountClosedDeveloper`, `ApplicationApprovedNotificationMessage`, `ConfirmSignUpIdentityDefault`, `EmailChangeIdentityDefault`, `InviteUserNotificationMessage`, `NewCommentNotificationMessage`, `NewDeveloperNotificationMessage`, `NewIssueNotificationMessage`, `PasswordResetByAdminNotificationMessage`, `PasswordResetIdentityDefault`, `PurchaseDeveloperNotificationMessage`, `QuotaLimitApproachingDeveloperNotificationMessage`, `RejectDeveloperNotificationMessage`, `RequestDeveloperNotificationMessage`. Changing this forces a new API Management Email Template to be created.
     */
    readonly templateName: pulumi.Output<string>;
    /**
     * The title of the Email Template.
     */
    readonly title: pulumi.Output<string>;
    /**
     * Create a EmailTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EmailTemplateArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering EmailTemplate resources.
 */
export interface EmailTemplateState {
    /**
     * The name of the API Management Service in which the Email Template should exist. Changing this forces a new API Management Email Template to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * The body of the Email. Its format has to be a well-formed HTML document.
     */
    body?: pulumi.Input<string>;
    /**
     * The description of the Email Template.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the API Management Email Template should exist. Changing this forces a new API Management Email Template to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The subject of the Email.
     */
    subject?: pulumi.Input<string>;
    /**
     * The name of the Email Template. Possible values are `AccountClosedDeveloper`, `ApplicationApprovedNotificationMessage`, `ConfirmSignUpIdentityDefault`, `EmailChangeIdentityDefault`, `InviteUserNotificationMessage`, `NewCommentNotificationMessage`, `NewDeveloperNotificationMessage`, `NewIssueNotificationMessage`, `PasswordResetByAdminNotificationMessage`, `PasswordResetIdentityDefault`, `PurchaseDeveloperNotificationMessage`, `QuotaLimitApproachingDeveloperNotificationMessage`, `RejectDeveloperNotificationMessage`, `RequestDeveloperNotificationMessage`. Changing this forces a new API Management Email Template to be created.
     */
    templateName?: pulumi.Input<string>;
    /**
     * The title of the Email Template.
     */
    title?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a EmailTemplate resource.
 */
export interface EmailTemplateArgs {
    /**
     * The name of the API Management Service in which the Email Template should exist. Changing this forces a new API Management Email Template to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * The body of the Email. Its format has to be a well-formed HTML document.
     */
    body: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the API Management Email Template should exist. Changing this forces a new API Management Email Template to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The subject of the Email.
     */
    subject: pulumi.Input<string>;
    /**
     * The name of the Email Template. Possible values are `AccountClosedDeveloper`, `ApplicationApprovedNotificationMessage`, `ConfirmSignUpIdentityDefault`, `EmailChangeIdentityDefault`, `InviteUserNotificationMessage`, `NewCommentNotificationMessage`, `NewDeveloperNotificationMessage`, `NewIssueNotificationMessage`, `PasswordResetByAdminNotificationMessage`, `PasswordResetIdentityDefault`, `PurchaseDeveloperNotificationMessage`, `QuotaLimitApproachingDeveloperNotificationMessage`, `RejectDeveloperNotificationMessage`, `RequestDeveloperNotificationMessage`. Changing this forces a new API Management Email Template to be created.
     */
    templateName: pulumi.Input<string>;
}
