import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Virtual Hub within a Virtual WAN.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualWan = new azure.network.VirtualWan("exampleVirtualWan", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * const exampleVirtualHub = new azure.network.VirtualHub("exampleVirtualHub", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     virtualWanId: exampleVirtualWan.id,
 *     addressPrefix: "10.0.0.0/23",
 * });
 * ```
 *
 * ## Import
 *
 * Virtual Hub's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/virtualHub:VirtualHub example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/virtualHubs/hub1
 * ```
 */
export declare class VirtualHub extends pulumi.CustomResource {
    /**
     * Get an existing VirtualHub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualHubState, opts?: pulumi.CustomResourceOptions): VirtualHub;
    /**
     * Returns true if the given object is an instance of VirtualHub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualHub;
    /**
     * The Address Prefix which should be used for this Virtual Hub. Changing this forces a new resource to be created. [The address prefix subnet cannot be smaller than a `/24`. Azure recommends using a `/23`](https://docs.microsoft.com/en-us/azure/virtual-wan/virtual-wan-faq#what-is-the-recommended-hub-address-space-during-hub-creation).
     */
    readonly addressPrefix: pulumi.Output<string | undefined>;
    /**
     * The ID of the default Route Table in the Virtual Hub.
     */
    readonly defaultRouteTableId: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the Virtual Hub should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the Virtual Hub. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the name of the Resource Group where the Virtual Hub should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * One or more `route` blocks as defined below.
     */
    readonly routes: pulumi.Output<outputs.network.VirtualHubRoute[] | undefined>;
    /**
     * The sku of the Virtual Hub. Possible values are `Basic` and `Standard`. Changing this forces a new resource to be created.
     */
    readonly sku: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the Virtual Hub.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The ID of a Virtual WAN within which the Virtual Hub should be created. Changing this forces a new resource to be created.
     */
    readonly virtualWanId: pulumi.Output<string | undefined>;
    /**
     * Create a VirtualHub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualHubArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering VirtualHub resources.
 */
export interface VirtualHubState {
    /**
     * The Address Prefix which should be used for this Virtual Hub. Changing this forces a new resource to be created. [The address prefix subnet cannot be smaller than a `/24`. Azure recommends using a `/23`](https://docs.microsoft.com/en-us/azure/virtual-wan/virtual-wan-faq#what-is-the-recommended-hub-address-space-during-hub-creation).
     */
    addressPrefix?: pulumi.Input<string>;
    /**
     * The ID of the default Route Table in the Virtual Hub.
     */
    defaultRouteTableId?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the Virtual Hub should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Virtual Hub. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group where the Virtual Hub should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * One or more `route` blocks as defined below.
     */
    routes?: pulumi.Input<pulumi.Input<inputs.network.VirtualHubRoute>[]>;
    /**
     * The sku of the Virtual Hub. Possible values are `Basic` and `Standard`. Changing this forces a new resource to be created.
     */
    sku?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the Virtual Hub.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The ID of a Virtual WAN within which the Virtual Hub should be created. Changing this forces a new resource to be created.
     */
    virtualWanId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a VirtualHub resource.
 */
export interface VirtualHubArgs {
    /**
     * The Address Prefix which should be used for this Virtual Hub. Changing this forces a new resource to be created. [The address prefix subnet cannot be smaller than a `/24`. Azure recommends using a `/23`](https://docs.microsoft.com/en-us/azure/virtual-wan/virtual-wan-faq#what-is-the-recommended-hub-address-space-during-hub-creation).
     */
    addressPrefix?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the Virtual Hub should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Virtual Hub. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the name of the Resource Group where the Virtual Hub should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * One or more `route` blocks as defined below.
     */
    routes?: pulumi.Input<pulumi.Input<inputs.network.VirtualHubRoute>[]>;
    /**
     * The sku of the Virtual Hub. Possible values are `Basic` and `Standard`. Changing this forces a new resource to be created.
     */
    sku?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the Virtual Hub.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The ID of a Virtual WAN within which the Virtual Hub should be created. Changing this forces a new resource to be created.
     */
    virtualWanId?: pulumi.Input<string>;
}
