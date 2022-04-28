import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure IoT Time Series Insights Reference Data Set.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleTimeSeriesInsightsStandardEnvironment = new azure.iot.TimeSeriesInsightsStandardEnvironment("exampleTimeSeriesInsightsStandardEnvironment", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     skuName: "S1_1",
 *     dataRetentionTime: "P30D",
 * });
 * const exampleTimeSeriesInsightsReferenceDataSet = new azure.iot.TimeSeriesInsightsReferenceDataSet("exampleTimeSeriesInsightsReferenceDataSet", {
 *     timeSeriesInsightsEnvironmentId: exampleTimeSeriesInsightsStandardEnvironment.id,
 *     location: exampleResourceGroup.location,
 *     keyProperties: [{
 *         name: "keyProperty1",
 *         type: "String",
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Azure IoT Time Series Insights Reference Data Set can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:iot/timeSeriesInsightsReferenceDataSet:TimeSeriesInsightsReferenceDataSet example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.TimeSeriesInsights/environments/example/referenceDataSets/example
 * ```
 */
export declare class TimeSeriesInsightsReferenceDataSet extends pulumi.CustomResource {
    /**
     * Get an existing TimeSeriesInsightsReferenceDataSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TimeSeriesInsightsReferenceDataSetState, opts?: pulumi.CustomResourceOptions): TimeSeriesInsightsReferenceDataSet;
    /**
     * Returns true if the given object is an instance of TimeSeriesInsightsReferenceDataSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TimeSeriesInsightsReferenceDataSet;
    /**
     * The comparison behavior that will be used to compare keys. Valid values include `Ordinal` and `OrdinalIgnoreCase`. Defaults to `Ordinal`. Changing this forces a new resource to be created.
     */
    readonly dataStringComparisonBehavior: pulumi.Output<string | undefined>;
    /**
     * A `keyProperty` block as defined below. Changing this forces a new resource to be created.
     */
    readonly keyProperties: pulumi.Output<outputs.iot.TimeSeriesInsightsReferenceDataSetKeyProperty[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Azure IoT Time Series Insights Reference Data Set. Changing this forces a new resource to be created. Must be globally unique.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The resource ID of the Azure IoT Time Series Insights Environment in which to create the Azure IoT Time Series Insights Reference Data Set. Changing this forces a new resource to be created.
     */
    readonly timeSeriesInsightsEnvironmentId: pulumi.Output<string>;
    /**
     * Create a TimeSeriesInsightsReferenceDataSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TimeSeriesInsightsReferenceDataSetArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering TimeSeriesInsightsReferenceDataSet resources.
 */
export interface TimeSeriesInsightsReferenceDataSetState {
    /**
     * The comparison behavior that will be used to compare keys. Valid values include `Ordinal` and `OrdinalIgnoreCase`. Defaults to `Ordinal`. Changing this forces a new resource to be created.
     */
    dataStringComparisonBehavior?: pulumi.Input<string>;
    /**
     * A `keyProperty` block as defined below. Changing this forces a new resource to be created.
     */
    keyProperties?: pulumi.Input<pulumi.Input<inputs.iot.TimeSeriesInsightsReferenceDataSetKeyProperty>[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Azure IoT Time Series Insights Reference Data Set. Changing this forces a new resource to be created. Must be globally unique.
     */
    name?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The resource ID of the Azure IoT Time Series Insights Environment in which to create the Azure IoT Time Series Insights Reference Data Set. Changing this forces a new resource to be created.
     */
    timeSeriesInsightsEnvironmentId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a TimeSeriesInsightsReferenceDataSet resource.
 */
export interface TimeSeriesInsightsReferenceDataSetArgs {
    /**
     * The comparison behavior that will be used to compare keys. Valid values include `Ordinal` and `OrdinalIgnoreCase`. Defaults to `Ordinal`. Changing this forces a new resource to be created.
     */
    dataStringComparisonBehavior?: pulumi.Input<string>;
    /**
     * A `keyProperty` block as defined below. Changing this forces a new resource to be created.
     */
    keyProperties: pulumi.Input<pulumi.Input<inputs.iot.TimeSeriesInsightsReferenceDataSetKeyProperty>[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Azure IoT Time Series Insights Reference Data Set. Changing this forces a new resource to be created. Must be globally unique.
     */
    name?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The resource ID of the Azure IoT Time Series Insights Environment in which to create the Azure IoT Time Series Insights Reference Data Set. Changing this forces a new resource to be created.
     */
    timeSeriesInsightsEnvironmentId: pulumi.Input<string>;
}
