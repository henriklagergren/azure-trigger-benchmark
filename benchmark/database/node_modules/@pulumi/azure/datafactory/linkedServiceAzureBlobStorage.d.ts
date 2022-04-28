import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Linked Service (connection) between an Azure Blob Storage Account and Azure Data Factory.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = azure.storage.getAccountOutput({
 *     name: "storageaccountname",
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleFactory = new azure.datafactory.Factory("exampleFactory", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleLinkedServiceAzureBlobStorage = new azure.datafactory.LinkedServiceAzureBlobStorage("exampleLinkedServiceAzureBlobStorage", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryId: exampleFactory.id,
 *     connectionString: exampleAccount.apply(exampleAccount => exampleAccount.primaryConnectionString),
 * });
 * ```
 * ### With SAS Uri And SAS Token.
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const testResourceGroup = new azure.core.ResourceGroup("testResourceGroup", {location: "West Europe"});
 * const current = azure.core.getClientConfig({});
 * const testFactory = new azure.datafactory.Factory("testFactory", {
 *     location: testResourceGroup.location,
 *     resourceGroupName: testResourceGroup.name,
 * });
 * const testKeyVault = new azure.keyvault.KeyVault("testKeyVault", {
 *     location: testResourceGroup.location,
 *     resourceGroupName: testResourceGroup.name,
 *     tenantId: current.then(current => current.tenantId),
 *     skuName: "standard",
 * });
 * const testLinkedServiceKeyVault = new azure.datafactory.LinkedServiceKeyVault("testLinkedServiceKeyVault", {
 *     resourceGroupName: testResourceGroup.name,
 *     dataFactoryId: testFactory.id,
 *     keyVaultId: testKeyVault.id,
 * });
 * const testLinkedServiceAzureBlobStorage = new azure.datafactory.LinkedServiceAzureBlobStorage("testLinkedServiceAzureBlobStorage", {
 *     resourceGroupName: testResourceGroup.name,
 *     dataFactoryId: testFactory.id,
 *     sasUri: "https://storageaccountname.blob.core.windows.net",
 *     keyVaultSasToken: {
 *         linkedServiceName: testLinkedServiceKeyVault.name,
 *         secretName: "secret",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Linked Service's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/linkedServiceAzureBlobStorage:LinkedServiceAzureBlobStorage example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/linkedservices/example
 * ```
 */
export declare class LinkedServiceAzureBlobStorage extends pulumi.CustomResource {
    /**
     * Get an existing LinkedServiceAzureBlobStorage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LinkedServiceAzureBlobStorageState, opts?: pulumi.CustomResourceOptions): LinkedServiceAzureBlobStorage;
    /**
     * Returns true if the given object is an instance of LinkedServiceAzureBlobStorage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LinkedServiceAzureBlobStorage;
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
     * The connection string. Conflicts with `sasUri` and `serviceEndpoint`.
     */
    readonly connectionString: pulumi.Output<string | undefined>;
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
     * A `keyVaultSasToken` block as defined below. Use this argument to store SAS Token in an existing Key Vault. It needs an existing Key Vault Data Factory Linked Service. A `sasUri` is required.
     */
    readonly keyVaultSasToken: pulumi.Output<outputs.datafactory.LinkedServiceAzureBlobStorageKeyVaultSasToken | undefined>;
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
     * The name of the resource group in which to create the Data Factory Linked Service. Changing this forces a new resource
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The SAS URI. Conflicts with `connectionString` and `serviceEndpoint`.
     */
    readonly sasUri: pulumi.Output<string | undefined>;
    /**
     * The Service Endpoint. Conflicts with `connectionString` and `sasUri`. Required with `useManagedIdentity`.
     */
    readonly serviceEndpoint: pulumi.Output<string | undefined>;
    /**
     * The service principal id in which to authenticate against the Azure Blob Storage account. Required if `servicePrincipalKey` is set.
     */
    readonly servicePrincipalId: pulumi.Output<string | undefined>;
    /**
     * The service principal key in which to authenticate against the AAzure Blob Storage account.  Required if `servicePrincipalId` is set.
     */
    readonly servicePrincipalKey: pulumi.Output<string | undefined>;
    /**
     * The tenant id or name in which to authenticate against the Azure Blob Storage account.
     */
    readonly tenantId: pulumi.Output<string | undefined>;
    /**
     * Whether to use the Data Factory's managed identity to authenticate against the Azure Blob Storage account. Incompatible with `servicePrincipalId` and `servicePrincipalKey`.
     */
    readonly useManagedIdentity: pulumi.Output<boolean | undefined>;
    /**
     * Create a LinkedServiceAzureBlobStorage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkedServiceAzureBlobStorageArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LinkedServiceAzureBlobStorage resources.
 */
export interface LinkedServiceAzureBlobStorageState {
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
     * The connection string. Conflicts with `sasUri` and `serviceEndpoint`.
     */
    connectionString?: pulumi.Input<string>;
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
     * A `keyVaultSasToken` block as defined below. Use this argument to store SAS Token in an existing Key Vault. It needs an existing Key Vault Data Factory Linked Service. A `sasUri` is required.
     */
    keyVaultSasToken?: pulumi.Input<inputs.datafactory.LinkedServiceAzureBlobStorageKeyVaultSasToken>;
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
     * The name of the resource group in which to create the Data Factory Linked Service. Changing this forces a new resource
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The SAS URI. Conflicts with `connectionString` and `serviceEndpoint`.
     */
    sasUri?: pulumi.Input<string>;
    /**
     * The Service Endpoint. Conflicts with `connectionString` and `sasUri`. Required with `useManagedIdentity`.
     */
    serviceEndpoint?: pulumi.Input<string>;
    /**
     * The service principal id in which to authenticate against the Azure Blob Storage account. Required if `servicePrincipalKey` is set.
     */
    servicePrincipalId?: pulumi.Input<string>;
    /**
     * The service principal key in which to authenticate against the AAzure Blob Storage account.  Required if `servicePrincipalId` is set.
     */
    servicePrincipalKey?: pulumi.Input<string>;
    /**
     * The tenant id or name in which to authenticate against the Azure Blob Storage account.
     */
    tenantId?: pulumi.Input<string>;
    /**
     * Whether to use the Data Factory's managed identity to authenticate against the Azure Blob Storage account. Incompatible with `servicePrincipalId` and `servicePrincipalKey`.
     */
    useManagedIdentity?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a LinkedServiceAzureBlobStorage resource.
 */
export interface LinkedServiceAzureBlobStorageArgs {
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
     * The connection string. Conflicts with `sasUri` and `serviceEndpoint`.
     */
    connectionString?: pulumi.Input<string>;
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
     * A `keyVaultSasToken` block as defined below. Use this argument to store SAS Token in an existing Key Vault. It needs an existing Key Vault Data Factory Linked Service. A `sasUri` is required.
     */
    keyVaultSasToken?: pulumi.Input<inputs.datafactory.LinkedServiceAzureBlobStorageKeyVaultSasToken>;
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
     * The name of the resource group in which to create the Data Factory Linked Service. Changing this forces a new resource
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SAS URI. Conflicts with `connectionString` and `serviceEndpoint`.
     */
    sasUri?: pulumi.Input<string>;
    /**
     * The Service Endpoint. Conflicts with `connectionString` and `sasUri`. Required with `useManagedIdentity`.
     */
    serviceEndpoint?: pulumi.Input<string>;
    /**
     * The service principal id in which to authenticate against the Azure Blob Storage account. Required if `servicePrincipalKey` is set.
     */
    servicePrincipalId?: pulumi.Input<string>;
    /**
     * The service principal key in which to authenticate against the AAzure Blob Storage account.  Required if `servicePrincipalId` is set.
     */
    servicePrincipalKey?: pulumi.Input<string>;
    /**
     * The tenant id or name in which to authenticate against the Azure Blob Storage account.
     */
    tenantId?: pulumi.Input<string>;
    /**
     * Whether to use the Data Factory's managed identity to authenticate against the Azure Blob Storage account. Incompatible with `servicePrincipalId` and `servicePrincipalKey`.
     */
    useManagedIdentity?: pulumi.Input<boolean>;
}
