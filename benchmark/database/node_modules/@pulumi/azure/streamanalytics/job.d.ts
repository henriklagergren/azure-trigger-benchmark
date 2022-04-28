import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Stream Analytics Job.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleJob = new azure.streamanalytics.Job("exampleJob", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     compatibilityLevel: "1.2",
 *     dataLocale: "en-GB",
 *     eventsLateArrivalMaxDelayInSeconds: 60,
 *     eventsOutOfOrderMaxDelayInSeconds: 50,
 *     eventsOutOfOrderPolicy: "Adjust",
 *     outputErrorPolicy: "Drop",
 *     streamingUnits: 3,
 *     tags: {
 *         environment: "Example",
 *     },
 *     transformationQuery: `    SELECT *
 *     INTO [YourOutputAlias]
 *     FROM [YourInputAlias]
 * `,
 * });
 * ```
 *
 * ## Import
 *
 * Stream Analytics Job's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:streamanalytics/job:Job example /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/group1/providers/Microsoft.StreamAnalytics/streamingjobs/job1
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
     * Specifies the compatibility level for this job - which controls certain runtime behaviours of the streaming job. Possible values are `1.0`, `1.1` and `1.2`.
     */
    readonly compatibilityLevel: pulumi.Output<string>;
    /**
     * Specifies the Data Locale of the Job, which [should be a supported .NET Culture](https://msdn.microsoft.com/en-us/library/system.globalization.culturetypes(v=vs.110).aspx).
     */
    readonly dataLocale: pulumi.Output<string>;
    /**
     * Specifies the maximum tolerable delay in seconds where events arriving late could be included. Supported range is `-1` (indefinite) to `1814399` (20d 23h 59m 59s).  Default is `0`.
     */
    readonly eventsLateArrivalMaxDelayInSeconds: pulumi.Output<number | undefined>;
    /**
     * Specifies the maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order. Supported range is `0` to `599` (9m 59s). Default is `5`.
     */
    readonly eventsOutOfOrderMaxDelayInSeconds: pulumi.Output<number | undefined>;
    /**
     * Specifies the policy which should be applied to events which arrive out of order in the input event stream. Possible values are `Adjust` and `Drop`.  Default is `Adjust`.
     */
    readonly eventsOutOfOrderPolicy: pulumi.Output<string | undefined>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.streamanalytics.JobIdentity | undefined>;
    /**
     * The Job ID assigned by the Stream Analytics Job.
     */
    readonly jobId: pulumi.Output<string>;
    /**
     * The Azure Region in which the Resource Group exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the policy which should be applied to events which arrive at the output and cannot be written to the external storage due to being malformed (such as missing column values, column values of wrong type or size). Possible values are `Drop` and `Stop`.  Default is `Drop`.
     */
    readonly outputErrorPolicy: pulumi.Output<string | undefined>;
    /**
     * The name of the Resource Group where the Stream Analytics Job should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The ID of an existing Stream Analytics Cluster where the Stream Analytics Job should run.
     */
    readonly streamAnalyticsClusterId: pulumi.Output<string | undefined>;
    /**
     * Specifies the number of streaming units that the streaming job uses. Supported values are `1`, `3`, `6` and multiples of `6` up to `120`.
     */
    readonly streamingUnits: pulumi.Output<number>;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the query that will be run in the streaming job, [written in Stream Analytics Query Language (SAQL)](https://msdn.microsoft.com/library/azure/dn834998).
     */
    readonly transformationQuery: pulumi.Output<string>;
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
     * Specifies the compatibility level for this job - which controls certain runtime behaviours of the streaming job. Possible values are `1.0`, `1.1` and `1.2`.
     */
    compatibilityLevel?: pulumi.Input<string>;
    /**
     * Specifies the Data Locale of the Job, which [should be a supported .NET Culture](https://msdn.microsoft.com/en-us/library/system.globalization.culturetypes(v=vs.110).aspx).
     */
    dataLocale?: pulumi.Input<string>;
    /**
     * Specifies the maximum tolerable delay in seconds where events arriving late could be included. Supported range is `-1` (indefinite) to `1814399` (20d 23h 59m 59s).  Default is `0`.
     */
    eventsLateArrivalMaxDelayInSeconds?: pulumi.Input<number>;
    /**
     * Specifies the maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order. Supported range is `0` to `599` (9m 59s). Default is `5`.
     */
    eventsOutOfOrderMaxDelayInSeconds?: pulumi.Input<number>;
    /**
     * Specifies the policy which should be applied to events which arrive out of order in the input event stream. Possible values are `Adjust` and `Drop`.  Default is `Adjust`.
     */
    eventsOutOfOrderPolicy?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.streamanalytics.JobIdentity>;
    /**
     * The Job ID assigned by the Stream Analytics Job.
     */
    jobId?: pulumi.Input<string>;
    /**
     * The Azure Region in which the Resource Group exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the policy which should be applied to events which arrive at the output and cannot be written to the external storage due to being malformed (such as missing column values, column values of wrong type or size). Possible values are `Drop` and `Stop`.  Default is `Drop`.
     */
    outputErrorPolicy?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The ID of an existing Stream Analytics Cluster where the Stream Analytics Job should run.
     */
    streamAnalyticsClusterId?: pulumi.Input<string>;
    /**
     * Specifies the number of streaming units that the streaming job uses. Supported values are `1`, `3`, `6` and multiples of `6` up to `120`.
     */
    streamingUnits?: pulumi.Input<number>;
    /**
     * A mapping of tags assigned to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the query that will be run in the streaming job, [written in Stream Analytics Query Language (SAQL)](https://msdn.microsoft.com/library/azure/dn834998).
     */
    transformationQuery?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Job resource.
 */
export interface JobArgs {
    /**
     * Specifies the compatibility level for this job - which controls certain runtime behaviours of the streaming job. Possible values are `1.0`, `1.1` and `1.2`.
     */
    compatibilityLevel?: pulumi.Input<string>;
    /**
     * Specifies the Data Locale of the Job, which [should be a supported .NET Culture](https://msdn.microsoft.com/en-us/library/system.globalization.culturetypes(v=vs.110).aspx).
     */
    dataLocale?: pulumi.Input<string>;
    /**
     * Specifies the maximum tolerable delay in seconds where events arriving late could be included. Supported range is `-1` (indefinite) to `1814399` (20d 23h 59m 59s).  Default is `0`.
     */
    eventsLateArrivalMaxDelayInSeconds?: pulumi.Input<number>;
    /**
     * Specifies the maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order. Supported range is `0` to `599` (9m 59s). Default is `5`.
     */
    eventsOutOfOrderMaxDelayInSeconds?: pulumi.Input<number>;
    /**
     * Specifies the policy which should be applied to events which arrive out of order in the input event stream. Possible values are `Adjust` and `Drop`.  Default is `Adjust`.
     */
    eventsOutOfOrderPolicy?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.streamanalytics.JobIdentity>;
    /**
     * The Azure Region in which the Resource Group exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the policy which should be applied to events which arrive at the output and cannot be written to the external storage due to being malformed (such as missing column values, column values of wrong type or size). Possible values are `Drop` and `Stop`.  Default is `Drop`.
     */
    outputErrorPolicy?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Job should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of an existing Stream Analytics Cluster where the Stream Analytics Job should run.
     */
    streamAnalyticsClusterId?: pulumi.Input<string>;
    /**
     * Specifies the number of streaming units that the streaming job uses. Supported values are `1`, `3`, `6` and multiples of `6` up to `120`.
     */
    streamingUnits: pulumi.Input<number>;
    /**
     * A mapping of tags assigned to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the query that will be run in the streaming job, [written in Stream Analytics Query Language (SAQL)](https://msdn.microsoft.com/library/azure/dn834998).
     */
    transformationQuery: pulumi.Input<string>;
}
