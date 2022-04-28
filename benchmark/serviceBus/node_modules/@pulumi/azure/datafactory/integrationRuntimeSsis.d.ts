import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Data Factory Azure-SSIS Integration Runtime.
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
 * const exampleIntegrationRuntimeSsis = new azure.datafactory.IntegrationRuntimeSsis("exampleIntegrationRuntimeSsis", {
 *     dataFactoryId: exampleFactory.id,
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     nodeSize: "Standard_D8_v3",
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Azure-SSIS Integration Runtimes can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/integrationRuntimeSsis:IntegrationRuntimeSsis example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/integrationruntimes/example
 * ```
 */
export declare class IntegrationRuntimeSsis extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationRuntimeSsis resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IntegrationRuntimeSsisState, opts?: pulumi.CustomResourceOptions): IntegrationRuntimeSsis;
    /**
     * Returns true if the given object is an instance of IntegrationRuntimeSsis.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IntegrationRuntimeSsis;
    /**
     * A `catalogInfo` block as defined below.
     */
    readonly catalogInfo: pulumi.Output<outputs.datafactory.IntegrationRuntimeSsisCatalogInfo | undefined>;
    /**
     * A `customSetupScript` block as defined below.
     */
    readonly customSetupScript: pulumi.Output<outputs.datafactory.IntegrationRuntimeSsisCustomSetupScript | undefined>;
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
     * Integration runtime description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The Azure-SSIS Integration Runtime edition. Valid values are `Standard` and `Enterprise`. Defaults to `Standard`.
     */
    readonly edition: pulumi.Output<string | undefined>;
    /**
     * An `expressCustomSetup` block as defined below.
     */
    readonly expressCustomSetup: pulumi.Output<outputs.datafactory.IntegrationRuntimeSsisExpressCustomSetup | undefined>;
    /**
     * The type of the license that is used. Valid values are `LicenseIncluded` and `BasePrice`. Defaults to `LicenseIncluded`.
     */
    readonly licenseType: pulumi.Output<string | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Defines the maximum parallel executions per node. Defaults to `1`. Max is `16`.
     */
    readonly maxParallelExecutionsPerNode: pulumi.Output<number | undefined>;
    /**
     * Specifies the name of the Azure-SSIS Integration Runtime. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The size of the nodes on which the Azure-SSIS Integration Runtime runs. Valid values are: `Standard_D2_v3`, `Standard_D4_v3`, `Standard_D8_v3`, `Standard_D16_v3`, `Standard_D32_v3`, `Standard_D64_v3`, `Standard_E2_v3`, `Standard_E4_v3`, `Standard_E8_v3`, `Standard_E16_v3`, `Standard_E32_v3`, `Standard_E64_v3`, `Standard_D1_v2`, `Standard_D2_v2`, `Standard_D3_v2`, `Standard_D4_v2`, `Standard_A4_v2` and `Standard_A8_v2`
     */
    readonly nodeSize: pulumi.Output<string>;
    /**
     * Number of nodes for the Azure-SSIS Integration Runtime. Max is `10`. Defaults to `1`.
     */
    readonly numberOfNodes: pulumi.Output<number | undefined>;
    /**
     * One or more `packageStore` block as defined below.
     */
    readonly packageStores: pulumi.Output<outputs.datafactory.IntegrationRuntimeSsisPackageStore[] | undefined>;
    /**
     * A `proxy` block as defined below.
     */
    readonly proxy: pulumi.Output<outputs.datafactory.IntegrationRuntimeSsisProxy | undefined>;
    /**
     * The name of the resource group in which to create the Azure-SSIS Integration Runtime. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `vnetIntegration` block as defined below.
     */
    readonly vnetIntegration: pulumi.Output<outputs.datafactory.IntegrationRuntimeSsisVnetIntegration | undefined>;
    /**
     * Create a IntegrationRuntimeSsis resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationRuntimeSsisArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IntegrationRuntimeSsis resources.
 */
export interface IntegrationRuntimeSsisState {
    /**
     * A `catalogInfo` block as defined below.
     */
    catalogInfo?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisCatalogInfo>;
    /**
     * A `customSetupScript` block as defined below.
     */
    customSetupScript?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisCustomSetupScript>;
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
     * Integration runtime description.
     */
    description?: pulumi.Input<string>;
    /**
     * The Azure-SSIS Integration Runtime edition. Valid values are `Standard` and `Enterprise`. Defaults to `Standard`.
     */
    edition?: pulumi.Input<string>;
    /**
     * An `expressCustomSetup` block as defined below.
     */
    expressCustomSetup?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisExpressCustomSetup>;
    /**
     * The type of the license that is used. Valid values are `LicenseIncluded` and `BasePrice`. Defaults to `LicenseIncluded`.
     */
    licenseType?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Defines the maximum parallel executions per node. Defaults to `1`. Max is `16`.
     */
    maxParallelExecutionsPerNode?: pulumi.Input<number>;
    /**
     * Specifies the name of the Azure-SSIS Integration Runtime. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * The size of the nodes on which the Azure-SSIS Integration Runtime runs. Valid values are: `Standard_D2_v3`, `Standard_D4_v3`, `Standard_D8_v3`, `Standard_D16_v3`, `Standard_D32_v3`, `Standard_D64_v3`, `Standard_E2_v3`, `Standard_E4_v3`, `Standard_E8_v3`, `Standard_E16_v3`, `Standard_E32_v3`, `Standard_E64_v3`, `Standard_D1_v2`, `Standard_D2_v2`, `Standard_D3_v2`, `Standard_D4_v2`, `Standard_A4_v2` and `Standard_A8_v2`
     */
    nodeSize?: pulumi.Input<string>;
    /**
     * Number of nodes for the Azure-SSIS Integration Runtime. Max is `10`. Defaults to `1`.
     */
    numberOfNodes?: pulumi.Input<number>;
    /**
     * One or more `packageStore` block as defined below.
     */
    packageStores?: pulumi.Input<pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisPackageStore>[]>;
    /**
     * A `proxy` block as defined below.
     */
    proxy?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisProxy>;
    /**
     * The name of the resource group in which to create the Azure-SSIS Integration Runtime. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `vnetIntegration` block as defined below.
     */
    vnetIntegration?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisVnetIntegration>;
}
/**
 * The set of arguments for constructing a IntegrationRuntimeSsis resource.
 */
export interface IntegrationRuntimeSsisArgs {
    /**
     * A `catalogInfo` block as defined below.
     */
    catalogInfo?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisCatalogInfo>;
    /**
     * A `customSetupScript` block as defined below.
     */
    customSetupScript?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisCustomSetupScript>;
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
     * Integration runtime description.
     */
    description?: pulumi.Input<string>;
    /**
     * The Azure-SSIS Integration Runtime edition. Valid values are `Standard` and `Enterprise`. Defaults to `Standard`.
     */
    edition?: pulumi.Input<string>;
    /**
     * An `expressCustomSetup` block as defined below.
     */
    expressCustomSetup?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisExpressCustomSetup>;
    /**
     * The type of the license that is used. Valid values are `LicenseIncluded` and `BasePrice`. Defaults to `LicenseIncluded`.
     */
    licenseType?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Defines the maximum parallel executions per node. Defaults to `1`. Max is `16`.
     */
    maxParallelExecutionsPerNode?: pulumi.Input<number>;
    /**
     * Specifies the name of the Azure-SSIS Integration Runtime. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * The size of the nodes on which the Azure-SSIS Integration Runtime runs. Valid values are: `Standard_D2_v3`, `Standard_D4_v3`, `Standard_D8_v3`, `Standard_D16_v3`, `Standard_D32_v3`, `Standard_D64_v3`, `Standard_E2_v3`, `Standard_E4_v3`, `Standard_E8_v3`, `Standard_E16_v3`, `Standard_E32_v3`, `Standard_E64_v3`, `Standard_D1_v2`, `Standard_D2_v2`, `Standard_D3_v2`, `Standard_D4_v2`, `Standard_A4_v2` and `Standard_A8_v2`
     */
    nodeSize: pulumi.Input<string>;
    /**
     * Number of nodes for the Azure-SSIS Integration Runtime. Max is `10`. Defaults to `1`.
     */
    numberOfNodes?: pulumi.Input<number>;
    /**
     * One or more `packageStore` block as defined below.
     */
    packageStores?: pulumi.Input<pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisPackageStore>[]>;
    /**
     * A `proxy` block as defined below.
     */
    proxy?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisProxy>;
    /**
     * The name of the resource group in which to create the Azure-SSIS Integration Runtime. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `vnetIntegration` block as defined below.
     */
    vnetIntegration?: pulumi.Input<inputs.datafactory.IntegrationRuntimeSsisVnetIntegration>;
}
