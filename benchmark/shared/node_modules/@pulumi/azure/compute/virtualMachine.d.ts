import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Virtual Machine.
 *
 * ## Disclaimers
 *
 * > **Note:** The `azure.compute.VirtualMachine` resource has been superseded by the `azure.compute.LinuxVirtualMachine` and `azure.compute.WindowsVirtualMachine` resources. The existing `azure.compute.VirtualMachine` resource will continue to be available throughout the 2.x releases however is in a feature-frozen state to maintain compatibility - new functionality will instead be added to the `azure.compute.LinuxVirtualMachine` and `azure.compute.WindowsVirtualMachine` resources.
 *
 * > **Note:** Data Disks can be attached either directly on the `azure.compute.VirtualMachine` resource, or using the `azure.compute.DataDiskAttachment` resource - but the two cannot be used together. If both are used against the same Virtual Machine, spurious changes will occur.
 *
 * ## Example Usage
 * ### From An Azure Platform Image)
 *
 * This example provisions a Virtual Machine with Managed Disks.
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const config = new pulumi.Config();
 * const prefix = config.get("prefix") || "tfvmex";
 * const mainResourceGroup = new azure.core.ResourceGroup("mainResourceGroup", {location: "West Europe"});
 * const mainVirtualNetwork = new azure.network.VirtualNetwork("mainVirtualNetwork", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: mainResourceGroup.location,
 *     resourceGroupName: mainResourceGroup.name,
 * });
 * const internal = new azure.network.Subnet("internal", {
 *     resourceGroupName: mainResourceGroup.name,
 *     virtualNetworkName: mainVirtualNetwork.name,
 *     addressPrefixes: ["10.0.2.0/24"],
 * });
 * const mainNetworkInterface = new azure.network.NetworkInterface("mainNetworkInterface", {
 *     location: mainResourceGroup.location,
 *     resourceGroupName: mainResourceGroup.name,
 *     ipConfigurations: [{
 *         name: "testconfiguration1",
 *         subnetId: internal.id,
 *         privateIpAddressAllocation: "Dynamic",
 *     }],
 * });
 * const mainVirtualMachine = new azure.compute.VirtualMachine("mainVirtualMachine", {
 *     location: mainResourceGroup.location,
 *     resourceGroupName: mainResourceGroup.name,
 *     networkInterfaceIds: [mainNetworkInterface.id],
 *     vmSize: "Standard_DS1_v2",
 *     storageImageReference: {
 *         publisher: "Canonical",
 *         offer: "UbuntuServer",
 *         sku: "16.04-LTS",
 *         version: "latest",
 *     },
 *     storageOsDisk: {
 *         name: "myosdisk1",
 *         caching: "ReadWrite",
 *         createOption: "FromImage",
 *         managedDiskType: "Standard_LRS",
 *     },
 *     osProfile: {
 *         computerName: "hostname",
 *         adminUsername: "testadmin",
 *         adminPassword: "Password1234!",
 *     },
 *     osProfileLinuxConfig: {
 *         disablePasswordAuthentication: false,
 *     },
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Virtual Machines can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:compute/virtualMachine:VirtualMachine example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Compute/virtualMachines/machine1
 * ```
 */
export declare class VirtualMachine extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachine resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualMachineState, opts?: pulumi.CustomResourceOptions): VirtualMachine;
    /**
     * Returns true if the given object is an instance of VirtualMachine.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualMachine;
    /**
     * An `additionalCapabilities` block as defined below.
     */
    readonly additionalCapabilities: pulumi.Output<outputs.compute.VirtualMachineAdditionalCapabilities | undefined>;
    /**
     * The ID of the Availability Set in which the Virtual Machine should exist. Changing this forces a new resource to be created.
     */
    readonly availabilitySetId: pulumi.Output<string>;
    /**
     * A `bootDiagnostics` block as defined below.
     */
    readonly bootDiagnostics: pulumi.Output<outputs.compute.VirtualMachineBootDiagnostics | undefined>;
    /**
     * Should the Data Disks (either the Managed Disks / VHD Blobs) be deleted when the Virtual Machine is destroyed? Defaults to `false`.
     */
    readonly deleteDataDisksOnTermination: pulumi.Output<boolean | undefined>;
    /**
     * Should the OS Disk (either the Managed Disk / VHD Blob) be deleted when the Virtual Machine is destroyed? Defaults to `false`.
     */
    readonly deleteOsDiskOnTermination: pulumi.Output<boolean | undefined>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.compute.VirtualMachineIdentity>;
    /**
     * Specifies the BYOL Type for this Virtual Machine. This is only applicable to Windows Virtual Machines. Possible values are `Windows_Client` and `Windows_Server`.
     */
    readonly licenseType: pulumi.Output<string>;
    /**
     * Specifies the Azure Region where the Virtual Machine exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A list of Network Interface ID's which should be associated with the Virtual Machine.
     */
    readonly networkInterfaceIds: pulumi.Output<string[]>;
    /**
     * An `osProfile` block as defined below. Required when `createOption` in the `storageOsDisk` block is set to `FromImage`.
     */
    readonly osProfile: pulumi.Output<outputs.compute.VirtualMachineOsProfile | undefined>;
    /**
     * An `osProfileLinuxConfig` block as defined below.
     */
    readonly osProfileLinuxConfig: pulumi.Output<outputs.compute.VirtualMachineOsProfileLinuxConfig | undefined>;
    /**
     * One or more `osProfileSecrets` blocks.
     */
    readonly osProfileSecrets: pulumi.Output<outputs.compute.VirtualMachineOsProfileSecret[] | undefined>;
    /**
     * An `osProfileWindowsConfig` block as defined below.
     */
    readonly osProfileWindowsConfig: pulumi.Output<outputs.compute.VirtualMachineOsProfileWindowsConfig | undefined>;
    /**
     * A `plan` block as defined below.
     */
    readonly plan: pulumi.Output<outputs.compute.VirtualMachinePlan | undefined>;
    /**
     * The ID of the Network Interface (which must be attached to the Virtual Machine) which should be the Primary Network Interface for this Virtual Machine.
     */
    readonly primaryNetworkInterfaceId: pulumi.Output<string | undefined>;
    /**
     * The ID of the Proximity Placement Group to which this Virtual Machine should be assigned. Changing this forces a new resource to be created
     */
    readonly proximityPlacementGroupId: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Resource Group in which the Virtual Machine should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * One or more `storageDataDisk` blocks.
     */
    readonly storageDataDisks: pulumi.Output<outputs.compute.VirtualMachineStorageDataDisk[]>;
    /**
     * A `storageImageReference` block as defined below.
     */
    readonly storageImageReference: pulumi.Output<outputs.compute.VirtualMachineStorageImageReference>;
    /**
     * A `storageOsDisk` block as defined below.
     */
    readonly storageOsDisk: pulumi.Output<outputs.compute.VirtualMachineStorageOsDisk>;
    /**
     * A mapping of tags to assign to the Virtual Machine.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the [size of the Virtual Machine](https://docs.microsoft.com/azure/virtual-machines/sizes-general). See also [Azure VM Naming Conventions](https://docs.microsoft.com/azure/virtual-machines/vm-naming-conventions).
     */
    readonly vmSize: pulumi.Output<string>;
    /**
     * A list of a single item of the Availability Zone which the Virtual Machine should be allocated in.
     */
    readonly zones: pulumi.Output<string | undefined>;
    /**
     * Create a VirtualMachine resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering VirtualMachine resources.
 */
export interface VirtualMachineState {
    /**
     * An `additionalCapabilities` block as defined below.
     */
    additionalCapabilities?: pulumi.Input<inputs.compute.VirtualMachineAdditionalCapabilities>;
    /**
     * The ID of the Availability Set in which the Virtual Machine should exist. Changing this forces a new resource to be created.
     */
    availabilitySetId?: pulumi.Input<string>;
    /**
     * A `bootDiagnostics` block as defined below.
     */
    bootDiagnostics?: pulumi.Input<inputs.compute.VirtualMachineBootDiagnostics>;
    /**
     * Should the Data Disks (either the Managed Disks / VHD Blobs) be deleted when the Virtual Machine is destroyed? Defaults to `false`.
     */
    deleteDataDisksOnTermination?: pulumi.Input<boolean>;
    /**
     * Should the OS Disk (either the Managed Disk / VHD Blob) be deleted when the Virtual Machine is destroyed? Defaults to `false`.
     */
    deleteOsDiskOnTermination?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.compute.VirtualMachineIdentity>;
    /**
     * Specifies the BYOL Type for this Virtual Machine. This is only applicable to Windows Virtual Machines. Possible values are `Windows_Client` and `Windows_Server`.
     */
    licenseType?: pulumi.Input<string>;
    /**
     * Specifies the Azure Region where the Virtual Machine exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Virtual Machine. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of Network Interface ID's which should be associated with the Virtual Machine.
     */
    networkInterfaceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An `osProfile` block as defined below. Required when `createOption` in the `storageOsDisk` block is set to `FromImage`.
     */
    osProfile?: pulumi.Input<inputs.compute.VirtualMachineOsProfile>;
    /**
     * An `osProfileLinuxConfig` block as defined below.
     */
    osProfileLinuxConfig?: pulumi.Input<inputs.compute.VirtualMachineOsProfileLinuxConfig>;
    /**
     * One or more `osProfileSecrets` blocks.
     */
    osProfileSecrets?: pulumi.Input<pulumi.Input<inputs.compute.VirtualMachineOsProfileSecret>[]>;
    /**
     * An `osProfileWindowsConfig` block as defined below.
     */
    osProfileWindowsConfig?: pulumi.Input<inputs.compute.VirtualMachineOsProfileWindowsConfig>;
    /**
     * A `plan` block as defined below.
     */
    plan?: pulumi.Input<inputs.compute.VirtualMachinePlan>;
    /**
     * The ID of the Network Interface (which must be attached to the Virtual Machine) which should be the Primary Network Interface for this Virtual Machine.
     */
    primaryNetworkInterfaceId?: pulumi.Input<string>;
    /**
     * The ID of the Proximity Placement Group to which this Virtual Machine should be assigned. Changing this forces a new resource to be created
     */
    proximityPlacementGroupId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group in which the Virtual Machine should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * One or more `storageDataDisk` blocks.
     */
    storageDataDisks?: pulumi.Input<pulumi.Input<inputs.compute.VirtualMachineStorageDataDisk>[]>;
    /**
     * A `storageImageReference` block as defined below.
     */
    storageImageReference?: pulumi.Input<inputs.compute.VirtualMachineStorageImageReference>;
    /**
     * A `storageOsDisk` block as defined below.
     */
    storageOsDisk?: pulumi.Input<inputs.compute.VirtualMachineStorageOsDisk>;
    /**
     * A mapping of tags to assign to the Virtual Machine.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the [size of the Virtual Machine](https://docs.microsoft.com/azure/virtual-machines/sizes-general). See also [Azure VM Naming Conventions](https://docs.microsoft.com/azure/virtual-machines/vm-naming-conventions).
     */
    vmSize?: pulumi.Input<string>;
    /**
     * A list of a single item of the Availability Zone which the Virtual Machine should be allocated in.
     */
    zones?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a VirtualMachine resource.
 */
export interface VirtualMachineArgs {
    /**
     * An `additionalCapabilities` block as defined below.
     */
    additionalCapabilities?: pulumi.Input<inputs.compute.VirtualMachineAdditionalCapabilities>;
    /**
     * The ID of the Availability Set in which the Virtual Machine should exist. Changing this forces a new resource to be created.
     */
    availabilitySetId?: pulumi.Input<string>;
    /**
     * A `bootDiagnostics` block as defined below.
     */
    bootDiagnostics?: pulumi.Input<inputs.compute.VirtualMachineBootDiagnostics>;
    /**
     * Should the Data Disks (either the Managed Disks / VHD Blobs) be deleted when the Virtual Machine is destroyed? Defaults to `false`.
     */
    deleteDataDisksOnTermination?: pulumi.Input<boolean>;
    /**
     * Should the OS Disk (either the Managed Disk / VHD Blob) be deleted when the Virtual Machine is destroyed? Defaults to `false`.
     */
    deleteOsDiskOnTermination?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.compute.VirtualMachineIdentity>;
    /**
     * Specifies the BYOL Type for this Virtual Machine. This is only applicable to Windows Virtual Machines. Possible values are `Windows_Client` and `Windows_Server`.
     */
    licenseType?: pulumi.Input<string>;
    /**
     * Specifies the Azure Region where the Virtual Machine exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Virtual Machine. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of Network Interface ID's which should be associated with the Virtual Machine.
     */
    networkInterfaceIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An `osProfile` block as defined below. Required when `createOption` in the `storageOsDisk` block is set to `FromImage`.
     */
    osProfile?: pulumi.Input<inputs.compute.VirtualMachineOsProfile>;
    /**
     * An `osProfileLinuxConfig` block as defined below.
     */
    osProfileLinuxConfig?: pulumi.Input<inputs.compute.VirtualMachineOsProfileLinuxConfig>;
    /**
     * One or more `osProfileSecrets` blocks.
     */
    osProfileSecrets?: pulumi.Input<pulumi.Input<inputs.compute.VirtualMachineOsProfileSecret>[]>;
    /**
     * An `osProfileWindowsConfig` block as defined below.
     */
    osProfileWindowsConfig?: pulumi.Input<inputs.compute.VirtualMachineOsProfileWindowsConfig>;
    /**
     * A `plan` block as defined below.
     */
    plan?: pulumi.Input<inputs.compute.VirtualMachinePlan>;
    /**
     * The ID of the Network Interface (which must be attached to the Virtual Machine) which should be the Primary Network Interface for this Virtual Machine.
     */
    primaryNetworkInterfaceId?: pulumi.Input<string>;
    /**
     * The ID of the Proximity Placement Group to which this Virtual Machine should be assigned. Changing this forces a new resource to be created
     */
    proximityPlacementGroupId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group in which the Virtual Machine should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * One or more `storageDataDisk` blocks.
     */
    storageDataDisks?: pulumi.Input<pulumi.Input<inputs.compute.VirtualMachineStorageDataDisk>[]>;
    /**
     * A `storageImageReference` block as defined below.
     */
    storageImageReference?: pulumi.Input<inputs.compute.VirtualMachineStorageImageReference>;
    /**
     * A `storageOsDisk` block as defined below.
     */
    storageOsDisk: pulumi.Input<inputs.compute.VirtualMachineStorageOsDisk>;
    /**
     * A mapping of tags to assign to the Virtual Machine.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the [size of the Virtual Machine](https://docs.microsoft.com/azure/virtual-machines/sizes-general). See also [Azure VM Naming Conventions](https://docs.microsoft.com/azure/virtual-machines/vm-naming-conventions).
     */
    vmSize: pulumi.Input<string>;
    /**
     * A list of a single item of the Availability Zone which the Virtual Machine should be allocated in.
     */
    zones?: pulumi.Input<string>;
}
