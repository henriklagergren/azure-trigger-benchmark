import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Virtual Machine Scale Set.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.compute.getVirtualMachineScaleSet({
 *     name: "existing",
 *     resourceGroupName: "existing",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getVirtualMachineScaleSet(args: GetVirtualMachineScaleSetArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineScaleSetResult>;
/**
 * A collection of arguments for invoking getVirtualMachineScaleSet.
 */
export interface GetVirtualMachineScaleSetArgs {
    /**
     * The name of this Virtual Machine Scale Set.
     */
    name: string;
    /**
     * The name of the Resource Group where the Virtual Machine Scale Set exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getVirtualMachineScaleSet.
 */
export interface GetVirtualMachineScaleSetResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * A `identity` block as defined below.
     */
    readonly identities: outputs.compute.GetVirtualMachineScaleSetIdentity[];
    readonly location: string;
    /**
     * The name of the public ip address configuration
     */
    readonly name: string;
    /**
     * A list of `networkInterface` blocks as defined below.
     */
    readonly networkInterfaces: outputs.compute.GetVirtualMachineScaleSetNetworkInterface[];
    readonly resourceGroupName: string;
}
export declare function getVirtualMachineScaleSetOutput(args: GetVirtualMachineScaleSetOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetVirtualMachineScaleSetResult>;
/**
 * A collection of arguments for invoking getVirtualMachineScaleSet.
 */
export interface GetVirtualMachineScaleSetOutputArgs {
    /**
     * The name of this Virtual Machine Scale Set.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Virtual Machine Scale Set exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
