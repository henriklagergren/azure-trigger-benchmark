import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a HDInsight Kafka Cluster.
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
 * const exampleKafkaCluster = new azure.hdinsight.KafkaCluster("exampleKafkaCluster", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     clusterVersion: "4.0",
 *     tier: "Standard",
 *     componentVersion: {
 *         kafka: "2.1",
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
 *             vmSize: "Standard_D3_V2",
 *             username: "acctestusrvm",
 *             password: "AccTestvdSC4daf986!",
 *         },
 *         workerNode: {
 *             vmSize: "Standard_D3_V2",
 *             username: "acctestusrvm",
 *             password: "AccTestvdSC4daf986!",
 *             numberOfDisksPerNode: 3,
 *             targetInstanceCount: 3,
 *         },
 *         zookeeperNode: {
 *             vmSize: "Standard_D3_V2",
 *             username: "acctestusrvm",
 *             password: "AccTestvdSC4daf986!",
 *         },
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * HDInsight Kafka Clusters can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:hdinsight/kafkaCluster:KafkaCluster example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.HDInsight/clusters/cluster1
 * ```
 */
export declare class KafkaCluster extends pulumi.CustomResource {
    /**
     * Get an existing KafkaCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KafkaClusterState, opts?: pulumi.CustomResourceOptions): KafkaCluster;
    /**
     * Returns true if the given object is an instance of KafkaCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is KafkaCluster;
    /**
     * Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
     */
    readonly clusterVersion: pulumi.Output<string>;
    /**
     * A `componentVersion` block as defined below.
     */
    readonly componentVersion: pulumi.Output<outputs.hdinsight.KafkaClusterComponentVersion>;
    /**
     * Whether encryption in transit is enabled for this HDInsight Kafka Cluster. Changing this forces a new resource to be created.
     */
    readonly encryptionInTransitEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A `gateway` block as defined below.
     */
    readonly gateway: pulumi.Output<outputs.hdinsight.KafkaClusterGateway>;
    /**
     * The HTTPS Connectivity Endpoint for this HDInsight Kafka Cluster.
     */
    readonly httpsEndpoint: pulumi.Output<string>;
    /**
     * The Kafka Rest Proxy Endpoint for this HDInsight Kafka Cluster.
     */
    readonly kafkaRestProxyEndpoint: pulumi.Output<string>;
    /**
     * Specifies the Azure Region which this HDInsight Kafka Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * A `metastores` block as defined below.
     */
    readonly metastores: pulumi.Output<outputs.hdinsight.KafkaClusterMetastores | undefined>;
    /**
     * A `monitor` block as defined below.
     */
    readonly monitor: pulumi.Output<outputs.hdinsight.KafkaClusterMonitor | undefined>;
    /**
     * Specifies the name for this HDInsight Kafka Cluster. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the name of the Resource Group in which this HDInsight Kafka Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `restProxy` block as defined below.
     */
    readonly restProxy: pulumi.Output<outputs.hdinsight.KafkaClusterRestProxy | undefined>;
    /**
     * A `roles` block as defined below.
     */
    readonly roles: pulumi.Output<outputs.hdinsight.KafkaClusterRoles>;
    /**
     * A `securityProfile` block as defined below.
     */
    readonly securityProfile: pulumi.Output<outputs.hdinsight.KafkaClusterSecurityProfile | undefined>;
    /**
     * The SSH Connectivity Endpoint for this HDInsight Kafka Cluster.
     */
    readonly sshEndpoint: pulumi.Output<string>;
    /**
     * A `storageAccountGen2` block as defined below.
     */
    readonly storageAccountGen2: pulumi.Output<outputs.hdinsight.KafkaClusterStorageAccountGen2 | undefined>;
    /**
     * One or more `storageAccount` block as defined below.
     */
    readonly storageAccounts: pulumi.Output<outputs.hdinsight.KafkaClusterStorageAccount[] | undefined>;
    /**
     * A map of Tags which should be assigned to this HDInsight Kafka Cluster.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the Tier which should be used for this HDInsight Kafka Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
     */
    readonly tier: pulumi.Output<string>;
    /**
     * The minimal supported TLS version. Possible values are `1.0`, `1.1` or `1.2`. Changing this forces a new resource to be created.
     */
    readonly tlsMinVersion: pulumi.Output<string | undefined>;
    /**
     * Create a KafkaCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KafkaClusterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering KafkaCluster resources.
 */
export interface KafkaClusterState {
    /**
     * Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
     */
    clusterVersion?: pulumi.Input<string>;
    /**
     * A `componentVersion` block as defined below.
     */
    componentVersion?: pulumi.Input<inputs.hdinsight.KafkaClusterComponentVersion>;
    /**
     * Whether encryption in transit is enabled for this HDInsight Kafka Cluster. Changing this forces a new resource to be created.
     */
    encryptionInTransitEnabled?: pulumi.Input<boolean>;
    /**
     * A `gateway` block as defined below.
     */
    gateway?: pulumi.Input<inputs.hdinsight.KafkaClusterGateway>;
    /**
     * The HTTPS Connectivity Endpoint for this HDInsight Kafka Cluster.
     */
    httpsEndpoint?: pulumi.Input<string>;
    /**
     * The Kafka Rest Proxy Endpoint for this HDInsight Kafka Cluster.
     */
    kafkaRestProxyEndpoint?: pulumi.Input<string>;
    /**
     * Specifies the Azure Region which this HDInsight Kafka Cluster should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A `metastores` block as defined below.
     */
    metastores?: pulumi.Input<inputs.hdinsight.KafkaClusterMetastores>;
    /**
     * A `monitor` block as defined below.
     */
    monitor?: pulumi.Input<inputs.hdinsight.KafkaClusterMonitor>;
    /**
     * Specifies the name for this HDInsight Kafka Cluster. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group in which this HDInsight Kafka Cluster should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `restProxy` block as defined below.
     */
    restProxy?: pulumi.Input<inputs.hdinsight.KafkaClusterRestProxy>;
    /**
     * A `roles` block as defined below.
     */
    roles?: pulumi.Input<inputs.hdinsight.KafkaClusterRoles>;
    /**
     * A `securityProfile` block as defined below.
     */
    securityProfile?: pulumi.Input<inputs.hdinsight.KafkaClusterSecurityProfile>;
    /**
     * The SSH Connectivity Endpoint for this HDInsight Kafka Cluster.
     */
    sshEndpoint?: pulumi.Input<string>;
    /**
     * A `storageAccountGen2` block as defined below.
     */
    storageAccountGen2?: pulumi.Input<inputs.hdinsight.KafkaClusterStorageAccountGen2>;
    /**
     * One or more `storageAccount` block as defined below.
     */
    storageAccounts?: pulumi.Input<pulumi.Input<inputs.hdinsight.KafkaClusterStorageAccount>[]>;
    /**
     * A map of Tags which should be assigned to this HDInsight Kafka Cluster.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the Tier which should be used for this HDInsight Kafka Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
     */
    tier?: pulumi.Input<string>;
    /**
     * The minimal supported TLS version. Possible values are `1.0`, `1.1` or `1.2`. Changing this forces a new resource to be created.
     */
    tlsMinVersion?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a KafkaCluster resource.
 */
export interface KafkaClusterArgs {
    /**
     * Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
     */
    clusterVersion: pulumi.Input<string>;
    /**
     * A `componentVersion` block as defined below.
     */
    componentVersion: pulumi.Input<inputs.hdinsight.KafkaClusterComponentVersion>;
    /**
     * Whether encryption in transit is enabled for this HDInsight Kafka Cluster. Changing this forces a new resource to be created.
     */
    encryptionInTransitEnabled?: pulumi.Input<boolean>;
    /**
     * A `gateway` block as defined below.
     */
    gateway: pulumi.Input<inputs.hdinsight.KafkaClusterGateway>;
    /**
     * Specifies the Azure Region which this HDInsight Kafka Cluster should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A `metastores` block as defined below.
     */
    metastores?: pulumi.Input<inputs.hdinsight.KafkaClusterMetastores>;
    /**
     * A `monitor` block as defined below.
     */
    monitor?: pulumi.Input<inputs.hdinsight.KafkaClusterMonitor>;
    /**
     * Specifies the name for this HDInsight Kafka Cluster. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group in which this HDInsight Kafka Cluster should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `restProxy` block as defined below.
     */
    restProxy?: pulumi.Input<inputs.hdinsight.KafkaClusterRestProxy>;
    /**
     * A `roles` block as defined below.
     */
    roles: pulumi.Input<inputs.hdinsight.KafkaClusterRoles>;
    /**
     * A `securityProfile` block as defined below.
     */
    securityProfile?: pulumi.Input<inputs.hdinsight.KafkaClusterSecurityProfile>;
    /**
     * A `storageAccountGen2` block as defined below.
     */
    storageAccountGen2?: pulumi.Input<inputs.hdinsight.KafkaClusterStorageAccountGen2>;
    /**
     * One or more `storageAccount` block as defined below.
     */
    storageAccounts?: pulumi.Input<pulumi.Input<inputs.hdinsight.KafkaClusterStorageAccount>[]>;
    /**
     * A map of Tags which should be assigned to this HDInsight Kafka Cluster.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the Tier which should be used for this HDInsight Kafka Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
     */
    tier: pulumi.Input<string>;
    /**
     * The minimal supported TLS version. Possible values are `1.0`, `1.1` or `1.2`. Changing this forces a new resource to be created.
     */
    tlsMinVersion?: pulumi.Input<string>;
}
