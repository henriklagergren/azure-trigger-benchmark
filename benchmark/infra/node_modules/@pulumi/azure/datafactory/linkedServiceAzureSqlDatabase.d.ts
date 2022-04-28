import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Linked Service (connection) between Azure SQL Database and Azure Data Factory.
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
 * const exampleLinkedServiceAzureSqlDatabase = new azure.datafactory.LinkedServiceAzureSqlDatabase("exampleLinkedServiceAzureSqlDatabase", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryId: exampleFactory.id,
 *     connectionString: "data source=serverhostname;initial catalog=master;user id=testUser;Password=test;integrated security=False;encrypt=True;connection timeout=30",
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Azure SQL Database Linked Service's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/linkedServiceAzureSqlDatabase:LinkedServiceAzureSqlDatabase example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/linkedservices/example
 * ```
 */
export declare class LinkedServiceAzureSqlDatabase extends pulumi.CustomResource {
    /**
     * Get an existing LinkedServiceAzureSqlDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LinkedServiceAzureSqlDatabaseState, opts?: pulumi.CustomResourceOptions): LinkedServiceAzureSqlDatabase;
    /**
     * Returns true if the given object is an instance of LinkedServiceAzureSqlDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LinkedServiceAzureSqlDatabase;
    /**
     * A map of additional properties to associate with the Data Factory Linked Service Azure SQL Database.
     */
    readonly additionalProperties: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * List of tags that can be used for describing the Data Factory Linked Service Azure SQL Database.
     */
    readonly annotations: pulumi.Output<string[] | undefined>;
    /**
     * The connection string in which to authenticate with Azure SQL Database. Exactly one of either `connectionString` or `keyVaultConnectionString` is required.
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
     * The description for the Data Factory Linked Service Azure SQL Database.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The integration runtime reference to associate with the Data Factory Linked Service Azure SQL Database.
     */
    readonly integrationRuntimeName: pulumi.Output<string | undefined>;
    /**
     * A `keyVaultConnectionString` block as defined below. Use this argument to store Azure SQL Database connection string in an existing Key Vault. It needs an existing Key Vault Data Factory Linked Service. Exactly one of either `connectionString` or `keyVaultConnectionString` is required.
     */
    readonly keyVaultConnectionString: pulumi.Output<outputs.datafactory.LinkedServiceAzureSqlDatabaseKeyVaultConnectionString | undefined>;
    /**
     * A `keyVaultPassword` block as defined below. Use this argument to store SQL Server password in an existing Key Vault. It needs an existing Key Vault Data Factory Linked Service.
     */
    readonly keyVaultPassword: pulumi.Output<outputs.datafactory.LinkedServiceAzureSqlDatabaseKeyVaultPassword | undefined>;
    /**
     * Specifies the name of the Data Factory Linked Service Azure SQL Database. Changing this forces a new resource to be created. Must be unique within a data
     * factory. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service Azure SQL Database.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The name of the resource group in which to create the Data Factory Linked Service Azure SQL Database. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The service principal id in which to authenticate against the Azure SQL Database. Required if `servicePrincipalKey` is set.
     */
    readonly servicePrincipalId: pulumi.Output<string | undefined>;
    /**
     * The service principal key in which to authenticate against the Azure SQL Database. Required if `servicePrincipalId` is set.
     */
    readonly servicePrincipalKey: pulumi.Output<string | undefined>;
    /**
     * The tenant id or name in which to authenticate against the Azure SQL Database.
     */
    readonly tenantId: pulumi.Output<string | undefined>;
    /**
     * Whether to use the Data Factory's managed identity to authenticate against the Azure SQL Database. Incompatible with `servicePrincipalId` and `servicePrincipalKey`
     */
    readonly useManagedIdentity: pulumi.Output<boolean | undefined>;
    /**
     * Create a LinkedServiceAzureSqlDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkedServiceAzureSqlDatabaseArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LinkedServiceAzureSqlDatabase resources.
 */
export interface LinkedServiceAzureSqlDatabaseState {
    /**
     * A map of additional properties to associate with the Data Factory Linked Service Azure SQL Database.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Linked Service Azure SQL Database.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The connection string in which to authenticate with Azure SQL Database. Exactly one of either `connectionString` or `keyVaultConnectionString` is required.
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
     * The description for the Data Factory Linked Service Azure SQL Database.
     */
    description?: pulumi.Input<string>;
    /**
     * The integration runtime reference to associate with the Data Factory Linked Service Azure SQL Database.
     */
    integrationRuntimeName?: pulumi.Input<string>;
    /**
     * A `keyVaultConnectionString` block as defined below. Use this argument to store Azure SQL Database connection string in an existing Key Vault. It needs an existing Key Vault Data Factory Linked Service. Exactly one of either `connectionString` or `keyVaultConnectionString` is required.
     */
    keyVaultConnectionString?: pulumi.Input<inputs.datafactory.LinkedServiceAzureSqlDatabaseKeyVaultConnectionString>;
    /**
     * A `keyVaultPassword` block as defined below. Use this argument to store SQL Server password in an existing Key Vault. It needs an existing Key Vault Data Factory Linked Service.
     */
    keyVaultPassword?: pulumi.Input<inputs.datafactory.LinkedServiceAzureSqlDatabaseKeyVaultPassword>;
    /**
     * Specifies the name of the Data Factory Linked Service Azure SQL Database. Changing this forces a new resource to be created. Must be unique within a data
     * factory. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service Azure SQL Database.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the resource group in which to create the Data Factory Linked Service Azure SQL Database. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The service principal id in which to authenticate against the Azure SQL Database. Required if `servicePrincipalKey` is set.
     */
    servicePrincipalId?: pulumi.Input<string>;
    /**
     * The service principal key in which to authenticate against the Azure SQL Database. Required if `servicePrincipalId` is set.
     */
    servicePrincipalKey?: pulumi.Input<string>;
    /**
     * The tenant id or name in which to authenticate against the Azure SQL Database.
     */
    tenantId?: pulumi.Input<string>;
    /**
     * Whether to use the Data Factory's managed identity to authenticate against the Azure SQL Database. Incompatible with `servicePrincipalId` and `servicePrincipalKey`
     */
    useManagedIdentity?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a LinkedServiceAzureSqlDatabase resource.
 */
export interface LinkedServiceAzureSqlDatabaseArgs {
    /**
     * A map of additional properties to associate with the Data Factory Linked Service Azure SQL Database.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Linked Service Azure SQL Database.
     */
    annotations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The connection string in which to authenticate with Azure SQL Database. Exactly one of either `connectionString` or `keyVaultConnectionString` is required.
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
     * The description for the Data Factory Linked Service Azure SQL Database.
     */
    description?: pulumi.Input<string>;
    /**
     * The integration runtime reference to associate with the Data Factory Linked Service Azure SQL Database.
     */
    integrationRuntimeName?: pulumi.Input<string>;
    /**
     * A `keyVaultConnectionString` block as defined below. Use this argument to store Azure SQL Database connection string in an existing Key Vault. It needs an existing Key Vault Data Factory Linked Service. Exactly one of either `connectionString` or `keyVaultConnectionString` is required.
     */
    keyVaultConnectionString?: pulumi.Input<inputs.datafactory.LinkedServiceAzureSqlDatabaseKeyVaultConnectionString>;
    /**
     * A `keyVaultPassword` block as defined below. Use this argument to store SQL Server password in an existing Key Vault. It needs an existing Key Vault Data Factory Linked Service.
     */
    keyVaultPassword?: pulumi.Input<inputs.datafactory.LinkedServiceAzureSqlDatabaseKeyVaultPassword>;
    /**
     * Specifies the name of the Data Factory Linked Service Azure SQL Database. Changing this forces a new resource to be created. Must be unique within a data
     * factory. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service Azure SQL Database.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the resource group in which to create the Data Factory Linked Service Azure SQL Database. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The service principal id in which to authenticate against the Azure SQL Database. Required if `servicePrincipalKey` is set.
     */
    servicePrincipalId?: pulumi.Input<string>;
    /**
     * The service principal key in which to authenticate against the Azure SQL Database. Required if `servicePrincipalId` is set.
     */
    servicePrincipalKey?: pulumi.Input<string>;
    /**
     * The tenant id or name in which to authenticate against the Azure SQL Database.
     */
    tenantId?: pulumi.Input<string>;
    /**
     * Whether to use the Data Factory's managed identity to authenticate against the Azure SQL Database. Incompatible with `servicePrincipalId` and `servicePrincipalKey`
     */
    useManagedIdentity?: pulumi.Input<boolean>;
}
