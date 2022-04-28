import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an IotHub Certificate.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleIoTHub = new azure.iot.IoTHub("exampleIoTHub", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: {
 *         name: "B1",
 *         capacity: "1",
 *     },
 * });
 * const exampleCertificate = new azure.iot.Certificate("exampleCertificate", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     iothubName: exampleIoTHub.name,
 *     isVerified: true,
 *     certificateContent: Buffer.from(fs.readFileSync("example.cer"), 'binary').toString('base64'),
 * });
 * ```
 *
 * ## Import
 *
 * IoTHub Certificates can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:iot/certificate:Certificate example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Devices/IotHubs/example/Certificates/example
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
     * The Base-64 representation of the X509 leaf certificate .cer file or just a .pem file content.
     */
    readonly certificateContent: pulumi.Output<string>;
    /**
     * The name of the IoTHub that this certificate will be attached to. Changing this forces a new resource to be created.
     */
    readonly iothubName: pulumi.Output<string>;
    /**
     * Is the certificate verified? Defaults to `false`.
     */
    readonly isVerified: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the name of the IotHub Certificate resource. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group under which the IotHub Certificate resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
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
     * The Base-64 representation of the X509 leaf certificate .cer file or just a .pem file content.
     */
    certificateContent?: pulumi.Input<string>;
    /**
     * The name of the IoTHub that this certificate will be attached to. Changing this forces a new resource to be created.
     */
    iothubName?: pulumi.Input<string>;
    /**
     * Is the certificate verified? Defaults to `false`.
     */
    isVerified?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the IotHub Certificate resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the IotHub Certificate resource has to be created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Certificate resource.
 */
export interface CertificateArgs {
    /**
     * The Base-64 representation of the X509 leaf certificate .cer file or just a .pem file content.
     */
    certificateContent: pulumi.Input<string>;
    /**
     * The name of the IoTHub that this certificate will be attached to. Changing this forces a new resource to be created.
     */
    iothubName: pulumi.Input<string>;
    /**
     * Is the certificate verified? Defaults to `false`.
     */
    isVerified?: pulumi.Input<boolean>;
    /**
     * Specifies the name of the IotHub Certificate resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the IotHub Certificate resource has to be created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
