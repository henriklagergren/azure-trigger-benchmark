import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Metric Alert within Azure Monitor.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const mainResourceGroup = new azure.core.ResourceGroup("mainResourceGroup", {location: "West Europe"});
 * const toMonitor = new azure.storage.Account("toMonitor", {
 *     resourceGroupName: mainResourceGroup.name,
 *     location: mainResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const mainActionGroup = new azure.monitoring.ActionGroup("mainActionGroup", {
 *     resourceGroupName: mainResourceGroup.name,
 *     shortName: "exampleact",
 *     webhookReceivers: [{
 *         name: "callmyapi",
 *         serviceUri: "http://example.com/alert",
 *     }],
 * });
 * const example = new azure.monitoring.MetricAlert("example", {
 *     resourceGroupName: mainResourceGroup.name,
 *     scopes: [toMonitor.id],
 *     description: "Action will be triggered when Transactions count is greater than 50.",
 *     criterias: [{
 *         metricNamespace: "Microsoft.Storage/storageAccounts",
 *         metricName: "Transactions",
 *         aggregation: "Total",
 *         operator: "GreaterThan",
 *         threshold: 50,
 *         dimensions: [{
 *             name: "ApiName",
 *             operator: "Include",
 *             values: ["*"],
 *         }],
 *     }],
 *     actions: [{
 *         actionGroupId: mainActionGroup.id,
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Metric Alerts can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:monitoring/metricAlert:MetricAlert main /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example-resources/providers/Microsoft.Insights/metricAlerts/example-metricalert
 * ```
 */
export declare class MetricAlert extends pulumi.CustomResource {
    /**
     * Get an existing MetricAlert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MetricAlertState, opts?: pulumi.CustomResourceOptions): MetricAlert;
    /**
     * Returns true if the given object is an instance of MetricAlert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is MetricAlert;
    /**
     * One or more `action` blocks as defined below.
     */
    readonly actions: pulumi.Output<outputs.monitoring.MetricAlertAction[] | undefined>;
    /**
     * A `applicationInsightsWebTestLocationAvailabilityCriteria` block as defined below.
     */
    readonly applicationInsightsWebTestLocationAvailabilityCriteria: pulumi.Output<outputs.monitoring.MetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria | undefined>;
    /**
     * Should the alerts in this Metric Alert be auto resolved? Defaults to `true`.
     */
    readonly autoMitigate: pulumi.Output<boolean | undefined>;
    /**
     * One or more (static) `criteria` blocks as defined below.
     */
    readonly criterias: pulumi.Output<outputs.monitoring.MetricAlertCriteria[] | undefined>;
    /**
     * The description of this Metric Alert.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * A `dynamicCriteria` block as defined below.
     */
    readonly dynamicCriteria: pulumi.Output<outputs.monitoring.MetricAlertDynamicCriteria | undefined>;
    /**
     * Should this Metric Alert be enabled? Defaults to `true`.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * The evaluation frequency of this Metric Alert, represented in ISO 8601 duration format. Possible values are `PT1M`, `PT5M`, `PT15M`, `PT30M` and `PT1H`. Defaults to `PT1M`.
     */
    readonly frequency: pulumi.Output<string | undefined>;
    /**
     * The name of the Metric Alert. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Metric Alert instance.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A set of strings of resource IDs at which the metric criteria should be applied.
     */
    readonly scopes: pulumi.Output<string[]>;
    /**
     * The severity of this Metric Alert. Possible values are `0`, `1`, `2`, `3` and `4`. Defaults to `3`.
     */
    readonly severity: pulumi.Output<number | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The location of the target resource.
     */
    readonly targetResourceLocation: pulumi.Output<string>;
    /**
     * The resource type (e.g. `Microsoft.Compute/virtualMachines`) of the target resource.
     */
    readonly targetResourceType: pulumi.Output<string>;
    /**
     * The period of time that is used to monitor alert activity, represented in ISO 8601 duration format. This value must be greater than `frequency`. Possible values are `PT1M`, `PT5M`, `PT15M`, `PT30M`, `PT1H`, `PT6H`, `PT12H` and `P1D`. Defaults to `PT5M`.
     */
    readonly windowSize: pulumi.Output<string | undefined>;
    /**
     * Create a MetricAlert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MetricAlertArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering MetricAlert resources.
 */
export interface MetricAlertState {
    /**
     * One or more `action` blocks as defined below.
     */
    actions?: pulumi.Input<pulumi.Input<inputs.monitoring.MetricAlertAction>[]>;
    /**
     * A `applicationInsightsWebTestLocationAvailabilityCriteria` block as defined below.
     */
    applicationInsightsWebTestLocationAvailabilityCriteria?: pulumi.Input<inputs.monitoring.MetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria>;
    /**
     * Should the alerts in this Metric Alert be auto resolved? Defaults to `true`.
     */
    autoMitigate?: pulumi.Input<boolean>;
    /**
     * One or more (static) `criteria` blocks as defined below.
     */
    criterias?: pulumi.Input<pulumi.Input<inputs.monitoring.MetricAlertCriteria>[]>;
    /**
     * The description of this Metric Alert.
     */
    description?: pulumi.Input<string>;
    /**
     * A `dynamicCriteria` block as defined below.
     */
    dynamicCriteria?: pulumi.Input<inputs.monitoring.MetricAlertDynamicCriteria>;
    /**
     * Should this Metric Alert be enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The evaluation frequency of this Metric Alert, represented in ISO 8601 duration format. Possible values are `PT1M`, `PT5M`, `PT15M`, `PT30M` and `PT1H`. Defaults to `PT1M`.
     */
    frequency?: pulumi.Input<string>;
    /**
     * The name of the Metric Alert. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Metric Alert instance.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A set of strings of resource IDs at which the metric criteria should be applied.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The severity of this Metric Alert. Possible values are `0`, `1`, `2`, `3` and `4`. Defaults to `3`.
     */
    severity?: pulumi.Input<number>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The location of the target resource.
     */
    targetResourceLocation?: pulumi.Input<string>;
    /**
     * The resource type (e.g. `Microsoft.Compute/virtualMachines`) of the target resource.
     */
    targetResourceType?: pulumi.Input<string>;
    /**
     * The period of time that is used to monitor alert activity, represented in ISO 8601 duration format. This value must be greater than `frequency`. Possible values are `PT1M`, `PT5M`, `PT15M`, `PT30M`, `PT1H`, `PT6H`, `PT12H` and `P1D`. Defaults to `PT5M`.
     */
    windowSize?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a MetricAlert resource.
 */
export interface MetricAlertArgs {
    /**
     * One or more `action` blocks as defined below.
     */
    actions?: pulumi.Input<pulumi.Input<inputs.monitoring.MetricAlertAction>[]>;
    /**
     * A `applicationInsightsWebTestLocationAvailabilityCriteria` block as defined below.
     */
    applicationInsightsWebTestLocationAvailabilityCriteria?: pulumi.Input<inputs.monitoring.MetricAlertApplicationInsightsWebTestLocationAvailabilityCriteria>;
    /**
     * Should the alerts in this Metric Alert be auto resolved? Defaults to `true`.
     */
    autoMitigate?: pulumi.Input<boolean>;
    /**
     * One or more (static) `criteria` blocks as defined below.
     */
    criterias?: pulumi.Input<pulumi.Input<inputs.monitoring.MetricAlertCriteria>[]>;
    /**
     * The description of this Metric Alert.
     */
    description?: pulumi.Input<string>;
    /**
     * A `dynamicCriteria` block as defined below.
     */
    dynamicCriteria?: pulumi.Input<inputs.monitoring.MetricAlertDynamicCriteria>;
    /**
     * Should this Metric Alert be enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The evaluation frequency of this Metric Alert, represented in ISO 8601 duration format. Possible values are `PT1M`, `PT5M`, `PT15M`, `PT30M` and `PT1H`. Defaults to `PT1M`.
     */
    frequency?: pulumi.Input<string>;
    /**
     * The name of the Metric Alert. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Metric Alert instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A set of strings of resource IDs at which the metric criteria should be applied.
     */
    scopes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The severity of this Metric Alert. Possible values are `0`, `1`, `2`, `3` and `4`. Defaults to `3`.
     */
    severity?: pulumi.Input<number>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The location of the target resource.
     */
    targetResourceLocation?: pulumi.Input<string>;
    /**
     * The resource type (e.g. `Microsoft.Compute/virtualMachines`) of the target resource.
     */
    targetResourceType?: pulumi.Input<string>;
    /**
     * The period of time that is used to monitor alert activity, represented in ISO 8601 duration format. This value must be greater than `frequency`. Possible values are `PT1M`, `PT5M`, `PT15M`, `PT30M`, `PT1H`, `PT6H`, `PT12H` and `P1D`. Defaults to `PT5M`.
     */
    windowSize?: pulumi.Input<string>;
}
