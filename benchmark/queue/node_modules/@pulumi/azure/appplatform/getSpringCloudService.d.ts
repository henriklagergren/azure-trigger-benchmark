import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Spring Cloud Service.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.appplatform.getSpringCloudService({
 *     name: azurerm_spring_cloud_service.example.name,
 *     resourceGroupName: azurerm_spring_cloud_service.example.resource_group_name,
 * });
 * export const springCloudServiceId = example.then(example => example.id);
 * ```
 */
export declare function getSpringCloudService(args: GetSpringCloudServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetSpringCloudServiceResult>;
/**
 * A collection of arguments for invoking getSpringCloudService.
 */
export interface GetSpringCloudServiceArgs {
    /**
     * Specifies The name of the Spring Cloud Service resource.
     */
    name: string;
    /**
     * Specifies the name of the Resource Group where the Spring Cloud Service exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getSpringCloudService.
 */
export interface GetSpringCloudServiceResult {
    /**
     * A `configServerGitSetting` block as defined below.
     */
    readonly configServerGitSettings: outputs.appplatform.GetSpringCloudServiceConfigServerGitSetting[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The location of Spring Cloud Service.
     */
    readonly location: string;
    /**
     * The name to identify on the Git repository.
     */
    readonly name: string;
    /**
     * A list of the outbound Public IP Addresses used by this Spring Cloud Service.
     */
    readonly outboundPublicIpAddresses: string[];
    /**
     * A list of `requiredNetworkTrafficRules` blocks as defined below.
     */
    readonly requiredNetworkTrafficRules: outputs.appplatform.GetSpringCloudServiceRequiredNetworkTrafficRule[];
    readonly resourceGroupName: string;
    /**
     * A mapping of tags assigned to Spring Cloud Service.
     */
    readonly tags: {
        [key: string]: string;
    };
}
export declare function getSpringCloudServiceOutput(args: GetSpringCloudServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSpringCloudServiceResult>;
/**
 * A collection of arguments for invoking getSpringCloudService.
 */
export interface GetSpringCloudServiceOutputArgs {
    /**
     * Specifies The name of the Spring Cloud Service resource.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group where the Spring Cloud Service exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
