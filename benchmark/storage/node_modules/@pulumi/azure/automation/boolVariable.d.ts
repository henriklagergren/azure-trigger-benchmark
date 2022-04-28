import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a boolean variable in Azure Automation
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.automation.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: [{
 *         name: "Basic",
 *     }],
 * });
 * const exampleBoolVariable = new azure.automation.BoolVariable("exampleBoolVariable", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     automationAccountName: exampleAccount.name,
 *     value: false,
 * });
 * ```
 *
 * ## Import
 *
 * Automation Bool Variable can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:automation/boolVariable:BoolVariable example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/tfex-example-rg/providers/Microsoft.Automation/automationAccounts/tfex-example-account/variables/tfex-example-var
 * ```
 */
export declare class BoolVariable extends pulumi.CustomResource {
    /**
     * Get an existing BoolVariable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BoolVariableState, opts?: pulumi.CustomResourceOptions): BoolVariable;
    /**
     * Returns true if the given object is an instance of BoolVariable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BoolVariable;
    /**
     * The name of the automation account in which the Variable is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName: pulumi.Output<string>;
    /**
     * The description of the Automation Variable.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Specifies if the Automation Variable is encrypted. Defaults to `false`.
     */
    readonly encrypted: pulumi.Output<boolean | undefined>;
    /**
     * The name of the Automation Variable. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Automation Variable. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The value of the Automation Variable as a `boolean`.
     */
    readonly value: pulumi.Output<boolean | undefined>;
    /**
     * Create a BoolVariable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BoolVariableArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering BoolVariable resources.
 */
export interface BoolVariableState {
    /**
     * The name of the automation account in which the Variable is created. Changing this forces a new resource to be created.
     */
    automationAccountName?: pulumi.Input<string>;
    /**
     * The description of the Automation Variable.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies if the Automation Variable is encrypted. Defaults to `false`.
     */
    encrypted?: pulumi.Input<boolean>;
    /**
     * The name of the Automation Variable. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Automation Variable. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The value of the Automation Variable as a `boolean`.
     */
    value?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a BoolVariable resource.
 */
export interface BoolVariableArgs {
    /**
     * The name of the automation account in which the Variable is created. Changing this forces a new resource to be created.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The description of the Automation Variable.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies if the Automation Variable is encrypted. Defaults to `false`.
     */
    encrypted?: pulumi.Input<boolean>;
    /**
     * The name of the Automation Variable. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Automation Variable. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The value of the Automation Variable as a `boolean`.
     */
    value?: pulumi.Input<boolean>;
}
