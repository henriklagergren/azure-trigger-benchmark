import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Data Factory Binary Dataset inside an Azure Data Factory.
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
 * const exampleLinkedServiceSftp = new azure.datafactory.LinkedServiceSftp("exampleLinkedServiceSftp", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryId: exampleFactory.id,
 *     authenticationType: "Basic",
 *     host: "http://www.bing.com",
 *     port: 22,
 *     username: "foo",
 *     password: "bar",
 * });
 * const exampleDatasetBinary = new azure.datafactory.DatasetBinary("exampleDatasetBinary", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryId: exampleFactory.id,
 *     linkedServiceName: exampleLinkedServiceSftp.name,
 *     sftpServerLocation: {
 *         path: "/test/",
 *         filename: "**",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Data Factorie Binary Datasets can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/datasetBinary:DatasetBinary example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/datasets/example
 * ```
 */
export declare class DatasetBinary extends pulumi.CustomResource {
    /**
     * Get an existing DatasetBinary resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatasetBinaryState, opts?: pulumi.CustomResourceOptions): DatasetBinary;
    /**
     * Returns true if the given object is an instance of DatasetBinary.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DatasetBinary;
    /**
     * A map of additional properties to associate with the Data Factory Binary Dataset.
     */
    readonly additionalProperties: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * List of tags that can be used for describing the Data Factory Binary Dataset.
     */
    readonly annotations: pulumi.Output<string[] | undefined>;
    /**
     * A `azureBlobStorageLocation` block as defined below.
     */
    readonly azureBlobStorageLocation: pulumi.Output<outputs.datafactory.DatasetBinaryAzureBlobStorageLocation | undefined>;
    /**
     * A `compression` block as defined below.
     */
    readonly compression: pulumi.Output<outputs.datafactory.DatasetBinaryCompression | undefined>;
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
     * A `httpServerLocation` block as defined below.
     */
    readonly httpServerLocation: pulumi.Output<outputs.datafactory.DatasetBinaryHttpServerLocation | undefined>;
    /**
     * The Data Factory Linked Service name in which to associate the Binary Dataset with.
     */
    readonly linkedServiceName: pulumi.Output<string>;
    /**
     * Specifies the name of the Data Factory Binary Dataset. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies a list of parameters to associate with the Data Factory Binary Dataset.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The name of the Resource Group where the Data Factory should exist. Changing this forces a new Data Factory Binary Dataset to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `sftpServerLocation` block as defined below.
     * ---
     */
    readonly sftpServerLocation: pulumi.Output<outputs.datafactory.DatasetBinarySftpServerLocation | undefined>;
    /**
     * Create a DatasetBinary resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatasetBinaryArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DatasetBinary resources.
 */
export interface DatasetBinaryState {
    /**
     * A map of additional properties to associate with the Data Factory Binary Dataset.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Binary Dataset.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A `azureBlobStorageLocation` block as defined below.
     */
    azureBlobStorageLocation?: pulumi.Input<inputs.datafactory.DatasetBinaryAzureBlobStorageLocation>;
    /**
     * A `compression` block as defined below.
     */
    compression?: pulumi.Input<inputs.datafactory.DatasetBinaryCompression>;
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
     * A `httpServerLocation` block as defined below.
     */
    httpServerLocation?: pulumi.Input<inputs.datafactory.DatasetBinaryHttpServerLocation>;
    /**
     * The Data Factory Linked Service name in which to associate the Binary Dataset with.
     */
    linkedServiceName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Binary Dataset. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies a list of parameters to associate with the Data Factory Binary Dataset.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the Resource Group where the Data Factory should exist. Changing this forces a new Data Factory Binary Dataset to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `sftpServerLocation` block as defined below.
     * ---
     */
    sftpServerLocation?: pulumi.Input<inputs.datafactory.DatasetBinarySftpServerLocation>;
}
/**
 * The set of arguments for constructing a DatasetBinary resource.
 */
export interface DatasetBinaryArgs {
    /**
     * A map of additional properties to associate with the Data Factory Binary Dataset.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Binary Dataset.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A `azureBlobStorageLocation` block as defined below.
     */
    azureBlobStorageLocation?: pulumi.Input<inputs.datafactory.DatasetBinaryAzureBlobStorageLocation>;
    /**
     * A `compression` block as defined below.
     */
    compression?: pulumi.Input<inputs.datafactory.DatasetBinaryCompression>;
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
     * A `httpServerLocation` block as defined below.
     */
    httpServerLocation?: pulumi.Input<inputs.datafactory.DatasetBinaryHttpServerLocation>;
    /**
     * The Data Factory Linked Service name in which to associate the Binary Dataset with.
     */
    linkedServiceName: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Binary Dataset. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies a list of parameters to associate with the Data Factory Binary Dataset.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the Resource Group where the Data Factory should exist. Changing this forces a new Data Factory Binary Dataset to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `sftpServerLocation` block as defined below.
     * ---
     */
    sftpServerLocation?: pulumi.Input<inputs.datafactory.DatasetBinarySftpServerLocation>;
}
