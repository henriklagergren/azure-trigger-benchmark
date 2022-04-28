import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Key Vault Certificate.
 *
 * ## Example Usage
 * ### Importing a PFX
 *
 * > **Note:** this example assumed the PFX file is located in the same directory at `certificate-to-import.pfx`.
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleKeyVault = new azure.keyvault.KeyVault("exampleKeyVault", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tenantId: current.then(current => current.tenantId),
 *     skuName: "premium",
 *     accessPolicies: [{
 *         tenantId: current.then(current => current.tenantId),
 *         objectId: current.then(current => current.objectId),
 *         certificatePermissions: [
 *             "create",
 *             "delete",
 *             "deleteissuers",
 *             "get",
 *             "getissuers",
 *             "import",
 *             "list",
 *             "listissuers",
 *             "managecontacts",
 *             "manageissuers",
 *             "setissuers",
 *             "update",
 *         ],
 *         keyPermissions: [
 *             "backup",
 *             "create",
 *             "decrypt",
 *             "delete",
 *             "encrypt",
 *             "get",
 *             "import",
 *             "list",
 *             "purge",
 *             "recover",
 *             "restore",
 *             "sign",
 *             "unwrapKey",
 *             "update",
 *             "verify",
 *             "wrapKey",
 *         ],
 *         secretPermissions: [
 *             "backup",
 *             "delete",
 *             "get",
 *             "list",
 *             "purge",
 *             "recover",
 *             "restore",
 *             "set",
 *         ],
 *     }],
 * });
 * const exampleCertificate = new azure.keyvault.Certificate("exampleCertificate", {
 *     keyVaultId: exampleKeyVault.id,
 *     certificate: {
 *         contents: Buffer.from(fs.readFileSync("certificate-to-import.pfx"), 'binary').toString('base64'),
 *         password: "",
 *     },
 * });
 * ```
 * ### Generating a new certificate
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
 *     skuName: "standard",
 *     softDeleteRetentionDays: 7,
 *     accessPolicies: [{
 *         tenantId: current.then(current => current.tenantId),
 *         objectId: current.then(current => current.objectId),
 *         certificatePermissions: [
 *             "create",
 *             "delete",
 *             "deleteissuers",
 *             "get",
 *             "getissuers",
 *             "import",
 *             "list",
 *             "listissuers",
 *             "managecontacts",
 *             "manageissuers",
 *             "purge",
 *             "setissuers",
 *             "update",
 *         ],
 *         keyPermissions: [
 *             "backup",
 *             "create",
 *             "decrypt",
 *             "delete",
 *             "encrypt",
 *             "get",
 *             "import",
 *             "list",
 *             "purge",
 *             "recover",
 *             "restore",
 *             "sign",
 *             "unwrapKey",
 *             "update",
 *             "verify",
 *             "wrapKey",
 *         ],
 *         secretPermissions: [
 *             "backup",
 *             "delete",
 *             "get",
 *             "list",
 *             "purge",
 *             "recover",
 *             "restore",
 *             "set",
 *         ],
 *     }],
 * });
 * const exampleCertificate = new azure.keyvault.Certificate("exampleCertificate", {
 *     keyVaultId: exampleKeyVault.id,
 *     certificatePolicy: {
 *         issuerParameters: {
 *             name: "Self",
 *         },
 *         keyProperties: {
 *             exportable: true,
 *             keySize: 2048,
 *             keyType: "RSA",
 *             reuseKey: true,
 *         },
 *         lifetimeActions: [{
 *             action: {
 *                 actionType: "AutoRenew",
 *             },
 *             trigger: {
 *                 daysBeforeExpiry: 30,
 *             },
 *         }],
 *         secretProperties: {
 *             contentType: "application/x-pkcs12",
 *         },
 *         x509CertificateProperties: {
 *             extendedKeyUsages: ["1.3.6.1.5.5.7.3.1"],
 *             keyUsages: [
 *                 "cRLSign",
 *                 "dataEncipherment",
 *                 "digitalSignature",
 *                 "keyAgreement",
 *                 "keyCertSign",
 *                 "keyEncipherment",
 *             ],
 *             subjectAlternativeNames: {
 *                 dnsNames: [
 *                     "internal.contoso.com",
 *                     "domain.hello.world",
 *                 ],
 *             },
 *             subject: "CN=hello-world",
 *             validityInMonths: 12,
 *         },
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Key Vault Certificates can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:keyvault/certifiate:Certifiate example "https://example-keyvault.vault.azure.net/certificates/example/fdf067c93bbb4b22bff4d8b7a9a56217"
 * ```
 *
 * @deprecated azure.keyvault.Certifiate has been deprecated in favor of azure.keyvault.Certificate
 */
