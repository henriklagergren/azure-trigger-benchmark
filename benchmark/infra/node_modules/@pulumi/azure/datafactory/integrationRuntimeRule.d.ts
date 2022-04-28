import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Data Factory Azure Integration Runtime.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleFactory = new azure.datafactory.Factory("exampleFactory", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleIntegrationRuntimeRule = new azure.datafactory.IntegrationRuntimeRule("exampleIntegrationRuntimeRule", {
 *     dataFactoryId: exampleFactory.id,
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Azure Integration Runtimes can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/integrationRuntimeRule:IntegrationRuntimeRule example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/integrationruntimes/example
 * ```
 */
export declare class IntegrationRuntimeRule extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationRuntimeRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IntegrationRuntimeRuleState, opts?: pulumi.CustomResourceOptions): IntegrationRuntimeRule;
    /**
     * Returns true if the given object is an instance of IntegrationRuntimeRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IntegrationRuntimeRule;
    /**
     * Cluster will not be recycled and it will be used in next data flow activity run until TTL (time to live) is reached if this is set as `false`. Default is `true`.
     */
    readonly cleanupEnabled: pulumi.Output<boolean>;
    /**
     * Compute type of the cluster which will execute data flow job. Valid values are `General`, `ComputeOptimized` and `MemoryOptimized`. Defaults to `General`.
     */
    readonly computeType: pulumi.Output<string | undefined>;
    /**
     * Core count of the cluster which will execute data flow job. Valid values are `8`, `16`, `32`, `48`, `80`, `144` and `272`. Defaults to `8`.
     */
    readonly coreCount: pulumi.Output<number | undefined>;
    /**
     * The Data Factory ID in which to associate the Linked Service with. Changing this forces a new resource.
     */
    readonly dataFactoryId: pulumi.Output<string>;
    /**
     * The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
     *
     * @deprecated `data_factory_name` is deprecated in favour of `data_factory_id` and will be removed in version 3.0 of the AzureRM provider
     */
    readonly dataFactoryName: pulumi.Output<string>;
    /**
     * Integration runtime description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Use `AutoResolve` to create an auto-resolve integration runtime. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Managed Integration Runtime. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Managed Integration Runtime. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Time to live (in minutes) setting of the cluster which will execute data flow job. Defaults to `0`.
     */
    readonly timeToLiveMin: pulumi.Output<number | undefined>;
    /**
     * Is Integration Runtime compute provisioned within Managed Virtual Network? Changing this forces a new resource to be created.
     */
    readonly virtualNetworkEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Create a IntegrationRuntimeRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationRuntimeRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IntegrationRuntimeRule resources.
 */
export interface IntegrationRuntimeRuleState {
    /**
     * Cluster will not be recycled and it will be used in next data flow activity run until TTL (time to live) is reached if this is set as `false`. Default is `true`.
     */
    cleanupEnabled?: pulumi.Input<boolean>;
    /**
     * Compute type of the cluster which will execute data flow job. Valid values are `General`, `ComputeOptimized` and `MemoryOptimized`. Defaults to `General`.
     */
    computeType?: pulumi.Input<string>;
    /**
     * Core count of the cluster which will execute data flow job. Valid values are `8`, `16`, `32`, `48`, `80`, `144` and `272`. Defaults to `8`.
     */
    coreCount?: pulumi.Input<number>;
    /**
     * The Data Factory ID in which to associate the Linked Service with. Changing this forces a new resource.
     */
    dataFactoryId?: pulumi.Input<string>;
    /**
     * The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
     *
     * @deprecated `data_factory_name` is deprecated in favour of `data_factory_id` and will be removed in version 3.0 of the AzureRM provider
     */
    dataFactoryName?: pulumi.Input<string>;
    /**
     * Integration runtime description.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Use `AutoResolve` to create an auto-resolve integration runtime. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Managed Integration Runtime. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Managed Integration Runtime. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Time to live (in minutes) setting of the cluster which will execute data flow job. Defaults to `0`.
     */
    timeToLiveMin?: pulumi.Input<number>;
    /**
     * Is Integration Runtime compute provisioned within Managed Virtual Network? Changing this forces a new resource to be created.
     */
    virtualNetworkEnabled?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a IntegrationRuntimeRule resource.
 */
export interface IntegrationRuntimeRuleArgs {
    /**
     * Cluster will not be recycled and it will be used in next data flow activity run until TTL (time to live) is reached if this is set as `false`. Default is `true`.
     */
    cleanupEnabled?: pulumi.Input<boolean>;
    /**
     * Compute type of the cluster which will execute data flow job. Valid values are `General`, `ComputeOptimized` and `MemoryOptimized`. Defaults to `General`.
     */
    computeType?: pulumi.Input<string>;
    /**
     * Core count of the cluster which will execute data flow job. Valid values are `8`, `16`, `32`, `48`, `80`, `144` and `272`. Defaults to `8`.
     */
    coreCount?: pulumi.Input<number>;
    /**
     * The Data Factory ID in which to associate the Linked Service with. Changing this forces a new resource.
     */
    dataFactoryId?: pulumi.Input<string>;
    /**
     * The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
     *
     * @deprecated `data_factory_name` is deprecated in favour of `data_factory_id` and will be removed in version 3.0 of the AzureRM provider
     */
    dataFactoryName?: pulumi.Input<string>;
    /**
     * Integration runtime description.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Use `AutoResolve` to create an auto-resolve integration runtime. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Managed Integration Runtime. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Managed Integration Runtime. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Time to live (in minutes) setting of the cluster which will execute data flow job. Defaults to `0`.
     */
    timeToLiveMin?: pulumi.Input<number>;
    /**
     * Is Integration Runtime compute provisioned within Managed Virtual Network? Changing this forces a new resource to be created.
     */
    virtualNetworkEnabled?: pulumi.Input<boolean>;
}
