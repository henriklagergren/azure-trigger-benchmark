import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an App Service Public Certificate.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePlan = new azure.appservice.Plan("examplePlan", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         tier: "Standard",
 *         size: "S1",
 *     },
 * });
 * const exampleAppService = new azure.appservice.AppService("exampleAppService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     appServicePlanId: examplePlan.id,
 * });
 * const examplePublicCertificate = new azure.appservice.PublicCertificate("examplePublicCertificate", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     appServiceName: exampleAppService.name,
 *     certificateName: "example-public-certificate",
 *     certificateLocation: "Unknown",
 *     blob: Buffer.from(fs.readFileSync("app_service_public_certificate.cer"), 'binary').toString('base64'),
 * });
 * ```
 *
 * ## Import
 *
 * App Service Public Certificates can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appservice/publicCertificate:PublicCertificate example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Web/sites/site1/publicCertificates/publicCertificate1
 * ```
 */
export declare class PublicCertificate extends pulumi.CustomResource {
    /**
     * Get an existing PublicCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PublicCertificateState, opts?: pulumi.CustomResourceOptions): PublicCertificate;
    /**
     * Returns true if the given object is an instance of PublicCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PublicCertificate;
    /**
     * The name of the App Service. Changing this forces a new App Service Public Certificate to be created.
     */
    readonly appServiceName: pulumi.Output<string>;
    /**
     * The base64-encoded contents of the certificate. Changing this forces a new App Service Public Certificate to be created.
     */
    readonly blob: pulumi.Output<string>;
    /**
     * The location of the certificate. Possible values are `CurrentUserMy`, `LocalMachineMy` and `Unknown`.
     */
    readonly certificateLocation: pulumi.Output<string>;
    /**
     * The name of the public certificate. Changing this forces a new App Service Public Certificate to be created.
     */
    readonly certificateName: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the App Service Public Certificate should exist. Changing this forces a new App Service Public Certificate to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The thumbprint of the public certificate.
     */
    readonly thumbprint: pulumi.Output<string>;
    /**
     * Create a PublicCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PublicCertificateArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering PublicCertificate resources.
 */
export interface PublicCertificateState {
    /**
     * The name of the App Service. Changing this forces a new App Service Public Certificate to be created.
     */
    appServiceName?: pulumi.Input<string>;
    /**
     * The base64-encoded contents of the certificate. Changing this forces a new App Service Public Certificate to be created.
     */
    blob?: pulumi.Input<string>;
    /**
     * The location of the certificate. Possible values are `CurrentUserMy`, `LocalMachineMy` and `Unknown`.
     */
    certificateLocation?: pulumi.Input<string>;
    /**
     * The name of the public certificate. Changing this forces a new App Service Public Certificate to be created.
     */
    certificateName?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the App Service Public Certificate should exist. Changing this forces a new App Service Public Certificate to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The thumbprint of the public certificate.
     */
    thumbprint?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a PublicCertificate resource.
 */
export interface PublicCertificateArgs {
    /**
     * The name of the App Service. Changing this forces a new App Service Public Certificate to be created.
     */
    appServiceName: pulumi.Input<string>;
    /**
     * The base64-encoded contents of the certificate. Changing this forces a new App Service Public Certificate to be created.
     */
    blob: pulumi.Input<string>;
    /**
     * The location of the certificate. Possible values are `CurrentUserMy`, `LocalMachineMy` and `Unknown`.
     */
    certificateLocation: pulumi.Input<string>;
    /**
     * The name of the public certificate. Changing this forces a new App Service Public Certificate to be created.
     */
    certificateName: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the App Service Public Certificate should exist. Changing this forces a new App Service Public Certificate to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
