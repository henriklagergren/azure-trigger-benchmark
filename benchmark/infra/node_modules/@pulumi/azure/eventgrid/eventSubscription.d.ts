import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an EventGrid Event Subscription
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const defaultResourceGroup = new azure.core.ResourceGroup("defaultResourceGroup", {location: "West Europe"});
 * const defaultAccount = new azure.storage.Account("defaultAccount", {
 *     resourceGroupName: defaultResourceGroup.name,
 *     location: defaultResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * const defaultQueue = new azure.storage.Queue("defaultQueue", {storageAccountName: defaultAccount.name});
 * const defaultEventSubscription = new azure.eventgrid.EventSubscription("defaultEventSubscription", {
 *     scope: defaultResourceGroup.id,
 *     storageQueueEndpoint: {
 *         storageAccountId: defaultAccount.id,
 *         queueName: defaultQueue.name,
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * EventGrid Event Subscription's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:eventgrid/eventSubscription:EventSubscription eventSubscription1
 * ```
 *
 *  /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.EventGrid/topics/topic1/providers/Microsoft.EventGrid/eventSubscriptions/eventSubscription1
 */
export declare class EventSubscription extends pulumi.CustomResource {
    /**
     * Get an existing EventSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventSubscriptionState, opts?: pulumi.CustomResourceOptions): EventSubscription;
    /**
     * Returns true if the given object is an instance of EventSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EventSubscription;
    /**
     * A `advancedFilter` block as defined below.
     */
    readonly advancedFilter: pulumi.Output<outputs.eventgrid.EventSubscriptionAdvancedFilter | undefined>;
    /**
     * Specifies whether advanced filters should be evaluated against an array of values instead of expecting a singular value. Defaults to `false`.
     */
    readonly advancedFilteringOnArraysEnabled: pulumi.Output<boolean | undefined>;
    /**
     * An `azureFunctionEndpoint` block as defined below.
     */
    readonly azureFunctionEndpoint: pulumi.Output<outputs.eventgrid.EventSubscriptionAzureFunctionEndpoint | undefined>;
    /**
     * A `deadLetterIdentity` block as defined below.
     */
    readonly deadLetterIdentity: pulumi.Output<outputs.eventgrid.EventSubscriptionDeadLetterIdentity | undefined>;
    /**
     * A `deliveryIdentity` block as defined below.
     */
    readonly deliveryIdentity: pulumi.Output<outputs.eventgrid.EventSubscriptionDeliveryIdentity | undefined>;
    /**
     * A `deliveryProperty` block as defined below.
     */
    readonly deliveryProperties: pulumi.Output<outputs.eventgrid.EventSubscriptionDeliveryProperty[] | undefined>;
    /**
     * Specifies the event delivery schema for the event subscription. Possible values include: `EventGridSchema`, `CloudEventSchemaV1_0`, `CustomInputSchema`. Defaults to `EventGridSchema`. Changing this forces a new resource to be created.
     */
    readonly eventDeliverySchema: pulumi.Output<string | undefined>;
    /**
     * A `eventhubEndpoint` block as defined below.
     *
     * @deprecated Deprecated in favour of `eventhub_endpoint_id`
     */
    readonly eventhubEndpoint: pulumi.Output<outputs.eventgrid.EventSubscriptionEventhubEndpoint>;
    /**
     * Specifies the id where the Event Hub is located.
     */
    readonly eventhubEndpointId: pulumi.Output<string>;
    /**
     * Specifies the expiration time of the event subscription (Datetime Format `RFC 3339`).
     */
    readonly expirationTimeUtc: pulumi.Output<string | undefined>;
    /**
     * A `hybridConnectionEndpoint` block as defined below.
     *
     * @deprecated Deprecated in favour of `hybrid_connection_endpoint_id`
     */
    readonly hybridConnectionEndpoint: pulumi.Output<outputs.eventgrid.EventSubscriptionHybridConnectionEndpoint>;
    /**
     * Specifies the id where the Hybrid Connection is located.
     */
    readonly hybridConnectionEndpointId: pulumi.Output<string>;
    /**
     * A list of applicable event types that need to be part of the event subscription.
     */
    readonly includedEventTypes: pulumi.Output<string[]>;
    /**
     * A list of labels to assign to the event subscription.
     */
    readonly labels: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the name of the EventGrid Event Subscription resource. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `retryPolicy` block as defined below.
     */
    readonly retryPolicy: pulumi.Output<outputs.eventgrid.EventSubscriptionRetryPolicy>;
    /**
     * Specifies the scope at which the EventGrid Event Subscription should be created. Changing this forces a new resource to be created.
     */
    readonly scope: pulumi.Output<string>;
    /**
     * Specifies the id where the Service Bus Queue is located.
     */
    readonly serviceBusQueueEndpointId: pulumi.Output<string | undefined>;
    /**
     * Specifies the id where the Service Bus Topic is located.
     */
    readonly serviceBusTopicEndpointId: pulumi.Output<string | undefined>;
    /**
     * A `storageBlobDeadLetterDestination` block as defined below.
     */
    readonly storageBlobDeadLetterDestination: pulumi.Output<outputs.eventgrid.EventSubscriptionStorageBlobDeadLetterDestination | undefined>;
    /**
     * A `storageQueueEndpoint` block as defined below.
     */
    readonly storageQueueEndpoint: pulumi.Output<outputs.eventgrid.EventSubscriptionStorageQueueEndpoint | undefined>;
    /**
     * A `subjectFilter` block as defined below.
     */
    readonly subjectFilter: pulumi.Output<outputs.eventgrid.EventSubscriptionSubjectFilter | undefined>;
    /**
     * (Optional/ **Deprecated) Specifies the name of the topic to associate with the event subscription.
     *
     * @deprecated This field has been updated to readonly field since Apr 25, 2019 so no longer has any affect and will be removed in version 3.0 of the provider.
     */
    readonly topicName: pulumi.Output<string>;
    /**
     * A `webhookEndpoint` block as defined below.
     */
    readonly webhookEndpoint: pulumi.Output<outputs.eventgrid.EventSubscriptionWebhookEndpoint | undefined>;
    /**
     * Create a EventSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EventSubscriptionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering EventSubscription resources.
 */
export interface EventSubscriptionState {
    /**
     * A `advancedFilter` block as defined below.
     */
    advancedFilter?: pulumi.Input<inputs.eventgrid.EventSubscriptionAdvancedFilter>;
    /**
     * Specifies whether advanced filters should be evaluated against an array of values instead of expecting a singular value. Defaults to `false`.
     */
    advancedFilteringOnArraysEnabled?: pulumi.Input<boolean>;
    /**
     * An `azureFunctionEndpoint` block as defined below.
     */
    azureFunctionEndpoint?: pulumi.Input<inputs.eventgrid.EventSubscriptionAzureFunctionEndpoint>;
    /**
     * A `deadLetterIdentity` block as defined below.
     */
    deadLetterIdentity?: pulumi.Input<inputs.eventgrid.EventSubscriptionDeadLetterIdentity>;
    /**
     * A `deliveryIdentity` block as defined below.
     */
    deliveryIdentity?: pulumi.Input<inputs.eventgrid.EventSubscriptionDeliveryIdentity>;
    /**
     * A `deliveryProperty` block as defined below.
     */
    deliveryProperties?: pulumi.Input<pulumi.Input<inputs.eventgrid.EventSubscriptionDeliveryProperty>[]>;
    /**
     * Specifies the event delivery schema for the event subscription. Possible values include: `EventGridSchema`, `CloudEventSchemaV1_0`, `CustomInputSchema`. Defaults to `EventGridSchema`. Changing this forces a new resource to be created.
     */
    eventDeliverySchema?: pulumi.Input<string>;
    /**
     * A `eventhubEndpoint` block as defined below.
     *
     * @deprecated Deprecated in favour of `eventhub_endpoint_id`
     */
    eventhubEndpoint?: pulumi.Input<inputs.eventgrid.EventSubscriptionEventhubEndpoint>;
    /**
     * Specifies the id where the Event Hub is located.
     */
    eventhubEndpointId?: pulumi.Input<string>;
    /**
     * Specifies the expiration time of the event subscription (Datetime Format `RFC 3339`).
     */
    expirationTimeUtc?: pulumi.Input<string>;
    /**
     * A `hybridConnectionEndpoint` block as defined below.
     *
     * @deprecated Deprecated in favour of `hybrid_connection_endpoint_id`
     */
    hybridConnectionEndpoint?: pulumi.Input<inputs.eventgrid.EventSubscriptionHybridConnectionEndpoint>;
    /**
     * Specifies the id where the Hybrid Connection is located.
     */
    hybridConnectionEndpointId?: pulumi.Input<string>;
    /**
     * A list of applicable event types that need to be part of the event subscription.
     */
    includedEventTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of labels to assign to the event subscription.
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the name of the EventGrid Event Subscription resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `retryPolicy` block as defined below.
     */
    retryPolicy?: pulumi.Input<inputs.eventgrid.EventSubscriptionRetryPolicy>;
    /**
     * Specifies the scope at which the EventGrid Event Subscription should be created. Changing this forces a new resource to be created.
     */
    scope?: pulumi.Input<string>;
    /**
     * Specifies the id where the Service Bus Queue is located.
     */
    serviceBusQueueEndpointId?: pulumi.Input<string>;
    /**
     * Specifies the id where the Service Bus Topic is located.
     */
    serviceBusTopicEndpointId?: pulumi.Input<string>;
    /**
     * A `storageBlobDeadLetterDestination` block as defined below.
     */
    storageBlobDeadLetterDestination?: pulumi.Input<inputs.eventgrid.EventSubscriptionStorageBlobDeadLetterDestination>;
    /**
     * A `storageQueueEndpoint` block as defined below.
     */
    storageQueueEndpoint?: pulumi.Input<inputs.eventgrid.EventSubscriptionStorageQueueEndpoint>;
    /**
     * A `subjectFilter` block as defined below.
     */
    subjectFilter?: pulumi.Input<inputs.eventgrid.EventSubscriptionSubjectFilter>;
    /**
     * (Optional/ **Deprecated) Specifies the name of the topic to associate with the event subscription.
     *
     * @deprecated This field has been updated to readonly field since Apr 25, 2019 so no longer has any affect and will be removed in version 3.0 of the provider.
     */
    topicName?: pulumi.Input<string>;
    /**
     * A `webhookEndpoint` block as defined below.
     */
    webhookEndpoint?: pulumi.Input<inputs.eventgrid.EventSubscriptionWebhookEndpoint>;
}
/**
 * The set of arguments for constructing a EventSubscription resource.
 */
export interface EventSubscriptionArgs {
    /**
     * A `advancedFilter` block as defined below.
     */
    advancedFilter?: pulumi.Input<inputs.eventgrid.EventSubscriptionAdvancedFilter>;
    /**
     * Specifies whether advanced filters should be evaluated against an array of values instead of expecting a singular value. Defaults to `false`.
     */
    advancedFilteringOnArraysEnabled?: pulumi.Input<boolean>;
    /**
     * An `azureFunctionEndpoint` block as defined below.
     */
    azureFunctionEndpoint?: pulumi.Input<inputs.eventgrid.EventSubscriptionAzureFunctionEndpoint>;
    /**
     * A `deadLetterIdentity` block as defined below.
     */
    deadLetterIdentity?: pulumi.Input<inputs.eventgrid.EventSubscriptionDeadLetterIdentity>;
    /**
     * A `deliveryIdentity` block as defined below.
     */
    deliveryIdentity?: pulumi.Input<inputs.eventgrid.EventSubscriptionDeliveryIdentity>;
    /**
     * A `deliveryProperty` block as defined below.
     */
    deliveryProperties?: pulumi.Input<pulumi.Input<inputs.eventgrid.EventSubscriptionDeliveryProperty>[]>;
    /**
     * Specifies the event delivery schema for the event subscription. Possible values include: `EventGridSchema`, `CloudEventSchemaV1_0`, `CustomInputSchema`. Defaults to `EventGridSchema`. Changing this forces a new resource to be created.
     */
    eventDeliverySchema?: pulumi.Input<string>;
    /**
     * A `eventhubEndpoint` block as defined below.
     *
     * @deprecated Deprecated in favour of `eventhub_endpoint_id`
     */
    eventhubEndpoint?: pulumi.Input<inputs.eventgrid.EventSubscriptionEventhubEndpoint>;
    /**
     * Specifies the id where the Event Hub is located.
     */
    eventhubEndpointId?: pulumi.Input<string>;
    /**
     * Specifies the expiration time of the event subscription (Datetime Format `RFC 3339`).
     */
    expirationTimeUtc?: pulumi.Input<string>;
    /**
     * A `hybridConnectionEndpoint` block as defined below.
     *
     * @deprecated Deprecated in favour of `hybrid_connection_endpoint_id`
     */
    hybridConnectionEndpoint?: pulumi.Input<inputs.eventgrid.EventSubscriptionHybridConnectionEndpoint>;
    /**
     * Specifies the id where the Hybrid Connection is located.
     */
    hybridConnectionEndpointId?: pulumi.Input<string>;
    /**
     * A list of applicable event types that need to be part of the event subscription.
     */
    includedEventTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of labels to assign to the event subscription.
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the name of the EventGrid Event Subscription resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `retryPolicy` block as defined below.
     */
    retryPolicy?: pulumi.Input<inputs.eventgrid.EventSubscriptionRetryPolicy>;
    /**
     * Specifies the scope at which the EventGrid Event Subscription should be created. Changing this forces a new resource to be created.
     */
    scope: pulumi.Input<string>;
    /**
     * Specifies the id where the Service Bus Queue is located.
     */
    serviceBusQueueEndpointId?: pulumi.Input<string>;
    /**
     * Specifies the id where the Service Bus Topic is located.
     */
    serviceBusTopicEndpointId?: pulumi.Input<string>;
    /**
     * A `storageBlobDeadLetterDestination` block as defined below.
     */
    storageBlobDeadLetterDestination?: pulumi.Input<inputs.eventgrid.EventSubscriptionStorageBlobDeadLetterDestination>;
    /**
     * A `storageQueueEndpoint` block as defined below.
     */
    storageQueueEndpoint?: pulumi.Input<inputs.eventgrid.EventSubscriptionStorageQueueEndpoint>;
    /**
     * A `subjectFilter` block as defined below.
     */
    subjectFilter?: pulumi.Input<inputs.eventgrid.EventSubscriptionSubjectFilter>;
    /**
     * (Optional/ **Deprecated) Specifies the name of the topic to associate with the event subscription.
     *
     * @deprecated This field has been updated to readonly field since Apr 25, 2019 so no longer has any affect and will be removed in version 3.0 of the provider.
     */
    topicName?: pulumi.Input<string>;
    /**
     * A `webhookEndpoint` block as defined below.
     */
    webhookEndpoint?: pulumi.Input<inputs.eventgrid.EventSubscriptionWebhookEndpoint>;
}
