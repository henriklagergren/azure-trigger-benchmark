import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a NetApp Snapshot Policy.
 *
 * ## NetApp Snapshot Policy Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "East US"});
 * const exampleAccount = new azure.netapp.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleSnapshotPolicy = new azure.netapp.SnapshotPolicy("exampleSnapshotPolicy", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     accountName: exampleAccount.name,
 *     enabled: true,
 *     hourlySchedule: {
 *         snapshotsToKeep: 4,
 *         minute: 15,
 *     },
 *     dailySchedule: {
 *         snapshotsToKeep: 2,
 *         hour: 20,
 *         minute: 15,
 *     },
 *     weeklySchedule: {
 *         snapshotsToKeep: 1,
 *         daysOfWeeks: [
 *             "Monday",
 *             "Friday",
 *         ],
 *         hour: 23,
 *         minute: 0,
 *     },
 *     monthlySchedule: {
 *         snapshotsToKeep: 1,
 *         daysOfMonths: [
 *             1,
 *             15,
 *             20,
 *             30,
 *         ],
 *         hour: 5,
 *         minute: 45,
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * NetApp Snapshot Policy can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:netapp/snapshotPolicy:SnapshotPolicy example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.NetApp/netAppAccounts/account1/snapshotPolicies/snapshotpolicy1
 * ```
 */
export declare class SnapshotPolicy extends pulumi.CustomResource {
    /**
     * Get an existing SnapshotPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SnapshotPolicyState, opts?: pulumi.CustomResourceOptions): SnapshotPolicy;
    /**
     * Returns true if the given object is an instance of SnapshotPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SnapshotPolicy;
    /**
     * The name of the NetApp Account in which the NetApp Snapshot Policy should be created. Changing this forces a new resource to be created.
     */
    readonly accountName: pulumi.Output<string>;
    /**
     * Sets a daily snapshot schedule. See details in below `dailySchedule` block.
     */
    readonly dailySchedule: pulumi.Output<outputs.netapp.SnapshotPolicyDailySchedule>;
    /**
     * Defines that the NetApp Snapshot Policy is enabled or not.
     */
    readonly enabled: pulumi.Output<boolean>;
    /**
     * Sets an hourly snapshot schedule. See details in below `hourlySchedule` block.
     */
    readonly hourlySchedule: pulumi.Output<outputs.netapp.SnapshotPolicyHourlySchedule>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Sets a monthly snapshot schedule. See details in below `monthlySchedule` block.
     */
    readonly monthlySchedule: pulumi.Output<outputs.netapp.SnapshotPolicyMonthlySchedule>;
    /**
     * The name of the NetApp Snapshot Policy. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group where the NetApp Snapshot Policy should be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Sets a weekly snapshot schedule. See details in below `weeklySchedule` block.
     */
    readonly weeklySchedule: pulumi.Output<outputs.netapp.SnapshotPolicyWeeklySchedule>;
    /**
     * Create a SnapshotPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SnapshotPolicyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SnapshotPolicy resources.
 */
export interface SnapshotPolicyState {
    /**
     * The name of the NetApp Account in which the NetApp Snapshot Policy should be created. Changing this forces a new resource to be created.
     */
    accountName?: pulumi.Input<string>;
    /**
     * Sets a daily snapshot schedule. See details in below `dailySchedule` block.
     */
    dailySchedule?: pulumi.Input<inputs.netapp.SnapshotPolicyDailySchedule>;
    /**
     * Defines that the NetApp Snapshot Policy is enabled or not.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Sets an hourly snapshot schedule. See details in below `hourlySchedule` block.
     */
    hourlySchedule?: pulumi.Input<inputs.netapp.SnapshotPolicyHourlySchedule>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Sets a monthly snapshot schedule. See details in below `monthlySchedule` block.
     */
    monthlySchedule?: pulumi.Input<inputs.netapp.SnapshotPolicyMonthlySchedule>;
    /**
     * The name of the NetApp Snapshot Policy. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group where the NetApp Snapshot Policy should be created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Sets a weekly snapshot schedule. See details in below `weeklySchedule` block.
     */
    weeklySchedule?: pulumi.Input<inputs.netapp.SnapshotPolicyWeeklySchedule>;
}
/**
 * The set of arguments for constructing a SnapshotPolicy resource.
 */
export interface SnapshotPolicyArgs {
    /**
     * The name of the NetApp Account in which the NetApp Snapshot Policy should be created. Changing this forces a new resource to be created.
     */
    accountName: pulumi.Input<string>;
    /**
     * Sets a daily snapshot schedule. See details in below `dailySchedule` block.
     */
    dailySchedule?: pulumi.Input<inputs.netapp.SnapshotPolicyDailySchedule>;
    /**
     * Defines that the NetApp Snapshot Policy is enabled or not.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * Sets an hourly snapshot schedule. See details in below `hourlySchedule` block.
     */
    hourlySchedule?: pulumi.Input<inputs.netapp.SnapshotPolicyHourlySchedule>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Sets a monthly snapshot schedule. See details in below `monthlySchedule` block.
     */
    monthlySchedule?: pulumi.Input<inputs.netapp.SnapshotPolicyMonthlySchedule>;
    /**
     * The name of the NetApp Snapshot Policy. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group where the NetApp Snapshot Policy should be created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Sets a weekly snapshot schedule. See details in below `weeklySchedule` block.
     */
    weeklySchedule?: pulumi.Input<inputs.netapp.SnapshotPolicyWeeklySchedule>;
}
