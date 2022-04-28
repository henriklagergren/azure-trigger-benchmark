import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a network security group that contains a list of network security rules.  Network security groups enable inbound or outbound traffic to be enabled or denied.
 *
 * > **NOTE on Network Security Groups and Network Security Rules:** This provider currently
 * provides both a standalone Network Security Rule resource, and allows for Network Security Rules to be defined in-line within the Network Security Group resource.
 * At this time you cannot use a Network Security Group with in-line Network Security Rules in conjunction with any Network Security Rule resources. Doing so will cause a conflict of rule settings and will overwrite rules.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleNetworkSecurityGroup = new azure.network.NetworkSecurityGroup("exampleNetworkSecurityGroup", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     securityRules: [{
 *         name: "test123",
 *         priority: 100,
 *         direction: "Inbound",
 *         access: "Allow",
 *         protocol: "Tcp",
 *         sourcePortRange: "*",
 *         destinationPortRange: "*",
 *         sourceAddressPrefix: "*",
 *         destinationAddressPrefix: "*",
 *     }],
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Network Security Groups can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/networkSecurityGroup:NetworkSecurityGroup group1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/networkSecurityGroups/mySecurityGroup
 * ```
 */
export declare class NetworkSecurityGroup extends pulumi.CustomResource {
    /**
     * Get an existing NetworkSecurityGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkSecurityGroupState, opts?: pulumi.CustomResourceOptions): NetworkSecurityGroup;
    /**
     * Returns true if the given object is an instance of NetworkSecurityGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NetworkSecurityGroup;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the security rule.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the network security group. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A list of objects representing security rules, as defined below.
     */
    readonly securityRules: pulumi.Output<outputs.network.NetworkSecurityGroupSecurityRule[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a NetworkSecurityGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkSecurityGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NetworkSecurityGroup resources.
 */
export interface NetworkSecurityGroupState {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the security rule.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the network security group. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A list of objects representing security rules, as defined below.
     */
    securityRules?: pulumi.Input<pulumi.Input<inputs.network.NetworkSecurityGroupSecurityRule>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a NetworkSecurityGroup resource.
 */
export interface NetworkSecurityGroupArgs {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the security rule.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the network security group. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A list of objects representing security rules, as defined below.
     */
    securityRules?: pulumi.Input<pulumi.Input<inputs.network.NetworkSecurityGroupSecurityRule>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
