import * as pulumi from "@pulumi/pulumi";
/**
 * Use this data source to access information about an existing SSH Public Key.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = azure.compute.getSshPublicKey({
 *     name: "existing",
 *     resourceGroupName: "existing",
 * });
 * export const id = example.then(example => example.id);
 * ```
 */
export declare function getSshPublicKey(args: GetSshPublicKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetSshPublicKeyResult>;
/**
 * A collection of arguments for invoking getSshPublicKey.
 */
export interface GetSshPublicKeyArgs {
    /**
     * The name of this SSH Public Key.
     */
    name: string;
    /**
     * The name of the Resource Group where the SSH Public Key exists.
     */
    resourceGroupName: string;
    /**
     * A mapping of tags which should be assigned to the SSH Public Key.
     */
    tags?: {
        [key: string]: string;
    };
}
/**
 * A collection of values returned by getSshPublicKey.
 */
export interface GetSshPublicKeyResult {
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    /**
     * The SSH public key used to authenticate to a virtual machine through ssh.
     */
    readonly publicKey: string;
    readonly resourceGroupName: string;
    readonly tags?: {
        [key: string]: string;
    };
}
export declare function getSshPublicKeyOutput(args: GetSshPublicKeyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSshPublicKeyResult>;
/**
 * A collection of arguments for invoking getSshPublicKey.
 */
export interface GetSshPublicKeyOutputArgs {
    /**
     * The name of this SSH Public Key.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the SSH Public Key exists.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the SSH Public Key.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
