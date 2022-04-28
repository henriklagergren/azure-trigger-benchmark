import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure HTTP Dataset inside an Azure Data Factory.
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
 * const exampleLinkedServiceWeb = new azure.datafactory.LinkedServiceWeb("exampleLinkedServiceWeb", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryId: exampleFactory.id,
 *     authenticationType: "Anonymous",
 *     url: "https://www.bing.com",
 * });
 * const exampleDatasetHttp = new azure.datafactory.DatasetHttp("exampleDatasetHttp", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryId: exampleFactory.id,
 *     linkedServiceName: exampleLinkedServiceWeb.name,
 *     relativeUrl: "http://www.bing.com",
 *     requestBody: "foo=bar",
 *     requestMethod: "POST",
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Datasets can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/datasetHttp:DatasetHttp example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/datasets/example
 * ```
 */
export declare class DatasetHttp extends pulumi.CustomResource {
    /**
     * Get an existing DatasetHttp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatasetHttpState, opts?: pulumi.CustomResourceOptions): DatasetHttp;
    /**
     * Returns true if the given object is an instance of DatasetHttp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DatasetHttp;
    /**
     * A map of additional properties to associate with the Data Factory Dataset.
     */
    readonly additionalProperties: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * List of tags that can be used for describing the Data Factory Dataset.
     */
    readonly annotations: pulumi.Output<string[] | undefined>;
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
     * The description for the Data Factory Dataset.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The folder that this Dataset is in. If not specified, the Dataset will appear at the root level.
     */
    readonly folder: pulumi.Output<string | undefined>;
    /**
     * The Data Factory Linked Service name in which to associate the Dataset with.
     */
    readonly linkedServiceName: pulumi.Output<string>;
    /**
     * Specifies the name of the Data Factory Dataset. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A map of parameters to associate with the Data Factory Dataset.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The relative URL based on the URL in the HTTP Linked Service.
     */
    readonly relativeUrl: pulumi.Output<string | undefined>;
    /**
     * The body for the HTTP request.
     */
    readonly requestBody: pulumi.Output<string | undefined>;
    /**
     * The HTTP method for the HTTP request. (e.g. GET, POST)
     */
    readonly requestMethod: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group in which to create the Data Factory Dataset. Changing this forces a new resource
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `schemaColumn` block as defined below.
     */
    readonly schemaColumns: pulumi.Output<outputs.datafactory.DatasetHttpSchemaColumn[] | undefined>;
    /**
     * Create a DatasetHttp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatasetHttpArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DatasetHttp resources.
 */
export interface DatasetHttpState {
    /**
     * A map of additional properties to associate with the Data Factory Dataset.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Dataset.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
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
     * The description for the Data Factory Dataset.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, the Dataset will appear at the root level.
     */
    folder?: pulumi.Input<string>;
    /**
     * The Data Factory Linked Service name in which to associate the Dataset with.
     */
    linkedServiceName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Dataset. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Dataset.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The relative URL based on the URL in the HTTP Linked Service.
     */
    relativeUrl?: pulumi.Input<string>;
    /**
     * The body for the HTTP request.
     */
    requestBody?: pulumi.Input<string>;
    /**
     * The HTTP method for the HTTP request. (e.g. GET, POST)
     */
    requestMethod?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Data Factory Dataset. Changing this forces a new resource
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `schemaColumn` block as defined below.
     */
    schemaColumns?: pulumi.Input<pulumi.Input<inputs.datafactory.DatasetHttpSchemaColumn>[]>;
}
/**
 * The set of arguments for constructing a DatasetHttp resource.
 */
export interface DatasetHttpArgs {
    /**
     * A map of additional properties to associate with the Data Factory Dataset.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Dataset.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
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
     * The description for the Data Factory Dataset.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, the Dataset will appear at the root level.
     */
    folder?: pulumi.Input<string>;
    /**
     * The Data Factory Linked Service name in which to associate the Dataset with.
     */
    linkedServiceName: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Dataset. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Dataset.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The relative URL based on the URL in the HTTP Linked Service.
     */
    relativeUrl?: pulumi.Input<string>;
    /**
     * The body for the HTTP request.
     */
    requestBody?: pulumi.Input<string>;
    /**
     * The HTTP method for the HTTP request. (e.g. GET, POST)
     */
    requestMethod?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Data Factory Dataset. Changing this forces a new resource
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `schemaColumn` block as defined below.
     */
    schemaColumns?: pulumi.Input<pulumi.Input<inputs.datafactory.DatasetHttpSchemaColumn>[]>;
}
