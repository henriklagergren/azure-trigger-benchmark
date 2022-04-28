import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Logic App Integration Account Session.
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
 *     skuName: "Basic",
 * });
 * const exampleIntegrationAccountSession = new azure.logicapps.IntegrationAccountSession("exampleIntegrationAccountSession", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     integrationAccountName: exampleIntegrationAccount.name,
 *     content: `	{
 *        "controlNumber": "1234"
 *     }
 * `,
 * });
 * ```
 *
 * ## Import
 *
 * Logic App Integration Account Sessions can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:logicapps/integrationAccountSession:IntegrationAccountSession example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Logic/integrationAccounts/account1/sessions/session1
 * ```
 */
export declare class IntegrationAccountSession extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationAccountSession resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IntegrationAccountSessionState, opts?: pulumi.CustomResourceOptions): IntegrationAccountSession;
    /**
     * Returns true if the given object is an instance of IntegrationAccountSession.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IntegrationAccountSession;
    /**
     * The content of the Logic App Integration Account Session.
     */
    readonly content: pulumi.Output<string>;
    /**
     * The name of the Logic App Integration Account. Changing this forces a new Logic App Integration Account Session to be created.
     */
    readonly integrationAccountName: pulumi.Output<string>;
    /**
     * The name which should be used for this Logic App Integration Account Session. Changing this forces a new Logic App Integration Account Session to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Logic App Integration Account Session should exist. Changing this forces a new Logic App Integration Account Session to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a IntegrationAccountSession resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationAccountSessionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IntegrationAccountSession resources.
 */
export interface IntegrationAccountSessionState {
    /**
     * The content of the Logic App Integration Account Session.
     */
    content?: pulumi.Input<string>;
    /**
     * The name of the Logic App Integration Account. Changing this forces a new Logic App Integration Account Session to be created.
     */
    integrationAccountName?: pulumi.Input<string>;
    /**
     * The name which should be used for this Logic App Integration Account Session. Changing this forces a new Logic App Integration Account Session to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Logic App Integration Account Session should exist. Changing this forces a new Logic App Integration Account Session to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IntegrationAccountSession resource.
 */
export interface IntegrationAccountSessionArgs {
    /**
     * The content of the Logic App Integration Account Session.
     */
    content: pulumi.Input<string>;
    /**
     * The name of the Logic App Integration Account. Changing this forces a new Logic App Integration Account Session to be created.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The name which should be used for this Logic App Integration Account Session. Changing this forces a new Logic App Integration Account Session to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Logic App Integration Account Session should exist. Changing this forces a new Logic App Integration Account Session to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
