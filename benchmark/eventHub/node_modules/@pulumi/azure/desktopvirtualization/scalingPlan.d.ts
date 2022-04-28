import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Virtual Desktop Scaling Plan.
 *
 * ## Disclaimers
 *
 * > **Note** Scaling Plans are currently in preview and are only supported in a limited number of regions. Both the Scaling Plan and any referenced Host Pools must be deployed in a supported region. [Autoscale (preview) for Azure Virtual Desktop host pools](https://docs.microsoft.com/en-us/azure/virtual-desktop/autoscale-scaling-plan).
 *
 * > **Note** Scaling Plans require specific permissions to be granted to the Windows Virtual Desktop application before a 'host_pool' can be configured. [Required Permissions for Scaling Plans](https://docs.microsoft.com/en-us/azure/virtual-desktop/autoscale-scaling-plan#create-a-custom-rbac-role).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * as azuread from "@pulumi/azuread";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleRoleDefinition = new azure.authorization.RoleDefinition("exampleRoleDefinition", {
 *     scope: exampleResourceGroup.id,
 *     description: "AVD AutoScale Role",
 *     permissions: [{
 *         actions: [
 *             "Microsoft.Insights/eventtypes/values/read",
 *             "Microsoft.Compute/virtualMachines/deallocate/action",
 *             "Microsoft.Compute/virtualMachines/restart/action",
 *             "Microsoft.Compute/virtualMachines/powerOff/action",
 *             "Microsoft.Compute/virtualMachines/start/action",
 *             "Microsoft.Compute/virtualMachines/read",
 *             "Microsoft.DesktopVirtualization/hostpools/read",
 *             "Microsoft.DesktopVirtualization/hostpools/write",
 *             "Microsoft.DesktopVirtualization/hostpools/sessionhosts/read",
 *             "Microsoft.DesktopVirtualization/hostpools/sessionhosts/write",
 *             "Microsoft.DesktopVirtualization/hostpools/sessionhosts/usersessions/delete",
 *             "Microsoft.DesktopVirtualization/hostpools/sessionhosts/usersessions/read",
 *             "Microsoft.DesktopVirtualization/hostpools/sessionhosts/usersessions/sendMessage/action",
 *             "Microsoft.DesktopVirtualization/hostpools/sessionhosts/usersessions/read",
 *         ],
 *         notActions: [],
 *     }],
 *     assignableScopes: [exampleResourceGroup.id],
 * });
 * const exampleServicePrincipal = azuread.getServicePrincipal({
 *     displayName: "Windows Virtual Desktop",
 * });
 * const exampleAssignment = new azure.authorization.Assignment("exampleAssignment", {
 *     name: random_uuid.example.result,
 *     scope: exampleResourceGroup.id,
 *     roleDefinitionId: exampleRoleDefinition.roleDefinitionResourceId,
 *     principalId: exampleServicePrincipal.then(exampleServicePrincipal => exampleServicePrincipal.applicationId),
 *     skipServicePrincipalAadCheck: true,
 * });
 * const exampleHostPool = new azure.desktopvirtualization.HostPool("exampleHostPool", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     type: "Pooled",
 *     validateEnvironment: true,
 *     loadBalancerType: "BreadthFirst",
 * });
 * const exampleScalingPlan = new azure.desktopvirtualization.ScalingPlan("exampleScalingPlan", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     friendlyName: "Scaling Plan Example",
 *     description: "Example Scaling Plan",
 *     timeZone: "GMT Standard Time",
 *     schedules: [{
 *         name: "Weekdays",
 *         daysOfWeeks: [
 *             "Monday",
 *             "Tuesday",
 *             "Wednesday",
 *             "Thursday",
 *             "Friday",
 *         ],
 *         rampUpStartTime: "05:00",
 *         rampUpLoadBalancingAlgorithm: "BreadthFirst",
 *         rampUpMinimumHostsPercent: 20,
 *         rampUpCapacityThresholdPercent: 10,
 *         peakStartTime: "09:00",
 *         peakLoadBalancingAlgorithm: "BreadthFirst",
 *         rampDownStartTime: "19:00",
 *         rampDownLoadBalancingAlgorithm: "DepthFirst",
 *         rampDownMinimumHostsPercent: 10,
 *         rampDownForceLogoffUsers: false,
 *         rampDownWaitTimeMinutes: 45,
 *         rampDownNotificationMessage: "Please log off in the next 45 minutes...",
 *         rampDownCapacityThresholdPercent: 5,
 *         rampDownStopHostsWhen: "ZeroSessions",
 *         offPeakStartTime: "22:00",
 *         offPeakLoadBalancingAlgorithm: "DepthFirst",
 *     }],
 *     hostPools: [{
 *         hostpoolId: exampleHostPool.id,
 *         scalingPlanEnabled: true,
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Virtual Desktop Scaling Plans can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:desktopvirtualization/scalingPlan:ScalingPlan example /subscriptions/12345678-1234-9876-4563-123456789012/resourceGroups/resGroup1/providers/Microsoft.DesktopVirtualization/scalingPlans/plan1
 * ```
 */
export declare class ScalingPlan extends pulumi.CustomResource {
    /**
     * Get an existing ScalingPlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScalingPlanState, opts?: pulumi.CustomResourceOptions): ScalingPlan;
    /**
     * Returns true if the given object is an instance of ScalingPlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ScalingPlan;
    /**
     * A description of the Scaling Plan.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The name of the tag associated with the VMs you want to exclude from autoscaling.
     */
    readonly exclusionTag: pulumi.Output<string | undefined>;
    /**
     * Friendly name of the Scaling Plan.
     */
    readonly friendlyName: pulumi.Output<string | undefined>;
    /**
     * One or more `hostPool` blocks as defined below.
     */
    readonly hostPools: pulumi.Output<outputs.desktopvirtualization.ScalingPlanHostPool[] | undefined>;
    /**
     * The Azure Region where the Virtual Desktop Scaling Plan  should exist. Changing this forces a new Virtual Desktop Scaling Plan to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Virtual Desktop Scaling Plan . Changing this forces a new Virtual Desktop Scaling Plan to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Virtual Desktop Scaling Plan should exist. Changing this forces a new Virtual Desktop Scaling Plan  to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * One or more `schedule` blocks as defined below.
     */
    readonly schedules: pulumi.Output<outputs.desktopvirtualization.ScalingPlanSchedule[]>;
    /**
     * A mapping of tags which should be assigned to the Virtual Desktop Scaling Plan .
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the Time Zone which should be used by the Scaling Plan for time based events, [the possible values are defined here](https://jackstromberg.com/2017/01/list-of-time-zones-consumed-by-azure/).
     */
    readonly timeZone: pulumi.Output<string>;
    /**
     * Create a ScalingPlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScalingPlanArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ScalingPlan resources.
 */
export interface ScalingPlanState {
    /**
     * A description of the Scaling Plan.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the tag associated with the VMs you want to exclude from autoscaling.
     */
    exclusionTag?: pulumi.Input<string>;
    /**
     * Friendly name of the Scaling Plan.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * One or more `hostPool` blocks as defined below.
     */
    hostPools?: pulumi.Input<pulumi.Input<inputs.desktopvirtualization.ScalingPlanHostPool>[]>;
    /**
     * The Azure Region where the Virtual Desktop Scaling Plan  should exist. Changing this forces a new Virtual Desktop Scaling Plan to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Virtual Desktop Scaling Plan . Changing this forces a new Virtual Desktop Scaling Plan to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Virtual Desktop Scaling Plan should exist. Changing this forces a new Virtual Desktop Scaling Plan  to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * One or more `schedule` blocks as defined below.
     */
    schedules?: pulumi.Input<pulumi.Input<inputs.desktopvirtualization.ScalingPlanSchedule>[]>;
    /**
     * A mapping of tags which should be assigned to the Virtual Desktop Scaling Plan .
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the Time Zone which should be used by the Scaling Plan for time based events, [the possible values are defined here](https://jackstromberg.com/2017/01/list-of-time-zones-consumed-by-azure/).
     */
    timeZone?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ScalingPlan resource.
 */
export interface ScalingPlanArgs {
    /**
     * A description of the Scaling Plan.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the tag associated with the VMs you want to exclude from autoscaling.
     */
    exclusionTag?: pulumi.Input<string>;
    /**
     * Friendly name of the Scaling Plan.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * One or more `hostPool` blocks as defined below.
     */
    hostPools?: pulumi.Input<pulumi.Input<inputs.desktopvirtualization.ScalingPlanHostPool>[]>;
    /**
     * The Azure Region where the Virtual Desktop Scaling Plan  should exist. Changing this forces a new Virtual Desktop Scaling Plan to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Virtual Desktop Scaling Plan . Changing this forces a new Virtual Desktop Scaling Plan to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Virtual Desktop Scaling Plan should exist. Changing this forces a new Virtual Desktop Scaling Plan  to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * One or more `schedule` blocks as defined below.
     */
    schedules: pulumi.Input<pulumi.Input<inputs.desktopvirtualization.ScalingPlanSchedule>[]>;
    /**
     * A mapping of tags which should be assigned to the Virtual Desktop Scaling Plan .
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the Time Zone which should be used by the Scaling Plan for time based events, [the possible values are defined here](https://jackstromberg.com/2017/01/list-of-time-zones-consumed-by-azure/).
     */
    timeZone: pulumi.Input<string>;
}
