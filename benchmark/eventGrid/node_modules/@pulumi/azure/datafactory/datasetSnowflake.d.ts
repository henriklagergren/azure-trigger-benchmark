import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Snowflake Dataset inside an Azure Data Factory.
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
 * const exampleLinkedServiceSnowflake = new azure.datafactory.LinkedServiceSnowflake("exampleLinkedServiceSnowflake", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryId: exampleFactory.id,
 *     connectionString: "jdbc:snowflake://account.region.snowflakecomputing.com/?user=user&db=db&warehouse=wh",
 * });
 * const exampleDatasetSnowflake = new azure.datafactory.DatasetSnowflake("exampleDatasetSnowflake", {
 *     resourceGroupName: azurerm_resource_group.test.name,
 *     dataFactoryId: azurerm_data_factory.test.id,
 *     linkedServiceName: azurerm_data_factory_linked_service_snowflake.test.name,
 *     schemaName: "foo_schema",
 *     tableName: "foo_table",
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Snowflake Datasets can be imported using the `resource id`,
 *
 * e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/datasetSnowflake:DatasetSnowflake example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/datasets/example
 * ```
 */
export declare class DatasetSnowflake extends pulumi.CustomResource {
    /**
     * Get an existing DatasetSnowflake resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatasetSnowflakeState, opts?: pulumi.CustomResourceOptions): DatasetSnowflake;
    /**
     * Returns true if the given object is an instance of DatasetSnowflake.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DatasetSnowflake;
    /**
     * A map of additional properties to associate with the Data Factory Dataset Snowflake.
     */
    readonly additionalProperties: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * List of tags that can be used for describing the Data Factory Dataset Snowflake.
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
     * The description for the Data Factory Dataset Snowflake.
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
     * Specifies the name of the Data Factory Dataset Snowflake. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A map of parameters to associate with the Data Factory Dataset Snowflake.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The name of the resource group in which to create the Data Factory Dataset Snowflake. Changing this forces a new resource
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `schemaColumn` block as defined below.
     */
    readonly schemaColumns: pulumi.Output<outputs.datafactory.DatasetSnowflakeSchemaColumn[] | undefined>;
    /**
     * The schema name of the Data Factory Dataset Snowflake.
     */
    readonly schemaName: pulumi.Output<string | undefined>;
    /**
     * @deprecated This block has been deprecated in favour of `schema_column` and will be removed.
     */
    readonly structureColumns: pulumi.Output<outputs.datafactory.DatasetSnowflakeStructureColumn[] | undefined>;
    /**
     * The table name of the Data Factory Dataset Snowflake.
     */
    readonly tableName: pulumi.Output<string | undefined>;
    /**
     * Create a DatasetSnowflake resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatasetSnowflakeArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DatasetSnowflake resources.
 */
export interface DatasetSnowflakeState {
    /**
     * A map of additional properties to associate with the Data Factory Dataset Snowflake.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Dataset Snowflake.
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
     * The description for the Data Factory Dataset Snowflake.
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
     * Specifies the name of the Data Factory Dataset Snowflake. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Dataset Snowflake.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the resource group in which to create the Data Factory Dataset Snowflake. Changing this forces a new resource
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `schemaColumn` block as defined below.
     */
    schemaColumns?: pulumi.Input<pulumi.Input<inputs.datafactory.DatasetSnowflakeSchemaColumn>[]>;
    /**
     * The schema name of the Data Factory Dataset Snowflake.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * @deprecated This block has been deprecated in favour of `schema_column` and will be removed.
     */
    structureColumns?: pulumi.Input<pulumi.Input<inputs.datafactory.DatasetSnowflakeStructureColumn>[]>;
    /**
     * The table name of the Data Factory Dataset Snowflake.
     */
    tableName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DatasetSnowflake resource.
 */
export interface DatasetSnowflakeArgs {
    /**
     * A map of additional properties to associate with the Data Factory Dataset Snowflake.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Dataset Snowflake.
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
     * The description for the Data Factory Dataset Snowflake.
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
     * Specifies the name of the Data Factory Dataset Snowflake. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Dataset Snowflake.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the resource group in which to create the Data Factory Dataset Snowflake. Changing this forces a new resource
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `schemaColumn` block as defined below.
     */
    schemaColumns?: pulumi.Input<pulumi.Input<inputs.datafactory.DatasetSnowflakeSchemaColumn>[]>;
    /**
     * The schema name of the Data Factory Dataset Snowflake.
     */
    schemaName?: pulumi.Input<string>;
    /**
     * @deprecated This block has been deprecated in favour of `schema_column` and will be removed.
     */
    structureColumns?: pulumi.Input<pulumi.Input<inputs.datafactory.DatasetSnowflakeStructureColumn>[]>;
    /**
     * The table name of the Data Factory Dataset Snowflake.
     */
    tableName?: pulumi.Input<string>;
}
