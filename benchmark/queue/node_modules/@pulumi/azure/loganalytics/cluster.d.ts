import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * !> **Important** Due to capacity constraints, Microsoft requires you to pre-register your subscription IDs before you are allowed to create a Log Analytics cluster. Contact Microsoft, or open a support request to register your subscription IDs.
 *
 * > **Note:** Log Analytics Clusters are subject to 14-day soft delete policy. Clusters created with the same resource group & name as a previously deleted cluster will be recovered rather than creating anew.
 *
 * Manages a Log Analytics Cluster.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleCluster = new azure.loganalytics.Cluster("exampleCluster", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     identity: {
 *         type: "SystemAssigned",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Log Analytics Clusters can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:loganalytics/cluster:Cluster example /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/group1/providers/Microsoft.OperationalInsights/clusters/cluster1
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
     * The GUID of the cluster.
     */
    readonly clusterId: pulumi.Output<string>;
    /**
     * An `identity` block as defined below. Changing this forces a new Log Analytics Cluster to be created.
     */
    readonly identity: pulumi.Output<outputs.loganalytics.ClusterIdentity>;
    /**
     * The Azure Region where the Log Analytics Cluster should exist. Changing this forces a new Log Analytics Cluster to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Log Analytics Cluster. Changing this forces a new Log Analytics Cluster to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Log Analytics Cluster should exist. Changing this forces a new Log Analytics Cluster to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The capacity of the Log Analytics Cluster specified in GB/day. Defaults to 1000.
     */
    readonly sizeGb: pulumi.Output<number | undefined>;
    /**
     * A mapping of tags which should be assigned to the Log Analytics Cluster.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
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
     * The GUID of the cluster.
     */
    clusterId?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below. Changing this forces a new Log Analytics Cluster to be created.
     */
    identity?: pulumi.Input<inputs.loganalytics.ClusterIdentity>;
    /**
     * The Azure Region where the Log Analytics Cluster should exist. Changing this forces a new Log Analytics Cluster to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Log Analytics Cluster. Changing this forces a new Log Analytics Cluster to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Log Analytics Cluster should exist. Changing this forces a new Log Analytics Cluster to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The capacity of the Log Analytics Cluster specified in GB/day. Defaults to 1000.
     */
    sizeGb?: pulumi.Input<number>;
    /**
     * A mapping of tags which should be assigned to the Log Analytics Cluster.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * An `identity` block as defined below. Changing this forces a new Log Analytics Cluster to be created.
     */
    identity: pulumi.Input<inputs.loganalytics.ClusterIdentity>;
    /**
     * The Azure Region where the Log Analytics Cluster should exist. Changing this forces a new Log Analytics Cluster to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Log Analytics Cluster. Changing this forces a new Log Analytics Cluster to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Log Analytics Cluster should exist. Changing this forces a new Log Analytics Cluster to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The capacity of the Log Analytics Cluster specified in GB/day. Defaults to 1000.
     */
    sizeGb?: pulumi.Input<number>;
    /**
     * A mapping of tags which should be assigned to the Log Analytics Cluster.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
