import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Linked Service (connection) between a Database and Azure Data Factory through ODBC protocol.
 *
 * > **Note:** All arguments including the connectionString will be stored in the raw state as plain-text. [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
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
 * const anonymous = new azure.datafactory.LinkedServiceOdbc("anonymous", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryId: exampleFactory.id,
 *     connectionString: "Driver={SQL Server};Server=test;Database=test;Uid=test;Pwd=test;",
 * });
 * const basicAuth = new azure.datafactory.LinkedServiceOdbc("basicAuth", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryId: exampleFactory.id,
 *     connectionString: "Driver={SQL Server};Server=test;Database=test;Uid=test;Pwd=test;",
 *     basicAuthentication: {
 *         username: "onrylmz",
 *         password: "Ch4ngeM3!",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory ODBC Linked Service's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/linkedServiceOdbc:LinkedServiceOdbc example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/linkedservices/example
 * ```
 */
export declare class LinkedServiceOdbc extends pulumi.CustomResource {
    /**
     * Get an existing LinkedServiceOdbc resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LinkedServiceOdbcState, opts?: pulumi.CustomResourceOptions): LinkedServiceOdbc;
    /**
     * Returns true if the given object is an instance of LinkedServiceOdbc.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LinkedServiceOdbc;
    /**
     * A map of additional properties to associate with the Data Factory Linked Service ODBC.
     */
    readonly additionalProperties: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * List of tags that can be used for describing the Data Factory Linked Service ODBC.
     */
    readonly annotations: pulumi.Output<string[] | undefined>;
    /**
     * A `basicAuthentication` block as defined below.
     */
    readonly basicAuthentication: pulumi.Output<outputs.datafactory.LinkedServiceOdbcBasicAuthentication | undefined>;
    /**
     * The connection string in which to authenticate with ODBC.
     */
    readonly connectionString: pulumi.Output<string>;
    /**
     * The Data Factory ID in which to associate the Linked Service with. Changing this forces a new resource.
     */
    readonly dataFactoryId: pulumi.Output<string>;
    /**
     * The description for the Data Factory Linked Service ODBC.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The integration runtime reference to associate with the Data Factory Linked Service ODBC.
     */
    readonly integrationRuntimeName: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Data Factory Linked Service ODBC. Changing this forces a new resource to be created. Must be unique within a data factory. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service ODBC.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The name of the resource group in which to create the Data Factory Linked Service ODBC. Changing this forces a new resource
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a LinkedServiceOdbc resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkedServiceOdbcArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LinkedServiceOdbc resources.
 */
export interface LinkedServiceOdbcState {
    /**
     * A map of additional properties to associate with the Data Factory Linked Service ODBC.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Linked Service ODBC.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A `basicAuthentication` block as defined below.
     */
    basicAuthentication?: pulumi.Input<inputs.datafactory.LinkedServiceOdbcBasicAuthentication>;
    /**
     * The connection string in which to authenticate with ODBC.
     */
    connectionString?: pulumi.Input<string>;
    /**
     * The Data Factory ID in which to associate the Linked Service with. Changing this forces a new resource.
     */
    dataFactoryId?: pulumi.Input<string>;
    /**
     * The description for the Data Factory Linked Service ODBC.
     */
    description?: pulumi.Input<string>;
    /**
     * The integration runtime reference to associate with the Data Factory Linked Service ODBC.
     */
    integrationRuntimeName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Linked Service ODBC. Changing this forces a new resource to be created. Must be unique within a data factory. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service ODBC.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the resource group in which to create the Data Factory Linked Service ODBC. Changing this forces a new resource
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a LinkedServiceOdbc resource.
 */
export interface LinkedServiceOdbcArgs {
    /**
     * A map of additional properties to associate with the Data Factory Linked Service ODBC.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Linked Service ODBC.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A `basicAuthentication` block as defined below.
     */
    basicAuthentication?: pulumi.Input<inputs.datafactory.LinkedServiceOdbcBasicAuthentication>;
    /**
     * The connection string in which to authenticate with ODBC.
     */
    connectionString: pulumi.Input<string>;
    /**
     * The Data Factory ID in which to associate the Linked Service with. Changing this forces a new resource.
     */
    dataFactoryId: pulumi.Input<string>;
    /**
     * The description for the Data Factory Linked Service ODBC.
     */
    description?: pulumi.Input<string>;
    /**
     * The integration runtime reference to associate with the Data Factory Linked Service ODBC.
     */
    integrationRuntimeName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Linked Service ODBC. Changing this forces a new resource to be created. Must be unique within a data factory. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service ODBC.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the resource group in which to create the Data Factory Linked Service ODBC. Changing this forces a new resource
     */
    resourceGroupName: pulumi.Input<string>;
}
