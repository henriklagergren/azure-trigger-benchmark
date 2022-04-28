import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a ServiceBus Topic authorization Rule within a ServiceBus Topic.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleNamespace = new azure.servicebus.Namespace("exampleNamespace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard",
 *     tags: {
 *         source: "example",
 *     },
 * });
 * const exampleTopic = new azure.servicebus.Topic("exampleTopic", {namespaceId: exampleNamespace.id});
 * const exampleTopicAuthorizationRule = new azure.servicebus.TopicAuthorizationRule("exampleTopicAuthorizationRule", {
 *     topicId: exampleTopic.id,
 *     listen: true,
 *     send: false,
 *     manage: false,
 * });
 * ```
 *
 * ## Import
 *
 * ServiceBus Topic authorization rules can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:servicebus/topicAuthorizationRule:TopicAuthorizationRule rule1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ServiceBus/namespaces/namespace1/topics/topic1/authorizationRules/rule1
 * ```
 */
export declare class TopicAuthorizationRule extends pulumi.CustomResource {
    /**
     * Get an existing TopicAuthorizationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TopicAuthorizationRuleState, opts?: pulumi.CustomResourceOptions): TopicAuthorizationRule;
    /**
     * Returns true if the given object is an instance of TopicAuthorizationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TopicAuthorizationRule;
    /**
     * Grants listen access to this this Authorization Rule. Defaults to `false`.
     */
    readonly listen: pulumi.Output<boolean | undefined>;
    /**
     * Grants manage access to this this Authorization Rule. When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
     */
    readonly manage: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the name of the ServiceBus Topic Authorization Rule resource. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * @deprecated Deprecated in favor of "topic_id"
     */
    readonly namespaceName: pulumi.Output<string>;
    /**
     * The Primary Connection String for the ServiceBus Topic authorization Rule.
     */
    readonly primaryConnectionString: pulumi.Output<string>;
    /**
     * The alias Primary Connection String for the ServiceBus Namespace, if the namespace is Geo DR paired.
     */
    readonly primaryConnectionStringAlias: pulumi.Output<string>;
    /**
     * The Primary Key for the ServiceBus Topic authorization Rule.
     */
    readonly primaryKey: pulumi.Output<string>;
    /**
     * @deprecated Deprecated in favor of "topic_id"
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Secondary Connection String for the ServiceBus Topic authorization Rule.
     */
    readonly secondaryConnectionString: pulumi.Output<string>;
    /**
     * The alias Secondary Connection String for the ServiceBus Namespace
     */
    readonly secondaryConnectionStringAlias: pulumi.Output<string>;
    /**
     * The Secondary Key for the ServiceBus Topic authorization Rule.
     */
    readonly secondaryKey: pulumi.Output<string>;
    /**
     * Grants send access to this this Authorization Rule. Defaults to `false`.
     */
    readonly send: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the ID of the ServiceBus Topic. Changing this forces a new resource to be created.
     */
    readonly topicId: pulumi.Output<string>;
    /**
     * @deprecated Deprecated in favor of "topic_id"
     */
    readonly topicName: pulumi.Output<string>;
    /**
     * Create a TopicAuthorizationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TopicAuthorizationRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering TopicAuthorizationRule resources.
 */
export interface TopicAuthorizationRuleState {
    /**
     * Grants listen access to this this Authorization Rule. Defaults to `false`.
     */
    listen?: pulumi.Input<boolean>;
    /**
     * Grants manage access to this this Authorization Rule. When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
     */
    manage?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the ServiceBus Topic Authorization Rule resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated in favor of "topic_id"
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * The Primary Connection String for the ServiceBus Topic authorization Rule.
     */
    primaryConnectionString?: pulumi.Input<string>;
    /**
     * The alias Primary Connection String for the ServiceBus Namespace, if the namespace is Geo DR paired.
     */
    primaryConnectionStringAlias?: pulumi.Input<string>;
    /**
     * The Primary Key for the ServiceBus Topic authorization Rule.
     */
    primaryKey?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated in favor of "topic_id"
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Secondary Connection String for the ServiceBus Topic authorization Rule.
     */
    secondaryConnectionString?: pulumi.Input<string>;
    /**
     * The alias Secondary Connection String for the ServiceBus Namespace
     */
    secondaryConnectionStringAlias?: pulumi.Input<string>;
    /**
     * The Secondary Key for the ServiceBus Topic authorization Rule.
     */
    secondaryKey?: pulumi.Input<string>;
    /**
     * Grants send access to this this Authorization Rule. Defaults to `false`.
     */
    send?: pulumi.Input<boolean>;
    /**
     * Specifies the ID of the ServiceBus Topic. Changing this forces a new resource to be created.
     */
    topicId?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated in favor of "topic_id"
     */
    topicName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a TopicAuthorizationRule resource.
 */
export interface TopicAuthorizationRuleArgs {
    /**
     * Grants listen access to this this Authorization Rule. Defaults to `false`.
     */
    listen?: pulumi.Input<boolean>;
    /**
     * Grants manage access to this this Authorization Rule. When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
     */
    manage?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the ServiceBus Topic Authorization Rule resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated in favor of "topic_id"
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated in favor of "topic_id"
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Grants send access to this this Authorization Rule. Defaults to `false`.
     */
    send?: pulumi.Input<boolean>;
    /**
     * Specifies the ID of the ServiceBus Topic. Changing this forces a new resource to be created.
     */
    topicId?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated in favor of "topic_id"
     */
    topicName?: pulumi.Input<string>;
}
