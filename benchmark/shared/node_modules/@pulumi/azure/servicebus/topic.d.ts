import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a ServiceBus Topic.
 *
 * **Note** Topics can only be created in Namespaces with an SKU of `standard` or higher.
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
 * const exampleTopic = new azure.servicebus.Topic("exampleTopic", {
 *     namespaceId: exampleNamespace.id,
 *     enablePartitioning: true,
 * });
 * ```
 *
 * ## Import
 *
 * Service Bus Topics can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:servicebus/topic:Topic example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/microsoft.servicebus/namespaces/sbns1/topics/sntopic1
 * ```
 */
export declare class Topic extends pulumi.CustomResource {
    /**
     * Get an existing Topic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TopicState, opts?: pulumi.CustomResourceOptions): Topic;
    /**
     * Returns true if the given object is an instance of Topic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Topic;
    /**
     * The ISO 8601 timespan duration of the idle interval after which the
     * Topic is automatically deleted, minimum of 5 minutes.
     */
    readonly autoDeleteOnIdle: pulumi.Output<string>;
    /**
     * The ISO 8601 timespan duration of TTL of messages sent to this topic if no
     * TTL value is set on the message itself.
     */
    readonly defaultMessageTtl: pulumi.Output<string>;
    /**
     * The ISO 8601 timespan duration during which
     * duplicates can be detected. Defaults to 10 minutes. (`PT10M`)
     */
    readonly duplicateDetectionHistoryTimeWindow: pulumi.Output<string>;
    /**
     * Boolean flag which controls if server-side
     * batched operations are enabled. Defaults to false.
     */
    readonly enableBatchedOperations: pulumi.Output<boolean | undefined>;
    /**
     * Boolean flag which controls whether Express Entities
     * are enabled. An express topic holds a message in memory temporarily before writing
     * it to persistent storage. Defaults to false.
     */
    readonly enableExpress: pulumi.Output<boolean | undefined>;
    /**
     * Boolean flag which controls whether to enable
     * the topic to be partitioned across multiple message brokers. Defaults to false.
     * Changing this forces a new resource to be created.
     */
    readonly enablePartitioning: pulumi.Output<boolean | undefined>;
    /**
     * Integer value which controls the maximum size of
     * a message allowed on the topic for Premium SKU. For supported values see the "Large messages support"
     * section of [this document](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-premium-messaging#large-messages-support-preview).
     */
    readonly maxMessageSizeInKilobytes: pulumi.Output<number>;
    /**
     * Integer value which controls the size of
     * memory allocated for the topic. For supported values see the "Queue/topic size"
     * section of [this document](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quotas).
     */
    readonly maxSizeInMegabytes: pulumi.Output<number>;
    /**
     * Specifies the name of the ServiceBus Topic resource. Changing this forces a
     * new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the ServiceBus Namespace to create
     * this topic in. Changing this forces a new resource to be created.
     */
    readonly namespaceId: pulumi.Output<string>;
    /**
     * @deprecated Deprecated in favor of "namespace_id"
     */
    readonly namespaceName: pulumi.Output<string>;
    /**
     * Boolean flag which controls whether
     * the Topic requires duplicate detection. Defaults to false. Changing this forces
     * a new resource to be created.
     */
    readonly requiresDuplicateDetection: pulumi.Output<boolean | undefined>;
    /**
     * @deprecated Deprecated in favor of "namespace_id"
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Status of the Service Bus Topic. Acceptable values are `Active` or `Disabled`. Defaults to `Active`.
     */
    readonly status: pulumi.Output<string | undefined>;
    /**
     * Boolean flag which controls whether the Topic
     * supports ordering. Defaults to false.
     */
    readonly supportOrdering: pulumi.Output<boolean | undefined>;
    /**
     * Create a Topic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TopicArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Topic resources.
 */
export interface TopicState {
    /**
     * The ISO 8601 timespan duration of the idle interval after which the
     * Topic is automatically deleted, minimum of 5 minutes.
     */
    autoDeleteOnIdle?: pulumi.Input<string>;
    /**
     * The ISO 8601 timespan duration of TTL of messages sent to this topic if no
     * TTL value is set on the message itself.
     */
    defaultMessageTtl?: pulumi.Input<string>;
    /**
     * The ISO 8601 timespan duration during which
     * duplicates can be detected. Defaults to 10 minutes. (`PT10M`)
     */
    duplicateDetectionHistoryTimeWindow?: pulumi.Input<string>;
    /**
     * Boolean flag which controls if server-side
     * batched operations are enabled. Defaults to false.
     */
    enableBatchedOperations?: pulumi.Input<boolean>;
    /**
     * Boolean flag which controls whether Express Entities
     * are enabled. An express topic holds a message in memory temporarily before writing
     * it to persistent storage. Defaults to false.
     */
    enableExpress?: pulumi.Input<boolean>;
    /**
     * Boolean flag which controls whether to enable
     * the topic to be partitioned across multiple message brokers. Defaults to false.
     * Changing this forces a new resource to be created.
     */
    enablePartitioning?: pulumi.Input<boolean>;
    /**
     * Integer value which controls the maximum size of
     * a message allowed on the topic for Premium SKU. For supported values see the "Large messages support"
     * section of [this document](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-premium-messaging#large-messages-support-preview).
     */
    maxMessageSizeInKilobytes?: pulumi.Input<number>;
    /**
     * Integer value which controls the size of
     * memory allocated for the topic. For supported values see the "Queue/topic size"
     * section of [this document](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quotas).
     */
    maxSizeInMegabytes?: pulumi.Input<number>;
    /**
     * Specifies the name of the ServiceBus Topic resource. Changing this forces a
     * new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the ServiceBus Namespace to create
     * this topic in. Changing this forces a new resource to be created.
     */
    namespaceId?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated in favor of "namespace_id"
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * Boolean flag which controls whether
     * the Topic requires duplicate detection. Defaults to false. Changing this forces
     * a new resource to be created.
     */
    requiresDuplicateDetection?: pulumi.Input<boolean>;
    /**
     * @deprecated Deprecated in favor of "namespace_id"
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Status of the Service Bus Topic. Acceptable values are `Active` or `Disabled`. Defaults to `Active`.
     */
    status?: pulumi.Input<string>;
    /**
     * Boolean flag which controls whether the Topic
     * supports ordering. Defaults to false.
     */
    supportOrdering?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a Topic resource.
 */
export interface TopicArgs {
    /**
     * The ISO 8601 timespan duration of the idle interval after which the
     * Topic is automatically deleted, minimum of 5 minutes.
     */
    autoDeleteOnIdle?: pulumi.Input<string>;
    /**
     * The ISO 8601 timespan duration of TTL of messages sent to this topic if no
     * TTL value is set on the message itself.
     */
    defaultMessageTtl?: pulumi.Input<string>;
    /**
     * The ISO 8601 timespan duration during which
     * duplicates can be detected. Defaults to 10 minutes. (`PT10M`)
     */
    duplicateDetectionHistoryTimeWindow?: pulumi.Input<string>;
    /**
     * Boolean flag which controls if server-side
     * batched operations are enabled. Defaults to false.
     */
    enableBatchedOperations?: pulumi.Input<boolean>;
    /**
     * Boolean flag which controls whether Express Entities
     * are enabled. An express topic holds a message in memory temporarily before writing
     * it to persistent storage. Defaults to false.
     */
    enableExpress?: pulumi.Input<boolean>;
    /**
     * Boolean flag which controls whether to enable
     * the topic to be partitioned across multiple message brokers. Defaults to false.
     * Changing this forces a new resource to be created.
     */
    enablePartitioning?: pulumi.Input<boolean>;
    /**
     * Integer value which controls the maximum size of
     * a message allowed on the topic for Premium SKU. For supported values see the "Large messages support"
     * section of [this document](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-premium-messaging#large-messages-support-preview).
     */
    maxMessageSizeInKilobytes?: pulumi.Input<number>;
    /**
     * Integer value which controls the size of
     * memory allocated for the topic. For supported values see the "Queue/topic size"
     * section of [this document](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quotas).
     */
    maxSizeInMegabytes?: pulumi.Input<number>;
    /**
     * Specifies the name of the ServiceBus Topic resource. Changing this forces a
     * new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the ServiceBus Namespace to create
     * this topic in. Changing this forces a new resource to be created.
     */
    namespaceId?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated in favor of "namespace_id"
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * Boolean flag which controls whether
     * the Topic requires duplicate detection. Defaults to false. Changing this forces
     * a new resource to be created.
     */
    requiresDuplicateDetection?: pulumi.Input<boolean>;
    /**
     * @deprecated Deprecated in favor of "namespace_id"
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Status of the Service Bus Topic. Acceptable values are `Active` or `Disabled`. Defaults to `Active`.
     */
    status?: pulumi.Input<string>;
    /**
     * Boolean flag which controls whether the Topic
     * supports ordering. Defaults to false.
     */
    supportOrdering?: pulumi.Input<boolean>;
}
