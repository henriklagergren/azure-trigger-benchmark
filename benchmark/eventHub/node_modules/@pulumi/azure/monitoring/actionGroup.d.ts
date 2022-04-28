import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Action Group within Azure Monitor.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleActionGroup = new azure.monitoring.ActionGroup("exampleActionGroup", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     shortName: "p0action",
 *     armRoleReceivers: [{
 *         name: "armroleaction",
 *         roleId: "de139f84-1756-47ae-9be6-808fbbe84772",
 *         useCommonAlertSchema: true,
 *     }],
 *     automationRunbookReceivers: [{
 *         name: "action_name_1",
 *         automationAccountId: "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/rg-runbooks/providers/microsoft.automation/automationaccounts/aaa001",
 *         runbookName: "my runbook",
 *         webhookResourceId: "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/rg-runbooks/providers/microsoft.automation/automationaccounts/aaa001/webhooks/webhook_alert",
 *         isGlobalRunbook: true,
 *         serviceUri: "https://s13events.azure-automation.net/webhooks?token=randomtoken",
 *         useCommonAlertSchema: true,
 *     }],
 *     azureAppPushReceivers: [{
 *         name: "pushtoadmin",
 *         emailAddress: "admin@contoso.com",
 *     }],
 *     azureFunctionReceivers: [{
 *         name: "funcaction",
 *         functionAppResourceId: "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg-funcapp/providers/Microsoft.Web/sites/funcapp",
 *         functionName: "myfunc",
 *         httpTriggerUrl: "https://example.com/trigger",
 *         useCommonAlertSchema: true,
 *     }],
 *     emailReceivers: [
 *         {
 *             name: "sendtoadmin",
 *             emailAddress: "admin@contoso.com",
 *         },
 *         {
 *             name: "sendtodevops",
 *             emailAddress: "devops@contoso.com",
 *             useCommonAlertSchema: true,
 *         },
 *     ],
 *     eventHubReceivers: [{
 *         name: "sendtoeventhub",
 *         eventHubId: "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg-eventhub/providers/Microsoft.EventHub/namespaces/eventhubnamespace/eventhubs/eventhub1",
 *         useCommonAlertSchema: false,
 *     }],
 *     itsmReceivers: [{
 *         name: "createorupdateticket",
 *         workspaceId: "6eee3a18-aac3-40e4-b98e-1f309f329816",
 *         connectionId: "53de6956-42b4-41ba-be3c-b154cdf17b13",
 *         ticketConfiguration: "{}",
 *         region: "southcentralus",
 *     }],
 *     logicAppReceivers: [{
 *         name: "logicappaction",
 *         resourceId: "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg-logicapp/providers/Microsoft.Logic/workflows/logicapp",
 *         callbackUrl: "https://logicapptriggerurl/...",
 *         useCommonAlertSchema: true,
 *     }],
 *     smsReceivers: [{
 *         name: "oncallmsg",
 *         countryCode: "1",
 *         phoneNumber: "1231231234",
 *     }],
 *     voiceReceivers: [{
 *         name: "remotesupport",
 *         countryCode: "86",
 *         phoneNumber: "13888888888",
 *     }],
 *     webhookReceivers: [{
 *         name: "callmyapiaswell",
 *         serviceUri: "http://example.com/alert",
 *         useCommonAlertSchema: true,
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Action Groups can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:monitoring/actionGroup:ActionGroup example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Insights/actionGroups/myagname
 * ```
 */
export declare class ActionGroup extends pulumi.CustomResource {
    /**
     * Get an existing ActionGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ActionGroupState, opts?: pulumi.CustomResourceOptions): ActionGroup;
    /**
     * Returns true if the given object is an instance of ActionGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ActionGroup;
    /**
     * One or more `armRoleReceiver` blocks as defined below.
     */
    readonly armRoleReceivers: pulumi.Output<outputs.monitoring.ActionGroupArmRoleReceiver[] | undefined>;
    /**
     * One or more `automationRunbookReceiver` blocks as defined below.
     */
    readonly automationRunbookReceivers: pulumi.Output<outputs.monitoring.ActionGroupAutomationRunbookReceiver[] | undefined>;
    /**
     * One or more `azureAppPushReceiver` blocks as defined below.
     */
    readonly azureAppPushReceivers: pulumi.Output<outputs.monitoring.ActionGroupAzureAppPushReceiver[] | undefined>;
    /**
     * One or more `azureFunctionReceiver` blocks as defined below.
     */
    readonly azureFunctionReceivers: pulumi.Output<outputs.monitoring.ActionGroupAzureFunctionReceiver[] | undefined>;
    /**
     * One or more `emailReceiver` blocks as defined below.
     */
    readonly emailReceivers: pulumi.Output<outputs.monitoring.ActionGroupEmailReceiver[] | undefined>;
    /**
     * Whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications. Defaults to `true`.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * One or more `eventHubReceiver` blocks as defined below.
     */
    readonly eventHubReceivers: pulumi.Output<outputs.monitoring.ActionGroupEventHubReceiver[] | undefined>;
    /**
     * One or more `itsmReceiver` blocks as defined below.
     */
    readonly itsmReceivers: pulumi.Output<outputs.monitoring.ActionGroupItsmReceiver[] | undefined>;
    /**
     * One or more `logicAppReceiver` blocks as defined below.
     */
    readonly logicAppReceivers: pulumi.Output<outputs.monitoring.ActionGroupLogicAppReceiver[] | undefined>;
    /**
     * The name of the Action Group. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Action Group instance.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The short name of the action group. This will be used in SMS messages.
     */
    readonly shortName: pulumi.Output<string>;
    /**
     * One or more `smsReceiver` blocks as defined below.
     */
    readonly smsReceivers: pulumi.Output<outputs.monitoring.ActionGroupSmsReceiver[] | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * One or more `voiceReceiver` blocks as defined below.
     */
    readonly voiceReceivers: pulumi.Output<outputs.monitoring.ActionGroupVoiceReceiver[] | undefined>;
    /**
     * One or more `webhookReceiver` blocks as defined below.
     */
    readonly webhookReceivers: pulumi.Output<outputs.monitoring.ActionGroupWebhookReceiver[] | undefined>;
    /**
     * Create a ActionGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActionGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ActionGroup resources.
 */
export interface ActionGroupState {
    /**
     * One or more `armRoleReceiver` blocks as defined below.
     */
    armRoleReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupArmRoleReceiver>[]>;
    /**
     * One or more `automationRunbookReceiver` blocks as defined below.
     */
    automationRunbookReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupAutomationRunbookReceiver>[]>;
    /**
     * One or more `azureAppPushReceiver` blocks as defined below.
     */
    azureAppPushReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupAzureAppPushReceiver>[]>;
    /**
     * One or more `azureFunctionReceiver` blocks as defined below.
     */
    azureFunctionReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupAzureFunctionReceiver>[]>;
    /**
     * One or more `emailReceiver` blocks as defined below.
     */
    emailReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupEmailReceiver>[]>;
    /**
     * Whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications. Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * One or more `eventHubReceiver` blocks as defined below.
     */
    eventHubReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupEventHubReceiver>[]>;
    /**
     * One or more `itsmReceiver` blocks as defined below.
     */
    itsmReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupItsmReceiver>[]>;
    /**
     * One or more `logicAppReceiver` blocks as defined below.
     */
    logicAppReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupLogicAppReceiver>[]>;
    /**
     * The name of the Action Group. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Action Group instance.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The short name of the action group. This will be used in SMS messages.
     */
    shortName?: pulumi.Input<string>;
    /**
     * One or more `smsReceiver` blocks as defined below.
     */
    smsReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupSmsReceiver>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * One or more `voiceReceiver` blocks as defined below.
     */
    voiceReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupVoiceReceiver>[]>;
    /**
     * One or more `webhookReceiver` blocks as defined below.
     */
    webhookReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupWebhookReceiver>[]>;
}
/**
 * The set of arguments for constructing a ActionGroup resource.
 */
export interface ActionGroupArgs {
    /**
     * One or more `armRoleReceiver` blocks as defined below.
     */
    armRoleReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupArmRoleReceiver>[]>;
    /**
     * One or more `automationRunbookReceiver` blocks as defined below.
     */
    automationRunbookReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupAutomationRunbookReceiver>[]>;
    /**
     * One or more `azureAppPushReceiver` blocks as defined below.
     */
    azureAppPushReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupAzureAppPushReceiver>[]>;
    /**
     * One or more `azureFunctionReceiver` blocks as defined below.
     */
    azureFunctionReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupAzureFunctionReceiver>[]>;
    /**
     * One or more `emailReceiver` blocks as defined below.
     */
    emailReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupEmailReceiver>[]>;
    /**
     * Whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications. Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * One or more `eventHubReceiver` blocks as defined below.
     */
    eventHubReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupEventHubReceiver>[]>;
    /**
     * One or more `itsmReceiver` blocks as defined below.
     */
    itsmReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupItsmReceiver>[]>;
    /**
     * One or more `logicAppReceiver` blocks as defined below.
     */
    logicAppReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupLogicAppReceiver>[]>;
    /**
     * The name of the Action Group. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Action Group instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The short name of the action group. This will be used in SMS messages.
     */
    shortName: pulumi.Input<string>;
    /**
     * One or more `smsReceiver` blocks as defined below.
     */
    smsReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupSmsReceiver>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * One or more `voiceReceiver` blocks as defined below.
     */
    voiceReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupVoiceReceiver>[]>;
    /**
     * One or more `webhookReceiver` blocks as defined below.
     */
    webhookReceivers?: pulumi.Input<pulumi.Input<inputs.monitoring.ActionGroupWebhookReceiver>[]>;
}
