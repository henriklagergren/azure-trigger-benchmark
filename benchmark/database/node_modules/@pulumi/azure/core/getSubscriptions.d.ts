import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about all the Subscriptions currently available.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const available = azure.core.getSubscriptions({});
 * export const availableSubscriptions = available.then(available => available.subscriptions);
 * export const firstAvailableSubscriptionDisplayName = available.then(available => available.subscriptions?[0]?.displayName);
 * ```
 */
export declare function getSubscriptions(args?: GetSubscriptionsArgs, opts?: pulumi.InvokeOptions): Promise<GetSubscriptionsResult>;
/**
 * A collection of arguments for invoking getSubscriptions.
 */
export interface GetSubscriptionsArgs {
    /**
     * A case-insensitive value which must be contained within the `displayName` field, used to filter the results
     */
    displayNameContains?: string;
    /**
     * A case-insensitive prefix which can be used to filter on the `displayName` field
     */
    displayNamePrefix?: string;
}
/**
 * A collection of values returned by getSubscriptions.
 */
export interface GetSubscriptionsResult {
    readonly displayNameContains?: string;
    readonly displayNamePrefix?: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * One or more `subscription` blocks as defined below.
     */
    readonly subscriptions: outputs.core.GetSubscriptionsSubscription[];
}
export declare function getSubscriptionsOutput(args?: GetSubscriptionsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSubscriptionsResult>;
/**
 * A collection of arguments for invoking getSubscriptions.
 */
export interface GetSubscriptionsOutputArgs {
    /**
     * A case-insensitive value which must be contained within the `displayName` field, used to filter the results
     */
    displayNameContains?: pulumi.Input<string>;
    /**
     * A case-insensitive prefix which can be used to filter on the `displayName` field
     */
    displayNamePrefix?: pulumi.Input<string>;
}
