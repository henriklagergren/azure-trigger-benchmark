import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Certificate within an API Management Service.
 *
 * ## Example Usage
 * ### With Base64 Certificate)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleService = new azure.apimanagement.Service("exampleService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     publisherName: "My Company",
 *     publisherEmail: "company@exmaple.com",
 *     skuName: "Developer_1",
 * });
 * const exampleCertificate = new azure.apimanagement.Certificate("exampleCertificate", {
 *     apiManagementName: exampleService.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     data: Buffer.from(fs.readFileSync("example.pfx"), 'binary').toString('base64'),
 * });
 * ```
 * ### With Key Vault Certificate)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleService = new azure.apimanagement.Service("exampleService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     publisherName: "My Company",
 *     publisherEmail: "company@terraform.io",
 *     skuName: "Developer_1",
 *     identity: {
 *         type: "SystemAssigned",
 *     },
 * });
 * const exampleKeyVault = new azure.keyvault.KeyVault("exampleKeyVault", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     softDeleteEnabled: true,
 *     tenantId: data.azurerm_client_config.example.tenant_id,
 *     skuName: "standard",
 * });
 * const exampleAccessPolicy = new azure.keyvault.AccessPolicy("exampleAccessPolicy", {
 *     keyVaultId: exampleKeyVault.id,
 *     tenantId: exampleService.identity.apply(identity => identity?.tenantId),
 *     objectId: exampleService.identity.apply(identity => identity?.principalId),
 *     secretPermissions: ["get"],
 *     certificatePermissions: ["get"],
 * });
 * const exampleCertificate = new azure.keyvault.Certificate("exampleCertificate", {
 *     keyVaultId: exampleKeyVault.id,
 *     certificate: {
 *         contents: Buffer.from(fs.readFileSync("example_cert.pfx"), 'binary').toString('base64'),
 *         password: "terraform",
 *     },
 *     certificatePolicy: {
 *         issuerParameters: {
 *             name: "Self",
 *         },
 *         keyProperties: {
 *             exportable: true,
 *             keySize: 2048,
 *             keyType: "RSA",
 *             reuseKey: false,
 *         },
 *         secretProperties: {
 *             contentType: "application/x-pkcs12",
 *         },
 *     },
 * });
 * const exampleApimanagement_certificateCertificate = new azure.apimanagement.Certificate("exampleApimanagement/certificateCertificate", {
 *     apiManagementName: exampleService.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     keyVaultSecretId: exampleCertificate.secretId,
 * });
 * ```
 *
 * ## Import
 *
 * API Management Certificates can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/certificate:Certificate example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.ApiManagement/service/instance1/certificates/certificate1
 * ```
 */
export declare class Certificate extends pulumi.CustomResource {
    /**
     * Get an existing Certificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CertificateState, opts?: pulumi.CustomResourceOptions): Certificate;
    /**
     * Returns true if the given object is an instance of Certificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Certificate;
    /**
     * The Name of the API Management Service where this Service should be created. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * The base-64 encoded certificate data, which must be a PFX file. Changing this forces a new resource to be created.
     */
    readonly data: pulumi.Output<string | undefined>;
    /**
     * The Expiration Date of this Certificate, formatted as an RFC3339 string.
     */
    readonly expiration: pulumi.Output<string>;
    /**
     * The Client ID of the User Assigned Managed Identity to use for retrieving certificate.
     */
    readonly keyVaultIdentityClientId: pulumi.Output<string | undefined>;
    /**
     * The ID of the Key Vault Secret containing the SSL Certificate, which must be of the type `application/x-pkcs12`.
     */
    readonly keyVaultSecretId: pulumi.Output<string | undefined>;
    /**
     * The name of the API Management Certificate. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The password used for this certificate. Changing this forces a new resource to be created.
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * The Name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Subject of this Certificate.
     */
    readonly subject: pulumi.Output<string>;
    /**
     * The Thumbprint of this Certificate.
     */
    readonly thumbprint: pulumi.Output<string>;
    /**
     * Create a Certificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Certificate resources.
 */
export interface CertificateState {
    /**
     * The Name of the API Management Service where this Service should be created. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * The base-64 encoded certificate data, which must be a PFX file. Changing this forces a new resource to be created.
     */
    data?: pulumi.Input<string>;
    /**
     * The Expiration Date of this Certificate, formatted as an RFC3339 string.
     */
    expiration?: pulumi.Input<string>;
    /**
     * The Client ID of the User Assigned Managed Identity to use for retrieving certificate.
     */
    keyVaultIdentityClientId?: pulumi.Input<string>;
    /**
     * The ID of the Key Vault Secret containing the SSL Certificate, which must be of the type `application/x-pkcs12`.
     */
    keyVaultSecretId?: pulumi.Input<string>;
    /**
     * The name of the API Management Certificate. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The password used for this certificate. Changing this forces a new resource to be created.
     */
    password?: pulumi.Input<string>;
    /**
     * The Name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Subject of this Certificate.
     */
    subject?: pulumi.Input<string>;
    /**
     * The Thumbprint of this Certificate.
     */
    thumbprint?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Certificate resource.
 */
export interface CertificateArgs {
    /**
     * The Name of the API Management Service where this Service should be created. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * The base-64 encoded certificate data, which must be a PFX file. Changing this forces a new resource to be created.
     */
    data?: pulumi.Input<string>;
    /**
     * The Client ID of the User Assigned Managed Identity to use for retrieving certificate.
     */
    keyVaultIdentityClientId?: pulumi.Input<string>;
    /**
     * The ID of the Key Vault Secret containing the SSL Certificate, which must be of the type `application/x-pkcs12`.
     */
    keyVaultSecretId?: pulumi.Input<string>;
    /**
     * The name of the API Management Certificate. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The password used for this certificate. Changing this forces a new resource to be created.
     */
    password?: pulumi.Input<string>;
    /**
     * The Name of the Resource Group where the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
