import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Vmware Cluster.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePrivateCloud = new azure.avs.PrivateCloud("examplePrivateCloud", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     skuName: "av36",
 *     managementCluster: {
 *         size: 3,
 *     },
 *     networkSubnetCidr: "192.168.48.0/22",
 *     internetConnectionEnabled: false,
 *     nsxtPassword: `QazWsx13$Edc`,
 *     vcenterPassword: `WsxEdc23$Rfv`,
 * });
 * const exampleCluster = new azure.avs.Cluster("exampleCluster", {
 *     vmwareCloudId: examplePrivateCloud.id,
 *     clusterNodeCount: 3,
 *     skuName: "av36",
 * });
 * ```
 *
 * ## Import
 *
 * Vmware Clusters can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:avs/cluster:Cluster example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.AVS/privateClouds/privateCloud1/clusters/cluster1
 * ```
 */
export declare class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterState, opts?: pulumi.CustomResourceOptions): Cluster;
    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Cluster;
    /**
     * The count of the Vmware Cluster nodes.
     */
    readonly clusterNodeCount: pulumi.Output<number>;
    /**
     * A number that identifies this Vmware Cluster in its Vmware Private Cloud.
     */
    readonly clusterNumber: pulumi.Output<number>;
    /**
     * A list of host of the Vmware Cluster.
     */
    readonly hosts: pulumi.Output<string[]>;
    /**
     * The name which should be used for this Vmware Cluster. Changing this forces a new Vmware Cluster to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The cluster sku to use. Possible values are `av20`, `av36`, and `av36t`. Changing this forces a new Vmware Cluster to be created.
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * The ID of the Vmware Private Cloud in which to create this Vmware Cluster. Changing this forces a new Vmware Cluster to be created.
     */
    readonly vmwareCloudId: pulumi.Output<string>;
    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Cluster resources.
 */
export interface ClusterState {
    /**
     * The count of the Vmware Cluster nodes.
     */
    clusterNodeCount?: pulumi.Input<number>;
    /**
     * A number that identifies this Vmware Cluster in its Vmware Private Cloud.
     */
    clusterNumber?: pulumi.Input<number>;
    /**
     * A list of host of the Vmware Cluster.
     */
    hosts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name which should be used for this Vmware Cluster. Changing this forces a new Vmware Cluster to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The cluster sku to use. Possible values are `av20`, `av36`, and `av36t`. Changing this forces a new Vmware Cluster to be created.
     */
    skuName?: pulumi.Input<string>;
    /**
     * The ID of the Vmware Private Cloud in which to create this Vmware Cluster. Changing this forces a new Vmware Cluster to be created.
     */
    vmwareCloudId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * The count of the Vmware Cluster nodes.
     */
    clusterNodeCount: pulumi.Input<number>;
    /**
     * The name which should be used for this Vmware Cluster. Changing this forces a new Vmware Cluster to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The cluster sku to use. Possible values are `av20`, `av36`, and `av36t`. Changing this forces a new Vmware Cluster to be created.
     */
    skuName: pulumi.Input<string>;
    /**
     * The ID of the Vmware Private Cloud in which to create this Vmware Cluster. Changing this forces a new Vmware Cluster to be created.
     */
    vmwareCloudId: pulumi.Input<string>;
}
