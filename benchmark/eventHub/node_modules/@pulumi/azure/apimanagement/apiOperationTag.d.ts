import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a API Management API Operation Tag.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleApi = azure.apimanagement.getApi({
 *     name: "search-api",
 *     apiManagementName: "search-api-management",
 *     resourceGroupName: "search-service",
 *     revision: "2",
 * });
 * const exampleApiOperation = new azure.apimanagement.ApiOperation("exampleApiOperation", {
 *     operationId: "user-delete",
 *     apiName: exampleApi.then(exampleApi => exampleApi.name),
 *     apiManagementName: exampleApi.then(exampleApi => exampleApi.apiManagementName),
 *     resourceGroupName: exampleApi.then(exampleApi => exampleApi.resourceGroupName),
 *     displayName: "Delete User Operation",
 *     method: "DELETE",
 *     urlTemplate: "/users/{id}/delete",
 *     description: "This can only be done by the logged in user.",
 *     responses: [{
 *         statusCode: 200,
 *     }],
 * });
 * const exampleApiOperationTag = new azure.apimanagement.ApiOperationTag("exampleApiOperationTag", {apiOperationId: exampleApiOperation.id});
 * ```
 *
 * ## Import
 *
 * API Management API Operation Tags can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/apiOperationTag:ApiOperationTag example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ApiManagement/service/service1/apis/api1/operations/operation1/tags/tag1
 * ```
 */
export declare class ApiOperationTag extends pulumi.CustomResource {
    /**
     * Get an existing ApiOperationTag resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiOperationTagState, opts?: pulumi.CustomResourceOptions): ApiOperationTag;
    /**
     * Returns true if the given object is an instance of ApiOperationTag.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApiOperationTag;
    /**
     * The ID of the API Management API Operation. Changing this forces a new API Management API Operation Tag to be created.
     */
    readonly apiOperationId: pulumi.Output<string>;
    /**
     * The display name of the API Management API Operation Tag.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * The name which should be used for this API Management API Operation Tag. Changing this forces a new API Management API Operation Tag to be created. The name must be unique in the API Management Service.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Create a ApiOperationTag resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiOperationTagArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ApiOperationTag resources.
 */
export interface ApiOperationTagState {
    /**
     * The ID of the API Management API Operation. Changing this forces a new API Management API Operation Tag to be created.
     */
    apiOperationId?: pulumi.Input<string>;
    /**
     * The display name of the API Management API Operation Tag.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The name which should be used for this API Management API Operation Tag. Changing this forces a new API Management API Operation Tag to be created. The name must be unique in the API Management Service.
     */
    name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ApiOperationTag resource.
 */
export interface ApiOperationTagArgs {
    /**
     * The ID of the API Management API Operation. Changing this forces a new API Management API Operation Tag to be created.
     */
    apiOperationId: pulumi.Input<string>;
    /**
     * The display name of the API Management API Operation Tag.
     */
    displayName: pulumi.Input<string>;
    /**
     * The name which should be used for this API Management API Operation Tag. Changing this forces a new API Management API Operation Tag to be created. The name must be unique in the API Management Service.
     */
    name?: pulumi.Input<string>;
}
