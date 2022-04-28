import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Notification Hub within a Notification Hub Namespace.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.notificationhub.getHub({
 *     name: "notification-hub",
 *     namespaceName: "namespace-name",
 *     resourceGroupName: "resource-group-name",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getHub(args: GetHubArgs, opts?: pulumi.InvokeOptions): Promise<GetHubResult>;
/**
 * A collection of arguments for invoking getHub.
 */
export interface GetHubArgs {
    /**
     * Specifies the Name of the Notification Hub.
     */
    name: string;
    /**
     * Specifies the Name of the Notification Hub Namespace which contains the Notification Hub.
     */
    namespaceName: string;
    /**
     * Specifies the Name of the Resource Group within which the Notification Hub exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getHub.
 */
export interface GetHubResult {
    /**
     * A `apnsCredential` block as defined below.
     */
    readonly apnsCredentials: outputs.notificationhub.GetHubApnsCredential[];
    /**
     * A `gcmCredential` block as defined below.
     */
    readonly gcmCredentials: outputs.notificationhub.GetHubGcmCredential[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The Azure Region in which this Notification Hub exists.
     */
    readonly location: string;
    readonly name: string;
    readonly namespaceName: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: {
        [key: string]: string;
    };
}
export declare function getHubOutput(args: GetHubOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetHubResult>;
/**
 * A collection of arguments for invoking getHub.
 */
export interface GetHubOutputArgs {
    /**
     * Specifies the Name of the Notification Hub.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the Name of the Notification Hub Namespace which contains the Notification Hub.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Specifies the Name of the Resource Group within which the Notification Hub exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
