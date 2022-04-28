import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Backend Address within a Backend Address Pool.
 *
 * > **Note:** Backend Addresses can only be added to a `Standard` SKU Load Balancer.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleVirtualNetwork = azure.network.getVirtualNetwork({
 *     name: "example-network",
 *     resourceGroupName: "example-resources",
 * });
 * const exampleLB = azure.lb.getLB({
 *     name: "example-lb",
 *     resourceGroupName: "example-resources",
 * });
 * const exampleBackendAddressPool = exampleLB.then(exampleLB => azure.lb.getBackendAddressPool({
 *     name: "first",
 *     loadbalancerId: exampleLB.id,
 * }));
 * const exampleBackendAddressPoolAddress = new azure.lb.BackendAddressPoolAddress("exampleBackendAddressPoolAddress", {
 *     backendAddressPoolId: exampleBackendAddressPool.then(exampleBackendAddressPool => exampleBackendAddressPool.id),
 *     virtualNetworkId: exampleVirtualNetwork.then(exampleVirtualNetwork => exampleVirtualNetwork.id),
 *     ipAddress: "10.0.0.1",
 * });
 * ```
 *
 * ## Import
 *
 * Backend Address Pool Addresses can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:lb/backendAddressPoolAddress:BackendAddressPoolAddress example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/loadBalancers/loadBalancer1/backendAddressPools/backendAddressPool1/addresses/address1
 * ```
 */
export declare class BackendAddressPoolAddress extends pulumi.CustomResource {
    /**
     * Get an existing BackendAddressPoolAddress resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BackendAddressPoolAddressState, opts?: pulumi.CustomResourceOptions): BackendAddressPoolAddress;
    /**
     * Returns true if the given object is an instance of BackendAddressPoolAddress.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BackendAddressPoolAddress;
    /**
     * The ID of the Backend Address Pool. Changing this forces a new Backend Address Pool Address to be created.
     */
    readonly backendAddressPoolId: pulumi.Output<string>;
    /**
     * The Static IP Address which should be allocated to this Backend Address Pool.
     */
    readonly ipAddress: pulumi.Output<string>;
    /**
     * The name which should be used for this Backend Address Pool Address. Changing this forces a new Backend Address Pool Address to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the Virtual Network within which the Backend Address Pool should exist.
     */
    readonly virtualNetworkId: pulumi.Output<string>;
    /**
     * Create a BackendAddressPoolAddress resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BackendAddressPoolAddressArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering BackendAddressPoolAddress resources.
 */
export interface BackendAddressPoolAddressState {
    /**
     * The ID of the Backend Address Pool. Changing this forces a new Backend Address Pool Address to be created.
     */
    backendAddressPoolId?: pulumi.Input<string>;
    /**
     * The Static IP Address which should be allocated to this Backend Address Pool.
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * The name which should be used for this Backend Address Pool Address. Changing this forces a new Backend Address Pool Address to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Virtual Network within which the Backend Address Pool should exist.
     */
    virtualNetworkId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a BackendAddressPoolAddress resource.
 */
export interface BackendAddressPoolAddressArgs {
    /**
     * The ID of the Backend Address Pool. Changing this forces a new Backend Address Pool Address to be created.
     */
    backendAddressPoolId: pulumi.Input<string>;
    /**
     * The Static IP Address which should be allocated to this Backend Address Pool.
     */
    ipAddress: pulumi.Input<string>;
    /**
     * The name which should be used for this Backend Address Pool Address. Changing this forces a new Backend Address Pool Address to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Virtual Network within which the Backend Address Pool should exist.
     */
    virtualNetworkId: pulumi.Input<string>;
}
