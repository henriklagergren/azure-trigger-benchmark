import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Trigger Schedule inside a Azure Data Factory.
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
 * const testPipeline = new azure.datafactory.Pipeline("testPipeline", {
 *     resourceGroupName: azurerm_resource_group.test.name,
 *     dataFactoryId: azurerm_data_factory.test.id,
 * });
 * const testTriggerSchedule = new azure.datafactory.TriggerSchedule("testTriggerSchedule", {
 *     dataFactoryId: azurerm_data_factory.test.id,
 *     resourceGroupName: azurerm_resource_group.test.name,
 *     pipelineName: testPipeline.name,
 *     interval: 5,
 *     frequency: "Day",
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Schedule Trigger can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/triggerSchedule:TriggerSchedule example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/triggers/example
 * ```
 */
export declare class TriggerSchedule extends pulumi.CustomResource {
    /**
     * Get an existing TriggerSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TriggerScheduleState, opts?: pulumi.CustomResourceOptions): TriggerSchedule;
    /**
     * Returns true if the given object is an instance of TriggerSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TriggerSchedule;
    /**
     * Specifies if the Data Factory Schedule Trigger is activated. Defaults to `true`.
     */
    readonly activated: pulumi.Output<boolean>;
    /**
     * List of tags that can be used for describing the Data Factory Schedule Trigger.
     */
    readonly annotations: pulumi.Output<string[] | undefined>;
    /**
     * The Data Factory ID in which to associate the Linked Service with. Changing this forces a new resource.
     */
    readonly dataFactoryId: pulumi.Output<string>;
    /**
     * The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
     *
     * @deprecated `data_factory_name` is deprecated in favour of `data_factory_id` and will be removed in version 3.0 of the AzureRM provider
     */
    readonly dataFactoryName: pulumi.Output<string>;
    /**
     * The Schedule Trigger's description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The time the Schedule Trigger should end. The time will be represented in UTC.
     */
    readonly endTime: pulumi.Output<string | undefined>;
    /**
     * The trigger frequency. Valid values include `Minute`, `Hour`, `Day`, `Week`, `Month`. Defaults to `Minute`.
     */
    readonly frequency: pulumi.Output<string | undefined>;
    /**
     * The interval for how often the trigger occurs. This defaults to 1.
     */
    readonly interval: pulumi.Output<number | undefined>;
    /**
     * Specifies the name of the Data Factory Schedule Trigger. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The Data Factory Pipeline name that the trigger will act on.
     */
    readonly pipelineName: pulumi.Output<string>;
    /**
     * The pipeline parameters that the trigger will act upon.
     */
    readonly pipelineParameters: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The name of the resource group in which to create the Data Factory Schedule Trigger. Changing this forces a new resource
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `schedule` block as defined below, which further specifies the recurrence schedule for the trigger. A schedule is capable of limiting or increasing the number of trigger executions specified by the `frequency` and `interval` properties.
     */
    readonly schedule: pulumi.Output<outputs.datafactory.TriggerScheduleSchedule | undefined>;
    /**
     * The time the Schedule Trigger will start. This defaults to the current time. The time will be represented in UTC.
     */
    readonly startTime: pulumi.Output<string>;
    /**
     * Create a TriggerSchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TriggerScheduleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering TriggerSchedule resources.
 */
export interface TriggerScheduleState {
    /**
     * Specifies if the Data Factory Schedule Trigger is activated. Defaults to `true`.
     */
    activated?: pulumi.Input<boolean>;
    /**
     * List of tags that can be used for describing the Data Factory Schedule Trigger.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Data Factory ID in which to associate the Linked Service with. Changing this forces a new resource.
     */
    dataFactoryId?: pulumi.Input<string>;
    /**
     * The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
     *
     * @deprecated `data_factory_name` is deprecated in favour of `data_factory_id` and will be removed in version 3.0 of the AzureRM provider
     */
    dataFactoryName?: pulumi.Input<string>;
    /**
     * The Schedule Trigger's description.
     */
    description?: pulumi.Input<string>;
    /**
     * The time the Schedule Trigger should end. The time will be represented in UTC.
     */
    endTime?: pulumi.Input<string>;
    /**
     * The trigger frequency. Valid values include `Minute`, `Hour`, `Day`, `Week`, `Month`. Defaults to `Minute`.
     */
    frequency?: pulumi.Input<string>;
    /**
     * The interval for how often the trigger occurs. This defaults to 1.
     */
    interval?: pulumi.Input<number>;
    /**
     * Specifies the name of the Data Factory Schedule Trigger. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * The Data Factory Pipeline name that the trigger will act on.
     */
    pipelineName?: pulumi.Input<string>;
    /**
     * The pipeline parameters that the trigger will act upon.
     */
    pipelineParameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the resource group in which to create the Data Factory Schedule Trigger. Changing this forces a new resource
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `schedule` block as defined below, which further specifies the recurrence schedule for the trigger. A schedule is capable of limiting or increasing the number of trigger executions specified by the `frequency` and `interval` properties.
     */
    schedule?: pulumi.Input<inputs.datafactory.TriggerScheduleSchedule>;
    /**
     * The time the Schedule Trigger will start. This defaults to the current time. The time will be represented in UTC.
     */
    startTime?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a TriggerSchedule resource.
 */
export interface TriggerScheduleArgs {
    /**
     * Specifies if the Data Factory Schedule Trigger is activated. Defaults to `true`.
     */
    activated?: pulumi.Input<boolean>;
    /**
     * List of tags that can be used for describing the Data Factory Schedule Trigger.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Data Factory ID in which to associate the Linked Service with. Changing this forces a new resource.
     */
    dataFactoryId?: pulumi.Input<string>;
    /**
     * The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
     *
     * @deprecated `data_factory_name` is deprecated in favour of `data_factory_id` and will be removed in version 3.0 of the AzureRM provider
     */
    dataFactoryName?: pulumi.Input<string>;
    /**
     * The Schedule Trigger's description.
     */
    description?: pulumi.Input<string>;
    /**
     * The time the Schedule Trigger should end. The time will be represented in UTC.
     */
    endTime?: pulumi.Input<string>;
    /**
     * The trigger frequency. Valid values include `Minute`, `Hour`, `Day`, `Week`, `Month`. Defaults to `Minute`.
     */
    frequency?: pulumi.Input<string>;
    /**
     * The interval for how often the trigger occurs. This defaults to 1.
     */
    interval?: pulumi.Input<number>;
    /**
     * Specifies the name of the Data Factory Schedule Trigger. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * The Data Factory Pipeline name that the trigger will act on.
     */
    pipelineName: pulumi.Input<string>;
    /**
     * The pipeline parameters that the trigger will act upon.
     */
    pipelineParameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the resource group in which to create the Data Factory Schedule Trigger. Changing this forces a new resource
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `schedule` block as defined below, which further specifies the recurrence schedule for the trigger. A schedule is capable of limiting or increasing the number of trigger executions specified by the `frequency` and `interval` properties.
     */
    schedule?: pulumi.Input<inputs.datafactory.TriggerScheduleSchedule>;
    /**
     * The time the Schedule Trigger will start. This defaults to the current time. The time will be represented in UTC.
     */
    startTime?: pulumi.Input<string>;
}
