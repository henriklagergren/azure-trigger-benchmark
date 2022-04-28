import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Healthcare Service
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.healthcare.getService({
 *     name: "example-healthcare_service",
 *     resourceGroupName: "example-resources",
 *     location: "westus2",
 * });
 * export const healthcareServiceId = example.then(example => example.id);
 * ```
 */
export declare function getService(args: GetServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceResult>;
/**
 * A collection of arguments for invoking getService.
 */
export interface GetServiceArgs {
    /**
     * The Azure Region where the Service is located.
     */
    location: string;
    /**
     * Specifies the name of the Healthcare Service.
     */
    name: string;
    /**
     * The name of the Resource Group in which the Healthcare Service exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getService.
 */
export interface GetServiceResult {
    readonly accessPolicyObjectIds: string[];
    /**
     * An `authenticationConfiguration` block as defined below.
     */
    readonly authenticationConfigurations: outputs.healthcare.GetServiceAuthenticationConfiguration[];
    /**
     * A `corsConfiguration` block as defined below.
     */
    readonly corsConfigurations: outputs.healthcare.GetServiceCorsConfiguration[];
    /**
     * The versionless Key Vault Key ID for CMK encryption of the backing database.
     */
    readonly cosmosdbKeyVaultKeyVersionlessId: string;
    /**
     * The provisioned throughput for the backing database.
     */
    readonly cosmosdbThroughput: number;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The type of the service.
     */
    readonly kind: string;
    /**
     * The Azure Region where the Service is located.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: {
        [key: string]: string;
    };
}
export declare function getServiceOutput(args: GetServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetServiceResult>;
/**
 * A collection of arguments for invoking getService.
 */
export interface GetServiceOutputArgs {
    /**
     * The Azure Region where the Service is located.
     */
    location: pulumi.Input<string>;
    /**
     * Specifies the name of the Healthcare Service.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Healthcare Service exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
