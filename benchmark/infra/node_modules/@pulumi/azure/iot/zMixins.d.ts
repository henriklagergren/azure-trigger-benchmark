import * as pulumi from "@pulumi/pulumi";
import * as appservice from "../appservice";
import { IoTHub } from "./ioTHub";
import { ConsumerGroup } from "./consumerGroup";
import { EventHubContext, EventHubCallback } from '../eventhub';
export interface GetIoTHubFunctionArgs extends appservice.CallbackFunctionArgs<EventHubContext, any, appservice.FunctionDefaultResponse> {
    /**
     * IoT Hub to subscribe the Function to.
     */
    iotHub: IoTHub;
    /**
     * Optional Consumer Group to subscribe the Function to. If not present, the default consumer group will be used.
     */
    consumerGroup?: ConsumerGroup;
    /**
     * Set to 'many' in order to enable batching. If omitted or set to 'one', single message passed to function.
     */
    cardinality?: pulumi.Input<"many" | "one">;
}
export interface IoTHubFunctionArgs extends GetIoTHubFunctionArgs {
    /**
     * IoT Hub to subscribe the Function to.
     */
    iotHub: IoTHub;
}
export interface IoTHubSubscriptionArgs extends GetIoTHubFunctionArgs, appservice.CallbackFunctionAppArgs<EventHubContext, any, appservice.FunctionDefaultResponse> {
    /**
     * The name of the resource group in which to create the event subscription. [resourceGroup] takes precedence
     * over [resourceGroupName]. If none of the two is supplied, the IoT Hub's resource group will be used.
     */
    resourceGroupName?: pulumi.Input<string>;
}
declare module "./ioTHub" {
    interface IoTHub {
        /**
         * Subscribes to events logged to this Event Hub to the handler provided, along
         * with options to control the behavior of the subscription.
         */
        onEvent(name: string, args: EventHubCallback | IoTHubSubscriptionArgs, opts?: pulumi.ComponentResourceOptions): IoTHubEventSubscription;
        /**
         * Creates a new Function triggered by events in the given IoT Hub using the callback provided.
         * The Function should be used as part of a [MultiCallbackFunctionApp].
         */
        getEventFunction(name: string, args: EventHubCallback | GetIoTHubFunctionArgs): IoTHubFunction;
    }
}
export declare class IoTHubEventSubscription extends appservice.EventSubscription<EventHubContext, string, appservice.FunctionDefaultResponse> {
    readonly iotHub: IoTHub;
    constructor(name: string, iotHub: IoTHub, args: IoTHubSubscriptionArgs, opts?: pulumi.ComponentResourceOptions);
}
/**
 * Azure Function triggered by an IoT Hub.
 */
export declare class IoTHubFunction extends appservice.Function<EventHubContext, string, appservice.FunctionDefaultResponse> {
    constructor(name: string, args: IoTHubFunctionArgs);
}
