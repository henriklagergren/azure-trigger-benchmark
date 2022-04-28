import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a ServiceBus Namespace Network Rule Set Set.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleNamespace = new azure.servicebus.Namespace("exampleNamespace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Premium",
 *     capacity: 1,
 * });
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     addressSpaces: ["172.17.0.0/16"],
 *     dnsServers: [
 *         "10.0.0.4",
 *         "10.0.0.5",
 *     ],
 * });
 * const exampleSubnet = new azure.network.Subnet("exampleSubnet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["172.17.0.0/24"],
 *     serviceEndpoints: ["Microsoft.ServiceBus"],
 * });
 * const exampleNamespaceNetworkRuleSet = new azure.servicebus.NamespaceNetworkRuleSet("exampleNamespaceNetworkRuleSet", {
 *     namespaceId: exampleNamespace.id,
 *     defaultAction: "Deny",
 *     publicNetworkAccessEnabled: true,
 *     networkRules: [{
 *         subnetId: exampleSubnet.id,
 *         ignoreMissingVnetServiceEndpoint: false,
 *     }],
 *     ipRules: ["1.1.1.1"],
 * });
 * ```
 *
 * ## Import
 *
 * Service Bus Namespace can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:servicebus/namespaceNetworkRuleSet:NamespaceNetworkRuleSet example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Servicebus/namespaces/sbns1/networkrulesets/default
 * ```
 */
export declare class NamespaceNetworkRuleSet extends pulumi.CustomResource {
    /**
     * Get an existing NamespaceNetworkRuleSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NamespaceNetworkRuleSetState, opts?: pulumi.CustomResourceOptions): NamespaceNetworkRuleSet;
    /**
     * Returns true if the given object is an instance of NamespaceNetworkRuleSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NamespaceNetworkRuleSet;
    /**
     * Specifies the default action for the ServiceBus Namespace Network Rule Set. Possible values are `Allow` and `Deny`. Defaults to `Deny`.
     */
    readonly defaultAction: pulumi.Output<string | undefined>;
    /**
     * One or more IP Addresses, or CIDR Blocks which should be able to access the ServiceBus Namespace.
     */
    readonly ipRules: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the ServiceBus Namespace ID to which to attach the ServiceBus Namespace Network Rule Set. Changing this forces a new resource to be created.
     */
    readonly namespaceId: pulumi.Output<string>;
    /**
     * @deprecated Deprecated in favor of "namespace_id"
     */
    readonly namespaceName: pulumi.Output<string>;
    /**
     * One or more `networkRules` blocks as defined below.
     */
    readonly networkRules: pulumi.Output<outputs.servicebus.NamespaceNetworkRuleSetNetworkRule[] | undefined>;
    /**
     * Whether to allow traffic over public network. Possible values are `true` and `false`. Defaults to `true`.
     */
    readonly publicNetworkAccessEnabled: pulumi.Output<boolean | undefined>;
    /**
     * @deprecated Deprecated in favor of "namespace_id"
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * If True, then Azure Services that are known and trusted for this resource type are allowed to bypass firewall configuration. See [Trusted Microsoft Services](https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/service-bus-messaging/includes/service-bus-trusted-services.md)
     */
    readonly trustedServicesAllowed: pulumi.Output<boolean | undefined>;
    /**
     * Create a NamespaceNetworkRuleSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NamespaceNetworkRuleSetArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NamespaceNetworkRuleSet resources.
 */
export interface NamespaceNetworkRuleSetState {
    /**
     * Specifies the default action for the ServiceBus Namespace Network Rule Set. Possible values are `Allow` and `Deny`. Defaults to `Deny`.
     */
    defaultAction?: pulumi.Input<string>;
    /**
     * One or more IP Addresses, or CIDR Blocks which should be able to access the ServiceBus Namespace.
     */
    ipRules?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the ServiceBus Namespace ID to which to attach the ServiceBus Namespace Network Rule Set. Changing this forces a new resource to be created.
     */
    namespaceId?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated in favor of "namespace_id"
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * One or more `networkRules` blocks as defined below.
     */
    networkRules?: pulumi.Input<pulumi.Input<inputs.servicebus.NamespaceNetworkRuleSetNetworkRule>[]>;
    /**
     * Whether to allow traffic over public network. Possible values are `true` and `false`. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * @deprecated Deprecated in favor of "namespace_id"
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * If True, then Azure Services that are known and trusted for this resource type are allowed to bypass firewall configuration. See [Trusted Microsoft Services](https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/service-bus-messaging/includes/service-bus-trusted-services.md)
     */
    trustedServicesAllowed?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a NamespaceNetworkRuleSet resource.
 */
export interface NamespaceNetworkRuleSetArgs {
    /**
     * Specifies the default action for the ServiceBus Namespace Network Rule Set. Possible values are `Allow` and `Deny`. Defaults to `Deny`.
     */
    defaultAction?: pulumi.Input<string>;
    /**
     * One or more IP Addresses, or CIDR Blocks which should be able to access the ServiceBus Namespace.
     */
    ipRules?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the ServiceBus Namespace ID to which to attach the ServiceBus Namespace Network Rule Set. Changing this forces a new resource to be created.
     */
    namespaceId?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated in favor of "namespace_id"
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * One or more `networkRules` blocks as defined below.
     */
    networkRules?: pulumi.Input<pulumi.Input<inputs.servicebus.NamespaceNetworkRuleSetNetworkRule>[]>;
    /**
     * Whether to allow traffic over public network. Possible values are `true` and `false`. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * @deprecated Deprecated in favor of "namespace_id"
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * If True, then Azure Services that are known and trusted for this resource type are allowed to bypass firewall configuration. See [Trusted Microsoft Services](https://github.com/MicrosoftDocs/azure-docs/blob/master/articles/service-bus-messaging/includes/service-bus-trusted-services.md)
     */
    trustedServicesAllowed?: pulumi.Input<boolean>;
}
