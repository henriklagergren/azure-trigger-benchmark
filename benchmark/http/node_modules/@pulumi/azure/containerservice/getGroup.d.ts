import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Container Group instance.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.containerservice.getGroup({
 *     name: "existing",
 *     resourceGroupName: "existing",
 * });
 * export const id = example.then(example => example.id);
 * export const ipAddress = example.then(example => example.ipAddress);
 * export const fqdn = example.then(example => example.fqdn);
 * ```
 */
export declare function getGroup(args: GetGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetGroupResult>;
/**
 * A collection of arguments for invoking getGroup.
 */
export interface GetGroupArgs {
    /**
     * The name of this Container Group instance.
     */
    name: string;
    /**
     * The name of the Resource Group where the Container Group instance exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getGroup.
 */
export interface GetGroupResult {
    /**
     * The FQDN of the Container Group instance derived from `dnsNameLabel`.
     */
    readonly fqdn: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The IP address allocated to the Container Group instance.
     */
    readonly ipAddress: string;
    /**
     * The Azure Region where the Container Group instance exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags assigned to the Container Group instance.
     */
    readonly tags: {
        [key: string]: string;
    };
}
export declare function getGroupOutput(args: GetGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetGroupResult>;
/**
 * A collection of arguments for invoking getGroup.
 */
export interface GetGroupOutputArgs {
    /**
     * The name of this Container Group instance.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Container Group instance exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
