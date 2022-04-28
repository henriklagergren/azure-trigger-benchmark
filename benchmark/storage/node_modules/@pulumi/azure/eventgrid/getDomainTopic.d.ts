import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing EventGrid Domain Topic
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = pulumi.output(azure.eventgrid.getDomainTopic({
 *     name: "my-eventgrid-domain-topic",
 *     resourceGroupName: "example-resources",
 * }));
 * ```
 */
export declare function getDomainTopic(args: GetDomainTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainTopicResult>;
/**
 * A collection of arguments for invoking getDomainTopic.
 */
export interface GetDomainTopicArgs {
    /**
     * The name of the EventGrid Domain Topic domain.
     */
    domainName: string;
    /**
     * The name of the EventGrid Domain Topic resource.
     */
    name: string;
    /**
     * The name of the resource group in which the EventGrid Domain Topic exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getDomainTopic.
 */
export interface GetDomainTopicResult {
    /**
     * The EventGrid Domain Topic Domain name.
     */
    readonly domainName: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceGroupName: string;
}
export declare function getDomainTopicOutput(args: GetDomainTopicOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDomainTopicResult>;
/**
 * A collection of arguments for invoking getDomainTopic.
 */
export interface GetDomainTopicOutputArgs {
    /**
     * The name of the EventGrid Domain Topic domain.
     */
    domainName: pulumi.Input<string>;
    /**
     * The name of the EventGrid Domain Topic resource.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group in which the EventGrid Domain Topic exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
