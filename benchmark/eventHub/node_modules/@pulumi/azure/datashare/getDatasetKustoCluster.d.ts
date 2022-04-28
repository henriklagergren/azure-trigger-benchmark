import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Data Share Kusto Cluster Dataset.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.datashare.getDatasetKustoCluster({
 *     name: "example-dskc",
 *     shareId: "example-share-id",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getDatasetKustoCluster(args: GetDatasetKustoClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetDatasetKustoClusterResult>;
/**
 * A collection of arguments for invoking getDatasetKustoCluster.
 */
export interface GetDatasetKustoClusterArgs {
    /**
     * The name of this Data Share Kusto Cluster Dataset.
     */
    name: string;
    /**
     * The resource ID of the Data Share where this Data Share Kusto Cluster Dataset should be created.
     */
    shareId: string;
}
/**
 * A collection of values returned by getDatasetKustoCluster.
 */
export interface GetDatasetKustoClusterResult {
    /**
     * The name of the Data Share Dataset.
     */
    readonly displayName: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The resource ID of the Kusto Cluster to be shared with the receiver.
     */
    readonly kustoClusterId: string;
    /**
     * The location of the Kusto Cluster.
     */
    readonly kustoClusterLocation: string;
    readonly name: string;
    readonly shareId: string;
}
export declare function getDatasetKustoClusterOutput(args: GetDatasetKustoClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDatasetKustoClusterResult>;
/**
 * A collection of arguments for invoking getDatasetKustoCluster.
 */
export interface GetDatasetKustoClusterOutputArgs {
    /**
     * The name of this Data Share Kusto Cluster Dataset.
     */
    name: pulumi.Input<string>;
    /**
     * The resource ID of the Data Share where this Data Share Kusto Cluster Dataset should be created.
     */
    shareId: pulumi.Input<string>;
}
