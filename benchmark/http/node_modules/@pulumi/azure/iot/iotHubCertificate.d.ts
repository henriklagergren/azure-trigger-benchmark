import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an IotHub Device Provisioning Service Certificate.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleIotHubDps = new azure.iot.IotHubDps("exampleIotHubDps", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: {
 *         name: "S1",
 *         capacity: "1",
 *     },
 * });
 * const exampleIotHubCertificate = new azure.iot.IotHubCertificate("exampleIotHubCertificate", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     iotDpsName: exampleIotHubDps.name,
 *     certificateContent: Buffer.from(fs.readFileSync("example.cer"), 'binary').toString('base64'),
 * });
 * ```
 *
 * ## Import
 *
 * IoTHub Device Provisioning Service Certificates can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:iot/iotHubCertificate:IotHubCertificate example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Devices/provisioningServices/example/certificates/example
 * ```
 */
export declare class IotHubCertificate extends pulumi.CustomResource {
    /**
     * Get an existing IotHubCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IotHubCertificateState, opts?: pulumi.CustomResourceOptions): IotHubCertificate;
    /**
     * Returns true if the given object is an instance of IotHubCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IotHubCertificate;
    /**
     * The Base-64 representation of the X509 leaf certificate .cer file or just a .pem file content.
     */
    readonly certificateContent: pulumi.Output<string>;
    /**
     * The name of the IoT Device Provisioning Service that this certificate will be attached to. Changing this forces a new resource to be created.
     */
    readonly iotDpsName: pulumi.Output<string>;
    /**
     * Specifies the name of the Iot Device Provisioning Service Certificate resource. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group under which the Iot Device Provisioning Service Certificate resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a IotHubCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotHubCertificateArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IotHubCertificate resources.
 */
export interface IotHubCertificateState {
    /**
     * The Base-64 representation of the X509 leaf certificate .cer file or just a .pem file content.
     */
    certificateContent?: pulumi.Input<string>;
    /**
     * The name of the IoT Device Provisioning Service that this certificate will be attached to. Changing this forces a new resource to be created.
     */
    iotDpsName?: pulumi.Input<string>;
    /**
     * Specifies the name of the Iot Device Provisioning Service Certificate resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the Iot Device Provisioning Service Certificate resource has to be created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IotHubCertificate resource.
 */
export interface IotHubCertificateArgs {
    /**
     * The Base-64 representation of the X509 leaf certificate .cer file or just a .pem file content.
     */
    certificateContent: pulumi.Input<string>;
    /**
     * The name of the IoT Device Provisioning Service that this certificate will be attached to. Changing this forces a new resource to be created.
     */
    iotDpsName: pulumi.Input<string>;
    /**
     * Specifies the name of the Iot Device Provisioning Service Certificate resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the Iot Device Provisioning Service Certificate resource has to be created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
