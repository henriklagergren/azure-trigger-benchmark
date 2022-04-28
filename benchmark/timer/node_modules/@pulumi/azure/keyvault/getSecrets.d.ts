import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to retrieve a list of secret names from an existing Key Vault Secret.
 */
export declare function getSecrets(args: GetSecretsArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretsResult>;
/**
 * A collection of arguments for invoking getSecrets.
 */
export interface GetSecretsArgs {
    /**
     * Specifies the ID of the Key Vault instance to fetch secret names from, available on the `azure.keyvault.KeyVault` Data Source / Resource.
     */
    keyVaultId: string;
}
/**
 * A collection of values returned by getSecrets.
 */
export interface GetSecretsResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The Key Vault ID.
     */
    readonly keyVaultId: string;
    /**
     * List containing names of secrets that exist in this Key Vault.
     */
    readonly names: string[];
}
export declare function getSecretsOutput(args: GetSecretsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSecretsResult>;
/**
 * A collection of arguments for invoking getSecrets.
 */
export interface GetSecretsOutputArgs {
    /**
     * Specifies the ID of the Key Vault instance to fetch secret names from, available on the `azure.keyvault.KeyVault` Data Source / Resource.
     */
    keyVaultId: pulumi.Input<string>;
}
