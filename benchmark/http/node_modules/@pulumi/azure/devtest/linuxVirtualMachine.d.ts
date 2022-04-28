import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Linux Virtual Machine within a Dev Test Lab.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
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
 * const exampleLinuxVirtualMachine = new azure.devtest.LinuxVirtualMachine("exampleLinuxVirtualMachine", {
 *     labName: exampleLab.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     size: "Standard_DS2",
 *     username: "exampleuser99",
 *     sshKey: fs.readFileSync("~/.ssh/id_rsa.pub"),
 *     labVirtualNetworkId: exampleVirtualNetwork.id,
 *     labSubnetName: exampleVirtualNetwork.subnet.apply(subnet => subnet.name),
 *     storageType: "Premium",
 *     notes: "Some notes about this Virtual Machine.",
 *     galleryImageReference: {
 *         offer: "UbuntuServer",
 *         publisher: "Canonical",
 *         sku: "18.04-LTS",
 *         version: "latest",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Dev Test Linux Virtual Machines can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:devtest/linuxVirtualMachine:LinuxVirtualMachine machine1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DevTestLab/labs/lab1/virtualmachines/machine1
 * ```
 */
export declare class LinuxVirtualMachine extends pulumi.CustomResource {
    /**
     * Get an existing LinuxVirtualMachine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LinuxVirtualMachineState, opts?: pulumi.CustomResourceOptions): LinuxVirtualMachine;
    /**
     * Returns true if the given object is an instance of LinuxVirtualMachine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LinuxVirtualMachine;
    /**
     * Can this Virtual Machine be claimed by users? Defaults to `true`.
     */
    readonly allowClaim: pulumi.Output<boolean | undefined>;
    /**
     * Should the Virtual Machine be created without a Public IP Address? Changing this forces a new resource to be created.
     */
    readonly disallowPublicIpAddress: pulumi.Output<boolean | undefined>;
    /**
     * The FQDN of the Virtual Machine.
     */
    readonly fqdn: pulumi.Output<string>;
    /**
     * A `galleryImageReference` block as defined below.
     */
    readonly galleryImageReference: pulumi.Output<outputs.devtest.LinuxVirtualMachineGalleryImageReference>;
    /**
     * One or more `inboundNatRule` blocks as defined below. Changing this forces a new resource to be created.
     */
    readonly inboundNatRules: pulumi.Output<outputs.devtest.LinuxVirtualMachineInboundNatRule[] | undefined>;
    /**
     * Specifies the name of the Dev Test Lab in which the Virtual Machine should be created. Changing this forces a new resource to be created.
     */
    readonly labName: pulumi.Output<string>;
    /**
     * The name of a Subnet within the Dev Test Virtual Network where this machine should exist. Changing this forces a new resource to be created.
     */
    readonly labSubnetName: pulumi.Output<string>;
    /**
     * The ID of the Dev Test Virtual Network where this Virtual Machine should be created. Changing this forces a new resource to be created.
     */
    readonly labVirtualNetworkId: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the Dev Test Lab exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Dev Test Machine. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Any notes about the Virtual Machine.
     */
    readonly notes: pulumi.Output<string | undefined>;
    /**
     * The Password associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Machine Size to use for this Virtual Machine, such as `Standard_F2`. Changing this forces a new resource to be created.
     */
    readonly size: pulumi.Output<string>;
    /**
     * The SSH Key associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly sshKey: pulumi.Output<string | undefined>;
    /**
     * The type of Storage to use on this Virtual Machine. Possible values are `Standard` and `Premium`.
     */
    readonly storageType: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The unique immutable identifier of the Virtual Machine.
     */
    readonly uniqueIdentifier: pulumi.Output<string>;
    /**
     * The Username associated with the local administrator on this Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly username: pulumi.Output<string>;
    /**
     * Create a LinuxVirtualMachine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinuxVirtualMachineArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LinuxVirtualMachine resources.
 */
export interface LinuxVirtualMachineState {
    /**
     * Can this Virtual Machine be claimed by users? Defaults to `true`.
     */
    allowClaim?: pulumi.Input<boolean>;
    /**
     * Should the Virtual Machine be created without a Public IP Address? Changing this forces a new resource to be created.
     */
    disallowPublicIpAddress?: pulumi.Input<boolean>;
    /**
     * The FQDN of the Virtual Machine.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * A `galleryImageReference` block as defined below.
     */
    galleryImageReference?: pulumi.Input<inputs.devtest.LinuxVirtualMachineGalleryImageReference>;
    /**
     * One or more `inboundNatRule` blocks as defined below. Changing this forces a new resource to be created.
     */
    inboundNatRules?: pulumi.Input<pulumi.Input<inputs.devtest.LinuxVirtualMachineInboundNatRule>[]>;
    /**
     * Specifies the name of the Dev Test Lab in which the Virtual Machine should be created. Changing this forces a new resource to be created.
     */
    labName?: pulumi.Input<string>;
    /**
     * The name of a Subnet within the Dev Test Virtual Network where this machine should exist. Changing this forces a new resource to be created.
     */
    labSubnetName?: pulumi.Input<string>;
    /**
     * The ID of the Dev Test Virtual Network where this Virtual Machine should be created. Changing this forces a new resource to be created.
     */
    labVirtualNetworkId?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the Dev Test Lab exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Dev Test Machine. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Any notes about the Virtual Machine.
     */
    notes?: pulumi.Input<string>;
    /**
     * The Password associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Machine Size to use for this Virtual Machine, such as `Standard_F2`. Changing this forces a new resource to be created.
     */
    size?: pulumi.Input<string>;
    /**
     * The SSH Key associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
     */
    sshKey?: pulumi.Input<string>;
    /**
     * The type of Storage to use on this Virtual Machine. Possible values are `Standard` and `Premium`.
     */
    storageType?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The unique immutable identifier of the Virtual Machine.
     */
    uniqueIdentifier?: pulumi.Input<string>;
    /**
     * The Username associated with the local administrator on this Virtual Machine. Changing this forces a new resource to be created.
     */
    username?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a LinuxVirtualMachine resource.
 */
export interface LinuxVirtualMachineArgs {
    /**
     * Can this Virtual Machine be claimed by users? Defaults to `true`.
     */
    allowClaim?: pulumi.Input<boolean>;
    /**
     * Should the Virtual Machine be created without a Public IP Address? Changing this forces a new resource to be created.
     */
    disallowPublicIpAddress?: pulumi.Input<boolean>;
    /**
     * A `galleryImageReference` block as defined below.
     */
    galleryImageReference: pulumi.Input<inputs.devtest.LinuxVirtualMachineGalleryImageReference>;
    /**
     * One or more `inboundNatRule` blocks as defined below. Changing this forces a new resource to be created.
     */
    inboundNatRules?: pulumi.Input<pulumi.Input<inputs.devtest.LinuxVirtualMachineInboundNatRule>[]>;
    /**
     * Specifies the name of the Dev Test Lab in which the Virtual Machine should be created. Changing this forces a new resource to be created.
     */
    labName: pulumi.Input<string>;
    /**
     * The name of a Subnet within the Dev Test Virtual Network where this machine should exist. Changing this forces a new resource to be created.
     */
    labSubnetName: pulumi.Input<string>;
    /**
     * The ID of the Dev Test Virtual Network where this Virtual Machine should be created. Changing this forces a new resource to be created.
     */
    labVirtualNetworkId: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the Dev Test Lab exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Dev Test Machine. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Any notes about the Virtual Machine.
     */
    notes?: pulumi.Input<string>;
    /**
     * The Password associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Dev Test Lab resource exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Machine Size to use for this Virtual Machine, such as `Standard_F2`. Changing this forces a new resource to be created.
     */
    size: pulumi.Input<string>;
    /**
     * The SSH Key associated with the `username` used to login to this Virtual Machine. Changing this forces a new resource to be created.
     */
    sshKey?: pulumi.Input<string>;
    /**
     * The type of Storage to use on this Virtual Machine. Possible values are `Standard` and `Premium`.
     */
    storageType: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The Username associated with the local administrator on this Virtual Machine. Changing this forces a new resource to be created.
     */
    username: pulumi.Input<string>;
}
