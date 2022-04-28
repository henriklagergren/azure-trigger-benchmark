import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an IotHub Storage Container Endpoint
 *
 * > **NOTE:** Endpoints can be defined either directly on the `azure.iot.IoTHub` resource, or using the `azurerm_iothub_endpoint_*` resources - but the two ways of defining the endpoints cannot be used together. If both are used against the same IoTHub, spurious changes will occur. Also, defining a `azurerm_iothub_endpoint_*` resource and another endpoint of a different type directly on the `azure.iot.IoTHub` resource is not supported.
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
 * const exampleIoTHub = new azure.iot.IoTHub("exampleIoTHub", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: {
 *         name: "S1",
 *         capacity: "1",
 *     },
 * });
 * const exampleEndpointStorageContainer = new azure.iot.EndpointStorageContainer("exampleEndpointStorageContainer", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     iothubId: exampleIoTHub.id,
 *     containerName: "acctestcont",
 *     connectionString: exampleAccount.primaryBlobConnectionString,
 *     fileNameFormat: "{iothub}/{partition}_{YYYY}_{MM}_{DD}_{HH}_{mm}",
 *     batchFrequencyInSeconds: 60,
 *     maxChunkSizeInBytes: 10485760,
 *     encoding: "JSON",
 * });
 * ```
 *
 * ## Import
 *
 * IoTHub Storage Container Endpoint can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:iot/endpointStorageContainer:EndpointStorageContainer storage_container1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Devices/IotHubs/hub1/Endpoints/storage_container_endpoint1
 * ```
 */
