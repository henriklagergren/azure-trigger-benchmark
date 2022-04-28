import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Linux Virtual Machine Scale Set.
 *
 * ## Disclaimers
 *
 * > **NOTE:** All arguments including the administrator login and password will be stored in the raw state as plain-text. [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
 *
 * > **NOTE:** This provider will automatically update & reimage the nodes in the Scale Set (if Required) during an Update - this behaviour can be configured using the `features` setting within the Provider block.
 *
 * ## Example Usage
 *
 * This example provisions a basic Linux Virtual Machine Scale Set on an internal network.
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     addressSpaces: ["10.0.0.0/16"],
 * });
 * const internal = new azure.network.Subnet("internal", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.0.2.0/24"],
 * });
 * const exampleLinuxVirtualMachineScaleSet = new azure.compute.LinuxVirtualMachineScaleSet("exampleLinuxVirtualMachineScaleSet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: "Standard_F2",
 *     instances: 1,
 *     adminUsername: "adminuser",
 *     adminSshKeys: [{
 *         username: "adminuser",
 *         publicKey: fs.readFileSync("~/.ssh/id_rsa.pub"),
 *     }],
 *     sourceImageReference: {
 *         publisher: "Canonical",
 *         offer: "UbuntuServer",
 *         sku: "16.04-LTS",
 *         version: "latest",
 *     },
 *     osDisk: {
 *         storageAccountType: "Standard_LRS",
 *         caching: "ReadWrite",
 *     },
 *     networkInterfaces: [{
 *         name: "example",
 *         primary: true,
 *         ipConfigurations: [{
 *             name: "internal",
 *             primary: true,
 *             subnetId: internal.id,
 *         }],
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Linux Virtual Machine Scale Sets can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:compute/linuxVirtualMachineScaleSet:LinuxVirtualMachineScaleSet example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Compute/virtualMachineScaleSets/scaleset1
 * ```
 */
export declare class LinuxVirtualMachineScaleSet extends pulumi.CustomResource {
    /**
     * Get an existing LinuxVirtualMachineScaleSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LinuxVirtualMachineScaleSetState, opts?: pulumi.CustomResourceOptions): LinuxVirtualMachineScaleSet;
    /**
     * Returns true if the given object is an instance of LinuxVirtualMachineScaleSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LinuxVirtualMachineScaleSet;
    /**
     * A `additionalCapabilities` block as defined below.
     */
    readonly additionalCapabilities: pulumi.Output<outputs.compute.LinuxVirtualMachineScaleSetAdditionalCapabilities | undefined>;
    /**
     * The Password which should be used for the local-administrator on this Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly adminPassword: pulumi.Output<string | undefined>;
    /**
     * One or more `adminSshKey` blocks as defined below.
     */
    readonly adminSshKeys: pulumi.Output<outputs.compute.LinuxVirtualMachineScaleSetAdminSshKey[] | undefined>;
    /**
     * The username of the local administrator on each Virtual Machine Scale Set instance. Changing this forces a new resource to be created.
     */
    readonly adminUsername: pulumi.Output<string>;
    /**
     * A `automaticInstanceRepair` block as defined below. To enable the automatic instance repair, this Virtual Machine Scale Set must have a valid `healthProbeId` or an [Application Health Extension](https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-health-extension).
     */
    readonly automaticInstanceRepair: pulumi.Output<outputs.compute.LinuxVirtualMachineScaleSetAutomaticInstanceRepair>;
    /**
     * A `automaticOsUpgradePolicy` block as defined below. This can only be specified when `upgradeMode` is set to `Automatic`.
     */
    readonly automaticOsUpgradePolicy: pulumi.Output<outputs.compute.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy | undefined>;
    /**
     * A `bootDiagnostics` block as defined below.
     */
    readonly bootDiagnostics: pulumi.Output<outputs.compute.LinuxVirtualMachineScaleSetBootDiagnostics | undefined>;
    /**
     * The prefix which should be used for the name of the Virtual Machines in this Scale Set. If unspecified this defaults to the value for the `name` field. If the value of the `name` field is not a valid `computerNamePrefix`, then you must specify `computerNamePrefix`.
     */
    readonly computerNamePrefix: pulumi.Output<string>;
    /**
     * The Base64-Encoded Custom Data which should be used for this Virtual Machine Scale Set.
     */
    readonly customData: pulumi.Output<string | undefined>;
    /**
     * One or more `dataDisk` blocks as defined below.
     */
    readonly dataDisks: pulumi.Output<outputs.compute.LinuxVirtualMachineScaleSetDataDisk[] | undefined>;
    /**
     * Should Password Authentication be disabled on this Virtual Machine Scale Set? Defaults to `true`.
     */
    readonly disablePasswordAuthentication: pulumi.Output<boolean | undefined>;
    /**
     * Should Virtual Machine Extensions be run on Overprovisioned Virtual Machines in the Scale Set? Defaults to `false`.
     */
    readonly doNotRunExtensionsOnOverprovisionedMachines: pulumi.Output<boolean | undefined>;
    /**
     * Should all of the disks (including the temp disk) attached to this Virtual Machine be encrypted by enabling Encryption at Host?
     */
    readonly encryptionAtHostEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The Policy which should be used Virtual Machines are Evicted from the Scale Set. Changing this forces a new resource to be created.
     */
    readonly evictionPolicy: pulumi.Output<string | undefined>;
    /**
     * One or more `extension` blocks as defined below
     */
    readonly extensions: pulumi.Output<outputs.compute.LinuxVirtualMachineScaleSetExtension[]>;
    /**
     * Specifies the duration allocated for all extensions to start. The time duration should be between `15` minutes and `120` minutes (inclusive) and should be specified in ISO 8601 format. Defaults to `90` minutes (`PT1H30M`).
     */
    readonly extensionsTimeBudget: pulumi.Output<string | undefined>;
    /**
     * The ID of a Load Balancer Probe which should be used to determine the health of an instance. This is Required and can only be specified when `upgradeMode` is set to `Automatic` or `Rolling`.
     */
    readonly healthProbeId: pulumi.Output<string | undefined>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.compute.LinuxVirtualMachineScaleSetIdentity | undefined>;
    /**
     * The number of Virtual Machines in the Scale Set.
     */
    readonly instances: pulumi.Output<number>;
    /**
     * The Azure location where the Linux Virtual Machine Scale Set should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The maximum price you're willing to pay for each Virtual Machine in this Scale Set, in US Dollars; which must be greater than the current spot price. If this bid price falls below the current spot price the Virtual Machines in the Scale Set will be evicted using the `evictionPolicy`. Defaults to `-1`, which means that each Virtual Machine in this Scale Set should not be evicted for price reasons.
     */
    readonly maxBidPrice: pulumi.Output<number | undefined>;
    /**
     * The name of the Linux Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * One or more `networkInterface` blocks as defined below.
     */
    readonly networkInterfaces: pulumi.Output<outputs.compute.LinuxVirtualMachineScaleSetNetworkInterface[]>;
    /**
     * An `osDisk` block as defined below.
     */
    readonly osDisk: pulumi.Output<outputs.compute.LinuxVirtualMachineScaleSetOsDisk>;
    /**
     * Should Azure over-provision Virtual Machines in this Scale Set? This means that multiple Virtual Machines will be provisioned and Azure will keep the instances which become available first - which improves provisioning success rates and improves deployment time. You're not billed for these over-provisioned VM's and they don't count towards the Subscription Quota. Defaults to `true`.
     */
    readonly overprovision: pulumi.Output<boolean | undefined>;
    /**
     * A `plan` block as documented below.
     */
    readonly plan: pulumi.Output<outputs.compute.LinuxVirtualMachineScaleSetPlan | undefined>;
    /**
     * Specifies the number of fault domains that are used by this Linux Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    readonly platformFaultDomainCount: pulumi.Output<number>;
    /**
     * The Priority of this Virtual Machine Scale Set. Possible values are `Regular` and `Spot`. Defaults to `Regular`. Changing this value forces a new resource.
     */
    readonly priority: pulumi.Output<string | undefined>;
    /**
     * Should the Azure VM Agent be provisioned on each Virtual Machine in the Scale Set? Defaults to `true`. Changing this value forces a new resource to be created.
     */
    readonly provisionVmAgent: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the Proximity Placement Group in which the Virtual Machine Scale Set should be assigned to. Changing this forces a new resource to be created.
     */
    readonly proximityPlacementGroupId: pulumi.Output<string | undefined>;
    /**
     * The name of the Resource Group in which the Linux Virtual Machine Scale Set should be exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `rollingUpgradePolicy` block as defined below. This is Required and can only be specified when `upgradeMode` is set to `Automatic` or `Rolling`.
     */
    readonly rollingUpgradePolicy: pulumi.Output<outputs.compute.LinuxVirtualMachineScaleSetRollingUpgradePolicy | undefined>;
    /**
     * The scale-in policy rule that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled in. Possible values for the scale-in policy rules are `Default`, `NewestVM` and `OldestVM`, defaults to `Default`. For more information about scale in policy, please [refer to this doc](https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-scale-in-policy).
     */
    readonly scaleInPolicy: pulumi.Output<string | undefined>;
    /**
     * One or more `secret` blocks as defined below.
     */
    readonly secrets: pulumi.Output<outputs.compute.LinuxVirtualMachineScaleSetSecret[] | undefined>;
    /**
     * Specifies whether secure boot should be enabled on the virtual machine. Changing this forces a new resource to be created.
     */
    readonly secureBootEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Should this Virtual Machine Scale Set be limited to a Single Placement Group, which means the number of instances will be capped at 100 Virtual Machines. Defaults to `true`.
     */
    readonly singlePlacementGroup: pulumi.Output<boolean | undefined>;
    /**
     * The Virtual Machine SKU for the Scale Set, such as `Standard_F2`.
     */
    readonly sku: pulumi.Output<string>;
    /**
     * The ID of an Image which each Virtual Machine in this Scale Set should be based on.
     */
    readonly sourceImageId: pulumi.Output<string | undefined>;
    /**
     * A `sourceImageReference` block as defined below.
     */
    readonly sourceImageReference: pulumi.Output<outputs.compute.LinuxVirtualMachineScaleSetSourceImageReference | undefined>;
    /**
     * A mapping of tags which should be assigned to this Virtual Machine Scale Set.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * A `terminateNotification` block as defined below.
     */
    readonly terminateNotification: pulumi.Output<outputs.compute.LinuxVirtualMachineScaleSetTerminateNotification>;
    /**
     * The Unique ID for this Linux Virtual Machine Scale Set.
     */
    readonly uniqueId: pulumi.Output<string>;
    /**
     * Specifies how Upgrades (e.g. changing the Image/SKU) should be performed to Virtual Machine Instances. Possible values are `Automatic`, `Manual` and `Rolling`. Defaults to `Manual`.
     */
    readonly upgradeMode: pulumi.Output<string | undefined>;
    /**
     * The Base64-Encoded User Data which should be used for this Virtual Machine Scale Set.
     */
    readonly userData: pulumi.Output<string | undefined>;
    /**
     * Specifies whether vTPM should be enabled on the virtual machine. Changing this forces a new resource to be created.
     */
    readonly vtpmEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Should the Virtual Machines in this Scale Set be strictly evenly distributed across Availability Zones? Defaults to `false`. Changing this forces a new resource to be created.
     */
    readonly zoneBalance: pulumi.Output<boolean | undefined>;
    /**
     * A list of Availability Zones in which the Virtual Machines in this Scale Set should be created in. Changing this forces a new resource to be created.
     */
    readonly zones: pulumi.Output<string[] | undefined>;
    /**
     * Create a LinuxVirtualMachineScaleSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinuxVirtualMachineScaleSetArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LinuxVirtualMachineScaleSet resources.
 */
export interface LinuxVirtualMachineScaleSetState {
    /**
     * A `additionalCapabilities` block as defined below.
     */
    additionalCapabilities?: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetAdditionalCapabilities>;
    /**
     * The Password which should be used for the local-administrator on this Virtual Machine. Changing this forces a new resource to be created.
     */
    adminPassword?: pulumi.Input<string>;
    /**
     * One or more `adminSshKey` blocks as defined below.
     */
    adminSshKeys?: pulumi.Input<pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetAdminSshKey>[]>;
    /**
     * The username of the local administrator on each Virtual Machine Scale Set instance. Changing this forces a new resource to be created.
     */
    adminUsername?: pulumi.Input<string>;
    /**
     * A `automaticInstanceRepair` block as defined below. To enable the automatic instance repair, this Virtual Machine Scale Set must have a valid `healthProbeId` or an [Application Health Extension](https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-health-extension).
     */
    automaticInstanceRepair?: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetAutomaticInstanceRepair>;
    /**
     * A `automaticOsUpgradePolicy` block as defined below. This can only be specified when `upgradeMode` is set to `Automatic`.
     */
    automaticOsUpgradePolicy?: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy>;
    /**
     * A `bootDiagnostics` block as defined below.
     */
    bootDiagnostics?: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetBootDiagnostics>;
    /**
     * The prefix which should be used for the name of the Virtual Machines in this Scale Set. If unspecified this defaults to the value for the `name` field. If the value of the `name` field is not a valid `computerNamePrefix`, then you must specify `computerNamePrefix`.
     */
    computerNamePrefix?: pulumi.Input<string>;
    /**
     * The Base64-Encoded Custom Data which should be used for this Virtual Machine Scale Set.
     */
    customData?: pulumi.Input<string>;
    /**
     * One or more `dataDisk` blocks as defined below.
     */
    dataDisks?: pulumi.Input<pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetDataDisk>[]>;
    /**
     * Should Password Authentication be disabled on this Virtual Machine Scale Set? Defaults to `true`.
     */
    disablePasswordAuthentication?: pulumi.Input<boolean>;
    /**
     * Should Virtual Machine Extensions be run on Overprovisioned Virtual Machines in the Scale Set? Defaults to `false`.
     */
    doNotRunExtensionsOnOverprovisionedMachines?: pulumi.Input<boolean>;
    /**
     * Should all of the disks (including the temp disk) attached to this Virtual Machine be encrypted by enabling Encryption at Host?
     */
    encryptionAtHostEnabled?: pulumi.Input<boolean>;
    /**
     * The Policy which should be used Virtual Machines are Evicted from the Scale Set. Changing this forces a new resource to be created.
     */
    evictionPolicy?: pulumi.Input<string>;
    /**
     * One or more `extension` blocks as defined below
     */
    extensions?: pulumi.Input<pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetExtension>[]>;
    /**
     * Specifies the duration allocated for all extensions to start. The time duration should be between `15` minutes and `120` minutes (inclusive) and should be specified in ISO 8601 format. Defaults to `90` minutes (`PT1H30M`).
     */
    extensionsTimeBudget?: pulumi.Input<string>;
    /**
     * The ID of a Load Balancer Probe which should be used to determine the health of an instance. This is Required and can only be specified when `upgradeMode` is set to `Automatic` or `Rolling`.
     */
    healthProbeId?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetIdentity>;
    /**
     * The number of Virtual Machines in the Scale Set.
     */
    instances?: pulumi.Input<number>;
    /**
     * The Azure location where the Linux Virtual Machine Scale Set should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The maximum price you're willing to pay for each Virtual Machine in this Scale Set, in US Dollars; which must be greater than the current spot price. If this bid price falls below the current spot price the Virtual Machines in the Scale Set will be evicted using the `evictionPolicy`. Defaults to `-1`, which means that each Virtual Machine in this Scale Set should not be evicted for price reasons.
     */
    maxBidPrice?: pulumi.Input<number>;
    /**
     * The name of the Linux Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `networkInterface` blocks as defined below.
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetNetworkInterface>[]>;
    /**
     * An `osDisk` block as defined below.
     */
    osDisk?: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetOsDisk>;
    /**
     * Should Azure over-provision Virtual Machines in this Scale Set? This means that multiple Virtual Machines will be provisioned and Azure will keep the instances which become available first - which improves provisioning success rates and improves deployment time. You're not billed for these over-provisioned VM's and they don't count towards the Subscription Quota. Defaults to `true`.
     */
    overprovision?: pulumi.Input<boolean>;
    /**
     * A `plan` block as documented below.
     */
    plan?: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetPlan>;
    /**
     * Specifies the number of fault domains that are used by this Linux Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    platformFaultDomainCount?: pulumi.Input<number>;
    /**
     * The Priority of this Virtual Machine Scale Set. Possible values are `Regular` and `Spot`. Defaults to `Regular`. Changing this value forces a new resource.
     */
    priority?: pulumi.Input<string>;
    /**
     * Should the Azure VM Agent be provisioned on each Virtual Machine in the Scale Set? Defaults to `true`. Changing this value forces a new resource to be created.
     */
    provisionVmAgent?: pulumi.Input<boolean>;
    /**
     * The ID of the Proximity Placement Group in which the Virtual Machine Scale Set should be assigned to. Changing this forces a new resource to be created.
     */
    proximityPlacementGroupId?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Linux Virtual Machine Scale Set should be exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `rollingUpgradePolicy` block as defined below. This is Required and can only be specified when `upgradeMode` is set to `Automatic` or `Rolling`.
     */
    rollingUpgradePolicy?: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetRollingUpgradePolicy>;
    /**
     * The scale-in policy rule that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled in. Possible values for the scale-in policy rules are `Default`, `NewestVM` and `OldestVM`, defaults to `Default`. For more information about scale in policy, please [refer to this doc](https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-scale-in-policy).
     */
    scaleInPolicy?: pulumi.Input<string>;
    /**
     * One or more `secret` blocks as defined below.
     */
    secrets?: pulumi.Input<pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetSecret>[]>;
    /**
     * Specifies whether secure boot should be enabled on the virtual machine. Changing this forces a new resource to be created.
     */
    secureBootEnabled?: pulumi.Input<boolean>;
    /**
     * Should this Virtual Machine Scale Set be limited to a Single Placement Group, which means the number of instances will be capped at 100 Virtual Machines. Defaults to `true`.
     */
    singlePlacementGroup?: pulumi.Input<boolean>;
    /**
     * The Virtual Machine SKU for the Scale Set, such as `Standard_F2`.
     */
    sku?: pulumi.Input<string>;
    /**
     * The ID of an Image which each Virtual Machine in this Scale Set should be based on.
     */
    sourceImageId?: pulumi.Input<string>;
    /**
     * A `sourceImageReference` block as defined below.
     */
    sourceImageReference?: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetSourceImageReference>;
    /**
     * A mapping of tags which should be assigned to this Virtual Machine Scale Set.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `terminateNotification` block as defined below.
     */
    terminateNotification?: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetTerminateNotification>;
    /**
     * The Unique ID for this Linux Virtual Machine Scale Set.
     */
    uniqueId?: pulumi.Input<string>;
    /**
     * Specifies how Upgrades (e.g. changing the Image/SKU) should be performed to Virtual Machine Instances. Possible values are `Automatic`, `Manual` and `Rolling`. Defaults to `Manual`.
     */
    upgradeMode?: pulumi.Input<string>;
    /**
     * The Base64-Encoded User Data which should be used for this Virtual Machine Scale Set.
     */
    userData?: pulumi.Input<string>;
    /**
     * Specifies whether vTPM should be enabled on the virtual machine. Changing this forces a new resource to be created.
     */
    vtpmEnabled?: pulumi.Input<boolean>;
    /**
     * Should the Virtual Machines in this Scale Set be strictly evenly distributed across Availability Zones? Defaults to `false`. Changing this forces a new resource to be created.
     */
    zoneBalance?: pulumi.Input<boolean>;
    /**
     * A list of Availability Zones in which the Virtual Machines in this Scale Set should be created in. Changing this forces a new resource to be created.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a LinuxVirtualMachineScaleSet resource.
 */
export interface LinuxVirtualMachineScaleSetArgs {
    /**
     * A `additionalCapabilities` block as defined below.
     */
    additionalCapabilities?: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetAdditionalCapabilities>;
    /**
     * The Password which should be used for the local-administrator on this Virtual Machine. Changing this forces a new resource to be created.
     */
    adminPassword?: pulumi.Input<string>;
    /**
     * One or more `adminSshKey` blocks as defined below.
     */
    adminSshKeys?: pulumi.Input<pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetAdminSshKey>[]>;
    /**
     * The username of the local administrator on each Virtual Machine Scale Set instance. Changing this forces a new resource to be created.
     */
    adminUsername: pulumi.Input<string>;
    /**
     * A `automaticInstanceRepair` block as defined below. To enable the automatic instance repair, this Virtual Machine Scale Set must have a valid `healthProbeId` or an [Application Health Extension](https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-health-extension).
     */
    automaticInstanceRepair?: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetAutomaticInstanceRepair>;
    /**
     * A `automaticOsUpgradePolicy` block as defined below. This can only be specified when `upgradeMode` is set to `Automatic`.
     */
    automaticOsUpgradePolicy?: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy>;
    /**
     * A `bootDiagnostics` block as defined below.
     */
    bootDiagnostics?: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetBootDiagnostics>;
    /**
     * The prefix which should be used for the name of the Virtual Machines in this Scale Set. If unspecified this defaults to the value for the `name` field. If the value of the `name` field is not a valid `computerNamePrefix`, then you must specify `computerNamePrefix`.
     */
    computerNamePrefix?: pulumi.Input<string>;
    /**
     * The Base64-Encoded Custom Data which should be used for this Virtual Machine Scale Set.
     */
    customData?: pulumi.Input<string>;
    /**
     * One or more `dataDisk` blocks as defined below.
     */
    dataDisks?: pulumi.Input<pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetDataDisk>[]>;
    /**
     * Should Password Authentication be disabled on this Virtual Machine Scale Set? Defaults to `true`.
     */
    disablePasswordAuthentication?: pulumi.Input<boolean>;
    /**
     * Should Virtual Machine Extensions be run on Overprovisioned Virtual Machines in the Scale Set? Defaults to `false`.
     */
    doNotRunExtensionsOnOverprovisionedMachines?: pulumi.Input<boolean>;
    /**
     * Should all of the disks (including the temp disk) attached to this Virtual Machine be encrypted by enabling Encryption at Host?
     */
    encryptionAtHostEnabled?: pulumi.Input<boolean>;
    /**
     * The Policy which should be used Virtual Machines are Evicted from the Scale Set. Changing this forces a new resource to be created.
     */
    evictionPolicy?: pulumi.Input<string>;
    /**
     * One or more `extension` blocks as defined below
     */
    extensions?: pulumi.Input<pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetExtension>[]>;
    /**
     * Specifies the duration allocated for all extensions to start. The time duration should be between `15` minutes and `120` minutes (inclusive) and should be specified in ISO 8601 format. Defaults to `90` minutes (`PT1H30M`).
     */
    extensionsTimeBudget?: pulumi.Input<string>;
    /**
     * The ID of a Load Balancer Probe which should be used to determine the health of an instance. This is Required and can only be specified when `upgradeMode` is set to `Automatic` or `Rolling`.
     */
    healthProbeId?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetIdentity>;
    /**
     * The number of Virtual Machines in the Scale Set.
     */
    instances: pulumi.Input<number>;
    /**
     * The Azure location where the Linux Virtual Machine Scale Set should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The maximum price you're willing to pay for each Virtual Machine in this Scale Set, in US Dollars; which must be greater than the current spot price. If this bid price falls below the current spot price the Virtual Machines in the Scale Set will be evicted using the `evictionPolicy`. Defaults to `-1`, which means that each Virtual Machine in this Scale Set should not be evicted for price reasons.
     */
    maxBidPrice?: pulumi.Input<number>;
    /**
     * The name of the Linux Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `networkInterface` blocks as defined below.
     */
    networkInterfaces: pulumi.Input<pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetNetworkInterface>[]>;
    /**
     * An `osDisk` block as defined below.
     */
    osDisk: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetOsDisk>;
    /**
     * Should Azure over-provision Virtual Machines in this Scale Set? This means that multiple Virtual Machines will be provisioned and Azure will keep the instances which become available first - which improves provisioning success rates and improves deployment time. You're not billed for these over-provisioned VM's and they don't count towards the Subscription Quota. Defaults to `true`.
     */
    overprovision?: pulumi.Input<boolean>;
    /**
     * A `plan` block as documented below.
     */
    plan?: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetPlan>;
    /**
     * Specifies the number of fault domains that are used by this Linux Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    platformFaultDomainCount?: pulumi.Input<number>;
    /**
     * The Priority of this Virtual Machine Scale Set. Possible values are `Regular` and `Spot`. Defaults to `Regular`. Changing this value forces a new resource.
     */
    priority?: pulumi.Input<string>;
    /**
     * Should the Azure VM Agent be provisioned on each Virtual Machine in the Scale Set? Defaults to `true`. Changing this value forces a new resource to be created.
     */
    provisionVmAgent?: pulumi.Input<boolean>;
    /**
     * The ID of the Proximity Placement Group in which the Virtual Machine Scale Set should be assigned to. Changing this forces a new resource to be created.
     */
    proximityPlacementGroupId?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Linux Virtual Machine Scale Set should be exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `rollingUpgradePolicy` block as defined below. This is Required and can only be specified when `upgradeMode` is set to `Automatic` or `Rolling`.
     */
    rollingUpgradePolicy?: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetRollingUpgradePolicy>;
    /**
     * The scale-in policy rule that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled in. Possible values for the scale-in policy rules are `Default`, `NewestVM` and `OldestVM`, defaults to `Default`. For more information about scale in policy, please [refer to this doc](https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-scale-in-policy).
     */
    scaleInPolicy?: pulumi.Input<string>;
    /**
     * One or more `secret` blocks as defined below.
     */
    secrets?: pulumi.Input<pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetSecret>[]>;
    /**
     * Specifies whether secure boot should be enabled on the virtual machine. Changing this forces a new resource to be created.
     */
    secureBootEnabled?: pulumi.Input<boolean>;
    /**
     * Should this Virtual Machine Scale Set be limited to a Single Placement Group, which means the number of instances will be capped at 100 Virtual Machines. Defaults to `true`.
     */
    singlePlacementGroup?: pulumi.Input<boolean>;
    /**
     * The Virtual Machine SKU for the Scale Set, such as `Standard_F2`.
     */
    sku: pulumi.Input<string>;
    /**
     * The ID of an Image which each Virtual Machine in this Scale Set should be based on.
     */
    sourceImageId?: pulumi.Input<string>;
    /**
     * A `sourceImageReference` block as defined below.
     */
    sourceImageReference?: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetSourceImageReference>;
    /**
     * A mapping of tags which should be assigned to this Virtual Machine Scale Set.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `terminateNotification` block as defined below.
     */
    terminateNotification?: pulumi.Input<inputs.compute.LinuxVirtualMachineScaleSetTerminateNotification>;
    /**
     * Specifies how Upgrades (e.g. changing the Image/SKU) should be performed to Virtual Machine Instances. Possible values are `Automatic`, `Manual` and `Rolling`. Defaults to `Manual`.
     */
    upgradeMode?: pulumi.Input<string>;
    /**
     * The Base64-Encoded User Data which should be used for this Virtual Machine Scale Set.
     */
    userData?: pulumi.Input<string>;
    /**
     * Specifies whether vTPM should be enabled on the virtual machine. Changing this forces a new resource to be created.
     */
    vtpmEnabled?: pulumi.Input<boolean>;
    /**
     * Should the Virtual Machines in this Scale Set be strictly evenly distributed across Availability Zones? Defaults to `false`. Changing this forces a new resource to be created.
     */
    zoneBalance?: pulumi.Input<boolean>;
    /**
     * A list of Availability Zones in which the Virtual Machines in this Scale Set should be created in. Changing this forces a new resource to be created.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
