import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a logz Monitor.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleLogzMonitor = new azure.monitoring.LogzMonitor("exampleLogzMonitor", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     plan: {
 *         billingCycle: "Monthly",
 *         effectiveDate: "2022-06-06T00:00:00Z",
 *         planId: "100gb14days",
 *         usageType: "Committed",
 *     },
 *     user: {
 *         email: "user@example.com",
 *         firstName: "Example",
 *         lastName: "User",
 *         phoneNumber: "+12313803556",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * logz Monitors can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:monitoring/logzMonitor:LogzMonitor example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Logz/monitors/monitor1
 * ```
 */
export declare class LogzMonitor extends pulumi.CustomResource {
    /**
     * Get an existing LogzMonitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogzMonitorState, opts?: pulumi.CustomResourceOptions): LogzMonitor;
    /**
     * Returns true if the given object is an instance of LogzMonitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LogzMonitor;
    /**
     * Name of the Logz organization. Changing this forces a new logz Monitor to be created.
     */
    readonly companyName: pulumi.Output<string | undefined>;
    /**
     * Whether the resource monitoring is enabled?
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the Enterprise App. Changing this forces a new logz Monitor to be created.
     */
    readonly enterpriseAppId: pulumi.Output<string | undefined>;
    /**
     * The Azure Region where the logz Monitor should exist. Changing this forces a new logz Monitor to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The ID associated with the logz organization of this logz Monitor.
     */
    readonly logzOrganizationId: pulumi.Output<string>;
    /**
     * The name which should be used for this logz Monitor. Changing this forces a new logz Monitor to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `plan` block as defined below.
     */
    readonly plan: pulumi.Output<outputs.monitoring.LogzMonitorPlan>;
    /**
     * The name of the Resource Group where the logz Monitor should exist. Changing this forces a new logz Monitor to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The single sign on url associated with the logz organization of this logz Monitor.
     */
    readonly singleSignOnUrl: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the logz Monitor.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * A `user` block as defined below.
     */
    readonly user: pulumi.Output<outputs.monitoring.LogzMonitorUser>;
    /**
     * Create a LogzMonitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LogzMonitorArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LogzMonitor resources.
 */
export interface LogzMonitorState {
    /**
     * Name of the Logz organization. Changing this forces a new logz Monitor to be created.
     */
    companyName?: pulumi.Input<string>;
    /**
     * Whether the resource monitoring is enabled?
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The ID of the Enterprise App. Changing this forces a new logz Monitor to be created.
     */
    enterpriseAppId?: pulumi.Input<string>;
    /**
     * The Azure Region where the logz Monitor should exist. Changing this forces a new logz Monitor to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The ID associated with the logz organization of this logz Monitor.
     */
    logzOrganizationId?: pulumi.Input<string>;
    /**
     * The name which should be used for this logz Monitor. Changing this forces a new logz Monitor to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `plan` block as defined below.
     */
    plan?: pulumi.Input<inputs.monitoring.LogzMonitorPlan>;
    /**
     * The name of the Resource Group where the logz Monitor should exist. Changing this forces a new logz Monitor to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The single sign on url associated with the logz organization of this logz Monitor.
     */
    singleSignOnUrl?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the logz Monitor.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `user` block as defined below.
     */
    user?: pulumi.Input<inputs.monitoring.LogzMonitorUser>;
}
/**
 * The set of arguments for constructing a LogzMonitor resource.
 */
export interface LogzMonitorArgs {
    /**
     * Name of the Logz organization. Changing this forces a new logz Monitor to be created.
     */
    companyName?: pulumi.Input<string>;
    /**
     * Whether the resource monitoring is enabled?
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The ID of the Enterprise App. Changing this forces a new logz Monitor to be created.
     */
    enterpriseAppId?: pulumi.Input<string>;
    /**
     * The Azure Region where the logz Monitor should exist. Changing this forces a new logz Monitor to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this logz Monitor. Changing this forces a new logz Monitor to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `plan` block as defined below.
     */
    plan: pulumi.Input<inputs.monitoring.LogzMonitorPlan>;
    /**
     * The name of the Resource Group where the logz Monitor should exist. Changing this forces a new logz Monitor to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the logz Monitor.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `user` block as defined below.
     */
    user: pulumi.Input<inputs.monitoring.LogzMonitorUser>;
}
