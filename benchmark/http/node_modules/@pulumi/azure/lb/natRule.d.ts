import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Load Balancer NAT Rule.
 *
 * > **NOTE:** This resource cannot be used with with virtual machine scale sets, instead use the `azure.lb.NatPool` resource.
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
 * const exampleNatRule = new azure.lb.NatRule("exampleNatRule", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     loadbalancerId: exampleLoadBalancer.id,
 *     protocol: "Tcp",
 *     frontendPort: 3389,
 *     backendPort: 3389,
 *     frontendIpConfigurationName: "PublicIPAddress",
 * });
 * ```
 *
 * ## Import
 *
 * Load Balancer NAT Rules can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:lb/natRule:NatRule example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/loadBalancers/lb1/inboundNatRules/rule1
 * ```
 */
export declare class NatRule extends pulumi.CustomResource {
    /**
     * Get an existing NatRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NatRuleState, opts?: pulumi.CustomResourceOptions): NatRule;
    /**
     * Returns true if the given object is an instance of NatRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NatRule;
    readonly backendIpConfigurationId: pulumi.Output<string>;
    /**
     * The port used for internal connections on the endpoint. Possible values range between 0 and 65535, inclusive.
     */
    readonly backendPort: pulumi.Output<number>;
    /**
     * Are the Floating IPs enabled for this Load Balancer Rule? A "floating” IP is reassigned to a secondary server in case the primary server fails. Required to configure a SQL AlwaysOn Availability Group. Defaults to `false`.
     */
    readonly enableFloatingIp: pulumi.Output<boolean>;
    /**
     * Is TCP Reset enabled for this Load Balancer Rule? Defaults to `false`.
     */
    readonly enableTcpReset: pulumi.Output<boolean | undefined>;
    readonly frontendIpConfigurationId: pulumi.Output<string>;
    /**
     * The name of the frontend IP configuration exposing this rule.
     */
    readonly frontendIpConfigurationName: pulumi.Output<string>;
    /**
     * The port for the external endpoint. Port numbers for each Rule must be unique within the Load Balancer. Possible values range between 0 and 65534, inclusive.
     */
    readonly frontendPort: pulumi.Output<number>;
    /**
     * Specifies the idle timeout in minutes for TCP connections. Valid values are between `4` and `30` minutes. Defaults to `4` minutes.
     */
    readonly idleTimeoutInMinutes: pulumi.Output<number>;
    /**
     * The ID of the Load Balancer in which to create the NAT Rule.
     */
    readonly loadbalancerId: pulumi.Output<string>;
    /**
     * Specifies the name of the NAT Rule.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The transport protocol for the external endpoint. Possible values are `Udp`, `Tcp` or `All`.
     */
    readonly protocol: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the resource.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a NatRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NatRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NatRule resources.
 */
export interface NatRuleState {
    backendIpConfigurationId?: pulumi.Input<string>;
    /**
     * The port used for internal connections on the endpoint. Possible values range between 0 and 65535, inclusive.
     */
    backendPort?: pulumi.Input<number>;
    /**
     * Are the Floating IPs enabled for this Load Balancer Rule? A "floating” IP is reassigned to a secondary server in case the primary server fails. Required to configure a SQL AlwaysOn Availability Group. Defaults to `false`.
     */
    enableFloatingIp?: pulumi.Input<boolean>;
    /**
     * Is TCP Reset enabled for this Load Balancer Rule? Defaults to `false`.
     */
    enableTcpReset?: pulumi.Input<boolean>;
    frontendIpConfigurationId?: pulumi.Input<string>;
    /**
     * The name of the frontend IP configuration exposing this rule.
     */
    frontendIpConfigurationName?: pulumi.Input<string>;
    /**
     * The port for the external endpoint. Port numbers for each Rule must be unique within the Load Balancer. Possible values range between 0 and 65534, inclusive.
     */
    frontendPort?: pulumi.Input<number>;
    /**
     * Specifies the idle timeout in minutes for TCP connections. Valid values are between `4` and `30` minutes. Defaults to `4` minutes.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * The ID of the Load Balancer in which to create the NAT Rule.
     */
    loadbalancerId?: pulumi.Input<string>;
    /**
     * Specifies the name of the NAT Rule.
     */
    name?: pulumi.Input<string>;
    /**
     * The transport protocol for the external endpoint. Possible values are `Udp`, `Tcp` or `All`.
     */
    protocol?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the resource.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a NatRule resource.
 */
export interface NatRuleArgs {
    /**
     * The port used for internal connections on the endpoint. Possible values range between 0 and 65535, inclusive.
     */
    backendPort: pulumi.Input<number>;
    /**
     * Are the Floating IPs enabled for this Load Balancer Rule? A "floating” IP is reassigned to a secondary server in case the primary server fails. Required to configure a SQL AlwaysOn Availability Group. Defaults to `false`.
     */
    enableFloatingIp?: pulumi.Input<boolean>;
    /**
     * Is TCP Reset enabled for this Load Balancer Rule? Defaults to `false`.
     */
    enableTcpReset?: pulumi.Input<boolean>;
    /**
     * The name of the frontend IP configuration exposing this rule.
     */
    frontendIpConfigurationName: pulumi.Input<string>;
    /**
     * The port for the external endpoint. Port numbers for each Rule must be unique within the Load Balancer. Possible values range between 0 and 65534, inclusive.
     */
    frontendPort: pulumi.Input<number>;
    /**
     * Specifies the idle timeout in minutes for TCP connections. Valid values are between `4` and `30` minutes. Defaults to `4` minutes.
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * The ID of the Load Balancer in which to create the NAT Rule.
     */
    loadbalancerId: pulumi.Input<string>;
    /**
     * Specifies the name of the NAT Rule.
     */
    name?: pulumi.Input<string>;
    /**
     * The transport protocol for the external endpoint. Possible values are `Udp`, `Tcp` or `All`.
     */
    protocol: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the resource.
     */
    resourceGroupName: pulumi.Input<string>;
}
