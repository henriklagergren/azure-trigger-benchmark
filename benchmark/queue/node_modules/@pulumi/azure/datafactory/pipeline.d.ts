import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Pipeline inside a Azure Data Factory.
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
 * const examplePipeline = new azure.datafactory.Pipeline("examplePipeline", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryId: exampleFactory.id,
 * });
 * ```
 * ### With Activities
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const test = new azure.datafactory.Pipeline("test", {
 *     resourceGroupName: azurerm_resource_group.test.name,
 *     dataFactoryId: azurerm_data_factory.test.id,
 *     variables: {
 *         bob: "item1",
 *     },
 *     activitiesJson: `[
 * 	{
 * 		"name": "Append variable1",
 * 		"type": "AppendVariable",
 * 		"dependsOn": [],
 * 		"userProperties": [],
 * 		"typeProperties": {
 * 			"variableName": "bob",
 * 			"value": "something"
 * 		}
 * 	}
 * ]
 * `,
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Pipeline's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/pipeline:Pipeline example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/pipelines/example
 * ```
 */
export declare class Pipeline extends pulumi.CustomResource {
    /**
     * Get an existing Pipeline resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PipelineState, opts?: pulumi.CustomResourceOptions): Pipeline;
    /**
     * Returns true if the given object is an instance of Pipeline.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Pipeline;
    /**
     * A JSON object that contains the activities that will be associated with the Data Factory Pipeline.
     */
    readonly activitiesJson: pulumi.Output<string | undefined>;
    /**
     * List of tags that can be used for describing the Data Factory Pipeline.
     */
    readonly annotations: pulumi.Output<string[] | undefined>;
    /**
     * The max number of concurrent runs for the Data Factory Pipeline. Must be between `1` and `50`.
     */
    readonly concurrency: pulumi.Output<number | undefined>;
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
     * The description for the Data Factory Pipeline.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The folder that this Pipeline is in. If not specified, the Pipeline will appear at the root level.
     */
    readonly folder: pulumi.Output<string | undefined>;
    /**
     * The TimeSpan value after which an Azure Monitoring Metric is fired.
     */
    readonly moniterMetricsAfterDuration: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Data Factory Pipeline. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A map of parameters to associate with the Data Factory Pipeline.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The name of the resource group in which to create the Data Factory Pipeline. Changing this forces a new resource
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A map of variables to associate with the Data Factory Pipeline.
     */
    readonly variables: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Pipeline resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PipelineArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Pipeline resources.
 */
export interface PipelineState {
    /**
     * A JSON object that contains the activities that will be associated with the Data Factory Pipeline.
     */
    activitiesJson?: pulumi.Input<string>;
    /**
     * List of tags that can be used for describing the Data Factory Pipeline.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The max number of concurrent runs for the Data Factory Pipeline. Must be between `1` and `50`.
     */
    concurrency?: pulumi.Input<number>;
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
     * The description for the Data Factory Pipeline.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Pipeline is in. If not specified, the Pipeline will appear at the root level.
     */
    folder?: pulumi.Input<string>;
    /**
     * The TimeSpan value after which an Azure Monitoring Metric is fired.
     */
    moniterMetricsAfterDuration?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Pipeline. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Pipeline.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the resource group in which to create the Data Factory Pipeline. Changing this forces a new resource
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A map of variables to associate with the Data Factory Pipeline.
     */
    variables?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Pipeline resource.
 */
export interface PipelineArgs {
    /**
     * A JSON object that contains the activities that will be associated with the Data Factory Pipeline.
     */
    activitiesJson?: pulumi.Input<string>;
    /**
     * List of tags that can be used for describing the Data Factory Pipeline.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The max number of concurrent runs for the Data Factory Pipeline. Must be between `1` and `50`.
     */
    concurrency?: pulumi.Input<number>;
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
     * The description for the Data Factory Pipeline.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Pipeline is in. If not specified, the Pipeline will appear at the root level.
     */
    folder?: pulumi.Input<string>;
    /**
     * The TimeSpan value after which an Azure Monitoring Metric is fired.
     */
    moniterMetricsAfterDuration?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Pipeline. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Pipeline.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the resource group in which to create the Data Factory Pipeline. Changing this forces a new resource
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A map of variables to associate with the Data Factory Pipeline.
     */
    variables?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
