import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages Security Center Automation and Continuous Export. This resource supports three types of destination in the `action`, Logic Apps, Log Analytics and Event Hubs
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleEventHubNamespace = new azure.eventhub.EventHubNamespace("exampleEventHubNamespace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard",
 *     capacity: 2,
 * });
 * const exampleEventHub = new azure.eventhub.EventHub("exampleEventHub", {
 *     namespaceName: exampleEventHubNamespace.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     partitionCount: 2,
 *     messageRetention: 2,
 * });
 * const exampleAuthorizationRule = new azure.eventhub.AuthorizationRule("exampleAuthorizationRule", {
 *     namespaceName: exampleEventHubNamespace.name,
 *     eventhubName: exampleEventHub.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     listen: true,
 *     send: false,
 *     manage: false,
 * });
 * const exampleAutomation = new azure.securitycenter.Automation("exampleAutomation", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     actions: [{
 *         type: "EventHub",
 *         resourceId: exampleEventHub.id,
 *         connectionString: exampleAuthorizationRule.primaryConnectionString,
 *     }],
 *     sources: [{
 *         eventSource: "Alerts",
 *         ruleSets: [{
 *             rules: [{
 *                 propertyPath: "properties.metadata.severity",
 *                 operator: "Equals",
 *                 expectedValue: "High",
 *                 propertyType: "String",
 *             }],
 *         }],
 *     }],
 *     scopes: [current.then(current => `/subscriptions/${current.subscriptionId}`)],
 * });
 * ```
 *
 * ## Import
 *
 * Security Center Automations can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:securitycenter/automation:Automation example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Security/automations/automation1
 * ```
 */
export declare class Automation extends pulumi.CustomResource {
    /**
     * Get an existing Automation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AutomationState, opts?: pulumi.CustomResourceOptions): Automation;
    /**
     * Returns true if the given object is an instance of Automation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Automation;
    /**
     * One or more `action` blocks as defined below. An `action` tells this automation where the data is to be sent to upon being evaluated by the rules in the `source`.
     */
    readonly actions: pulumi.Output<outputs.securitycenter.AutomationAction[]>;
    /**
     * Specifies the description for the Security Center Automation.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Boolean to enable or disable this Security Center Automation.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * The Azure Region where the Security Center Automation should exist. Changing this forces a new Security Center Automation to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Security Center Automation. Changing this forces a new Security Center Automation to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Security Center Automation should exist. Changing this forces a new Security Center Automation to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A list of scopes on which the automation logic is applied, at least one is required. Supported scopes are a subscription (in this format `/subscriptions/00000000-0000-0000-0000-000000000000`) or a resource group under that subscription (in the format `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example`). The automation will only apply on defined scopes.
     */
    readonly scopes: pulumi.Output<string[]>;
    /**
     * One or more `source` blocks as defined below. A `source` defines what data types will be processed and a set of rules to filter that data.
     */
    readonly sources: pulumi.Output<outputs.securitycenter.AutomationSource[]>;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Automation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AutomationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Automation resources.
 */
export interface AutomationState {
    /**
     * One or more `action` blocks as defined below. An `action` tells this automation where the data is to be sent to upon being evaluated by the rules in the `source`.
     */
    actions?: pulumi.Input<pulumi.Input<inputs.securitycenter.AutomationAction>[]>;
    /**
     * Specifies the description for the Security Center Automation.
     */
    description?: pulumi.Input<string>;
    /**
     * Boolean to enable or disable this Security Center Automation.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The Azure Region where the Security Center Automation should exist. Changing this forces a new Security Center Automation to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Security Center Automation. Changing this forces a new Security Center Automation to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Security Center Automation should exist. Changing this forces a new Security Center Automation to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A list of scopes on which the automation logic is applied, at least one is required. Supported scopes are a subscription (in this format `/subscriptions/00000000-0000-0000-0000-000000000000`) or a resource group under that subscription (in the format `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example`). The automation will only apply on defined scopes.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * One or more `source` blocks as defined below. A `source` defines what data types will be processed and a set of rules to filter that data.
     */
    sources?: pulumi.Input<pulumi.Input<inputs.securitycenter.AutomationSource>[]>;
    /**
     * A mapping of tags assigned to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Automation resource.
 */
export interface AutomationArgs {
    /**
     * One or more `action` blocks as defined below. An `action` tells this automation where the data is to be sent to upon being evaluated by the rules in the `source`.
     */
    actions: pulumi.Input<pulumi.Input<inputs.securitycenter.AutomationAction>[]>;
    /**
     * Specifies the description for the Security Center Automation.
     */
    description?: pulumi.Input<string>;
    /**
     * Boolean to enable or disable this Security Center Automation.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The Azure Region where the Security Center Automation should exist. Changing this forces a new Security Center Automation to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Security Center Automation. Changing this forces a new Security Center Automation to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Security Center Automation should exist. Changing this forces a new Security Center Automation to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A list of scopes on which the automation logic is applied, at least one is required. Supported scopes are a subscription (in this format `/subscriptions/00000000-0000-0000-0000-000000000000`) or a resource group under that subscription (in the format `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example`). The automation will only apply on defined scopes.
     */
    scopes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * One or more `source` blocks as defined below. A `source` defines what data types will be processed and a set of rules to filter that data.
     */
    sources: pulumi.Input<pulumi.Input<inputs.securitycenter.AutomationSource>[]>;
    /**
     * A mapping of tags assigned to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
