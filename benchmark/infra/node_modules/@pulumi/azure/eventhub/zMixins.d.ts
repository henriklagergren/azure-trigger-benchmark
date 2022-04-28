import * as pulumi from "@pulumi/pulumi";
import { EventHub, EventHubConsumerGroup } from ".";
import * as eventgrid from "../eventgrid";
import * as servicebus from "../servicebus";
import * as appservice from "../appservice";
/**
 * Data that will be passed along in the context object to the EventHubCallback.
 */
export interface EventHubContext extends appservice.Context<appservice.FunctionDefaultResponse> {
    invocationId: string;
    executionContext: {
        invocationId: string;
        functionName: string;
        functionDirectory: string;
    };
    bindings: {
        eventHub: string;
    };
    bindingData: {
        partitionContext: {
            consumerGroupName: string;
            eventHubPath: string;
            partitionId: string;
            owner: string;
            runtimeInformation: {
                partitionId: string;
                lastSequenceNumber: number;
                lastEnqueuedTimeUtc: string;
                retrievalTime: string;
            };
        };
        partitionKey: string;
        offset: number;
        sequenceNumber: number;
        enqueuedTimeUtc: string;
        properties: Record<string, any>;
        systemProperties: Record<string, any>;
        sys: {
            methodName: string;
            utcNow: string;
        };
        invocationId: string;
    };
}
/**
 * Signature of the callback that can receive event hub notifications.
 */
export declare type EventHubCallback = appservice.Callback<EventHubContext, string, appservice.FunctionDefaultResponse>;
export interface GetEventHubFunctionArgs extends appservice.CallbackFunctionArgs<EventHubContext, any, appservice.FunctionDefaultResponse> {
    /**
     * Optional Consumer Group to subscribe the FunctionApp to. If not present, the default consumer group will be used.
     */
    consumerGroup?: EventHubConsumerGroup;
    /**
     * Set to 'many' in order to enable batching. If omitted or set to 'one', single message passed to function.
     */
    cardinality?: pulumi.Input<"many" | "one">;
}
export interface EventHubFunctionArgs extends GetEventHubFunctionArgs {
    /**
     * Event Hub to subscribe the Function to.
     */
    eventHub: EventHub;
}
export interface EventHubSubscriptionArgs extends GetEventHubFunctionArgs, appservice.CallbackFunctionAppArgs<EventHubContext, any, appservice.FunctionDefaultResponse> {
    /**
     * The name of the resource group in which to create the event subscription. [resourceGroup] takes precedence over [resourceGroupName].
     * If none of the two is supplied, the Event Hub's resource group will be used.
     */
    resourceGroupName?: pulumi.Input<string>;
}
declare module "./eventHub" {
    interface EventHub {
        /**
         * Subscribes to events logged to this Event Hub to the handler provided, along
         * with options to control the behavior of the subscription.
         * A dedicated Function App is created behind the scenes with a single Azure Function in it.
         * Use [getEventFunction] if you want to compose multiple Functions into the same App manually.
         */
        onEvent(name: string, args: EventHubCallback | EventHubSubscriptionArgs, opts?: pulumi.ComponentResourceOptions): EventHubSubscription;
        /**
         * Creates a new Function triggered by events in the given Event Hub using the callback provided.
         * [getEventFunction] creates no Azure resources automatically: the returned Function should be used as part of
         * a [MultiCallbackFunctionApp]. Use [onEvent] if you want to create a Function App with a single Function.
         */
        getEventFunction(name: string, args: EventHubCallback | GetEventHubFunctionArgs): EventHubFunction;
    }
}
export declare class EventHubSubscription extends appservice.EventSubscription<EventHubContext, string, appservice.FunctionDefaultResponse> {
    readonly eventHub: EventHub;
    readonly consumerGroup?: EventHubConsumerGroup;
    constructor(name: string, eventHub: EventHub, args: EventHubSubscriptionArgs, opts?: pulumi.ComponentResourceOptions);
}
export declare const DefaultConsumerGroup = "$Default";
/**
 * Azure Function triggered by an Event Hub.
 */
export declare class EventHubFunction extends appservice.Function<EventHubContext, string, appservice.FunctionDefaultResponse> {
    constructor(name: string, args: EventHubFunctionArgs);
}
import { QueueEventSubscription, ServiceBusFunction, TopicEventSubscription } from "../servicebus";
export { QueueEventSubscription, ServiceBusFunction, TopicEventSubscription };
/**
 * @deprecated This type has moved to the [servicebus] module.
 */
