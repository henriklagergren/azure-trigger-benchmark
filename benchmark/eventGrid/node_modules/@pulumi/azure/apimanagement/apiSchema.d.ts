import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an API Schema within an API Management Service.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const exampleApi = azure.apimanagement.getApi({
 *     name: "search-api",
 *     apiManagementName: "search-api-management",
 *     resourceGroupName: "search-service",
 *     revision: "2",
 * });
 * const exampleApiSchema = new azure.apimanagement.ApiSchema("exampleApiSchema", {
 *     apiName: exampleApi.then(exampleApi => exampleApi.name),
 *     apiManagementName: exampleApi.then(exampleApi => exampleApi.apiManagementName),
 *     resourceGroupName: exampleApi.then(exampleApi => exampleApi.resourceGroupName),
 *     schemaId: "example-schema",
 *     contentType: "application/vnd.ms-azure-apim.xsd+xml",
 *     value: fs.readFileSync("api_management_api_schema.xml"),
 * });
 * ```
 *
 * ## Import
 *
 * API Management API Schema's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/apiSchema:ApiSchema example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.ApiManagement/service/instance1/apis/api1/schemas/schema1
 * ```
 */
export declare class ApiSchema extends pulumi.CustomResource {
    /**
     * Get an existing ApiSchema resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiSchemaState, opts?: pulumi.CustomResourceOptions): ApiSchema;
    /**
     * Returns true if the given object is an instance of ApiSchema.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApiSchema;
    /**
     * The Name of the API Management Service where the API exists. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * The name of the API within the API Management Service where this API Schema should be created. Changing this forces a new resource to be created.
     */
    readonly apiName: pulumi.Output<string>;
    /**
     * The content type of the API Schema.
     */
    readonly contentType: pulumi.Output<string>;
    /**
     * The Name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A unique identifier for this API Schema. Changing this forces a new resource to be created.
     */
    readonly schemaId: pulumi.Output<string>;
    /**
     * The JSON escaped string defining the document representing the Schema.
     */
    readonly value: pulumi.Output<string>;
    /**
     * Create a ApiSchema resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiSchemaArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ApiSchema resources.
 */
export interface ApiSchemaState {
    /**
     * The Name of the API Management Service where the API exists. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * The name of the API within the API Management Service where this API Schema should be created. Changing this forces a new resource to be created.
     */
    apiName?: pulumi.Input<string>;
    /**
     * The content type of the API Schema.
     */
    contentType?: pulumi.Input<string>;
    /**
     * The Name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A unique identifier for this API Schema. Changing this forces a new resource to be created.
     */
    schemaId?: pulumi.Input<string>;
    /**
     * The JSON escaped string defining the document representing the Schema.
     */
    value?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ApiSchema resource.
 */
export interface ApiSchemaArgs {
    /**
     * The Name of the API Management Service where the API exists. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * The name of the API within the API Management Service where this API Schema should be created. Changing this forces a new resource to be created.
     */
    apiName: pulumi.Input<string>;
    /**
     * The content type of the API Schema.
     */
    contentType: pulumi.Input<string>;
    /**
     * The Name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A unique identifier for this API Schema. Changing this forces a new resource to be created.
     */
    schemaId: pulumi.Input<string>;
    /**
     * The JSON escaped string defining the document representing the Schema.
     */
    value: pulumi.Input<string>;
}