export declare class Certifiate extends pulumi.CustomResource {
    /**
     * Get an existing Certifiate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CertifiateState, opts?: pulumi.CustomResourceOptions): Certifiate;
    /**
     * Returns true if the given object is an instance of Certifiate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Certifiate;
    /**
     * A `certificate` block as defined below, used to Import an existing certificate.
     */
    readonly certificate: pulumi.Output<outputs.keyvault.CertifiateCertificate | undefined>;
    /**
     * A `certificateAttribute` block as defined below.
     */
    readonly certificateAttributes: pulumi.Output<outputs.keyvault.CertifiateCertificateAttribute[]>;
    /**
     * The raw Key Vault Certificate data represented as a hexadecimal string.
     */
    readonly certificateData: pulumi.Output<string>;
    /**
     * The Base64 encoded Key Vault Certificate data.
     */
    readonly certificateDataBase64: pulumi.Output<string>;
    /**
     * A `certificatePolicy` block as defined below.
     */
    readonly certificatePolicy: pulumi.Output<outputs.keyvault.CertifiateCertificatePolicy>;
    /**
     * The ID of the Key Vault where the Certificate should be created.
     */
    readonly keyVaultId: pulumi.Output<string>;
    /**
     * Specifies the name of the Key Vault Certificate. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the associated Key Vault Secret.
     */
    readonly secretId: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The X509 Thumbprint of the Key Vault Certificate represented as a hexadecimal string.
     */
    readonly thumbprint: pulumi.Output<string>;
    /**
     * The current version of the Key Vault Certificate.
     */
    readonly version: pulumi.Output<string>;
    /**
     * The Base ID of the Key Vault Certificate.
     */
    readonly versionlessId: pulumi.Output<string>;
    /**
     * The Base ID of the Key Vault Secret.
     */
    readonly versionlessSecretId: pulumi.Output<string>;
    /**
     * Create a Certifiate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    /** @deprecated azure.keyvault.Certifiate has been deprecated in favor of azure.keyvault.Certificate */
    constructor(name: string, args: CertifiateArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Certifiate resources.
 */
export interface CertifiateState {
    /**
     * A `certificate` block as defined below, used to Import an existing certificate.
     */
    certificate?: pulumi.Input<inputs.keyvault.CertifiateCertificate>;
    /**
     * A `certificateAttribute` block as defined below.
     */
    certificateAttributes?: pulumi.Input<pulumi.Input<inputs.keyvault.CertifiateCertificateAttribute>[]>;
    /**
     * The raw Key Vault Certificate data represented as a hexadecimal string.
     */
    certificateData?: pulumi.Input<string>;
    /**
     * The Base64 encoded Key Vault Certificate data.
     */
    certificateDataBase64?: pulumi.Input<string>;
    /**
     * A `certificatePolicy` block as defined below.
     */
    certificatePolicy?: pulumi.Input<inputs.keyvault.CertifiateCertificatePolicy>;
    /**
     * The ID of the Key Vault where the Certificate should be created.
     */
    keyVaultId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Key Vault Certificate. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the associated Key Vault Secret.
     */
    secretId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The X509 Thumbprint of the Key Vault Certificate represented as a hexadecimal string.
     */
    thumbprint?: pulumi.Input<string>;
    /**
     * The current version of the Key Vault Certificate.
     */
    version?: pulumi.Input<string>;
    /**
     * The Base ID of the Key Vault Certificate.
     */
    versionlessId?: pulumi.Input<string>;
    /**
     * The Base ID of the Key Vault Secret.
     */
    versionlessSecretId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Certifiate resource.
 */
export interface CertifiateArgs {
    /**
     * A `certificate` block as defined below, used to Import an existing certificate.
     */
    certificate?: pulumi.Input<inputs.keyvault.CertifiateCertificate>;
    /**
     * A `certificatePolicy` block as defined below.
     */
    certificatePolicy?: pulumi.Input<inputs.keyvault.CertifiateCertificatePolicy>;
    /**
     * The ID of the Key Vault where the Certificate should be created.
     */
    keyVaultId: pulumi.Input<string>;
    /**
     * Specifies the name of the Key Vault Certificate. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
