import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing IoTHub.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.iot.getIotHub({
 *     name: "existing",
 *     resourceGroupName: "existing",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getIotHub(args: GetIotHubArgs, opts?: pulumi.InvokeOptions): Promise<GetIotHubResult>;
/**
 * A collection of arguments for invoking getIotHub.
 */
export interface GetIotHubArgs {
    /**
     * The name of this IoTHub.
     */
    name: string;
    /**
     * The name of the Resource Group where the IoTHub exists.
     */
    resourceGroupName: string;
    /**
     * A mapping of tags which should be assigned to the IoTHub.
     */
    tags?: {
        [key: string]: string;
    };
}
/**
 * A collection of values returned by getIotHub.
 */
export interface GetIotHubResult {
    /**
     * The Hostname of the IoTHub.
     */
    readonly hostname: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly resourceGroupName: string;
    readonly tags?: {
        [key: string]: string;
    };
}
export declare function getIotHubOutput(args: GetIotHubOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIotHubResult>;
/**
 * A collection of arguments for invoking getIotHub.
 */
export interface GetIotHubOutputArgs {
    /**
     * The name of this IoTHub.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the IoTHub exists.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the IoTHub.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
