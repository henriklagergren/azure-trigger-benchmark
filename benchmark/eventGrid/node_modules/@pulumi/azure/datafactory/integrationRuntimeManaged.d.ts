import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure Data Factory Managed Integration Runtime.
 *
 * > **NOTE:** The `azure.datafactory.IntegrationRuntimeManaged` resource has been superseded by the `azure.datafactory.IntegrationRuntimeSsis` resource. We recommend using the `azure.datafactory.IntegrationRuntimeSsis` resource for new deployments.
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
 * const exampleIntegrationRuntimeManaged = new azure.datafactory.IntegrationRuntimeManaged("exampleIntegrationRuntimeManaged", {
 *     dataFactoryName: exampleFactory.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     nodeSize: "Standard_D8_v3",
 * });
 * ```
 *
 * ## Import
 *
 * Data Factory Integration Managed Runtimes can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/integrationRuntimeManaged:IntegrationRuntimeManaged example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/integrationruntimes/example
 * ```
 */
export declare class IntegrationRuntimeManaged extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationRuntimeManaged resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IntegrationRuntimeManagedState, opts?: pulumi.CustomResourceOptions): IntegrationRuntimeManaged;
    /**
     * Returns true if the given object is an instance of IntegrationRuntimeManaged.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IntegrationRuntimeManaged;
    /**
     * A `catalogInfo` block as defined below.
     */
    readonly catalogInfo: pulumi.Output<outputs.datafactory.IntegrationRuntimeManagedCatalogInfo | undefined>;
    /**
     * A `customSetupScript` block as defined below.
     */
    readonly customSetupScript: pulumi.Output<outputs.datafactory.IntegrationRuntimeManagedCustomSetupScript | undefined>;
    /**
     * Specifies the name of the Data Factory the Managed Integration Runtime belongs to. Changing this forces a new resource to be created.
     */
    readonly dataFactoryName: pulumi.Output<string>;
    /**
     * Integration runtime description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The Managed Integration Runtime edition. Valid values are `Standard` and `Enterprise`. Defaults to `Standard`.
     */
    readonly edition: pulumi.Output<string | undefined>;
    /**
     * The type of the license that is used. Valid values are `LicenseIncluded` and `BasePrize`. Defaults to `LicenseIncluded`.
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
     * Specifies the name of the Managed Integration Runtime. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The size of the nodes on which the Managed Integration Runtime runs. Valid values are: `Standard_D2_v3`, `Standard_D4_v3`, `Standard_D8_v3`, `Standard_D16_v3`, `Standard_D32_v3`, `Standard_D64_v3`, `Standard_E2_v3`, `Standard_E4_v3`, `Standard_E8_v3`, `Standard_E16_v3`, `Standard_E32_v3`, `Standard_E64_v3`, `Standard_D1_v2`, `Standard_D2_v2`, `Standard_D3_v2`, `Standard_D4_v2`, `Standard_A4_v2` and `Standard_A8_v2`
     */
    readonly nodeSize: pulumi.Output<string>;
    /**
     * Number of nodes for the Managed Integration Runtime. Max is `10`. Defaults to `1`.
     */
    readonly numberOfNodes: pulumi.Output<number | undefined>;
    /**
     * The name of the resource group in which to create the Managed Integration Runtime. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `vnetIntegration` block as defined below.
     */
    readonly vnetIntegration: pulumi.Output<outputs.datafactory.IntegrationRuntimeManagedVnetIntegration | undefined>;
    /**
     * Create a IntegrationRuntimeManaged resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationRuntimeManagedArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IntegrationRuntimeManaged resources.
 */
