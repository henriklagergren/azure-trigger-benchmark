import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Media Job.
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
 *     accountReplicationType: "GRS",
 * });
 * const exampleServiceAccount = new azure.media.ServiceAccount("exampleServiceAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     storageAccounts: [{
 *         id: exampleAccount.id,
 *         isPrimary: true,
 *     }],
 * });
 * const exampleTransform = new azure.media.Transform("exampleTransform", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     mediaServicesAccountName: exampleServiceAccount.name,
 *     description: "My transform description",
 *     outputs: [{
 *         relativePriority: "Normal",
 *         onErrorAction: "ContinueJob",
 *         builtinPreset: {
 *             presetName: "AACGoodQualityAudio",
 *         },
 *     }],
 * });
 * const input = new azure.media.Asset("input", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     mediaServicesAccountName: exampleServiceAccount.name,
 *     description: "Input Asset description",
 * });
 * const output = new azure.media.Asset("output", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     mediaServicesAccountName: exampleServiceAccount.name,
 *     description: "Output Asset description",
 * });
 * const exampleJob = new azure.media.Job("exampleJob", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     mediaServicesAccountName: exampleServiceAccount.name,
 *     transformName: exampleTransform.name,
 *     description: "My Job description",
 *     priority: "Normal",
 *     inputAsset: {
 *         name: input.name,
 *     },
 *     outputAssets: [{
 *         name: output.name,
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Media Jobs can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:media/job:Job example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resGroup1/providers/Microsoft.Media/mediaservices/account1/transforms/transform1/jobs/job1
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
     * Optional customer supplied description of the Job.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * A `inputAsset` block as defined below. Changing this forces a new Media Job to be created.
     */
    readonly inputAsset: pulumi.Output<outputs.media.JobInputAsset>;
    /**
     * The Media Services account name. Changing this forces a new Transform to be created.
     */
    readonly mediaServicesAccountName: pulumi.Output<string>;
    /**
     * The name which should be used for this Media Job. Changing this forces a new Media Job to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * One or more `outputAsset` blocks as defined below. Changing this forces a new Media Job to be created.
     */
    readonly outputAssets: pulumi.Output<outputs.media.JobOutputAsset[]>;
    /**
     * Priority with which the job should be processed. Higher priority jobs are processed before lower priority jobs. If not set, the default is normal. Changing this forces a new Media Job to be created.
     */
    readonly priority: pulumi.Output<string | undefined>;
    /**
     * The name of the Resource Group where the Media Job should exist. Changing this forces a new Media Job to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Transform name. Changing this forces a new Media Job to be created.
     */
    readonly transformName: pulumi.Output<string>;
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
     * Optional customer supplied description of the Job.
     */
    description?: pulumi.Input<string>;
    /**
     * A `inputAsset` block as defined below. Changing this forces a new Media Job to be created.
     */
    inputAsset?: pulumi.Input<inputs.media.JobInputAsset>;
    /**
     * The Media Services account name. Changing this forces a new Transform to be created.
     */
    mediaServicesAccountName?: pulumi.Input<string>;
    /**
     * The name which should be used for this Media Job. Changing this forces a new Media Job to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `outputAsset` blocks as defined below. Changing this forces a new Media Job to be created.
     */
    outputAssets?: pulumi.Input<pulumi.Input<inputs.media.JobOutputAsset>[]>;
    /**
     * Priority with which the job should be processed. Higher priority jobs are processed before lower priority jobs. If not set, the default is normal. Changing this forces a new Media Job to be created.
     */
    priority?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Media Job should exist. Changing this forces a new Media Job to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Transform name. Changing this forces a new Media Job to be created.
     */
    transformName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Job resource.
 */
export interface JobArgs {
    /**
     * Optional customer supplied description of the Job.
     */
    description?: pulumi.Input<string>;
    /**
     * A `inputAsset` block as defined below. Changing this forces a new Media Job to be created.
     */
    inputAsset: pulumi.Input<inputs.media.JobInputAsset>;
    /**
     * The Media Services account name. Changing this forces a new Transform to be created.
     */
    mediaServicesAccountName: pulumi.Input<string>;
    /**
     * The name which should be used for this Media Job. Changing this forces a new Media Job to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `outputAsset` blocks as defined below. Changing this forces a new Media Job to be created.
     */
    outputAssets: pulumi.Input<pulumi.Input<inputs.media.JobOutputAsset>[]>;
    /**
     * Priority with which the job should be processed. Higher priority jobs are processed before lower priority jobs. If not set, the default is normal. Changing this forces a new Media Job to be created.
     */
    priority?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Media Job should exist. Changing this forces a new Media Job to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Transform name. Changing this forces a new Media Job to be created.
     */
    transformName: pulumi.Input<string>;
}
