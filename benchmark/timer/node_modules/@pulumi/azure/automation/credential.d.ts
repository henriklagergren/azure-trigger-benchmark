import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Automation Credential.
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
 *     skuName: "Basic",
 * });
 * const exampleCredential = new azure.automation.Credential("exampleCredential", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     automationAccountName: exampleAccount.name,
 *     username: "example_user",
 *     password: "example_pwd",
 *     description: "This is an example credential",
 * });
 * ```
 *
 * ## Import
 *
 * Automation Credentials can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:automation/credential:Credential credential1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Automation/automationAccounts/account1/credentials/credential1
 * ```
 */
export declare class Credential extends pulumi.CustomResource {
    /**
     * Get an existing Credential resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CredentialState, opts?: pulumi.CustomResourceOptions): Credential;
    /**
     * Returns true if the given object is an instance of Credential.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Credential;
    /**
     * The name of the automation account in which the Credential is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName: pulumi.Output<string>;
    /**
     * The description associated with this Automation Credential.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Credential. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The password associated with this Automation Credential.
     */
    readonly password: pulumi.Output<string>;
    /**
     * The name of the resource group in which the Credential is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The username associated with this Automation Credential.
     */
    readonly username: pulumi.Output<string>;
    /**
     * Create a Credential resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CredentialArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Credential resources.
 */
export interface CredentialState {
    /**
     * The name of the automation account in which the Credential is created. Changing this forces a new resource to be created.
     */
    automationAccountName?: pulumi.Input<string>;
    /**
     * The description associated with this Automation Credential.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the name of the Credential. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The password associated with this Automation Credential.
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Credential is created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The username associated with this Automation Credential.
     */
    username?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Credential resource.
 */
export interface CredentialArgs {
    /**
     * The name of the automation account in which the Credential is created. Changing this forces a new resource to be created.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The description associated with this Automation Credential.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the name of the Credential. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The password associated with this Automation Credential.
     */
    password: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Credential is created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The username associated with this Automation Credential.
     */
    username: pulumi.Input<string>;
}
