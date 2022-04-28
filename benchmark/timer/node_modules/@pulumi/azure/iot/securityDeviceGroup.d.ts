import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Iot Security Device Group.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleIoTHub = new azure.iot.IoTHub("exampleIoTHub", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: {
 *         name: "S1",
 *         capacity: "1",
 *     },
 * });
 * const exampleSecuritySolution = new azure.iot.SecuritySolution("exampleSecuritySolution", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     displayName: "Iot Security Solution",
 *     iothubIds: [exampleIoTHub.id],
 * });
 * const exampleSecurityDeviceGroup = new azure.iot.SecurityDeviceGroup("exampleSecurityDeviceGroup", {
 *     iothubId: exampleIoTHub.id,
 *     allowRule: {
 *         connectionToIpsNotAlloweds: ["10.0.0.0/24"],
 *     },
 *     rangeRules: [{
 *         type: "ActiveConnectionsNotInAllowedRange",
 *         min: 0,
 *         max: 30,
 *         duration: "PT5M",
 *     }],
 * }, {
 *     dependsOn: [exampleSecuritySolution],
 * });
 * ```
 *
 * ## Import
 *
 * Iot Security Device Group can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:iot/securityDeviceGroup:SecurityDeviceGroup example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resGroup1/providers/Microsoft.Devices/iotHubs/hub1/providers/Microsoft.Security/deviceSecurityGroups/group1
 * ```
 */
export declare class SecurityDeviceGroup extends pulumi.CustomResource {
    /**
     * Get an existing SecurityDeviceGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityDeviceGroupState, opts?: pulumi.CustomResourceOptions): SecurityDeviceGroup;
    /**
     * Returns true if the given object is an instance of SecurityDeviceGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SecurityDeviceGroup;
    /**
     * an `allowRule` blocks as defined below.
     */
    readonly allowRule: pulumi.Output<outputs.iot.SecurityDeviceGroupAllowRule | undefined>;
    /**
     * The ID of the IoT Hub which to link the Security Device Group to. Changing this forces a new resource to be created.
     */
    readonly iothubId: pulumi.Output<string>;
    /**
     * Specifies the name of the Device Security Group. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * One or more `rangeRule` blocks as defined below.
     */
    readonly rangeRules: pulumi.Output<outputs.iot.SecurityDeviceGroupRangeRule[] | undefined>;
    /**
     * Create a SecurityDeviceGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityDeviceGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SecurityDeviceGroup resources.
 */
export interface SecurityDeviceGroupState {
    /**
     * an `allowRule` blocks as defined below.
     */
    allowRule?: pulumi.Input<inputs.iot.SecurityDeviceGroupAllowRule>;
    /**
     * The ID of the IoT Hub which to link the Security Device Group to. Changing this forces a new resource to be created.
     */
    iothubId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Device Security Group. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `rangeRule` blocks as defined below.
     */
    rangeRules?: pulumi.Input<pulumi.Input<inputs.iot.SecurityDeviceGroupRangeRule>[]>;
}
/**
 * The set of arguments for constructing a SecurityDeviceGroup resource.
 */
export interface SecurityDeviceGroupArgs {
    /**
     * an `allowRule` blocks as defined below.
     */
    allowRule?: pulumi.Input<inputs.iot.SecurityDeviceGroupAllowRule>;
    /**
     * The ID of the IoT Hub which to link the Security Device Group to. Changing this forces a new resource to be created.
     */
    iothubId: pulumi.Input<string>;
    /**
     * Specifies the name of the Device Security Group. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `rangeRule` blocks as defined below.
     */
    rangeRules?: pulumi.Input<pulumi.Input<inputs.iot.SecurityDeviceGroupRangeRule>[]>;
}
