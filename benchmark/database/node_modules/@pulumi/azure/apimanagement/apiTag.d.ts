import * as pulumi from "@pulumi/pulumi";
/**
 * Manages the Assignment of an API Management API Tag to an API.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleService = azure.apimanagement.getServiceOutput({
 *     name: "example-apim",
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleApi = new azure.apimanagement.Api("exampleApi", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     apiManagementName: azurerm_api_management.example.name,
 *     revision: "1",
 * });
 * const exampleTag = new azure.apimanagement.Tag("exampleTag", {apiManagementId: exampleService.apply(exampleService => exampleService.id)});
 * const exampleApiTag = new azure.apimanagement.ApiTag("exampleApiTag", {apiId: exampleApi.id});
 * ```
 *
 * ## Import
 *
 * API Management API Tags can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/apiTag:ApiTag example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ApiManagement/service/service1/apis/api1/tags/tag1
 * ```
 */
export declare class ApiTag extends pulumi.CustomResource {
    /**
     * Get an existing ApiTag resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiTagState, opts?: pulumi.CustomResourceOptions): ApiTag;
    /**
     * Returns true if the given object is an instance of ApiTag.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApiTag;
    /**
     * The ID of the API Management API. Changing this forces a new API Management API Tag to be created.
     */
    readonly apiId: pulumi.Output<string>;
    /**
     * The name of the tag. It must be known in the API Management instance. Changing this forces a new API Management API Tag to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Create a ApiTag resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiTagArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ApiTag resources.
 */
export interface ApiTagState {
    /**
     * The ID of the API Management API. Changing this forces a new API Management API Tag to be created.
     */
    apiId?: pulumi.Input<string>;
    /**
     * The name of the tag. It must be known in the API Management instance. Changing this forces a new API Management API Tag to be created.
     */
    name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ApiTag resource.
 */
export interface ApiTagArgs {
    /**
     * The ID of the API Management API. Changing this forces a new API Management API Tag to be created.
     */
    apiId: pulumi.Input<string>;
    /**
     * The name of the tag. It must be known in the API Management instance. Changing this forces a new API Management API Tag to be created.
     */
    name?: pulumi.Input<string>;
}
