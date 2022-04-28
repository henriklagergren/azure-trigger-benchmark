import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Linked Service (connection) between Data Lake Storage Gen2 and Azure Data Factory.
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
 * const current = azure.core.getClientConfig({});
 * const exampleLinkedServiceDataLakeStorageGen2 = new azure.datafactory.LinkedServiceDataLakeStorageGen2("exampleLinkedServiceDataLakeStorageGen2", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryId: exampleFactory.id,
 *     servicePrincipalId: current.then(current => current.clientId),
 *     servicePrincipalKey: "exampleKey",
 *     tenant: "11111111-1111-1111-1111-111111111111",
 *     url: "https://datalakestoragegen2",
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Data Lake Storage Gen2 Linked Services can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/linkedServiceDataLakeStorageGen2:LinkedServiceDataLakeStorageGen2 example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/linkedservices/example
 * ```
 */
export declare class LinkedServiceDataLakeStorageGen2 extends pulumi.CustomResource {
    /**
     * Get an existing LinkedServiceDataLakeStorageGen2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LinkedServiceDataLakeStorageGen2State, opts?: pulumi.CustomResourceOptions): LinkedServiceDataLakeStorageGen2;
    /**
     * Returns true if the given object is an instance of LinkedServiceDataLakeStorageGen2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LinkedServiceDataLakeStorageGen2;
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
     * The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
     *
     * @deprecated `data_factory_name` is deprecated in favour of `data_factory_id` and will be removed in version 3.0 of the AzureRM provider
     */
    readonly dataFactoryName: pulumi.Output<string>;
    /**
     * The description for the Data Factory Linked Service.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The integration runtime reference to associate with the Data Factory Linked Service.
     */
    readonly integrationRuntimeName: pulumi.Output<string | undefined>;
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
     * The name of the resource group in which to create the Data Factory Linked Service. Changing this forces a new resource
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The service principal id with which to authenticate against the Azure Data Lake Storage Gen2 account.  Incompatible with `storageAccountKey` and `useManagedIdentity`.
     */
    readonly servicePrincipalId: pulumi.Output<string | undefined>;
    /**
     * The service principal key with which to authenticate against the Azure Data Lake Storage Gen2 account.
     */
    readonly servicePrincipalKey: pulumi.Output<string | undefined>;
    /**
     * The Storage Account Key with which to authenticate against the Azure Data Lake Storage Gen2 account.  Incompatible with `servicePrincipalId`, `servicePrincipalKey`, `tenant` and `useManagedIdentity`.
     */
    readonly storageAccountKey: pulumi.Output<string | undefined>;
    /**
     * The tenant id or name in which the service principal exists to authenticate against the Azure Data Lake Storage Gen2 account.
     */
    readonly tenant: pulumi.Output<string | undefined>;
    /**
     * The endpoint for the Azure Data Lake Storage Gen2 service.
     */
    readonly url: pulumi.Output<string>;
    /**
     * Whether to use the Data Factory's managed identity to authenticate against the Azure Data Lake Storage Gen2 account. Incompatible with `servicePrincipalId`, `servicePrincipalKey`, `tenant` and `storageAccountKey`.
     */
    readonly useManagedIdentity: pulumi.Output<boolean | undefined>;
    /**
     * Create a LinkedServiceDataLakeStorageGen2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkedServiceDataLakeStorageGen2Args, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LinkedServiceDataLakeStorageGen2 resources.
 */
export interface LinkedServiceDataLakeStorageGen2State {
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
     * The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
     *
     * @deprecated `data_factory_name` is deprecated in favour of `data_factory_id` and will be removed in version 3.0 of the AzureRM provider
     */
    dataFactoryName?: pulumi.Input<string>;
    /**
     * The description for the Data Factory Linked Service.
     */
    description?: pulumi.Input<string>;
    /**
     * The integration runtime reference to associate with the Data Factory Linked Service.
     */
    integrationRuntimeName?: pulumi.Input<string>;
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
     * The name of the resource group in which to create the Data Factory Linked Service. Changing this forces a new resource
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The service principal id with which to authenticate against the Azure Data Lake Storage Gen2 account.  Incompatible with `storageAccountKey` and `useManagedIdentity`.
     */
    servicePrincipalId?: pulumi.Input<string>;
    /**
     * The service principal key with which to authenticate against the Azure Data Lake Storage Gen2 account.
     */
    servicePrincipalKey?: pulumi.Input<string>;
    /**
     * The Storage Account Key with which to authenticate against the Azure Data Lake Storage Gen2 account.  Incompatible with `servicePrincipalId`, `servicePrincipalKey`, `tenant` and `useManagedIdentity`.
     */
    storageAccountKey?: pulumi.Input<string>;
    /**
     * The tenant id or name in which the service principal exists to authenticate against the Azure Data Lake Storage Gen2 account.
     */
    tenant?: pulumi.Input<string>;
    /**
     * The endpoint for the Azure Data Lake Storage Gen2 service.
     */
    url?: pulumi.Input<string>;
    /**
     * Whether to use the Data Factory's managed identity to authenticate against the Azure Data Lake Storage Gen2 account. Incompatible with `servicePrincipalId`, `servicePrincipalKey`, `tenant` and `storageAccountKey`.
     */
    useManagedIdentity?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a LinkedServiceDataLakeStorageGen2 resource.
 */
export interface LinkedServiceDataLakeStorageGen2Args {
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
     * The Data Factory name in which to associate the Linked Service with. Changing this forces a new resource.
     *
     * @deprecated `data_factory_name` is deprecated in favour of `data_factory_id` and will be removed in version 3.0 of the AzureRM provider
     */
    dataFactoryName?: pulumi.Input<string>;
    /**
     * The description for the Data Factory Linked Service.
     */
    description?: pulumi.Input<string>;
    /**
     * The integration runtime reference to associate with the Data Factory Linked Service.
     */
    integrationRuntimeName?: pulumi.Input<string>;
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
     * The name of the resource group in which to create the Data Factory Linked Service. Changing this forces a new resource
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The service principal id with which to authenticate against the Azure Data Lake Storage Gen2 account.  Incompatible with `storageAccountKey` and `useManagedIdentity`.
     */
    servicePrincipalId?: pulumi.Input<string>;
    /**
     * The service principal key with which to authenticate against the Azure Data Lake Storage Gen2 account.
     */
    servicePrincipalKey?: pulumi.Input<string>;
    /**
     * The Storage Account Key with which to authenticate against the Azure Data Lake Storage Gen2 account.  Incompatible with `servicePrincipalId`, `servicePrincipalKey`, `tenant` and `useManagedIdentity`.
     */
    storageAccountKey?: pulumi.Input<string>;
    /**
     * The tenant id or name in which the service principal exists to authenticate against the Azure Data Lake Storage Gen2 account.
     */
    tenant?: pulumi.Input<string>;
    /**
     * The endpoint for the Azure Data Lake Storage Gen2 service.
     */
    url: pulumi.Input<string>;
    /**
     * Whether to use the Data Factory's managed identity to authenticate against the Azure Data Lake Storage Gen2 account. Incompatible with `servicePrincipalId`, `servicePrincipalKey`, `tenant` and `storageAccountKey`.
     */
    useManagedIdentity?: pulumi.Input<boolean>;
}
