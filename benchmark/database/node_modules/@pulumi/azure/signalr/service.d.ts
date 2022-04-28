import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure SignalR service.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West US"});
 * const exampleService = new azure.signalr.Service("exampleService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         name: "Free_F1",
 *         capacity: 1,
 *     },
 *     cors: [{
 *         allowedOrigins: ["http://www.example.com"],
 *     }],
 *     connectivityLogsEnabled: true,
 *     messagingLogsEnabled: true,
 *     serviceMode: "Default",
 *     upstreamEndpoints: [{
 *         categoryPatterns: [
 *             "connections",
 *             "messages",
 *         ],
 *         eventPatterns: ["*"],
 *         hubPatterns: ["hub1"],
 *         urlTemplate: "http://foo.com",
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * SignalR services can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:signalr/service:Service example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/terraform-signalr/providers/Microsoft.SignalRService/signalR/tfex-signalr
 * ```
 */
export declare class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceState, opts?: pulumi.CustomResourceOptions): Service;
    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Service;
    /**
     * Specifies if Connectivity Logs are enabled or not. Defaults to `false`.
     */
    readonly connectivityLogsEnabled: pulumi.Output<boolean>;
    /**
     * A `cors` block as documented below.
     */
    readonly cors: pulumi.Output<outputs.signalr.ServiceCor[]>;
    /**
     * A `features` block as documented below.
     *
     * @deprecated Deprecated in favour of `connectivity_logs_enabled`, `messaging_logs_enabled`, `live_trace_enabled` and `service_mode`
     */
    readonly features: pulumi.Output<outputs.signalr.ServiceFeature[]>;
    /**
     * The FQDN of the SignalR service.
     */
    readonly hostname: pulumi.Output<string>;
    /**
     * The publicly accessible IP of the SignalR service.
     */
    readonly ipAddress: pulumi.Output<string>;
    /**
     * Specifies if Live Trace is enabled or not. Defaults to `false`.
     */
    readonly liveTraceEnabled: pulumi.Output<boolean>;
    /**
     * Specifies the supported Azure location where the SignalR service exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies if Messaging Logs are enabled or not. Defaults to `false`.
     */
    readonly messagingLogsEnabled: pulumi.Output<boolean>;
    /**
     * The name of the SignalR service. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The primary access key for the SignalR service.
     */
    readonly primaryAccessKey: pulumi.Output<string>;
    /**
     * The primary connection string for the SignalR service.
     */
    readonly primaryConnectionString: pulumi.Output<string>;
    /**
     * The publicly accessible port of the SignalR service which is designed for browser/client use.
     */
    readonly publicPort: pulumi.Output<number>;
    /**
     * The name of the resource group in which to create the SignalR service. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The secondary access key for the SignalR service.
     */
    readonly secondaryAccessKey: pulumi.Output<string>;
    /**
     * The secondary connection string for the SignalR service.
     */
    readonly secondaryConnectionString: pulumi.Output<string>;
    /**
     * The publicly accessible port of the SignalR service which is designed for customer server side use.
     */
    readonly serverPort: pulumi.Output<number>;
    /**
     * Specifies the service mode. Possible values are `Classic`, `Default` and `Serverless`. Defaults to `Default`.
     */
    readonly serviceMode: pulumi.Output<string>;
    /**
     * A `sku` block as documented below.
     */
    readonly sku: pulumi.Output<outputs.signalr.ServiceSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * An `upstreamEndpoint` block as documented below. Using this block requires the SignalR service to be Serverless. When creating multiple blocks they will be processed in the order they are defined in.
     */
    readonly upstreamEndpoints: pulumi.Output<outputs.signalr.ServiceUpstreamEndpoint[] | undefined>;
    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Service resources.
 */
export interface ServiceState {
    /**
     * Specifies if Connectivity Logs are enabled or not. Defaults to `false`.
     */
    connectivityLogsEnabled?: pulumi.Input<boolean>;
    /**
     * A `cors` block as documented below.
     */
    cors?: pulumi.Input<pulumi.Input<inputs.signalr.ServiceCor>[]>;
    /**
     * A `features` block as documented below.
     *
     * @deprecated Deprecated in favour of `connectivity_logs_enabled`, `messaging_logs_enabled`, `live_trace_enabled` and `service_mode`
     */
    features?: pulumi.Input<pulumi.Input<inputs.signalr.ServiceFeature>[]>;
    /**
     * The FQDN of the SignalR service.
     */
    hostname?: pulumi.Input<string>;
    /**
     * The publicly accessible IP of the SignalR service.
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * Specifies if Live Trace is enabled or not. Defaults to `false`.
     */
    liveTraceEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the SignalR service exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies if Messaging Logs are enabled or not. Defaults to `false`.
     */
    messagingLogsEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the SignalR service. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The primary access key for the SignalR service.
     */
    primaryAccessKey?: pulumi.Input<string>;
    /**
     * The primary connection string for the SignalR service.
     */
    primaryConnectionString?: pulumi.Input<string>;
    /**
     * The publicly accessible port of the SignalR service which is designed for browser/client use.
     */
    publicPort?: pulumi.Input<number>;
    /**
     * The name of the resource group in which to create the SignalR service. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The secondary access key for the SignalR service.
     */
    secondaryAccessKey?: pulumi.Input<string>;
    /**
     * The secondary connection string for the SignalR service.
     */
    secondaryConnectionString?: pulumi.Input<string>;
    /**
     * The publicly accessible port of the SignalR service which is designed for customer server side use.
     */
    serverPort?: pulumi.Input<number>;
    /**
     * Specifies the service mode. Possible values are `Classic`, `Default` and `Serverless`. Defaults to `Default`.
     */
    serviceMode?: pulumi.Input<string>;
    /**
     * A `sku` block as documented below.
     */
    sku?: pulumi.Input<inputs.signalr.ServiceSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * An `upstreamEndpoint` block as documented below. Using this block requires the SignalR service to be Serverless. When creating multiple blocks they will be processed in the order they are defined in.
     */
    upstreamEndpoints?: pulumi.Input<pulumi.Input<inputs.signalr.ServiceUpstreamEndpoint>[]>;
}
/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * Specifies if Connectivity Logs are enabled or not. Defaults to `false`.
     */
    connectivityLogsEnabled?: pulumi.Input<boolean>;
    /**
     * A `cors` block as documented below.
     */
    cors?: pulumi.Input<pulumi.Input<inputs.signalr.ServiceCor>[]>;
    /**
     * A `features` block as documented below.
     *
     * @deprecated Deprecated in favour of `connectivity_logs_enabled`, `messaging_logs_enabled`, `live_trace_enabled` and `service_mode`
     */
    features?: pulumi.Input<pulumi.Input<inputs.signalr.ServiceFeature>[]>;
    /**
     * Specifies if Live Trace is enabled or not. Defaults to `false`.
     */
    liveTraceEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the SignalR service exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies if Messaging Logs are enabled or not. Defaults to `false`.
     */
    messagingLogsEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the SignalR service. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the SignalR service. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the service mode. Possible values are `Classic`, `Default` and `Serverless`. Defaults to `Default`.
     */
    serviceMode?: pulumi.Input<string>;
    /**
     * A `sku` block as documented below.
     */
    sku: pulumi.Input<inputs.signalr.ServiceSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * An `upstreamEndpoint` block as documented below. Using this block requires the SignalR service to be Serverless. When creating multiple blocks they will be processed in the order they are defined in.
     */
    upstreamEndpoints?: pulumi.Input<pulumi.Input<inputs.signalr.ServiceUpstreamEndpoint>[]>;
}
