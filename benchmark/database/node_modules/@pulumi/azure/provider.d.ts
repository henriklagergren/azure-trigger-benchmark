import * as pulumi from "@pulumi/pulumi";
import { input as inputs } from "./types";
/**
 * The provider type for the azurerm package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export declare class Provider extends pulumi.ProviderResource {
    /**
     * Returns true if the given object is an instance of Provider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Provider;
    /**
     * The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client
     * Certificate
     */
    readonly clientCertificatePassword: pulumi.Output<string | undefined>;
    /**
     * The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service
     * Principal using a Client Certificate.
     */
    readonly clientCertificatePath: pulumi.Output<string | undefined>;
    /**
     * The Client ID which should be used.
     */
    readonly clientId: pulumi.Output<string | undefined>;
    /**
     * The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.
     */
    readonly clientSecret: pulumi.Output<string | undefined>;
    /**
     * The Cloud Environment which should be used. Possible values are public, usgovernment, and china. Defaults to public.
     */
    readonly environment: pulumi.Output<string | undefined>;
    /**
     * The Hostname which should be used for the Azure Metadata Service.
     */
    readonly metadataHost: pulumi.Output<string | undefined>;
    /**
     * Deprecated - replaced by `metadata_host`.
     *
     * @deprecated use `metadata_host` instead
     */
    readonly metadataUrl: pulumi.Output<string | undefined>;
    /**
     * The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected
     * automatically.
     */
    readonly msiEndpoint: pulumi.Output<string | undefined>;
    /**
     * A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.
     */
    readonly partnerId: pulumi.Output<string | undefined>;
    /**
     * The Subscription ID which should be used.
     */
    readonly subscriptionId: pulumi.Output<string | undefined>;
    /**
     * The Tenant ID which should be used.
     */
    readonly tenantId: pulumi.Output<string | undefined>;
    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ProviderArgs, opts?: pulumi.ResourceOptions);
}
/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    auxiliaryTenantIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client
     * Certificate
     */
    clientCertificatePassword?: pulumi.Input<string>;
    /**
     * The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service
     * Principal using a Client Certificate.
     */
    clientCertificatePath?: pulumi.Input<string>;
    /**
     * The Client ID which should be used.
     */
    clientId?: pulumi.Input<string>;
    /**
     * The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * This will disable the x-ms-correlation-request-id header.
     */
    disableCorrelationRequestId?: pulumi.Input<boolean>;
    /**
     * This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified.
     */
    disableTerraformPartnerId?: pulumi.Input<boolean>;
    /**
     * The Cloud Environment which should be used. Possible values are public, usgovernment, and china. Defaults to public.
     */
    environment?: pulumi.Input<string>;
    features?: pulumi.Input<inputs.ProviderFeatures>;
    /**
     * The Hostname which should be used for the Azure Metadata Service.
     */
    metadataHost?: pulumi.Input<string>;
    /**
     * Deprecated - replaced by `metadata_host`.
     *
     * @deprecated use `metadata_host` instead
     */
    metadataUrl?: pulumi.Input<string>;
    /**
     * The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected
     * automatically.
     */
    msiEndpoint?: pulumi.Input<string>;
    /**
     * A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.
     */
    partnerId?: pulumi.Input<string>;
    /**
     * [DEPRECATED] This will cause the AzureRM Provider to skip verifying the credentials being used are valid.
     *
     * @deprecated This field is deprecated and will be removed in version 3.0 of the Azure Provider
     */
    skipCredentialsValidation?: pulumi.Input<boolean>;
    /**
     * Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already
     * registered?
     */
    skipProviderRegistration?: pulumi.Input<boolean>;
    /**
     * Should the AzureRM Provider use AzureAD to access the Storage Data Plane API's?
     */
    storageUseAzuread?: pulumi.Input<boolean>;
    /**
     * The Subscription ID which should be used.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * The Tenant ID which should be used.
     */
    tenantId?: pulumi.Input<string>;
    /**
     * Should Terraform obtain MSAL auth tokens and no longer use Azure Active Directory Graph?
     */
    useMsal?: pulumi.Input<boolean>;
    /**
     * Allowed Managed Service Identity be used for Authentication.
     */
    useMsi?: pulumi.Input<boolean>;
}
