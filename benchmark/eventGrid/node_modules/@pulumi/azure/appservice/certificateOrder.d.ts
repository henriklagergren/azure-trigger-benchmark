import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an App Service Certificate Order.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleCertificateOrder = new azure.appservice.CertificateOrder("exampleCertificateOrder", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: "global",
 *     distinguishedName: "CN=example.com",
 *     productType: "Standard",
 * });
 * ```
 *
 * ## Import
 *
 * App Service Certificate Orders can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appservice/certificateOrder:CertificateOrder example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.CertificateRegistration/certificateOrders/certificateorder1
 * ```
 */
export declare class CertificateOrder extends pulumi.CustomResource {
    /**
     * Get an existing CertificateOrder resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CertificateOrderState, opts?: pulumi.CustomResourceOptions): CertificateOrder;
    /**
     * Returns true if the given object is an instance of CertificateOrder.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CertificateOrder;
    /**
     * Reasons why App Service Certificate is not renewable at the current moment.
     */
    readonly appServiceCertificateNotRenewableReasons: pulumi.Output<string[]>;
    /**
     * true if the certificate should be automatically renewed when it expires; otherwise, false. Defaults to true.
     */
    readonly autoRenew: pulumi.Output<boolean | undefined>;
    /**
     * State of the Key Vault secret. A `certificates` block as defined below.
     */
    readonly certificates: pulumi.Output<outputs.appservice.CertificateOrderCertificate[]>;
    /**
     * Last CSR that was created for this order.
     */
    readonly csr: pulumi.Output<string>;
    /**
     * The Distinguished Name for the App Service Certificate Order.
     */
    readonly distinguishedName: pulumi.Output<string>;
    /**
     * Domain verification token.
     */
    readonly domainVerificationToken: pulumi.Output<string>;
    /**
     * Certificate expiration time.
     */
    readonly expirationTime: pulumi.Output<string>;
    /**
     * Certificate thumbprint intermediate certificate.
     */
    readonly intermediateThumbprint: pulumi.Output<string>;
    /**
     * Whether the private key is external or not.
     */
    readonly isPrivateKeyExternal: pulumi.Output<boolean>;
    /**
     * Certificate key size.  Defaults to 2048.
     */
    readonly keySize: pulumi.Output<number | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created. Currently the only valid value is `global`.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the certificate. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Certificate product type, such as `Standard` or `WildCard`.
     */
    readonly productType: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group in which to create the certificate. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Certificate thumbprint for root certificate.
     */
    readonly rootThumbprint: pulumi.Output<string>;
    /**
     * Certificate thumbprint for signed certificate.
     */
    readonly signedCertificateThumbprint: pulumi.Output<string>;
    /**
     * Current order status.
     */
    readonly status: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Duration in years (must be between `1` and `3`).  Defaults to `1`.
     */
    readonly validityInYears: pulumi.Output<number | undefined>;
    /**
     * Create a CertificateOrder resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateOrderArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CertificateOrder resources.
 */
export interface CertificateOrderState {
    /**
     * Reasons why App Service Certificate is not renewable at the current moment.
     */
    appServiceCertificateNotRenewableReasons?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * true if the certificate should be automatically renewed when it expires; otherwise, false. Defaults to true.
     */
    autoRenew?: pulumi.Input<boolean>;
    /**
     * State of the Key Vault secret. A `certificates` block as defined below.
     */
    certificates?: pulumi.Input<pulumi.Input<inputs.appservice.CertificateOrderCertificate>[]>;
    /**
     * Last CSR that was created for this order.
     */
    csr?: pulumi.Input<string>;
    /**
     * The Distinguished Name for the App Service Certificate Order.
     */
    distinguishedName?: pulumi.Input<string>;
    /**
     * Domain verification token.
     */
    domainVerificationToken?: pulumi.Input<string>;
    /**
     * Certificate expiration time.
     */
    expirationTime?: pulumi.Input<string>;
    /**
     * Certificate thumbprint intermediate certificate.
     */
    intermediateThumbprint?: pulumi.Input<string>;
    /**
     * Whether the private key is external or not.
     */
    isPrivateKeyExternal?: pulumi.Input<boolean>;
    /**
     * Certificate key size.  Defaults to 2048.
     */
    keySize?: pulumi.Input<number>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created. Currently the only valid value is `global`.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the certificate. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Certificate product type, such as `Standard` or `WildCard`.
     */
    productType?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the certificate. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Certificate thumbprint for root certificate.
     */
    rootThumbprint?: pulumi.Input<string>;
    /**
     * Certificate thumbprint for signed certificate.
     */
    signedCertificateThumbprint?: pulumi.Input<string>;
    /**
     * Current order status.
     */
    status?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Duration in years (must be between `1` and `3`).  Defaults to `1`.
     */
    validityInYears?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a CertificateOrder resource.
 */
export interface CertificateOrderArgs {
    /**
     * true if the certificate should be automatically renewed when it expires; otherwise, false. Defaults to true.
     */
    autoRenew?: pulumi.Input<boolean>;
    /**
     * Last CSR that was created for this order.
     */
    csr?: pulumi.Input<string>;
    /**
     * The Distinguished Name for the App Service Certificate Order.
     */
    distinguishedName?: pulumi.Input<string>;
    /**
     * Certificate key size.  Defaults to 2048.
     */
    keySize?: pulumi.Input<number>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created. Currently the only valid value is `global`.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the certificate. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Certificate product type, such as `Standard` or `WildCard`.
     */
    productType?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the certificate. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Duration in years (must be between `1` and `3`).  Defaults to `1`.
     */
    validityInYears?: pulumi.Input<number>;
}
