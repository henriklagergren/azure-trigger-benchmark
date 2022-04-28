import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Automation DSC Configuration.
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
 * const exampleDscConfiguration = new azure.automation.DscConfiguration("exampleDscConfiguration", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     automationAccountName: exampleAccount.name,
 *     location: exampleResourceGroup.location,
 *     contentEmbedded: "configuration test {}",
 * });
 * ```
 *
 * ## Import
 *
 * Automation DSC Configuration's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:automation/dscConfiguration:DscConfiguration configuration1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Automation/automationAccounts/account1/configurations/configuration1
 * ```
 */
export declare class DscConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing DscConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DscConfigurationState, opts?: pulumi.CustomResourceOptions): DscConfiguration;
    /**
     * Returns true if the given object is an instance of DscConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DscConfiguration;
    /**
     * The name of the automation account in which the DSC Configuration is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName: pulumi.Output<string>;
    /**
     * The PowerShell DSC Configuration script.
     */
    readonly contentEmbedded: pulumi.Output<string>;
    /**
     * Description to go with DSC Configuration.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Must be the same location as the Automation Account.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Verbose log option.
     */
    readonly logVerbose: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the name of the DSC Configuration. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which the DSC Configuration is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    readonly state: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a DscConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DscConfigurationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DscConfiguration resources.
 */
export interface DscConfigurationState {
    /**
     * The name of the automation account in which the DSC Configuration is created. Changing this forces a new resource to be created.
     */
    automationAccountName?: pulumi.Input<string>;
    /**
     * The PowerShell DSC Configuration script.
     */
    contentEmbedded?: pulumi.Input<string>;
    /**
     * Description to go with DSC Configuration.
     */
    description?: pulumi.Input<string>;
    /**
     * Must be the same location as the Automation Account.
     */
    location?: pulumi.Input<string>;
    /**
     * Verbose log option.
     */
    logVerbose?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the DSC Configuration. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the DSC Configuration is created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a DscConfiguration resource.
 */
export interface DscConfigurationArgs {
    /**
     * The name of the automation account in which the DSC Configuration is created. Changing this forces a new resource to be created.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The PowerShell DSC Configuration script.
     */
    contentEmbedded: pulumi.Input<string>;
    /**
     * Description to go with DSC Configuration.
     */
    description?: pulumi.Input<string>;
    /**
     * Must be the same location as the Automation Account.
     */
    location?: pulumi.Input<string>;
    /**
     * Verbose log option.
     */
    logVerbose?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the DSC Configuration. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the DSC Configuration is created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
