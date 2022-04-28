import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a LoadBalancer Probe Resource.
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
 * const exampleProbe = new azure.lb.Probe("exampleProbe", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     loadbalancerId: exampleLoadBalancer.id,
 *     port: 22,
 * });
 * ```
 *
 * ## Import
 *
 * Load Balancer Probes can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:lb/probe:Probe example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/loadBalancers/lb1/probes/probe1
 * ```
 */
export declare class Probe extends pulumi.CustomResource {
    /**
     * Get an existing Probe resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProbeState, opts?: pulumi.CustomResourceOptions): Probe;
    /**
     * Returns true if the given object is an instance of Probe.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Probe;
    /**
     * The interval, in seconds between probes to the backend endpoint for health status. The default value is 15, the minimum value is 5.
     */
    readonly intervalInSeconds: pulumi.Output<number | undefined>;
    readonly loadBalancerRules: pulumi.Output<string[]>;
    /**
     * The ID of the LoadBalancer in which to create the NAT Rule.
     */
    readonly loadbalancerId: pulumi.Output<string>;
    /**
     * Specifies the name of the Probe.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The number of failed probe attempts after which the backend endpoint is removed from rotation. The default value is 2. NumberOfProbes multiplied by intervalInSeconds value must be greater or equal to 10.Endpoints are returned to rotation when at least one probe is successful.
     */
    readonly numberOfProbes: pulumi.Output<number | undefined>;
    /**
     * Port on which the Probe queries the backend endpoint. Possible values range from 1 to 65535, inclusive.
     */
    readonly port: pulumi.Output<number>;
    /**
     * Specifies the protocol of the end point. Possible values are `Http`, `Https` or `Tcp`. If Tcp is specified, a received ACK is required for the probe to be successful. If Http is specified, a 200 OK response from the specified URI is required for the probe to be successful.
     */
    readonly protocol: pulumi.Output<string>;
    /**
     * The URI used for requesting health status from the backend endpoint. Required if protocol is set to `Http` or `Https`. Otherwise, it is not allowed.
     */
    readonly requestPath: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group in which to create the resource.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a Probe resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProbeArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Probe resources.
 */
export interface ProbeState {
    /**
     * The interval, in seconds between probes to the backend endpoint for health status. The default value is 15, the minimum value is 5.
     */
    intervalInSeconds?: pulumi.Input<number>;
    loadBalancerRules?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ID of the LoadBalancer in which to create the NAT Rule.
     */
    loadbalancerId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Probe.
     */
    name?: pulumi.Input<string>;
    /**
     * The number of failed probe attempts after which the backend endpoint is removed from rotation. The default value is 2. NumberOfProbes multiplied by intervalInSeconds value must be greater or equal to 10.Endpoints are returned to rotation when at least one probe is successful.
     */
    numberOfProbes?: pulumi.Input<number>;
    /**
     * Port on which the Probe queries the backend endpoint. Possible values range from 1 to 65535, inclusive.
     */
    port?: pulumi.Input<number>;
    /**
     * Specifies the protocol of the end point. Possible values are `Http`, `Https` or `Tcp`. If Tcp is specified, a received ACK is required for the probe to be successful. If Http is specified, a 200 OK response from the specified URI is required for the probe to be successful.
     */
    protocol?: pulumi.Input<string>;
    /**
     * The URI used for requesting health status from the backend endpoint. Required if protocol is set to `Http` or `Https`. Otherwise, it is not allowed.
     */
    requestPath?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the resource.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Probe resource.
 */
export interface ProbeArgs {
    /**
     * The interval, in seconds between probes to the backend endpoint for health status. The default value is 15, the minimum value is 5.
     */
    intervalInSeconds?: pulumi.Input<number>;
    /**
     * The ID of the LoadBalancer in which to create the NAT Rule.
     */
    loadbalancerId: pulumi.Input<string>;
    /**
     * Specifies the name of the Probe.
     */
    name?: pulumi.Input<string>;
    /**
     * The number of failed probe attempts after which the backend endpoint is removed from rotation. The default value is 2. NumberOfProbes multiplied by intervalInSeconds value must be greater or equal to 10.Endpoints are returned to rotation when at least one probe is successful.
     */
    numberOfProbes?: pulumi.Input<number>;
    /**
     * Port on which the Probe queries the backend endpoint. Possible values range from 1 to 65535, inclusive.
     */
    port: pulumi.Input<number>;
    /**
     * Specifies the protocol of the end point. Possible values are `Http`, `Https` or `Tcp`. If Tcp is specified, a received ACK is required for the probe to be successful. If Http is specified, a 200 OK response from the specified URI is required for the probe to be successful.
     */
    protocol?: pulumi.Input<string>;
    /**
     * The URI used for requesting health status from the backend endpoint. Required if protocol is set to `Http` or `Https`. Otherwise, it is not allowed.
     */
    requestPath?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the resource.
     */
    resourceGroupName: pulumi.Input<string>;
}
