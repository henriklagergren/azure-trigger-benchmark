import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a certificate in an Azure Batch account.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleBatch_accountAccount = new azure.batch.Account("exampleBatch/accountAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     poolAllocationMode: "BatchService",
 *     storageAccountId: exampleAccount.id,
 *     tags: {
 *         env: "test",
 *     },
 * });
 * const exampleCertificate = new azure.batch.Certificate("exampleCertificate", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     accountName: exampleBatch / accountAccount.name,
 *     certificate: Buffer.from(fs.readFileSync("certificate.pfx"), 'binary').toString('base64'),
 *     format: "Pfx",
 *     password: "password",
 *     thumbprint: "42C107874FD0E4A9583292A2F1098E8FE4B2EDDA",
 *     thumbprintAlgorithm: "SHA1",
 * });
 * ```
 *
 * ## Import
 *
 * Batch Certificates can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:batch/certificate:Certificate example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example-rg/providers/Microsoft.Batch/batchAccounts/batch1/certificates/certificate1
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
     * Specifies the name of the Batch account. Changing this forces a new resource to be created.
     */
    readonly accountName: pulumi.Output<string>;
    /**
     * The base64-encoded contents of the certificate.
     */
    readonly certificate: pulumi.Output<string>;
    /**
     * The format of the certificate. Possible values are `Cer` or `Pfx`.
     */
    readonly format: pulumi.Output<string>;
    /**
     * The generated name of the certificate.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The password to access the certificate's private key. This can only be specified when `format` is `Pfx`.
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * The public key of the certificate.
     */
    readonly publicData: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Batch account. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The thumbprint of the certificate. At this time the only supported value is 'SHA1'.
     */
    readonly thumbprint: pulumi.Output<string>;
    readonly thumbprintAlgorithm: pulumi.Output<string>;
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
     * Specifies the name of the Batch account. Changing this forces a new resource to be created.
     */
    accountName?: pulumi.Input<string>;
    /**
     * The base64-encoded contents of the certificate.
     */
    certificate?: pulumi.Input<string>;
    /**
     * The format of the certificate. Possible values are `Cer` or `Pfx`.
     */
    format?: pulumi.Input<string>;
    /**
     * The generated name of the certificate.
     */
    name?: pulumi.Input<string>;
    /**
     * The password to access the certificate's private key. This can only be specified when `format` is `Pfx`.
     */
    password?: pulumi.Input<string>;
    /**
     * The public key of the certificate.
     */
    publicData?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Batch account. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The thumbprint of the certificate. At this time the only supported value is 'SHA1'.
     */
    thumbprint?: pulumi.Input<string>;
    thumbprintAlgorithm?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Certificate resource.
 */
export interface CertificateArgs {
    /**
     * Specifies the name of the Batch account. Changing this forces a new resource to be created.
     */
    accountName: pulumi.Input<string>;
    /**
     * The base64-encoded contents of the certificate.
     */
    certificate: pulumi.Input<string>;
    /**
     * The format of the certificate. Possible values are `Cer` or `Pfx`.
     */
    format: pulumi.Input<string>;
    /**
     * The password to access the certificate's private key. This can only be specified when `format` is `Pfx`.
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Batch account. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The thumbprint of the certificate. At this time the only supported value is 'SHA1'.
     */
    thumbprint: pulumi.Input<string>;
    thumbprintAlgorithm: pulumi.Input<string>;
}
