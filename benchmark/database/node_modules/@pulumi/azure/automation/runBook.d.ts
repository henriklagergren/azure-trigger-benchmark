import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Automation Runbook.
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
 * const exampleRunBook = new azure.automation.RunBook("exampleRunBook", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     automationAccountName: exampleAccount.name,
 *     logVerbose: "true",
 *     logProgress: "true",
 *     description: "This is an example runbook",
 *     runbookType: "PowerShellWorkflow",
 *     publishContentLink: {
 *         uri: "https://raw.githubusercontent.com/Azure/azure-quickstart-templates/c4935ffb69246a6058eb24f54640f53f69d3ac9f/101-automation-runbook-getvms/Runbooks/Get-AzureVMTutorial.ps1",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Automation Runbooks can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:automation/runBook:RunBook Get-AzureVMTutorial /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Automation/automationAccounts/account1/runbooks/Get-AzureVMTutorial
 * ```
 */
export declare class RunBook extends pulumi.CustomResource {
    /**
     * Get an existing RunBook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RunBookState, opts?: pulumi.CustomResourceOptions): RunBook;
    /**
     * Returns true if the given object is an instance of RunBook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RunBook;
    /**
     * The name of the automation account in which the Runbook is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName: pulumi.Output<string>;
    /**
     * The desired content of the runbook.
     */
    readonly content: pulumi.Output<string>;
    /**
     * A description for this credential.
     */
    readonly description: pulumi.Output<string | undefined>;
    readonly jobSchedules: pulumi.Output<outputs.automation.RunBookJobSchedule[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Progress log option.
     */
    readonly logProgress: pulumi.Output<boolean>;
    /**
     * Verbose log option.
     */
    readonly logVerbose: pulumi.Output<boolean>;
    /**
     * Specifies the name of the Runbook. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The published runbook content link.
     */
    readonly publishContentLink: pulumi.Output<outputs.automation.RunBookPublishContentLink | undefined>;
    /**
     * The name of the resource group in which the Runbook is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The type of the runbook - can be either `Graph`, `GraphPowerShell`, `GraphPowerShellWorkflow`, `PowerShellWorkflow`, `PowerShell` or `Script`.
     */
    readonly runbookType: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a RunBook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RunBookArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RunBook resources.
 */
export interface RunBookState {
    /**
     * The name of the automation account in which the Runbook is created. Changing this forces a new resource to be created.
     */
    automationAccountName?: pulumi.Input<string>;
    /**
     * The desired content of the runbook.
     */
    content?: pulumi.Input<string>;
    /**
     * A description for this credential.
     */
    description?: pulumi.Input<string>;
    jobSchedules?: pulumi.Input<pulumi.Input<inputs.automation.RunBookJobSchedule>[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Progress log option.
     */
    logProgress?: pulumi.Input<boolean>;
    /**
     * Verbose log option.
     */
    logVerbose?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the Runbook. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The published runbook content link.
     */
    publishContentLink?: pulumi.Input<inputs.automation.RunBookPublishContentLink>;
    /**
     * The name of the resource group in which the Runbook is created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The type of the runbook - can be either `Graph`, `GraphPowerShell`, `GraphPowerShellWorkflow`, `PowerShellWorkflow`, `PowerShell` or `Script`.
     */
    runbookType?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a RunBook resource.
 */
export interface RunBookArgs {
    /**
     * The name of the automation account in which the Runbook is created. Changing this forces a new resource to be created.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The desired content of the runbook.
     */
    content?: pulumi.Input<string>;
    /**
     * A description for this credential.
     */
    description?: pulumi.Input<string>;
    jobSchedules?: pulumi.Input<pulumi.Input<inputs.automation.RunBookJobSchedule>[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Progress log option.
     */
    logProgress: pulumi.Input<boolean>;
    /**
     * Verbose log option.
     */
    logVerbose: pulumi.Input<boolean>;
    /**
     * Specifies the name of the Runbook. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The published runbook content link.
     */
    publishContentLink?: pulumi.Input<inputs.automation.RunBookPublishContentLink>;
    /**
     * The name of the resource group in which the Runbook is created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The type of the runbook - can be either `Graph`, `GraphPowerShell`, `GraphPowerShellWorkflow`, `PowerShellWorkflow`, `PowerShell` or `Script`.
     */
    runbookType: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
