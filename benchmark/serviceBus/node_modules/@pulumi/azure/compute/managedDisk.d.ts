import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a managed disk.
 *
 * ## Example Usage
 * ### With Create Empty
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleManagedDisk = new azure.compute.ManagedDisk("exampleManagedDisk", {
 *     location: "West US 2",
 *     resourceGroupName: exampleResourceGroup.name,
 *     storageAccountType: "Standard_LRS",
 *     createOption: "Empty",
 *     diskSizeGb: "1",
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * ```
 * ### With Create Copy
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.core.ResourceGroup("example", {location: "West Europe"});
 * const source = new azure.compute.ManagedDisk("source", {
 *     location: "West US 2",
 *     resourceGroupName: example.name,
 *     storageAccountType: "Standard_LRS",
 *     createOption: "Empty",
 *     diskSizeGb: "1",
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * const copy = new azure.compute.ManagedDisk("copy", {
 *     location: "West US 2",
 *     resourceGroupName: example.name,
 *     storageAccountType: "Standard_LRS",
 *     createOption: "Copy",
 *     sourceResourceId: source.id,
 *     diskSizeGb: "1",
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Managed Disks can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:compute/managedDisk:ManagedDisk example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/microsoft.compute/disks/manageddisk1
 * ```
 */
export declare class ManagedDisk extends pulumi.CustomResource {
    /**
     * Get an existing ManagedDisk resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagedDiskState, opts?: pulumi.CustomResourceOptions): ManagedDisk;
    /**
     * Returns true if the given object is an instance of ManagedDisk.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ManagedDisk;
    /**
     * The method to use when creating the managed disk. Changing this forces a new resource to be created. Possible values include `Import` (Import a VHD file in to the managed disk (VHD specified with `sourceUri`), `Empty` (Create an empty managed disk), `Copy` (Copy an existing managed disk or snapshot, specified with `sourceResourceId`), `FromImage` (Copy a Platform Image, specified with `imageReferenceId`), `Restore` (Set by Azure Backup or Site Recovery on a restored disk, specified with `sourceResourceId`).
     */
    readonly createOption: pulumi.Output<string>;
    /**
     * The ID of the disk access resource for using private endpoints on disks.
     */
    readonly diskAccessId: pulumi.Output<string | undefined>;
    /**
     * The ID of a Disk Encryption Set which should be used to encrypt this Managed Disk.
     */
    readonly diskEncryptionSetId: pulumi.Output<string | undefined>;
    /**
     * The number of IOPS allowed across all VMs mounting the shared disk as read-only; only settable for UltraSSD disks with shared disk enabled. One operation can transfer between 4k and 256k bytes.
     */
    readonly diskIopsReadOnly: pulumi.Output<number>;
    /**
     * The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes.
     */
    readonly diskIopsReadWrite: pulumi.Output<number>;
    /**
     * The bandwidth allowed across all VMs mounting the shared disk as read-only; only settable for UltraSSD disks with shared disk enabled. MBps means millions of bytes per second.
     */
    readonly diskMbpsReadOnly: pulumi.Output<number>;
    /**
     * The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second.
     */
    readonly diskMbpsReadWrite: pulumi.Output<number>;
    /**
     * Specifies the size of the managed disk to create in gigabytes. If `createOption` is `Copy` or `FromImage`, then the value must be equal to or greater than the source's size. The size can only be increased.
     */
    readonly diskSizeGb: pulumi.Output<number>;
    /**
     * A `encryptionSettings` block as defined below.
     */
    readonly encryptionSettings: pulumi.Output<outputs.compute.ManagedDiskEncryptionSettings | undefined>;
    /**
     * ID of a Gallery Image Version to copy when `createOption` is `FromImage`. This field cannot be specified if imageReferenceId is specified.
     */
    readonly galleryImageReferenceId: pulumi.Output<string | undefined>;
    /**
     * The HyperV Generation of the Disk when the source of an `Import` or `Copy` operation targets a source that contains an operating system. Possible values are `V1` and `V2`. Changing this forces a new resource to be created.
     */
    readonly hyperVGeneration: pulumi.Output<string | undefined>;
    /**
     * ID of an existing platform/marketplace disk image to copy when `createOption` is `FromImage`. This field cannot be specified if galleryImageReferenceId is specified.
     */
    readonly imageReferenceId: pulumi.Output<string | undefined>;
    /**
     * Specified the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Logical Sector Size. Possible values are: `512` and `4096`. Defaults to `4096`. Changing this forces a new resource to be created.
     */
    readonly logicalSectorSize: pulumi.Output<number>;
    /**
     * The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time.
     */
    readonly maxShares: pulumi.Output<number>;
    /**
     * Specifies the name of the Managed Disk. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Policy for accessing the disk via network. Allowed values are `AllowAll`, `AllowPrivate`, and `DenyAll`.
     */
    readonly networkAccessPolicy: pulumi.Output<string | undefined>;
    /**
     * Specifies if On-Demand Bursting is enabled for the Managed Disk. Defaults to `false`.
     */
    readonly onDemandBurstingEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Specify a value when the source of an `Import` or `Copy` operation targets a source that contains an operating system. Valid values are `Linux` or `Windows`.
     */
    readonly osType: pulumi.Output<string | undefined>;
    /**
     * Whether it is allowed to access the disk via public network. Defaults to `true`.
     */
    readonly publicNetworkAccessEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The name of the Resource Group where the Managed Disk should exist.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The ID of an existing Managed Disk to copy `createOption` is `Copy` or the recovery point to restore when `createOption` is `Restore`
     */
    readonly sourceResourceId: pulumi.Output<string | undefined>;
    /**
     * URI to a valid VHD file to be used when `createOption` is `Import`.
     */
    readonly sourceUri: pulumi.Output<string>;
    /**
     * The ID of the Storage Account where the `sourceUri` is located. Required when `createOption` is set to `Import`.  Changing this forces a new resource to be created.
     */
    readonly storageAccountId: pulumi.Output<string | undefined>;
    /**
     * The type of storage to use for the managed disk. Possible values are `Standard_LRS`, `StandardSSD_ZRS`, `Premium_LRS`, `Premium_ZRS`, `StandardSSD_LRS` or `UltraSSD_LRS`.
     */
    readonly storageAccountType: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The disk performance tier to use. Possible values are documented [here](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-change-performance). This feature is currently supported only for premium SSDs.
     */
    readonly tier: pulumi.Output<string>;
    /**
     * Specifies if Trusted Launch is enabled for the Managed Disk. Defaults to `false`.
     */
    readonly trustedLaunchEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A collection containing the availability zone to allocate the Managed Disk in.
     */
    readonly zones: pulumi.Output<string | undefined>;
    /**
     * Create a ManagedDisk resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedDiskArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ManagedDisk resources.
 */
export interface ManagedDiskState {
    /**
     * The method to use when creating the managed disk. Changing this forces a new resource to be created. Possible values include `Import` (Import a VHD file in to the managed disk (VHD specified with `sourceUri`), `Empty` (Create an empty managed disk), `Copy` (Copy an existing managed disk or snapshot, specified with `sourceResourceId`), `FromImage` (Copy a Platform Image, specified with `imageReferenceId`), `Restore` (Set by Azure Backup or Site Recovery on a restored disk, specified with `sourceResourceId`).
     */
    createOption?: pulumi.Input<string>;
    /**
     * The ID of the disk access resource for using private endpoints on disks.
     */
    diskAccessId?: pulumi.Input<string>;
    /**
     * The ID of a Disk Encryption Set which should be used to encrypt this Managed Disk.
     */
    diskEncryptionSetId?: pulumi.Input<string>;
    /**
     * The number of IOPS allowed across all VMs mounting the shared disk as read-only; only settable for UltraSSD disks with shared disk enabled. One operation can transfer between 4k and 256k bytes.
     */
    diskIopsReadOnly?: pulumi.Input<number>;
    /**
     * The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes.
     */
    diskIopsReadWrite?: pulumi.Input<number>;
    /**
     * The bandwidth allowed across all VMs mounting the shared disk as read-only; only settable for UltraSSD disks with shared disk enabled. MBps means millions of bytes per second.
     */
    diskMbpsReadOnly?: pulumi.Input<number>;
    /**
     * The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second.
     */
    diskMbpsReadWrite?: pulumi.Input<number>;
    /**
     * Specifies the size of the managed disk to create in gigabytes. If `createOption` is `Copy` or `FromImage`, then the value must be equal to or greater than the source's size. The size can only be increased.
     */
    diskSizeGb?: pulumi.Input<number>;
    /**
     * A `encryptionSettings` block as defined below.
     */
    encryptionSettings?: pulumi.Input<inputs.compute.ManagedDiskEncryptionSettings>;
    /**
     * ID of a Gallery Image Version to copy when `createOption` is `FromImage`. This field cannot be specified if imageReferenceId is specified.
     */
    galleryImageReferenceId?: pulumi.Input<string>;
    /**
     * The HyperV Generation of the Disk when the source of an `Import` or `Copy` operation targets a source that contains an operating system. Possible values are `V1` and `V2`. Changing this forces a new resource to be created.
     */
    hyperVGeneration?: pulumi.Input<string>;
    /**
     * ID of an existing platform/marketplace disk image to copy when `createOption` is `FromImage`. This field cannot be specified if galleryImageReferenceId is specified.
     */
    imageReferenceId?: pulumi.Input<string>;
    /**
     * Specified the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Logical Sector Size. Possible values are: `512` and `4096`. Defaults to `4096`. Changing this forces a new resource to be created.
     */
    logicalSectorSize?: pulumi.Input<number>;
    /**
     * The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time.
     */
    maxShares?: pulumi.Input<number>;
    /**
     * Specifies the name of the Managed Disk. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Policy for accessing the disk via network. Allowed values are `AllowAll`, `AllowPrivate`, and `DenyAll`.
     */
    networkAccessPolicy?: pulumi.Input<string>;
    /**
     * Specifies if On-Demand Bursting is enabled for the Managed Disk. Defaults to `false`.
     */
    onDemandBurstingEnabled?: pulumi.Input<boolean>;
    /**
     * Specify a value when the source of an `Import` or `Copy` operation targets a source that contains an operating system. Valid values are `Linux` or `Windows`.
     */
    osType?: pulumi.Input<string>;
    /**
     * Whether it is allowed to access the disk via public network. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the Resource Group where the Managed Disk should exist.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The ID of an existing Managed Disk to copy `createOption` is `Copy` or the recovery point to restore when `createOption` is `Restore`
     */
    sourceResourceId?: pulumi.Input<string>;
    /**
     * URI to a valid VHD file to be used when `createOption` is `Import`.
     */
    sourceUri?: pulumi.Input<string>;
    /**
     * The ID of the Storage Account where the `sourceUri` is located. Required when `createOption` is set to `Import`.  Changing this forces a new resource to be created.
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * The type of storage to use for the managed disk. Possible values are `Standard_LRS`, `StandardSSD_ZRS`, `Premium_LRS`, `Premium_ZRS`, `StandardSSD_LRS` or `UltraSSD_LRS`.
     */
    storageAccountType?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The disk performance tier to use. Possible values are documented [here](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-change-performance). This feature is currently supported only for premium SSDs.
     */
    tier?: pulumi.Input<string>;
    /**
     * Specifies if Trusted Launch is enabled for the Managed Disk. Defaults to `false`.
     */
    trustedLaunchEnabled?: pulumi.Input<boolean>;
    /**
     * A collection containing the availability zone to allocate the Managed Disk in.
     */
    zones?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ManagedDisk resource.
 */
export interface ManagedDiskArgs {
    /**
     * The method to use when creating the managed disk. Changing this forces a new resource to be created. Possible values include `Import` (Import a VHD file in to the managed disk (VHD specified with `sourceUri`), `Empty` (Create an empty managed disk), `Copy` (Copy an existing managed disk or snapshot, specified with `sourceResourceId`), `FromImage` (Copy a Platform Image, specified with `imageReferenceId`), `Restore` (Set by Azure Backup or Site Recovery on a restored disk, specified with `sourceResourceId`).
     */
    createOption: pulumi.Input<string>;
    /**
     * The ID of the disk access resource for using private endpoints on disks.
     */
    diskAccessId?: pulumi.Input<string>;
    /**
     * The ID of a Disk Encryption Set which should be used to encrypt this Managed Disk.
     */
    diskEncryptionSetId?: pulumi.Input<string>;
    /**
     * The number of IOPS allowed across all VMs mounting the shared disk as read-only; only settable for UltraSSD disks with shared disk enabled. One operation can transfer between 4k and 256k bytes.
     */
    diskIopsReadOnly?: pulumi.Input<number>;
    /**
     * The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes.
     */
    diskIopsReadWrite?: pulumi.Input<number>;
    /**
     * The bandwidth allowed across all VMs mounting the shared disk as read-only; only settable for UltraSSD disks with shared disk enabled. MBps means millions of bytes per second.
     */
    diskMbpsReadOnly?: pulumi.Input<number>;
    /**
     * The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second.
     */
    diskMbpsReadWrite?: pulumi.Input<number>;
    /**
     * Specifies the size of the managed disk to create in gigabytes. If `createOption` is `Copy` or `FromImage`, then the value must be equal to or greater than the source's size. The size can only be increased.
     */
    diskSizeGb?: pulumi.Input<number>;
    /**
     * A `encryptionSettings` block as defined below.
     */
    encryptionSettings?: pulumi.Input<inputs.compute.ManagedDiskEncryptionSettings>;
    /**
     * ID of a Gallery Image Version to copy when `createOption` is `FromImage`. This field cannot be specified if imageReferenceId is specified.
     */
    galleryImageReferenceId?: pulumi.Input<string>;
    /**
     * The HyperV Generation of the Disk when the source of an `Import` or `Copy` operation targets a source that contains an operating system. Possible values are `V1` and `V2`. Changing this forces a new resource to be created.
     */
    hyperVGeneration?: pulumi.Input<string>;
    /**
     * ID of an existing platform/marketplace disk image to copy when `createOption` is `FromImage`. This field cannot be specified if galleryImageReferenceId is specified.
     */
    imageReferenceId?: pulumi.Input<string>;
    /**
     * Specified the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Logical Sector Size. Possible values are: `512` and `4096`. Defaults to `4096`. Changing this forces a new resource to be created.
     */
    logicalSectorSize?: pulumi.Input<number>;
    /**
     * The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time.
     */
    maxShares?: pulumi.Input<number>;
    /**
     * Specifies the name of the Managed Disk. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Policy for accessing the disk via network. Allowed values are `AllowAll`, `AllowPrivate`, and `DenyAll`.
     */
    networkAccessPolicy?: pulumi.Input<string>;
    /**
     * Specifies if On-Demand Bursting is enabled for the Managed Disk. Defaults to `false`.
     */
    onDemandBurstingEnabled?: pulumi.Input<boolean>;
    /**
     * Specify a value when the source of an `Import` or `Copy` operation targets a source that contains an operating system. Valid values are `Linux` or `Windows`.
     */
    osType?: pulumi.Input<string>;
    /**
     * Whether it is allowed to access the disk via public network. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the Resource Group where the Managed Disk should exist.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of an existing Managed Disk to copy `createOption` is `Copy` or the recovery point to restore when `createOption` is `Restore`
     */
    sourceResourceId?: pulumi.Input<string>;
    /**
     * URI to a valid VHD file to be used when `createOption` is `Import`.
     */
    sourceUri?: pulumi.Input<string>;
    /**
     * The ID of the Storage Account where the `sourceUri` is located. Required when `createOption` is set to `Import`.  Changing this forces a new resource to be created.
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * The type of storage to use for the managed disk. Possible values are `Standard_LRS`, `StandardSSD_ZRS`, `Premium_LRS`, `Premium_ZRS`, `StandardSSD_LRS` or `UltraSSD_LRS`.
     */
    storageAccountType: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The disk performance tier to use. Possible values are documented [here](https://docs.microsoft.com/en-us/azure/virtual-machines/disks-change-performance). This feature is currently supported only for premium SSDs.
     */
    tier?: pulumi.Input<string>;
    /**
     * Specifies if Trusted Launch is enabled for the Managed Disk. Defaults to `false`.
     */
    trustedLaunchEnabled?: pulumi.Input<boolean>;
    /**
     * A collection containing the availability zone to allocate the Managed Disk in.
     */
    zones?: pulumi.Input<string>;
}
