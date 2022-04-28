import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Disk Encryption Set.
 *
 * > **NOTE:** At this time the Key Vault used to store the Active Key for this Disk Encryption Set must have both Soft Delete & Purge Protection enabled - which are not yet supported by this provider.
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
 *     enabledForDiskEncryption: true,
 *     softDeleteEnabled: true,
 *     purgeProtectionEnabled: true,
 * });
 * const example_user = new azure.keyvault.AccessPolicy("example-user", {
 *     keyVaultId: exampleKeyVault.id,
 *     tenantId: current.then(current => current.tenantId),
 *     objectId: current.then(current => current.objectId),
 *     keyPermissions: [
 *         "get",
 *         "create",
 *         "delete",
 *     ],
 * });
 * const exampleKey = new azure.keyvault.Key("exampleKey", {
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
 * }, {
 *     dependsOn: [example_user],
 * });
 * const exampleDiskEncryptionSet = new azure.compute.DiskEncryptionSet("exampleDiskEncryptionSet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     keyVaultKeyId: exampleKey.id,
 *     identity: {
 *         type: "SystemAssigned",
 *     },
 * });
 * const example_disk = new azure.keyvault.AccessPolicy("example-disk", {
 *     keyVaultId: exampleKeyVault.id,
 *     tenantId: exampleDiskEncryptionSet.identity.apply(identity => identity.tenantId),
 *     objectId: exampleDiskEncryptionSet.identity.apply(identity => identity.principalId),
 *     keyPermissions: [
 *         "Get",
 *         "WrapKey",
 *         "UnwrapKey",
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * Disk Encryption Sets can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:compute/diskEncryptionSet:DiskEncryptionSet example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Compute/diskEncryptionSets/encryptionSet1
 * ```
 */
export declare class DiskEncryptionSet extends pulumi.CustomResource {
    /**
     * Get an existing DiskEncryptionSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DiskEncryptionSetState, opts?: pulumi.CustomResourceOptions): DiskEncryptionSet;
    /**
     * Returns true if the given object is an instance of DiskEncryptionSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DiskEncryptionSet;
    /**
     * Boolean flag to specify whether Azure Disk Encryption Set automatically rotates encryption Key to latest version. Defaults to `false`.
     */
    readonly autoKeyRotationEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The type of key used to encrypt the data of the disk. Possible values are `EncryptionAtRestWithCustomerKey` and `EncryptionAtRestWithPlatformAndCustomerKeys`. Defaults to `EncryptionAtRestWithCustomerKey`.
     */
    readonly encryptionType: pulumi.Output<string | undefined>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.compute.DiskEncryptionSetIdentity>;
    /**
     * Specifies the URL to a Key Vault Key (either from a Key Vault Key, or the Key URL for the Key Vault Secret).
     */
    readonly keyVaultKeyId: pulumi.Output<string>;
    /**
     * Specifies the Azure Region where the Disk Encryption Set exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the Disk Encryption Set. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the name of the Resource Group where the Disk Encryption Set should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the Disk Encryption Set.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a DiskEncryptionSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiskEncryptionSetArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DiskEncryptionSet resources.
 */
export interface DiskEncryptionSetState {
    /**
     * Boolean flag to specify whether Azure Disk Encryption Set automatically rotates encryption Key to latest version. Defaults to `false`.
     */
    autoKeyRotationEnabled?: pulumi.Input<boolean>;
    /**
     * The type of key used to encrypt the data of the disk. Possible values are `EncryptionAtRestWithCustomerKey` and `EncryptionAtRestWithPlatformAndCustomerKeys`. Defaults to `EncryptionAtRestWithCustomerKey`.
     */
    encryptionType?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.compute.DiskEncryptionSetIdentity>;
    /**
     * Specifies the URL to a Key Vault Key (either from a Key Vault Key, or the Key URL for the Key Vault Secret).
     */
    keyVaultKeyId?: pulumi.Input<string>;
    /**
     * Specifies the Azure Region where the Disk Encryption Set exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Disk Encryption Set. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group where the Disk Encryption Set should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the Disk Encryption Set.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a DiskEncryptionSet resource.
 */
export interface DiskEncryptionSetArgs {
    /**
     * Boolean flag to specify whether Azure Disk Encryption Set automatically rotates encryption Key to latest version. Defaults to `false`.
     */
    autoKeyRotationEnabled?: pulumi.Input<boolean>;
    /**
     * The type of key used to encrypt the data of the disk. Possible values are `EncryptionAtRestWithCustomerKey` and `EncryptionAtRestWithPlatformAndCustomerKeys`. Defaults to `EncryptionAtRestWithCustomerKey`.
     */
    encryptionType?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity: pulumi.Input<inputs.compute.DiskEncryptionSetIdentity>;
    /**
     * Specifies the URL to a Key Vault Key (either from a Key Vault Key, or the Key URL for the Key Vault Secret).
     */
    keyVaultKeyId: pulumi.Input<string>;
    /**
     * Specifies the Azure Region where the Disk Encryption Set exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Disk Encryption Set. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group where the Disk Encryption Set should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the Disk Encryption Set.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
