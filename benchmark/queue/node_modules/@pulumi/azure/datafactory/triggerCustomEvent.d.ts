import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Custom Event Trigger inside an Azure Data Factory.
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
 * const exampleTopic = new azure.eventgrid.Topic("exampleTopic", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleTriggerCustomEvent = new azure.datafactory.TriggerCustomEvent("exampleTriggerCustomEvent", {
 *     dataFactoryId: exampleFactory.id,
 *     eventgridTopicId: exampleTopic.id,
 *     events: [
 *         "event1",
 *         "event2",
 *     ],
 *     subjectBeginsWith: "abc",
 *     subjectEndsWith: "xyz",
 *     annotations: [
 *         "example1",
 *         "example2",
 *         "example3",
 *     ],
 *     description: "example description",
 *     pipelines: [{
 *         name: examplePipeline.name,
 *         parameters: {
 *             Env: "Prod",
 *         },
 *     }],
 *     additionalProperties: {
 *         foo: "foo1",
 *         bar: "bar2",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Custom Event Trigger can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/triggerCustomEvent:TriggerCustomEvent example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/triggers/example
 * ```
 */
export declare class TriggerCustomEvent extends pulumi.CustomResource {
    /**
     * Get an existing TriggerCustomEvent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TriggerCustomEventState, opts?: pulumi.CustomResourceOptions): TriggerCustomEvent;
    /**
     * Returns true if the given object is an instance of TriggerCustomEvent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TriggerCustomEvent;
    /**
     * Specifies if the Data Factory Custom Event Trigger is activated. Defaults to `true`.
     */
    readonly activated: pulumi.Output<boolean | undefined>;
    /**
     * A map of additional properties to associate with the Data Factory Custom Event Trigger.
     */
    readonly additionalProperties: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * List of tags that can be used for describing the Data Factory Custom Event Trigger.
     */
    readonly annotations: pulumi.Output<string[] | undefined>;
    /**
     * The ID of Data Factory in which to associate the Trigger with. Changing this forces a new resource.
     */
    readonly dataFactoryId: pulumi.Output<string>;
    /**
     * The description for the Data Factory Custom Event Trigger.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The ID of Event Grid Topic in which event will be listened. Changing this forces a new resource.
     */
    readonly eventgridTopicId: pulumi.Output<string>;
    /**
     * List of events that will fire this trigger. At least one event must be specified.
     */
    readonly events: pulumi.Output<string[]>;
    /**
     * Specifies the name of the Data Factory Custom Event Trigger. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * One or more `pipeline` blocks as defined below.
     */
    readonly pipelines: pulumi.Output<outputs.datafactory.TriggerCustomEventPipeline[]>;
    /**
     * The pattern that event subject starts with for trigger to fire.
     */
    readonly subjectBeginsWith: pulumi.Output<string | undefined>;
    /**
     * The pattern that event subject ends with for trigger to fire.
     */
    readonly subjectEndsWith: pulumi.Output<string | undefined>;
    /**
     * Create a TriggerCustomEvent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TriggerCustomEventArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering TriggerCustomEvent resources.
 */
export interface TriggerCustomEventState {
    /**
     * Specifies if the Data Factory Custom Event Trigger is activated. Defaults to `true`.
     */
    activated?: pulumi.Input<boolean>;
    /**
     * A map of additional properties to associate with the Data Factory Custom Event Trigger.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Custom Event Trigger.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of Data Factory in which to associate the Trigger with. Changing this forces a new resource.
     */
    dataFactoryId?: pulumi.Input<string>;
    /**
     * The description for the Data Factory Custom Event Trigger.
     */
    description?: pulumi.Input<string>;
    /**
     * The ID of Event Grid Topic in which event will be listened. Changing this forces a new resource.
     */
    eventgridTopicId?: pulumi.Input<string>;
    /**
     * List of events that will fire this trigger. At least one event must be specified.
     */
    events?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the name of the Data Factory Custom Event Trigger. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `pipeline` blocks as defined below.
     */
    pipelines?: pulumi.Input<pulumi.Input<inputs.datafactory.TriggerCustomEventPipeline>[]>;
    /**
     * The pattern that event subject starts with for trigger to fire.
     */
    subjectBeginsWith?: pulumi.Input<string>;
    /**
     * The pattern that event subject ends with for trigger to fire.
     */
    subjectEndsWith?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a TriggerCustomEvent resource.
 */
export interface TriggerCustomEventArgs {
    /**
     * Specifies if the Data Factory Custom Event Trigger is activated. Defaults to `true`.
     */
    activated?: pulumi.Input<boolean>;
    /**
     * A map of additional properties to associate with the Data Factory Custom Event Trigger.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Custom Event Trigger.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of Data Factory in which to associate the Trigger with. Changing this forces a new resource.
     */
    dataFactoryId: pulumi.Input<string>;
    /**
     * The description for the Data Factory Custom Event Trigger.
     */
    description?: pulumi.Input<string>;
    /**
     * The ID of Event Grid Topic in which event will be listened. Changing this forces a new resource.
     */
    eventgridTopicId: pulumi.Input<string>;
    /**
     * List of events that will fire this trigger. At least one event must be specified.
     */
    events: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the name of the Data Factory Custom Event Trigger. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `pipeline` blocks as defined below.
     */
    pipelines: pulumi.Input<pulumi.Input<inputs.datafactory.TriggerCustomEventPipeline>[]>;
    /**
     * The pattern that event subject starts with for trigger to fire.
     */
    subjectBeginsWith?: pulumi.Input<string>;
    /**
     * The pattern that event subject ends with for trigger to fire.
     */
    subjectEndsWith?: pulumi.Input<string>;
}
