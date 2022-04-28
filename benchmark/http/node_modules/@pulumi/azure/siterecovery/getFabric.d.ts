import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Site Recovery Replication Fabric.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const fabric = pulumi.output(azure.siterecovery.getFabric({
 *     name: "primary-fabric",
 *     recoveryVaultName: "tfex-recovery_vault",
 *     resourceGroupName: "tfex-resource_group",
 * }));
 * ```
 */
export declare function getFabric(args: GetFabricArgs, opts?: pulumi.InvokeOptions): Promise<GetFabricResult>;
/**
 * A collection of arguments for invoking getFabric.
 */
export interface GetFabricArgs {
    /**
     * Specifies the name of the Site Recovery Replication Fabric.
     */
    name: string;
    /**
     * The name of the Recovery Services Vault that the Site Recovery Replication Fabric is associated witth.
     */
    recoveryVaultName: string;
    /**
     * The name of the resource group in which the associated Recovery Services Vault resides.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getFabric.
 */
export interface GetFabricResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The Azure location where the Site Recovery Replication Fabric resides.
     */
    readonly location: string;
    readonly name: string;
    readonly recoveryVaultName: string;
    readonly resourceGroupName: string;
}
export declare function getFabricOutput(args: GetFabricOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFabricResult>;
/**
 * A collection of arguments for invoking getFabric.
 */
export interface GetFabricOutputArgs {
    /**
     * Specifies the name of the Site Recovery Replication Fabric.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Recovery Services Vault that the Site Recovery Replication Fabric is associated witth.
     */
    recoveryVaultName: pulumi.Input<string>;
    /**
     * The name of the resource group in which the associated Recovery Services Vault resides.
     */
    resourceGroupName: pulumi.Input<string>;
}
