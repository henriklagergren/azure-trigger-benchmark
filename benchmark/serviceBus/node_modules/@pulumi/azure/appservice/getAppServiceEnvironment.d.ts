import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing App Service Environment.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.appservice.getAppServiceEnvironment({
 *     name: "existing-ase",
 *     resourceGroupName: "existing-rg",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getAppServiceEnvironment(args: GetAppServiceEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAppServiceEnvironmentResult>;
/**
 * A collection of arguments for invoking getAppServiceEnvironment.
 */
export interface GetAppServiceEnvironmentArgs {
    /**
     * The name of this App Service Environment.
     */
    name: string;
    /**
     * The name of the Resource Group where the App Service Environment exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getAppServiceEnvironment.
 */
export interface GetAppServiceEnvironmentResult {
    /**
     * Zero or more `clusterSetting` blocks as defined below.
     */
    readonly clusterSettings: outputs.appservice.GetAppServiceEnvironmentClusterSetting[];
    /**
     * The number of app instances per App Service Environment Front End.
     */
    readonly frontEndScaleFactor: number;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * IP address of internal load balancer of the App Service Environment.
     */
    readonly internalIpAddress: string;
    /**
     * The Azure Region where the App Service Environment exists.
     */
    readonly location: string;
    /**
     * The name of the Cluster Setting.
     */
    readonly name: string;
    /**
     * List of outbound IP addresses of the App Service Environment.
     */
    readonly outboundIpAddresses: string[];
    /**
     * The Pricing Tier (Isolated SKU) of the App Service Environment.
     */
    readonly pricingTier: string;
    readonly resourceGroupName: string;
    /**
     * IP address of service endpoint of the App Service Environment.
     */
    readonly serviceIpAddress: string;
    /**
     * A mapping of tags assigned to the App Service Environment.
     */
    readonly tags: {
        [key: string]: string;
    };
}
export declare function getAppServiceEnvironmentOutput(args: GetAppServiceEnvironmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAppServiceEnvironmentResult>;
/**
 * A collection of arguments for invoking getAppServiceEnvironment.
 */
export interface GetAppServiceEnvironmentOutputArgs {
    /**
     * The name of this App Service Environment.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the App Service Environment exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
