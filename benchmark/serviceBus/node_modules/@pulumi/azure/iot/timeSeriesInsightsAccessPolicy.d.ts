import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Azure IoT Time Series Insights Access Policy.
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
 * const exampleTimeSeriesInsightsAccessPolicy = new azure.iot.TimeSeriesInsightsAccessPolicy("exampleTimeSeriesInsightsAccessPolicy", {
 *     timeSeriesInsightsEnvironmentId: exampleTimeSeriesInsightsStandardEnvironment.name,
 *     principalObjectId: "aGUID",
 *     roles: ["Reader"],
 * });
 * ```
 *
 * ## Import
 *
 * Azure IoT Time Series Insights Access Policy can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:iot/timeSeriesInsightsAccessPolicy:TimeSeriesInsightsAccessPolicy example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.TimeSeriesInsights/environments/environment1/accessPolicies/example
 * ```
 */
export declare class TimeSeriesInsightsAccessPolicy extends pulumi.CustomResource {
    /**
     * Get an existing TimeSeriesInsightsAccessPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TimeSeriesInsightsAccessPolicyState, opts?: pulumi.CustomResourceOptions): TimeSeriesInsightsAccessPolicy;
    /**
     * Returns true if the given object is an instance of TimeSeriesInsightsAccessPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TimeSeriesInsightsAccessPolicy;
    /**
     * The description of the Azure IoT Time Series Insights Access Policy.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Azure IoT Time Series Insights Access Policy. Changing this forces a new resource to be created. Must be globally unique.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The id of the principal in Azure Active Directory.
     */
    readonly principalObjectId: pulumi.Output<string>;
    /**
     * A list of roles to apply to the Access Policy. Valid values include `Contributor` and `Reader`.
     */
    readonly roles: pulumi.Output<string[]>;
    /**
     * The resource ID of the Azure IoT Time Series Insights Environment in which to create the Azure IoT Time Series Insights Reference Data Set. Changing this forces a new resource to be created.
     */
    readonly timeSeriesInsightsEnvironmentId: pulumi.Output<string>;
    /**
     * Create a TimeSeriesInsightsAccessPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TimeSeriesInsightsAccessPolicyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering TimeSeriesInsightsAccessPolicy resources.
 */
export interface TimeSeriesInsightsAccessPolicyState {
    /**
     * The description of the Azure IoT Time Series Insights Access Policy.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the name of the Azure IoT Time Series Insights Access Policy. Changing this forces a new resource to be created. Must be globally unique.
     */
    name?: pulumi.Input<string>;
    /**
     * The id of the principal in Azure Active Directory.
     */
    principalObjectId?: pulumi.Input<string>;
    /**
     * A list of roles to apply to the Access Policy. Valid values include `Contributor` and `Reader`.
     */
    roles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The resource ID of the Azure IoT Time Series Insights Environment in which to create the Azure IoT Time Series Insights Reference Data Set. Changing this forces a new resource to be created.
     */
    timeSeriesInsightsEnvironmentId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a TimeSeriesInsightsAccessPolicy resource.
 */
export interface TimeSeriesInsightsAccessPolicyArgs {
    /**
     * The description of the Azure IoT Time Series Insights Access Policy.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the name of the Azure IoT Time Series Insights Access Policy. Changing this forces a new resource to be created. Must be globally unique.
     */
    name?: pulumi.Input<string>;
    /**
     * The id of the principal in Azure Active Directory.
     */
    principalObjectId: pulumi.Input<string>;
    /**
     * A list of roles to apply to the Access Policy. Valid values include `Contributor` and `Reader`.
     */
    roles: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The resource ID of the Azure IoT Time Series Insights Environment in which to create the Azure IoT Time Series Insights Reference Data Set. Changing this forces a new resource to be created.
     */
    timeSeriesInsightsEnvironmentId: pulumi.Input<string>;
}
