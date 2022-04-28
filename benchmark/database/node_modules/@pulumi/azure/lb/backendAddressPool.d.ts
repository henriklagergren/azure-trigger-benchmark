import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Load Balancer Backend Address Pool.
 *
 * > **NOTE:** When using this resource, the Load Balancer needs to have a FrontEnd IP Configuration Attached
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePublicIp = new azure.network.PublicIp("examplePublicIp", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     allocationMethod: "Static",
 * });
 * const exampleLoadBalancer = new azure.lb.LoadBalancer("exampleLoadBalancer", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     frontendIpConfigurations: [{
 *         name: "PublicIPAddress",
 *         publicIpAddressId: examplePublicIp.id,
 *     }],
 * });
 * const exampleBackendAddressPool = new azure.lb.BackendAddressPool("exampleBackendAddressPool", {loadbalancerId: exampleLoadBalancer.id});
 * ```
 *
 * ## Import
 *
 * Load Balancer Backend Address Pools can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:lb/backendAddressPool:BackendAddressPool example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/loadBalancers/lb1/backendAddressPools/pool1
 * ```
 */
export declare class BackendAddressPool extends pulumi.CustomResource {
    /**
     * Get an existing BackendAddressPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackendAddressPoolState, opts?: pulumi.CustomResourceOptions): BackendAddressPool;
    /**
     * Returns true if the given object is an instance of BackendAddressPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BackendAddressPool;
    /**
     * @deprecated This field is non-functional and will be removed in version 3.0 of the Azure Provider - use the separate `azurerm_lb_backend_address_pool_address` resource instead.
     */
    readonly backendAddresses: pulumi.Output<outputs.lb.BackendAddressPoolBackendAddress[] | undefined>;
    /**
     * The Backend IP Configurations associated with this Backend Address Pool.
     */
    readonly backendIpConfigurations: pulumi.Output<string[]>;
    /**
     * The Load Balancing Rules associated with this Backend Address Pool.
     */
    readonly loadBalancingRules: pulumi.Output<string[]>;
    /**
     * The ID of the Load Balancer in which to create the Backend Address Pool.
     */
    readonly loadbalancerId: pulumi.Output<string>;
    /**
     * Specifies the name of the Backend Address Pool.
     */
    readonly name: pulumi.Output<string>;
    /**
     * An array of the Load Balancing Outbound Rules associated with this Backend Address Pool.
     */
    readonly outboundRules: pulumi.Output<string[]>;
    /**
     * @deprecated This field is no longer used and will be removed in the next major version of the Azure Provider
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * One or more `tunnelInterface` blocks as defined below.
     */
    readonly tunnelInterfaces: pulumi.Output<outputs.lb.BackendAddressPoolTunnelInterface[] | undefined>;
    /**
     * Create a BackendAddressPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackendAddressPoolArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering BackendAddressPool resources.
 */
export interface BackendAddressPoolState {
    /**
     * @deprecated This field is non-functional and will be removed in version 3.0 of the Azure Provider - use the separate `azurerm_lb_backend_address_pool_address` resource instead.
     */
    backendAddresses?: pulumi.Input<pulumi.Input<inputs.lb.BackendAddressPoolBackendAddress>[]>;
    /**
     * The Backend IP Configurations associated with this Backend Address Pool.
     */
    backendIpConfigurations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The Load Balancing Rules associated with this Backend Address Pool.
     */
    loadBalancingRules?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of the Load Balancer in which to create the Backend Address Pool.
     */
    loadbalancerId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Backend Address Pool.
     */
    name?: pulumi.Input<string>;
    /**
     * An array of the Load Balancing Outbound Rules associated with this Backend Address Pool.
     */
    outboundRules?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * @deprecated This field is no longer used and will be removed in the next major version of the Azure Provider
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * One or more `tunnelInterface` blocks as defined below.
     */
    tunnelInterfaces?: pulumi.Input<pulumi.Input<inputs.lb.BackendAddressPoolTunnelInterface>[]>;
}
/**
 * The set of arguments for constructing a BackendAddressPool resource.
 */
export interface BackendAddressPoolArgs {
    /**
     * @deprecated This field is non-functional and will be removed in version 3.0 of the Azure Provider - use the separate `azurerm_lb_backend_address_pool_address` resource instead.
     */
    backendAddresses?: pulumi.Input<pulumi.Input<inputs.lb.BackendAddressPoolBackendAddress>[]>;
    /**
     * The ID of the Load Balancer in which to create the Backend Address Pool.
     */
    loadbalancerId: pulumi.Input<string>;
    /**
     * Specifies the name of the Backend Address Pool.
     */
    name?: pulumi.Input<string>;
    /**
     * @deprecated This field is no longer used and will be removed in the next major version of the Azure Provider
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * One or more `tunnelInterface` blocks as defined below.
     */
    tunnelInterfaces?: pulumi.Input<pulumi.Input<inputs.lb.BackendAddressPoolTunnelInterface>[]>;
}
