import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Key Vault Certificate Issuer.
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
 *     skuName: "standard",
 *     tenantId: current.then(current => current.tenantId),
 * });
 * const exampleCertificateIssuer = new azure.keyvault.CertificateIssuer("exampleCertificateIssuer", {
 *     orgId: "ExampleOrgName",
 *     keyVaultId: exampleKeyVault.id,
 *     providerName: "DigiCert",
 *     accountId: "0000",
 *     password: "example-password",
 * });
 * ```
 *
 * ## Import
 *
 * Key Vault Certificate Issuers can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:keyvault/certificateIssuer:CertificateIssuer example "https://key-vault-name.vault.azure.net/certificates/issuers/example"
 * ```
 */
export declare class CertificateIssuer extends pulumi.CustomResource {
    /**
     * Get an existing CertificateIssuer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CertificateIssuerState, opts?: pulumi.CustomResourceOptions): CertificateIssuer;
    /**
     * Returns true if the given object is an instance of CertificateIssuer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CertificateIssuer;
    /**
     * The account number with the third-party Certificate Issuer.
     */
    readonly accountId: pulumi.Output<string | undefined>;
    /**
     * One or more `admin` blocks as defined below.
     */
    readonly admins: pulumi.Output<outputs.keyvault.CertificateIssuerAdmin[] | undefined>;
    /**
     * The ID of the Key Vault in which to create the Certificate Issuer.
     */
    readonly keyVaultId: pulumi.Output<string>;
    /**
     * The name which should be used for this Key Vault Certificate Issuer. Changing this forces a new Key Vault Certificate Issuer to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the organization as provided to the issuer.
     */
    readonly orgId: pulumi.Output<string | undefined>;
    /**
     * The password associated with the account and organization ID at the third-party Certificate Issuer. If not specified, will not overwrite any previous value.
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * The name of the third-party Certificate Issuer. Possible values are: `DigiCert`, `GlobalSign`, `OneCertV2-PrivateCA`, `OneCertV2-PublicCA` and `SslAdminV2`.
     */
    readonly providerName: pulumi.Output<string>;
    /**
     * Create a CertificateIssuer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateIssuerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CertificateIssuer resources.
 */
export interface CertificateIssuerState {
    /**
     * The account number with the third-party Certificate Issuer.
     */
    accountId?: pulumi.Input<string>;
    /**
     * One or more `admin` blocks as defined below.
     */
    admins?: pulumi.Input<pulumi.Input<inputs.keyvault.CertificateIssuerAdmin>[]>;
    /**
     * The ID of the Key Vault in which to create the Certificate Issuer.
     */
    keyVaultId?: pulumi.Input<string>;
    /**
     * The name which should be used for this Key Vault Certificate Issuer. Changing this forces a new Key Vault Certificate Issuer to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the organization as provided to the issuer.
     */
    orgId?: pulumi.Input<string>;
    /**
     * The password associated with the account and organization ID at the third-party Certificate Issuer. If not specified, will not overwrite any previous value.
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the third-party Certificate Issuer. Possible values are: `DigiCert`, `GlobalSign`, `OneCertV2-PrivateCA`, `OneCertV2-PublicCA` and `SslAdminV2`.
     */
    providerName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a CertificateIssuer resource.
 */
export interface CertificateIssuerArgs {
    /**
     * The account number with the third-party Certificate Issuer.
     */
    accountId?: pulumi.Input<string>;
    /**
     * One or more `admin` blocks as defined below.
     */
    admins?: pulumi.Input<pulumi.Input<inputs.keyvault.CertificateIssuerAdmin>[]>;
    /**
     * The ID of the Key Vault in which to create the Certificate Issuer.
     */
    keyVaultId: pulumi.Input<string>;
    /**
     * The name which should be used for this Key Vault Certificate Issuer. Changing this forces a new Key Vault Certificate Issuer to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the organization as provided to the issuer.
     */
    orgId?: pulumi.Input<string>;
    /**
     * The password associated with the account and organization ID at the third-party Certificate Issuer. If not specified, will not overwrite any previous value.
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the third-party Certificate Issuer. Possible values are: `DigiCert`, `GlobalSign`, `OneCertV2-PrivateCA`, `OneCertV2-PublicCA` and `SslAdminV2`.
     */
    providerName: pulumi.Input<string>;
}
