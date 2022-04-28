import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Virtual Network within a DevTest Lab.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleLab = new azure.devtest.Lab("exampleLab", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tags: {
 *         Sydney: "Australia",
 *     },
 * });
 * const exampleVirtualNetwork = new azure.devtest.VirtualNetwork("exampleVirtualNetwork", {
 *     labName: exampleLab.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     subnet: {
 *         usePublicIpAddress: "Allow",
 *         useInVirtualMachineCreation: "Allow",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * DevTest Virtual Networks can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:devtest/virtualNetwork:VirtualNetwork network1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DevTestLab/labs/lab1/virtualnetworks/network1
 * ```
 */
export declare class VirtualNetwork extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualNetworkState, opts?: pulumi.CustomResourceOptions): VirtualNetwork;
    /**
     * Returns true if the given object is an instance of VirtualNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualNetwork;
    /**
     * A description for the Virtual Network.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Dev Test Lab in which the Virtual Network should be created. Changing this forces a new resource to be created.
     */
    readonly labName: pulumi.Output<string>;
    /**
     * Specifies the name of the Dev Test Virtual Network. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `subnet` block as defined below.
     */
    readonly subnet: pulumi.Output<outputs.devtest.VirtualNetworkSubnet>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The unique immutable identifier of the Dev Test Virtual Network.
     */
    readonly uniqueIdentifier: pulumi.Output<string>;
    /**
     * Create a VirtualNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering VirtualNetwork resources.
 */
export interface VirtualNetworkState {
    /**
     * A description for the Virtual Network.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the name of the Dev Test Lab in which the Virtual Network should be created. Changing this forces a new resource to be created.
     */
    labName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Dev Test Virtual Network. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `subnet` block as defined below.
     */
    subnet?: pulumi.Input<inputs.devtest.VirtualNetworkSubnet>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The unique immutable identifier of the Dev Test Virtual Network.
     */
    uniqueIdentifier?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a VirtualNetwork resource.
 */
export interface VirtualNetworkArgs {
    /**
     * A description for the Virtual Network.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the name of the Dev Test Lab in which the Virtual Network should be created. Changing this forces a new resource to be created.
     */
    labName: pulumi.Input<string>;
    /**
     * Specifies the name of the Dev Test Virtual Network. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `subnet` block as defined below.
     */
    subnet?: pulumi.Input<inputs.devtest.VirtualNetworkSubnet>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
