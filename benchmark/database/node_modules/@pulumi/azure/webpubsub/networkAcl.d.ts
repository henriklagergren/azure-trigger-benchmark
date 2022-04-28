import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages the Network ACL for a Web Pubsub.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "east us"});
 * const exampleService = new azure.webpubsub.Service("exampleService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard_S1",
 *     capacity: 1,
 * });
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     addressSpaces: ["10.5.0.0/16"],
 * });
 * const exampleSubnet = new azure.network.Subnet("exampleSubnet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.5.2.0/24"],
 *     enforcePrivateLinkEndpointNetworkPolicies: true,
 * });
 * const exampleEndpoint = new azure.privatelink.Endpoint("exampleEndpoint", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     subnetId: exampleSubnet.id,
 *     privateServiceConnection: {
 *         name: "psc-sig-test",
 *         isManualConnection: false,
 *         privateConnectionResourceId: exampleService.id,
 *         subresourceNames: ["webpubsub"],
 *     },
 * });
 * const exampleNetworkAcl = new azure.webpubsub.NetworkAcl("exampleNetworkAcl", {
 *     webPubsubId: exampleService.id,
 *     defaultAction: "Allow",
 *     publicNetwork: {
 *         deniedRequestTypes: ["ClientConnection"],
 *     },
 *     privateEndpoints: [{
 *         id: exampleEndpoint.id,
 *         deniedRequestTypes: [
 *             "RESTAPI",
 *             "ClientConnection",
 *         ],
 *     }],
 * }, {
 *     dependsOn: [azurerm_private_endpoint.test],
 * });
 * ```
 *
 * ## Import
 *
 * Network ACLs for a Web Pubsub service can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:webpubsub/networkAcl:NetworkAcl example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.SignalRService/webPubSub/webpubsub1
 * ```
 */
export declare class NetworkAcl extends pulumi.CustomResource {
    /**
     * Get an existing NetworkAcl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkAclState, opts?: pulumi.CustomResourceOptions): NetworkAcl;
    /**
     * Returns true if the given object is an instance of NetworkAcl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NetworkAcl;
    /**
     * The default action to control the network access when no other rule matches. Possible values are `Allow` and `Deny`. Defaults to `Deny`.
     */
    readonly defaultAction: pulumi.Output<string | undefined>;
    /**
     * A `privateEndpoint` block as defined below.
     */
    readonly privateEndpoints: pulumi.Output<outputs.webpubsub.NetworkAclPrivateEndpoint[] | undefined>;
    /**
     * A `publicNetwork` block as defined below.
     */
    readonly publicNetwork: pulumi.Output<outputs.webpubsub.NetworkAclPublicNetwork>;
    /**
     * The ID of the Web Pubsub service. Changing this forces a new resource to be created.
     */
    readonly webPubsubId: pulumi.Output<string>;
    /**
     * Create a NetworkAcl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkAclArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NetworkAcl resources.
 */
export interface NetworkAclState {
    /**
     * The default action to control the network access when no other rule matches. Possible values are `Allow` and `Deny`. Defaults to `Deny`.
     */
    defaultAction?: pulumi.Input<string>;
    /**
     * A `privateEndpoint` block as defined below.
     */
    privateEndpoints?: pulumi.Input<pulumi.Input<inputs.webpubsub.NetworkAclPrivateEndpoint>[]>;
    /**
     * A `publicNetwork` block as defined below.
     */
    publicNetwork?: pulumi.Input<inputs.webpubsub.NetworkAclPublicNetwork>;
    /**
     * The ID of the Web Pubsub service. Changing this forces a new resource to be created.
     */
    webPubsubId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a NetworkAcl resource.
 */
export interface NetworkAclArgs {
    /**
     * The default action to control the network access when no other rule matches. Possible values are `Allow` and `Deny`. Defaults to `Deny`.
     */
    defaultAction?: pulumi.Input<string>;
    /**
     * A `privateEndpoint` block as defined below.
     */
    privateEndpoints?: pulumi.Input<pulumi.Input<inputs.webpubsub.NetworkAclPrivateEndpoint>[]>;
    /**
     * A `publicNetwork` block as defined below.
     */
    publicNetwork: pulumi.Input<inputs.webpubsub.NetworkAclPublicNetwork>;
    /**
     * The ID of the Web Pubsub service. Changing this forces a new resource to be created.
     */
    webPubsubId: pulumi.Input<string>;
}
