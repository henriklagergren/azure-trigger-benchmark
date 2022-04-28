import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Linked Service (connection) between a Kusto Cluster and Azure Data Factory.
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
 * const exampleCluster = new azure.kusto.Cluster("exampleCluster", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         name: "Standard_D13_v2",
 *         capacity: 2,
 *     },
 * });
 * const exampleDatabase = new azure.kusto.Database("exampleDatabase", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     clusterName: exampleCluster.name,
 * });
 * const exampleLinkedServiceKusto = new azure.datafactory.LinkedServiceKusto("exampleLinkedServiceKusto", {
 *     dataFactoryId: exampleFactory.id,
 *     kustoEndpoint: exampleCluster.uri,
 *     kustoDatabaseName: exampleDatabase.name,
 *     useManagedIdentity: true,
 * });
 * const exampleDatabasePrincipalAssignment = new azure.kusto.DatabasePrincipalAssignment("exampleDatabasePrincipalAssignment", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     clusterName: exampleCluster.name,
 *     databaseName: exampleDatabase.name,
 *     tenantId: exampleFactory.identity.apply(identity => identity.tenantId),
 *     principalId: exampleFactory.identity.apply(identity => identity.principalId),
 *     principalType: "App",
 *     role: "Viewer",
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Linked Service's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/linkedServiceKusto:LinkedServiceKusto example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/linkedservices/example
 * ```
 */
export declare class LinkedServiceKusto extends pulumi.CustomResource {
    /**
     * Get an existing LinkedServiceKusto resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LinkedServiceKustoState, opts?: pulumi.CustomResourceOptions): LinkedServiceKusto;
    /**
     * Returns true if the given object is an instance of LinkedServiceKusto.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LinkedServiceKusto;
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
     * The integration runtime reference to associate with the Data Factory Linked Service.
     */
    readonly integrationRuntimeName: pulumi.Output<string | undefined>;
    /**
     * The Kusto Database Name.
     */
    readonly kustoDatabaseName: pulumi.Output<string>;
    /**
     * The URI of the Kusto Cluster endpoint.
     */
    readonly kustoEndpoint: pulumi.Output<string>;
    /**
     * Specifies the name of the Data Factory Linked Service. Changing this forces a new resource to be created. Must be unique within a data
     * factory. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The service principal id in which to authenticate against the Kusto Database.
     */
    readonly servicePrincipalId: pulumi.Output<string | undefined>;
    /**
     * The service principal key in which to authenticate against the Kusto Database.
     */
    readonly servicePrincipalKey: pulumi.Output<string | undefined>;
    /**
     * The service principal tenant id or name in which to authenticate against the Kusto Database.
     */
    readonly tenant: pulumi.Output<string | undefined>;
    /**
     * Whether to use the Data Factory's managed identity to authenticate against the Kusto Database.
     */
    readonly useManagedIdentity: pulumi.Output<boolean | undefined>;
    /**
     * Create a LinkedServiceKusto resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkedServiceKustoArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LinkedServiceKusto resources.
 */
export interface LinkedServiceKustoState {
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
     * The integration runtime reference to associate with the Data Factory Linked Service.
     */
    integrationRuntimeName?: pulumi.Input<string>;
    /**
     * The Kusto Database Name.
     */
    kustoDatabaseName?: pulumi.Input<string>;
    /**
     * The URI of the Kusto Cluster endpoint.
     */
    kustoEndpoint?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Linked Service. Changing this forces a new resource to be created. Must be unique within a data
     * factory. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The service principal id in which to authenticate against the Kusto Database.
     */
    servicePrincipalId?: pulumi.Input<string>;
    /**
     * The service principal key in which to authenticate against the Kusto Database.
     */
    servicePrincipalKey?: pulumi.Input<string>;
    /**
     * The service principal tenant id or name in which to authenticate against the Kusto Database.
     */
    tenant?: pulumi.Input<string>;
    /**
     * Whether to use the Data Factory's managed identity to authenticate against the Kusto Database.
     */
    useManagedIdentity?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a LinkedServiceKusto resource.
 */
export interface LinkedServiceKustoArgs {
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
     * The integration runtime reference to associate with the Data Factory Linked Service.
     */
    integrationRuntimeName?: pulumi.Input<string>;
    /**
     * The Kusto Database Name.
     */
    kustoDatabaseName: pulumi.Input<string>;
    /**
     * The URI of the Kusto Cluster endpoint.
     */
    kustoEndpoint: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Linked Service. Changing this forces a new resource to be created. Must be unique within a data
     * factory. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The service principal id in which to authenticate against the Kusto Database.
     */
    servicePrincipalId?: pulumi.Input<string>;
    /**
     * The service principal key in which to authenticate against the Kusto Database.
     */
    servicePrincipalKey?: pulumi.Input<string>;
    /**
     * The service principal tenant id or name in which to authenticate against the Kusto Database.
     */
    tenant?: pulumi.Input<string>;
    /**
     * Whether to use the Data Factory's managed identity to authenticate against the Kusto Database.
     */
    useManagedIdentity?: pulumi.Input<boolean>;
}
