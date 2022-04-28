import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Logic App Integration Account Schema.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleIntegrationAccount = new azure.logicapps.IntegrationAccount("exampleIntegrationAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     skuName: "Basic",
 * });
 * const exampleIntegrationAccountSchema = new azure.logicapps.IntegrationAccountSchema("exampleIntegrationAccountSchema", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     integrationAccountName: exampleIntegrationAccount.name,
 *     content: fs.readFileSync("testdata/integration_account_schema_content.xsd"),
 * });
 * ```
 *
 * ## Import
 *
 * Logic App Integration Account Schemas can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:logicapps/integrationAccountSchema:IntegrationAccountSchema example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Logic/integrationAccounts/account1/schemas/schema1
 * ```
 */
export declare class IntegrationAccountSchema extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationAccountSchema resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IntegrationAccountSchemaState, opts?: pulumi.CustomResourceOptions): IntegrationAccountSchema;
    /**
     * Returns true if the given object is an instance of IntegrationAccountSchema.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IntegrationAccountSchema;
    /**
     * The content of the Logic App Integration Account Schema.
     */
    readonly content: pulumi.Output<string>;
    /**
     * The file name of the Logic App Integration Account Schema.
     */
    readonly fileName: pulumi.Output<string | undefined>;
    /**
     * The name of the Logic App Integration Account. Changing this forces a new Logic App Integration Account Schema to be created.
     */
    readonly integrationAccountName: pulumi.Output<string>;
    /**
     * The metadata of the Logic App Integration Account Schema.
     */
    readonly metadata: pulumi.Output<string | undefined>;
    /**
     * The name which should be used for this Logic App Integration Account Schema. Changing this forces a new Logic App Integration Account Schema to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Logic App Integration Account Schema should exist. Changing this forces a new Logic App Integration Account Schema to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a IntegrationAccountSchema resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationAccountSchemaArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IntegrationAccountSchema resources.
 */
export interface IntegrationAccountSchemaState {
    /**
     * The content of the Logic App Integration Account Schema.
     */
    content?: pulumi.Input<string>;
    /**
     * The file name of the Logic App Integration Account Schema.
     */
    fileName?: pulumi.Input<string>;
    /**
     * The name of the Logic App Integration Account. Changing this forces a new Logic App Integration Account Schema to be created.
     */
    integrationAccountName?: pulumi.Input<string>;
    /**
     * The metadata of the Logic App Integration Account Schema.
     */
    metadata?: pulumi.Input<string>;
    /**
     * The name which should be used for this Logic App Integration Account Schema. Changing this forces a new Logic App Integration Account Schema to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Logic App Integration Account Schema should exist. Changing this forces a new Logic App Integration Account Schema to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IntegrationAccountSchema resource.
 */
export interface IntegrationAccountSchemaArgs {
    /**
     * The content of the Logic App Integration Account Schema.
     */
    content: pulumi.Input<string>;
    /**
     * The file name of the Logic App Integration Account Schema.
     */
    fileName?: pulumi.Input<string>;
    /**
     * The name of the Logic App Integration Account. Changing this forces a new Logic App Integration Account Schema to be created.
     */
    integrationAccountName: pulumi.Input<string>;
    /**
     * The metadata of the Logic App Integration Account Schema.
     */
    metadata?: pulumi.Input<string>;
    /**
     * The name which should be used for this Logic App Integration Account Schema. Changing this forces a new Logic App Integration Account Schema to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Logic App Integration Account Schema should exist. Changing this forces a new Logic App Integration Account Schema to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
