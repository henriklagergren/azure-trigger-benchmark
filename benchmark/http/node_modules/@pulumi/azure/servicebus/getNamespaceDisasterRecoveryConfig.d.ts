import * as pulumi from "@pulumi/pulumi";
export declare function getNamespaceDisasterRecoveryConfig(args: GetNamespaceDisasterRecoveryConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceDisasterRecoveryConfigResult>;
/**
 * A collection of arguments for invoking getNamespaceDisasterRecoveryConfig.
 */
export interface GetNamespaceDisasterRecoveryConfigArgs {
    name: string;
    namespaceId?: string;
    namespaceName?: string;
    resourceGroupName?: string;
}
/**
 * A collection of values returned by getNamespaceDisasterRecoveryConfig.
 */
export interface GetNamespaceDisasterRecoveryConfigResult {
    readonly defaultPrimaryKey: string;
    readonly defaultSecondaryKey: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly namespaceId?: string;
    readonly namespaceName?: string;
    readonly partnerNamespaceId: string;
    readonly primaryConnectionStringAlias: string;
    readonly resourceGroupName?: string;
    readonly secondaryConnectionStringAlias: string;
}
export declare function getNamespaceDisasterRecoveryConfigOutput(args: GetNamespaceDisasterRecoveryConfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNamespaceDisasterRecoveryConfigResult>;
/**
 * A collection of arguments for invoking getNamespaceDisasterRecoveryConfig.
 */
export interface GetNamespaceDisasterRecoveryConfigOutputArgs {
    name: pulumi.Input<string>;
    namespaceId?: pulumi.Input<string>;
    namespaceName?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
}
