import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Databox Edge Order.
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
 * const exampleOrder = new azure.databoxedge.Order("exampleOrder", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     deviceName: exampleDevice.name,
 *     contact: {
 *         companyName: "Contoso Corporation",
 *         name: "Bart",
 *         emailLists: ["bart@example.com"],
 *         phone: "(800) 867-5309",
 *     },
 *     shipmentAddress: {
 *         addresses: ["740 Evergreen Terrace"],
 *         city: "Springfield",
 *         country: "United States",
 *         postalCode: "97403",
 *         state: "OR",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Databox Edge Orders can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:databoxedge/order:Order example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/device1/orders/default
 * ```
 */
export declare class Order extends pulumi.CustomResource {
    /**
     * Get an existing Order resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrderState, opts?: pulumi.CustomResourceOptions): Order;
    /**
     * Returns true if the given object is an instance of Order.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Order;
    /**
     * A `contact` block as defined below.
     */
    readonly contact: pulumi.Output<outputs.databoxedge.OrderContact>;
    /**
     * The name of the Databox Edge Device this order is for. Changing this forces a new Databox Edge Order to be created.
     */
    readonly deviceName: pulumi.Output<string>;
    /**
     * The contact person name. Changing this forces a new Databox Edge Order to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Databox Edge Order should exist. Changing this forces a new Databox Edge Order to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Tracking information for the package returned from the customer whether it has an original or a replacement device. A `returnTracking` block as defined below.
     */
    readonly returnTrackings: pulumi.Output<outputs.databoxedge.OrderReturnTracking[]>;
    /**
     * Serial number of the device being tracked.
     */
    readonly serialNumber: pulumi.Output<string>;
    /**
     * A `shipmentAddress block as defined below.
     */
    readonly shipmentAddress: pulumi.Output<outputs.databoxedge.OrderShipmentAddress>;
    /**
     * List of status changes in the order. A `shipmentHistory` block as defined below.
     */
    readonly shipmentHistories: pulumi.Output<outputs.databoxedge.OrderShipmentHistory[]>;
    /**
     * Tracking information for the package delivered to the customer whether it has an original or a replacement device. A `shipmentTracking` block as defined below.
     */
    readonly shipmentTrackings: pulumi.Output<outputs.databoxedge.OrderShipmentTracking[]>;
    /**
     * The current status of the order. A `status` block as defined below.
     */
    readonly statuses: pulumi.Output<outputs.databoxedge.OrderStatus[]>;
    /**
     * Create a Order resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrderArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Order resources.
 */
export interface OrderState {
    /**
     * A `contact` block as defined below.
     */
    contact?: pulumi.Input<inputs.databoxedge.OrderContact>;
    /**
     * The name of the Databox Edge Device this order is for. Changing this forces a new Databox Edge Order to be created.
     */
    deviceName?: pulumi.Input<string>;
    /**
     * The contact person name. Changing this forces a new Databox Edge Order to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Databox Edge Order should exist. Changing this forces a new Databox Edge Order to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Tracking information for the package returned from the customer whether it has an original or a replacement device. A `returnTracking` block as defined below.
     */
    returnTrackings?: pulumi.Input<pulumi.Input<inputs.databoxedge.OrderReturnTracking>[]>;
    /**
     * Serial number of the device being tracked.
     */
    serialNumber?: pulumi.Input<string>;
    /**
     * A `shipmentAddress block as defined below.
     */
    shipmentAddress?: pulumi.Input<inputs.databoxedge.OrderShipmentAddress>;
    /**
     * List of status changes in the order. A `shipmentHistory` block as defined below.
     */
    shipmentHistories?: pulumi.Input<pulumi.Input<inputs.databoxedge.OrderShipmentHistory>[]>;
    /**
     * Tracking information for the package delivered to the customer whether it has an original or a replacement device. A `shipmentTracking` block as defined below.
     */
    shipmentTrackings?: pulumi.Input<pulumi.Input<inputs.databoxedge.OrderShipmentTracking>[]>;
    /**
     * The current status of the order. A `status` block as defined below.
     */
    statuses?: pulumi.Input<pulumi.Input<inputs.databoxedge.OrderStatus>[]>;
}
/**
 * The set of arguments for constructing a Order resource.
 */
export interface OrderArgs {
    /**
     * A `contact` block as defined below.
     */
    contact: pulumi.Input<inputs.databoxedge.OrderContact>;
    /**
     * The name of the Databox Edge Device this order is for. Changing this forces a new Databox Edge Order to be created.
     */
    deviceName: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Databox Edge Order should exist. Changing this forces a new Databox Edge Order to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `shipmentAddress block as defined below.
     */
    shipmentAddress: pulumi.Input<inputs.databoxedge.OrderShipmentAddress>;
}
