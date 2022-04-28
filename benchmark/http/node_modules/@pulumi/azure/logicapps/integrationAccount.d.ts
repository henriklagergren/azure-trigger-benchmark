import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Logic App Integration Account.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleIntegrationAccount = new azure.logicapps.IntegrationAccount("exampleIntegrationAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     skuName: "Standard",
 *     tags: {
 *         foo: "bar",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Logic App Integration Accounts can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:logicapps/integrationAccount:IntegrationAccount example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Logic/integrationAccounts/account1
 * ```
 */
export declare class IntegrationAccount extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IntegrationAccountState, opts?: pulumi.CustomResourceOptions): IntegrationAccount;
    /**
     * Returns true if the given object is an instance of IntegrationAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IntegrationAccount;
    /**
     * The resource ID of the Integration Service Environment. Changing this forces a new Logic App Integration Account to be created.
     */
    readonly integrationServiceEnvironmentId: pulumi.Output<string | undefined>;
    /**
     * The Azure Region where the Logic App Integration Account should exist. Changing this forces a new Logic App Integration Account to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Logic App Integration Account. Changing this forces a new Logic App Integration Account to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Logic App Integration Account should exist. Changing this forces a new Logic App Integration Account to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The sku name of the Logic App Integration Account. Possible Values are `Basic`, `Free` and `Standard`.
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Logic App Integration Account.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a IntegrationAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationAccountArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IntegrationAccount resources.
 */
export interface IntegrationAccountState {
    /**
     * The resource ID of the Integration Service Environment. Changing this forces a new Logic App Integration Account to be created.
     */
    integrationServiceEnvironmentId?: pulumi.Input<string>;
    /**
     * The Azure Region where the Logic App Integration Account should exist. Changing this forces a new Logic App Integration Account to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Logic App Integration Account. Changing this forces a new Logic App Integration Account to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Logic App Integration Account should exist. Changing this forces a new Logic App Integration Account to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The sku name of the Logic App Integration Account. Possible Values are `Basic`, `Free` and `Standard`.
     */
    skuName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Logic App Integration Account.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a IntegrationAccount resource.
 */
export interface IntegrationAccountArgs {
    /**
     * The resource ID of the Integration Service Environment. Changing this forces a new Logic App Integration Account to be created.
     */
    integrationServiceEnvironmentId?: pulumi.Input<string>;
    /**
     * The Azure Region where the Logic App Integration Account should exist. Changing this forces a new Logic App Integration Account to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Logic App Integration Account. Changing this forces a new Logic App Integration Account to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Logic App Integration Account should exist. Changing this forces a new Logic App Integration Account to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The sku name of the Logic App Integration Account. Possible Values are `Basic`, `Free` and `Standard`.
     */
    skuName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Logic App Integration Account.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
