import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure IoT Time Series Insights Gen2 Environment.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const storage = new azure.storage.Account("storage", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleTimeSeriesInsightsGen2Environment = new azure.iot.TimeSeriesInsightsGen2Environment("exampleTimeSeriesInsightsGen2Environment", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     skuName: "L1",
 *     warmStoreDataRetentionTime: "P30D",
 *     idProperties: ["id"],
 *     storage: {
 *         name: storage.name,
 *         key: storage.primaryAccessKey,
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Azure IoT Time Series Insights Gen2 Environment can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:iot/timeSeriesInsightsGen2Environment:TimeSeriesInsightsGen2Environment example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.TimeSeriesInsights/environments/example
 * ```
 */
export declare class TimeSeriesInsightsGen2Environment extends pulumi.CustomResource {
    /**
     * Get an existing TimeSeriesInsightsGen2Environment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TimeSeriesInsightsGen2EnvironmentState, opts?: pulumi.CustomResourceOptions): TimeSeriesInsightsGen2Environment;
    /**
     * Returns true if the given object is an instance of TimeSeriesInsightsGen2Environment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TimeSeriesInsightsGen2Environment;
    /**
     * The FQDN used to access the environment data.
     */
    readonly dataAccessFqdn: pulumi.Output<string>;
    /**
     * A list of property ids for the Azure IoT Time Series Insights Gen2 Environment
     */
    readonly idProperties: pulumi.Output<string[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Azure IoT Time Series Insights Gen2 Environment. Changing this forces a new resource to be created. Must be globally unique.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Azure IoT Time Series Insights Gen2 Environment.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Specifies the SKU Name for this IoT Time Series Insights Gen2 Environment. Currently it supports only `L1`. For gen2, capacity cannot be specified.
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * A `storage` block as defined below.
     */
    readonly storage: pulumi.Output<outputs.iot.TimeSeriesInsightsGen2EnvironmentStorage>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the ISO8601 timespan specifying the minimum number of days the environment's events will be available for query. Changing this forces a new resource to be created.
     */
    readonly warmStoreDataRetentionTime: pulumi.Output<string | undefined>;
    /**
     * Create a TimeSeriesInsightsGen2Environment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TimeSeriesInsightsGen2EnvironmentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering TimeSeriesInsightsGen2Environment resources.
 */
export interface TimeSeriesInsightsGen2EnvironmentState {
    /**
     * The FQDN used to access the environment data.
     */
    dataAccessFqdn?: pulumi.Input<string>;
    /**
     * A list of property ids for the Azure IoT Time Series Insights Gen2 Environment
     */
    idProperties?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Azure IoT Time Series Insights Gen2 Environment. Changing this forces a new resource to be created. Must be globally unique.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Azure IoT Time Series Insights Gen2 Environment.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies the SKU Name for this IoT Time Series Insights Gen2 Environment. Currently it supports only `L1`. For gen2, capacity cannot be specified.
     */
    skuName?: pulumi.Input<string>;
    /**
     * A `storage` block as defined below.
     */
    storage?: pulumi.Input<inputs.iot.TimeSeriesInsightsGen2EnvironmentStorage>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the ISO8601 timespan specifying the minimum number of days the environment's events will be available for query. Changing this forces a new resource to be created.
     */
    warmStoreDataRetentionTime?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a TimeSeriesInsightsGen2Environment resource.
 */
export interface TimeSeriesInsightsGen2EnvironmentArgs {
    /**
     * A list of property ids for the Azure IoT Time Series Insights Gen2 Environment
     */
    idProperties: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Azure IoT Time Series Insights Gen2 Environment. Changing this forces a new resource to be created. Must be globally unique.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Azure IoT Time Series Insights Gen2 Environment.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the SKU Name for this IoT Time Series Insights Gen2 Environment. Currently it supports only `L1`. For gen2, capacity cannot be specified.
     */
    skuName: pulumi.Input<string>;
    /**
     * A `storage` block as defined below.
     */
    storage: pulumi.Input<inputs.iot.TimeSeriesInsightsGen2EnvironmentStorage>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the ISO8601 timespan specifying the minimum number of days the environment's events will be available for query. Changing this forces a new resource to be created.
     */
    warmStoreDataRetentionTime?: pulumi.Input<string>;
}
