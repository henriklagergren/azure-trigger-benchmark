import * as pulumi from "@pulumi/pulumi";
import { Queue, Subscription, Topic } from ".";
import * as appservice from "../appservice";
/**
 * Data that will be passed along in the context object to the ServiceBusCallback.
 */
export interface ServiceBusContext extends appservice.Context<appservice.FunctionDefaultResponse> {
    invocationId: string;
    executionContext: {
        invocationId: string;
        functionName: string;
        functionDirectory: string;
    };
    bindings: {
        message: string;
    };
    bindingData: {
        deadLetterSource: any;
        messageId: string;
        contentType: string;
        replyTo: any;
        to: any;
        label: any;
        correlationId: any;
        properties: Record<string, any>;
        message: string;
        sys: {
            methodName: string;
            utcNow: string;
        };
        invocationId: string;
    };
}
/**
 * Host settings specific to the Service Bus Queue/Topic/Subscription plugin.
 *
 * For more details see https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-service-bus#host-json
 */
export interface ServiceBusHostExtensions extends appservice.HostSettings {
    /** The default PrefetchCount that will be used by the underlying MessageReceiver. */
    prefetchCount?: number;
    messageHandlerOptions?: {
        /** Whether the trigger should immediately mark as complete (autocomplete) or wait for processing to call complete. */
        autoComplete?: boolean;
        /** The maximum number of concurrent calls to the callback that the message pump should initiate.
         * By default, the Functions runtime processes multiple messages concurrently. To direct the runtime to process only
         * a single queue or topic message at a time, set maxConcurrentCalls to 1.
         */
        maxConcurrentCalls?: number;
        /** The maximum duration within which the message lock will be renewed automatically. */
        maxAutoRenewDuration?: string;
    };
}
export interface ServiceBusHostSettings extends appservice.HostSettings {
    extensions?: {
        serviceBus: ServiceBusHostExtensions;
    };
}
/**
 * Signature of the callback that can receive queue and topic notifications.
 */
export declare type ServiceBusCallback = appservice.Callback<ServiceBusContext, string, appservice.FunctionDefaultResponse>;
export interface ServiceBusFunctionArgs extends appservice.CallbackFunctionArgs<ServiceBusContext, string, appservice.FunctionDefaultResponse> {
    /**
     * The ServiceBus Queue to subscribe to.
     */
    queue?: Queue;
    /**
     * The ServiceBus Topic to subscribe to.
     */
    topic?: Topic;
    /**
     * The ServiceBus Subscription to subscribe the Function to.
     */
    subscription?: Subscription;
}
export interface QueueEventSubscriptionArgs extends appservice.CallbackFunctionAppArgs<ServiceBusContext, string, appservice.FunctionDefaultResponse> {
    /**
     * The name of the resource group in which to create the event subscription. [resourceGroup] takes precedence over [resourceGroupName].
     * If none of the two is supplied, the Queue's resource group will be used.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Host settings specific to the Service Bus Topic/Subscription plugin. These values can be provided here, or defaults will
     * be used in their place.
     */
    hostSettings?: ServiceBusHostSettings;
}
declare module "./queue" {
    interface Queue {
        /**
         * Creates a new subscription to events fired from this Queue to the handler provided, along
         * with options to control the behavior of the subscription.
         * A dedicated Function App is created behind the scenes with a single Azure Function in it.
         * Use [getEventFunction] if you want to compose multiple Functions into the same App manually.
         */
        onEvent(name: string, args: ServiceBusCallback | QueueEventSubscriptionArgs, opts?: pulumi.ComponentResourceOptions): QueueEventSubscription;
        /**
         * Creates a new Function triggered by messages in the given Queue using the callback provided.
         * [getEventFunction] creates no Azure resources automatically: the returned Function should be used as part of
         * a [MultiCallbackFunctionApp]. Use [onEvent] if you want to create a Function App with a single Function.
         */
        getEventFunction(name: string, args: ServiceBusCallback | appservice.CallbackFunctionArgs<ServiceBusContext, string, appservice.FunctionDefaultResponse>): ServiceBusFunction;
    }
}
export declare class QueueEventSubscription extends appservice.EventSubscription<ServiceBusContext, string, appservice.FunctionDefaultResponse> {
    readonly queue: Queue;
    constructor(name: string, queue: Queue, args: QueueEventSubscriptionArgs, opts?: pulumi.ComponentResourceOptions);
}
export interface GetTopicFunctionArgs extends appservice.CallbackFunctionArgs<ServiceBusContext, string, appservice.FunctionDefaultResponse> {
    /**
     * The ServiceBus Subscription to subscribe the Function to.
     */
    subscription?: Subscription;
}
export interface TopicEventSubscriptionArgs extends GetTopicFunctionArgs, QueueEventSubscriptionArgs {
    /**
     * The maximum number of deliveries.  Will default to 10 if not specified.
     */
    maxDeliveryCount?: pulumi.Input<number>;
}
declare module "./topic" {
    interface Topic {
        /**
         * Creates a new subscription to events fired from this Topic to the handler provided, along
         * with options to control the behavior of the subscription.
         * A dedicated Function App is created behind the scenes with a single Azure Function in it.
         * Use [getEventFunction] if you want to compose multiple Functions into the same App manually.
         */
        onEvent(name: string, args: ServiceBusCallback | TopicEventSubscriptionArgs, opts?: pulumi.ComponentResourceOptions): TopicEventSubscription;
        /**
         * Creates a new Function triggered by messages in the given Topic using the callback provided.
         * [getEventFunction] creates no Azure resources automatically: the returned Function should be used as part of
         * a [MultiCallbackFunctionApp]. Use [onEvent] if you want to create a Function App with a single Function.
         */
        getEventFunction(name: string, args: GetTopicFunctionArgs): ServiceBusFunction;
    }
}
export declare class TopicEventSubscription extends appservice.EventSubscription<ServiceBusContext, string, appservice.FunctionDefaultResponse> {
    readonly topic: Topic;
    readonly subscription: Subscription;
    constructor(name: string, topic: Topic, args: TopicEventSubscriptionArgs, opts?: pulumi.ComponentResourceOptions);
}
/**
 * Azure Function triggered by a ServiceBus Topic.
 */
export declare class ServiceBusFunction extends appservice.Function<ServiceBusContext, string, appservice.FunctionDefaultResponse> {
    constructor(name: string, args: ServiceBusFunctionArgs);
}
