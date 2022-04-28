import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a VM replicated using Azure Site Recovery (Azure to Azure only). A replicated VM keeps a copiously updated image of the VM in another region in order to be able to start the VM in that region in case of a disaster.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const primaryResourceGroup = new azure.core.ResourceGroup("primaryResourceGroup", {location: "West US"});
 * const secondaryResourceGroup = new azure.core.ResourceGroup("secondaryResourceGroup", {location: "East US"});
 * const primaryVirtualNetwork = new azure.network.VirtualNetwork("primaryVirtualNetwork", {
 *     resourceGroupName: primaryResourceGroup.name,
 *     addressSpaces: ["192.168.1.0/24"],
 *     location: primaryResourceGroup.location,
 * });
 * const primarySubnet = new azure.network.Subnet("primarySubnet", {
 *     resourceGroupName: primaryResourceGroup.name,
 *     virtualNetworkName: primaryVirtualNetwork.name,
 *     addressPrefixes: ["192.168.1.0/24"],
 * });
 * const primaryPublicIp = new azure.network.PublicIp("primaryPublicIp", {
 *     allocationMethod: "Static",
 *     location: primaryResourceGroup.location,
 *     resourceGroupName: primaryResourceGroup.name,
 *     sku: "Basic",
 * });
 * const vmNetworkInterface = new azure.network.NetworkInterface("vmNetworkInterface", {
 *     location: primaryResourceGroup.location,
 *     resourceGroupName: primaryResourceGroup.name,
 *     ipConfigurations: [{
 *         name: "vm",
 *         subnetId: primarySubnet.id,
 *         privateIpAddressAllocation: "Dynamic",
 *         publicIpAddressId: primaryPublicIp.id,
 *     }],
 * });
 * const vmVirtualMachine = new azure.compute.VirtualMachine("vmVirtualMachine", {
 *     location: primaryResourceGroup.location,
 *     resourceGroupName: primaryResourceGroup.name,
 *     vmSize: "Standard_B1s",
 *     networkInterfaceIds: [vmNetworkInterface.id],
 *     storageImageReference: {
 *         publisher: "OpenLogic",
 *         offer: "CentOS",
 *         sku: "7.5",
 *         version: "latest",
 *     },
 *     storageOsDisk: {
 *         name: "vm-os-disk",
 *         osType: "Linux",
 *         caching: "ReadWrite",
 *         createOption: "FromImage",
 *         managedDiskType: "Premium_LRS",
 *     },
 *     osProfile: {
 *         adminUsername: "test-admin-123",
 *         adminPassword: "test-pwd-123",
 *         computerName: "vm",
 *     },
 *     osProfileLinuxConfig: {
 *         disablePasswordAuthentication: false,
 *     },
 * });
 * const vault = new azure.recoveryservices.Vault("vault", {
 *     location: secondaryResourceGroup.location,
 *     resourceGroupName: secondaryResourceGroup.name,
 *     sku: "Standard",
 * });
 * const primaryFabric = new azure.siterecovery.Fabric("primaryFabric", {
 *     resourceGroupName: secondaryResourceGroup.name,
 *     recoveryVaultName: vault.name,
 *     location: primaryResourceGroup.location,
 * });
 * const secondaryFabric = new azure.siterecovery.Fabric("secondaryFabric", {
 *     resourceGroupName: secondaryResourceGroup.name,
 *     recoveryVaultName: vault.name,
 *     location: secondaryResourceGroup.location,
 * });
 * const primaryProtectionContainer = new azure.siterecovery.ProtectionContainer("primaryProtectionContainer", {
 *     resourceGroupName: secondaryResourceGroup.name,
 *     recoveryVaultName: vault.name,
 *     recoveryFabricName: primaryFabric.name,
 * });
 * const secondaryProtectionContainer = new azure.siterecovery.ProtectionContainer("secondaryProtectionContainer", {
 *     resourceGroupName: secondaryResourceGroup.name,
 *     recoveryVaultName: vault.name,
 *     recoveryFabricName: secondaryFabric.name,
 * });
 * const policy = new azure.siterecovery.ReplicationPolicy("policy", {
 *     resourceGroupName: secondaryResourceGroup.name,
 *     recoveryVaultName: vault.name,
 *     recoveryPointRetentionInMinutes: 24 * 60,
 *     applicationConsistentSnapshotFrequencyInMinutes: 4 * 60,
 * });
 * const container_mapping = new azure.siterecovery.ProtectionContainerMapping("container-mapping", {
 *     resourceGroupName: secondaryResourceGroup.name,
 *     recoveryVaultName: vault.name,
 *     recoveryFabricName: primaryFabric.name,
 *     recoverySourceProtectionContainerName: primaryProtectionContainer.name,
 *     recoveryTargetProtectionContainerId: secondaryProtectionContainer.id,
 *     recoveryReplicationPolicyId: policy.id,
 * });
 * const secondaryVirtualNetwork = new azure.network.VirtualNetwork("secondaryVirtualNetwork", {
 *     resourceGroupName: secondaryResourceGroup.name,
 *     addressSpaces: ["192.168.2.0/24"],
 *     location: secondaryResourceGroup.location,
 * });
 * const network_mapping = new azure.siterecovery.NetworkMapping("network-mapping", {
 *     resourceGroupName: secondaryResourceGroup.name,
 *     recoveryVaultName: vault.name,
 *     sourceRecoveryFabricName: primaryFabric.name,
 *     targetRecoveryFabricName: secondaryFabric.name,
 *     sourceNetworkId: primaryVirtualNetwork.id,
 *     targetNetworkId: secondaryVirtualNetwork.id,
 * });
 * const primaryAccount = new azure.storage.Account("primaryAccount", {
 *     location: primaryResourceGroup.location,
 *     resourceGroupName: primaryResourceGroup.name,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const secondarySubnet = new azure.network.Subnet("secondarySubnet", {
 *     resourceGroupName: secondaryResourceGroup.name,
 *     virtualNetworkName: secondaryVirtualNetwork.name,
 *     addressPrefixes: ["192.168.2.0/24"],
 * });
 * const secondaryPublicIp = new azure.network.PublicIp("secondaryPublicIp", {
 *     allocationMethod: "Static",
 *     location: secondaryResourceGroup.location,
 *     resourceGroupName: secondaryResourceGroup.name,
 *     sku: "Basic",
 * });
 * const vm_replication = new azure.siterecovery.ReplicatedVM("vm-replication", {
 *     resourceGroupName: secondaryResourceGroup.name,
 *     recoveryVaultName: vault.name,
 *     sourceRecoveryFabricName: primaryFabric.name,
 *     sourceVmId: vmVirtualMachine.id,
 *     recoveryReplicationPolicyId: policy.id,
 *     sourceRecoveryProtectionContainerName: primaryProtectionContainer.name,
 *     targetResourceGroupId: secondaryResourceGroup.id,
 *     targetRecoveryFabricId: secondaryFabric.id,
 *     targetRecoveryProtectionContainerId: secondaryProtectionContainer.id,
 *     managedDisks: [{
 *         diskId: vmVirtualMachine.storageOsDisk.apply(storageOsDisk => storageOsDisk.managedDiskId),
 *         stagingStorageAccountId: primaryAccount.id,
 *         targetResourceGroupId: secondaryResourceGroup.id,
 *         targetDiskType: "Premium_LRS",
 *         targetReplicaDiskType: "Premium_LRS",
 *     }],
 *     networkInterfaces: [{
 *         sourceNetworkInterfaceId: vmNetworkInterface.id,
 *         targetSubnetName: secondarySubnet.name,
 *         recoveryPublicIpAddressId: secondaryPublicIp.id,
 *     }],
 * }, {
 *     dependsOn: [
 *         container_mapping,
 *         network_mapping,
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * Site Recovery Replicated VM's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:siterecovery/replicatedVM:ReplicatedVM vmreplication /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resource-group-name/providers/Microsoft.RecoveryServices/vaults/recovery-vault-name/replicationFabrics/fabric-name/replicationProtectionContainers/protection-container-name/replicationProtectedItems/vm-replication-name
 * ```
 */
export declare class ReplicatedVM extends pulumi.CustomResource {
    /**
     * Get an existing ReplicatedVM resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ReplicatedVMState, opts?: pulumi.CustomResourceOptions): ReplicatedVM;
    /**
     * Returns true if the given object is an instance of ReplicatedVM.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ReplicatedVM;
    /**
     * One or more `managedDisk` block.
     */
    readonly managedDisks: pulumi.Output<outputs.siterecovery.ReplicatedVMManagedDisk[] | undefined>;
    /**
     * The name of the replication for the replicated VM.
     */
    readonly name: pulumi.Output<string>;
    /**
     * One or more `networkInterface` block.
     */
    readonly networkInterfaces: pulumi.Output<outputs.siterecovery.ReplicatedVMNetworkInterface[]>;
    readonly recoveryReplicationPolicyId: pulumi.Output<string>;
    /**
     * The name of the vault that should be updated.
     */
    readonly recoveryVaultName: pulumi.Output<string>;
    /**
     * Name of the resource group where the vault that should be updated is located.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Name of fabric that should contains this replication.
     */
    readonly sourceRecoveryFabricName: pulumi.Output<string>;
    /**
     * Name of the protection container to use.
     */
    readonly sourceRecoveryProtectionContainerName: pulumi.Output<string>;
    /**
     * Id of the VM to replicate
     */
    readonly sourceVmId: pulumi.Output<string>;
    /**
     * Id of availability set that the new VM should belong to when a failover is done.
     */
    readonly targetAvailabilitySetId: pulumi.Output<string | undefined>;
    /**
     * Network to use when a failover is done (recommended to set if any networkInterface is configured for failover).
     */
    readonly targetNetworkId: pulumi.Output<string>;
    /**
     * Id of fabric where the VM replication should be handled when a failover is done.
     */
    readonly targetRecoveryFabricId: pulumi.Output<string>;
    /**
     * Id of protection container where the VM replication should be created when a failover is done.
     */
    readonly targetRecoveryProtectionContainerId: pulumi.Output<string>;
    /**
     * Id of resource group where the VM should be created when a failover is done.
     */
    readonly targetResourceGroupId: pulumi.Output<string>;
    /**
     * Create a ReplicatedVM resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ReplicatedVMArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ReplicatedVM resources.
 */
export interface ReplicatedVMState {
    /**
     * One or more `managedDisk` block.
     */
    managedDisks?: pulumi.Input<pulumi.Input<inputs.siterecovery.ReplicatedVMManagedDisk>[]>;
    /**
     * The name of the replication for the replicated VM.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `networkInterface` block.
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<inputs.siterecovery.ReplicatedVMNetworkInterface>[]>;
    recoveryReplicationPolicyId?: pulumi.Input<string>;
    /**
     * The name of the vault that should be updated.
     */
    recoveryVaultName?: pulumi.Input<string>;
    /**
     * Name of the resource group where the vault that should be updated is located.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Name of fabric that should contains this replication.
     */
    sourceRecoveryFabricName?: pulumi.Input<string>;
    /**
     * Name of the protection container to use.
     */
    sourceRecoveryProtectionContainerName?: pulumi.Input<string>;
    /**
     * Id of the VM to replicate
     */
    sourceVmId?: pulumi.Input<string>;
    /**
     * Id of availability set that the new VM should belong to when a failover is done.
     */
    targetAvailabilitySetId?: pulumi.Input<string>;
    /**
     * Network to use when a failover is done (recommended to set if any networkInterface is configured for failover).
     */
    targetNetworkId?: pulumi.Input<string>;
    /**
     * Id of fabric where the VM replication should be handled when a failover is done.
     */
    targetRecoveryFabricId?: pulumi.Input<string>;
    /**
     * Id of protection container where the VM replication should be created when a failover is done.
     */
    targetRecoveryProtectionContainerId?: pulumi.Input<string>;
    /**
     * Id of resource group where the VM should be created when a failover is done.
     */
    targetResourceGroupId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ReplicatedVM resource.
 */
export interface ReplicatedVMArgs {
    /**
     * One or more `managedDisk` block.
     */
    managedDisks?: pulumi.Input<pulumi.Input<inputs.siterecovery.ReplicatedVMManagedDisk>[]>;
    /**
     * The name of the replication for the replicated VM.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `networkInterface` block.
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<inputs.siterecovery.ReplicatedVMNetworkInterface>[]>;
    recoveryReplicationPolicyId: pulumi.Input<string>;
    /**
     * The name of the vault that should be updated.
     */
    recoveryVaultName: pulumi.Input<string>;
    /**
     * Name of the resource group where the vault that should be updated is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of fabric that should contains this replication.
     */
    sourceRecoveryFabricName: pulumi.Input<string>;
    /**
     * Name of the protection container to use.
     */
    sourceRecoveryProtectionContainerName: pulumi.Input<string>;
    /**
     * Id of the VM to replicate
     */
    sourceVmId: pulumi.Input<string>;
    /**
     * Id of availability set that the new VM should belong to when a failover is done.
     */
    targetAvailabilitySetId?: pulumi.Input<string>;
    /**
     * Network to use when a failover is done (recommended to set if any networkInterface is configured for failover).
     */
    targetNetworkId?: pulumi.Input<string>;
    /**
     * Id of fabric where the VM replication should be handled when a failover is done.
     */
    targetRecoveryFabricId: pulumi.Input<string>;
    /**
     * Id of protection container where the VM replication should be created when a failover is done.
     */
    targetRecoveryProtectionContainerId: pulumi.Input<string>;
    /**
     * Id of resource group where the VM should be created when a failover is done.
     */
    targetResourceGroupId: pulumi.Input<string>;
}
