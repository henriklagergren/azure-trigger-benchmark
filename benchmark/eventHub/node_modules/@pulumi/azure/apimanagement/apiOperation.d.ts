import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an API Operation within an API Management Service.
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
 * ```
 *
 * ## Import
 *
 * API Management API Operation's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/apiOperation:ApiOperation example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.ApiManagement/service/instance1/apis/api1/operations/operation1
 * ```
 */
export declare class ApiOperation extends pulumi.CustomResource {
    /**
     * Get an existing ApiOperation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiOperationState, opts?: pulumi.CustomResourceOptions): ApiOperation;
    /**
     * Returns true if the given object is an instance of ApiOperation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApiOperation;
    /**
     * The Name of the API Management Service where the API exists. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * The name of the API within the API Management Service where this API Operation should be created. Changing this forces a new resource to be created.
     */
    readonly apiName: pulumi.Output<string>;
    /**
     * A description for this API Operation, which may include HTML formatting tags.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The Display Name for this API Management Operation.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * The HTTP Method used for this API Management Operation, like `GET`, `DELETE`, `PUT` or `POST` - but not limited to these values.
     */
    readonly method: pulumi.Output<string>;
    /**
     * A unique identifier for this API Operation. Changing this forces a new resource to be created.
     */
    readonly operationId: pulumi.Output<string>;
    /**
     * A `request` block as defined below.
     */
    readonly request: pulumi.Output<outputs.apimanagement.ApiOperationRequest>;
    /**
     * The Name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * One or more `response` blocks as defined below.
     */
    readonly responses: pulumi.Output<outputs.apimanagement.ApiOperationResponse[] | undefined>;
    /**
     * One or more `templateParameter` blocks as defined below.
     */
    readonly templateParameters: pulumi.Output<outputs.apimanagement.ApiOperationTemplateParameter[] | undefined>;
    /**
     * The relative URL Template identifying the target resource for this operation, which may include parameters.
     */
    readonly urlTemplate: pulumi.Output<string>;
    /**
     * Create a ApiOperation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiOperationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ApiOperation resources.
 */
export interface ApiOperationState {
    /**
     * The Name of the API Management Service where the API exists. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * The name of the API within the API Management Service where this API Operation should be created. Changing this forces a new resource to be created.
     */
    apiName?: pulumi.Input<string>;
    /**
     * A description for this API Operation, which may include HTML formatting tags.
     */
    description?: pulumi.Input<string>;
    /**
     * The Display Name for this API Management Operation.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The HTTP Method used for this API Management Operation, like `GET`, `DELETE`, `PUT` or `POST` - but not limited to these values.
     */
    method?: pulumi.Input<string>;
    /**
     * A unique identifier for this API Operation. Changing this forces a new resource to be created.
     */
    operationId?: pulumi.Input<string>;
    /**
     * A `request` block as defined below.
     */
    request?: pulumi.Input<inputs.apimanagement.ApiOperationRequest>;
    /**
     * The Name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * One or more `response` blocks as defined below.
     */
    responses?: pulumi.Input<pulumi.Input<inputs.apimanagement.ApiOperationResponse>[]>;
    /**
     * One or more `templateParameter` blocks as defined below.
     */
    templateParameters?: pulumi.Input<pulumi.Input<inputs.apimanagement.ApiOperationTemplateParameter>[]>;
    /**
     * The relative URL Template identifying the target resource for this operation, which may include parameters.
     */
    urlTemplate?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ApiOperation resource.
 */
export interface ApiOperationArgs {
    /**
     * The Name of the API Management Service where the API exists. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * The name of the API within the API Management Service where this API Operation should be created. Changing this forces a new resource to be created.
     */
    apiName: pulumi.Input<string>;
    /**
     * A description for this API Operation, which may include HTML formatting tags.
     */
    description?: pulumi.Input<string>;
    /**
     * The Display Name for this API Management Operation.
     */
    displayName: pulumi.Input<string>;
    /**
     * The HTTP Method used for this API Management Operation, like `GET`, `DELETE`, `PUT` or `POST` - but not limited to these values.
     */
    method: pulumi.Input<string>;
    /**
     * A unique identifier for this API Operation. Changing this forces a new resource to be created.
     */
    operationId: pulumi.Input<string>;
    /**
     * A `request` block as defined below.
     */
    request?: pulumi.Input<inputs.apimanagement.ApiOperationRequest>;
    /**
     * The Name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * One or more `response` blocks as defined below.
     */
    responses?: pulumi.Input<pulumi.Input<inputs.apimanagement.ApiOperationResponse>[]>;
    /**
     * One or more `templateParameter` blocks as defined below.
     */
    templateParameters?: pulumi.Input<pulumi.Input<inputs.apimanagement.ApiOperationTemplateParameter>[]>;
    /**
     * The relative URL Template identifying the target resource for this operation, which may include parameters.
     */
    urlTemplate: pulumi.Input<string>;
}
