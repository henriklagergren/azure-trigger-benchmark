import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Maintenance Configuration.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const existing = azure.maintenance.getConfiguration({
 *     name: "example-mc",
 *     resourceGroupName: "example-resources",
 * });
 * export const id = azurerm_maintenance_configuration.existing.id;
 * ```
 */
export declare function getConfiguration(args: GetConfigurationArgs, opts?: pulumi.InvokeOptions): Promise<GetConfigurationResult>;
/**
 * A collection of arguments for invoking getConfiguration.
 */
export interface GetConfigurationArgs {
    /**
     * Specifies the name of the Maintenance Configuration.
     */
    name: string;
    /**
     * Specifies the name of the Resource Group where this Maintenance Configuration exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getConfiguration.
 */
export interface GetConfigurationResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The Azure location where the resource exists.
     */
    readonly location: string;
    readonly name: string;
    /**
     * The properties assigned to the resource.
     */
    readonly properties: {
        [key: string]: string;
    };
    readonly resourceGroupName: string;
    /**
     * The scope of the Maintenance Configuration.
     */
    readonly scope: string;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * The visibility of the Maintenance Configuration.
     */
    readonly visibility: string;
    /**
     * A `window` block as defined below.
     */
    readonly windows: outputs.maintenance.GetConfigurationWindow[];
}
export declare function getConfigurationOutput(args: GetConfigurationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetConfigurationResult>;
/**
 * A collection of arguments for invoking getConfiguration.
 */
export interface GetConfigurationOutputArgs {
    /**
     * Specifies the name of the Maintenance Configuration.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group where this Maintenance Configuration exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
