import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Attestation Provider.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleProvider = new azure.attestation.Provider("exampleProvider", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     policySigningCertificateData: fs.readFileSync("./example/cert.pem"),
 * });
 * ```
 *
 * ## Import
 *
 * Attestation Providers can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:attestation/provider:Provider example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Attestation/attestationProviders/provider1
 * ```
 */
export declare class Provider extends pulumi.CustomResource {
    /**
     * Get an existing Provider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProviderState, opts?: pulumi.CustomResourceOptions): Provider;
    /**
     * Returns true if the given object is an instance of Provider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Provider;
    /**
     * The URI of the Attestation Service.
     */
    readonly attestationUri: pulumi.Output<string>;
    /**
     * The Azure Region where the Attestation Provider should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Attestation Provider. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A valid X.509 certificate (Section 4 of [RFC4648](https://tools.ietf.org/html/rfc4648)). Changing this forces a new resource to be created.
     */
    readonly policySigningCertificateData: pulumi.Output<string | undefined>;
    /**
     * The name of the Resource Group where the attestation provider should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Attestation Provider.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Trust model used for the Attestation Service.
     */
    readonly trustModel: pulumi.Output<string>;
    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProviderArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Provider resources.
 */
export interface ProviderState {
    /**
     * The URI of the Attestation Service.
     */
    attestationUri?: pulumi.Input<string>;
    /**
     * The Azure Region where the Attestation Provider should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Attestation Provider. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A valid X.509 certificate (Section 4 of [RFC4648](https://tools.ietf.org/html/rfc4648)). Changing this forces a new resource to be created.
     */
    policySigningCertificateData?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the attestation provider should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Attestation Provider.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Trust model used for the Attestation Service.
     */
    trustModel?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * The Azure Region where the Attestation Provider should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Attestation Provider. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A valid X.509 certificate (Section 4 of [RFC4648](https://tools.ietf.org/html/rfc4648)). Changing this forces a new resource to be created.
     */
    policySigningCertificateData?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the attestation provider should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Attestation Provider.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
