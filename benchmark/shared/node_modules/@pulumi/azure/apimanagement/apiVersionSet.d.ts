import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an API Version Set within an API Management Service.
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
 * const exampleApiVersionSet = new azure.apimanagement.ApiVersionSet("exampleApiVersionSet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     apiManagementName: exampleService.name,
 *     displayName: "ExampleAPIVersionSet",
 *     versioningScheme: "Segment",
 * });
 * ```
 *
 * ## Import
 *
 * API Version Set can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/apiVersionSet:ApiVersionSet example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ApiManagement/service/service1/apiVersionSets/set1
 * ```
 */
export declare class ApiVersionSet extends pulumi.CustomResource {
    /**
     * Get an existing ApiVersionSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiVersionSetState, opts?: pulumi.CustomResourceOptions): ApiVersionSet;
    /**
     * Returns true if the given object is an instance of ApiVersionSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApiVersionSet;
    /**
     * The name of the API Management Service in which the API Version Set should exist. May only contain alphanumeric characters and dashes up to 50 characters in length. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * The description of API Version Set.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The display name of this API Version Set.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * The name of the API Version Set. May only contain alphanumeric characters and dashes up to 80 characters in length. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the parent API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The name of the Header which should be read from Inbound Requests which defines the API Version.
     */
    readonly versionHeaderName: pulumi.Output<string | undefined>;
    /**
     * The name of the Query String which should be read from Inbound Requests which defines the API Version.
     */
    readonly versionQueryName: pulumi.Output<string | undefined>;
    /**
     * Specifies where in an Inbound HTTP Request that the API Version should be read from. Possible values are `Header`, `Query` and `Segment`.
     */
    readonly versioningScheme: pulumi.Output<string>;
    /**
     * Create a ApiVersionSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiVersionSetArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ApiVersionSet resources.
 */
export interface ApiVersionSetState {
    /**
     * The name of the API Management Service in which the API Version Set should exist. May only contain alphanumeric characters and dashes up to 50 characters in length. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * The description of API Version Set.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of this API Version Set.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The name of the API Version Set. May only contain alphanumeric characters and dashes up to 80 characters in length. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the parent API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The name of the Header which should be read from Inbound Requests which defines the API Version.
     */
    versionHeaderName?: pulumi.Input<string>;
    /**
     * The name of the Query String which should be read from Inbound Requests which defines the API Version.
     */
    versionQueryName?: pulumi.Input<string>;
    /**
     * Specifies where in an Inbound HTTP Request that the API Version should be read from. Possible values are `Header`, `Query` and `Segment`.
     */
    versioningScheme?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ApiVersionSet resource.
 */
export interface ApiVersionSetArgs {
    /**
     * The name of the API Management Service in which the API Version Set should exist. May only contain alphanumeric characters and dashes up to 50 characters in length. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * The description of API Version Set.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of this API Version Set.
     */
    displayName: pulumi.Input<string>;
    /**
     * The name of the API Version Set. May only contain alphanumeric characters and dashes up to 80 characters in length. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the parent API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Header which should be read from Inbound Requests which defines the API Version.
     */
    versionHeaderName?: pulumi.Input<string>;
    /**
     * The name of the Query String which should be read from Inbound Requests which defines the API Version.
     */
    versionQueryName?: pulumi.Input<string>;
    /**
     * Specifies where in an Inbound HTTP Request that the API Version should be read from. Possible values are `Header`, `Query` and `Segment`.
     */
    versioningScheme: pulumi.Input<string>;
}
