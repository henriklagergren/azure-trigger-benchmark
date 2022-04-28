import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an API within an API Management Service.
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
 *     publisherEmail: "company@exmaple.com",
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
 * ```
 *
 * ## Import
 *
 * API Management API's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/api:Api example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.ApiManagement/service/instance1/apis/api1
 * ```
 */
export declare class Api extends pulumi.CustomResource {
    /**
     * Get an existing Api resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiState, opts?: pulumi.CustomResourceOptions): Api;
    /**
     * Returns true if the given object is an instance of Api.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Api;
    /**
     * The Name of the API Management Service where this API should be created. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * A description of the API Management API, which may include HTML formatting tags.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The display name of the API.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * A `import` block as documented below.
     */
    readonly import: pulumi.Output<outputs.apimanagement.ApiImport | undefined>;
    /**
     * Is this the current API Revision?
     */
    readonly isCurrent: pulumi.Output<boolean>;
    /**
     * Is this API Revision online/accessible via the Gateway?
     */
    readonly isOnline: pulumi.Output<boolean>;
    /**
     * The name of the API Management API. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * An `oauth2Authorization` block as documented below.
     */
    readonly oauth2Authorization: pulumi.Output<outputs.apimanagement.ApiOauth2Authorization | undefined>;
    /**
     * An `openidAuthentication` block as documented below.
     */
    readonly openidAuthentication: pulumi.Output<outputs.apimanagement.ApiOpenidAuthentication | undefined>;
    /**
     * The Path for this API Management API, which is a relative URL which uniquely identifies this API and all of its resource paths within the API Management Service.
     */
    readonly path: pulumi.Output<string>;
    /**
     * A list of protocols the operations in this API can be invoked. Possible values are `http` and `https`.
     */
    readonly protocols: pulumi.Output<string[]>;
    /**
     * The Name of the Resource Group where the API Management API exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Revision which used for this API.
     */
    readonly revision: pulumi.Output<string>;
    /**
     * The description of the Api Revision of the API Management API.
     */
    readonly revisionDescription: pulumi.Output<string | undefined>;
    /**
     * Absolute URL of the backend service implementing this API.
     */
    readonly serviceUrl: pulumi.Output<string>;
    /**
     * Should this API expose a SOAP frontend, rather than a HTTP frontend? Defaults to `false`.
     */
    readonly soapPassThrough: pulumi.Output<boolean | undefined>;
    /**
     * The API id of the source API, which could be in format `azurerm_api_management_api.example.id` or in format `azurerm_api_management_api.example.id;rev=1`
     */
    readonly sourceApiId: pulumi.Output<string | undefined>;
    /**
     * A `subscriptionKeyParameterNames` block as documented below.
     */
    readonly subscriptionKeyParameterNames: pulumi.Output<outputs.apimanagement.ApiSubscriptionKeyParameterNames>;
    /**
     * Should this API require a subscription key?
     */
    readonly subscriptionRequired: pulumi.Output<boolean | undefined>;
    /**
     * The Version number of this API, if this API is versioned.
     */
    readonly version: pulumi.Output<string>;
    /**
     * The description of the Api Version of the API Management API.
     */
    readonly versionDescription: pulumi.Output<string | undefined>;
    /**
     * The ID of the Version Set which this API is associated with.
     */
    readonly versionSetId: pulumi.Output<string>;
    /**
     * Create a Api resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Api resources.
 */
export interface ApiState {
    /**
     * The Name of the API Management Service where this API should be created. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * A description of the API Management API, which may include HTML formatting tags.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the API.
     */
    displayName?: pulumi.Input<string>;
    /**
     * A `import` block as documented below.
     */
    import?: pulumi.Input<inputs.apimanagement.ApiImport>;
    /**
     * Is this the current API Revision?
     */
    isCurrent?: pulumi.Input<boolean>;
    /**
     * Is this API Revision online/accessible via the Gateway?
     */
    isOnline?: pulumi.Input<boolean>;
    /**
     * The name of the API Management API. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * An `oauth2Authorization` block as documented below.
     */
    oauth2Authorization?: pulumi.Input<inputs.apimanagement.ApiOauth2Authorization>;
    /**
     * An `openidAuthentication` block as documented below.
     */
    openidAuthentication?: pulumi.Input<inputs.apimanagement.ApiOpenidAuthentication>;
    /**
     * The Path for this API Management API, which is a relative URL which uniquely identifies this API and all of its resource paths within the API Management Service.
     */
    path?: pulumi.Input<string>;
    /**
     * A list of protocols the operations in this API can be invoked. Possible values are `http` and `https`.
     */
    protocols?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Name of the Resource Group where the API Management API exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Revision which used for this API.
     */
    revision?: pulumi.Input<string>;
    /**
     * The description of the Api Revision of the API Management API.
     */
    revisionDescription?: pulumi.Input<string>;
    /**
     * Absolute URL of the backend service implementing this API.
     */
    serviceUrl?: pulumi.Input<string>;
    /**
     * Should this API expose a SOAP frontend, rather than a HTTP frontend? Defaults to `false`.
     */
    soapPassThrough?: pulumi.Input<boolean>;
    /**
     * The API id of the source API, which could be in format `azurerm_api_management_api.example.id` or in format `azurerm_api_management_api.example.id;rev=1`
     */
    sourceApiId?: pulumi.Input<string>;
    /**
     * A `subscriptionKeyParameterNames` block as documented below.
     */
    subscriptionKeyParameterNames?: pulumi.Input<inputs.apimanagement.ApiSubscriptionKeyParameterNames>;
    /**
     * Should this API require a subscription key?
     */
    subscriptionRequired?: pulumi.Input<boolean>;
    /**
     * The Version number of this API, if this API is versioned.
     */
    version?: pulumi.Input<string>;
    /**
     * The description of the Api Version of the API Management API.
     */
    versionDescription?: pulumi.Input<string>;
    /**
     * The ID of the Version Set which this API is associated with.
     */
    versionSetId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Api resource.
 */
export interface ApiArgs {
    /**
     * The Name of the API Management Service where this API should be created. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * A description of the API Management API, which may include HTML formatting tags.
     */
    description?: pulumi.Input<string>;
    /**
     * The display name of the API.
     */
    displayName?: pulumi.Input<string>;
    /**
     * A `import` block as documented below.
     */
    import?: pulumi.Input<inputs.apimanagement.ApiImport>;
    /**
     * The name of the API Management API. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * An `oauth2Authorization` block as documented below.
     */
    oauth2Authorization?: pulumi.Input<inputs.apimanagement.ApiOauth2Authorization>;
    /**
     * An `openidAuthentication` block as documented below.
     */
    openidAuthentication?: pulumi.Input<inputs.apimanagement.ApiOpenidAuthentication>;
    /**
     * The Path for this API Management API, which is a relative URL which uniquely identifies this API and all of its resource paths within the API Management Service.
     */
    path?: pulumi.Input<string>;
    /**
     * A list of protocols the operations in this API can be invoked. Possible values are `http` and `https`.
     */
    protocols?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Name of the Resource Group where the API Management API exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Revision which used for this API.
     */
    revision: pulumi.Input<string>;
    /**
     * The description of the Api Revision of the API Management API.
     */
    revisionDescription?: pulumi.Input<string>;
    /**
     * Absolute URL of the backend service implementing this API.
     */
    serviceUrl?: pulumi.Input<string>;
    /**
     * Should this API expose a SOAP frontend, rather than a HTTP frontend? Defaults to `false`.
     */
    soapPassThrough?: pulumi.Input<boolean>;
    /**
     * The API id of the source API, which could be in format `azurerm_api_management_api.example.id` or in format `azurerm_api_management_api.example.id;rev=1`
     */
    sourceApiId?: pulumi.Input<string>;
    /**
     * A `subscriptionKeyParameterNames` block as documented below.
     */
    subscriptionKeyParameterNames?: pulumi.Input<inputs.apimanagement.ApiSubscriptionKeyParameterNames>;
    /**
     * Should this API require a subscription key?
     */
    subscriptionRequired?: pulumi.Input<boolean>;
    /**
     * The Version number of this API, if this API is versioned.
     */
    version?: pulumi.Input<string>;
    /**
     * The description of the Api Version of the API Management API.
     */
    versionDescription?: pulumi.Input<string>;
    /**
     * The ID of the Version Set which this API is associated with.
     */
    versionSetId?: pulumi.Input<string>;
}
