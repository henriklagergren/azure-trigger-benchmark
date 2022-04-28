import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Private Link Service.
 *
 * > **NOTE** Private Link is now in [GA](https://docs.microsoft.com/en-gb/azure/private-link/).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     addressSpaces: ["10.5.0.0/16"],
 * });
 * const exampleSubnet = new azure.network.Subnet("exampleSubnet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.5.1.0/24"],
 *     enforcePrivateLinkServiceNetworkPolicies: true,
 * });
 * const examplePublicIp = new azure.network.PublicIp("examplePublicIp", {
 *     sku: "Standard",
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     allocationMethod: "Static",
 * });
 * const exampleLoadBalancer = new azure.lb.LoadBalancer("exampleLoadBalancer", {
 *     sku: "Standard",
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     frontendIpConfigurations: [{
 *         name: examplePublicIp.name,
 *         publicIpAddressId: examplePublicIp.id,
 *     }],
 * });
 * const exampleLinkService = new azure.privatedns.LinkService("exampleLinkService", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     autoApprovalSubscriptionIds: ["00000000-0000-0000-0000-000000000000"],
 *     visibilitySubscriptionIds: ["00000000-0000-0000-0000-000000000000"],
 *     loadBalancerFrontendIpConfigurationIds: [exampleLoadBalancer.frontendIpConfigurations.apply(frontendIpConfigurations => frontendIpConfigurations?[0]?.id)],
 *     natIpConfigurations: [
 *         {
 *             name: "primary",
 *             privateIpAddress: "10.5.1.17",
 *             privateIpAddressVersion: "IPv4",
 *             subnetId: exampleSubnet.id,
 *             primary: true,
 *         },
 *         {
 *             name: "secondary",
 *             privateIpAddress: "10.5.1.18",
 *             privateIpAddressVersion: "IPv4",
 *             subnetId: exampleSubnet.id,
 *             primary: false,
 *         },
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * Private Link Services can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:privatedns/linkService:LinkService example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/privateLinkServices/service1
 * ```
 */
export declare class LinkService extends pulumi.CustomResource {
    /**
     * Get an existing LinkService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LinkServiceState, opts?: pulumi.CustomResourceOptions): LinkService;
    /**
     * Returns true if the given object is an instance of LinkService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LinkService;
    /**
     * A globally unique DNS Name for your Private Link Service. You can use this alias to request a connection to your Private Link Service.
     */
    readonly alias: pulumi.Output<string>;
    /**
     * A list of Subscription UUID/GUID's that will be automatically be able to use this Private Link Service.
     */
    readonly autoApprovalSubscriptionIds: pulumi.Output<string[] | undefined>;
    /**
     * Should the Private Link Service support the Proxy Protocol? Defaults to `false`.
     */
    readonly enableProxyProtocol: pulumi.Output<boolean | undefined>;
    /**
     * A list of Frontend IP Configuration ID's from a Standard Load Balancer, where traffic from the Private Link Service should be routed. You can use Load Balancer Rules to direct this traffic to appropriate backend pools where your applications are running.
     */
    readonly loadBalancerFrontendIpConfigurationIds: pulumi.Output<string[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of this Private Link Service. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * One or more (up to 8) `natIpConfiguration` block as defined below.
     */
    readonly natIpConfigurations: pulumi.Output<outputs.privatedns.LinkServiceNatIpConfiguration[]>;
    /**
     * The name of the Resource Group where the Private Link Service should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * A list of Subscription UUID/GUID's that will be able to see this Private Link Service.
     */
    readonly visibilitySubscriptionIds: pulumi.Output<string[] | undefined>;
    /**
     * Create a LinkService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkServiceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LinkService resources.
 */
export interface LinkServiceState {
    /**
     * A globally unique DNS Name for your Private Link Service. You can use this alias to request a connection to your Private Link Service.
     */
    alias?: pulumi.Input<string>;
    /**
     * A list of Subscription UUID/GUID's that will be automatically be able to use this Private Link Service.
     */
    autoApprovalSubscriptionIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Should the Private Link Service support the Proxy Protocol? Defaults to `false`.
     */
    enableProxyProtocol?: pulumi.Input<boolean>;
    /**
     * A list of Frontend IP Configuration ID's from a Standard Load Balancer, where traffic from the Private Link Service should be routed. You can use Load Balancer Rules to direct this traffic to appropriate backend pools where your applications are running.
     */
    loadBalancerFrontendIpConfigurationIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of this Private Link Service. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more (up to 8) `natIpConfiguration` block as defined below.
     */
    natIpConfigurations?: pulumi.Input<pulumi.Input<inputs.privatedns.LinkServiceNatIpConfiguration>[]>;
    /**
     * The name of the Resource Group where the Private Link Service should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A list of Subscription UUID/GUID's that will be able to see this Private Link Service.
     */
    visibilitySubscriptionIds?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a LinkService resource.
 */
export interface LinkServiceArgs {
    /**
     * A list of Subscription UUID/GUID's that will be automatically be able to use this Private Link Service.
     */
    autoApprovalSubscriptionIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Should the Private Link Service support the Proxy Protocol? Defaults to `false`.
     */
    enableProxyProtocol?: pulumi.Input<boolean>;
    /**
     * A list of Frontend IP Configuration ID's from a Standard Load Balancer, where traffic from the Private Link Service should be routed. You can use Load Balancer Rules to direct this traffic to appropriate backend pools where your applications are running.
     */
    loadBalancerFrontendIpConfigurationIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of this Private Link Service. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more (up to 8) `natIpConfiguration` block as defined below.
     */
    natIpConfigurations: pulumi.Input<pulumi.Input<inputs.privatedns.LinkServiceNatIpConfiguration>[]>;
    /**
     * The name of the Resource Group where the Private Link Service should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A list of Subscription UUID/GUID's that will be able to see this Private Link Service.
     */
    visibilitySubscriptionIds?: pulumi.Input<pulumi.Input<string>[]>;
}
