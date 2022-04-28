import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Logic App Integration Account Batch Configuration.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleIntegrationAccount = new azure.logicapps.IntegrationAccount("exampleIntegrationAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     skuName: "Standard",
 * });
 * const exampleIntegrationAccountBatchConfiguration = new azure.logicapps.IntegrationAccountBatchConfiguration("exampleIntegrationAccountBatchConfiguration", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     integrationAccountName: exampleIntegrationAccount.name,
 *     batchGroupName: "TestBatchGroup",
 *     releaseCriteria: {
 *         messageCount: 80,
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Logic App Integration Account Batch Configurations can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:logicapps/integrationAccountBatchConfiguration:IntegrationAccountBatchConfiguration example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Logic/integrationAccounts/account1/batchConfigurations/batchConfiguration1
 * ```
 */
export declare class IntegrationAccountBatchConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationAccountBatchConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IntegrationAccountBatchConfigurationState, opts?: pulumi.CustomResourceOptions): IntegrationAccountBatchConfiguration;
    /**
     * Returns true if the given object is an instance of IntegrationAccountBatchConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IntegrationAccountBatchConfiguration;
    /**
     * The batch group name of the Logic App Integration Batch Configuration. Changing this forces a new resource to be created.
     */
    readonly batchGroupName: pulumi.Output<string>;
    /**
     * The name of the Logic App Integration Account. Changing this forces a new resource to be created.
     */
    readonly integrationAccountName: pulumi.Output<string>;
    /**
     * A JSON mapping of any Metadata for this Logic App Integration Account Batch Configuration.
     */
    readonly metadata: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The name which should be used for this Logic App Integration Account Batch Configuration. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `releaseCriteria` block as documented below, which is used to select the criteria to meet before processing each batch.
     */
    readonly releaseCriteria: pulumi.Output<outputs.logicapps.IntegrationAccountBatchConfigurationReleaseCriteria>;
    /**
     * The name of the Resource Group where the Logic App Integration Account Batch Configuration should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a IntegrationAccountBatchConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationAccountBatchConfigurationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IntegrationAccountBatchConfiguration resources.
 */
export interface IntegrationAccountBatchConfigurationState {
    /**
     * The batch group name of the Logic App Integration Batch Configuration. Changing this forces a new resource to be created.
     */
    batchGroupName?: pulumi.Input<string>;
    /**
     * The name of the Logic App Integration Account. Changing this forces a new resource to be created.
     */
    integrationAccountName?: pulumi.Input<string>;
    /**
     * A JSON mapping of any Metadata for this Logic App Integration Account Batch Configuration.
     */
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name which should be used for this Logic App Integration Account Batch Configuration. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `releaseCriteria` block as documented below, which is used to select the criteria to meet before processing each batch.
     */
    releaseCriteria?: pulumi.Input<inputs.logicapps.IntegrationAccountBatchConfigurationReleaseCriteria>;
    /**
     * The name of the Resource Group where the Logic App Integration Account Batch Configuration should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IntegrationAccountBatchConfiguration resource.
 */
export interface IntegrationAccountBatchConfigurationArgs {
    /**
     * The batch group name of the Logic App Integration Batch Configuration. Changing this forces a new resource to be created.
     */
    batchGroupName: pulumi.Input<string>;
    /**
     * The name of the Logic App Integration Account. Changing this forces a new resource to be created.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * A JSON mapping of any Metadata for this Logic App Integration Account Batch Configuration.
     */
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name which should be used for this Logic App Integration Account Batch Configuration. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `releaseCriteria` block as documented below, which is used to select the criteria to meet before processing each batch.
     */
    releaseCriteria: pulumi.Input<inputs.logicapps.IntegrationAccountBatchConfigurationReleaseCriteria>;
    /**
     * The name of the Resource Group where the Logic App Integration Account Batch Configuration should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