export interface IntegrationRuntimeManagedState {
    /**
     * A `catalogInfo` block as defined below.
     */
    catalogInfo?: pulumi.Input<inputs.datafactory.IntegrationRuntimeManagedCatalogInfo>;
    /**
     * A `customSetupScript` block as defined below.
     */
    customSetupScript?: pulumi.Input<inputs.datafactory.IntegrationRuntimeManagedCustomSetupScript>;
    /**
     * Specifies the name of the Data Factory the Managed Integration Runtime belongs to. Changing this forces a new resource to be created.
     */
    dataFactoryName?: pulumi.Input<string>;
    /**
     * Integration runtime description.
     */
    description?: pulumi.Input<string>;
    /**
     * The Managed Integration Runtime edition. Valid values are `Standard` and `Enterprise`. Defaults to `Standard`.
     */
    edition?: pulumi.Input<string>;
    /**
     * The type of the license that is used. Valid values are `LicenseIncluded` and `BasePrize`. Defaults to `LicenseIncluded`.
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
     * Specifies the name of the Managed Integration Runtime. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * The size of the nodes on which the Managed Integration Runtime runs. Valid values are: `Standard_D2_v3`, `Standard_D4_v3`, `Standard_D8_v3`, `Standard_D16_v3`, `Standard_D32_v3`, `Standard_D64_v3`, `Standard_E2_v3`, `Standard_E4_v3`, `Standard_E8_v3`, `Standard_E16_v3`, `Standard_E32_v3`, `Standard_E64_v3`, `Standard_D1_v2`, `Standard_D2_v2`, `Standard_D3_v2`, `Standard_D4_v2`, `Standard_A4_v2` and `Standard_A8_v2`
     */
    nodeSize?: pulumi.Input<string>;
    /**
     * Number of nodes for the Managed Integration Runtime. Max is `10`. Defaults to `1`.
     */
    numberOfNodes?: pulumi.Input<number>;
    /**
     * The name of the resource group in which to create the Managed Integration Runtime. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `vnetIntegration` block as defined below.
     */
    vnetIntegration?: pulumi.Input<inputs.datafactory.IntegrationRuntimeManagedVnetIntegration>;
}
/**
 * The set of arguments for constructing a IntegrationRuntimeManaged resource.
 */
export interface IntegrationRuntimeManagedArgs {
    /**
     * A `catalogInfo` block as defined below.
     */
    catalogInfo?: pulumi.Input<inputs.datafactory.IntegrationRuntimeManagedCatalogInfo>;
    /**
     * A `customSetupScript` block as defined below.
     */
    customSetupScript?: pulumi.Input<inputs.datafactory.IntegrationRuntimeManagedCustomSetupScript>;
    /**
     * Specifies the name of the Data Factory the Managed Integration Runtime belongs to. Changing this forces a new resource to be created.
     */
    dataFactoryName: pulumi.Input<string>;
    /**
     * Integration runtime description.
     */
    description?: pulumi.Input<string>;
    /**
     * The Managed Integration Runtime edition. Valid values are `Standard` and `Enterprise`. Defaults to `Standard`.
     */
    edition?: pulumi.Input<string>;
    /**
     * The type of the license that is used. Valid values are `LicenseIncluded` and `BasePrize`. Defaults to `LicenseIncluded`.
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
     * Specifies the name of the Managed Integration Runtime. Changing this forces a new resource to be created. Must be globally unique. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/naming-rules) for all restrictions.
     */
    name?: pulumi.Input<string>;
    /**
     * The size of the nodes on which the Managed Integration Runtime runs. Valid values are: `Standard_D2_v3`, `Standard_D4_v3`, `Standard_D8_v3`, `Standard_D16_v3`, `Standard_D32_v3`, `Standard_D64_v3`, `Standard_E2_v3`, `Standard_E4_v3`, `Standard_E8_v3`, `Standard_E16_v3`, `Standard_E32_v3`, `Standard_E64_v3`, `Standard_D1_v2`, `Standard_D2_v2`, `Standard_D3_v2`, `Standard_D4_v2`, `Standard_A4_v2` and `Standard_A8_v2`
     */
    nodeSize: pulumi.Input<string>;
    /**
     * Number of nodes for the Managed Integration Runtime. Max is `10`. Defaults to `1`.
     */
    numberOfNodes?: pulumi.Input<number>;
    /**
     * The name of the resource group in which to create the Managed Integration Runtime. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `vnetIntegration` block as defined below.
     */
    vnetIntegration?: pulumi.Input<inputs.datafactory.IntegrationRuntimeManagedVnetIntegration>;
}
