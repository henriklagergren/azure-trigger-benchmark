import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Disk Pool Managed Disk Attachment.
 *
 * > **Note:** Must be either a premium SSD, standard SSD, or an ultra disk in the same region and availability zone as the disk pool.
 *
 * > **Note:** Ultra disks must have a disk sector size of 512 bytes.
 *
 * > **Note:** Must be a shared disk, with a maxShares value of two or greater.
 *
 * > **Note:** You must provide the StoragePool resource provider RBAC permissions to the disks that will be added to the disk pool.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * as azuread from "@pulumi/azuread";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     addressSpaces: ["10.0.0.0/16"],
 * });
 * const exampleSubnet = new azure.network.Subnet("exampleSubnet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.0.0.0/24"],
 *     delegations: [{
 *         name: "diskspool",
 *         serviceDelegation: {
 *             actions: ["Microsoft.Network/virtualNetworks/read"],
 *             name: "Microsoft.StoragePool/diskPools",
 *         },
 *     }],
 * });
 * const exampleDiskPool = new azure.compute.DiskPool("exampleDiskPool", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     subnetId: exampleSubnet.id,
 *     zones: ["1"],
 *     skuName: "Basic_B1",
 * });
 * const exampleManagedDisk = new azure.compute.ManagedDisk("exampleManagedDisk", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     createOption: "Empty",
 *     storageAccountType: "Premium_LRS",
 *     diskSizeGb: 4,
 *     maxShares: 2,
 *     zones: ["1"],
 * });
 * const exampleServicePrincipal = azuread.getServicePrincipal({
 *     displayName: "StoragePool Resource Provider",
 * });
 * const roles = [
 *     "Disk Pool Operator",
 *     "Virtual Machine Contributor",
 * ];
 * const exampleAssignment: azure.authorization.Assignment[];
 * for (const range = {value: 0}; range.value < roles.length; range.value++) {
 *     exampleAssignment.push(new azure.authorization.Assignment(`exampleAssignment-${range.value}`, {
 *         principalId: exampleServicePrincipal.then(exampleServicePrincipal => exampleServicePrincipal.id),
 *         roleDefinitionName: roles[range.value],
 *         scope: exampleManagedDisk.id,
 *     }));
 * }
 * const exampleDiskPoolManagedDiskAttachment = new azure.compute.DiskPoolManagedDiskAttachment("exampleDiskPoolManagedDiskAttachment", {
 *     diskPoolId: exampleDiskPool.id,
 *     managedDiskId: exampleManagedDisk.id,
 * }, {
 *     dependsOn: [exampleAssignment],
 * });
 * ```
 *
 * ## Import
 *
 * Disks Pool Managed Disk Attachments can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:compute/diskPoolManagedDiskAttachment:DiskPoolManagedDiskAttachment example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resGroup1/providers/Microsoft.StoragePool/diskPools/storagePool1/managedDisks|/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resGroup1/providers/Microsoft.Compute/disks/disk1
 * ```
 */
export declare class DiskPoolManagedDiskAttachment extends pulumi.CustomResource {
    /**
     * Get an existing DiskPoolManagedDiskAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DiskPoolManagedDiskAttachmentState, opts?: pulumi.CustomResourceOptions): DiskPoolManagedDiskAttachment;
    /**
     * Returns true if the given object is an instance of DiskPoolManagedDiskAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DiskPoolManagedDiskAttachment;
    /**
     * The ID of the Disk Pool. Changing this forces a new Disk Pool Managed Disk Attachment to be created.
     */
    readonly diskPoolId: pulumi.Output<string>;
    /**
     * The ID of the Managed Disk. Changing this forces a new Disks Pool Managed Disk Attachment to be created.
     */
    readonly managedDiskId: pulumi.Output<string>;
    /**
     * Create a DiskPoolManagedDiskAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiskPoolManagedDiskAttachmentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DiskPoolManagedDiskAttachment resources.
 */
export interface DiskPoolManagedDiskAttachmentState {
    /**
     * The ID of the Disk Pool. Changing this forces a new Disk Pool Managed Disk Attachment to be created.
     */
    diskPoolId?: pulumi.Input<string>;
    /**
     * The ID of the Managed Disk. Changing this forces a new Disks Pool Managed Disk Attachment to be created.
     */
    managedDiskId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DiskPoolManagedDiskAttachment resource.
 */
export interface DiskPoolManagedDiskAttachmentArgs {
    /**
     * The ID of the Disk Pool. Changing this forces a new Disk Pool Managed Disk Attachment to be created.
     */
    diskPoolId: pulumi.Input<string>;
    /**
     * The ID of the Managed Disk. Changing this forces a new Disks Pool Managed Disk Attachment to be created.
     */
    managedDiskId: pulumi.Input<string>;
}
