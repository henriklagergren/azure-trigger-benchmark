import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an API Management Service Diagnostic.
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
 * const exampleLogger = new azure.apimanagement.Logger("exampleLogger", {
 *     apiManagementName: exampleService.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationInsights: {
 *         instrumentationKey: exampleInsights.instrumentationKey,
 *     },
 * });
 * const exampleDiagnostic = new azure.apimanagement.Diagnostic("exampleDiagnostic", {
 *     identifier: "applicationinsights",
 *     resourceGroupName: exampleResourceGroup.name,
 *     apiManagementName: exampleService.name,
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
 * API Management Diagnostics can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/diagnostic:Diagnostic example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.ApiManagement/service/instance1/diagnostics/applicationinsights
 * ```
 */
export declare class Diagnostic extends pulumi.CustomResource {
    /**
     * Get an existing Diagnostic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DiagnosticState, opts?: pulumi.CustomResourceOptions): Diagnostic;
    /**
     * Returns true if the given object is an instance of Diagnostic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Diagnostic;
    /**
     * Always log errors. Send telemetry if there is an erroneous condition, regardless of sampling settings.
     */
    readonly alwaysLogErrors: pulumi.Output<boolean>;
    /**
     * The id of the target API Management Logger where the API Management Diagnostic should be saved.
     */
    readonly apiManagementLoggerId: pulumi.Output<string>;
    /**
     * The Name of the API Management Service where this Diagnostic should be created. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * A `backendRequest` block as defined below.
     */
    readonly backendRequest: pulumi.Output<outputs.apimanagement.DiagnosticBackendRequest>;
    /**
     * A `backendResponse` block as defined below.
     */
    readonly backendResponse: pulumi.Output<outputs.apimanagement.DiagnosticBackendResponse>;
    /**
     * @deprecated this property has been removed from the API and will be removed in version 3.0 of the provider
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * A `frontendRequest` block as defined below.
     */
    readonly frontendRequest: pulumi.Output<outputs.apimanagement.DiagnosticFrontendRequest>;
    /**
     * A `frontendResponse` block as defined below.
     */
    readonly frontendResponse: pulumi.Output<outputs.apimanagement.DiagnosticFrontendResponse>;
    /**
     * The HTTP Correlation Protocol to use. Possible values are `None`, `Legacy` or `W3C`.
     */
    readonly httpCorrelationProtocol: pulumi.Output<string>;
    /**
     * The diagnostic identifier for the API Management Service. At this time the only supported value is `applicationinsights`. Changing this forces a new resource to be created.
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
     * The Name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.
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
     * Create a Diagnostic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiagnosticArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Diagnostic resources.
 */
export interface DiagnosticState {
    /**
     * Always log errors. Send telemetry if there is an erroneous condition, regardless of sampling settings.
     */
    alwaysLogErrors?: pulumi.Input<boolean>;
    /**
     * The id of the target API Management Logger where the API Management Diagnostic should be saved.
     */
    apiManagementLoggerId?: pulumi.Input<string>;
    /**
     * The Name of the API Management Service where this Diagnostic should be created. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * A `backendRequest` block as defined below.
     */
    backendRequest?: pulumi.Input<inputs.apimanagement.DiagnosticBackendRequest>;
    /**
     * A `backendResponse` block as defined below.
     */
    backendResponse?: pulumi.Input<inputs.apimanagement.DiagnosticBackendResponse>;
    /**
     * @deprecated this property has been removed from the API and will be removed in version 3.0 of the provider
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * A `frontendRequest` block as defined below.
     */
    frontendRequest?: pulumi.Input<inputs.apimanagement.DiagnosticFrontendRequest>;
    /**
     * A `frontendResponse` block as defined below.
     */
    frontendResponse?: pulumi.Input<inputs.apimanagement.DiagnosticFrontendResponse>;
    /**
     * The HTTP Correlation Protocol to use. Possible values are `None`, `Legacy` or `W3C`.
     */
    httpCorrelationProtocol?: pulumi.Input<string>;
    /**
     * The diagnostic identifier for the API Management Service. At this time the only supported value is `applicationinsights`. Changing this forces a new resource to be created.
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
     * The Name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.
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
 * The set of arguments for constructing a Diagnostic resource.
 */
export interface DiagnosticArgs {
    /**
     * Always log errors. Send telemetry if there is an erroneous condition, regardless of sampling settings.
     */
    alwaysLogErrors?: pulumi.Input<boolean>;
    /**
     * The id of the target API Management Logger where the API Management Diagnostic should be saved.
     */
    apiManagementLoggerId: pulumi.Input<string>;
    /**
     * The Name of the API Management Service where this Diagnostic should be created. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * A `backendRequest` block as defined below.
     */
    backendRequest?: pulumi.Input<inputs.apimanagement.DiagnosticBackendRequest>;
    /**
     * A `backendResponse` block as defined below.
     */
    backendResponse?: pulumi.Input<inputs.apimanagement.DiagnosticBackendResponse>;
    /**
     * @deprecated this property has been removed from the API and will be removed in version 3.0 of the provider
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * A `frontendRequest` block as defined below.
     */
    frontendRequest?: pulumi.Input<inputs.apimanagement.DiagnosticFrontendRequest>;
    /**
     * A `frontendResponse` block as defined below.
     */
    frontendResponse?: pulumi.Input<inputs.apimanagement.DiagnosticFrontendResponse>;
    /**
     * The HTTP Correlation Protocol to use. Possible values are `None`, `Legacy` or `W3C`.
     */
    httpCorrelationProtocol?: pulumi.Input<string>;
    /**
     * The diagnostic identifier for the API Management Service. At this time the only supported value is `applicationinsights`. Changing this forces a new resource to be created.
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
     * The Name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.
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
