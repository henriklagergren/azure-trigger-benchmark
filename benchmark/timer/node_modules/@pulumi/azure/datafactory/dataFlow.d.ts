import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Data Flow inside an Azure Data Factory.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleFactory = new azure.datafactory.Factory("exampleFactory", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleLinkedCustomService = new azure.datafactory.LinkedCustomService("exampleLinkedCustomService", {
 *     dataFactoryId: exampleFactory.id,
 *     type: "AzureBlobStorage",
 *     typePropertiesJson: pulumi.interpolate`{
 *   "connectionString": "${exampleAccount.primaryConnectionString}"
 * }
 * `,
 * });
 * const example1 = new azure.datafactory.DatasetJson("example1", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryName: exampleFactory.name,
 *     linkedServiceName: exampleLinkedCustomService.name,
 *     azureBlobStorageLocation: {
 *         container: "container",
 *         path: "foo/bar/",
 *         filename: "foo.txt",
 *     },
 *     encoding: "UTF-8",
 * });
 * const example2 = new azure.datafactory.DatasetJson("example2", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryName: exampleFactory.name,
 *     linkedServiceName: exampleLinkedCustomService.name,
 *     azureBlobStorageLocation: {
 *         container: "container",
 *         path: "foo/bar/",
 *         filename: "bar.txt",
 *     },
 *     encoding: "UTF-8",
 * });
 * const exampleDataFlow = new azure.datafactory.DataFlow("exampleDataFlow", {
 *     dataFactoryId: exampleFactory.id,
 *     sources: [{
 *         name: "source1",
 *         dataset: {
 *             name: example1.name,
 *         },
 *     }],
 *     sinks: [{
 *         name: "sink1",
 *         dataset: {
 *             name: example2.name,
 *         },
 *     }],
 *     script: `source(
 *   allowSchemaDrift: true,
 *   validateSchema: false,
 *   limit: 100,
 *   ignoreNoFilesFound: false,
 *   documentForm: 'documentPerLine') ~> source1
 * source1 sink(
 *   allowSchemaDrift: true,
 *   validateSchema: false,
 *   skipDuplicateMapInputs: true,
 *   skipDuplicateMapOutputs: true) ~> sink1
 * `,
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Data Flow can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/dataFlow:DataFlow example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/dataflows/example
 * ```
 */
export declare class DataFlow extends pulumi.CustomResource {
    /**
     * Get an existing DataFlow resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataFlowState, opts?: pulumi.CustomResourceOptions): DataFlow;
    /**
     * Returns true if the given object is an instance of DataFlow.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DataFlow;
    /**
     * List of tags that can be used for describing the Data Factory Data Flow.
     */
    readonly annotations: pulumi.Output<string[] | undefined>;
    /**
     * The ID of Data Factory in which to associate the Data Flow with. Changing this forces a new resource.
     */
    readonly dataFactoryId: pulumi.Output<string>;
    /**
     * The description for the Data Factory Data Flow.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The folder that this Data Flow is in. If not specified, the Data Flow will appear at the root level.
     */
    readonly folder: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Data Factory Data Flow. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The script for the Data Factory Data Flow.
     */
    readonly script: pulumi.Output<string>;
    /**
     * One or more `sink` blocks as defined below.
     */
    readonly sinks: pulumi.Output<outputs.datafactory.DataFlowSink[]>;
    /**
     * One or more `source` blocks as defined below.
     */
    readonly sources: pulumi.Output<outputs.datafactory.DataFlowSource[]>;
    /**
     * One or more `transformation` blocks as defined below.
     */
    readonly transformations: pulumi.Output<outputs.datafactory.DataFlowTransformation[] | undefined>;
    /**
     * Create a DataFlow resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataFlowArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DataFlow resources.
 */
export interface DataFlowState {
    /**
     * List of tags that can be used for describing the Data Factory Data Flow.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of Data Factory in which to associate the Data Flow with. Changing this forces a new resource.
     */
    dataFactoryId?: pulumi.Input<string>;
    /**
     * The description for the Data Factory Data Flow.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Data Flow is in. If not specified, the Data Flow will appear at the root level.
     */
    folder?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Data Flow. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The script for the Data Factory Data Flow.
     */
    script?: pulumi.Input<string>;
    /**
     * One or more `sink` blocks as defined below.
     */
    sinks?: pulumi.Input<pulumi.Input<inputs.datafactory.DataFlowSink>[]>;
    /**
     * One or more `source` blocks as defined below.
     */
    sources?: pulumi.Input<pulumi.Input<inputs.datafactory.DataFlowSource>[]>;
    /**
     * One or more `transformation` blocks as defined below.
     */
    transformations?: pulumi.Input<pulumi.Input<inputs.datafactory.DataFlowTransformation>[]>;
}
/**
 * The set of arguments for constructing a DataFlow resource.
 */
export interface DataFlowArgs {
    /**
     * List of tags that can be used for describing the Data Factory Data Flow.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of Data Factory in which to associate the Data Flow with. Changing this forces a new resource.
     */
    dataFactoryId: pulumi.Input<string>;
    /**
     * The description for the Data Factory Data Flow.
     */
    description?: pulumi.Input<string>;
    /**
     * The folder that this Data Flow is in. If not specified, the Data Flow will appear at the root level.
     */
    folder?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Data Flow. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The script for the Data Factory Data Flow.
     */
    script: pulumi.Input<string>;
    /**
     * One or more `sink` blocks as defined below.
     */
    sinks: pulumi.Input<pulumi.Input<inputs.datafactory.DataFlowSink>[]>;
    /**
     * One or more `source` blocks as defined below.
     */
    sources: pulumi.Input<pulumi.Input<inputs.datafactory.DataFlowSource>[]>;
    /**
     * One or more `transformation` blocks as defined below.
     */
    transformations?: pulumi.Input<pulumi.Input<inputs.datafactory.DataFlowTransformation>[]>;
}
