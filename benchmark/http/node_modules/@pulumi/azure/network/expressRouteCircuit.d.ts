import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an ExpressRoute circuit.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleExpressRouteCircuit = new azure.network.ExpressRouteCircuit("exampleExpressRouteCircuit", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     serviceProviderName: "Equinix",
 *     peeringLocation: "Silicon Valley",
 *     bandwidthInMbps: 50,
 *     sku: {
 *         tier: "Standard",
 *         family: "MeteredData",
 *     },
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * ExpressRoute circuits can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/expressRouteCircuit:ExpressRouteCircuit myExpressRoute /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/expressRouteCircuits/myExpressRoute
 * ```
 */
export declare class ExpressRouteCircuit extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRouteCircuit resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ExpressRouteCircuitState, opts?: pulumi.CustomResourceOptions): ExpressRouteCircuit;
    /**
     * Returns true if the given object is an instance of ExpressRouteCircuit.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ExpressRouteCircuit;
    /**
     * Allow the circuit to interact with classic (RDFE) resources. Defaults to `false`.
     */
    readonly allowClassicOperations: pulumi.Output<boolean | undefined>;
    /**
     * The bandwidth in Gbps of the circuit being created on the Express Route Port.
     */
    readonly bandwidthInGbps: pulumi.Output<number | undefined>;
    /**
     * The bandwidth in Mbps of the circuit being created on the Service Provider.
     */
    readonly bandwidthInMbps: pulumi.Output<number | undefined>;
    /**
     * The ID of the Express Route Port this Express Route Circuit is based on.
     */
    readonly expressRoutePortId: pulumi.Output<string | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the ExpressRoute circuit. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the peering location and **not** the Azure resource location. Changing this forces a new resource to be created.
     */
    readonly peeringLocation: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group in which to create the ExpressRoute circuit. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The string needed by the service provider to provision the ExpressRoute circuit.
     */
    readonly serviceKey: pulumi.Output<string>;
    /**
     * The name of the ExpressRoute Service Provider. Changing this forces a new resource to be created.
     */
    readonly serviceProviderName: pulumi.Output<string | undefined>;
    /**
     * The ExpressRoute circuit provisioning state from your chosen service provider. Possible values are "NotProvisioned", "Provisioning", "Provisioned", and "Deprovisioning".
     */
    readonly serviceProviderProvisioningState: pulumi.Output<string>;
    /**
     * A `sku` block for the ExpressRoute circuit as documented below.
     */
    readonly sku: pulumi.Output<outputs.network.ExpressRouteCircuitSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a ExpressRouteCircuit resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRouteCircuitArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ExpressRouteCircuit resources.
 */
export interface ExpressRouteCircuitState {
    /**
     * Allow the circuit to interact with classic (RDFE) resources. Defaults to `false`.
     */
    allowClassicOperations?: pulumi.Input<boolean>;
    /**
     * The bandwidth in Gbps of the circuit being created on the Express Route Port.
     */
    bandwidthInGbps?: pulumi.Input<number>;
    /**
     * The bandwidth in Mbps of the circuit being created on the Service Provider.
     */
    bandwidthInMbps?: pulumi.Input<number>;
    /**
     * The ID of the Express Route Port this Express Route Circuit is based on.
     */
    expressRoutePortId?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the ExpressRoute circuit. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the peering location and **not** the Azure resource location. Changing this forces a new resource to be created.
     */
    peeringLocation?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the ExpressRoute circuit. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The string needed by the service provider to provision the ExpressRoute circuit.
     */
    serviceKey?: pulumi.Input<string>;
    /**
     * The name of the ExpressRoute Service Provider. Changing this forces a new resource to be created.
     */
    serviceProviderName?: pulumi.Input<string>;
    /**
     * The ExpressRoute circuit provisioning state from your chosen service provider. Possible values are "NotProvisioned", "Provisioning", "Provisioned", and "Deprovisioning".
     */
    serviceProviderProvisioningState?: pulumi.Input<string>;
    /**
     * A `sku` block for the ExpressRoute circuit as documented below.
     */
    sku?: pulumi.Input<inputs.network.ExpressRouteCircuitSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a ExpressRouteCircuit resource.
 */
export interface ExpressRouteCircuitArgs {
    /**
     * Allow the circuit to interact with classic (RDFE) resources. Defaults to `false`.
     */
    allowClassicOperations?: pulumi.Input<boolean>;
    /**
     * The bandwidth in Gbps of the circuit being created on the Express Route Port.
     */
    bandwidthInGbps?: pulumi.Input<number>;
    /**
     * The bandwidth in Mbps of the circuit being created on the Service Provider.
     */
    bandwidthInMbps?: pulumi.Input<number>;
    /**
     * The ID of the Express Route Port this Express Route Circuit is based on.
     */
    expressRoutePortId?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the ExpressRoute circuit. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the peering location and **not** the Azure resource location. Changing this forces a new resource to be created.
     */
    peeringLocation?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the ExpressRoute circuit. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the ExpressRoute Service Provider. Changing this forces a new resource to be created.
     */
    serviceProviderName?: pulumi.Input<string>;
    /**
     * A `sku` block for the ExpressRoute circuit as documented below.
     */
    sku: pulumi.Input<inputs.network.ExpressRouteCircuitSku>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
