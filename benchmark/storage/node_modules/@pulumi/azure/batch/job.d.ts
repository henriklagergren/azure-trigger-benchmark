import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Batch Job.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "west europe"});
 * const exampleAccount = new azure.batch.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * const examplePool = new azure.batch.Pool("examplePool", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     accountName: exampleAccount.name,
 *     nodeAgentSkuId: "batch.node.ubuntu 16.04",
 *     vmSize: "Standard_A1",
 *     fixedScale: {
 *         targetDedicatedNodes: 1,
 *     },
 *     storageImageReference: {
 *         publisher: "Canonical",
 *         offer: "UbuntuServer",
 *         sku: "16.04.0-LTS",
 *         version: "latest",
 *     },
 * });
 * const exampleJob = new azure.batch.Job("exampleJob", {batchPoolId: examplePool.id});
 * ```
 *
 * ## Import
 *
 * Batch Jobs can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:batch/job:Job example /subscriptions/12345678-1234-9876-4563-123456789012/resourceGroups/resGroup1/providers/Microsoft.Batch/batchAccounts/account1/pools/pool1/jobs/job1
 * ```
 */
export declare class Job extends pulumi.CustomResource {
    /**
     * Get an existing Job resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: JobState, opts?: pulumi.CustomResourceOptions): Job;
    /**
     * Returns true if the given object is an instance of Job.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Job;
    /**
     * The ID of the Batch Pool. Changing this forces a new Batch Job to be created.
     */
    readonly batchPoolId: pulumi.Output<string>;
    /**
     * Specifies a map of common environment settings applied to this Batch Job. Changing this forces a new Batch Job to be created.
     */
    readonly commonEnvironmentProperties: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The display name of this Batch Job. Changing this forces a new Batch Job to be created.
     */
    readonly displayName: pulumi.Output<string | undefined>;
    /**
     * The name which should be used for this Batch Job. Changing this forces a new Batch Job to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The priority of this Batch Job, possible values can range from -1000 (lowest) to 1000 (highest). Defaults to `0`.
     */
    readonly priority: pulumi.Output<number | undefined>;
    /**
     * The number of retries to each Batch Task belongs to this Batch Job. If this is set to `0`, the Batch service does not retry Tasks. If this is set to `-1`, the Batch service retries Batch Tasks without limit. Default value is `0`.
     */
    readonly taskRetryMaximum: pulumi.Output<number | undefined>;
    /**
     * Create a Job resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Job resources.
 */
export interface JobState {
    /**
     * The ID of the Batch Pool. Changing this forces a new Batch Job to be created.
     */
    batchPoolId?: pulumi.Input<string>;
    /**
     * Specifies a map of common environment settings applied to this Batch Job. Changing this forces a new Batch Job to be created.
     */
    commonEnvironmentProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The display name of this Batch Job. Changing this forces a new Batch Job to be created.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The name which should be used for this Batch Job. Changing this forces a new Batch Job to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The priority of this Batch Job, possible values can range from -1000 (lowest) to 1000 (highest). Defaults to `0`.
     */
    priority?: pulumi.Input<number>;
    /**
     * The number of retries to each Batch Task belongs to this Batch Job. If this is set to `0`, the Batch service does not retry Tasks. If this is set to `-1`, the Batch service retries Batch Tasks without limit. Default value is `0`.
     */
    taskRetryMaximum?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a Job resource.
 */
export interface JobArgs {
    /**
     * The ID of the Batch Pool. Changing this forces a new Batch Job to be created.
     */
    batchPoolId: pulumi.Input<string>;
    /**
     * Specifies a map of common environment settings applied to this Batch Job. Changing this forces a new Batch Job to be created.
     */
    commonEnvironmentProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The display name of this Batch Job. Changing this forces a new Batch Job to be created.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The name which should be used for this Batch Job. Changing this forces a new Batch Job to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The priority of this Batch Job, possible values can range from -1000 (lowest) to 1000 (highest). Defaults to `0`.
     */
    priority?: pulumi.Input<number>;
    /**
     * The number of retries to each Batch Task belongs to this Batch Job. If this is set to `0`, the Batch service does not retry Tasks. If this is set to `-1`, the Batch service retries Batch Tasks without limit. Default value is `0`.
     */
    taskRetryMaximum?: pulumi.Input<number>;
}
