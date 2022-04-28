import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Private Endpoint.
 *
 * Azure Private Endpoint is a network interface that connects you privately and securely to a service powered by Azure Private Link. Private Endpoint uses a private IP address from your VNet, effectively bringing the service into your VNet. The service could be an Azure service such as Azure Storage, SQL, etc. or your own Private Link Service.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const service = new azure.network.Subnet("service", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.0.1.0/24"],
 *     enforcePrivateLinkServiceNetworkPolicies: true,
 * });
 * const endpoint = new azure.network.Subnet("endpoint", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.0.2.0/24"],
 *     enforcePrivateLinkEndpointNetworkPolicies: true,
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
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     natIpConfigurations: [{
 *         name: examplePublicIp.name,
 *         primary: true,
 *         subnetId: service.id,
 *     }],
 *     loadBalancerFrontendIpConfigurationIds: [exampleLoadBalancer.frontendIpConfigurations.apply(frontendIpConfigurations => frontendIpConfigurations?[0]?.id)],
 * });
 * const exampleEndpoint = new azure.privatelink.Endpoint("exampleEndpoint", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     subnetId: endpoint.id,
 *     privateServiceConnection: {
 *         name: "example-privateserviceconnection",
 *         privateConnectionResourceId: exampleLinkService.id,
 *         isManualConnection: false,
 *     },
 * });
 * ```
 *
 * Using a Private Link Service Alias with existing resources:
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const rg = azure.core.getResourceGroup({
 *     name: "example-resources",
 * });
 * const vnet = rg.then(rg => azure.network.getVirtualNetwork({
 *     name: "example-network",
 *     resourceGroupName: rg.name,
 * }));
 * const subnet = Promise.all([vnet, rg]).then(([vnet, rg]) => azure.network.getSubnet({
 *     name: "default",
 *     virtualNetworkName: vnet.name,
 *     resourceGroupName: rg.name,
 * }));
 * const example = new azure.privatelink.Endpoint("example", {
 *     location: rg.then(rg => rg.location),
 *     resourceGroupName: rg.then(rg => rg.name),
 *     subnetId: subnet.then(subnet => subnet.id),
 *     privateServiceConnection: {
 *         name: "example-privateserviceconnection",
 *         privateConnectionResourceAlias: "example-privatelinkservice.d20286c8-4ea5-11eb-9584-8f53157226c6.centralus.azure.privatelinkservice",
 *         isManualConnection: true,
 *         requestMessage: "PL",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Private Endpoints can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:privatelink/endpoint:Endpoint example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/privateEndpoints/endpoint1
 * ```
 */
export declare class Endpoint extends pulumi.CustomResource {
    /**
     * Get an existing Endpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EndpointState, opts?: pulumi.CustomResourceOptions): Endpoint;
    /**
     * Returns true if the given object is an instance of Endpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Endpoint;
    readonly customDnsConfigs: pulumi.Output<outputs.privatelink.EndpointCustomDnsConfig[]>;
    /**
     * The supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the Name of the Private Endpoint. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    readonly networkInterfaces: pulumi.Output<outputs.privatelink.EndpointNetworkInterface[]>;
    readonly privateDnsZoneConfigs: pulumi.Output<outputs.privatelink.EndpointPrivateDnsZoneConfig[]>;
    /**
     * A `privateDnsZoneGroup` block as defined below.
     */
    readonly privateDnsZoneGroup: pulumi.Output<outputs.privatelink.EndpointPrivateDnsZoneGroup | undefined>;
    /**
     * A `privateServiceConnection` block as defined below.
     */
    readonly privateServiceConnection: pulumi.Output<outputs.privatelink.EndpointPrivateServiceConnection>;
    /**
     * Specifies the Name of the Resource Group within which the Private Endpoint should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The ID of the Subnet from which Private IP Addresses will be allocated for this Private Endpoint. Changing this forces a new resource to be created.
     */
    readonly subnetId: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Endpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EndpointArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Endpoint resources.
 */
export interface EndpointState {
    customDnsConfigs?: pulumi.Input<pulumi.Input<inputs.privatelink.EndpointCustomDnsConfig>[]>;
    /**
     * The supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the Name of the Private Endpoint. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    networkInterfaces?: pulumi.Input<pulumi.Input<inputs.privatelink.EndpointNetworkInterface>[]>;
    privateDnsZoneConfigs?: pulumi.Input<pulumi.Input<inputs.privatelink.EndpointPrivateDnsZoneConfig>[]>;
    /**
     * A `privateDnsZoneGroup` block as defined below.
     */
    privateDnsZoneGroup?: pulumi.Input<inputs.privatelink.EndpointPrivateDnsZoneGroup>;
    /**
     * A `privateServiceConnection` block as defined below.
     */
    privateServiceConnection?: pulumi.Input<inputs.privatelink.EndpointPrivateServiceConnection>;
    /**
     * Specifies the Name of the Resource Group within which the Private Endpoint should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The ID of the Subnet from which Private IP Addresses will be allocated for this Private Endpoint. Changing this forces a new resource to be created.
     */
    subnetId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Endpoint resource.
 */
export interface EndpointArgs {
    /**
     * The supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the Name of the Private Endpoint. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `privateDnsZoneGroup` block as defined below.
     */
    privateDnsZoneGroup?: pulumi.Input<inputs.privatelink.EndpointPrivateDnsZoneGroup>;
    /**
     * A `privateServiceConnection` block as defined below.
     */
    privateServiceConnection: pulumi.Input<inputs.privatelink.EndpointPrivateServiceConnection>;
    /**
     * Specifies the Name of the Resource Group within which the Private Endpoint should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of the Subnet from which Private IP Addresses will be allocated for this Private Endpoint. Changing this forces a new resource to be created.
     */
    subnetId: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
