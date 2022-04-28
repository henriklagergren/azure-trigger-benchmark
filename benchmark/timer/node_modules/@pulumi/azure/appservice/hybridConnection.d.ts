import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an App Service Hybrid Connection for an existing App Service, Relay and Service Bus.
 *
 * ## Example Usage
 *
 * This example provisions an App Service, a Relay Hybrid Connection, and a Service Bus using their outputs to create the App Service Hybrid Connection.
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePlan = new azure.appservice.Plan("examplePlan", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         tier: "Standard",
 *         size: "S1",
 *     },
 * });
 * const exampleAppService = new azure.appservice.AppService("exampleAppService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     appServicePlanId: examplePlan.id,
 * });
 * const exampleNamespace = new azure.relay.Namespace("exampleNamespace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     skuName: "Standard",
 * });
 * const exampleHybridConnection = new azure.relay.HybridConnection("exampleHybridConnection", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     relayNamespaceName: exampleNamespace.name,
 *     userMetadata: "examplemetadata",
 * });
 * const exampleAppservice_hybridConnectionHybridConnection = new azure.appservice.HybridConnection("exampleAppservice/hybridConnectionHybridConnection", {
 *     appServiceName: exampleAppService.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     relayId: exampleHybridConnection.id,
 *     hostname: "testhostname.example",
 *     port: 8080,
 *     sendKeyName: "exampleSharedAccessKey",
 * });
 * ```
 *
 * ## Import
 *
 * App Service Hybrid Connections can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appservice/hybridConnection:HybridConnection example /subscriptions/00000000-0000-0000-0000-00000000000/resourceGroups/exampleResourceGroup1/providers/Microsoft.Web/sites/exampleAppService1/hybridConnectionNamespaces/exampleRN1/relays/exampleRHC1
 * ```
 */
export declare class HybridConnection extends pulumi.CustomResource {
    /**
     * Get an existing HybridConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HybridConnectionState, opts?: pulumi.CustomResourceOptions): HybridConnection;
    /**
     * Returns true if the given object is an instance of HybridConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is HybridConnection;
    /**
     * Specifies the name of the App Service. Changing this forces a new resource to be created.
     */
    readonly appServiceName: pulumi.Output<string>;
    /**
     * The hostname of the endpoint.
     */
    readonly hostname: pulumi.Output<string>;
    /**
     * The name of the Relay Namespace.
     */
    readonly namespaceName: pulumi.Output<string>;
    /**
     * The port of the endpoint.
     */
    readonly port: pulumi.Output<number>;
    /**
     * The ID of the Service Bus Relay. Changing this forces a new resource to be created.
     */
    readonly relayId: pulumi.Output<string>;
    readonly relayName: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the App Service.  Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The name of the Service Bus key which has Send permissions. Defaults to `RootManageSharedAccessKey`.
     */
    readonly sendKeyName: pulumi.Output<string | undefined>;
    /**
     * The value of the Service Bus Primary Access key.
     */
    readonly sendKeyValue: pulumi.Output<string>;
    /**
     * The name of the Service Bus namespace.
     */
    readonly serviceBusNamespace: pulumi.Output<string>;
    /**
     * The suffix for the service bus endpoint.
     */
    readonly serviceBusSuffix: pulumi.Output<string>;
    /**
     * Create a HybridConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HybridConnectionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering HybridConnection resources.
 */
export interface HybridConnectionState {
    /**
     * Specifies the name of the App Service. Changing this forces a new resource to be created.
     */
    appServiceName?: pulumi.Input<string>;
    /**
     * The hostname of the endpoint.
     */
    hostname?: pulumi.Input<string>;
    /**
     * The name of the Relay Namespace.
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * The port of the endpoint.
     */
    port?: pulumi.Input<number>;
    /**
     * The ID of the Service Bus Relay. Changing this forces a new resource to be created.
     */
    relayId?: pulumi.Input<string>;
    relayName?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the App Service.  Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The name of the Service Bus key which has Send permissions. Defaults to `RootManageSharedAccessKey`.
     */
    sendKeyName?: pulumi.Input<string>;
    /**
     * The value of the Service Bus Primary Access key.
     */
    sendKeyValue?: pulumi.Input<string>;
    /**
     * The name of the Service Bus namespace.
     */
    serviceBusNamespace?: pulumi.Input<string>;
    /**
     * The suffix for the service bus endpoint.
     */
    serviceBusSuffix?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a HybridConnection resource.
 */
export interface HybridConnectionArgs {
    /**
     * Specifies the name of the App Service. Changing this forces a new resource to be created.
     */
    appServiceName: pulumi.Input<string>;
    /**
     * The hostname of the endpoint.
     */
    hostname: pulumi.Input<string>;
    /**
     * The port of the endpoint.
     */
    port: pulumi.Input<number>;
    /**
     * The ID of the Service Bus Relay. Changing this forces a new resource to be created.
     */
    relayId: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the App Service.  Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Service Bus key which has Send permissions. Defaults to `RootManageSharedAccessKey`.
     */
    sendKeyName?: pulumi.Input<string>;
}
