import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Key Vault Key.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleKeyVault = new azure.keyvault.KeyVault("exampleKeyVault", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tenantId: current.then(current => current.tenantId),
 *     skuName: "premium",
 *     softDeleteRetentionDays: 7,
 *     accessPolicies: [{
 *         tenantId: current.then(current => current.tenantId),
 *         objectId: current.then(current => current.objectId),
 *         keyPermissions: [
 *             "create",
 *             "get",
 *             "purge",
 *             "recover",
 *         ],
 *         secretPermissions: ["set"],
 *     }],
 * });
 * const generated = new azure.keyvault.Key("generated", {
 *     keyVaultId: exampleKeyVault.id,
 *     keyType: "RSA",
 *     keySize: 2048,
 *     keyOpts: [
 *         "decrypt",
 *         "encrypt",
 *         "sign",
 *         "unwrapKey",
 *         "verify",
 *         "wrapKey",
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * Key Vault Key which is Enabled can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:keyvault/key:Key example "https://example-keyvault.vault.azure.net/keys/example/fdf067c93bbb4b22bff4d8b7a9a56217"
 * ```
 */
export declare class Key extends pulumi.CustomResource {
    /**
     * Get an existing Key resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KeyState, opts?: pulumi.CustomResourceOptions): Key;
    /**
     * Returns true if the given object is an instance of Key.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Key;
    /**
     * Specifies the curve to use when creating an `EC` key. Possible values are `P-256`, `P-256K`, `P-384`, and `P-521`. This field will be required in a future release if `keyType` is `EC` or `EC-HSM`. The API will default to `P-256` if nothing is specified. Changing this forces a new resource to be created.
     */
    readonly curve: pulumi.Output<string>;
    /**
     * The RSA public exponent of this Key Vault Key.
     */
    readonly e: pulumi.Output<string>;
    /**
     * Expiration UTC datetime (Y-m-d'T'H:M:S'Z').
     */
    readonly expirationDate: pulumi.Output<string | undefined>;
    /**
     * A list of JSON web key operations. Possible values include: `decrypt`, `encrypt`, `sign`, `unwrapKey`, `verify` and `wrapKey`. Please note these values are case sensitive.
     */
    readonly keyOpts: pulumi.Output<string[]>;
    /**
     * Specifies the Size of the RSA key to create in bytes. For example, 1024 or 2048. *Note*: This field is required if `keyType` is `RSA` or `RSA-HSM`. Changing this forces a new resource to be created.
     */
    readonly keySize: pulumi.Output<number | undefined>;
    /**
     * Specifies the Key Type to use for this Key Vault Key. Possible values are `EC` (Elliptic Curve), `EC-HSM`, `Oct` (Octet), `RSA` and `RSA-HSM`. Changing this forces a new resource to be created.
     */
    readonly keyType: pulumi.Output<string>;
    /**
     * The ID of the Key Vault where the Key should be created. Changing this forces a new resource to be created.
     */
    readonly keyVaultId: pulumi.Output<string>;
    /**
     * The RSA modulus of this Key Vault Key.
     */
    readonly n: pulumi.Output<string>;
    /**
     * Specifies the name of the Key Vault Key. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Key not usable before the provided UTC datetime (Y-m-d'T'H:M:S'Z').
     */
    readonly notBeforeDate: pulumi.Output<string | undefined>;
    /**
     * The OpenSSH encoded public key of this Key Vault Key.
     */
    readonly publicKeyOpenssh: pulumi.Output<string>;
    /**
     * The PEM encoded public key of this Key Vault Key.
     */
    readonly publicKeyPem: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The current version of the Key Vault Key.
     */
    readonly version: pulumi.Output<string>;
    /**
     * The Base ID of the Key Vault Key.
     */
    readonly versionlessId: pulumi.Output<string>;
    /**
     * The EC X component of this Key Vault Key.
     */
    readonly x: pulumi.Output<string>;
    /**
     * The EC Y component of this Key Vault Key.
     */
    readonly y: pulumi.Output<string>;
    /**
     * Create a Key resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KeyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Key resources.
 */
export interface KeyState {
    /**
     * Specifies the curve to use when creating an `EC` key. Possible values are `P-256`, `P-256K`, `P-384`, and `P-521`. This field will be required in a future release if `keyType` is `EC` or `EC-HSM`. The API will default to `P-256` if nothing is specified. Changing this forces a new resource to be created.
     */
    curve?: pulumi.Input<string>;
    /**
     * The RSA public exponent of this Key Vault Key.
     */
    e?: pulumi.Input<string>;
    /**
     * Expiration UTC datetime (Y-m-d'T'H:M:S'Z').
     */
    expirationDate?: pulumi.Input<string>;
    /**
     * A list of JSON web key operations. Possible values include: `decrypt`, `encrypt`, `sign`, `unwrapKey`, `verify` and `wrapKey`. Please note these values are case sensitive.
     */
    keyOpts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the Size of the RSA key to create in bytes. For example, 1024 or 2048. *Note*: This field is required if `keyType` is `RSA` or `RSA-HSM`. Changing this forces a new resource to be created.
     */
    keySize?: pulumi.Input<number>;
    /**
     * Specifies the Key Type to use for this Key Vault Key. Possible values are `EC` (Elliptic Curve), `EC-HSM`, `Oct` (Octet), `RSA` and `RSA-HSM`. Changing this forces a new resource to be created.
     */
    keyType?: pulumi.Input<string>;
    /**
     * The ID of the Key Vault where the Key should be created. Changing this forces a new resource to be created.
     */
    keyVaultId?: pulumi.Input<string>;
    /**
     * The RSA modulus of this Key Vault Key.
     */
    n?: pulumi.Input<string>;
    /**
     * Specifies the name of the Key Vault Key. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Key not usable before the provided UTC datetime (Y-m-d'T'H:M:S'Z').
     */
    notBeforeDate?: pulumi.Input<string>;
    /**
     * The OpenSSH encoded public key of this Key Vault Key.
     */
    publicKeyOpenssh?: pulumi.Input<string>;
    /**
     * The PEM encoded public key of this Key Vault Key.
     */
    publicKeyPem?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The current version of the Key Vault Key.
     */
    version?: pulumi.Input<string>;
    /**
     * The Base ID of the Key Vault Key.
     */
    versionlessId?: pulumi.Input<string>;
    /**
     * The EC X component of this Key Vault Key.
     */
    x?: pulumi.Input<string>;
    /**
     * The EC Y component of this Key Vault Key.
     */
    y?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Key resource.
 */
export interface KeyArgs {
    /**
     * Specifies the curve to use when creating an `EC` key. Possible values are `P-256`, `P-256K`, `P-384`, and `P-521`. This field will be required in a future release if `keyType` is `EC` or `EC-HSM`. The API will default to `P-256` if nothing is specified. Changing this forces a new resource to be created.
     */
    curve?: pulumi.Input<string>;
    /**
     * Expiration UTC datetime (Y-m-d'T'H:M:S'Z').
     */
    expirationDate?: pulumi.Input<string>;
    /**
     * A list of JSON web key operations. Possible values include: `decrypt`, `encrypt`, `sign`, `unwrapKey`, `verify` and `wrapKey`. Please note these values are case sensitive.
     */
    keyOpts: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the Size of the RSA key to create in bytes. For example, 1024 or 2048. *Note*: This field is required if `keyType` is `RSA` or `RSA-HSM`. Changing this forces a new resource to be created.
     */
    keySize?: pulumi.Input<number>;
    /**
     * Specifies the Key Type to use for this Key Vault Key. Possible values are `EC` (Elliptic Curve), `EC-HSM`, `Oct` (Octet), `RSA` and `RSA-HSM`. Changing this forces a new resource to be created.
     */
    keyType: pulumi.Input<string>;
    /**
     * The ID of the Key Vault where the Key should be created. Changing this forces a new resource to be created.
     */
    keyVaultId: pulumi.Input<string>;
    /**
     * Specifies the name of the Key Vault Key. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Key not usable before the provided UTC datetime (Y-m-d'T'H:M:S'Z').
     */
    notBeforeDate?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
