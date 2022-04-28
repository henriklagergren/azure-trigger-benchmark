import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a API Management Gateway API.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleService = azure.apimanagement.getService({
 *     name: "example-api",
 *     resourceGroupName: "example-resources",
 * });
 * const exampleApi = Promise.all([exampleService, exampleService]).then(([exampleService, exampleService1]) => azure.apimanagement.getApi({
 *     name: "search-api",
 *     apiManagementName: exampleService.name,
 *     resourceGroupName: exampleService1.resourceGroupName,
 *     revision: "2",
 * }));
 * const exampleGateway = azure.apimanagement.getGateway({
 *     gatewayId: "my-gateway",
 *     apiManagementName: exampleService.then(exampleService => exampleService.name),
 *     resourceGroupName: exampleService.then(exampleService => exampleService.resourceGroupName),
 * });
 * const exampleGatewayApi = new azure.apimanagement.GatewayApi("exampleGatewayApi", {
 *     gatewayId: exampleGateway.then(exampleGateway => exampleGateway.id),
 *     apiId: exampleApi.then(exampleApi => exampleApi.id),
 * });
 * ```
 *
 * ## Import
 *
 * API Management Gateway APIs can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/gatewayApi:GatewayApi example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resGroup1/providers/Microsoft.ApiManagement/service/service1/gateways/gateway1/apis/api1
 * ```
 */
export declare class GatewayApi extends pulumi.CustomResource {
    /**
     * Get an existing GatewayApi resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GatewayApiState, opts?: pulumi.CustomResourceOptions): GatewayApi;
    /**
     * Returns true if the given object is an instance of GatewayApi.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is GatewayApi;
    /**
     * The Identifier of the API Management API within the API Management Service. Changing this forces a new API Management Gateway API to be created.
     */
    readonly apiId: pulumi.Output<string>;
    /**
     * The Identifier for the API Management Gateway. Changing this forces a new API Management Gateway API to be created.
     */
    readonly gatewayId: pulumi.Output<string>;
    /**
     * Create a GatewayApi resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GatewayApiArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering GatewayApi resources.
 */
export interface GatewayApiState {
    /**
     * The Identifier of the API Management API within the API Management Service. Changing this forces a new API Management Gateway API to be created.
     */
    apiId?: pulumi.Input<string>;
    /**
     * The Identifier for the API Management Gateway. Changing this forces a new API Management Gateway API to be created.
     */
    gatewayId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a GatewayApi resource.
 */
export interface GatewayApiArgs {
    /**
     * The Identifier of the API Management API within the API Management Service. Changing this forces a new API Management Gateway API to be created.
     */
    apiId: pulumi.Input<string>;
    /**
     * The Identifier for the API Management Gateway. Changing this forces a new API Management Gateway API to be created.
     */
    gatewayId: pulumi.Input<string>;
}
