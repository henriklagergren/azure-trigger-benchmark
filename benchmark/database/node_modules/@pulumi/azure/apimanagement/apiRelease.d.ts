import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a API Management API Release.
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
 * const exampleApi = new azure.apimanagement.Api("exampleApi", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     apiManagementName: exampleService.name,
 *     revision: "1",
 *     displayName: "Example API",
 *     path: "example",
 *     protocols: ["https"],
 *     "import": {
 *         contentFormat: "swagger-link-json",
 *         contentValue: "http://conferenceapi.azurewebsites.net/?format=json",
 *     },
 * });
 * const exampleApiRelease = new azure.apimanagement.ApiRelease("exampleApiRelease", {apiId: exampleApi.id});
 * ```
 *
 * ## Import
 *
 * API Management API Releases can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/apiRelease:ApiRelease example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ApiManagement/service/service1/apis/api1/releases/release1
 * ```
 */
export declare class ApiRelease extends pulumi.CustomResource {
    /**
     * Get an existing ApiRelease resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiReleaseState, opts?: pulumi.CustomResourceOptions): ApiRelease;
    /**
     * Returns true if the given object is an instance of ApiRelease.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApiRelease;
    /**
     * The ID of the API Management API. Changing this forces a new API Management API Release to be created.
     */
    readonly apiId: pulumi.Output<string>;
    /**
     * The name which should be used for this API Management API Release. Changing this forces a new API Management API Release to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The Release Notes.
     */
    readonly notes: pulumi.Output<string | undefined>;
    /**
     * Create a ApiRelease resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiReleaseArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ApiRelease resources.
 */
export interface ApiReleaseState {
    /**
     * The ID of the API Management API. Changing this forces a new API Management API Release to be created.
     */
    apiId?: pulumi.Input<string>;
    /**
     * The name which should be used for this API Management API Release. Changing this forces a new API Management API Release to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The Release Notes.
     */
    notes?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ApiRelease resource.
 */
export interface ApiReleaseArgs {
    /**
     * The ID of the API Management API. Changing this forces a new API Management API Release to be created.
     */
    apiId: pulumi.Input<string>;
    /**
     * The name which should be used for this API Management API Release. Changing this forces a new API Management API Release to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The Release Notes.
     */
    notes?: pulumi.Input<string>;
}
