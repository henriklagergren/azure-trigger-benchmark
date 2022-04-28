import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Activity Log Alert within Azure Monitor.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const mainResourceGroup = new azure.core.ResourceGroup("mainResourceGroup", {location: "West Europe"});
 * const mainActionGroup = new azure.monitoring.ActionGroup("mainActionGroup", {
 *     resourceGroupName: mainResourceGroup.name,
 *     shortName: "p0action",
 *     webhookReceivers: [{
 *         name: "callmyapi",
 *         serviceUri: "http://example.com/alert",
 *     }],
 * });
 * const toMonitor = new azure.storage.Account("toMonitor", {
 *     resourceGroupName: mainResourceGroup.name,
 *     location: mainResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "GRS",
 * });
 * const mainActivityLogAlert = new azure.monitoring.ActivityLogAlert("mainActivityLogAlert", {
 *     resourceGroupName: mainResourceGroup.name,
 *     scopes: [mainResourceGroup.id],
 *     description: "This alert will monitor a specific storage account updates.",
 *     criteria: {
 *         resourceId: toMonitor.id,
 *         operationName: "Microsoft.Storage/storageAccounts/write",
 *         category: "Recommendation",
 *     },
 *     actions: [{
 *         actionGroupId: mainActionGroup.id,
 *         webhookProperties: {
 *             from: "source",
 *         },
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Activity log alerts can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:monitoring/activityLogAlert:ActivityLogAlert example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Insights/activityLogAlerts/myalertname
 * ```
 */
export declare class ActivityLogAlert extends pulumi.CustomResource {
    /**
     * Get an existing ActivityLogAlert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ActivityLogAlertState, opts?: pulumi.CustomResourceOptions): ActivityLogAlert;
    /**
     * Returns true if the given object is an instance of ActivityLogAlert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ActivityLogAlert;
    /**
     * One or more `action` blocks as defined below.
     */
    readonly actions: pulumi.Output<outputs.monitoring.ActivityLogAlertAction[] | undefined>;
    /**
     * A `criteria` block as defined below.
     */
    readonly criteria: pulumi.Output<outputs.monitoring.ActivityLogAlertCriteria>;
    /**
     * The description of this activity log alert.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Should this Activity Log Alert be enabled? Defaults to `true`.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * The name of the activity log alert. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the activity log alert instance.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Scope at which the Activity Log should be applied, for example a the Resource ID of a Subscription or a Resource (such as a Storage Account).
     */
    readonly scopes: pulumi.Output<string[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a ActivityLogAlert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActivityLogAlertArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ActivityLogAlert resources.
 */
export interface ActivityLogAlertState {
    /**
     * One or more `action` blocks as defined below.
     */
    actions?: pulumi.Input<pulumi.Input<inputs.monitoring.ActivityLogAlertAction>[]>;
    /**
     * A `criteria` block as defined below.
     */
    criteria?: pulumi.Input<inputs.monitoring.ActivityLogAlertCriteria>;
    /**
     * The description of this activity log alert.
     */
    description?: pulumi.Input<string>;
    /**
     * Should this Activity Log Alert be enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The name of the activity log alert. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the activity log alert instance.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Scope at which the Activity Log should be applied, for example a the Resource ID of a Subscription or a Resource (such as a Storage Account).
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a ActivityLogAlert resource.
 */
export interface ActivityLogAlertArgs {
    /**
     * One or more `action` blocks as defined below.
     */
    actions?: pulumi.Input<pulumi.Input<inputs.monitoring.ActivityLogAlertAction>[]>;
    /**
     * A `criteria` block as defined below.
     */
    criteria: pulumi.Input<inputs.monitoring.ActivityLogAlertCriteria>;
    /**
     * The description of this activity log alert.
     */
    description?: pulumi.Input<string>;
    /**
     * Should this Activity Log Alert be enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The name of the activity log alert. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the activity log alert instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Scope at which the Activity Log should be applied, for example a the Resource ID of a Subscription or a Resource (such as a Storage Account).
     */
    scopes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
