import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Stream Analytics Output Function.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {});
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const examplePlan = new azure.appservice.Plan("examplePlan", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     kind: "FunctionApp",
 *     reserved: true,
 *     sku: {
 *         tier: "Dynamic",
 *         size: "Y1",
 *     },
 * });
 * const exampleFunctionApp = new azure.appservice.FunctionApp("exampleFunctionApp", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     appServicePlanId: examplePlan.id,
 *     storageAccountName: exampleAccount.name,
 *     storageAccountAccessKey: exampleAccount.primaryAccessKey,
 *     osType: "linux",
 *     version: "~3",
 * });
 * const exampleJob = new azure.streamanalytics.Job("exampleJob", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     streamingUnits: 3,
 *     transformationQuery: `    SELECT *
 *     INTO [YourOutputAlias]
 *     FROM [YourInputAlias]
 * `,
 * });
 * const exampleOutputFunction = new azure.streamanalytics.OutputFunction("exampleOutputFunction", {
 *     resourceGroupName: exampleJob.resourceGroupName,
 *     streamAnalyticsJobName: exampleJob.name,
 *     functionApp: exampleFunctionApp.name,
 *     functionName: "examplefunctionname",
 *     apiKey: "exampleapikey",
 * });
 * ```
 *
 * ## Import
 *
 * Stream Analytics Output Functions can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:streamanalytics/outputFunction:OutputFunction example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.StreamAnalytics/streamingjobs/job1/outputs/output1
 * ```
 */
export declare class OutputFunction extends pulumi.CustomResource {
    /**
     * Get an existing OutputFunction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OutputFunctionState, opts?: pulumi.CustomResourceOptions): OutputFunction;
    /**
     * Returns true if the given object is an instance of OutputFunction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is OutputFunction;
    /**
     * The API key for the Function.
     */
    readonly apiKey: pulumi.Output<string>;
    /**
     * The maximum number of events in each batch that's sent to the function. Defaults to `100`.
     */
    readonly batchMaxCount: pulumi.Output<number | undefined>;
    /**
     * The maximum batch size in bytes that's sent to the function. Defaults to `262144` (256 kB).
     */
    readonly batchMaxInBytes: pulumi.Output<number | undefined>;
    /**
     * The name of the Function App.
     */
    readonly functionApp: pulumi.Output<string>;
    /**
     * The name of the function in the Function App.
     */
    readonly functionName: pulumi.Output<string>;
    /**
     * The name which should be used for this Stream Analytics Output. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Output should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    readonly streamAnalyticsJobName: pulumi.Output<string>;
    /**
     * Create a OutputFunction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OutputFunctionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering OutputFunction resources.
 */
export interface OutputFunctionState {
    /**
     * The API key for the Function.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * The maximum number of events in each batch that's sent to the function. Defaults to `100`.
     */
    batchMaxCount?: pulumi.Input<number>;
    /**
     * The maximum batch size in bytes that's sent to the function. Defaults to `262144` (256 kB).
     */
    batchMaxInBytes?: pulumi.Input<number>;
    /**
     * The name of the Function App.
     */
    functionApp?: pulumi.Input<string>;
    /**
     * The name of the function in the Function App.
     */
    functionName?: pulumi.Input<string>;
    /**
     * The name which should be used for this Stream Analytics Output. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Output should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    streamAnalyticsJobName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a OutputFunction resource.
 */
export interface OutputFunctionArgs {
    /**
     * The API key for the Function.
     */
    apiKey: pulumi.Input<string>;
    /**
     * The maximum number of events in each batch that's sent to the function. Defaults to `100`.
     */
    batchMaxCount?: pulumi.Input<number>;
    /**
     * The maximum batch size in bytes that's sent to the function. Defaults to `262144` (256 kB).
     */
    batchMaxInBytes?: pulumi.Input<number>;
    /**
     * The name of the Function App.
     */
    functionApp: pulumi.Input<string>;
    /**
     * The name of the function in the Function App.
     */
    functionName: pulumi.Input<string>;
    /**
     * The name which should be used for this Stream Analytics Output. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Stream Analytics Output should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Stream Analytics Job. Changing this forces a new resource to be created.
     */
    streamAnalyticsJobName: pulumi.Input<string>;
}
