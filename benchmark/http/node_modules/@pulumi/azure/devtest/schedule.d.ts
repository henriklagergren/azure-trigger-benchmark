import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages automated startup and shutdown schedules for Azure Dev Test Lab.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleLab = new azure.devtest.Lab("exampleLab", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleSchedule = new azure.devtest.Schedule("exampleSchedule", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     labName: exampleLab.name,
 *     weeklyRecurrence: {
 *         time: "1100",
 *         weekDays: [
 *             "Monday",
 *             "Tuesday",
 *         ],
 *     },
 *     timeZoneId: "Pacific Standard Time",
 *     taskType: "LabVmsStartupTask",
 *     notificationSettings: {},
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * DevTest Schedule's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:devtest/schedule:Schedule example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.DevTestLab/labs/myDevTestLab/schedules/labvmautostart
 * ```
 */
export declare class Schedule extends pulumi.CustomResource {
    /**
     * Get an existing Schedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScheduleState, opts?: pulumi.CustomResourceOptions): Schedule;
    /**
     * Returns true if the given object is an instance of Schedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Schedule;
    readonly dailyRecurrence: pulumi.Output<outputs.devtest.ScheduleDailyRecurrence | undefined>;
    readonly hourlyRecurrence: pulumi.Output<outputs.devtest.ScheduleHourlyRecurrence | undefined>;
    /**
     * The name of the dev test lab. Changing this forces a new resource to be created.
     */
    readonly labName: pulumi.Output<string>;
    /**
     * The location where the schedule is created. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the dev test lab schedule. Valid value for name depends on the `taskType`. For instance for taskType `LabVmsStartupTask` the name needs to be `LabVmAutoStart`.
     */
    readonly name: pulumi.Output<string>;
    readonly notificationSettings: pulumi.Output<outputs.devtest.ScheduleNotificationSettings>;
    /**
     * The name of the resource group in which to create the dev test lab schedule. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The status of this schedule. Possible values are `Enabled` and `Disabled`. Defaults to `Disabled`.
     */
    readonly status: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The task type of the schedule. Possible values include `LabVmsShutdownTask` and `LabVmAutoStart`.
     */
    readonly taskType: pulumi.Output<string>;
    /**
     * The time zone ID (e.g. Pacific Standard time).
     */
    readonly timeZoneId: pulumi.Output<string>;
    readonly weeklyRecurrence: pulumi.Output<outputs.devtest.ScheduleWeeklyRecurrence | undefined>;
    /**
     * Create a Schedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScheduleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Schedule resources.
 */
export interface ScheduleState {
    dailyRecurrence?: pulumi.Input<inputs.devtest.ScheduleDailyRecurrence>;
    hourlyRecurrence?: pulumi.Input<inputs.devtest.ScheduleHourlyRecurrence>;
    /**
     * The name of the dev test lab. Changing this forces a new resource to be created.
     */
    labName?: pulumi.Input<string>;
    /**
     * The location where the schedule is created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the dev test lab schedule. Valid value for name depends on the `taskType`. For instance for taskType `LabVmsStartupTask` the name needs to be `LabVmAutoStart`.
     */
    name?: pulumi.Input<string>;
    notificationSettings?: pulumi.Input<inputs.devtest.ScheduleNotificationSettings>;
    /**
     * The name of the resource group in which to create the dev test lab schedule. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The status of this schedule. Possible values are `Enabled` and `Disabled`. Defaults to `Disabled`.
     */
    status?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The task type of the schedule. Possible values include `LabVmsShutdownTask` and `LabVmAutoStart`.
     */
    taskType?: pulumi.Input<string>;
    /**
     * The time zone ID (e.g. Pacific Standard time).
     */
    timeZoneId?: pulumi.Input<string>;
    weeklyRecurrence?: pulumi.Input<inputs.devtest.ScheduleWeeklyRecurrence>;
}
/**
 * The set of arguments for constructing a Schedule resource.
 */
export interface ScheduleArgs {
    dailyRecurrence?: pulumi.Input<inputs.devtest.ScheduleDailyRecurrence>;
    hourlyRecurrence?: pulumi.Input<inputs.devtest.ScheduleHourlyRecurrence>;
    /**
     * The name of the dev test lab. Changing this forces a new resource to be created.
     */
    labName: pulumi.Input<string>;
    /**
     * The location where the schedule is created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the dev test lab schedule. Valid value for name depends on the `taskType`. For instance for taskType `LabVmsStartupTask` the name needs to be `LabVmAutoStart`.
     */
    name?: pulumi.Input<string>;
    notificationSettings: pulumi.Input<inputs.devtest.ScheduleNotificationSettings>;
    /**
     * The name of the resource group in which to create the dev test lab schedule. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The status of this schedule. Possible values are `Enabled` and `Disabled`. Defaults to `Disabled`.
     */
    status?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The task type of the schedule. Possible values include `LabVmsShutdownTask` and `LabVmAutoStart`.
     */
    taskType: pulumi.Input<string>;
    /**
     * The time zone ID (e.g. Pacific Standard time).
     */
    timeZoneId: pulumi.Input<string>;
    weeklyRecurrence?: pulumi.Input<inputs.devtest.ScheduleWeeklyRecurrence>;
}
