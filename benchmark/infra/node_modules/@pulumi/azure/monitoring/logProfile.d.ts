import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a [Log Profile](https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitoring-overview-activity-logs#export-the-activity-log-with-a-log-profile). A Log Profile configures how Activity Logs are exported.
 *
 * > **NOTE:** It's only possible to configure one Log Profile per Subscription. If you are trying to create more than one Log Profile, an error with `StatusCode=409` will occur.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "GRS",
 * });
 * const exampleEventHubNamespace = new azure.eventhub.EventHubNamespace("exampleEventHubNamespace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard",
 *     capacity: 2,
 * });
 * const exampleLogProfile = new azure.monitoring.LogProfile("exampleLogProfile", {
 *     categories: [
 *         "Action",
 *         "Delete",
 *         "Write",
 *     ],
 *     locations: [
 *         "westus",
 *         "global",
 *     ],
 *     servicebusRuleId: pulumi.interpolate`${exampleEventHubNamespace.id}/authorizationrules/RootManageSharedAccessKey`,
 *     storageAccountId: exampleAccount.id,
 *     retentionPolicy: {
 *         enabled: true,
 *         days: 7,
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * A Log Profile can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:monitoring/logProfile:LogProfile example /subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.Insights/logProfiles/test
 * ```
 */
export declare class LogProfile extends pulumi.CustomResource {
    /**
     * Get an existing LogProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LogProfileState, opts?: pulumi.CustomResourceOptions): LogProfile;
    /**
     * Returns true if the given object is an instance of LogProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LogProfile;
    /**
     * List of categories of the logs.
     */
    readonly categories: pulumi.Output<string[]>;
    /**
     * List of regions for which Activity Log events are stored or streamed.
     */
    readonly locations: pulumi.Output<string[]>;
    /**
     * The name of the Log Profile. Changing this forces a
     * new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `retentionPolicy` block as documented below. A retention policy for how long Activity Logs are retained in the storage account.
     */
    readonly retentionPolicy: pulumi.Output<outputs.monitoring.LogProfileRetentionPolicy>;
    /**
     * The service bus (or event hub) rule ID of the service bus (or event hub) namespace in which the Activity Log is streamed to. At least one of `storageAccountId` or `servicebusRuleId` must be set.
     */
    readonly servicebusRuleId: pulumi.Output<string | undefined>;
    /**
     * The resource ID of the storage account in which the Activity Log is stored. At least one of `storageAccountId` or `servicebusRuleId` must be set.
     */
    readonly storageAccountId: pulumi.Output<string | undefined>;
    /**
     * Create a LogProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LogProfileArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LogProfile resources.
 */
export interface LogProfileState {
    /**
     * List of categories of the logs.
     */
    categories?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of regions for which Activity Log events are stored or streamed.
     */
    locations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Log Profile. Changing this forces a
     * new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `retentionPolicy` block as documented below. A retention policy for how long Activity Logs are retained in the storage account.
     */
    retentionPolicy?: pulumi.Input<inputs.monitoring.LogProfileRetentionPolicy>;
    /**
     * The service bus (or event hub) rule ID of the service bus (or event hub) namespace in which the Activity Log is streamed to. At least one of `storageAccountId` or `servicebusRuleId` must be set.
     */
    servicebusRuleId?: pulumi.Input<string>;
    /**
     * The resource ID of the storage account in which the Activity Log is stored. At least one of `storageAccountId` or `servicebusRuleId` must be set.
     */
    storageAccountId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a LogProfile resource.
 */
export interface LogProfileArgs {
    /**
     * List of categories of the logs.
     */
    categories: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of regions for which Activity Log events are stored or streamed.
     */
    locations: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Log Profile. Changing this forces a
     * new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `retentionPolicy` block as documented below. A retention policy for how long Activity Logs are retained in the storage account.
     */
    retentionPolicy: pulumi.Input<inputs.monitoring.LogProfileRetentionPolicy>;
    /**
     * The service bus (or event hub) rule ID of the service bus (or event hub) namespace in which the Activity Log is streamed to. At least one of `storageAccountId` or `servicebusRuleId` must be set.
     */
    servicebusRuleId?: pulumi.Input<string>;
    /**
     * The resource ID of the storage account in which the Activity Log is stored. At least one of `storageAccountId` or `servicebusRuleId` must be set.
     */
    storageAccountId?: pulumi.Input<string>;
}
