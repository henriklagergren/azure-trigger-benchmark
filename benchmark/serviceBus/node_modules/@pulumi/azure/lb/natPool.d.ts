import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Load Balancer NAT pool.
 *
 * > **NOTE:** This resource cannot be used with with virtual machines, instead use the `azure.lb.NatRule` resource.
 *
 * > **NOTE** When using this resource, the Load Balancer needs to have a FrontEnd IP Configuration Attached
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePublicIp = new azure.network.PublicIp("examplePublicIp", {
 *     location: "West US",
 *     resourceGroupName: exampleResourceGroup.name,
 *     allocationMethod: "Static",
 * });
 * const exampleLoadBalancer = new azure.lb.LoadBalancer("exampleLoadBalancer", {
 *     location: "West US",
 *     resourceGroupName: exampleResourceGroup.name,
 *     frontendIpConfigurations: [{
 *         name: "PublicIPAddress",
 *         publicIpAddressId: examplePublicIp.id,
 *     }],
 * });
 * const exampleNatPool = new azure.lb.NatPool("exampleNatPool", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     loadbalancerId: exampleLoadBalancer.id,
 *     protocol: "Tcp",
 *     frontendPortStart: 80,
 *     frontendPortEnd: 81,
 *     backendPort: 8080,
 *     frontendIpConfigurationName: "PublicIPAddress",
 * });
 * ```
 *
 * ## Import
 *
 * Load Balancer NAT Pools can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:lb/natPool:NatPool example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/loadBalancers/lb1/inboundNatPools/pool1
 * ```
 */
export declare class NatPool extends pulumi.CustomResource {
    /**
     * Get an existing NatPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NatPoolState, opts?: pulumi.CustomResourceOptions): NatPool;
    /**
     * Returns true if the given object is an instance of NatPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NatPool;
    /**
     * The port used for the internal endpoint. Possible values range between 1 and 65535, inclusive.
     */
    readonly backendPort: pulumi.Output<number>;
    /**
     * Are the floating IPs enabled for this Load Balancer Rule? A floating IP is reassigned to a secondary server in case the primary server fails. Required to configure a SQL AlwaysOn Availability Group. Defaults to `false`.
     */
    readonly floatingIpEnabled: pulumi.Output<boolean | undefined>;
    readonly frontendIpConfigurationId: pulumi.Output<string>;
    /**
     * The name of the frontend IP configuration exposing this rule.
     */
    readonly frontendIpConfigurationName: pulumi.Output<string>;
    /**
     * The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with this Load Balancer. Possible values range between 1 and 65534, inclusive.
     */
    readonly frontendPortEnd: pulumi.Output<number>;
    /**
     * The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with this Load Balancer. Possible values range between 1 and 65534, inclusive.
     */
    readonly frontendPortStart: pulumi.Output<number>;
    /**
     * Specifies the idle timeout in minutes for TCP connections. Valid values are between `4` and `30`. Defaults to `4`.
     */
    readonly idleTimeoutInMinutes: pulumi.Output<number | undefined>;
    /**
     * The ID of the Load Balancer in which to create the NAT pool.
     */
    readonly loadbalancerId: pulumi.Output<string>;
    /**
     * Specifies the name of the NAT pool.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The transport protocol for the external endpoint. Possible values are `Udp` or `Tcp`.
     */
    readonly protocol: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the resource.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Is TCP Reset enabled for this Load Balancer Rule? Defaults to `false`.
     */
    readonly tcpResetEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Create a NatPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NatPoolArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NatPool resources.
 */
export interface NatPoolState {
    /**
     * The port used for the internal endpoint. Possible values range between 1 and 65535, inclusive.
     */
    backendPort?: pulumi.Input<number>;
    /**
     * Are the floating IPs enabled for this Load Balancer Rule? A floating IP is reassigned to a secondary server in case the primary server fails. Required to configure a SQL AlwaysOn Availability Group. Defaults to `false`.
     */
    floatingIpEnabled?: pulumi.Input<boolean>;
    frontendIpConfigurationId?: pulumi.Input<string>;
    /**
     * The name of the frontend IP configuration exposing this rule.
     */
    frontendIpConfigurationName?: pulumi.Input<string>;
    /**
     * The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with this Load Balancer. Possible values range between 1 and 65534, inclusive.
     */
    frontendPortEnd?: pulumi.Input<number>;
    /**
     * The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with this Load Balancer. Possible values range between 1 and 65534, inclusive.
     */
    frontendPortStart?: pulumi.Input<number>;
    /**
     * Specifies the idle timeout in minutes for TCP connections. Valid values are between `4` and `30`. Defaults to `4`.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * The ID of the Load Balancer in which to create the NAT pool.
     */
    loadbalancerId?: pulumi.Input<string>;
    /**
     * Specifies the name of the NAT pool.
     */
    name?: pulumi.Input<string>;
    /**
     * The transport protocol for the external endpoint. Possible values are `Udp` or `Tcp`.
     */
    protocol?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the resource.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Is TCP Reset enabled for this Load Balancer Rule? Defaults to `false`.
     */
    tcpResetEnabled?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a NatPool resource.
 */
export interface NatPoolArgs {
    /**
     * The port used for the internal endpoint. Possible values range between 1 and 65535, inclusive.
     */
    backendPort: pulumi.Input<number>;
    /**
     * Are the floating IPs enabled for this Load Balancer Rule? A floating IP is reassigned to a secondary server in case the primary server fails. Required to configure a SQL AlwaysOn Availability Group. Defaults to `false`.
     */
    floatingIpEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the frontend IP configuration exposing this rule.
     */
    frontendIpConfigurationName: pulumi.Input<string>;
    /**
     * The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with this Load Balancer. Possible values range between 1 and 65534, inclusive.
     */
    frontendPortEnd: pulumi.Input<number>;
    /**
     * The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with this Load Balancer. Possible values range between 1 and 65534, inclusive.
     */
    frontendPortStart: pulumi.Input<number>;
    /**
     * Specifies the idle timeout in minutes for TCP connections. Valid values are between `4` and `30`. Defaults to `4`.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * The ID of the Load Balancer in which to create the NAT pool.
     */
    loadbalancerId: pulumi.Input<string>;
    /**
     * Specifies the name of the NAT pool.
     */
    name?: pulumi.Input<string>;
    /**
     * The transport protocol for the external endpoint. Possible values are `Udp` or `Tcp`.
     */
    protocol: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the resource.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Is TCP Reset enabled for this Load Balancer Rule? Defaults to `false`.
     */
    tcpResetEnabled?: pulumi.Input<boolean>;
}
