import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Authorization Rule for an Event Hub Namespace.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleEventHubNamespace = new azure.eventhub.EventHubNamespace("exampleEventHubNamespace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Basic",
 *     capacity: 2,
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * const exampleEventHubNamespaceAuthorizationRule = new azure.eventhub.EventHubNamespaceAuthorizationRule("exampleEventHubNamespaceAuthorizationRule", {
 *     namespaceName: exampleEventHubNamespace.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     listen: true,
 *     send: false,
 *     manage: false,
 * });
 * ```
 *
 * ## Import
 *
 * EventHub Namespace Authorization Rules can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:eventhub/eventHubNamespaceAuthorizationRule:EventHubNamespaceAuthorizationRule example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.EventHub/namespaces/namespace1/authorizationRules/rule1
 * ```
 */
export declare class EventHubNamespaceAuthorizationRule extends pulumi.CustomResource {
    /**
     * Get an existing EventHubNamespaceAuthorizationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventHubNamespaceAuthorizationRuleState, opts?: pulumi.CustomResourceOptions): EventHubNamespaceAuthorizationRule;
    /**
     * Returns true if the given object is an instance of EventHubNamespaceAuthorizationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EventHubNamespaceAuthorizationRule;
    /**
     * Grants listen access to this this Authorization Rule. Defaults to `false`.
     */
    readonly listen: pulumi.Output<boolean | undefined>;
    /**
     * Grants manage access to this this Authorization Rule. When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
     */
    readonly manage: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the name of the Authorization Rule. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
     */
    readonly namespaceName: pulumi.Output<string>;
    /**
     * The Primary Connection String for the Authorization Rule.
     */
    readonly primaryConnectionString: pulumi.Output<string>;
    /**
     * The alias of the Primary Connection String for the Authorization Rule, which is generated when disaster recovery is enabled.
     */
    readonly primaryConnectionStringAlias: pulumi.Output<string>;
    /**
     * The Primary Key for the Authorization Rule.
     */
    readonly primaryKey: pulumi.Output<string>;
    /**
     * The name of the resource group in which the EventHub Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Secondary Connection String for the Authorization Rule.
     */
    readonly secondaryConnectionString: pulumi.Output<string>;
    /**
     * The alias of the Secondary Connection String for the Authorization Rule, which is generated when disaster recovery is enabled.
     */
    readonly secondaryConnectionStringAlias: pulumi.Output<string>;
    /**
     * The Secondary Key for the Authorization Rule.
     */
    readonly secondaryKey: pulumi.Output<string>;
    /**
     * Grants send access to this this Authorization Rule. Defaults to `false`.
     */
    readonly send: pulumi.Output<boolean | undefined>;
    /**
     * Create a EventHubNamespaceAuthorizationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventHubNamespaceAuthorizationRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering EventHubNamespaceAuthorizationRule resources.
 */
export interface EventHubNamespaceAuthorizationRuleState {
    /**
     * Grants listen access to this this Authorization Rule. Defaults to `false`.
     */
    listen?: pulumi.Input<boolean>;
    /**
     * Grants manage access to this this Authorization Rule. When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
     */
    manage?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the Authorization Rule. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * The Primary Connection String for the Authorization Rule.
     */
    primaryConnectionString?: pulumi.Input<string>;
    /**
     * The alias of the Primary Connection String for the Authorization Rule, which is generated when disaster recovery is enabled.
     */
    primaryConnectionStringAlias?: pulumi.Input<string>;
    /**
     * The Primary Key for the Authorization Rule.
     */
    primaryKey?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the EventHub Namespace exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Secondary Connection String for the Authorization Rule.
     */
    secondaryConnectionString?: pulumi.Input<string>;
    /**
     * The alias of the Secondary Connection String for the Authorization Rule, which is generated when disaster recovery is enabled.
     */
    secondaryConnectionStringAlias?: pulumi.Input<string>;
    /**
     * The Secondary Key for the Authorization Rule.
     */
    secondaryKey?: pulumi.Input<string>;
    /**
     * Grants send access to this this Authorization Rule. Defaults to `false`.
     */
    send?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a EventHubNamespaceAuthorizationRule resource.
 */
export interface EventHubNamespaceAuthorizationRuleArgs {
    /**
     * Grants listen access to this this Authorization Rule. Defaults to `false`.
     */
    listen?: pulumi.Input<boolean>;
    /**
     * Grants manage access to this this Authorization Rule. When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
     */
    manage?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the Authorization Rule. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the EventHub Namespace. Changing this forces a new resource to be created.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group in which the EventHub Namespace exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Grants send access to this this Authorization Rule. Defaults to `false`.
     */
    send?: pulumi.Input<boolean>;
}
