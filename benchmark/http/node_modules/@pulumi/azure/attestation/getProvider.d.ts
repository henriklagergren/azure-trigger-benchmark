import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing Attestation Provider.
 */
export declare function getProvider(args: GetProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetProviderResult>;
/**
 * A collection of arguments for invoking getProvider.
 */
export interface GetProviderArgs {
    /**
     * The name of this Attestation Provider.
     */
    name: string;
    /**
     * The name of the Resource Group where the Attestation Provider exists.
     */
    resourceGroupName: string;
}
/**
 * A collection of values returned by getProvider.
 */
export interface GetProviderResult {
    /**
     * The (Endpoint|URI) of the Attestation Service.
     */
    readonly attestationUri: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The Azure Region where the Attestation Provider exists.
     */
    readonly location: string;
    readonly name: string;
    readonly resourceGroupName: string;
    /**
     * A mapping of tags assigned to the Attestation Provider.
     */
    readonly tags: {
        [key: string]: string;
    };
    /**
     * Trust model used for the Attestation Service.
     */
    readonly trustModel: string;
}
export declare function getProviderOutput(args: GetProviderOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetProviderResult>;
/**
 * A collection of arguments for invoking getProvider.
 */
export interface GetProviderOutputArgs {
    /**
     * The name of this Attestation Provider.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Attestation Provider exists.
     */
    resourceGroupName: pulumi.Input<string>;
}
