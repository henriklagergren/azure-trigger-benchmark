import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Express Route Port.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West US"});
 * const exampleExpressRoutePort = new azure.network.ExpressRoutePort("exampleExpressRoutePort", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     peeringLocation: "Airtel-Chennai-CLS",
 *     bandwidthInGbps: 10,
 *     encapsulation: "Dot1Q",
 * });
 * ```
 *
 * ## Import
 *
 * Express Route Ports can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/expressRoutePort:ExpressRoutePort example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/expressRoutePorts/port1
 * ```
 */
export declare class ExpressRoutePort extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRoutePort resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ExpressRoutePortState, opts?: pulumi.CustomResourceOptions): ExpressRoutePort;
    /**
     * Returns true if the given object is an instance of ExpressRoutePort.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ExpressRoutePort;
    /**
     * Bandwidth of the Express Route Port in Gbps. Changing this forces a new Express Route Port to be created.
     */
    readonly bandwidthInGbps: pulumi.Output<number>;
    /**
     * The encapsulation method used for the Express Route Port. Changing this forces a new Express Route Port to be created. Possible values are: `Dot1Q`, `QinQ`.
     */
    readonly encapsulation: pulumi.Output<string>;
    /**
     * The EtherType of the Express Route Port.
     */
    readonly ethertype: pulumi.Output<string>;
    /**
     * The resource GUID of the Express Route Port.
     */
    readonly guid: pulumi.Output<string>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.network.ExpressRoutePortIdentity | undefined>;
    /**
     * A list of `link` blocks as defined below.
     */
    readonly link1: pulumi.Output<outputs.network.ExpressRoutePortLink1>;
    /**
     * A list of `link` blocks as defined below.
     */
    readonly link2: pulumi.Output<outputs.network.ExpressRoutePortLink2>;
    /**
     * The Azure Region where the Express Route Port should exist. Changing this forces a new Express Route Port to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The maximum transmission unit of the Express Route Port.
     */
    readonly mtu: pulumi.Output<string>;
    /**
     * The name which should be used for this Express Route Port. Changing this forces a new Express Route Port to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the peering location that this Express Route Port is physically mapped to. Changing this forces a new Express Route Port to be created.
     */
    readonly peeringLocation: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Express Route Port should exist. Changing this forces a new Express Route Port to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Express Route Port.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a ExpressRoutePort resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRoutePortArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ExpressRoutePort resources.
 */
export interface ExpressRoutePortState {
    /**
     * Bandwidth of the Express Route Port in Gbps. Changing this forces a new Express Route Port to be created.
     */
    bandwidthInGbps?: pulumi.Input<number>;
    /**
     * The encapsulation method used for the Express Route Port. Changing this forces a new Express Route Port to be created. Possible values are: `Dot1Q`, `QinQ`.
     */
    encapsulation?: pulumi.Input<string>;
    /**
     * The EtherType of the Express Route Port.
     */
    ethertype?: pulumi.Input<string>;
    /**
     * The resource GUID of the Express Route Port.
     */
    guid?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.network.ExpressRoutePortIdentity>;
    /**
     * A list of `link` blocks as defined below.
     */
    link1?: pulumi.Input<inputs.network.ExpressRoutePortLink1>;
    /**
     * A list of `link` blocks as defined below.
     */
    link2?: pulumi.Input<inputs.network.ExpressRoutePortLink2>;
    /**
     * The Azure Region where the Express Route Port should exist. Changing this forces a new Express Route Port to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The maximum transmission unit of the Express Route Port.
     */
    mtu?: pulumi.Input<string>;
    /**
     * The name which should be used for this Express Route Port. Changing this forces a new Express Route Port to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the peering location that this Express Route Port is physically mapped to. Changing this forces a new Express Route Port to be created.
     */
    peeringLocation?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Express Route Port should exist. Changing this forces a new Express Route Port to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Express Route Port.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a ExpressRoutePort resource.
 */
export interface ExpressRoutePortArgs {
    /**
     * Bandwidth of the Express Route Port in Gbps. Changing this forces a new Express Route Port to be created.
     */
    bandwidthInGbps: pulumi.Input<number>;
    /**
     * The encapsulation method used for the Express Route Port. Changing this forces a new Express Route Port to be created. Possible values are: `Dot1Q`, `QinQ`.
     */
    encapsulation: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.network.ExpressRoutePortIdentity>;
    /**
     * A list of `link` blocks as defined below.
     */
    link1?: pulumi.Input<inputs.network.ExpressRoutePortLink1>;
    /**
     * A list of `link` blocks as defined below.
     */
    link2?: pulumi.Input<inputs.network.ExpressRoutePortLink2>;
    /**
     * The Azure Region where the Express Route Port should exist. Changing this forces a new Express Route Port to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Express Route Port. Changing this forces a new Express Route Port to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the peering location that this Express Route Port is physically mapped to. Changing this forces a new Express Route Port to be created.
     */
    peeringLocation: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Express Route Port should exist. Changing this forces a new Express Route Port to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Express Route Port.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
