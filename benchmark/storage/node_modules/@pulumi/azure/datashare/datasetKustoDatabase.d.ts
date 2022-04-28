import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Data Share Kusto Database Dataset.
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
 * const exampleDatabase = new azure.kusto.Database("exampleDatabase", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     clusterName: exampleCluster.name,
 * });
 * const exampleAssignment = new azure.authorization.Assignment("exampleAssignment", {
 *     scope: exampleCluster.id,
 *     roleDefinitionName: "Contributor",
 *     principalId: exampleAccount.identity.apply(identity => identity.principalId),
 * });
 * const exampleDatasetKustoDatabase = new azure.datashare.DatasetKustoDatabase("exampleDatasetKustoDatabase", {
 *     shareId: exampleShare.id,
 *     kustoDatabaseId: exampleDatabase.id,
 * }, {
 *     dependsOn: [exampleAssignment],
 * });
 * ```
 *
 * ## Import
 *
 * Data Share Kusto Database Datasets can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datashare/datasetKustoDatabase:DatasetKustoDatabase example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DataShare/accounts/account1/shares/share1/dataSets/dataSet1
 * ```
 */
export declare class DatasetKustoDatabase extends pulumi.CustomResource {
    /**
     * Get an existing DatasetKustoDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatasetKustoDatabaseState, opts?: pulumi.CustomResourceOptions): DatasetKustoDatabase;
    /**
     * Returns true if the given object is an instance of DatasetKustoDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DatasetKustoDatabase;
    /**
     * The name of the Data Share Dataset.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * The location of the Kusto Cluster.
     */
    readonly kustoClusterLocation: pulumi.Output<string>;
    /**
     * The resource ID of the Kusto Cluster Database to be shared with the receiver. Changing this forces a new Data Share Kusto Database Dataset to be created.
     */
    readonly kustoDatabaseId: pulumi.Output<string>;
    /**
     * The name which should be used for this Data Share Kusto Database Dataset. Changing this forces a new Data Share Kusto Database Dataset to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The resource ID of the Data Share where this Data Share Kusto Database Dataset should be created. Changing this forces a new Data Share Kusto Database Dataset to be created.
     */
    readonly shareId: pulumi.Output<string>;
    /**
     * Create a DatasetKustoDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatasetKustoDatabaseArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DatasetKustoDatabase resources.
 */
export interface DatasetKustoDatabaseState {
    /**
     * The name of the Data Share Dataset.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The location of the Kusto Cluster.
     */
    kustoClusterLocation?: pulumi.Input<string>;
    /**
     * The resource ID of the Kusto Cluster Database to be shared with the receiver. Changing this forces a new Data Share Kusto Database Dataset to be created.
     */
    kustoDatabaseId?: pulumi.Input<string>;
    /**
     * The name which should be used for this Data Share Kusto Database Dataset. Changing this forces a new Data Share Kusto Database Dataset to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource ID of the Data Share where this Data Share Kusto Database Dataset should be created. Changing this forces a new Data Share Kusto Database Dataset to be created.
     */
    shareId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DatasetKustoDatabase resource.
 */
export interface DatasetKustoDatabaseArgs {
    /**
     * The resource ID of the Kusto Cluster Database to be shared with the receiver. Changing this forces a new Data Share Kusto Database Dataset to be created.
     */
    kustoDatabaseId: pulumi.Input<string>;
    /**
     * The name which should be used for this Data Share Kusto Database Dataset. Changing this forces a new Data Share Kusto Database Dataset to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The resource ID of the Data Share where this Data Share Kusto Database Dataset should be created. Changing this forces a new Data Share Kusto Database Dataset to be created.
     */
    shareId: pulumi.Input<string>;
}
