import * as pulumi from "@pulumi/pulumi";
/**
 * Manages Azure Backup for an Azure VM
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVault = new azure.recoveryservices.Vault("exampleVault", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard",
 * });
 * const examplePolicyVM = new azure.backup.PolicyVM("examplePolicyVM", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     recoveryVaultName: exampleVault.name,
 *     backup: {
 *         frequency: "Daily",
 *         time: "23:00",
 *     },
 * });
 * const vm1 = new azure.backup.ProtectedVM("vm1", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     recoveryVaultName: exampleVault.name,
 *     sourceVmId: azurerm_virtual_machine.example.id,
 *     backupPolicyId: examplePolicyVM.id,
 * });
 * ```
 *
 * ## Import
 *
 * Recovery Services Protected VMs can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:backup/protectedVM:ProtectedVM item1 "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.RecoveryServices/vaults/example-recovery-vault/backupFabrics/Azure/protectionContainers/iaasvmcontainer;iaasvmcontainerv2;group1;vm1/protectedItems/vm;iaasvmcontainerv2;group1;vm1"
 * ```
 *
 *  Note the ID requires quoting as there are semicolons
 */
export declare class ProtectedVM extends pulumi.CustomResource {
    /**
     * Get an existing ProtectedVM resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProtectedVMState, opts?: pulumi.CustomResourceOptions): ProtectedVM;
    /**
     * Returns true if the given object is an instance of ProtectedVM.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ProtectedVM;
    /**
     * Specifies the id of the backup policy to use.
     */
    readonly backupPolicyId: pulumi.Output<string>;
    /**
     * A list of Disks' Logical Unit Numbers(LUN) to be excluded for VM Protection.
     */
    readonly excludeDiskLuns: pulumi.Output<number[] | undefined>;
    /**
     * A list of Disks' Logical Unit Numbers(LUN) to be included for VM Protection.
     */
    readonly includeDiskLuns: pulumi.Output<number[] | undefined>;
    /**
     * Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
     */
    readonly recoveryVaultName: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Recovery Services Vault. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Specifies the ID of the VM to backup. Changing this forces a new resource to be created.
     */
    readonly sourceVmId: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a ProtectedVM resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProtectedVMArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ProtectedVM resources.
 */
export interface ProtectedVMState {
    /**
     * Specifies the id of the backup policy to use.
     */
    backupPolicyId?: pulumi.Input<string>;
    /**
     * A list of Disks' Logical Unit Numbers(LUN) to be excluded for VM Protection.
     */
    excludeDiskLuns?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * A list of Disks' Logical Unit Numbers(LUN) to be included for VM Protection.
     */
    includeDiskLuns?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
     */
    recoveryVaultName?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Recovery Services Vault. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies the ID of the VM to backup. Changing this forces a new resource to be created.
     */
    sourceVmId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a ProtectedVM resource.
 */
export interface ProtectedVMArgs {
    /**
     * Specifies the id of the backup policy to use.
     */
    backupPolicyId: pulumi.Input<string>;
    /**
     * A list of Disks' Logical Unit Numbers(LUN) to be excluded for VM Protection.
     */
    excludeDiskLuns?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * A list of Disks' Logical Unit Numbers(LUN) to be included for VM Protection.
     */
    includeDiskLuns?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Specifies the name of the Recovery Services Vault to use. Changing this forces a new resource to be created.
     */
    recoveryVaultName: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Recovery Services Vault. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the ID of the VM to backup. Changing this forces a new resource to be created.
     */
    sourceVmId: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
