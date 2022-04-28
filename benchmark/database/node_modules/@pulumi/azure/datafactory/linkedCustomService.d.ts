import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Linked Service (connection) between a resource and Azure Data Factory. This is a generic resource that supports all different Linked Service Types.
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
 *     identity: {
 *         type: "SystemAssigned",
 *     },
 * });
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountKind: "BlobStorage",
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleLinkedCustomService = new azure.datafactory.LinkedCustomService("exampleLinkedCustomService", {
 *     dataFactoryId: exampleFactory.id,
 *     type: "AzureBlobStorage",
 *     description: "test description",
 *     typePropertiesJson: `{
 *   "connectionString":"${azurerm_storage_account.test.primary_connection_string}"
 * }
 * `,
 *     parameters: {
 *         foo: "bar",
 *         Env: "Test",
 *     },
 *     annotations: [
 *         "test1",
 *         "test2",
 *         "test3",
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Linked Service's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/linkedCustomService:LinkedCustomService example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/linkedservices/example
 * ```
 */
export declare class LinkedCustomService extends pulumi.CustomResource {
    /**
     * Get an existing LinkedCustomService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LinkedCustomServiceState, opts?: pulumi.CustomResourceOptions): LinkedCustomService;
    /**
     * Returns true if the given object is an instance of LinkedCustomService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LinkedCustomService;
    /**
     * A map of additional properties to associate with the Data Factory Linked Service.
     */
    readonly additionalProperties: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * List of tags that can be used for describing the Data Factory Linked Service.
     */
    readonly annotations: pulumi.Output<string[] | undefined>;
    /**
     * The Data Factory ID in which to associate the Linked Service with. Changing this forces a new resource.
     */
    readonly dataFactoryId: pulumi.Output<string>;
    /**
     * The description for the Data Factory Linked Service.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * An `integrationRuntime` block as defined below.
     */
    readonly integrationRuntime: pulumi.Output<outputs.datafactory.LinkedCustomServiceIntegrationRuntime | undefined>;
    /**
     * Specifies the name of the Data Factory Linked Service. Changing this forces a new resource to be created. Must be unique within a data factory. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The type of data stores that will be connected to Data Factory. For full list of supported data stores, please refer to [Azure Data Factory connector](https://docs.microsoft.com/en-us/azure/data-factory/connector-overview).
     */
    readonly type: pulumi.Output<string>;
    /**
     * A JSON object that contains the properties of the Data Factory Linked Service.
     */
    readonly typePropertiesJson: pulumi.Output<string>;
    /**
     * Create a LinkedCustomService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkedCustomServiceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LinkedCustomService resources.
 */
export interface LinkedCustomServiceState {
    /**
     * A map of additional properties to associate with the Data Factory Linked Service.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Linked Service.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Data Factory ID in which to associate the Linked Service with. Changing this forces a new resource.
     */
    dataFactoryId?: pulumi.Input<string>;
    /**
     * The description for the Data Factory Linked Service.
     */
    description?: pulumi.Input<string>;
    /**
     * An `integrationRuntime` block as defined below.
     */
    integrationRuntime?: pulumi.Input<inputs.datafactory.LinkedCustomServiceIntegrationRuntime>;
    /**
     * Specifies the name of the Data Factory Linked Service. Changing this forces a new resource to be created. Must be unique within a data factory. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The type of data stores that will be connected to Data Factory. For full list of supported data stores, please refer to [Azure Data Factory connector](https://docs.microsoft.com/en-us/azure/data-factory/connector-overview).
     */
    type?: pulumi.Input<string>;
    /**
     * A JSON object that contains the properties of the Data Factory Linked Service.
     */
    typePropertiesJson?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a LinkedCustomService resource.
 */
export interface LinkedCustomServiceArgs {
    /**
     * A map of additional properties to associate with the Data Factory Linked Service.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Linked Service.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Data Factory ID in which to associate the Linked Service with. Changing this forces a new resource.
     */
    dataFactoryId: pulumi.Input<string>;
    /**
     * The description for the Data Factory Linked Service.
     */
    description?: pulumi.Input<string>;
    /**
     * An `integrationRuntime` block as defined below.
     */
    integrationRuntime?: pulumi.Input<inputs.datafactory.LinkedCustomServiceIntegrationRuntime>;
    /**
     * Specifies the name of the Data Factory Linked Service. Changing this forces a new resource to be created. Must be unique within a data factory. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The type of data stores that will be connected to Data Factory. For full list of supported data stores, please refer to [Azure Data Factory connector](https://docs.microsoft.com/en-us/azure/data-factory/connector-overview).
     */
    type: pulumi.Input<string>;
    /**
     * A JSON object that contains the properties of the Data Factory Linked Service.
     */
    typePropertiesJson: pulumi.Input<string>;
}
