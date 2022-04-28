import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Automation Runbook's Webhook.
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
 * const exampleWebhook = new azure.automation.Webhook("exampleWebhook", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     automationAccountName: exampleAccount.name,
 *     expiryTime: "2021-12-31T00:00:00Z",
 *     enabled: true,
 *     runbookName: exampleRunBook.name,
 *     parameters: {
 *         input: "parameter",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Automation Webhooks can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:automation/webhook:Webhook TestRunbook_webhook /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Automation/automationAccounts/account1/webhooks/TestRunbook_webhook
 * ```
 */
export declare class Webhook extends pulumi.CustomResource {
    /**
     * Get an existing Webhook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebhookState, opts?: pulumi.CustomResourceOptions): Webhook;
    /**
     * Returns true if the given object is an instance of Webhook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Webhook;
    /**
     * The name of the automation account in which the Webhook is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName: pulumi.Output<string>;
    /**
     * Controls if Webhook is enabled. Defaults to `true`.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Timestamp when the webhook expires. Changing this forces a new resource to be created.
     */
    readonly expiryTime: pulumi.Output<string>;
    /**
     * Specifies the name of the Webhook. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Map of input parameters passed to runbook.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The name of the resource group in which the Webhook is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Name of the hybrid worker group the Webhook job will run on.
     */
    readonly runOnWorkerGroup: pulumi.Output<string | undefined>;
    /**
     * Name of the Automation Runbook to execute by Webhook.
     */
    readonly runbookName: pulumi.Output<string>;
    /**
     * URI to initiate the webhook. Can be generated using [Generate URI API](https://docs.microsoft.com/en-us/rest/api/automation/webhook/generate-uri). By default, new URI is generated on each new resource creation.
     */
    readonly uri: pulumi.Output<string>;
    /**
     * Create a Webhook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebhookArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Webhook resources.
 */
export interface WebhookState {
    /**
     * The name of the automation account in which the Webhook is created. Changing this forces a new resource to be created.
     */
    automationAccountName?: pulumi.Input<string>;
    /**
     * Controls if Webhook is enabled. Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Timestamp when the webhook expires. Changing this forces a new resource to be created.
     */
    expiryTime?: pulumi.Input<string>;
    /**
     * Specifies the name of the Webhook. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Map of input parameters passed to runbook.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the resource group in which the Webhook is created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Name of the hybrid worker group the Webhook job will run on.
     */
    runOnWorkerGroup?: pulumi.Input<string>;
    /**
     * Name of the Automation Runbook to execute by Webhook.
     */
    runbookName?: pulumi.Input<string>;
    /**
     * URI to initiate the webhook. Can be generated using [Generate URI API](https://docs.microsoft.com/en-us/rest/api/automation/webhook/generate-uri). By default, new URI is generated on each new resource creation.
     */
    uri?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Webhook resource.
 */
export interface WebhookArgs {
    /**
     * The name of the automation account in which the Webhook is created. Changing this forces a new resource to be created.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Controls if Webhook is enabled. Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Timestamp when the webhook expires. Changing this forces a new resource to be created.
     */
    expiryTime: pulumi.Input<string>;
    /**
     * Specifies the name of the Webhook. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Map of input parameters passed to runbook.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the resource group in which the Webhook is created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the hybrid worker group the Webhook job will run on.
     */
    runOnWorkerGroup?: pulumi.Input<string>;
    /**
     * Name of the Automation Runbook to execute by Webhook.
     */
    runbookName: pulumi.Input<string>;
    /**
     * URI to initiate the webhook. Can be generated using [Generate URI API](https://docs.microsoft.com/en-us/rest/api/automation/webhook/generate-uri). By default, new URI is generated on each new resource creation.
     */
    uri?: pulumi.Input<string>;
}
