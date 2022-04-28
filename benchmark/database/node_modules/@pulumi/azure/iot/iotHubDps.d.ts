import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an IotHub Device Provisioning Service.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleIotHubDps = new azure.iot.IotHubDps("exampleIotHubDps", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     allocationPolicy: "Hashed",
 *     sku: {
 *         name: "S1",
 *         capacity: "1",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * IoT Device Provisioning Service can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:iot/iotHubDps:IotHubDps example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Devices/provisioningServices/example
 * ```
 */
export declare class IotHubDps extends pulumi.CustomResource {
    /**
     * Get an existing IotHubDps resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IotHubDpsState, opts?: pulumi.CustomResourceOptions): IotHubDps;
    /**
     * Returns true if the given object is an instance of IotHubDps.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IotHubDps;
    /**
     * The allocation policy of the IoT Device Provisioning Service (`Hashed`, `GeoLatency` or `Static`). Defaults to `Hashed`.
     */
    readonly allocationPolicy: pulumi.Output<string | undefined>;
    /**
     * The device endpoint of the IoT Device Provisioning Service.
     */
    readonly deviceProvisioningHostName: pulumi.Output<string>;
    /**
     * The unique identifier of the IoT Device Provisioning Service.
     */
    readonly idScope: pulumi.Output<string>;
    /**
     * An `ipFilterRule` block as defined below.
     */
    readonly ipFilterRules: pulumi.Output<outputs.iot.IotHubDpsIpFilterRule[] | undefined>;
    /**
     * A `linkedHub` block as defined below.
     */
    readonly linkedHubs: pulumi.Output<outputs.iot.IotHubDpsLinkedHub[] | undefined>;
    /**
     * Specifies the supported Azure location where the resource has to be created. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Whether requests from Public Network are allowed. Defaults to `true`.
     */
    readonly publicNetworkAccessEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource group under which the Iot Device Provisioning Service resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The service endpoint of the IoT Device Provisioning Service.
     */
    readonly serviceOperationsHostName: pulumi.Output<string>;
    /**
     * A `sku` block as defined below.
     */
    readonly sku: pulumi.Output<outputs.iot.IotHubDpsSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a IotHubDps resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotHubDpsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IotHubDps resources.
 */
export interface IotHubDpsState {
    /**
     * The allocation policy of the IoT Device Provisioning Service (`Hashed`, `GeoLatency` or `Static`). Defaults to `Hashed`.
     */
    allocationPolicy?: pulumi.Input<string>;
    /**
     * The device endpoint of the IoT Device Provisioning Service.
     */
    deviceProvisioningHostName?: pulumi.Input<string>;
    /**
     * The unique identifier of the IoT Device Provisioning Service.
     */
    idScope?: pulumi.Input<string>;
    /**
     * An `ipFilterRule` block as defined below.
     */
    ipFilterRules?: pulumi.Input<pulumi.Input<inputs.iot.IotHubDpsIpFilterRule>[]>;
    /**
     * A `linkedHub` block as defined below.
     */
    linkedHubs?: pulumi.Input<pulumi.Input<inputs.iot.IotHubDpsLinkedHub>[]>;
    /**
     * Specifies the supported Azure location where the resource has to be created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether requests from Public Network are allowed. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the resource group under which the Iot Device Provisioning Service resource has to be created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The service endpoint of the IoT Device Provisioning Service.
     */
    serviceOperationsHostName?: pulumi.Input<string>;
    /**
     * A `sku` block as defined below.
     */
    sku?: pulumi.Input<inputs.iot.IotHubDpsSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a IotHubDps resource.
 */
export interface IotHubDpsArgs {
    /**
     * The allocation policy of the IoT Device Provisioning Service (`Hashed`, `GeoLatency` or `Static`). Defaults to `Hashed`.
     */
    allocationPolicy?: pulumi.Input<string>;
    /**
     * An `ipFilterRule` block as defined below.
     */
    ipFilterRules?: pulumi.Input<pulumi.Input<inputs.iot.IotHubDpsIpFilterRule>[]>;
    /**
     * A `linkedHub` block as defined below.
     */
    linkedHubs?: pulumi.Input<pulumi.Input<inputs.iot.IotHubDpsLinkedHub>[]>;
    /**
     * Specifies the supported Azure location where the resource has to be created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Iot Device Provisioning Service resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether requests from Public Network are allowed. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the resource group under which the Iot Device Provisioning Service resource has to be created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `sku` block as defined below.
     */
    sku: pulumi.Input<inputs.iot.IotHubDpsSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
