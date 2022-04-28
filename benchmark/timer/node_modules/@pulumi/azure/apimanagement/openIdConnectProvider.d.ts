import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an OpenID Connect Provider within a API Management Service.
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
 * const exampleOpenIdConnectProvider = new azure.apimanagement.OpenIdConnectProvider("exampleOpenIdConnectProvider", {
 *     apiManagementName: exampleService.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     clientId: "00001111-2222-3333-4444-555566667777",
 *     displayName: "Example Provider",
 *     metadataEndpoint: "https://example.com/example",
 * });
 * ```
 *
 * ## Import
 *
 * API Management OpenID Connect Providers can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/openIdConnectProvider:OpenIdConnectProvider example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.ApiManagement/service/instance1/openidConnectProviders/provider1
 * ```
 */
export declare class OpenIdConnectProvider extends pulumi.CustomResource {
    /**
     * Get an existing OpenIdConnectProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OpenIdConnectProviderState, opts?: pulumi.CustomResourceOptions): OpenIdConnectProvider;
    /**
     * Returns true if the given object is an instance of OpenIdConnectProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is OpenIdConnectProvider;
    /**
     * The name of the API Management Service in which this OpenID Connect Provider should be created. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * The Client ID used for the Client Application.
     */
    readonly clientId: pulumi.Output<string>;
    /**
     * The Client Secret used for the Client Application.
     */
    readonly clientSecret: pulumi.Output<string>;
    /**
     * A description of this OpenID Connect Provider.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * A user-friendly name for this OpenID Connect Provider.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * The URI of the Metadata endpoint.
     */
    readonly metadataEndpoint: pulumi.Output<string>;
    /**
     * the Name of the OpenID Connect Provider which should be created within the API Management Service. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a OpenIdConnectProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OpenIdConnectProviderArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering OpenIdConnectProvider resources.
 */
export interface OpenIdConnectProviderState {
    /**
     * The name of the API Management Service in which this OpenID Connect Provider should be created. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * The Client ID used for the Client Application.
     */
    clientId?: pulumi.Input<string>;
    /**
     * The Client Secret used for the Client Application.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * A description of this OpenID Connect Provider.
     */
    description?: pulumi.Input<string>;
    /**
     * A user-friendly name for this OpenID Connect Provider.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The URI of the Metadata endpoint.
     */
    metadataEndpoint?: pulumi.Input<string>;
    /**
     * the Name of the OpenID Connect Provider which should be created within the API Management Service. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a OpenIdConnectProvider resource.
 */
export interface OpenIdConnectProviderArgs {
    /**
     * The name of the API Management Service in which this OpenID Connect Provider should be created. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * The Client ID used for the Client Application.
     */
    clientId: pulumi.Input<string>;
    /**
     * The Client Secret used for the Client Application.
     */
    clientSecret: pulumi.Input<string>;
    /**
     * A description of this OpenID Connect Provider.
     */
    description?: pulumi.Input<string>;
    /**
     * A user-friendly name for this OpenID Connect Provider.
     */
    displayName: pulumi.Input<string>;
    /**
     * The URI of the Metadata endpoint.
     */
    metadataEndpoint: pulumi.Input<string>;
    /**
     * the Name of the OpenID Connect Provider which should be created within the API Management Service. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
