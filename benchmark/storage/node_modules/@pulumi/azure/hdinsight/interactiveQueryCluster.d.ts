import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a HDInsight Interactive Query Cluster.
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
 * const exampleInteractiveQueryCluster = new azure.hdinsight.InteractiveQueryCluster("exampleInteractiveQueryCluster", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     clusterVersion: "3.6",
 *     tier: "Standard",
 *     componentVersion: {
 *         interactiveHive: "2.1",
 *     },
 *     gateway: {
 *         enabled: true,
 *         username: "acctestusrgw",
 *         password: "Password!",
 *     },
 *     storageAccounts: [{
 *         storageContainerId: exampleContainer.id,
 *         storageAccountKey: exampleAccount.primaryAccessKey,
 *         isDefault: true,
 *     }],
 *     roles: {
 *         headNode: {
 *             vmSize: "Standard_D13_V2",
 *             username: "acctestusrvm",
 *             password: "AccTestvdSC4daf986!",
 *         },
 *         workerNode: {
 *             vmSize: "Standard_D14_V2",
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
 * HDInsight Interactive Query Clusters can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:hdinsight/interactiveQueryCluster:InteractiveQueryCluster example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.HDInsight/clusters/cluster1
 * ```
 */
export declare class InteractiveQueryCluster extends pulumi.CustomResource {
    /**
     * Get an existing InteractiveQueryCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InteractiveQueryClusterState, opts?: pulumi.CustomResourceOptions): InteractiveQueryCluster;
    /**
     * Returns true if the given object is an instance of InteractiveQueryCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InteractiveQueryCluster;
    /**
     * Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
     */
    readonly clusterVersion: pulumi.Output<string>;
    /**
     * A `componentVersion` block as defined below.
     */
    readonly componentVersion: pulumi.Output<outputs.hdinsight.InteractiveQueryClusterComponentVersion>;
    /**
     * Whether encryption in transit is enabled for this Cluster. Changing this forces a new resource to be created.
     */
    readonly encryptionInTransitEnabled: pulumi.Output<boolean>;
    /**
     * A `gateway` block as defined below.
     */
    readonly gateway: pulumi.Output<outputs.hdinsight.InteractiveQueryClusterGateway>;
    /**
     * The HTTPS Connectivity Endpoint for this HDInsight Interactive Query Cluster.
     */
    readonly httpsEndpoint: pulumi.Output<string>;
    /**
     * Specifies the Azure Region which this HDInsight Interactive Query Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * A `metastores` block as defined below.
     */
    readonly metastores: pulumi.Output<outputs.hdinsight.InteractiveQueryClusterMetastores | undefined>;
    /**
     * A `monitor` block as defined below.
     */
    readonly monitor: pulumi.Output<outputs.hdinsight.InteractiveQueryClusterMonitor | undefined>;
    /**
     * Specifies the name for this HDInsight Interactive Query Cluster. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `network` block as defined below.
     */
    readonly network: pulumi.Output<outputs.hdinsight.InteractiveQueryClusterNetwork | undefined>;
    /**
     * Specifies the name of the Resource Group in which this HDInsight Interactive Query Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `roles` block as defined below.
     */
    readonly roles: pulumi.Output<outputs.hdinsight.InteractiveQueryClusterRoles>;
    /**
     * A `securityProfile` block as defined below.
     */
    readonly securityProfile: pulumi.Output<outputs.hdinsight.InteractiveQueryClusterSecurityProfile | undefined>;
    /**
     * The SSH Connectivity Endpoint for this HDInsight Interactive Query Cluster.
     */
    readonly sshEndpoint: pulumi.Output<string>;
    /**
     * A `storageAccountGen2` block as defined below.
     */
    readonly storageAccountGen2: pulumi.Output<outputs.hdinsight.InteractiveQueryClusterStorageAccountGen2 | undefined>;
    /**
     * One or more `storageAccount` block as defined below.
     */
    readonly storageAccounts: pulumi.Output<outputs.hdinsight.InteractiveQueryClusterStorageAccount[] | undefined>;
    /**
     * A map of Tags which should be assigned to this HDInsight Interactive Query Cluster.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the Tier which should be used for this HDInsight Interactive Query Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
     */
    readonly tier: pulumi.Output<string>;
    readonly tlsMinVersion: pulumi.Output<string | undefined>;
    /**
     * Create a InteractiveQueryCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InteractiveQueryClusterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InteractiveQueryCluster resources.
 */
export interface InteractiveQueryClusterState {
    /**
     * Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
     */
    clusterVersion?: pulumi.Input<string>;
    /**
     * A `componentVersion` block as defined below.
     */
    componentVersion?: pulumi.Input<inputs.hdinsight.InteractiveQueryClusterComponentVersion>;
    /**
     * Whether encryption in transit is enabled for this Cluster. Changing this forces a new resource to be created.
     */
    encryptionInTransitEnabled?: pulumi.Input<boolean>;
    /**
     * A `gateway` block as defined below.
     */
    gateway?: pulumi.Input<inputs.hdinsight.InteractiveQueryClusterGateway>;
    /**
     * The HTTPS Connectivity Endpoint for this HDInsight Interactive Query Cluster.
     */
    httpsEndpoint?: pulumi.Input<string>;
    /**
     * Specifies the Azure Region which this HDInsight Interactive Query Cluster should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A `metastores` block as defined below.
     */
    metastores?: pulumi.Input<inputs.hdinsight.InteractiveQueryClusterMetastores>;
    /**
     * A `monitor` block as defined below.
     */
    monitor?: pulumi.Input<inputs.hdinsight.InteractiveQueryClusterMonitor>;
    /**
     * Specifies the name for this HDInsight Interactive Query Cluster. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `network` block as defined below.
     */
    network?: pulumi.Input<inputs.hdinsight.InteractiveQueryClusterNetwork>;
    /**
     * Specifies the name of the Resource Group in which this HDInsight Interactive Query Cluster should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `roles` block as defined below.
     */
    roles?: pulumi.Input<inputs.hdinsight.InteractiveQueryClusterRoles>;
    /**
     * A `securityProfile` block as defined below.
     */
    securityProfile?: pulumi.Input<inputs.hdinsight.InteractiveQueryClusterSecurityProfile>;
    /**
     * The SSH Connectivity Endpoint for this HDInsight Interactive Query Cluster.
     */
    sshEndpoint?: pulumi.Input<string>;
    /**
     * A `storageAccountGen2` block as defined below.
     */
    storageAccountGen2?: pulumi.Input<inputs.hdinsight.InteractiveQueryClusterStorageAccountGen2>;
    /**
     * One or more `storageAccount` block as defined below.
     */
    storageAccounts?: pulumi.Input<pulumi.Input<inputs.hdinsight.InteractiveQueryClusterStorageAccount>[]>;
    /**
     * A map of Tags which should be assigned to this HDInsight Interactive Query Cluster.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the Tier which should be used for this HDInsight Interactive Query Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
     */
    tier?: pulumi.Input<string>;
    tlsMinVersion?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a InteractiveQueryCluster resource.
 */
export interface InteractiveQueryClusterArgs {
    /**
     * Specifies the Version of HDInsights which should be used for this Cluster. Changing this forces a new resource to be created.
     */
    clusterVersion: pulumi.Input<string>;
    /**
     * A `componentVersion` block as defined below.
     */
    componentVersion: pulumi.Input<inputs.hdinsight.InteractiveQueryClusterComponentVersion>;
    /**
     * Whether encryption in transit is enabled for this Cluster. Changing this forces a new resource to be created.
     */
    encryptionInTransitEnabled?: pulumi.Input<boolean>;
    /**
     * A `gateway` block as defined below.
     */
    gateway: pulumi.Input<inputs.hdinsight.InteractiveQueryClusterGateway>;
    /**
     * Specifies the Azure Region which this HDInsight Interactive Query Cluster should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A `metastores` block as defined below.
     */
    metastores?: pulumi.Input<inputs.hdinsight.InteractiveQueryClusterMetastores>;
    /**
     * A `monitor` block as defined below.
     */
    monitor?: pulumi.Input<inputs.hdinsight.InteractiveQueryClusterMonitor>;
    /**
     * Specifies the name for this HDInsight Interactive Query Cluster. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `network` block as defined below.
     */
    network?: pulumi.Input<inputs.hdinsight.InteractiveQueryClusterNetwork>;
    /**
     * Specifies the name of the Resource Group in which this HDInsight Interactive Query Cluster should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `roles` block as defined below.
     */
    roles: pulumi.Input<inputs.hdinsight.InteractiveQueryClusterRoles>;
    /**
     * A `securityProfile` block as defined below.
     */
    securityProfile?: pulumi.Input<inputs.hdinsight.InteractiveQueryClusterSecurityProfile>;
    /**
     * A `storageAccountGen2` block as defined below.
     */
    storageAccountGen2?: pulumi.Input<inputs.hdinsight.InteractiveQueryClusterStorageAccountGen2>;
    /**
     * One or more `storageAccount` block as defined below.
     */
    storageAccounts?: pulumi.Input<pulumi.Input<inputs.hdinsight.InteractiveQueryClusterStorageAccount>[]>;
    /**
     * A map of Tags which should be assigned to this HDInsight Interactive Query Cluster.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the Tier which should be used for this HDInsight Interactive Query Cluster. Possible values are `Standard` or `Premium`. Changing this forces a new resource to be created.
     */
    tier: pulumi.Input<string>;
    tlsMinVersion?: pulumi.Input<string>;
}
