import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an IotHub
 *
 * > **NOTE:** Endpoints can be defined either directly on the `azure.iot.IoTHub` resource, or using the `azurerm_iothub_endpoint_*` resources - but the two ways of defining the endpoints cannot be used together. If both are used against the same IoTHub, spurious changes will occur. Also, defining a `azurerm_iothub_endpoint_*` resource and another endpoint of a different type directly on the `azure.iot.IoTHub` resource is not supported.
 *
 * > **NOTE:** Routes can be defined either directly on the `azure.iot.IoTHub` resource, or using the `azure.iot.Route` resource - but the two cannot be used together. If both are used against the same IoTHub, spurious changes will occur.
 *
 * > **NOTE:** Enrichments can be defined either directly on the `azure.iot.IoTHub` resource, or using the `azure.iot.Enrichment` resource - but the two cannot be used together. If both are used against the same IoTHub, spurious changes will occur.
 *
 * > **NOTE:** Fallback route can be defined either directly on the `azure.iot.IoTHub` resource, or using the `azure.iot.FallbackRoute` resource - but the two cannot be used together. If both are used against the same IoTHub, spurious changes will occur.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleContainer = new azure.storage.Container("exampleContainer", {
 *     storageAccountName: exampleAccount.name,
 *     containerAccessType: "private",
 * });
 * const exampleEventHubNamespace = new azure.eventhub.EventHubNamespace("exampleEventHubNamespace", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: "Basic",
 * });
 * const exampleEventHub = new azure.eventhub.EventHub("exampleEventHub", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     namespaceName: exampleEventHubNamespace.name,
 *     partitionCount: 2,
 *     messageRetention: 1,
 * });
 * const exampleAuthorizationRule = new azure.eventhub.AuthorizationRule("exampleAuthorizationRule", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     namespaceName: exampleEventHubNamespace.name,
 *     eventhubName: exampleEventHub.name,
 *     send: true,
 * });
 * const exampleIoTHub = new azure.iot.IoTHub("exampleIoTHub", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: {
 *         name: "S1",
 *         capacity: "1",
 *     },
 *     endpoints: [
 *         {
 *             type: "AzureIotHub.StorageContainer",
 *             connectionString: exampleAccount.primaryBlobConnectionString,
 *             name: "export",
 *             batchFrequencyInSeconds: 60,
 *             maxChunkSizeInBytes: 10485760,
 *             containerName: exampleContainer.name,
 *             encoding: "Avro",
 *             fileNameFormat: "{iothub}/{partition}_{YYYY}_{MM}_{DD}_{HH}_{mm}",
 *         },
 *         {
 *             type: "AzureIotHub.EventHub",
 *             connectionString: exampleAuthorizationRule.primaryConnectionString,
 *             name: "export2",
 *         },
 *     ],
 *     routes: [
 *         {
 *             name: "export",
 *             source: "DeviceMessages",
 *             condition: "true",
 *             endpointNames: ["export"],
 *             enabled: true,
 *         },
 *         {
 *             name: "export2",
 *             source: "DeviceMessages",
 *             condition: "true",
 *             endpointNames: ["export2"],
 *             enabled: true,
 *         },
 *     ],
 *     enrichments: [{
 *         key: "tenant",
 *         value: `$twin.tags.Tenant`,
 *         endpointNames: [
 *             "export",
 *             "export2",
 *         ],
 *     }],
 *     cloudToDevice: {
 *         maxDeliveryCount: 30,
 *         defaultTtl: "PT1H",
 *         feedbacks: [{
 *             timeToLive: "PT1H10M",
 *             maxDeliveryCount: 15,
 *             lockDuration: "PT30S",
 *         }],
 *     },
 *     tags: {
 *         purpose: "testing",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * IoTHubs can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:iot/ioTHub:IoTHub hub1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Devices/IotHubs/hub1
 * ```
 */
export declare class IoTHub extends pulumi.CustomResource {
    /**
     * Get an existing IoTHub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IoTHubState, opts?: pulumi.CustomResourceOptions): IoTHub;
    /**
     * Returns true if the given object is an instance of IoTHub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IoTHub;
    /**
     * A `cloudToDevice` block as defined below.
     */
    readonly cloudToDevice: pulumi.Output<outputs.iot.IoTHubCloudToDevice>;
    /**
     * An `endpoint` block as defined below.
     */
    readonly endpoints: pulumi.Output<outputs.iot.IoTHubEndpoint[]>;
    /**
     * A `enrichment` block as defined below.
     */
    readonly enrichments: pulumi.Output<outputs.iot.IoTHubEnrichment[]>;
    /**
     * The EventHub compatible endpoint for events data
     */
    readonly eventHubEventsEndpoint: pulumi.Output<string>;
    /**
     * The EventHub namespace for events data
     */
    readonly eventHubEventsNamespace: pulumi.Output<string>;
    /**
     * The EventHub compatible path for events data
     */
    readonly eventHubEventsPath: pulumi.Output<string>;
    /**
     * The EventHub compatible endpoint for operational data
     */
    readonly eventHubOperationsEndpoint: pulumi.Output<string>;
    /**
     * The EventHub compatible path for operational data
     */
    readonly eventHubOperationsPath: pulumi.Output<string>;
    /**
     * The number of device-to-cloud partitions used by backing event hubs. Must be between `2` and `128`.
     */
    readonly eventHubPartitionCount: pulumi.Output<number>;
    /**
     * The event hub retention to use in days. Must be between `1` and `7`.
     */
    readonly eventHubRetentionInDays: pulumi.Output<number>;
    /**
     * A `fallbackRoute` block as defined below. If the fallback route is enabled, messages that don't match any of the supplied routes are automatically sent to this route. Defaults to messages/events.
     */
    readonly fallbackRoute: pulumi.Output<outputs.iot.IoTHubFallbackRoute>;
    /**
     * A `fileUpload` block as defined below.
     */
    readonly fileUpload: pulumi.Output<outputs.iot.IoTHubFileUpload | undefined>;
    /**
     * The hostname of the IotHub Resource.
     */
    readonly hostname: pulumi.Output<string>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.iot.IoTHubIdentity | undefined>;
    /**
     * One or more `ipFilterRule` blocks as defined below.
     *
     * @deprecated This property block is deprecated in favour of `network_rule_set` and will be removed in version 3.0 of the provider.
     */
    readonly ipFilterRules: pulumi.Output<outputs.iot.IoTHubIpFilterRule[] | undefined>;
    /**
     * Specifies the supported Azure location where the resource has to be created. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the minimum TLS version to support for this hub. The only valid value is `1.2`. Changing this forces a new resource to be created.
     */
    readonly minTlsVersion: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `networkRuleSet` block as defined below.
     */
    readonly networkRuleSets: pulumi.Output<outputs.iot.IoTHubNetworkRuleSet[] | undefined>;
    /**
     * Is the IotHub resource accessible from a public network?
     */
    readonly publicNetworkAccessEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource group under which the IotHub resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `route` block as defined below.
     */
    readonly routes: pulumi.Output<outputs.iot.IoTHubRoute[]>;
    /**
     * One or more `sharedAccessPolicy` blocks as defined below.
     */
    readonly sharedAccessPolicies: pulumi.Output<outputs.iot.IoTHubSharedAccessPolicy[]>;
    /**
     * A `sku` block as defined below.
     */
    readonly sku: pulumi.Output<outputs.iot.IoTHubSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of the endpoint. Possible values are `AzureIotHub.StorageContainer`, `AzureIotHub.ServiceBusQueue`, `AzureIotHub.ServiceBusTopic` or `AzureIotHub.EventHub`.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a IoTHub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IoTHubArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IoTHub resources.
 */
export interface IoTHubState {
    /**
     * A `cloudToDevice` block as defined below.
     */
    cloudToDevice?: pulumi.Input<inputs.iot.IoTHubCloudToDevice>;
    /**
     * An `endpoint` block as defined below.
     */
    endpoints?: pulumi.Input<pulumi.Input<inputs.iot.IoTHubEndpoint>[]>;
    /**
     * A `enrichment` block as defined below.
     */
    enrichments?: pulumi.Input<pulumi.Input<inputs.iot.IoTHubEnrichment>[]>;
    /**
     * The EventHub compatible endpoint for events data
     */
    eventHubEventsEndpoint?: pulumi.Input<string>;
    /**
     * The EventHub namespace for events data
     */
    eventHubEventsNamespace?: pulumi.Input<string>;
    /**
     * The EventHub compatible path for events data
     */
    eventHubEventsPath?: pulumi.Input<string>;
    /**
     * The EventHub compatible endpoint for operational data
     */
    eventHubOperationsEndpoint?: pulumi.Input<string>;
    /**
     * The EventHub compatible path for operational data
     */
    eventHubOperationsPath?: pulumi.Input<string>;
    /**
     * The number of device-to-cloud partitions used by backing event hubs. Must be between `2` and `128`.
     */
    eventHubPartitionCount?: pulumi.Input<number>;
    /**
     * The event hub retention to use in days. Must be between `1` and `7`.
     */
    eventHubRetentionInDays?: pulumi.Input<number>;
    /**
     * A `fallbackRoute` block as defined below. If the fallback route is enabled, messages that don't match any of the supplied routes are automatically sent to this route. Defaults to messages/events.
     */
    fallbackRoute?: pulumi.Input<inputs.iot.IoTHubFallbackRoute>;
    /**
     * A `fileUpload` block as defined below.
     */
    fileUpload?: pulumi.Input<inputs.iot.IoTHubFileUpload>;
    /**
     * The hostname of the IotHub Resource.
     */
    hostname?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.iot.IoTHubIdentity>;
    /**
     * One or more `ipFilterRule` blocks as defined below.
     *
     * @deprecated This property block is deprecated in favour of `network_rule_set` and will be removed in version 3.0 of the provider.
     */
    ipFilterRules?: pulumi.Input<pulumi.Input<inputs.iot.IoTHubIpFilterRule>[]>;
    /**
     * Specifies the supported Azure location where the resource has to be created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the minimum TLS version to support for this hub. The only valid value is `1.2`. Changing this forces a new resource to be created.
     */
    minTlsVersion?: pulumi.Input<string>;
    /**
     * Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `networkRuleSet` block as defined below.
     */
    networkRuleSets?: pulumi.Input<pulumi.Input<inputs.iot.IoTHubNetworkRuleSet>[]>;
    /**
     * Is the IotHub resource accessible from a public network?
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the resource group under which the IotHub resource has to be created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `route` block as defined below.
     */
    routes?: pulumi.Input<pulumi.Input<inputs.iot.IoTHubRoute>[]>;
    /**
     * One or more `sharedAccessPolicy` blocks as defined below.
     */
    sharedAccessPolicies?: pulumi.Input<pulumi.Input<inputs.iot.IoTHubSharedAccessPolicy>[]>;
    /**
     * A `sku` block as defined below.
     */
    sku?: pulumi.Input<inputs.iot.IoTHubSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The type of the endpoint. Possible values are `AzureIotHub.StorageContainer`, `AzureIotHub.ServiceBusQueue`, `AzureIotHub.ServiceBusTopic` or `AzureIotHub.EventHub`.
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IoTHub resource.
 */
export interface IoTHubArgs {
    /**
     * A `cloudToDevice` block as defined below.
     */
    cloudToDevice?: pulumi.Input<inputs.iot.IoTHubCloudToDevice>;
    /**
     * An `endpoint` block as defined below.
     */
    endpoints?: pulumi.Input<pulumi.Input<inputs.iot.IoTHubEndpoint>[]>;
    /**
     * A `enrichment` block as defined below.
     */
    enrichments?: pulumi.Input<pulumi.Input<inputs.iot.IoTHubEnrichment>[]>;
    /**
     * The number of device-to-cloud partitions used by backing event hubs. Must be between `2` and `128`.
     */
    eventHubPartitionCount?: pulumi.Input<number>;
    /**
     * The event hub retention to use in days. Must be between `1` and `7`.
     */
    eventHubRetentionInDays?: pulumi.Input<number>;
    /**
     * A `fallbackRoute` block as defined below. If the fallback route is enabled, messages that don't match any of the supplied routes are automatically sent to this route. Defaults to messages/events.
     */
    fallbackRoute?: pulumi.Input<inputs.iot.IoTHubFallbackRoute>;
    /**
     * A `fileUpload` block as defined below.
     */
    fileUpload?: pulumi.Input<inputs.iot.IoTHubFileUpload>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.iot.IoTHubIdentity>;
    /**
     * One or more `ipFilterRule` blocks as defined below.
     *
     * @deprecated This property block is deprecated in favour of `network_rule_set` and will be removed in version 3.0 of the provider.
     */
    ipFilterRules?: pulumi.Input<pulumi.Input<inputs.iot.IoTHubIpFilterRule>[]>;
    /**
     * Specifies the supported Azure location where the resource has to be created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the minimum TLS version to support for this hub. The only valid value is `1.2`. Changing this forces a new resource to be created.
     */
    minTlsVersion?: pulumi.Input<string>;
    /**
     * Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `networkRuleSet` block as defined below.
     */
    networkRuleSets?: pulumi.Input<pulumi.Input<inputs.iot.IoTHubNetworkRuleSet>[]>;
    /**
     * Is the IotHub resource accessible from a public network?
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the resource group under which the IotHub resource has to be created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `route` block as defined below.
     */
    routes?: pulumi.Input<pulumi.Input<inputs.iot.IoTHubRoute>[]>;
    /**
     * A `sku` block as defined below.
     */
    sku: pulumi.Input<inputs.iot.IoTHubSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
