import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Linked Service (connection) between Key Vault and Azure Data Factory.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleKeyVault = new azure.keyvault.KeyVault("exampleKeyVault", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tenantId: current.then(current => current.tenantId),
 *     skuName: "standard",
 * });
 * const exampleFactory = new azure.datafactory.Factory("exampleFactory", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleLinkedServiceKeyVault = new azure.datafactory.LinkedServiceKeyVault("exampleLinkedServiceKeyVault", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryId: exampleFactory.id,
 *     keyVaultId: exampleKeyVault.id,
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Key Vault Linked Service's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/linkedServiceKeyVault:LinkedServiceKeyVault example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/linkedservices/example
 * ```
 */
export declare class LinkedServiceKeyVault extends pulumi.CustomResource {
    /**
     * Get an existing LinkedServiceKeyVault resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LinkedServiceKeyVaultState, opts?: pulumi.CustomResourceOptions): LinkedServiceKeyVault;
    /**
     * Returns true if the given object is an instance of LinkedServiceKeyVault.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LinkedServiceKeyVault;
    /**
     * A map of additional properties to associate with the Data Factory Linked Service Key Vault.
     */
    readonly additionalProperties: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * List of tags that can be used for describing the Data Factory Linked Service Key Vault.
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
     * The description for the Data Factory Linked Service Key Vault.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The integration runtime reference to associate with the Data Factory Linked Service Key Vault.
     */
    readonly integrationRuntimeName: pulumi.Output<string | undefined>;
    /**
     * The ID the Azure Key Vault resource.
     */
    readonly keyVaultId: pulumi.Output<string>;
    /**
     * Specifies the name of the Data Factory Linked Service Key Vault. Changing this forces a new resource to be created. Must be unique within a data
     * factory. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service Key Vault.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The name of the resource group in which to create the Data Factory Linked Service Key Vault. Changing this forces a new resource
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a LinkedServiceKeyVault resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkedServiceKeyVaultArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LinkedServiceKeyVault resources.
 */
export interface LinkedServiceKeyVaultState {
    /**
     * A map of additional properties to associate with the Data Factory Linked Service Key Vault.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Linked Service Key Vault.
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
     * The description for the Data Factory Linked Service Key Vault.
     */
    description?: pulumi.Input<string>;
    /**
     * The integration runtime reference to associate with the Data Factory Linked Service Key Vault.
     */
    integrationRuntimeName?: pulumi.Input<string>;
    /**
     * The ID the Azure Key Vault resource.
     */
    keyVaultId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Linked Service Key Vault. Changing this forces a new resource to be created. Must be unique within a data
     * factory. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service Key Vault.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the resource group in which to create the Data Factory Linked Service Key Vault. Changing this forces a new resource
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a LinkedServiceKeyVault resource.
 */
export interface LinkedServiceKeyVaultArgs {
    /**
     * A map of additional properties to associate with the Data Factory Linked Service Key Vault.
     */
    additionalProperties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * List of tags that can be used for describing the Data Factory Linked Service Key Vault.
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
     * The description for the Data Factory Linked Service Key Vault.
     */
    description?: pulumi.Input<string>;
    /**
     * The integration runtime reference to associate with the Data Factory Linked Service Key Vault.
     */
    integrationRuntimeName?: pulumi.Input<string>;
    /**
     * The ID the Azure Key Vault resource.
     */
    keyVaultId: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Factory Linked Service Key Vault. Changing this forces a new resource to be created. Must be unique within a data
     * factory. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of parameters to associate with the Data Factory Linked Service Key Vault.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the resource group in which to create the Data Factory Linked Service Key Vault. Changing this forces a new resource
     */
    resourceGroupName: pulumi.Input<string>;
}
