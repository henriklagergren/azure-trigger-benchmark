import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing HDInsight Cluster.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.hdinsight.getCluster({
 *     name: "example",
 *     resourceGroupName: "example-resources",
 * });
 * export const httpsEndpoint = example.then(example => example.httpsEndpoint);
 * ```
 */
export declare function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult>;
/**
 * A collection of arguments for invoking getCluster.
 */
export interface GetClusterArgs {
    /**
     * Specifies the name of this HDInsight Cluster.
     */
    name: string;
    /**
     * Specifies the name of the Resource Group in which this HDInsight Cluster exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getCluster.
 */
export interface GetClusterResult {
    /**
     * The version of HDInsights which is used on this HDInsight Cluster.
     */
    readonly clusterVersion: string;
    /**
     * A map of versions of software used on this HDInsights Cluster.
     */
    readonly componentVersions: {
        [key: string]: string;
    };
    /**
     * The SSH Endpoint of the Edge Node for this HDInsight Cluster, if an Edge Node exists.
     */
    readonly edgeSshEndpoint: string;
    /**
     * A `gateway` block as defined below.
     */
    readonly gateways: outputs.hdinsight.GetClusterGateway[];
    /**
     * The HTTPS Endpoint for this HDInsight Cluster.
     */
    readonly httpsEndpoint: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The Kafka Rest Proxy Endpoint for this HDInsight Cluster.
     */
    readonly kafkaRestProxyEndpoint: string;
    /**
     * The kind of HDInsight Cluster this is, such as a Spark or Storm cluster.
     */
    readonly kind: string;
    /**
     * The Azure Region in which this HDInsight Cluster exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * The SSH Endpoint for this HDInsight Cluster.
     */
    readonly sshEndpoint: string;
    /**
     * A map of tags assigned to the HDInsight Cluster.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The SKU / Tier of this HDInsight Cluster.
     */
    readonly tier: string;
    /**
     * The minimal supported tls version.
     */
    readonly tlsMinVersion: string;
}
export declare function getClusterOutput(args: GetClusterOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterResult>;
/**
 * A collection of arguments for invoking getCluster.
 */
export interface GetClusterOutputArgs {
    /**
     * Specifies the name of this HDInsight Cluster.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group in which this HDInsight Cluster exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