export declare class EndpointStorageContainer extends pulumi.CustomResource {
    /**
     * Get an existing EndpointStorageContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EndpointStorageContainerState, opts?: pulumi.CustomResourceOptions): EndpointStorageContainer;
    /**
     * Returns true if the given object is an instance of EndpointStorageContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EndpointStorageContainer;
    /**
     * Type used to authenticate against the storage endpoint. Possible values are `keyBased` and `identityBased`. Defaults to `keyBased`.
     */
    readonly authenticationType: pulumi.Output<string | undefined>;
    /**
     * Time interval at which blobs are written to storage. Value should be between 60 and 720 seconds. Default value is 300 seconds.
     */
    readonly batchFrequencyInSeconds: pulumi.Output<number | undefined>;
    /**
     * The connection string for the endpoint. This attribute can only be specified and is mandatory when `authenticationType` is `keyBased`.
     */
    readonly connectionString: pulumi.Output<string | undefined>;
    /**
     * The name of storage container in the storage account.
     */
    readonly containerName: pulumi.Output<string>;
    /**
     * Encoding that is used to serialize messages to blobs. Supported values are `Avro`, `AvroDeflate` and `JSON`. Default value is `Avro`. Changing this forces a new resource to be created.
     */
    readonly encoding: pulumi.Output<string | undefined>;
    /**
     * URI of the Storage Container endpoint. This corresponds to the `primaryBlobEndpoint` of the parent storage account. This attribute can only be specified and is mandatory when `authenticationType` is `identityBased`.
     */
    readonly endpointUri: pulumi.Output<string | undefined>;
    /**
     * File name format for the blob. Default format is ``{iothub}/{partition}/{YYYY}/{MM}/{DD}/{HH}/{mm}``. All parameters are mandatory but can be reordered.
     */
    readonly fileNameFormat: pulumi.Output<string | undefined>;
    /**
     * ID of the User Managed Identity used to authenticate against the storage endpoint.
     */
    readonly identityId: pulumi.Output<string | undefined>;
    /**
     * The IoTHub ID for the endpoint.
     */
    readonly iothubId: pulumi.Output<string>;
    /**
     * The IoTHub name for the endpoint.
     *
     * @deprecated Deprecated in favour of `iothub_id`
     */
    readonly iothubName: pulumi.Output<string>;
    /**
     * Maximum number of bytes for each blob written to storage. Value should be between 10485760(10MB) and 524288000(500MB). Default value is 314572800(300MB).
     */
    readonly maxChunkSizeInBytes: pulumi.Output<number | undefined>;
    /**
     * The name of the endpoint. The name must be unique across endpoint types. The following names are reserved:  `events`, `operationsMonitoringEvents`, `fileNotifications` and `$default`.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group under which the Storage Container has been created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a EndpointStorageContainer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EndpointStorageContainerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering EndpointStorageContainer resources.
 */
export interface EndpointStorageContainerState {
    /**
     * Type used to authenticate against the storage endpoint. Possible values are `keyBased` and `identityBased`. Defaults to `keyBased`.
     */
    authenticationType?: pulumi.Input<string>;
    /**
     * Time interval at which blobs are written to storage. Value should be between 60 and 720 seconds. Default value is 300 seconds.
     */
    batchFrequencyInSeconds?: pulumi.Input<number>;
    /**
     * The connection string for the endpoint. This attribute can only be specified and is mandatory when `authenticationType` is `keyBased`.
     */
    connectionString?: pulumi.Input<string>;
    /**
     * The name of storage container in the storage account.
     */
    containerName?: pulumi.Input<string>;
    /**
     * Encoding that is used to serialize messages to blobs. Supported values are `Avro`, `AvroDeflate` and `JSON`. Default value is `Avro`. Changing this forces a new resource to be created.
     */
    encoding?: pulumi.Input<string>;
    /**
     * URI of the Storage Container endpoint. This corresponds to the `primaryBlobEndpoint` of the parent storage account. This attribute can only be specified and is mandatory when `authenticationType` is `identityBased`.
     */
    endpointUri?: pulumi.Input<string>;
    /**
     * File name format for the blob. Default format is ``{iothub}/{partition}/{YYYY}/{MM}/{DD}/{HH}/{mm}``. All parameters are mandatory but can be reordered.
     */
    fileNameFormat?: pulumi.Input<string>;
    /**
     * ID of the User Managed Identity used to authenticate against the storage endpoint.
     */
    identityId?: pulumi.Input<string>;
    /**
     * The IoTHub ID for the endpoint.
     */
    iothubId?: pulumi.Input<string>;
    /**
     * The IoTHub name for the endpoint.
     *
     * @deprecated Deprecated in favour of `iothub_id`
     */
    iothubName?: pulumi.Input<string>;
    /**
     * Maximum number of bytes for each blob written to storage. Value should be between 10485760(10MB) and 524288000(500MB). Default value is 314572800(300MB).
     */
    maxChunkSizeInBytes?: pulumi.Input<number>;
    /**
     * The name of the endpoint. The name must be unique across endpoint types. The following names are reserved:  `events`, `operationsMonitoringEvents`, `fileNotifications` and `$default`.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the Storage Container has been created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a EndpointStorageContainer resource.
 */
export interface EndpointStorageContainerArgs {
    /**
     * Type used to authenticate against the storage endpoint. Possible values are `keyBased` and `identityBased`. Defaults to `keyBased`.
     */
    authenticationType?: pulumi.Input<string>;
    /**
     * Time interval at which blobs are written to storage. Value should be between 60 and 720 seconds. Default value is 300 seconds.
     */
    batchFrequencyInSeconds?: pulumi.Input<number>;
    /**
     * The connection string for the endpoint. This attribute can only be specified and is mandatory when `authenticationType` is `keyBased`.
     */
    connectionString?: pulumi.Input<string>;
    /**
     * The name of storage container in the storage account.
     */
    containerName: pulumi.Input<string>;
    /**
     * Encoding that is used to serialize messages to blobs. Supported values are `Avro`, `AvroDeflate` and `JSON`. Default value is `Avro`. Changing this forces a new resource to be created.
     */
    encoding?: pulumi.Input<string>;
    /**
     * URI of the Storage Container endpoint. This corresponds to the `primaryBlobEndpoint` of the parent storage account. This attribute can only be specified and is mandatory when `authenticationType` is `identityBased`.
     */
    endpointUri?: pulumi.Input<string>;
    /**
     * File name format for the blob. Default format is ``{iothub}/{partition}/{YYYY}/{MM}/{DD}/{HH}/{mm}``. All parameters are mandatory but can be reordered.
     */
    fileNameFormat?: pulumi.Input<string>;
    /**
     * ID of the User Managed Identity used to authenticate against the storage endpoint.
     */
    identityId?: pulumi.Input<string>;
    /**
     * The IoTHub ID for the endpoint.
     */
    iothubId?: pulumi.Input<string>;
    /**
     * The IoTHub name for the endpoint.
     *
     * @deprecated Deprecated in favour of `iothub_id`
     */
    iothubName?: pulumi.Input<string>;
    /**
     * Maximum number of bytes for each blob written to storage. Value should be between 10485760(10MB) and 524288000(500MB). Default value is 314572800(300MB).
     */
    maxChunkSizeInBytes?: pulumi.Input<number>;
    /**
     * The name of the endpoint. The name must be unique across endpoint types. The following names are reserved:  `events`, `operationsMonitoringEvents`, `fileNotifications` and `$default`.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the Storage Container has been created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
