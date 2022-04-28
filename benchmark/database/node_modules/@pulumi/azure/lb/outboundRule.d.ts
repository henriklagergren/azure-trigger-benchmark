import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Load Balancer Outbound Rule.
 *
 * > **NOTE** When using this resource, the Load Balancer needs to have a FrontEnd IP Configuration and a Backend Address Pool Attached.
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
 * const exampleBackendAddressPool = new azure.lb.BackendAddressPool("exampleBackendAddressPool", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     loadbalancerId: exampleLoadBalancer.id,
 * });
 * const exampleOutboundRule = new azure.lb.OutboundRule("exampleOutboundRule", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     loadbalancerId: exampleLoadBalancer.id,
 *     protocol: "Tcp",
 *     backendAddressPoolId: exampleBackendAddressPool.id,
 *     frontendIpConfigurations: [{
 *         name: "PublicIPAddress",
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Load Balancer Outbound Rules can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:lb/outboundRule:OutboundRule example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/loadBalancers/lb1/outboundRules/rule1
 * ```
 */
export declare class OutboundRule extends pulumi.CustomResource {
    /**
     * Get an existing OutboundRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OutboundRuleState, opts?: pulumi.CustomResourceOptions): OutboundRule;
    /**
     * Returns true if the given object is an instance of OutboundRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is OutboundRule;
    /**
     * The number of outbound ports to be used for NAT.
     */
    readonly allocatedOutboundPorts: pulumi.Output<number | undefined>;
    /**
     * The ID of the Backend Address Pool. Outbound traffic is randomly load balanced across IPs in the backend IPs.
     */
    readonly backendAddressPoolId: pulumi.Output<string>;
    /**
     * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
     */
    readonly enableTcpReset: pulumi.Output<boolean | undefined>;
    /**
     * One or more `frontendIpConfiguration` blocks as defined below.
     */
    readonly frontendIpConfigurations: pulumi.Output<outputs.lb.OutboundRuleFrontendIpConfiguration[] | undefined>;
    /**
     * The timeout for the TCP idle connection
     */
    readonly idleTimeoutInMinutes: pulumi.Output<number | undefined>;
    /**
     * The ID of the Load Balancer in which to create the Outbound Rule. Changing this forces a new resource to be created.
     */
    readonly loadbalancerId: pulumi.Output<string>;
    /**
     * Specifies the name of the Outbound Rule. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The transport protocol for the external endpoint. Possible values are `Udp`, `Tcp` or `All`.
     */
    readonly protocol: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a OutboundRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OutboundRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering OutboundRule resources.
 */
export interface OutboundRuleState {
    /**
     * The number of outbound ports to be used for NAT.
     */
    allocatedOutboundPorts?: pulumi.Input<number>;
    /**
     * The ID of the Backend Address Pool. Outbound traffic is randomly load balanced across IPs in the backend IPs.
     */
    backendAddressPoolId?: pulumi.Input<string>;
    /**
     * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
     */
    enableTcpReset?: pulumi.Input<boolean>;
    /**
     * One or more `frontendIpConfiguration` blocks as defined below.
     */
    frontendIpConfigurations?: pulumi.Input<pulumi.Input<inputs.lb.OutboundRuleFrontendIpConfiguration>[]>;
    /**
     * The timeout for the TCP idle connection
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * The ID of the Load Balancer in which to create the Outbound Rule. Changing this forces a new resource to be created.
     */
    loadbalancerId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Outbound Rule. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The transport protocol for the external endpoint. Possible values are `Udp`, `Tcp` or `All`.
     */
    protocol?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a OutboundRule resource.
 */
export interface OutboundRuleArgs {
    /**
     * The number of outbound ports to be used for NAT.
     */
    allocatedOutboundPorts?: pulumi.Input<number>;
    /**
     * The ID of the Backend Address Pool. Outbound traffic is randomly load balanced across IPs in the backend IPs.
     */
    backendAddressPoolId: pulumi.Input<string>;
    /**
     * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
     */
    enableTcpReset?: pulumi.Input<boolean>;
    /**
     * One or more `frontendIpConfiguration` blocks as defined below.
     */
    frontendIpConfigurations?: pulumi.Input<pulumi.Input<inputs.lb.OutboundRuleFrontendIpConfiguration>[]>;
    /**
     * The timeout for the TCP idle connection
     */
    idleTimeoutInMinutes?: pulumi.Input<number>;
    /**
     * The ID of the Load Balancer in which to create the Outbound Rule. Changing this forces a new resource to be created.
     */
    loadbalancerId: pulumi.Input<string>;
    /**
     * Specifies the name of the Outbound Rule. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The transport protocol for the external endpoint. Possible values are `Udp`, `Tcp` or `All`.
     */
    protocol: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
