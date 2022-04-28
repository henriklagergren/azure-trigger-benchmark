import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Load Balancer Rule.
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
 * const exampleRule = new azure.lb.Rule("exampleRule", {
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
 * Load Balancer Rules can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:lb/rule:Rule example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/loadBalancers/lb1/loadBalancingRules/rule1
 * ```
 */
export declare class Rule extends pulumi.CustomResource {
    /**
     * Get an existing Rule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RuleState, opts?: pulumi.CustomResourceOptions): Rule;
    /**
     * Returns true if the given object is an instance of Rule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Rule;
    /**
     * @deprecated This property has been deprecated by `backend_address_pool_ids` and will be removed in the next major version of the provider
     */
    readonly backendAddressPoolId: pulumi.Output<string>;
    /**
     * A list of reference to a Backend Address Pool over which this Load Balancing Rule operates.
     */
    readonly backendAddressPoolIds: pulumi.Output<string[]>;
    /**
     * The port used for internal connections on the endpoint. Possible values range between 0 and 65535, inclusive.
     */
    readonly backendPort: pulumi.Output<number>;
    /**
     * Is snat enabled for this Load Balancer Rule? Default `false`.
     */
    readonly disableOutboundSnat: pulumi.Output<boolean | undefined>;
    /**
     * Are the Floating IPs enabled for this Load Balncer Rule? A "floating” IP is reassigned to a secondary server in case the primary server fails. Required to configure a SQL AlwaysOn Availability Group. Defaults to `false`.
     */
    readonly enableFloatingIp: pulumi.Output<boolean | undefined>;
    /**
     * Is TCP Reset enabled for this Load Balancer Rule? Defaults to `false`.
     */
    readonly enableTcpReset: pulumi.Output<boolean | undefined>;
    readonly frontendIpConfigurationId: pulumi.Output<string>;
    /**
     * The name of the frontend IP configuration to which the rule is associated.
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
     * Specifies the load balancing distribution type to be used by the Load Balancer. Possible values are: `Default` – The load balancer is configured to use a 5 tuple hash to map traffic to available servers. `SourceIP` – The load balancer is configured to use a 2 tuple hash to map traffic to available servers. `SourceIPProtocol` – The load balancer is configured to use a 3 tuple hash to map traffic to available servers. Also known as Session Persistence, where  the options are called `None`, `Client IP` and `Client IP and Protocol` respectively.
     */
    readonly loadDistribution: pulumi.Output<string>;
    /**
     * The ID of the Load Balancer in which to create the Rule.
     */
    readonly loadbalancerId: pulumi.Output<string>;
    /**
     * Specifies the name of the LB Rule.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A reference to a Probe used by this Load Balancing Rule.
     */
    readonly probeId: pulumi.Output<string>;
    /**
     * The transport protocol for the external endpoint. Possible values are `Tcp`, `Udp` or `All`.
     */
    readonly protocol: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the resource.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a Rule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Rule resources.
 */
export interface RuleState {
    /**
     * @deprecated This property has been deprecated by `backend_address_pool_ids` and will be removed in the next major version of the provider
     */
    backendAddressPoolId?: pulumi.Input<string>;
    /**
     * A list of reference to a Backend Address Pool over which this Load Balancing Rule operates.
     */
    backendAddressPoolIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The port used for internal connections on the endpoint. Possible values range between 0 and 65535, inclusive.
     */
    backendPort?: pulumi.Input<number>;
    /**
     * Is snat enabled for this Load Balancer Rule? Default `false`.
     */
    disableOutboundSnat?: pulumi.Input<boolean>;
    /**
     * Are the Floating IPs enabled for this Load Balncer Rule? A "floating” IP is reassigned to a secondary server in case the primary server fails. Required to configure a SQL AlwaysOn Availability Group. Defaults to `false`.
     */
    enableFloatingIp?: pulumi.Input<boolean>;
    /**
     * Is TCP Reset enabled for this Load Balancer Rule? Defaults to `false`.
     */
    enableTcpReset?: pulumi.Input<boolean>;
    frontendIpConfigurationId?: pulumi.Input<string>;
    /**
     * The name of the frontend IP configuration to which the rule is associated.
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
     * Specifies the load balancing distribution type to be used by the Load Balancer. Possible values are: `Default` – The load balancer is configured to use a 5 tuple hash to map traffic to available servers. `SourceIP` – The load balancer is configured to use a 2 tuple hash to map traffic to available servers. `SourceIPProtocol` – The load balancer is configured to use a 3 tuple hash to map traffic to available servers. Also known as Session Persistence, where  the options are called `None`, `Client IP` and `Client IP and Protocol` respectively.
     */
    loadDistribution?: pulumi.Input<string>;
    /**
     * The ID of the Load Balancer in which to create the Rule.
     */
    loadbalancerId?: pulumi.Input<string>;
    /**
     * Specifies the name of the LB Rule.
     */
    name?: pulumi.Input<string>;
    /**
     * A reference to a Probe used by this Load Balancing Rule.
     */
    probeId?: pulumi.Input<string>;
    /**
     * The transport protocol for the external endpoint. Possible values are `Tcp`, `Udp` or `All`.
     */
    protocol?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the resource.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Rule resource.
 */
export interface RuleArgs {
    /**
     * @deprecated This property has been deprecated by `backend_address_pool_ids` and will be removed in the next major version of the provider
     */
    backendAddressPoolId?: pulumi.Input<string>;
    /**
     * A list of reference to a Backend Address Pool over which this Load Balancing Rule operates.
     */
    backendAddressPoolIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The port used for internal connections on the endpoint. Possible values range between 0 and 65535, inclusive.
     */
    backendPort: pulumi.Input<number>;
    /**
     * Is snat enabled for this Load Balancer Rule? Default `false`.
     */
    disableOutboundSnat?: pulumi.Input<boolean>;
    /**
     * Are the Floating IPs enabled for this Load Balncer Rule? A "floating” IP is reassigned to a secondary server in case the primary server fails. Required to configure a SQL AlwaysOn Availability Group. Defaults to `false`.
     */
    enableFloatingIp?: pulumi.Input<boolean>;
    /**
     * Is TCP Reset enabled for this Load Balancer Rule? Defaults to `false`.
     */
    enableTcpReset?: pulumi.Input<boolean>;
    /**
     * The name of the frontend IP configuration to which the rule is associated.
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
     * Specifies the load balancing distribution type to be used by the Load Balancer. Possible values are: `Default` – The load balancer is configured to use a 5 tuple hash to map traffic to available servers. `SourceIP` – The load balancer is configured to use a 2 tuple hash to map traffic to available servers. `SourceIPProtocol` – The load balancer is configured to use a 3 tuple hash to map traffic to available servers. Also known as Session Persistence, where  the options are called `None`, `Client IP` and `Client IP and Protocol` respectively.
     */
    loadDistribution?: pulumi.Input<string>;
    /**
     * The ID of the Load Balancer in which to create the Rule.
     */
    loadbalancerId: pulumi.Input<string>;
    /**
     * Specifies the name of the LB Rule.
     */
    name?: pulumi.Input<string>;
    /**
     * A reference to a Probe used by this Load Balancing Rule.
     */
    probeId?: pulumi.Input<string>;
    /**
     * The transport protocol for the external endpoint. Possible values are `Tcp`, `Udp` or `All`.
     */
    protocol: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the resource.
     */
    resourceGroupName: pulumi.Input<string>;
}
