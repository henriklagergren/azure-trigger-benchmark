import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a API Management Service API Diagnostics Logs.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleInsights = new azure.appinsights.Insights("exampleInsights", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationType: "web",
 * });
 * const exampleService = new azure.apimanagement.Service("exampleService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     publisherName: "My Company",
 *     publisherEmail: "company@mycompany.io",
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
 * const exampleLogger = new azure.apimanagement.Logger("exampleLogger", {
 *     apiManagementName: exampleService.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationInsights: {
 *         instrumentationKey: exampleInsights.instrumentationKey,
 *     },
 * });
 * const exampleApiDiagnostic = new azure.apimanagement.ApiDiagnostic("exampleApiDiagnostic", {
 *     identifier: "applicationinsights",
 *     resourceGroupName: exampleResourceGroup.name,
 *     apiManagementName: exampleService.name,
 *     apiName: exampleApi.name,
 *     apiManagementLoggerId: exampleLogger.id,
 *     samplingPercentage: 5,
 *     alwaysLogErrors: true,
 *     logClientIp: true,
 *     verbosity: "verbose",
 *     httpCorrelationProtocol: "W3C",
 *     frontendRequest: {
 *         bodyBytes: 32,
 *         headersToLogs: [
 *             "content-type",
 *             "accept",
 *             "origin",
 *         ],
 *     },
 *     frontendResponse: {
 *         bodyBytes: 32,
 *         headersToLogs: [
 *             "content-type",
 *             "content-length",
 *             "origin",
 *         ],
 *     },
 *     backendRequest: {
 *         bodyBytes: 32,
 *         headersToLogs: [
 *             "content-type",
 *             "accept",
 *             "origin",
 *         ],
 *     },
 *     backendResponse: {
 *         bodyBytes: 32,
 *         headersToLogs: [
 *             "content-type",
 *             "content-length",
 *             "origin",
 *         ],
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * API Management Service API Diagnostics Logs can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/apiDiagnostic:ApiDiagnostic example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ApiManagement/service/instance1/apis/api1/diagnostics/diagnostic1
 * ```
 */
export declare class ApiDiagnostic extends pulumi.CustomResource {
    /**
     * Get an existing ApiDiagnostic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiDiagnosticState, opts?: pulumi.CustomResourceOptions): ApiDiagnostic;
    /**
     * Returns true if the given object is an instance of ApiDiagnostic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApiDiagnostic;
    /**
     * Always log errors. Send telemetry if there is an erroneous condition, regardless of sampling settings.
     */
    readonly alwaysLogErrors: pulumi.Output<boolean>;
    /**
     * The ID (name) of the Diagnostics Logger.
     */
    readonly apiManagementLoggerId: pulumi.Output<string>;
    /**
     * The name of the API Management Service instance. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * The name of the API on which to configure the Diagnostics Logs. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    readonly apiName: pulumi.Output<string>;
    /**
     * A `backendRequest` block as defined below.
     */
    readonly backendRequest: pulumi.Output<outputs.apimanagement.ApiDiagnosticBackendRequest>;
    /**
     * A `backendResponse` block as defined below.
     */
    readonly backendResponse: pulumi.Output<outputs.apimanagement.ApiDiagnosticBackendResponse>;
    /**
     * A `frontendRequest` block as defined below.
     */
    readonly frontendRequest: pulumi.Output<outputs.apimanagement.ApiDiagnosticFrontendRequest>;
    /**
     * A `frontendResponse` block as defined below.
     */
    readonly frontendResponse: pulumi.Output<outputs.apimanagement.ApiDiagnosticFrontendResponse>;
    /**
     * The HTTP Correlation Protocol to use. Possible values are `None`, `Legacy` or `W3C`.
     */
    readonly httpCorrelationProtocol: pulumi.Output<string>;
    /**
     * Identifier of the Diagnostics Logs. Possible values are `applicationinsights` and `azuremonitor`. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    readonly identifier: pulumi.Output<string>;
    /**
     * Log client IP address.
     */
    readonly logClientIp: pulumi.Output<boolean>;
    /**
     * The format of the Operation Name for Application Insights telemetries. Possible values are `Name`, and `Url`. Defaults to `Name`.
     */
    readonly operationNameFormat: pulumi.Output<string | undefined>;
    /**
     * The name of the Resource Group where the API Management Service API Diagnostics Logs should exist. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Sampling (%). For high traffic APIs, please read this [documentation](https://docs.microsoft.com/azure/api-management/api-management-howto-app-insights#performance-implications-and-log-sampling) to understand performance implications and log sampling. Valid values are between `0.0` and `100.0`.
     */
    readonly samplingPercentage: pulumi.Output<number>;
    /**
     * Logging verbosity. Possible values are `verbose`, `information` or `error`.
     */
    readonly verbosity: pulumi.Output<string>;
    /**
     * Create a ApiDiagnostic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiDiagnosticArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ApiDiagnostic resources.
 */
export interface ApiDiagnosticState {
    /**
     * Always log errors. Send telemetry if there is an erroneous condition, regardless of sampling settings.
     */
    alwaysLogErrors?: pulumi.Input<boolean>;
    /**
     * The ID (name) of the Diagnostics Logger.
     */
    apiManagementLoggerId?: pulumi.Input<string>;
    /**
     * The name of the API Management Service instance. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * The name of the API on which to configure the Diagnostics Logs. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    apiName?: pulumi.Input<string>;
    /**
     * A `backendRequest` block as defined below.
     */
    backendRequest?: pulumi.Input<inputs.apimanagement.ApiDiagnosticBackendRequest>;
    /**
     * A `backendResponse` block as defined below.
     */
    backendResponse?: pulumi.Input<inputs.apimanagement.ApiDiagnosticBackendResponse>;
    /**
     * A `frontendRequest` block as defined below.
     */
    frontendRequest?: pulumi.Input<inputs.apimanagement.ApiDiagnosticFrontendRequest>;
    /**
     * A `frontendResponse` block as defined below.
     */
    frontendResponse?: pulumi.Input<inputs.apimanagement.ApiDiagnosticFrontendResponse>;
    /**
     * The HTTP Correlation Protocol to use. Possible values are `None`, `Legacy` or `W3C`.
     */
    httpCorrelationProtocol?: pulumi.Input<string>;
    /**
     * Identifier of the Diagnostics Logs. Possible values are `applicationinsights` and `azuremonitor`. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    identifier?: pulumi.Input<string>;
    /**
     * Log client IP address.
     */
    logClientIp?: pulumi.Input<boolean>;
    /**
     * The format of the Operation Name for Application Insights telemetries. Possible values are `Name`, and `Url`. Defaults to `Name`.
     */
    operationNameFormat?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the API Management Service API Diagnostics Logs should exist. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Sampling (%). For high traffic APIs, please read this [documentation](https://docs.microsoft.com/azure/api-management/api-management-howto-app-insights#performance-implications-and-log-sampling) to understand performance implications and log sampling. Valid values are between `0.0` and `100.0`.
     */
    samplingPercentage?: pulumi.Input<number>;
    /**
     * Logging verbosity. Possible values are `verbose`, `information` or `error`.
     */
    verbosity?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ApiDiagnostic resource.
 */
export interface ApiDiagnosticArgs {
    /**
     * Always log errors. Send telemetry if there is an erroneous condition, regardless of sampling settings.
     */
    alwaysLogErrors?: pulumi.Input<boolean>;
    /**
     * The ID (name) of the Diagnostics Logger.
     */
    apiManagementLoggerId: pulumi.Input<string>;
    /**
     * The name of the API Management Service instance. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * The name of the API on which to configure the Diagnostics Logs. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    apiName: pulumi.Input<string>;
    /**
     * A `backendRequest` block as defined below.
     */
    backendRequest?: pulumi.Input<inputs.apimanagement.ApiDiagnosticBackendRequest>;
    /**
     * A `backendResponse` block as defined below.
     */
    backendResponse?: pulumi.Input<inputs.apimanagement.ApiDiagnosticBackendResponse>;
    /**
     * A `frontendRequest` block as defined below.
     */
    frontendRequest?: pulumi.Input<inputs.apimanagement.ApiDiagnosticFrontendRequest>;
    /**
     * A `frontendResponse` block as defined below.
     */
    frontendResponse?: pulumi.Input<inputs.apimanagement.ApiDiagnosticFrontendResponse>;
    /**
     * The HTTP Correlation Protocol to use. Possible values are `None`, `Legacy` or `W3C`.
     */
    httpCorrelationProtocol?: pulumi.Input<string>;
    /**
     * Identifier of the Diagnostics Logs. Possible values are `applicationinsights` and `azuremonitor`. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    identifier: pulumi.Input<string>;
    /**
     * Log client IP address.
     */
    logClientIp?: pulumi.Input<boolean>;
    /**
     * The format of the Operation Name for Application Insights telemetries. Possible values are `Name`, and `Url`. Defaults to `Name`.
     */
    operationNameFormat?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the API Management Service API Diagnostics Logs should exist. Changing this forces a new API Management Service API Diagnostics Logs to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Sampling (%). For high traffic APIs, please read this [documentation](https://docs.microsoft.com/azure/api-management/api-management-howto-app-insights#performance-implications-and-log-sampling) to understand performance implications and log sampling. Valid values are between `0.0` and `100.0`.
     */
    samplingPercentage?: pulumi.Input<number>;
    /**
     * Logging verbosity. Possible values are `verbose`, `information` or `error`.
     */
    verbosity?: pulumi.Input<string>;
}
