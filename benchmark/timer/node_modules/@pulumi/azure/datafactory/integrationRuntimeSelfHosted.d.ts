import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Data Factory Self-hosted Integration Runtime.
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
 * const exampleIntegrationRuntimeSelfHosted = new azure.datafactory.IntegrationRuntimeSelfHosted("exampleIntegrationRuntimeSelfHosted", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataFactoryId: exampleFactory.id,
 * });
 * ```
 *
 * ## Import
 *
 * Data Factories can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datafactory/integrationRuntimeSelfHosted:IntegrationRuntimeSelfHosted example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.DataFactory/factories/example/integrationruntimes/example
 * ```
 */
export declare class IntegrationRuntimeSelfHosted extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationRuntimeSelfHosted resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IntegrationRuntimeSelfHostedState, opts?: pulumi.CustomResourceOptions): IntegrationRuntimeSelfHosted;
    /**
     * Returns true if the given object is an instance of IntegrationRuntimeSelfHosted.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IntegrationRuntimeSelfHosted;
    /**
     * The primary integration runtime authentication key.
     */
    readonly authKey1: pulumi.Output<string>;
    /**
     * The secondary integration runtime authentication key.
     */
    readonly authKey2: pulumi.Output<string>;
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
     * The name which should be used for this Data Factory. Changing this forces a new Data Factory Self-hosted Integration Runtime to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `rbacAuthorization` block as defined below.
     */
    readonly rbacAuthorizations: pulumi.Output<outputs.datafactory.IntegrationRuntimeSelfHostedRbacAuthorization[] | undefined>;
    /**
     * The name of the Resource Group where the Data Factory should exist. Changing this forces a new Data Factory Self-hosted Integration Runtime to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a IntegrationRuntimeSelfHosted resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationRuntimeSelfHostedArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IntegrationRuntimeSelfHosted resources.
 */
export interface IntegrationRuntimeSelfHostedState {
    /**
     * The primary integration runtime authentication key.
     */
    authKey1?: pulumi.Input<string>;
    /**
     * The secondary integration runtime authentication key.
     */
    authKey2?: pulumi.Input<string>;
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
     * The name which should be used for this Data Factory. Changing this forces a new Data Factory Self-hosted Integration Runtime to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `rbacAuthorization` block as defined below.
     */
    rbacAuthorizations?: pulumi.Input<pulumi.Input<inputs.datafactory.IntegrationRuntimeSelfHostedRbacAuthorization>[]>;
    /**
     * The name of the Resource Group where the Data Factory should exist. Changing this forces a new Data Factory Self-hosted Integration Runtime to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IntegrationRuntimeSelfHosted resource.
 */
export interface IntegrationRuntimeSelfHostedArgs {
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
     * The name which should be used for this Data Factory. Changing this forces a new Data Factory Self-hosted Integration Runtime to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `rbacAuthorization` block as defined below.
     */
    rbacAuthorizations?: pulumi.Input<pulumi.Input<inputs.datafactory.IntegrationRuntimeSelfHostedRbacAuthorization>[]>;
    /**
     * The name of the Resource Group where the Data Factory should exist. Changing this forces a new Data Factory Self-hosted Integration Runtime to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
