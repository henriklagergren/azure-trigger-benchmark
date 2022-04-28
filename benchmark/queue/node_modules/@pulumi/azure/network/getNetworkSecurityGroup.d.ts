import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Network Security Group.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.network.getNetworkSecurityGroup({
 *     name: "example",
 *     resourceGroupName: azurerm_resource_group.example.name,
 * });
 * export const location = example.then(example => example.location);
 * ```
 */
export declare function getNetworkSecurityGroup(args: GetNetworkSecurityGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkSecurityGroupResult>;
/**
 * A collection of arguments for invoking getNetworkSecurityGroup.
 */
export interface GetNetworkSecurityGroupArgs {
    /**
     * Specifies the Name of the Network Security Group.
     */
    name: string;
    /**
     * Specifies the Name of the Resource Group within which the Network Security Group exists
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getNetworkSecurityGroup.
 */
export interface GetNetworkSecurityGroupResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The supported Azure location where the resource exists.
     */
    readonly location: string;
    /**
     * The name of the security rule.
     */
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * One or more `securityRule` blocks as defined below.
     */
    readonly securityRules: outputs.network.GetNetworkSecurityGroupSecurityRule[];
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: {
        [key: string]: string;
    };
}
export declare function getNetworkSecurityGroupOutput(args: GetNetworkSecurityGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNetworkSecurityGroupResult>;
/**
 * A collection of arguments for invoking getNetworkSecurityGroup.
 */
export interface GetNetworkSecurityGroupOutputArgs {
    /**
     * Specifies the Name of the Network Security Group.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the Name of the Resource Group within which the Network Security Group exists
     */
    resourceGroupName: pulumi.Input<string>;
}
