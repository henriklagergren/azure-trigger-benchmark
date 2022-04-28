import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an EventGrid System Topic Event Subscription.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * const exampleQueue = new azure.storage.Queue("exampleQueue", {storageAccountName: exampleAccount.name});
 * const exampleSystemTopic = new azure.eventgrid.SystemTopic("exampleSystemTopic", {
 *     location: "Global",
 *     resourceGroupName: exampleResourceGroup.name,
 *     sourceArmResourceId: exampleResourceGroup.id,
 *     topicType: "Microsoft.Resources.ResourceGroups",
 * });
 * const exampleSystemTopicEventSubscription = new azure.eventgrid.SystemTopicEventSubscription("exampleSystemTopicEventSubscription", {
 *     systemTopic: exampleSystemTopic.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     storageQueueEndpoint: {
 *         storageAccountId: exampleAccount.id,
 *         queueName: exampleQueue.name,
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * EventGrid System Topic Event Subscriptions can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:eventgrid/systemTopicEventSubscription:SystemTopicEventSubscription example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.EventGrid/systemTopics/topic1/eventSubscriptions/subscription1
 * ```
 */
export declare class SystemTopicEventSubscription extends pulumi.CustomResource {
    /**
     * Get an existing SystemTopicEventSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemTopicEventSubscriptionState, opts?: pulumi.CustomResourceOptions): SystemTopicEventSubscription;
    /**
     * Returns true if the given object is an instance of SystemTopicEventSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemTopicEventSubscription;
    /**
     * A `advancedFilter` block as defined below.
     */
    readonly advancedFilter: pulumi.Output<outputs.eventgrid.SystemTopicEventSubscriptionAdvancedFilter | undefined>;
    /**
     * Specifies whether advanced filters should be evaluated against an array of values instead of expecting a singular value. Defaults to `false`.
     */
    readonly advancedFilteringOnArraysEnabled: pulumi.Output<boolean | undefined>;
    /**
     * An `azureFunctionEndpoint` block as defined below.
     */
    readonly azureFunctionEndpoint: pulumi.Output<outputs.eventgrid.SystemTopicEventSubscriptionAzureFunctionEndpoint | undefined>;
    /**
     * A `deadLetterIdentity` block as defined below.
     */
    readonly deadLetterIdentity: pulumi.Output<outputs.eventgrid.SystemTopicEventSubscriptionDeadLetterIdentity | undefined>;
    /**
     * A `deliveryIdentity` block as defined below.
     */
    readonly deliveryIdentity: pulumi.Output<outputs.eventgrid.SystemTopicEventSubscriptionDeliveryIdentity | undefined>;
    /**
     * Specifies the event delivery schema for the event subscription. Possible values include: `EventGridSchema`, `CloudEventSchemaV1_0`, `CustomInputSchema`. Defaults to `EventGridSchema`. Changing this forces a new resource to be created.
     */
    readonly eventDeliverySchema: pulumi.Output<string | undefined>;
    /**
     * Specifies the id where the Event Hub is located.
     */
    readonly eventhubEndpointId: pulumi.Output<string>;
    /**
     * Specifies the expiration time of the event subscription (Datetime Format `RFC 3339`).
     */
    readonly expirationTimeUtc: pulumi.Output<string | undefined>;
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
     * The name which should be used for this Event Subscription. Changing this forces a new Event Subscription to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the System Topic exists. Changing this forces a new Event Subscription to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `retryPolicy` block as defined below.
     */
    readonly retryPolicy: pulumi.Output<outputs.eventgrid.SystemTopicEventSubscriptionRetryPolicy>;
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
    readonly storageBlobDeadLetterDestination: pulumi.Output<outputs.eventgrid.SystemTopicEventSubscriptionStorageBlobDeadLetterDestination | undefined>;
    /**
     * A `storageQueueEndpoint` block as defined below.
     */
    readonly storageQueueEndpoint: pulumi.Output<outputs.eventgrid.SystemTopicEventSubscriptionStorageQueueEndpoint | undefined>;
    /**
     * A `subjectFilter` block as defined below.
     */
    readonly subjectFilter: pulumi.Output<outputs.eventgrid.SystemTopicEventSubscriptionSubjectFilter | undefined>;
    /**
     * The System Topic where the Event Subscription should be created in. Changing this forces a new Event Subscription to be created.
     */
    readonly systemTopic: pulumi.Output<string>;
    /**
     * A `webhookEndpoint` block as defined below.
     */
    readonly webhookEndpoint: pulumi.Output<outputs.eventgrid.SystemTopicEventSubscriptionWebhookEndpoint | undefined>;
    /**
     * Create a SystemTopicEventSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemTopicEventSubscriptionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SystemTopicEventSubscription resources.
 */
export interface SystemTopicEventSubscriptionState {
    /**
     * A `advancedFilter` block as defined below.
     */
    advancedFilter?: pulumi.Input<inputs.eventgrid.SystemTopicEventSubscriptionAdvancedFilter>;
    /**
     * Specifies whether advanced filters should be evaluated against an array of values instead of expecting a singular value. Defaults to `false`.
     */
    advancedFilteringOnArraysEnabled?: pulumi.Input<boolean>;
    /**
     * An `azureFunctionEndpoint` block as defined below.
     */
    azureFunctionEndpoint?: pulumi.Input<inputs.eventgrid.SystemTopicEventSubscriptionAzureFunctionEndpoint>;
    /**
     * A `deadLetterIdentity` block as defined below.
     */
    deadLetterIdentity?: pulumi.Input<inputs.eventgrid.SystemTopicEventSubscriptionDeadLetterIdentity>;
    /**
     * A `deliveryIdentity` block as defined below.
     */
    deliveryIdentity?: pulumi.Input<inputs.eventgrid.SystemTopicEventSubscriptionDeliveryIdentity>;
    /**
     * Specifies the event delivery schema for the event subscription. Possible values include: `EventGridSchema`, `CloudEventSchemaV1_0`, `CustomInputSchema`. Defaults to `EventGridSchema`. Changing this forces a new resource to be created.
     */
    eventDeliverySchema?: pulumi.Input<string>;
    /**
     * Specifies the id where the Event Hub is located.
     */
    eventhubEndpointId?: pulumi.Input<string>;
    /**
     * Specifies the expiration time of the event subscription (Datetime Format `RFC 3339`).
     */
    expirationTimeUtc?: pulumi.Input<string>;
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
     * The name which should be used for this Event Subscription. Changing this forces a new Event Subscription to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the System Topic exists. Changing this forces a new Event Subscription to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `retryPolicy` block as defined below.
     */
    retryPolicy?: pulumi.Input<inputs.eventgrid.SystemTopicEventSubscriptionRetryPolicy>;
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
    storageBlobDeadLetterDestination?: pulumi.Input<inputs.eventgrid.SystemTopicEventSubscriptionStorageBlobDeadLetterDestination>;
    /**
     * A `storageQueueEndpoint` block as defined below.
     */
    storageQueueEndpoint?: pulumi.Input<inputs.eventgrid.SystemTopicEventSubscriptionStorageQueueEndpoint>;
    /**
     * A `subjectFilter` block as defined below.
     */
    subjectFilter?: pulumi.Input<inputs.eventgrid.SystemTopicEventSubscriptionSubjectFilter>;
    /**
     * The System Topic where the Event Subscription should be created in. Changing this forces a new Event Subscription to be created.
     */
    systemTopic?: pulumi.Input<string>;
    /**
     * A `webhookEndpoint` block as defined below.
     */
    webhookEndpoint?: pulumi.Input<inputs.eventgrid.SystemTopicEventSubscriptionWebhookEndpoint>;
}
/**
 * The set of arguments for constructing a SystemTopicEventSubscription resource.
 */
export interface SystemTopicEventSubscriptionArgs {
    /**
     * A `advancedFilter` block as defined below.
     */
    advancedFilter?: pulumi.Input<inputs.eventgrid.SystemTopicEventSubscriptionAdvancedFilter>;
    /**
     * Specifies whether advanced filters should be evaluated against an array of values instead of expecting a singular value. Defaults to `false`.
     */
    advancedFilteringOnArraysEnabled?: pulumi.Input<boolean>;
    /**
     * An `azureFunctionEndpoint` block as defined below.
     */
    azureFunctionEndpoint?: pulumi.Input<inputs.eventgrid.SystemTopicEventSubscriptionAzureFunctionEndpoint>;
    /**
     * A `deadLetterIdentity` block as defined below.
     */
    deadLetterIdentity?: pulumi.Input<inputs.eventgrid.SystemTopicEventSubscriptionDeadLetterIdentity>;
    /**
     * A `deliveryIdentity` block as defined below.
     */
    deliveryIdentity?: pulumi.Input<inputs.eventgrid.SystemTopicEventSubscriptionDeliveryIdentity>;
    /**
     * Specifies the event delivery schema for the event subscription. Possible values include: `EventGridSchema`, `CloudEventSchemaV1_0`, `CustomInputSchema`. Defaults to `EventGridSchema`. Changing this forces a new resource to be created.
     */
    eventDeliverySchema?: pulumi.Input<string>;
    /**
     * Specifies the id where the Event Hub is located.
     */
    eventhubEndpointId?: pulumi.Input<string>;
    /**
     * Specifies the expiration time of the event subscription (Datetime Format `RFC 3339`).
     */
    expirationTimeUtc?: pulumi.Input<string>;
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
     * The name which should be used for this Event Subscription. Changing this forces a new Event Subscription to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the System Topic exists. Changing this forces a new Event Subscription to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `retryPolicy` block as defined below.
     */
    retryPolicy?: pulumi.Input<inputs.eventgrid.SystemTopicEventSubscriptionRetryPolicy>;
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
    storageBlobDeadLetterDestination?: pulumi.Input<inputs.eventgrid.SystemTopicEventSubscriptionStorageBlobDeadLetterDestination>;
    /**
     * A `storageQueueEndpoint` block as defined below.
     */
    storageQueueEndpoint?: pulumi.Input<inputs.eventgrid.SystemTopicEventSubscriptionStorageQueueEndpoint>;
    /**
     * A `subjectFilter` block as defined below.
     */
    subjectFilter?: pulumi.Input<inputs.eventgrid.SystemTopicEventSubscriptionSubjectFilter>;
    /**
     * The System Topic where the Event Subscription should be created in. Changing this forces a new Event Subscription to be created.
     */
    systemTopic: pulumi.Input<string>;
    /**
     * A `webhookEndpoint` block as defined below.
     */
    webhookEndpoint?: pulumi.Input<inputs.eventgrid.SystemTopicEventSubscriptionWebhookEndpoint>;
}
