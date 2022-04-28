import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Authorization Server within an API Management Service.
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
 * const exampleAuthorizationServer = new azure.apimanagement.AuthorizationServer("exampleAuthorizationServer", {
 *     apiManagementName: data.azurerm_api_management.example.name,
 *     resourceGroupName: data.azurerm_api_management.example.resource_group_name,
 *     displayName: "Test Server",
 *     authorizationEndpoint: "https://example.mydomain.com/client/authorize",
 *     clientId: "42424242-4242-4242-4242-424242424242",
 *     clientRegistrationEndpoint: "https://example.mydomain.com/client/register",
 *     grantTypes: ["authorizationCode"],
 * });
 * ```
 *
 * ## Import
 *
 * API Management Authorization Servers can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/authorizationServer:AuthorizationServer example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ApiManagement/service/service1/authorizationServers/server1
 * ```
 */
export declare class AuthorizationServer extends pulumi.CustomResource {
    /**
     * Get an existing AuthorizationServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AuthorizationServerState, opts?: pulumi.CustomResourceOptions): AuthorizationServer;
    /**
     * Returns true if the given object is an instance of AuthorizationServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AuthorizationServer;
    /**
     * The name of the API Management Service in which this Authorization Server should be created. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * The OAUTH Authorization Endpoint.
     */
    readonly authorizationEndpoint: pulumi.Output<string>;
    /**
     * The HTTP Verbs supported by the Authorization Endpoint. Possible values are `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, `PUT` and `TRACE`.
     */
    readonly authorizationMethods: pulumi.Output<string[]>;
    /**
     * The mechanism by which Access Tokens are passed to the API. Possible values are `authorizationHeader` and `query`.
     */
    readonly bearerTokenSendingMethods: pulumi.Output<string[] | undefined>;
    /**
     * The Authentication Methods supported by the Token endpoint of this Authorization Server.. Possible values are `Basic` and `Body`.
     */
    readonly clientAuthenticationMethods: pulumi.Output<string[] | undefined>;
    /**
     * The Client/App ID registered with this Authorization Server.
     */
    readonly clientId: pulumi.Output<string>;
    /**
     * The URI of page where Client/App Registration is performed for this Authorization Server.
     */
    readonly clientRegistrationEndpoint: pulumi.Output<string>;
    /**
     * The Client/App Secret registered with this Authorization Server.
     */
    readonly clientSecret: pulumi.Output<string | undefined>;
    /**
     * The Default Scope used when requesting an Access Token, specified as a string containing space-delimited values.
     */
    readonly defaultScope: pulumi.Output<string | undefined>;
    /**
     * A description of the Authorization Server, which may contain HTML formatting tags.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The user-friendly name of this Authorization Server.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * Form of Authorization Grants required when requesting an Access Token. Possible values are `authorizationCode`, `clientCredentials`, `implicit` and `resourceOwnerPassword`.
     */
    readonly grantTypes: pulumi.Output<string[]>;
    /**
     * The name of this Authorization Server. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The password associated with the Resource Owner.
     */
    readonly resourceOwnerPassword: pulumi.Output<string | undefined>;
    /**
     * The username associated with the Resource Owner.
     */
    readonly resourceOwnerUsername: pulumi.Output<string | undefined>;
    /**
     * Does this Authorization Server support State? If this is set to `true` the client may use the state parameter to raise protocol security.
     */
    readonly supportState: pulumi.Output<boolean | undefined>;
    /**
     * A `tokenBodyParameter` block as defined below.
     */
    readonly tokenBodyParameters: pulumi.Output<outputs.apimanagement.AuthorizationServerTokenBodyParameter[] | undefined>;
    /**
     * The OAUTH Token Endpoint.
     */
    readonly tokenEndpoint: pulumi.Output<string | undefined>;
    /**
     * Create a AuthorizationServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AuthorizationServerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AuthorizationServer resources.
 */
export interface AuthorizationServerState {
    /**
     * The name of the API Management Service in which this Authorization Server should be created. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * The OAUTH Authorization Endpoint.
     */
    authorizationEndpoint?: pulumi.Input<string>;
    /**
     * The HTTP Verbs supported by the Authorization Endpoint. Possible values are `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, `PUT` and `TRACE`.
     */
    authorizationMethods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The mechanism by which Access Tokens are passed to the API. Possible values are `authorizationHeader` and `query`.
     */
    bearerTokenSendingMethods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Authentication Methods supported by the Token endpoint of this Authorization Server.. Possible values are `Basic` and `Body`.
     */
    clientAuthenticationMethods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Client/App ID registered with this Authorization Server.
     */
    clientId?: pulumi.Input<string>;
    /**
     * The URI of page where Client/App Registration is performed for this Authorization Server.
     */
    clientRegistrationEndpoint?: pulumi.Input<string>;
    /**
     * The Client/App Secret registered with this Authorization Server.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * The Default Scope used when requesting an Access Token, specified as a string containing space-delimited values.
     */
    defaultScope?: pulumi.Input<string>;
    /**
     * A description of the Authorization Server, which may contain HTML formatting tags.
     */
    description?: pulumi.Input<string>;
    /**
     * The user-friendly name of this Authorization Server.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Form of Authorization Grants required when requesting an Access Token. Possible values are `authorizationCode`, `clientCredentials`, `implicit` and `resourceOwnerPassword`.
     */
    grantTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of this Authorization Server. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The password associated with the Resource Owner.
     */
    resourceOwnerPassword?: pulumi.Input<string>;
    /**
     * The username associated with the Resource Owner.
     */
    resourceOwnerUsername?: pulumi.Input<string>;
    /**
     * Does this Authorization Server support State? If this is set to `true` the client may use the state parameter to raise protocol security.
     */
    supportState?: pulumi.Input<boolean>;
    /**
     * A `tokenBodyParameter` block as defined below.
     */
    tokenBodyParameters?: pulumi.Input<pulumi.Input<inputs.apimanagement.AuthorizationServerTokenBodyParameter>[]>;
    /**
     * The OAUTH Token Endpoint.
     */
    tokenEndpoint?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AuthorizationServer resource.
 */
export interface AuthorizationServerArgs {
    /**
     * The name of the API Management Service in which this Authorization Server should be created. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * The OAUTH Authorization Endpoint.
     */
    authorizationEndpoint: pulumi.Input<string>;
    /**
     * The HTTP Verbs supported by the Authorization Endpoint. Possible values are `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, `PUT` and `TRACE`.
     */
    authorizationMethods: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The mechanism by which Access Tokens are passed to the API. Possible values are `authorizationHeader` and `query`.
     */
    bearerTokenSendingMethods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Authentication Methods supported by the Token endpoint of this Authorization Server.. Possible values are `Basic` and `Body`.
     */
    clientAuthenticationMethods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Client/App ID registered with this Authorization Server.
     */
    clientId: pulumi.Input<string>;
    /**
     * The URI of page where Client/App Registration is performed for this Authorization Server.
     */
    clientRegistrationEndpoint: pulumi.Input<string>;
    /**
     * The Client/App Secret registered with this Authorization Server.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * The Default Scope used when requesting an Access Token, specified as a string containing space-delimited values.
     */
    defaultScope?: pulumi.Input<string>;
    /**
     * A description of the Authorization Server, which may contain HTML formatting tags.
     */
    description?: pulumi.Input<string>;
    /**
     * The user-friendly name of this Authorization Server.
     */
    displayName: pulumi.Input<string>;
    /**
     * Form of Authorization Grants required when requesting an Access Token. Possible values are `authorizationCode`, `clientCredentials`, `implicit` and `resourceOwnerPassword`.
     */
    grantTypes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of this Authorization Server. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The password associated with the Resource Owner.
     */
    resourceOwnerPassword?: pulumi.Input<string>;
    /**
     * The username associated with the Resource Owner.
     */
    resourceOwnerUsername?: pulumi.Input<string>;
    /**
     * Does this Authorization Server support State? If this is set to `true` the client may use the state parameter to raise protocol security.
     */
    supportState?: pulumi.Input<boolean>;
    /**
     * A `tokenBodyParameter` block as defined below.
     */
    tokenBodyParameters?: pulumi.Input<pulumi.Input<inputs.apimanagement.AuthorizationServerTokenBodyParameter>[]>;
    /**
     * The OAUTH Token Endpoint.
     */
    tokenEndpoint?: pulumi.Input<string>;
}
