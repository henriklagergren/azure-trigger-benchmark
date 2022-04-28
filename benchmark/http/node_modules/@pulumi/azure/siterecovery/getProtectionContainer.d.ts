import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing site recovery services protection container.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const container = pulumi.output(azure.siterecovery.getProtectionContainer({
 *     name: "primary-container",
 *     recoveryFabricName: "primary-fabric",
 *     recoveryVaultName: "tfex-recovery_vault",
 *     resourceGroupName: "tfex-resource_group",
 * }));
 * ```
 */
export declare function getProtectionContainer(args: GetProtectionContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetProtectionContainerResult>;
/**
 * A collection of arguments for invoking getProtectionContainer.
 */
export interface GetProtectionContainerArgs {
    /**
     * Specifies the name of the protection container.
     */
    name: string;
    /**
     * The name of the fabric that contains the protection container.
     */
    recoveryFabricName: string;
    /**
     * The name of the Recovery Services Vault that the protection container is associated witth.
     */
    recoveryVaultName: string;
    /**
     * The name of the resource group in which the associated protection container resides.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getProtectionContainer.
 */
export interface GetProtectionContainerResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly recoveryFabricName: string;
    readonly recoveryVaultName: string;
    readonly resourceGroupName: string;
}
export declare function getProtectionContainerOutput(args: GetProtectionContainerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProtectionContainerResult>;
/**
 * A collection of arguments for invoking getProtectionContainer.
 */
export interface GetProtectionContainerOutputArgs {
    /**
     * Specifies the name of the protection container.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the fabric that contains the protection container.
     */
    recoveryFabricName: pulumi.Input<string>;
    /**
     * The name of the Recovery Services Vault that the protection container is associated witth.
     */
    recoveryVaultName: pulumi.Input<string>;
    /**
     * The name of the resource group in which the associated protection container resides.
     */
    resourceGroupName: pulumi.Input<string>;
}
