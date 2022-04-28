import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Automation DSC Node Configuration.
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
 * const exampleDscNodeConfiguration = new azure.automation.DscNodeConfiguration("exampleDscNodeConfiguration", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     automationAccountName: exampleAccount.name,
 *     contentEmbedded: `instance of MSFT_FileDirectoryConfiguration as $MSFT_FileDirectoryConfiguration1ref
 * {
 *   ResourceID = "[File]bla";
 *   Ensure = "Present";
 *   Contents = "bogus Content";
 *   DestinationPath = "c:\\bogus.txt";
 *   ModuleName = "PSDesiredStateConfiguration";
 *   SourceInfo = "::3::9::file";
 *   ModuleVersion = "1.0";
 *   ConfigurationName = "bla";
 * };
 * instance of OMI_ConfigurationDocument
 * {
 *   Version="2.0.0";
 *   MinimumCompatibleVersion = "1.0.0";
 *   CompatibleVersionAdditionalProperties= {"Omi_BaseResource:ConfigurationName"};
 *   Author="bogusAuthor";
 *   GenerationDate="06/15/2018 14:06:24";
 *   GenerationHost="bogusComputer";
 *   Name="test";
 * };
 * `,
 * }, {
 *     dependsOn: [exampleDscConfiguration],
 * });
 * ```
 *
 * ## Import
 *
 * Automation DSC Node Configuration's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:automation/dscNodeConfiguration:DscNodeConfiguration configuration1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Automation/automationAccounts/account1/nodeConfigurations/configuration1
 * ```
 */
export declare class DscNodeConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing DscNodeConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DscNodeConfigurationState, opts?: pulumi.CustomResourceOptions): DscNodeConfiguration;
    /**
     * Returns true if the given object is an instance of DscNodeConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DscNodeConfiguration;
    /**
     * The name of the automation account in which the DSC Node Configuration is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName: pulumi.Output<string>;
    readonly configurationName: pulumi.Output<string>;
    /**
     * The PowerShell DSC Node Configuration (mof content).
     */
    readonly contentEmbedded: pulumi.Output<string>;
    /**
     * Specifies the name of the DSC Node Configuration. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which the DSC Node Configuration is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a DscNodeConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DscNodeConfigurationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DscNodeConfiguration resources.
 */
export interface DscNodeConfigurationState {
    /**
     * The name of the automation account in which the DSC Node Configuration is created. Changing this forces a new resource to be created.
     */
    automationAccountName?: pulumi.Input<string>;
    configurationName?: pulumi.Input<string>;
    /**
     * The PowerShell DSC Node Configuration (mof content).
     */
    contentEmbedded?: pulumi.Input<string>;
    /**
     * Specifies the name of the DSC Node Configuration. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the DSC Node Configuration is created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DscNodeConfiguration resource.
 */
export interface DscNodeConfigurationArgs {
    /**
     * The name of the automation account in which the DSC Node Configuration is created. Changing this forces a new resource to be created.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The PowerShell DSC Node Configuration (mof content).
     */
    contentEmbedded: pulumi.Input<string>;
    /**
     * Specifies the name of the DSC Node Configuration. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the DSC Node Configuration is created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
