import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Tumbling Window Trigger inside an Azure Data Factory.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleFactory = new azure.datafactory.Factory("exampleFactory", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const examplePipeline = new azure.datafactory.Pipeline("examplePipeline", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryId: exampleFactory.id,
 * });
 * const exampleTriggerTumblingWindow = new azure.datafactory.TriggerTumblingWindow("exampleTriggerTumblingWindow", {
 *     dataFactoryId: exampleFactory.id,
 *     startTime: "2022-09-21T00:00:00Z",
 *     endTime: "2022-09-21T08:00:00Z",
 *     frequency: "Minute",
 *     interval: 15,
 *     delay: "16:00:00",
 *     annotations: [
 *         "example1",
 *         "example2",
 *         "example3",
 *     ],
 *     description: "example description",
 *     retry: {
 *         count: 1,
 *         interval: 30,
 *     },
 *     pipeline: {
 *         name: azurerm_data_factory_pipeline.test.name,
 *         parameters: {
 *             Env: "Prod",
 *         },
 *     },
 *     triggerDependencies: [{
 *         size: "24:00:00",
 *         offset: "-24:00:00",
 *     }],
 *     additionalProperties: {
 *         foo: "value1",
 *         bar: "value2",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Tumbling Window Trigger can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/triggerTumblingWindow:TriggerTumblingWindow example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/triggers/example
 * ```
 */
export declare class TriggerTumblingWindow extends pulumi.CustomResource {
    /**
     * Get an existing TriggerTumblingWindow resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TriggerTumblingWindowState, opts?: pulumi.CustomResourceOptions): TriggerTumblingWindow;
    /**
     * Returns true if the given object is an instance of TriggerTumblingWindow.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TriggerTumblingWindow;
    /**
     * Specifies if the Data Factory Tumbling Window Trigger is activated. Defaults to `true`.
     */
    readonly activated: pulumi.Output<boolean | undefined>;
    /**
     * A map of additional properties to associate with the Data Factory Tumbling Window Trigger.
     */
    readonly additionalProperties: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * List of tags that can be used for describing the Data Factory Tumbling Window Trigger.
     */
    readonly annotations: pulumi.Output<string[] | undefined>;
    /**
     * The ID of Data Factory in which to associate the Trigger with. Changing this forces a new resource.
     */
    readonly dataFactoryId: pulumi.Output<string>;
    /**
     * Specifies how long the trigger waits before triggering new run. formatted as an `D.HH:MM:SS`.
     */
    readonly delay: pulumi.Output<string | undefined>;
    /**
     * The description for the Data Factory Tumbling Window Trigger.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Specifies the end time of Tumbling Window, formatted as an RFC3339 string.
     */
    readonly endTime: pulumi.Output<string | undefined>;
    /**
     * Specifies the frequency of Tumbling Window. Possible values are `Hour`, `Minute` and `Month`. Changing this forces a new resource.
     */
    readonly frequency: pulumi.Output<string>;
    /**
     * Specifies the interval of Tumbling Window. Changing this forces a new resource.
     */
    readonly interval: pulumi.Output<number>;
    /**
     * The max number for simultaneous trigger run fired by Tumbling Window. Possible values are between `1` and `50`. Defaults to `50`.
     */
    readonly maxConcurrency: pulumi.Output<number | undefined>;
    /**
     * Specifies the name of the Data Factory Tumbling Window Trigger. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `pipeline` block as defined below.
     */
    readonly pipeline: pulumi.Output<outputs.datafactory.TriggerTumblingWindowPipeline>;
    /**
     * A `retry` block as defined below.
     */
    readonly retry: pulumi.Output<outputs.datafactory.TriggerTumblingWindowRetry | undefined>;
    /**
     * Specifies the start time of Tumbling Window, formatted as an RFC3339 string. Changing this forces a new resource.
     */
    readonly startTime: pulumi.Output<string>;
    /**
     * One or more `triggerDependency` block as defined below.
     */
    readonly triggerDependencies: pulumi.Output<outputs.datafactory.TriggerTumblingWindowTriggerDependency[] | undefined>;
    /**
     * Create a TriggerTumblingWindow resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TriggerTumblingWindowArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering TriggerTumblingWindow resources.
 */
export interface TriggerTumblingWindowState {
    /**
     * Specifies if the Data Factory Tumbling Window Trigger is activated. Defaults to `true`.
     */
    activated?: pulumi.Input<boolean>;
    /**
     * A map of additional properties to associate with the Data Factory Tumbling Window Trigger.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Tumbling Window Trigger.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of Data Factory in which to associate the Trigger with. Changing this forces a new resource.
     */
    dataFactoryId?: pulumi.Input<string>;
    /**
     * Specifies how long the trigger waits before triggering new run. formatted as an `D.HH:MM:SS`.
     */
    delay?: pulumi.Input<string>;
    /**
     * The description for the Data Factory Tumbling Window Trigger.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the end time of Tumbling Window, formatted as an RFC3339 string.
     */
    endTime?: pulumi.Input<string>;
    /**
     * Specifies the frequency of Tumbling Window. Possible values are `Hour`, `Minute` and `Month`. Changing this forces a new resource.
     */
    frequency?: pulumi.Input<string>;
    /**
     * Specifies the interval of Tumbling Window. Changing this forces a new resource.
     */
    interval?: pulumi.Input<number>;
    /**
     * The max number for simultaneous trigger run fired by Tumbling Window. Possible values are between `1` and `50`. Defaults to `50`.
     */
    maxConcurrency?: pulumi.Input<number>;
    /**
     * Specifies the name of the Data Factory Tumbling Window Trigger. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `pipeline` block as defined below.
     */
    pipeline?: pulumi.Input<inputs.datafactory.TriggerTumblingWindowPipeline>;
    /**
     * A `retry` block as defined below.
     */
    retry?: pulumi.Input<inputs.datafactory.TriggerTumblingWindowRetry>;
    /**
     * Specifies the start time of Tumbling Window, formatted as an RFC3339 string. Changing this forces a new resource.
     */
    startTime?: pulumi.Input<string>;
    /**
     * One or more `triggerDependency` block as defined below.
     */
    triggerDependencies?: pulumi.Input<pulumi.Input<inputs.datafactory.TriggerTumblingWindowTriggerDependency>[]>;
}
/**
 * The set of arguments for constructing a TriggerTumblingWindow resource.
 */
export interface TriggerTumblingWindowArgs {
    /**
     * Specifies if the Data Factory Tumbling Window Trigger is activated. Defaults to `true`.
     */
    activated?: pulumi.Input<boolean>;
    /**
     * A map of additional properties to associate with the Data Factory Tumbling Window Trigger.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Tumbling Window Trigger.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of Data Factory in which to associate the Trigger with. Changing this forces a new resource.
     */
    dataFactoryId: pulumi.Input<string>;
    /**
     * Specifies how long the trigger waits before triggering new run. formatted as an `D.HH:MM:SS`.
     */
    delay?: pulumi.Input<string>;
    /**
     * The description for the Data Factory Tumbling Window Trigger.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the end time of Tumbling Window, formatted as an RFC3339 string.
     */
    endTime?: pulumi.Input<string>;
    /**
     * Specifies the frequency of Tumbling Window. Possible values are `Hour`, `Minute` and `Month`. Changing this forces a new resource.
     */
    frequency: pulumi.Input<string>;
    /**
     * Specifies the interval of Tumbling Window. Changing this forces a new resource.
     */
    interval: pulumi.Input<number>;
    /**
     * The max number for simultaneous trigger run fired by Tumbling Window. Possible values are between `1` and `50`. Defaults to `50`.
     */
    maxConcurrency?: pulumi.Input<number>;
    /**
     * Specifies the name of the Data Factory Tumbling Window Trigger. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `pipeline` block as defined below.
     */
    pipeline: pulumi.Input<inputs.datafactory.TriggerTumblingWindowPipeline>;
    /**
     * A `retry` block as defined below.
     */
    retry?: pulumi.Input<inputs.datafactory.TriggerTumblingWindowRetry>;
    /**
     * Specifies the start time of Tumbling Window, formatted as an RFC3339 string. Changing this forces a new resource.
     */
    startTime: pulumi.Input<string>;
    /**
     * One or more `triggerDependency` block as defined below.
     */
    triggerDependencies?: pulumi.Input<pulumi.Input<inputs.datafactory.TriggerTumblingWindowTriggerDependency>[]>;
}
