import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Network Profile.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     addressSpaces: ["10.1.0.0/16"],
 * });
 * const exampleSubnet = new azure.network.Subnet("exampleSubnet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.1.0.0/24"],
 *     delegations: [{
 *         name: "delegation",
 *         serviceDelegation: {
 *             name: "Microsoft.ContainerInstance/containerGroups",
 *             actions: ["Microsoft.Network/virtualNetworks/subnets/action"],
 *         },
 *     }],
 * });
 * const exampleProfile = new azure.network.Profile("exampleProfile", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     containerNetworkInterface: {
 *         name: "examplecnic",
 *         ipConfigurations: [{
 *             name: "exampleipconfig",
 *             subnetId: exampleSubnet.id,
 *         }],
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Network Profile can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/profile:Profile example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/networkProfiles/examplenetprofile
 * ```
 */
export declare class Profile extends pulumi.CustomResource {
    /**
     * Get an existing Profile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProfileState, opts?: pulumi.CustomResourceOptions): Profile;
    /**
     * Returns true if the given object is an instance of Profile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Profile;
    /**
     * A `containerNetworkInterface` block as documented below.
     */
    readonly containerNetworkInterface: pulumi.Output<outputs.network.ProfileContainerNetworkInterface>;
    /**
     * A list of Container Network Interface ID's.
     */
    readonly containerNetworkInterfaceIds: pulumi.Output<string[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Network Profile. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Profile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProfileArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Profile resources.
 */
export interface ProfileState {
    /**
     * A `containerNetworkInterface` block as documented below.
     */
    containerNetworkInterface?: pulumi.Input<inputs.network.ProfileContainerNetworkInterface>;
    /**
     * A list of Container Network Interface ID's.
     */
    containerNetworkInterfaceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Network Profile. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Profile resource.
 */
export interface ProfileArgs {
    /**
     * A `containerNetworkInterface` block as documented below.
     */
    containerNetworkInterface: pulumi.Input<inputs.network.ProfileContainerNetworkInterface>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Network Profile. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