export declare type ServiceBusContext = servicebus.ServiceBusContext;
/**
 * @deprecated This type has moved to the [servicebus] module.
 */
export declare type ServiceBusHostExtensions = servicebus.ServiceBusHostExtensions;
/**
 * @deprecated This type has moved to the [servicebus] module.
 */
export declare type ServiceBusHostSettings = servicebus.ServiceBusHostSettings;
/**
 * @deprecated This type has moved to the [servicebus] module.
 */
export declare type ServiceBusCallback = servicebus.ServiceBusCallback;
/**
 * @deprecated This type has moved to the [servicebus] module.
 */
export declare type ServiceBusFunctionArgs = servicebus.ServiceBusFunctionArgs;
/**
 * @deprecated This type has moved to the [servicebus] module.
 */
export declare type QueueEventSubscriptionArgs = servicebus.QueueEventSubscriptionArgs;
declare module "./queue" {
    interface Queue {
        /**
         * @deprecated The [Queue] type has moved to the [servicebus] module.
         */
        onEvent(name: string, args: ServiceBusCallback | QueueEventSubscriptionArgs, opts?: pulumi.ComponentResourceOptions): QueueEventSubscription;
        /**
         * @deprecated The [Queue] type has moved to the [servicebus] module.
         */
        getEventFunction(name: string, args: ServiceBusCallback | appservice.CallbackFunctionArgs<ServiceBusContext, string, appservice.FunctionDefaultResponse>): ServiceBusFunction;
    }
}
/**
 * @deprecated This type has moved to the [servicebus] module.
 */
export declare type GetTopicFunctionArgs = servicebus.GetTopicFunctionArgs;
/**
 * @deprecated This type has moved to the [servicebus] module.
 */
export declare type TopicEventSubscriptionArgs = servicebus.TopicAuthorizationRuleArgs;
declare module "./topic" {
    interface Topic {
        /**
         * @deprecated The [Topic] type has moved to the [servicebus] module.
         */
        onEvent(name: string, args: ServiceBusCallback | TopicEventSubscriptionArgs, opts?: pulumi.ComponentResourceOptions): TopicEventSubscription;
        /**
         * @deprecated The [Topic] type has moved to the [servicebus] module.
         */
        getEventFunction(name: string, args: GetTopicFunctionArgs): ServiceBusFunction;
    }
}
/**
 * @deprecated This type has moved to the [eventgrid] module.
 */
export declare type EventGridEvent<T> = eventgrid.EventGridEvent<T>;
/**
 * @deprecated This type has moved to the [eventgrid] module.
 */
export declare type EventGridContext<T> = eventgrid.EventGridContext<T>;
/**
 * @deprecated This type has moved to the [eventgrid] module.
 */
export declare type EventGridFunctionArgs<T> = eventgrid.EventGridFunctionArgs<T>;
export { EventGridFunction, EventGridCallbackSubscription } from "../eventgrid";
/**
 * @deprecated This type has moved to the [eventgrid] module.
 */
export declare type EventGridCallbackSubscriptionArgs<T> = eventgrid.EventGridCallbackSubscriptionArgs<T>;
/**
 * @deprecated This type has moved to the [eventgrid] module.
 */
export declare type EventGridScope = eventgrid.EventGridScope;
/**
 * @deprecated This type has moved to the [eventgrid] module.
 */
export declare type StorageAccountEventGridCallbackSubscriptionArgs<T> = eventgrid.StorageAccountEventGridCallbackSubscriptionArgs<T>;
/**
 * @deprecated This type has moved to the [eventgrid] module.
 */
export declare type ResourceGroupEventGridCallbackSubscriptionArgs = eventgrid.ResourceGroupEventGridCallbackSubscriptionArgs;
/**
 * Contains hooks to subscribe to different kinds of Event Grid events.
 */
export declare namespace events {
    /**
     * @deprecated This function has moved to the [eventgrid] module.
     */
    const onGridBlobCreated: typeof eventgrid.events.onGridBlobCreated;
    /**
     * @deprecated This function has moved to the [eventgrid] module.
     */
    const onGridBlobDeleted: typeof eventgrid.events.onGridBlobDeleted;
    /**
     * @deprecated This function has moved to the [eventgrid] module.
     */
    const onResourceGroupEvent: typeof eventgrid.events.onResourceGroupEvent;
}
