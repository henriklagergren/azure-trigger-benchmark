import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Data Share Kusto Cluster Dataset.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.datashare.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     identity: {
 *         type: "SystemAssigned",
 *     },
 * });
 * const exampleShare = new azure.datashare.Share("exampleShare", {
 *     accountId: exampleAccount.id,
 *     kind: "InPlace",
 * });
 * const exampleCluster = new azure.kusto.Cluster("exampleCluster", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         name: "Dev(No SLA)_Standard_D11_v2",
 *         capacity: 1,
 *     },
 * });
 * const exampleAssignment = new azure.authorization.Assignment("exampleAssignment", {
 *     scope: exampleCluster.id,
 *     roleDefinitionName: "Contributor",
 *     principalId: exampleAccount.identity.apply(identity => identity.principalId),
 * });
 * const exampleDatasetKustoCluster = new azure.datashare.DatasetKustoCluster("exampleDatasetKustoCluster", {
 *     shareId: exampleShare.id,
 *     kustoClusterId: exampleCluster.id,
 * }, {
 *     dependsOn: [exampleAssignment],
 * });
 * ```
 *
 * ## Import
 *
 * Data Share Kusto Cluster Datasets can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datashare/datasetKustoCluster:DatasetKustoCluster example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DataShare/accounts/account1/shares/share1/dataSets/dataSet1
 * ```
 */
export declare class DatasetKustoCluster extends pulumi.CustomResource {
    /**
     * Get an existing DatasetKustoCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatasetKustoClusterState, opts?: pulumi.CustomResourceOptions): DatasetKustoCluster;
    /**
     * Returns true if the given object is an instance of DatasetKustoCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DatasetKustoCluster;
    /**
     * The name of the Data Share Dataset.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * The resource ID of the Kusto Cluster to be shared with the receiver. Changing this forces a new Data Share Kusto Cluster Dataset to be created.
     */
    readonly kustoClusterId: pulumi.Output<string>;
    /**
     * The location of the Kusto Cluster.
     */
    readonly kustoClusterLocation: pulumi.Output<string>;
    /**
     * The name which should be used for this Data Share Kusto Cluster Dataset. Changing this forces a new Data Share Kusto Cluster Dataset to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The resource ID of the Data Share where this Data Share Kusto Cluster Dataset should be created. Changing this forces a new Data Share Kusto Cluster Dataset to be created.
     */
    readonly shareId: pulumi.Output<string>;
    /**
     * Create a DatasetKustoCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatasetKustoClusterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DatasetKustoCluster resources.
 */
export interface DatasetKustoClusterState {
    /**
     * The name of the Data Share Dataset.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The resource ID of the Kusto Cluster to be shared with the receiver. Changing this forces a new Data Share Kusto Cluster Dataset to be created.
     */
    kustoClusterId?: pulumi.Input<string>;
    /**
     * The location of the Kusto Cluster.
     */
    kustoClusterLocation?: pulumi.Input<string>;
    /**
     * The name which should be used for this Data Share Kusto Cluster Dataset. Changing this forces a new Data Share Kusto Cluster Dataset to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource ID of the Data Share where this Data Share Kusto Cluster Dataset should be created. Changing this forces a new Data Share Kusto Cluster Dataset to be created.
     */
    shareId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DatasetKustoCluster resource.
 */
export interface DatasetKustoClusterArgs {
    /**
     * The resource ID of the Kusto Cluster to be shared with the receiver. Changing this forces a new Data Share Kusto Cluster Dataset to be created.
     */
    kustoClusterId: pulumi.Input<string>;
    /**
     * The name which should be used for this Data Share Kusto Cluster Dataset. Changing this forces a new Data Share Kusto Cluster Dataset to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource ID of the Data Share where this Data Share Kusto Cluster Dataset should be created. Changing this forces a new Data Share Kusto Cluster Dataset to be created.
     */
    shareId: pulumi.Input<string>;
}
