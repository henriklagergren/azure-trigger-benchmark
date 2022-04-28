import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an App Service certificate.
 *
 * ## Example Usage
 *
 * This example provisions an App Service Certificate from a Local File.
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleCertificate = new azure.appservice.Certificate("exampleCertificate", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     pfxBlob: Buffer.from(fs.readFileSync("certificate.pfx"), 'binary').toString('base64'),
 *     password: "password123!",
 * });
 * ```
 *
 * ## Import
 *
 * App Service Certificates can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appservice/certificate:Certificate example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Web/certificates/certificate1
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
     * The ID of the associated App Service plan. Must be specified when the certificate is used inside an App Service Environment hosted App Service. Changing this forces a new resource to be created.
     */
    readonly appServicePlanId: pulumi.Output<string | undefined>;
    /**
     * The expiration date for the certificate.
     */
    readonly expirationDate: pulumi.Output<string>;
    /**
     * The friendly name of the certificate.
     */
    readonly friendlyName: pulumi.Output<string>;
    /**
     * List of host names the certificate applies to.
     */
    readonly hostNames: pulumi.Output<string[]>;
    /**
     * The ID of the the App Service Environment where the certificate is in use.
     *
     * @deprecated This property has been deprecated and replaced with `app_service_plan_id`
     */
    readonly hostingEnvironmentProfileId: pulumi.Output<string>;
    /**
     * The issue date for the certificate.
     */
    readonly issueDate: pulumi.Output<string>;
    /**
     * The name of the certificate issuer.
     */
    readonly issuer: pulumi.Output<string>;
    /**
     * The ID of the Key Vault secret. Changing this forces a new resource to be created.
     */
    readonly keyVaultSecretId: pulumi.Output<string | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the certificate. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The password to access the certificate's private key. Changing this forces a new resource to be created.
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * The base64-encoded contents of the certificate. Changing this forces a new resource to be created.
     */
    readonly pfxBlob: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group in which to create the certificate. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The subject name of the certificate.
     */
    readonly subjectName: pulumi.Output<string>;
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The thumbprint for the certificate.
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
     * The ID of the associated App Service plan. Must be specified when the certificate is used inside an App Service Environment hosted App Service. Changing this forces a new resource to be created.
     */
    appServicePlanId?: pulumi.Input<string>;
    /**
     * The expiration date for the certificate.
     */
    expirationDate?: pulumi.Input<string>;
    /**
     * The friendly name of the certificate.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * List of host names the certificate applies to.
     */
    hostNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of the the App Service Environment where the certificate is in use.
     *
     * @deprecated This property has been deprecated and replaced with `app_service_plan_id`
     */
    hostingEnvironmentProfileId?: pulumi.Input<string>;
    /**
     * The issue date for the certificate.
     */
    issueDate?: pulumi.Input<string>;
    /**
     * The name of the certificate issuer.
     */
    issuer?: pulumi.Input<string>;
    /**
     * The ID of the Key Vault secret. Changing this forces a new resource to be created.
     */
    keyVaultSecretId?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the certificate. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The password to access the certificate's private key. Changing this forces a new resource to be created.
     */
    password?: pulumi.Input<string>;
    /**
     * The base64-encoded contents of the certificate. Changing this forces a new resource to be created.
     */
    pfxBlob?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the certificate. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The subject name of the certificate.
     */
    subjectName?: pulumi.Input<string>;
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The thumbprint for the certificate.
     */
    thumbprint?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Certificate resource.
 */
export interface CertificateArgs {
    /**
     * The ID of the associated App Service plan. Must be specified when the certificate is used inside an App Service Environment hosted App Service. Changing this forces a new resource to be created.
     */
    appServicePlanId?: pulumi.Input<string>;
    /**
     * The ID of the the App Service Environment where the certificate is in use.
     *
     * @deprecated This property has been deprecated and replaced with `app_service_plan_id`
     */
    hostingEnvironmentProfileId?: pulumi.Input<string>;
    /**
     * The ID of the Key Vault secret. Changing this forces a new resource to be created.
     */
    keyVaultSecretId?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the certificate. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The password to access the certificate's private key. Changing this forces a new resource to be created.
     */
    password?: pulumi.Input<string>;
    /**
     * The base64-encoded contents of the certificate. Changing this forces a new resource to be created.
     */
    pfxBlob?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the certificate. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
