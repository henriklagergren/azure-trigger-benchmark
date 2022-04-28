import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing EventGrid System Topic
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = pulumi.output(azure.eventgrid.getSystemTopic({
 *     name: "eventgrid-system-topic",
 *     resourceGroupName: "example-resources",
 * }));
 * ```
 */
export declare function getSystemTopic(args: GetSystemTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemTopicResult>;
/**
 * A collection of arguments for invoking getSystemTopic.
 */
export interface GetSystemTopicArgs {
    /**
     * The name of the EventGrid System Topic resource.
     */
    name: string;
    /**
     * The name of the resource group in which the EventGrid System Topic exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getSystemTopic.
 */
export interface GetSystemTopicResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * An `identity` block as defined below, which contains the Managed Service Identity information for this Event Grid System Topic.
     */
    readonly identities: outputs.eventgrid.GetSystemTopicIdentity[];
    readonly location: string;
    /**
     * The Metric ARM Resource ID of the Event Grid System Topic.
     */
    readonly metricArmResourceId: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * The ID of the Event Grid System Topic ARM Source.
     */
    readonly sourceArmResourceId: string;
    /**
     * A mapping of tags which are assigned to the Event Grid System Topic.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The Topic Type of the Event Grid System Topic.
     */
    readonly topicType: string;
}
export declare function getSystemTopicOutput(args: GetSystemTopicOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemTopicResult>;
/**
 * A collection of arguments for invoking getSystemTopic.
 */
export interface GetSystemTopicOutputArgs {
    /**
     * The name of the EventGrid System Topic resource.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group in which the EventGrid System Topic exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
