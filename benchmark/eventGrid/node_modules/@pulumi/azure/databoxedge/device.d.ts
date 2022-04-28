import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Databox Edge Device.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleDevice = new azure.databoxedge.Device("exampleDevice", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     skuName: "EdgeP_Base-Standard",
 * });
 * ```
 *
 * ## Import
 *
 * Databox Edge Devices can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:databoxedge/device:Device example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/device1
 * ```
 */
export declare class Device extends pulumi.CustomResource {
    /**
     * Get an existing Device resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DeviceState, opts?: pulumi.CustomResourceOptions): Device;
    /**
     * Returns true if the given object is an instance of Device.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Device;
    /**
     * A `deviceProperties` block as defined below.
     */
    readonly deviceProperties: pulumi.Output<outputs.databoxedge.DeviceDeviceProperty[]>;
    /**
     * The Azure Region where the Databox Edge Device should exist. Changing this forces a new Databox Edge Device to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Databox Edge Device. Changing this forces a new Databox Edge Device to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Databox Edge Device should exist. Changing this forces a new Databox Edge Device to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The `skuName` is comprised of two segments separated by a hyphen (e.g. `TEA_1Node_UPS_Heater-Standard`). The first segment of the `skuName` defines the `name` of the sku, possible values are `Gateway`, `EdgeMR_Mini`, `EdgeP_Base`, `EdgeP_High`, `EdgePR_Base`, `EdgePR_Base_UPS`, `GPU`, `RCA_Large`, `RCA_Small`, `RDC`, `TCA_Large`, `TCA_Small`, `TDC`, `TEA_1Node`, `TEA_1Node_UPS`, `TEA_1Node_Heater`, `TEA_1Node_UPS_Heater`, `TEA_4Node_Heater`, `TEA_4Node_UPS_Heater` or `TMA`. The second segment defines the `tier` of the `skuName`, possible values are `Standard`. For more information see the product documentation. Changing this forces a new Databox Edge Device to be created.
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Databox Edge Device.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Device resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeviceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Device resources.
 */
export interface DeviceState {
    /**
     * A `deviceProperties` block as defined below.
     */
    deviceProperties?: pulumi.Input<pulumi.Input<inputs.databoxedge.DeviceDeviceProperty>[]>;
    /**
     * The Azure Region where the Databox Edge Device should exist. Changing this forces a new Databox Edge Device to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Databox Edge Device. Changing this forces a new Databox Edge Device to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Databox Edge Device should exist. Changing this forces a new Databox Edge Device to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The `skuName` is comprised of two segments separated by a hyphen (e.g. `TEA_1Node_UPS_Heater-Standard`). The first segment of the `skuName` defines the `name` of the sku, possible values are `Gateway`, `EdgeMR_Mini`, `EdgeP_Base`, `EdgeP_High`, `EdgePR_Base`, `EdgePR_Base_UPS`, `GPU`, `RCA_Large`, `RCA_Small`, `RDC`, `TCA_Large`, `TCA_Small`, `TDC`, `TEA_1Node`, `TEA_1Node_UPS`, `TEA_1Node_Heater`, `TEA_1Node_UPS_Heater`, `TEA_4Node_Heater`, `TEA_4Node_UPS_Heater` or `TMA`. The second segment defines the `tier` of the `skuName`, possible values are `Standard`. For more information see the product documentation. Changing this forces a new Databox Edge Device to be created.
     */
    skuName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Databox Edge Device.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Device resource.
 */
export interface DeviceArgs {
    /**
     * The Azure Region where the Databox Edge Device should exist. Changing this forces a new Databox Edge Device to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Databox Edge Device. Changing this forces a new Databox Edge Device to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Databox Edge Device should exist. Changing this forces a new Databox Edge Device to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The `skuName` is comprised of two segments separated by a hyphen (e.g. `TEA_1Node_UPS_Heater-Standard`). The first segment of the `skuName` defines the `name` of the sku, possible values are `Gateway`, `EdgeMR_Mini`, `EdgeP_Base`, `EdgeP_High`, `EdgePR_Base`, `EdgePR_Base_UPS`, `GPU`, `RCA_Large`, `RCA_Small`, `RDC`, `TCA_Large`, `TCA_Small`, `TDC`, `TEA_1Node`, `TEA_1Node_UPS`, `TEA_1Node_Heater`, `TEA_1Node_UPS_Heater`, `TEA_4Node_Heater`, `TEA_4Node_UPS_Heater` or `TMA`. The second segment defines the `tier` of the `skuName`, possible values are `Standard`. For more information see the product documentation. Changing this forces a new Databox Edge Device to be created.
     */
    skuName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Databox Edge Device.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
