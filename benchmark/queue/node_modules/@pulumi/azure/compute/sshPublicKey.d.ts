import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a SSH Public Key.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const example = new azure.compute.SshPublicKey("example", {
 *     resourceGroupName: "example",
 *     location: "West Europe",
 *     publicKey: fs.readFileSync("~/.ssh/id_rsa.pub"),
 * });
 * ```
 *
 * ## Import
 *
 * SSH Public Keys can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:compute/sshPublicKey:SshPublicKey example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Compute/SshPublicKeys/mySshPublicKeyName1
 * ```
 */
export declare class SshPublicKey extends pulumi.CustomResource {
    /**
     * Get an existing SshPublicKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SshPublicKeyState, opts?: pulumi.CustomResourceOptions): SshPublicKey;
    /**
     * Returns true if the given object is an instance of SshPublicKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SshPublicKey;
    /**
     * The Azure Region where the SSH Public Key should exist. Changing this forces a new SSH Public Key to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this SSH Public Key. Changing this forces a new SSH Public Key to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * SSH public key used to authenticate to a virtual machine through ssh. the provided public key needs to be at least 2048-bit and in ssh-rsa format.
     */
    readonly publicKey: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the SSH Public Key should exist. Changing this forces a new SSH Public Key to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the SSH Public Key.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a SshPublicKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SshPublicKeyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SshPublicKey resources.
 */
export interface SshPublicKeyState {
    /**
     * The Azure Region where the SSH Public Key should exist. Changing this forces a new SSH Public Key to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this SSH Public Key. Changing this forces a new SSH Public Key to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * SSH public key used to authenticate to a virtual machine through ssh. the provided public key needs to be at least 2048-bit and in ssh-rsa format.
     */
    publicKey?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the SSH Public Key should exist. Changing this forces a new SSH Public Key to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the SSH Public Key.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a SshPublicKey resource.
 */
export interface SshPublicKeyArgs {
    /**
     * The Azure Region where the SSH Public Key should exist. Changing this forces a new SSH Public Key to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this SSH Public Key. Changing this forces a new SSH Public Key to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * SSH public key used to authenticate to a virtual machine through ssh. the provided public key needs to be at least 2048-bit and in ssh-rsa format.
     */
    publicKey: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the SSH Public Key should exist. Changing this forces a new SSH Public Key to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the SSH Public Key.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
