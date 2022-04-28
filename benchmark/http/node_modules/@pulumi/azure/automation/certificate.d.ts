import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Automation Certificate.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.automation.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     skuName: "Basic",
 * });
 * const exampleCertificate = new azure.automation.Certificate("exampleCertificate", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     automationAccountName: exampleAccount.name,
 *     description: "This is an example certificate",
 *     base64: Buffer.from(fs.readFileSync("certificate.pfx"), 'binary').toString('base64'),
 *     exportable: true,
 * });
 * ```
 *
 * ## Import
 *
 * Automation Certificates can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:automation/certificate:Certificate certificate1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Automation/automationAccounts/account1/certificates/certificate1
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
     * The name of the automation account in which the Certificate is created. Changing this forces a new resource to be created.
     */
    readonly automationAccountName: pulumi.Output<string>;
    /**
     * Base64 encoded value of the certificate.
     */
    readonly base64: pulumi.Output<string>;
    /**
     * The description of this Automation Certificate.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The is exportable flag of the certificate.
     */
    readonly exportable: pulumi.Output<boolean>;
    /**
     * Specifies the name of the Certificate. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which the Certificate is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
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
     * The name of the automation account in which the Certificate is created. Changing this forces a new resource to be created.
     */
    automationAccountName?: pulumi.Input<string>;
    /**
     * Base64 encoded value of the certificate.
     */
    base64?: pulumi.Input<string>;
    /**
     * The description of this Automation Certificate.
     */
    description?: pulumi.Input<string>;
    /**
     * The is exportable flag of the certificate.
     */
    exportable?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the Certificate. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Certificate is created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
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
     * The name of the automation account in which the Certificate is created. Changing this forces a new resource to be created.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * Base64 encoded value of the certificate.
     */
    base64: pulumi.Input<string>;
    /**
     * The description of this Automation Certificate.
     */
    description?: pulumi.Input<string>;
    /**
     * The is exportable flag of the certificate.
     */
    exportable?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the Certificate. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Certificate is created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
