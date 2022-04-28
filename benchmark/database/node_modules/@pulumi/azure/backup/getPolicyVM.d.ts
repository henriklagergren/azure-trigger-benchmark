import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing VM Backup Policy.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const policy = pulumi.output(azure.backup.getPolicyVM({
 *     name: "policy",
 *     recoveryVaultName: "recovery_vault",
 *     resourceGroupName: "resource_group",
 * }));
 * ```
 */
export declare function getPolicyVM(args: GetPolicyVMArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyVMResult>;
/**
 * A collection of arguments for invoking getPolicyVM.
 */
export interface GetPolicyVMArgs {
    /**
     * Specifies the name of the VM Backup Policy.
     */
    name: string;
    /**
     * Specifies the name of the Recovery Services Vault.
     */
    recoveryVaultName: string;
    /**
     * The name of the resource group in which the VM Backup Policy resides.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getPolicyVM.
 */
export interface GetPolicyVMResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly recoveryVaultName: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: {
        [key: string]: string;
    };
}
export declare function getPolicyVMOutput(args: GetPolicyVMOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPolicyVMResult>;
/**
 * A collection of arguments for invoking getPolicyVM.
 */
export interface GetPolicyVMOutputArgs {
    /**
     * Specifies the name of the VM Backup Policy.
     */
    name: pulumi.Input<string>;
    /**
     * Specifies the name of the Recovery Services Vault.
     */
    recoveryVaultName: pulumi.Input<string>;
    /**
     * The name of the resource group in which the VM Backup Policy resides.
     */
    resourceGroupName: pulumi.Input<string>;
}
