import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an API Management Group.
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
 *     publisherName: "pub1",
 *     publisherEmail: "pub1@email.com",
 *     skuName: "Developer_1",
 * });
 * const exampleGroup = new azure.apimanagement.Group("exampleGroup", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     apiManagementName: exampleService.name,
 *     displayName: "Example Group",
 *     description: "This is an example API management group.",
 * });
 * ```
 *
 * ## Import
 *
 * API Management Groups can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/group:Group example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example-resources/providers/Microsoft.ApiManagement/service/example-apim/groups/example-apimg
 * ```
 */
export declare class Group extends pulumi.CustomResource {
    /**
     * Get an existing Group resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupState, opts?: pulumi.CustomResourceOptions): Group;
    /**
     * Returns true if the given object is an instance of Group.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Group;
    /**
     * The name of the API Management Service in which the API Management Group should exist. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * The description of this API Management Group.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The display name of this API Management Group.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * The identifier of the external Group. For example, an Azure Active Directory group `aad://<tenant>.onmicrosoft.com/groups/<group object id>`.
     */
    readonly externalId: pulumi.Output<string | undefined>;
    /**
     * The name of the API Management Group. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the API Management Group should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The type of this API Management Group. Possible values are `custom` and `external`. Default is `custom`.
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Create a Group resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Group resources.
 */
export interface GroupState {
    /**
     * The name of the API Management Service in which the API Management Group should exist. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * The description of this API Management Group.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of this API Management Group.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The identifier of the external Group. For example, an Azure Active Directory group `aad://<tenant>.onmicrosoft.com/groups/<group object id>`.
     */
    externalId?: pulumi.Input<string>;
    /**
     * The name of the API Management Group. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Group should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The type of this API Management Group. Possible values are `custom` and `external`. Default is `custom`.
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Group resource.
 */
export interface GroupArgs {
    /**
     * The name of the API Management Service in which the API Management Group should exist. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * The description of this API Management Group.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of this API Management Group.
     */
    displayName: pulumi.Input<string>;
    /**
     * The identifier of the external Group. For example, an Azure Active Directory group `aad://<tenant>.onmicrosoft.com/groups/<group object id>`.
     */
    externalId?: pulumi.Input<string>;
    /**
     * The name of the API Management Group. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Group should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The type of this API Management Group. Possible values are `custom` and `external`. Default is `custom`.
     */
    type?: pulumi.Input<string>;
}
