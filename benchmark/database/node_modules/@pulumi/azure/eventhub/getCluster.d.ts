import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing EventHub.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.eventhub.getCluster({
 *     name: "search-eventhub",
 *     resourceGroupName: "search-service",
 * });
 * export const eventhubId = example.then(example => example.id);
 * ```
 */
export declare function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult>;
/**
 * A collection of arguments for invoking getCluster.
 */
export interface GetClusterArgs {
    /**
     * The name of this EventHub Cluster.
     */
    name: string;
    /**
     * The name of the Resource Group where the EventHub Cluster exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getCluster.
 */
export interface GetClusterResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * Location of the EventHub Cluster.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * SKU name of the EventHub Cluster.
     */
    readonly skuName: string;
}
export declare function getClusterOutput(args: GetClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterResult>;
/**
 * A collection of arguments for invoking getCluster.
 */
export interface GetClusterOutputArgs {
    /**
     * The name of this EventHub Cluster.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the EventHub Cluster exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
