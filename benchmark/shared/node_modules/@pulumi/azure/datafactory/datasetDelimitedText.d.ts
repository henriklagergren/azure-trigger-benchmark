import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure Delimited Text Dataset inside an Azure Data Factory.
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
 * const exampleDatasetDelimitedText = new azure.datafactory.DatasetDelimitedText("exampleDatasetDelimitedText", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryId: exampleFactory.id,
 *     linkedServiceName: exampleLinkedServiceWeb.name,
 *     httpServerLocation: {
 *         relativeUrl: "http://www.bing.com",
 *         path: "foo/bar/",
 *         filename: "fizz.txt",
 *     },
 *     columnDelimiter: ",",
 *     rowDelimiter: "NEW",
 *     encoding: "UTF-8",
 *     quoteCharacter: "x",
 *     escapeCharacter: "f",
 *     firstRowAsHeader: true,
 *     nullValue: "NULL",
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Datasets can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/datasetDelimitedText:DatasetDelimitedText example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/datasets/example
 * ```
 */
export declare class DatasetDelimitedText extends pulumi.CustomResource {
    /**
     * Get an existing DatasetDelimitedText resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatasetDelimitedTextState, opts?: pulumi.CustomResourceOptions): DatasetDelimitedText;
    /**
     * Returns true if the given object is an instance of DatasetDelimitedText.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DatasetDelimitedText;
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
     * An `azureBlobFsLocation` block as defined below.
     */
    readonly azureBlobFsLocation: pulumi.Output<outputs.datafactory.DatasetDelimitedTextAzureBlobFsLocation | undefined>;
    /**
     * An `azureBlobStorageLocation` block as defined below.
     */
    readonly azureBlobStorageLocation: pulumi.Output<outputs.datafactory.DatasetDelimitedTextAzureBlobStorageLocation | undefined>;
    /**
     * The column delimiter. Defaults to `,`.
     */
    readonly columnDelimiter: pulumi.Output<string | undefined>;
    /**
     * The compression codec used to read/write text files. Valid values are `bzip2`, `gzip`, `deflate`, `ZipDeflate`, `TarGzip`, `Tar`, `snappy`, or `lz4`. Please note these values are case sensitive.
     */
    readonly compressionCodec: pulumi.Output<string | undefined>;
    /**
     * The compression ratio for the Data Factory Dataset. Valid values are `Fastest` or `Optimal`. Please note these values are case sensitive.
     */
    readonly compressionLevel: pulumi.Output<string | undefined>;
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
     * The escape character. Defaults to `\`.
     */
    readonly escapeCharacter: pulumi.Output<string | undefined>;
    /**
     * When used as input, treat the first row of data as headers. When used as output, write the headers into the output as the first row of data. Defaults to `false`.
     */
    readonly firstRowAsHeader: pulumi.Output<boolean | undefined>;
    /**
     * The folder that this Dataset is in. If not specified, the Dataset will appear at the root level.
     */
    readonly folder: pulumi.Output<string | undefined>;
    /**
     * A `httpServerLocation` block as defined below.
     */
    readonly httpServerLocation: pulumi.Output<outputs.datafactory.DatasetDelimitedTextHttpServerLocation | undefined>;
    /**
     * The Data Factory Linked Service name in which to associate the Dataset with.
     */
    readonly linkedServiceName: pulumi.Output<string>;
    /**
     * Specifies the name of the Data Factory Dataset. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The null value string. Defaults to an empty string.
     */
    readonly nullValue: pulumi.Output<string | undefined>;
    /**
     * A map of parameters to associate with the Data Factory Dataset.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The quote character. Defaults to `"`.
     */
    readonly quoteCharacter: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group in which to create the Data Factory Dataset. Changing this forces a new resource
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The row delimiter. Defaults to any of the following values on read: `\r\n`, `\r`, `\n`, and `\n` or `\r\n` on write by mapping data flow and Copy activity respectively.
     */
    readonly rowDelimiter: pulumi.Output<string | undefined>;
    /**
     * A `schemaColumn` block as defined below.
     */
    readonly schemaColumns: pulumi.Output<outputs.datafactory.DatasetDelimitedTextSchemaColumn[] | undefined>;
    /**
     * Create a DatasetDelimitedText resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatasetDelimitedTextArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DatasetDelimitedText resources.
 */
export interface DatasetDelimitedTextState {
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
     * An `azureBlobFsLocation` block as defined below.
     */
    azureBlobFsLocation?: pulumi.Input<inputs.datafactory.DatasetDelimitedTextAzureBlobFsLocation>;
    /**
     * An `azureBlobStorageLocation` block as defined below.
     */
    azureBlobStorageLocation?: pulumi.Input<inputs.datafactory.DatasetDelimitedTextAzureBlobStorageLocation>;
    /**
     * The column delimiter. Defaults to `,`.
     */
    columnDelimiter?: pulumi.Input<string>;
    /**
     * The compression codec used to read/write text files. Valid values are `bzip2`, `gzip`, `deflate`, `ZipDeflate`, `TarGzip`, `Tar`, `snappy`, or `lz4`. Please note these values are case sensitive.
     */
    compressionCodec?: pulumi.Input<string>;
    /**
     * The compression ratio for the Data Factory Dataset. Valid values are `Fastest` or `Optimal`. Please note these values are case sensitive.
     */
    compressionLevel?: pulumi.Input<string>;
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
     * The escape character. Defaults to `\`.
     */
    escapeCharacter?: pulumi.Input<string>;
    /**
     * When used as input, treat the first row of data as headers. When used as output, write the headers into the output as the first row of data. Defaults to `false`.
     */
    firstRowAsHeader?: pulumi.Input<boolean>;
    /**
     * The folder that this Dataset is in. If not specified, the Dataset will appear at the root level.
     */
    folder?: pulumi.Input<string>;
    /**
     * A `httpServerLocation` block as defined below.
     */
    httpServerLocation?: pulumi.Input<inputs.datafactory.DatasetDelimitedTextHttpServerLocation>;
    /**
     * The Data Factory Linked Service name in which to associate the Dataset with.
     */
    linkedServiceName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Dataset. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * The null value string. Defaults to an empty string.
     */
    nullValue?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Dataset.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The quote character. Defaults to `"`.
     */
    quoteCharacter?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Data Factory Dataset. Changing this forces a new resource
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The row delimiter. Defaults to any of the following values on read: `\r\n`, `\r`, `\n`, and `\n` or `\r\n` on write by mapping data flow and Copy activity respectively.
     */
    rowDelimiter?: pulumi.Input<string>;
    /**
     * A `schemaColumn` block as defined below.
     */
    schemaColumns?: pulumi.Input<pulumi.Input<inputs.datafactory.DatasetDelimitedTextSchemaColumn>[]>;
}
/**
 * The set of arguments for constructing a DatasetDelimitedText resource.
 */
export interface DatasetDelimitedTextArgs {
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
     * An `azureBlobFsLocation` block as defined below.
     */
    azureBlobFsLocation?: pulumi.Input<inputs.datafactory.DatasetDelimitedTextAzureBlobFsLocation>;
    /**
     * An `azureBlobStorageLocation` block as defined below.
     */
    azureBlobStorageLocation?: pulumi.Input<inputs.datafactory.DatasetDelimitedTextAzureBlobStorageLocation>;
    /**
     * The column delimiter. Defaults to `,`.
     */
    columnDelimiter?: pulumi.Input<string>;
    /**
     * The compression codec used to read/write text files. Valid values are `bzip2`, `gzip`, `deflate`, `ZipDeflate`, `TarGzip`, `Tar`, `snappy`, or `lz4`. Please note these values are case sensitive.
     */
    compressionCodec?: pulumi.Input<string>;
    /**
     * The compression ratio for the Data Factory Dataset. Valid values are `Fastest` or `Optimal`. Please note these values are case sensitive.
     */
    compressionLevel?: pulumi.Input<string>;
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
     * The escape character. Defaults to `\`.
     */
    escapeCharacter?: pulumi.Input<string>;
    /**
     * When used as input, treat the first row of data as headers. When used as output, write the headers into the output as the first row of data. Defaults to `false`.
     */
    firstRowAsHeader?: pulumi.Input<boolean>;
    /**
     * The folder that this Dataset is in. If not specified, the Dataset will appear at the root level.
     */
    folder?: pulumi.Input<string>;
    /**
     * A `httpServerLocation` block as defined below.
     */
    httpServerLocation?: pulumi.Input<inputs.datafactory.DatasetDelimitedTextHttpServerLocation>;
    /**
     * The Data Factory Linked Service name in which to associate the Dataset with.
     */
    linkedServiceName: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Dataset. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * The null value string. Defaults to an empty string.
     */
    nullValue?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Dataset.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The quote character. Defaults to `"`.
     */
    quoteCharacter?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Data Factory Dataset. Changing this forces a new resource
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The row delimiter. Defaults to any of the following values on read: `\r\n`, `\r`, `\n`, and `\n` or `\r\n` on write by mapping data flow and Copy activity respectively.
     */
    rowDelimiter?: pulumi.Input<string>;
    /**
     * A `schemaColumn` block as defined below.
     */
    schemaColumns?: pulumi.Input<pulumi.Input<inputs.datafactory.DatasetDelimitedTextSchemaColumn>[]>;
}
