import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Stream Analytics Managed Private Endpoint.
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
 *     accountKind: "StorageV2",
 *     isHnsEnabled: "true",
 * });
 * const exampleCluster = new azure.streamanalytics.Cluster("exampleCluster", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     streamingCapacity: 36,
 * });
 * const exampleManagedPrivateEndpoint = new azure.streamanalytics.ManagedPrivateEndpoint("exampleManagedPrivateEndpoint", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     streamAnalyticsClusterName: exampleCluster.name,
 *     targetResourceId: exampleAccount.id,
 *     subresourceName: "blob",
 * });
 * ```
 *
 * ## Import
 *
 * Stream Analytics Private Endpoints can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:streamanalytics/managedPrivateEndpoint:ManagedPrivateEndpoint example /subscriptions/12345678-1234-9876-4563-123456789012/resourceGroups/resGroup1/providers/Microsoft.StreamAnalytics/clusters/cluster1/privateEndpoints/endpoint1
 * ```
 */
export declare class ManagedPrivateEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing ManagedPrivateEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagedPrivateEndpointState, opts?: pulumi.CustomResourceOptions): ManagedPrivateEndpoint;
    /**
     * Returns true if the given object is an instance of ManagedPrivateEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ManagedPrivateEndpoint;
    /**
     * The name which should be used for this Stream Analytics Managed Private Endpoint. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Managed Private Endpoint should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The name of the Stream Analytics Cluster where the Managed Private Endpoint should be created. Changing this forces a new resource to be created.
     */
    readonly streamAnalyticsClusterName: pulumi.Output<string>;
    /**
     * Specifies the sub resource name which the Stream Analytics Private Endpoint is able to connect to. Changing this forces a new resource to be created.
     */
    readonly subresourceName: pulumi.Output<string>;
    /**
     * The ID of the Private Link Enabled Remote Resource which this Stream Analytics Private endpoint should be connected to. Changing this forces a new resource to be created.
     */
    readonly targetResourceId: pulumi.Output<string>;
    /**
     * Create a ManagedPrivateEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedPrivateEndpointArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ManagedPrivateEndpoint resources.
 */
export interface ManagedPrivateEndpointState {
    /**
     * The name which should be used for this Stream Analytics Managed Private Endpoint. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Managed Private Endpoint should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Cluster where the Managed Private Endpoint should be created. Changing this forces a new resource to be created.
     */
    streamAnalyticsClusterName?: pulumi.Input<string>;
    /**
     * Specifies the sub resource name which the Stream Analytics Private Endpoint is able to connect to. Changing this forces a new resource to be created.
     */
    subresourceName?: pulumi.Input<string>;
    /**
     * The ID of the Private Link Enabled Remote Resource which this Stream Analytics Private endpoint should be connected to. Changing this forces a new resource to be created.
     */
    targetResourceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ManagedPrivateEndpoint resource.
 */
export interface ManagedPrivateEndpointArgs {
    /**
     * The name which should be used for this Stream Analytics Managed Private Endpoint. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Managed Private Endpoint should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Cluster where the Managed Private Endpoint should be created. Changing this forces a new resource to be created.
     */
    streamAnalyticsClusterName: pulumi.Input<string>;
    /**
     * Specifies the sub resource name which the Stream Analytics Private Endpoint is able to connect to. Changing this forces a new resource to be created.
     */
    subresourceName: pulumi.Input<string>;
    /**
     * The ID of the Private Link Enabled Remote Resource which this Stream Analytics Private endpoint should be connected to. Changing this forces a new resource to be created.
     */
    targetResourceId: pulumi.Input<string>;
}
