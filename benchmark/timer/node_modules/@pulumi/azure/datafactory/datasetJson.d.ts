import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure JSON Dataset inside an Azure Data Factory.
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
 * const exampleDatasetJson = new azure.datafactory.DatasetJson("exampleDatasetJson", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryId: exampleFactory.id,
 *     linkedServiceName: exampleLinkedServiceWeb.name,
 *     httpServerLocation: {
 *         relativeUrl: "/fizz/buzz/",
 *         path: "foo/bar/",
 *         filename: "foo.txt",
 *     },
 *     encoding: "UTF-8",
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Datasets can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/datasetJson:DatasetJson example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/datasets/example
 * ```
 */
export declare class DatasetJson extends pulumi.CustomResource {
    /**
     * Get an existing DatasetJson resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatasetJsonState, opts?: pulumi.CustomResourceOptions): DatasetJson;
    /**
     * Returns true if the given object is an instance of DatasetJson.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DatasetJson;
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
     * A `azureBlobStorageLocation` block as defined below.
     */
    readonly azureBlobStorageLocation: pulumi.Output<outputs.datafactory.DatasetJsonAzureBlobStorageLocation | undefined>;
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
     * The encoding format for the file.
     */
    readonly encoding: pulumi.Output<string | undefined>;
    /**
     * The folder that this Dataset is in. If not specified, the Dataset will appear at the root level.
     */
    readonly folder: pulumi.Output<string | undefined>;
    /**
     * A `httpServerLocation` block as defined below.
     */
    readonly httpServerLocation: pulumi.Output<outputs.datafactory.DatasetJsonHttpServerLocation | undefined>;
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
     * The name of the resource group in which to create the Data Factory Dataset. Changing this forces a new resource
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `schemaColumn` block as defined below.
     */
    readonly schemaColumns: pulumi.Output<outputs.datafactory.DatasetJsonSchemaColumn[] | undefined>;
    /**
     * Create a DatasetJson resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatasetJsonArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DatasetJson resources.
 */
export interface DatasetJsonState {
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
     * A `azureBlobStorageLocation` block as defined below.
     */
    azureBlobStorageLocation?: pulumi.Input<inputs.datafactory.DatasetJsonAzureBlobStorageLocation>;
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
     * The encoding format for the file.
     */
    encoding?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, the Dataset will appear at the root level.
     */
    folder?: pulumi.Input<string>;
    /**
     * A `httpServerLocation` block as defined below.
     */
    httpServerLocation?: pulumi.Input<inputs.datafactory.DatasetJsonHttpServerLocation>;
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
     * The name of the resource group in which to create the Data Factory Dataset. Changing this forces a new resource
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `schemaColumn` block as defined below.
     */
    schemaColumns?: pulumi.Input<pulumi.Input<inputs.datafactory.DatasetJsonSchemaColumn>[]>;
}
/**
 * The set of arguments for constructing a DatasetJson resource.
 */
export interface DatasetJsonArgs {
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
     * A `azureBlobStorageLocation` block as defined below.
     */
    azureBlobStorageLocation?: pulumi.Input<inputs.datafactory.DatasetJsonAzureBlobStorageLocation>;
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
     * The encoding format for the file.
     */
    encoding?: pulumi.Input<string>;
    /**
     * The folder that this Dataset is in. If not specified, the Dataset will appear at the root level.
     */
    folder?: pulumi.Input<string>;
    /**
     * A `httpServerLocation` block as defined below.
     */
    httpServerLocation?: pulumi.Input<inputs.datafactory.DatasetJsonHttpServerLocation>;
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
     * The name of the resource group in which to create the Data Factory Dataset. Changing this forces a new resource
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `schemaColumn` block as defined below.
     */
    schemaColumns?: pulumi.Input<pulumi.Input<inputs.datafactory.DatasetJsonSchemaColumn>[]>;
}
