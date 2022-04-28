import * as pulumi from "@pulumi/pulumi";
/**
 * Uses this data source to access information about an existing Virtual Hub.
 *
 * ## Virtual Hub Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.network.getVirtualHub({
 *     name: "example-hub",
 *     resourceGroupName: "example-resources",
 * });
 * export const virtualHubId = example.then(example => example.id);
 * ```
 */
export declare function getVirtualHub(args: GetVirtualHubArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualHubResult>;
/**
 * A collection of arguments for invoking getVirtualHub.
 */
export interface GetVirtualHubArgs {
    /**
     * The name of the Virtual Hub.
     */
    name: string;
    /**
     * The Name of the Resource Group where the Virtual Hub exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getVirtualHub.
 */
export interface GetVirtualHubResult {
    /**
     * The Address Prefix used for this Virtual Hub.
     */
    readonly addressPrefix: string;
    /**
     * The ID of the default Route Table in the Virtual Hub.
     */
    readonly defaultRouteTableId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The Azure Region where the Virtual Hub exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags assigned to the Virtual Hub.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The ID of the Virtual WAN within which the Virtual Hub exists.
     */
    readonly virtualWanId: string;
}
export declare function getVirtualHubOutput(args: GetVirtualHubOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualHubResult>;
/**
 * A collection of arguments for invoking getVirtualHub.
 */
export interface GetVirtualHubOutputArgs {
    /**
     * The name of the Virtual Hub.
     */
    name: pulumi.Input<string>;
    /**
     * The Name of the Resource Group where the Virtual Hub exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
