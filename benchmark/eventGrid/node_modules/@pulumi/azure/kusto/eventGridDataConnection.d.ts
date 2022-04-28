import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Kusto (also known as Azure Data Explorer) Event Grid Data Connection
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleCluster = new azure.kusto.Cluster("exampleCluster", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         name: "Standard_D13_v2",
 *         capacity: 2,
 *     },
 * });
 * const exampleDatabase = new azure.kusto.Database("exampleDatabase", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     clusterName: exampleCluster.name,
 *     hotCachePeriod: "P7D",
 *     softDeletePeriod: "P31D",
 * });
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "GRS",
 * });
 * const testEventHubNamespace = new azure.eventhub.EventHubNamespace("testEventHubNamespace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard",
 * });
 * const testEventHub = new azure.eventhub.EventHub("testEventHub", {
 *     namespaceName: azurerm_eventhub_namespace.example.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     partitionCount: 1,
 *     messageRetention: 1,
 * });
 * const exampleConsumerGroup = new azure.eventhub.ConsumerGroup("exampleConsumerGroup", {
 *     namespaceName: azurerm_eventhub_namespace.example.name,
 *     eventhubName: azurerm_eventhub.example.name,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleEventSubscription = new azure.eventgrid.EventSubscription("exampleEventSubscription", {
 *     scope: exampleAccount.id,
 *     eventhubEndpointId: azurerm_eventhub.example.id,
 *     eventDeliverySchema: "EventGridSchema",
 *     includedEventTypes: [
 *         "Microsoft.Storage.BlobCreated",
 *         "Microsoft.Storage.BlobRenamed",
 *     ],
 *     retryPolicy: {
 *         eventTimeToLive: 144,
 *         maxDeliveryAttempts: 10,
 *     },
 * });
 * const exampleEventGridDataConnection = new azure.kusto.EventGridDataConnection("exampleEventGridDataConnection", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     clusterName: exampleCluster.name,
 *     databaseName: exampleDatabase.name,
 *     storageAccountId: exampleAccount.id,
 *     eventhubId: azurerm_eventhub.example.id,
 *     eventhubConsumerGroupName: exampleConsumerGroup.name,
 *     tableName: "my-table",
 *     mappingRuleName: "my-table-mapping",
 *     dataFormat: "JSON",
 * }, {
 *     dependsOn: [exampleEventSubscription],
 * });
 * ```
 *
 * ## Import
 *
 * Kusto Event Grid Data Connections can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:kusto/eventGridDataConnection:EventGridDataConnection example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Kusto/Clusters/cluster1/Databases/database1/DataConnections/dataConnection1
 * ```
 */
export declare class EventGridDataConnection extends pulumi.CustomResource {
    /**
     * Get an existing EventGridDataConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventGridDataConnectionState, opts?: pulumi.CustomResourceOptions): EventGridDataConnection;
    /**
     * Returns true if the given object is an instance of EventGridDataConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EventGridDataConnection;
    /**
     * Specifies the blob storage event type that needs to be processed. Possible
     * Values are `Microsoft.Storage.BlobCreated` and `Microsoft.Storage.BlobRenamed`. Defaults
     * to `Microsoft.Storage.BlobCreated`.
     */
    readonly blobStorageEventType: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Kusto Cluster this data connection will be added to. Changing this forces a new resource to be created.
     */
    readonly clusterName: pulumi.Output<string>;
    /**
     * Specifies the data format of the EventHub messages. Allowed values: `AVRO`, `CSV`, `JSON`, `MULTIJSON`, `PSV`, `RAW`, `SCSV`, `SINGLEJSON`, `SOHSV`, `TSV` and `TXT`
     */
    readonly dataFormat: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Kusto Database this data connection will be added to. Changing this forces a new resource to be created.
     */
    readonly databaseName: pulumi.Output<string>;
    /**
     * Specifies the Event Hub consumer group this data connection will use for
     * ingestion. Changing this forces a new resource to be created.
     */
    readonly eventhubConsumerGroupName: pulumi.Output<string>;
    /**
     * Specifies the resource id of the Event Hub this data connection will use for ingestion.
     * Changing this forces a new resource to be created.
     */
    readonly eventhubId: pulumi.Output<string>;
    /**
     * The location where the Kusto Database should be created. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the mapping rule used for the message ingestion. Mapping rule must exist before resource is created.
     */
    readonly mappingRuleName: pulumi.Output<string | undefined>;
    /**
     * The name of the Kusto Event Grid Data Connection to create. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the Resource Group where the Kusto Database should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * is the first record of every file ignored? Defaults to `false`.
     */
    readonly skipFirstRecord: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the resource id of the Storage Account this data connection will use for ingestion. Changing this forces a new resource to be created.
     */
    readonly storageAccountId: pulumi.Output<string>;
    /**
     * Specifies the target table name used for the message ingestion. Table must exist before resource is created.
     */
    readonly tableName: pulumi.Output<string | undefined>;
    /**
     * Create a EventGridDataConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventGridDataConnectionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering EventGridDataConnection resources.
 */
export interface EventGridDataConnectionState {
    /**
     * Specifies the blob storage event type that needs to be processed. Possible
     * Values are `Microsoft.Storage.BlobCreated` and `Microsoft.Storage.BlobRenamed`. Defaults
     * to `Microsoft.Storage.BlobCreated`.
     */
    blobStorageEventType?: pulumi.Input<string>;
    /**
     * Specifies the name of the Kusto Cluster this data connection will be added to. Changing this forces a new resource to be created.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Specifies the data format of the EventHub messages. Allowed values: `AVRO`, `CSV`, `JSON`, `MULTIJSON`, `PSV`, `RAW`, `SCSV`, `SINGLEJSON`, `SOHSV`, `TSV` and `TXT`
     */
    dataFormat?: pulumi.Input<string>;
    /**
     * Specifies the name of the Kusto Database this data connection will be added to. Changing this forces a new resource to be created.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * Specifies the Event Hub consumer group this data connection will use for
     * ingestion. Changing this forces a new resource to be created.
     */
    eventhubConsumerGroupName?: pulumi.Input<string>;
    /**
     * Specifies the resource id of the Event Hub this data connection will use for ingestion.
     * Changing this forces a new resource to be created.
     */
    eventhubId?: pulumi.Input<string>;
    /**
     * The location where the Kusto Database should be created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the mapping rule used for the message ingestion. Mapping rule must exist before resource is created.
     */
    mappingRuleName?: pulumi.Input<string>;
    /**
     * The name of the Kusto Event Grid Data Connection to create. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the Resource Group where the Kusto Database should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * is the first record of every file ignored? Defaults to `false`.
     */
    skipFirstRecord?: pulumi.Input<boolean>;
    /**
     * Specifies the resource id of the Storage Account this data connection will use for ingestion. Changing this forces a new resource to be created.
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * Specifies the target table name used for the message ingestion. Table must exist before resource is created.
     */
    tableName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a EventGridDataConnection resource.
 */
export interface EventGridDataConnectionArgs {
    /**
     * Specifies the blob storage event type that needs to be processed. Possible
     * Values are `Microsoft.Storage.BlobCreated` and `Microsoft.Storage.BlobRenamed`. Defaults
     * to `Microsoft.Storage.BlobCreated`.
     */
    blobStorageEventType?: pulumi.Input<string>;
    /**
     * Specifies the name of the Kusto Cluster this data connection will be added to. Changing this forces a new resource to be created.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Specifies the data format of the EventHub messages. Allowed values: `AVRO`, `CSV`, `JSON`, `MULTIJSON`, `PSV`, `RAW`, `SCSV`, `SINGLEJSON`, `SOHSV`, `TSV` and `TXT`
     */
    dataFormat?: pulumi.Input<string>;
    /**
     * Specifies the name of the Kusto Database this data connection will be added to. Changing this forces a new resource to be created.
     */
    databaseName: pulumi.Input<string>;
    /**
     * Specifies the Event Hub consumer group this data connection will use for
     * ingestion. Changing this forces a new resource to be created.
     */
    eventhubConsumerGroupName: pulumi.Input<string>;
    /**
     * Specifies the resource id of the Event Hub this data connection will use for ingestion.
     * Changing this forces a new resource to be created.
     */
    eventhubId: pulumi.Input<string>;
    /**
     * The location where the Kusto Database should be created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the mapping rule used for the message ingestion. Mapping rule must exist before resource is created.
     */
    mappingRuleName?: pulumi.Input<string>;
    /**
     * The name of the Kusto Event Grid Data Connection to create. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the Resource Group where the Kusto Database should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * is the first record of every file ignored? Defaults to `false`.
     */
    skipFirstRecord?: pulumi.Input<boolean>;
    /**
     * Specifies the resource id of the Storage Account this data connection will use for ingestion. Changing this forces a new resource to be created.
     */
    storageAccountId: pulumi.Input<string>;
    /**
     * Specifies the target table name used for the message ingestion. Table must exist before resource is created.
     */
    tableName?: pulumi.Input<string>;
}
