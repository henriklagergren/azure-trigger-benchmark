import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Kusto (also known as Azure Data Explorer) IotHub Data Connection
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
 * const exampleIoTHub = new azure.iot.IoTHub("exampleIoTHub", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: {
 *         name: "B1",
 *         capacity: "1",
 *     },
 * });
 * const exampleSharedAccessPolicy = new azure.iot.SharedAccessPolicy("exampleSharedAccessPolicy", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     iothubName: exampleIoTHub.name,
 *     registryRead: true,
 * });
 * const exampleConsumerGroup = new azure.iot.ConsumerGroup("exampleConsumerGroup", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     iothubName: exampleIoTHub.name,
 *     eventhubEndpointName: "events",
 * });
 * const exampleIotHubDataConnection = new azure.kusto.IotHubDataConnection("exampleIotHubDataConnection", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     clusterName: exampleCluster.name,
 *     databaseName: exampleDatabase.name,
 *     iothubId: exampleIoTHub.id,
 *     consumerGroup: exampleConsumerGroup.name,
 *     sharedAccessPolicyName: exampleSharedAccessPolicy.name,
 *     eventSystemProperties: [
 *         "message-id",
 *         "sequence-number",
 *         "to",
 *     ],
 *     tableName: "my-table",
 *     mappingRuleName: "my-table-mapping",
 *     dataFormat: "JSON",
 * });
 * ```
 *
 * ## Import
 *
 * Kusto IotHub Data Connections can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:kusto/iotHubDataConnection:IotHubDataConnection example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Kusto/Clusters/cluster1/Databases/database1/DataConnections/dataConnection1
 * ```
 */
export declare class IotHubDataConnection extends pulumi.CustomResource {
    /**
     * Get an existing IotHubDataConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IotHubDataConnectionState, opts?: pulumi.CustomResourceOptions): IotHubDataConnection;
    /**
     * Returns true if the given object is an instance of IotHubDataConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IotHubDataConnection;
    /**
     * Specifies the name of the Kusto Cluster this data connection will be added to. Changing this forces a new resource to be created.
     */
    readonly clusterName: pulumi.Output<string>;
    /**
     * Specifies the IotHub consumer group this data connection will use for ingestion. Changing this forces a new resource to be created.
     */
    readonly consumerGroup: pulumi.Output<string>;
    /**
     * Specifies the data format of the IoTHub messages. Allowed values: `APACHEAVRO`, `AVRO`, `CSV`, `JSON`, `MULTIJSON`, `ORC`, `PARQUET`, `PSV`, `RAW`, `SCSV`, `SINGLEJSON`, `SOHSV`, `TSV`, `TSVE`, `TXT` and `W3CLOGFILE`.
     */
    readonly dataFormat: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Kusto Database this data connection will be added to. Changing this forces a new resource to be created.
     */
    readonly databaseName: pulumi.Output<string>;
    /**
     * Specifies the System Properties that each IoT Hub message should contain. Changing this forces a new resource to be created.
     */
    readonly eventSystemProperties: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the resource id of the IotHub this data connection will use for ingestion. Changing this forces a new resource to be created.
     */
    readonly iothubId: pulumi.Output<string>;
    /**
     * The location where the Kusto Database should be created. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the mapping rule used for the message ingestion. Mapping rule must exist before resource is created.
     */
    readonly mappingRuleName: pulumi.Output<string | undefined>;
    /**
     * The name of the Kusto IotHub Data Connection to create. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the Resource Group where the Kusto Database should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Specifies the IotHub Shared Access Policy this data connection will use for ingestion, which must have read permission. Changing this forces a new resource to be created.
     */
    readonly sharedAccessPolicyName: pulumi.Output<string>;
    /**
     * Specifies the target table name used for the message ingestion. Table must exist before resource is created.
     */
    readonly tableName: pulumi.Output<string | undefined>;
    /**
     * Create a IotHubDataConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotHubDataConnectionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IotHubDataConnection resources.
 */
export interface IotHubDataConnectionState {
    /**
     * Specifies the name of the Kusto Cluster this data connection will be added to. Changing this forces a new resource to be created.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Specifies the IotHub consumer group this data connection will use for ingestion. Changing this forces a new resource to be created.
     */
    consumerGroup?: pulumi.Input<string>;
    /**
     * Specifies the data format of the IoTHub messages. Allowed values: `APACHEAVRO`, `AVRO`, `CSV`, `JSON`, `MULTIJSON`, `ORC`, `PARQUET`, `PSV`, `RAW`, `SCSV`, `SINGLEJSON`, `SOHSV`, `TSV`, `TSVE`, `TXT` and `W3CLOGFILE`.
     */
    dataFormat?: pulumi.Input<string>;
    /**
     * Specifies the name of the Kusto Database this data connection will be added to. Changing this forces a new resource to be created.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * Specifies the System Properties that each IoT Hub message should contain. Changing this forces a new resource to be created.
     */
    eventSystemProperties?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the resource id of the IotHub this data connection will use for ingestion. Changing this forces a new resource to be created.
     */
    iothubId?: pulumi.Input<string>;
    /**
     * The location where the Kusto Database should be created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the mapping rule used for the message ingestion. Mapping rule must exist before resource is created.
     */
    mappingRuleName?: pulumi.Input<string>;
    /**
     * The name of the Kusto IotHub Data Connection to create. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the Resource Group where the Kusto Database should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies the IotHub Shared Access Policy this data connection will use for ingestion, which must have read permission. Changing this forces a new resource to be created.
     */
    sharedAccessPolicyName?: pulumi.Input<string>;
    /**
     * Specifies the target table name used for the message ingestion. Table must exist before resource is created.
     */
    tableName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IotHubDataConnection resource.
 */
export interface IotHubDataConnectionArgs {
    /**
     * Specifies the name of the Kusto Cluster this data connection will be added to. Changing this forces a new resource to be created.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Specifies the IotHub consumer group this data connection will use for ingestion. Changing this forces a new resource to be created.
     */
    consumerGroup: pulumi.Input<string>;
    /**
     * Specifies the data format of the IoTHub messages. Allowed values: `APACHEAVRO`, `AVRO`, `CSV`, `JSON`, `MULTIJSON`, `ORC`, `PARQUET`, `PSV`, `RAW`, `SCSV`, `SINGLEJSON`, `SOHSV`, `TSV`, `TSVE`, `TXT` and `W3CLOGFILE`.
     */
    dataFormat?: pulumi.Input<string>;
    /**
     * Specifies the name of the Kusto Database this data connection will be added to. Changing this forces a new resource to be created.
     */
    databaseName: pulumi.Input<string>;
    /**
     * Specifies the System Properties that each IoT Hub message should contain. Changing this forces a new resource to be created.
     */
    eventSystemProperties?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the resource id of the IotHub this data connection will use for ingestion. Changing this forces a new resource to be created.
     */
    iothubId: pulumi.Input<string>;
    /**
     * The location where the Kusto Database should be created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the mapping rule used for the message ingestion. Mapping rule must exist before resource is created.
     */
    mappingRuleName?: pulumi.Input<string>;
    /**
     * The name of the Kusto IotHub Data Connection to create. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the Resource Group where the Kusto Database should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the IotHub Shared Access Policy this data connection will use for ingestion, which must have read permission. Changing this forces a new resource to be created.
     */
    sharedAccessPolicyName: pulumi.Input<string>;
    /**
     * Specifies the target table name used for the message ingestion. Table must exist before resource is created.
     */
    tableName?: pulumi.Input<string>;
}
