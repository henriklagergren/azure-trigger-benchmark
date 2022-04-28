import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a HDInsight Storm Cluster.
 *
 * !> **Note:** [HDInsight 3.6 is deprecated and will be retired on 2020-12-31 - HDInsight 4.0 no longer supports Storm Clusters](https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-component-versioning#available-versions) - as such this resource is deprecated and will be removed in the next major version of the Provider.
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
 * const exampleStormCluster = new azure.hdinsight.StormCluster("exampleStormCluster", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     clusterVersion: "3.6",
 *     tier: "Standard",
 *     componentVersion: {
 *         storm: "1.1",
 *     },
 *     gateway: {
 *         enabled: true,
 *         username: "acctestusrgw",
 *         password: "Password123!",
 *     },
 *     storageAccounts: [{
 *         storageContainerId: exampleContainer.id,
 *         storageAccountKey: exampleAccount.primaryAccessKey,
 *         isDefault: true,
 *     }],
 *     roles: {
 *         headNode: {
 *             vmSize: "Standard_A3",
 *             username: "acctestusrvm",
 *             password: "AccTestvdSC4daf986!",
 *         },
 *         workerNode: {
 *             vmSize: "Standard_D3_V2",
 *             username: "acctestusrvm",
 *             password: "AccTestvdSC4daf986!",
 *             targetInstanceCount: 3,
 *         },
 *         zookeeperNode: {
 *             vmSize: "Standard_A4_V2",
 *             username: "acctestusrvm",
 *             password: "AccTestvdSC4daf986!",
 *         },
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * HDInsight Storm Clusters can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:hdinsight/stormCluster:StormCluster example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.HDInsight/clusters/cluster1
 * ```
 */
export declare class StormCluster extends pulumi.CustomResource {
    /**
     * Get an existing StormCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StormClusterState, opts?: pulumi.CustomResourceOptions): StormCluster;
    /**
     * Returns true if the given object is an instance of StormCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StormCluster;
    /**
     * Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
     */
    readonly clusterVersion: pulumi.Output<string>;
    /**
     * A `componentVersion` block as defined below.
     */
    readonly componentVersion: pulumi.Output<outputs.hdinsight.StormClusterComponentVersion>;
    /**
     * A `gateway` block as defined below.
     */
    readonly gateway: pulumi.Output<outputs.hdinsight.StormClusterGateway>;
    /**
     * The HTTPS Connectivity Endpoint for this HDInsight Storm Cluster.
     */
    readonly httpsEndpoint: pulumi.Output<string>;
    /**
     * Specifies the Azure Region which this HDInsight Storm Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * A `metastores` block as defined below.
     */
    readonly metastores: pulumi.Output<outputs.hdinsight.StormClusterMetastores | undefined>;
    /**
     * A `monitor` block as defined below.
     */
    readonly monitor: pulumi.Output<outputs.hdinsight.StormClusterMonitor | undefined>;
    /**
     * Specifies the name for this HDInsight Storm Cluster. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the name of the Resource Group in which this HDInsight Storm Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `roles` block as defined below.
     */
    readonly roles: pulumi.Output<outputs.hdinsight.StormClusterRoles>;
    /**
     * The SSH Connectivity Endpoint for this HDInsight Storm Cluster.
     */
    readonly sshEndpoint: pulumi.Output<string>;
    /**
     * One or more `storageAccount` block as defined below.
     */
    readonly storageAccounts: pulumi.Output<outputs.hdinsight.StormClusterStorageAccount[] | undefined>;
    /**
     * A map of Tags which should be assigned to this HDInsight Storm Cluster.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the Tier which should be used for this HDInsight Storm Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
     */
    readonly tier: pulumi.Output<string>;
    readonly tlsMinVersion: pulumi.Output<string | undefined>;
    /**
     * Create a StormCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StormClusterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering StormCluster resources.
 */
export interface StormClusterState {
    /**
     * Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
     */
    clusterVersion?: pulumi.Input<string>;
    /**
     * A `componentVersion` block as defined below.
     */
    componentVersion?: pulumi.Input<inputs.hdinsight.StormClusterComponentVersion>;
    /**
     * A `gateway` block as defined below.
     */
    gateway?: pulumi.Input<inputs.hdinsight.StormClusterGateway>;
    /**
     * The HTTPS Connectivity Endpoint for this HDInsight Storm Cluster.
     */
    httpsEndpoint?: pulumi.Input<string>;
    /**
     * Specifies the Azure Region which this HDInsight Storm Cluster should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A `metastores` block as defined below.
     */
    metastores?: pulumi.Input<inputs.hdinsight.StormClusterMetastores>;
    /**
     * A `monitor` block as defined below.
     */
    monitor?: pulumi.Input<inputs.hdinsight.StormClusterMonitor>;
    /**
     * Specifies the name for this HDInsight Storm Cluster. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group in which this HDInsight Storm Cluster should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `roles` block as defined below.
     */
    roles?: pulumi.Input<inputs.hdinsight.StormClusterRoles>;
    /**
     * The SSH Connectivity Endpoint for this HDInsight Storm Cluster.
     */
    sshEndpoint?: pulumi.Input<string>;
    /**
     * One or more `storageAccount` block as defined below.
     */
    storageAccounts?: pulumi.Input<pulumi.Input<inputs.hdinsight.StormClusterStorageAccount>[]>;
    /**
     * A map of Tags which should be assigned to this HDInsight Storm Cluster.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the Tier which should be used for this HDInsight Storm Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
     */
    tier?: pulumi.Input<string>;
    tlsMinVersion?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a StormCluster resource.
 */
export interface StormClusterArgs {
    /**
     * Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
     */
    clusterVersion: pulumi.Input<string>;
    /**
     * A `componentVersion` block as defined below.
     */
    componentVersion: pulumi.Input<inputs.hdinsight.StormClusterComponentVersion>;
    /**
     * A `gateway` block as defined below.
     */
    gateway: pulumi.Input<inputs.hdinsight.StormClusterGateway>;
    /**
     * Specifies the Azure Region which this HDInsight Storm Cluster should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A `metastores` block as defined below.
     */
    metastores?: pulumi.Input<inputs.hdinsight.StormClusterMetastores>;
    /**
     * A `monitor` block as defined below.
     */
    monitor?: pulumi.Input<inputs.hdinsight.StormClusterMonitor>;
    /**
     * Specifies the name for this HDInsight Storm Cluster. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group in which this HDInsight Storm Cluster should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `roles` block as defined below.
     */
    roles: pulumi.Input<inputs.hdinsight.StormClusterRoles>;
    /**
     * One or more `storageAccount` block as defined below.
     */
    storageAccounts?: pulumi.Input<pulumi.Input<inputs.hdinsight.StormClusterStorageAccount>[]>;
    /**
     * A map of Tags which should be assigned to this HDInsight Storm Cluster.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the Tier which should be used for this HDInsight Storm Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
     */
    tier: pulumi.Input<string>;
    tlsMinVersion?: pulumi.Input<string>;
}
