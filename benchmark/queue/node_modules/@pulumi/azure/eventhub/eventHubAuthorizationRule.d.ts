import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Event Hubs authorization Rule within an Event Hub.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleEventHubNamespace = new azure.eventhub.EventHubNamespace("exampleEventHubNamespace", {
 *     location: "West US",
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Basic",
 *     capacity: 2,
 *     tags: {
 *         environment: "Production",
 *     },
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
 * ```
 *
 * ## Import
 *
 * EventHub Authorization Rules can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:eventhub/eventHubAuthorizationRule:EventHubAuthorizationRule rule1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.EventHub/namespaces/namespace1/eventhubs/eventhub1/authorizationRules/rule1
 * ```
 *
 * @deprecated azure.eventhub.EventHubAuthorizationRule has been deprecated in favor of azure.eventhub.AuthorizationRule
 */
export declare class EventHubAuthorizationRule extends pulumi.CustomResource {
    /**
     * Get an existing EventHubAuthorizationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventHubAuthorizationRuleState, opts?: pulumi.CustomResourceOptions): EventHubAuthorizationRule;
    /**
     * Returns true if the given object is an instance of EventHubAuthorizationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EventHubAuthorizationRule;
    /**
     * Specifies the name of the EventHub. Changing this forces a new resource to be created.
     */
    readonly eventhubName: pulumi.Output<string>;
    /**
     * Does this Authorization Rule have permissions to Listen to the Event Hub? Defaults to `false`.
     */
    readonly listen: pulumi.Output<boolean | undefined>;
    /**
     * Does this Authorization Rule have permissions to Manage to the Event Hub? When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
     */
    readonly manage: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the name of the EventHub Authorization Rule resource. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the name of the grandparent EventHub Namespace. Changing this forces a new resource to be created.
     */
    readonly namespaceName: pulumi.Output<string>;
    /**
     * The Primary Connection String for the Event Hubs authorization Rule.
     */
    readonly primaryConnectionString: pulumi.Output<string>;
    /**
     * The alias of the Primary Connection String for the Event Hubs authorization Rule, which is generated when disaster recovery is enabled.
     */
    readonly primaryConnectionStringAlias: pulumi.Output<string>;
    /**
     * The Primary Key for the Event Hubs authorization Rule.
     */
    readonly primaryKey: pulumi.Output<string>;
    /**
     * The name of the resource group in which the EventHub Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Secondary Connection String for the Event Hubs Authorization Rule.
     */
    readonly secondaryConnectionString: pulumi.Output<string>;
    /**
     * The alias of the Secondary Connection String for the Event Hubs Authorization Rule, which is generated when disaster recovery is enabled.
     */
    readonly secondaryConnectionStringAlias: pulumi.Output<string>;
    /**
     * The Secondary Key for the Event Hubs Authorization Rule.
     */
    readonly secondaryKey: pulumi.Output<string>;
    /**
     * Does this Authorization Rule have permissions to Send to the Event Hub? Defaults to `false`.
     */
    readonly send: pulumi.Output<boolean | undefined>;
    /**
     * Create a EventHubAuthorizationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    /** @deprecated azure.eventhub.EventHubAuthorizationRule has been deprecated in favor of azure.eventhub.AuthorizationRule */
    constructor(name: string, args: EventHubAuthorizationRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering EventHubAuthorizationRule resources.
 */
export interface EventHubAuthorizationRuleState {
    /**
     * Specifies the name of the EventHub. Changing this forces a new resource to be created.
     */
    eventhubName?: pulumi.Input<string>;
    /**
     * Does this Authorization Rule have permissions to Listen to the Event Hub? Defaults to `false`.
     */
    listen?: pulumi.Input<boolean>;
    /**
     * Does this Authorization Rule have permissions to Manage to the Event Hub? When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
     */
    manage?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the EventHub Authorization Rule resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the grandparent EventHub Namespace. Changing this forces a new resource to be created.
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * The Primary Connection String for the Event Hubs authorization Rule.
     */
    primaryConnectionString?: pulumi.Input<string>;
    /**
     * The alias of the Primary Connection String for the Event Hubs authorization Rule, which is generated when disaster recovery is enabled.
     */
    primaryConnectionStringAlias?: pulumi.Input<string>;
    /**
     * The Primary Key for the Event Hubs authorization Rule.
     */
    primaryKey?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the EventHub Namespace exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Secondary Connection String for the Event Hubs Authorization Rule.
     */
    secondaryConnectionString?: pulumi.Input<string>;
    /**
     * The alias of the Secondary Connection String for the Event Hubs Authorization Rule, which is generated when disaster recovery is enabled.
     */
    secondaryConnectionStringAlias?: pulumi.Input<string>;
    /**
     * The Secondary Key for the Event Hubs Authorization Rule.
     */
    secondaryKey?: pulumi.Input<string>;
    /**
     * Does this Authorization Rule have permissions to Send to the Event Hub? Defaults to `false`.
     */
    send?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a EventHubAuthorizationRule resource.
 */
export interface EventHubAuthorizationRuleArgs {
    /**
     * Specifies the name of the EventHub. Changing this forces a new resource to be created.
     */
    eventhubName: pulumi.Input<string>;
    /**
     * Does this Authorization Rule have permissions to Listen to the Event Hub? Defaults to `false`.
     */
    listen?: pulumi.Input<boolean>;
    /**
     * Does this Authorization Rule have permissions to Manage to the Event Hub? When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
     */
    manage?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the EventHub Authorization Rule resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the grandparent EventHub Namespace. Changing this forces a new resource to be created.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group in which the EventHub Namespace exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Does this Authorization Rule have permissions to Send to the Event Hub? Defaults to `false`.
     */
    send?: pulumi.Input<boolean>;
}
