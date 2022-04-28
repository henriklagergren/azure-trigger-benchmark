import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an API Management User Assignment to a Group.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleUser = azure.apimanagement.getUser({
 *     userId: "my-user",
 *     apiManagementName: "example-apim",
 *     resourceGroupName: "search-service",
 * });
 * const exampleGroupUser = new azure.apimanagement.GroupUser("exampleGroupUser", {
 *     userId: exampleUser.then(exampleUser => exampleUser.id),
 *     groupName: "example-group",
 *     resourceGroupName: exampleUser.then(exampleUser => exampleUser.resourceGroupName),
 *     apiManagementName: exampleUser.then(exampleUser => exampleUser.apiManagementName),
 * });
 * ```
 *
 * ## Import
 *
 * API Management Group Users can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/groupUser:GroupUser example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ApiManagement/service/service1/groups/groupId/users/user123
 * ```
 */
export declare class GroupUser extends pulumi.CustomResource {
    /**
     * Get an existing GroupUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupUserState, opts?: pulumi.CustomResourceOptions): GroupUser;
    /**
     * Returns true if the given object is an instance of GroupUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is GroupUser;
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * The Name of the API Management Group within the API Management Service. Changing this forces a new resource to be created.
     */
    readonly groupName: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The ID of the API Management User which should be assigned to this API Management Group. Changing this forces a new resource to be created.
     */
    readonly userId: pulumi.Output<string>;
    /**
     * Create a GroupUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupUserArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering GroupUser resources.
 */
export interface GroupUserState {
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * The Name of the API Management Group within the API Management Service. Changing this forces a new resource to be created.
     */
    groupName?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The ID of the API Management User which should be assigned to this API Management Group. Changing this forces a new resource to be created.
     */
    userId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a GroupUser resource.
 */
export interface GroupUserArgs {
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * The Name of the API Management Group within the API Management Service. Changing this forces a new resource to be created.
     */
    groupName: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of the API Management User which should be assigned to this API Management Group. Changing this forces a new resource to be created.
     */
    userId: pulumi.Input<string>;
}
