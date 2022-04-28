import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Synapse Spark Pool.
 *
 * ## Import
 *
 * Synapse Spark Pool can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:synapse/sparkPool:SparkPool example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Synapse/workspaces/workspace1/bigDataPools/sparkPool1
 * ```
 */
export declare class SparkPool extends pulumi.CustomResource {
    /**
     * Get an existing SparkPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SparkPoolState, opts?: pulumi.CustomResourceOptions): SparkPool;
    /**
     * Returns true if the given object is an instance of SparkPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SparkPool;
    /**
     * An `autoPause` block as defined below.
     */
    readonly autoPause: pulumi.Output<outputs.synapse.SparkPoolAutoPause | undefined>;
    /**
     * An `autoScale` block as defined below. Exactly one of `nodeCount` or `autoScale` must be specified.
     */
    readonly autoScale: pulumi.Output<outputs.synapse.SparkPoolAutoScale | undefined>;
    /**
     * The cache size in the Spark Pool.
     */
    readonly cacheSize: pulumi.Output<number | undefined>;
    /**
     * Indicates whether compute isolation is enabled or not. Defaults to `false`.
     */
    readonly computeIsolationEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether Dynamic Executor Allocation is enabled or not. Defaults to `false`.
     */
    readonly dynamicExecutorAllocationEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A `libraryRequirement` block as defined below.
     */
    readonly libraryRequirement: pulumi.Output<outputs.synapse.SparkPoolLibraryRequirement | undefined>;
    /**
     * The name which should be used for this Synapse Spark Pool. Changing this forces a new Synapse Spark Pool to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The number of nodes in the Spark Pool. Exactly one of `nodeCount` or `autoScale` must be specified.
     */
    readonly nodeCount: pulumi.Output<number | undefined>;
    /**
     * The level of node in the Spark Pool. Possible value is `Small`, `Medium` and `Large`.
     */
    readonly nodeSize: pulumi.Output<string>;
    /**
     * The kind of nodes that the Spark Pool provides. Possible value is `MemoryOptimized`.
     */
    readonly nodeSizeFamily: pulumi.Output<string>;
    /**
     * Indicates whether session level packages are enabled or not. Defaults to `false`.
     */
    readonly sessionLevelPackagesEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A `sparkConfig` block as defined below.
     */
    readonly sparkConfig: pulumi.Output<outputs.synapse.SparkPoolSparkConfig | undefined>;
    /**
     * The Spark events folder. Defaults to `/events`.
     */
    readonly sparkEventsFolder: pulumi.Output<string | undefined>;
    /**
     * The default folder where Spark logs will be written. Defaults to `/logs`.
     */
    readonly sparkLogFolder: pulumi.Output<string | undefined>;
    /**
     * The Apache Spark version. Possible values are `2.4` and `3.1`. Defaults to `2.4`.
     */
    readonly sparkVersion: pulumi.Output<string | undefined>;
    /**
     * The ID of the Synapse Workspace where the Synapse Spark Pool should exist. Changing this forces a new Synapse Spark Pool to be created.
     */
    readonly synapseWorkspaceId: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Synapse Spark Pool.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a SparkPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SparkPoolArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SparkPool resources.
 */
export interface SparkPoolState {
    /**
     * An `autoPause` block as defined below.
     */
    autoPause?: pulumi.Input<inputs.synapse.SparkPoolAutoPause>;
    /**
     * An `autoScale` block as defined below. Exactly one of `nodeCount` or `autoScale` must be specified.
     */
    autoScale?: pulumi.Input<inputs.synapse.SparkPoolAutoScale>;
    /**
     * The cache size in the Spark Pool.
     */
    cacheSize?: pulumi.Input<number>;
    /**
     * Indicates whether compute isolation is enabled or not. Defaults to `false`.
     */
    computeIsolationEnabled?: pulumi.Input<boolean>;
    /**
     * Indicates whether Dynamic Executor Allocation is enabled or not. Defaults to `false`.
     */
    dynamicExecutorAllocationEnabled?: pulumi.Input<boolean>;
    /**
     * A `libraryRequirement` block as defined below.
     */
    libraryRequirement?: pulumi.Input<inputs.synapse.SparkPoolLibraryRequirement>;
    /**
     * The name which should be used for this Synapse Spark Pool. Changing this forces a new Synapse Spark Pool to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The number of nodes in the Spark Pool. Exactly one of `nodeCount` or `autoScale` must be specified.
     */
    nodeCount?: pulumi.Input<number>;
    /**
     * The level of node in the Spark Pool. Possible value is `Small`, `Medium` and `Large`.
     */
    nodeSize?: pulumi.Input<string>;
    /**
     * The kind of nodes that the Spark Pool provides. Possible value is `MemoryOptimized`.
     */
    nodeSizeFamily?: pulumi.Input<string>;
    /**
     * Indicates whether session level packages are enabled or not. Defaults to `false`.
     */
    sessionLevelPackagesEnabled?: pulumi.Input<boolean>;
    /**
     * A `sparkConfig` block as defined below.
     */
    sparkConfig?: pulumi.Input<inputs.synapse.SparkPoolSparkConfig>;
    /**
     * The Spark events folder. Defaults to `/events`.
     */
    sparkEventsFolder?: pulumi.Input<string>;
    /**
     * The default folder where Spark logs will be written. Defaults to `/logs`.
     */
    sparkLogFolder?: pulumi.Input<string>;
    /**
     * The Apache Spark version. Possible values are `2.4` and `3.1`. Defaults to `2.4`.
     */
    sparkVersion?: pulumi.Input<string>;
    /**
     * The ID of the Synapse Workspace where the Synapse Spark Pool should exist. Changing this forces a new Synapse Spark Pool to be created.
     */
    synapseWorkspaceId?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Synapse Spark Pool.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a SparkPool resource.
 */
export interface SparkPoolArgs {
    /**
     * An `autoPause` block as defined below.
     */
    autoPause?: pulumi.Input<inputs.synapse.SparkPoolAutoPause>;
    /**
     * An `autoScale` block as defined below. Exactly one of `nodeCount` or `autoScale` must be specified.
     */
    autoScale?: pulumi.Input<inputs.synapse.SparkPoolAutoScale>;
    /**
     * The cache size in the Spark Pool.
     */
    cacheSize?: pulumi.Input<number>;
    /**
     * Indicates whether compute isolation is enabled or not. Defaults to `false`.
     */
    computeIsolationEnabled?: pulumi.Input<boolean>;
    /**
     * Indicates whether Dynamic Executor Allocation is enabled or not. Defaults to `false`.
     */
    dynamicExecutorAllocationEnabled?: pulumi.Input<boolean>;
    /**
     * A `libraryRequirement` block as defined below.
     */
    libraryRequirement?: pulumi.Input<inputs.synapse.SparkPoolLibraryRequirement>;
    /**
     * The name which should be used for this Synapse Spark Pool. Changing this forces a new Synapse Spark Pool to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The number of nodes in the Spark Pool. Exactly one of `nodeCount` or `autoScale` must be specified.
     */
    nodeCount?: pulumi.Input<number>;
    /**
     * The level of node in the Spark Pool. Possible value is `Small`, `Medium` and `Large`.
     */
    nodeSize: pulumi.Input<string>;
    /**
     * The kind of nodes that the Spark Pool provides. Possible value is `MemoryOptimized`.
     */
    nodeSizeFamily: pulumi.Input<string>;
    /**
     * Indicates whether session level packages are enabled or not. Defaults to `false`.
     */
    sessionLevelPackagesEnabled?: pulumi.Input<boolean>;
    /**
     * A `sparkConfig` block as defined below.
     */
    sparkConfig?: pulumi.Input<inputs.synapse.SparkPoolSparkConfig>;
    /**
     * The Spark events folder. Defaults to `/events`.
     */
    sparkEventsFolder?: pulumi.Input<string>;
    /**
     * The default folder where Spark logs will be written. Defaults to `/logs`.
     */
    sparkLogFolder?: pulumi.Input<string>;
    /**
     * The Apache Spark version. Possible values are `2.4` and `3.1`. Defaults to `2.4`.
     */
    sparkVersion?: pulumi.Input<string>;
    /**
     * The ID of the Synapse Workspace where the Synapse Spark Pool should exist. Changing this forces a new Synapse Spark Pool to be created.
     */
    synapseWorkspaceId: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Synapse Spark Pool.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
