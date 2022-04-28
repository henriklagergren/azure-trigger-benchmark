import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about the permissions from the Management Key Vault Templates.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const contributor = azure.keyvault.getAccessPolicy({
 *     name: "Key Management",
 * });
 * export const accessPolicyKeyPermissions = contributor.then(contributor => contributor.keyPermissions);
 * ```
 */
export declare function getAccessPolicy(args: GetAccessPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetAccessPolicyResult>;
/**
 * A collection of arguments for invoking getAccessPolicy.
 */
export interface GetAccessPolicyArgs {
    /**
     * Specifies the name of the Management Template. Possible values are: `Key Management`,
     * `Secret Management`, `Certificate Management`, `Key & Secret Management`, `Key & Certificate Management`,
     * `Secret & Certificate Management`,  `Key, Secret, & Certificate Management`
     */
    name: string;
}
/**
 * A collection of values returned by getAccessPolicy.
 */
export interface GetAccessPolicyResult {
    /**
     * the certificate permissions for the access policy
     */
    readonly certificatePermissions: string[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * the key permissions for the access policy
     */
    readonly keyPermissions: string[];
    readonly name: string;
    /**
     * the secret permissions for the access policy
     */
    readonly secretPermissions: string[];
}
export declare function getAccessPolicyOutput(args: GetAccessPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAccessPolicyResult>;
/**
 * A collection of arguments for invoking getAccessPolicy.
 */
export interface GetAccessPolicyOutputArgs {
    /**
     * Specifies the name of the Management Template. Possible values are: `Key Management`,
     * `Secret Management`, `Certificate Management`, `Key & Secret Management`, `Key & Certificate Management`,
     * `Secret & Certificate Management`,  `Key, Secret, & Certificate Management`
     */
    name: pulumi.Input<string>;
}
