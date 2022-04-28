import { output as outputs } from "../types";
export declare const auxiliaryTenantIds: string[] | undefined;
/**
 * The password associated with the Client Certificate. For use when authenticating as a Service Principal using a Client
 * Certificate
 */
export declare const clientCertificatePassword: string | undefined;
/**
 * The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service
 * Principal using a Client Certificate.
 */
export declare const clientCertificatePath: string | undefined;
/**
 * The Client ID which should be used.
 */
export declare const clientId: string | undefined;
/**
 * The Client Secret which should be used. For use When authenticating as a Service Principal using a Client Secret.
 */
export declare const clientSecret: string | undefined;
/**
 * This will disable the x-ms-correlation-request-id header.
 */
export declare const disableCorrelationRequestId: boolean | undefined;
/**
 * This will disable the Terraform Partner ID which is used if a custom `partner_id` isn't specified.
 */
export declare const disableTerraformPartnerId: boolean | undefined;
/**
 * The Cloud Environment which should be used. Possible values are public, usgovernment, and china. Defaults to public.
 */
export declare const environment: string;
export declare const features: outputs.config.Features | undefined;
export declare const location: string | undefined;
/**
 * The Hostname which should be used for the Azure Metadata Service.
 */
export declare const metadataHost: string | undefined;
/**
 * Deprecated - replaced by `metadata_host`.
 */
export declare const metadataUrl: string | undefined;
/**
 * The path to a custom endpoint for Managed Service Identity - in most circumstances this should be detected
 * automatically.
 */
export declare const msiEndpoint: string | undefined;
/**
 * A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.
 */
export declare const partnerId: string | undefined;
/**
 * [DEPRECATED] This will cause the AzureRM Provider to skip verifying the credentials being used are valid.
 */
export declare const skipCredentialsValidation: boolean | undefined;
/**
 * Should the AzureRM Provider skip registering all of the Resource Providers that it supports, if they're not already
 * registered?
 */
export declare const skipProviderRegistration: boolean;
/**
 * Should the AzureRM Provider use AzureAD to access the Storage Data Plane API's?
 */
export declare const storageUseAzuread: boolean;
/**
 * The Subscription ID which should be used.
 */
export declare const subscriptionId: string;
/**
 * The Tenant ID which should be used.
 */
export declare const tenantId: string | undefined;
/**
 * Should Terraform obtain MSAL auth tokens and no longer use Azure Active Directory Graph?
 */
export declare const useMsal: boolean | undefined;
/**
 * Allowed Managed Service Identity be used for Authentication.
 */
export declare const useMsi: boolean | undefined;
