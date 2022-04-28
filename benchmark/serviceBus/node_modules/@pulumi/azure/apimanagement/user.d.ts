import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an API Management User.
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
 *     publisherEmail: "company@exmaple.com",
 *     skuName: "Developer_1",
 * });
 * const exampleUser = new azure.apimanagement.User("exampleUser", {
 *     userId: "5931a75ae4bbd512288c680b",
 *     apiManagementName: exampleService.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     firstName: "Example",
 *     lastName: "User",
 *     email: "user@example.com",
 *     state: "active",
 * });
 * ```
 *
 * ## Import
 *
 * API Management Users can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/user:User example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.ApiManagement/service/instance1/users/abc123
 * ```
 */
export declare class User extends pulumi.CustomResource {
    /**
     * Get an existing User resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserState, opts?: pulumi.CustomResourceOptions): User;
    /**
     * Returns true if the given object is an instance of User.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is User;
    /**
     * The name of the API Management Service in which the User should be created. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * The kind of confirmation email which will be sent to this user. Possible values are `invite` and `signup`. Changing this forces a new resource to be created.
     */
    readonly confirmation: pulumi.Output<string | undefined>;
    /**
     * The email address associated with this user.
     */
    readonly email: pulumi.Output<string>;
    /**
     * The first name for this user.
     */
    readonly firstName: pulumi.Output<string>;
    /**
     * The last name for this user.
     */
    readonly lastName: pulumi.Output<string>;
    /**
     * A note about this user.
     */
    readonly note: pulumi.Output<string | undefined>;
    /**
     * The password associated with this user.
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The state of this user. Possible values are `active`, `blocked` and `pending`.
     */
    readonly state: pulumi.Output<string>;
    /**
     * The Identifier for this User, which must be unique within the API Management Service. Changing this forces a new resource to be created.
     */
    readonly userId: pulumi.Output<string>;
    /**
     * Create a User resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering User resources.
 */
export interface UserState {
    /**
     * The name of the API Management Service in which the User should be created. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * The kind of confirmation email which will be sent to this user. Possible values are `invite` and `signup`. Changing this forces a new resource to be created.
     */
    confirmation?: pulumi.Input<string>;
    /**
     * The email address associated with this user.
     */
    email?: pulumi.Input<string>;
    /**
     * The first name for this user.
     */
    firstName?: pulumi.Input<string>;
    /**
     * The last name for this user.
     */
    lastName?: pulumi.Input<string>;
    /**
     * A note about this user.
     */
    note?: pulumi.Input<string>;
    /**
     * The password associated with this user.
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The state of this user. Possible values are `active`, `blocked` and `pending`.
     */
    state?: pulumi.Input<string>;
    /**
     * The Identifier for this User, which must be unique within the API Management Service. Changing this forces a new resource to be created.
     */
    userId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a User resource.
 */
export interface UserArgs {
    /**
     * The name of the API Management Service in which the User should be created. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * The kind of confirmation email which will be sent to this user. Possible values are `invite` and `signup`. Changing this forces a new resource to be created.
     */
    confirmation?: pulumi.Input<string>;
    /**
     * The email address associated with this user.
     */
    email: pulumi.Input<string>;
    /**
     * The first name for this user.
     */
    firstName: pulumi.Input<string>;
    /**
     * The last name for this user.
     */
    lastName: pulumi.Input<string>;
    /**
     * A note about this user.
     */
    note?: pulumi.Input<string>;
    /**
     * The password associated with this user.
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The state of this user. Possible values are `active`, `blocked` and `pending`.
     */
    state?: pulumi.Input<string>;
    /**
     * The Identifier for this User, which must be unique within the API Management Service. Changing this forces a new resource to be created.
     */
    userId: pulumi.Input<string>;
}
