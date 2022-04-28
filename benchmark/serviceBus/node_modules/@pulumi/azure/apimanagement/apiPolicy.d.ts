import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an API Management API Policy
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleApi = azure.apimanagement.getApi({
 *     apiName: "my-api",
 *     apiManagementName: "example-apim",
 *     resourceGroupName: "search-service",
 * });
 * const exampleApiPolicy = new azure.apimanagement.ApiPolicy("exampleApiPolicy", {
 *     apiName: exampleApi.then(exampleApi => exampleApi.name),
 *     apiManagementName: exampleApi.then(exampleApi => exampleApi.apiManagementName),
 *     resourceGroupName: exampleApi.then(exampleApi => exampleApi.resourceGroupName),
 *     xmlContent: `<policies>
 *   <inbound>
 *     <find-and-replace from="xyz" to="abc" />
 *   </inbound>
 * </policies>
 * `,
 * });
 * ```
 *
 * ## Import
 *
 * API Management API Policy can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/apiPolicy:ApiPolicy example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ApiManagement/service/service1/apis/exampleId/policies/policy
 * ```
 */
export declare class ApiPolicy extends pulumi.CustomResource {
    /**
     * Get an existing ApiPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiPolicyState, opts?: pulumi.CustomResourceOptions): ApiPolicy;
    /**
     * Returns true if the given object is an instance of ApiPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApiPolicy;
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * The ID of the API Management API within the API Management Service. Changing this forces a new resource to be created.
     */
    readonly apiName: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The XML Content for this Policy as a string.
     */
    readonly xmlContent: pulumi.Output<string>;
    /**
     * A link to a Policy XML Document, which must be publicly available.
     */
    readonly xmlLink: pulumi.Output<string | undefined>;
    /**
     * Create a ApiPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiPolicyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ApiPolicy resources.
 */
export interface ApiPolicyState {
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * The ID of the API Management API within the API Management Service. Changing this forces a new resource to be created.
     */
    apiName?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The XML Content for this Policy as a string.
     */
    xmlContent?: pulumi.Input<string>;
    /**
     * A link to a Policy XML Document, which must be publicly available.
     */
    xmlLink?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ApiPolicy resource.
 */
export interface ApiPolicyArgs {
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * The ID of the API Management API within the API Management Service. Changing this forces a new resource to be created.
     */
    apiName: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The XML Content for this Policy as a string.
     */
    xmlContent?: pulumi.Input<string>;
    /**
     * A link to a Policy XML Document, which must be publicly available.
     */
    xmlLink?: pulumi.Input<string>;
}
