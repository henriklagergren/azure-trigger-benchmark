import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Authorization Rule for a ServiceBus Queue.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West US"});
 * const exampleNamespace = new azure.servicebus.Namespace("exampleNamespace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard",
 *     tags: {
 *         source: "example",
 *     },
 * });
 * const exampleQueue = new azure.servicebus.Queue("exampleQueue", {
 *     namespaceId: exampleNamespace.id,
 *     enablePartitioning: true,
 * });
 * const exampleQueueAuthorizationRule = new azure.servicebus.QueueAuthorizationRule("exampleQueueAuthorizationRule", {
 *     queueId: exampleQueue.id,
 *     listen: true,
 *     send: true,
 *     manage: false,
 * });
 * ```
 *
 * ## Import
 *
 * ServiceBus Queue Authorization Rules can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:servicebus/queueAuthorizationRule:QueueAuthorizationRule rule1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ServiceBus/namespaces/namespace1/queues/queue1/authorizationRules/rule1
 * ```
 */
export declare class QueueAuthorizationRule extends pulumi.CustomResource {
    /**
     * Get an existing QueueAuthorizationRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QueueAuthorizationRuleState, opts?: pulumi.CustomResourceOptions): QueueAuthorizationRule;
    /**
     * Returns true if the given object is an instance of QueueAuthorizationRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is QueueAuthorizationRule;
    /**
     * Does this Authorization Rule have Listen permissions to the ServiceBus Queue? Defaults to `false`.
     */
    readonly listen: pulumi.Output<boolean | undefined>;
    /**
     * Does this Authorization Rule have Manage permissions to the ServiceBus Queue? When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
     */
    readonly manage: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the name of the Authorization Rule. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * @deprecated Deprecated in favor of "queue_id"
     */
    readonly namespaceName: pulumi.Output<string>;
    /**
     * The Primary Connection String for the Authorization Rule.
     */
    readonly primaryConnectionString: pulumi.Output<string>;
    /**
     * The alias Primary Connection String for the ServiceBus Namespace, if the namespace is Geo DR paired.
     */
    readonly primaryConnectionStringAlias: pulumi.Output<string>;
    /**
     * The Primary Key for the Authorization Rule.
     */
    readonly primaryKey: pulumi.Output<string>;
    /**
     * Specifies the ID of the ServiceBus Queue. Changing this forces a new resource to be created.
     */
    readonly queueId: pulumi.Output<string>;
    /**
     * @deprecated Deprecated in favor of "queue_id"
     */
    readonly queueName: pulumi.Output<string>;
    /**
     * @deprecated Deprecated in favor of "queue_id"
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Secondary Connection String for the Authorization Rule.
     */
    readonly secondaryConnectionString: pulumi.Output<string>;
    /**
     * The alias Secondary Connection String for the ServiceBus Namespace
     */
    readonly secondaryConnectionStringAlias: pulumi.Output<string>;
    /**
     * The Secondary Key for the Authorization Rule.
     */
    readonly secondaryKey: pulumi.Output<string>;
    /**
     * Does this Authorization Rule have Send permissions to the ServiceBus Queue? Defaults to `false`.
     */
    readonly send: pulumi.Output<boolean | undefined>;
    /**
     * Create a QueueAuthorizationRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: QueueAuthorizationRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering QueueAuthorizationRule resources.
 */
export interface QueueAuthorizationRuleState {
    /**
     * Does this Authorization Rule have Listen permissions to the ServiceBus Queue? Defaults to `false`.
     */
    listen?: pulumi.Input<boolean>;
    /**
     * Does this Authorization Rule have Manage permissions to the ServiceBus Queue? When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
     */
    manage?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the Authorization Rule. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated in favor of "queue_id"
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * The Primary Connection String for the Authorization Rule.
     */
    primaryConnectionString?: pulumi.Input<string>;
    /**
     * The alias Primary Connection String for the ServiceBus Namespace, if the namespace is Geo DR paired.
     */
    primaryConnectionStringAlias?: pulumi.Input<string>;
    /**
     * The Primary Key for the Authorization Rule.
     */
    primaryKey?: pulumi.Input<string>;
    /**
     * Specifies the ID of the ServiceBus Queue. Changing this forces a new resource to be created.
     */
    queueId?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated in favor of "queue_id"
     */
    queueName?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated in favor of "queue_id"
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Secondary Connection String for the Authorization Rule.
     */
    secondaryConnectionString?: pulumi.Input<string>;
    /**
     * The alias Secondary Connection String for the ServiceBus Namespace
     */
    secondaryConnectionStringAlias?: pulumi.Input<string>;
    /**
     * The Secondary Key for the Authorization Rule.
     */
    secondaryKey?: pulumi.Input<string>;
    /**
     * Does this Authorization Rule have Send permissions to the ServiceBus Queue? Defaults to `false`.
     */
    send?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a QueueAuthorizationRule resource.
 */
export interface QueueAuthorizationRuleArgs {
    /**
     * Does this Authorization Rule have Listen permissions to the ServiceBus Queue? Defaults to `false`.
     */
    listen?: pulumi.Input<boolean>;
    /**
     * Does this Authorization Rule have Manage permissions to the ServiceBus Queue? When this property is `true` - both `listen` and `send` must be too. Defaults to `false`.
     */
    manage?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the Authorization Rule. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated in favor of "queue_id"
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * Specifies the ID of the ServiceBus Queue. Changing this forces a new resource to be created.
     */
    queueId?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated in favor of "queue_id"
     */
    queueName?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated in favor of "queue_id"
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Does this Authorization Rule have Send permissions to the ServiceBus Queue? Defaults to `false`.
     */
    send?: pulumi.Input<boolean>;
}
