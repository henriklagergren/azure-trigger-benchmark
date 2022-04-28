import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Dedicated Hardware Security Module.
 *
 * > **Note:** Before using this resource, it's required to submit the request of registering the providers and features with Azure CLI `az provider register --namespace Microsoft.HardwareSecurityModules && az feature register --namespace Microsoft.HardwareSecurityModules --name AzureDedicatedHSM && az provider register --namespace Microsoft.Network && az feature register --namespace Microsoft.Network --name AllowBaremetalServers` and ask service team (hsmrequest@microsoft.com) to approve. See more details from https://docs.microsoft.com/en-us/azure/dedicated-hsm/tutorial-deploy-hsm-cli#prerequisites.
 *
 * > **Note:** If the quota is not enough in some region, please submit the quota request to service team.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     addressSpaces: ["10.2.0.0/16"],
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleSubnet = new azure.network.Subnet("exampleSubnet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.2.0.0/24"],
 * });
 * const example2 = new azure.network.Subnet("example2", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.2.1.0/24"],
 *     delegations: [{
 *         name: "first",
 *         serviceDelegation: {
 *             name: "Microsoft.HardwareSecurityModules/dedicatedHSMs",
 *             actions: [
 *                 "Microsoft.Network/networkinterfaces/*",
 *                 "Microsoft.Network/virtualNetworks/subnets/join/action",
 *             ],
 *         },
 *     }],
 * });
 * const example3 = new azure.network.Subnet("example3", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.2.255.0/26"],
 * });
 * const examplePublicIp = new azure.network.PublicIp("examplePublicIp", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     allocationMethod: "Dynamic",
 * });
 * const exampleVirtualNetworkGateway = new azure.network.VirtualNetworkGateway("exampleVirtualNetworkGateway", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     type: "ExpressRoute",
 *     vpnType: "PolicyBased",
 *     sku: "Standard",
 *     ipConfigurations: [{
 *         publicIpAddressId: examplePublicIp.id,
 *         privateIpAddressAllocation: "Dynamic",
 *         subnetId: example3.id,
 *     }],
 * });
 * const exampleModule = new azure.hsm.Module("exampleModule", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     skuName: "SafeNet Luna Network HSM A790",
 *     networkProfile: {
 *         networkInterfacePrivateIpAddresses: ["10.2.1.8"],
 *         subnetId: example2.id,
 *     },
 *     stampId: "stamp2",
 *     tags: {
 *         env: "Test",
 *     },
 * }, {
 *     dependsOn: [exampleVirtualNetworkGateway],
 * });
 * ```
 *
 * ## Import
 *
 * Dedicated Hardware Security Module can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:hsm/module:Module example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/hsm1
 * ```
 */
export declare class Module extends pulumi.CustomResource {
    /**
     * Get an existing Module resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ModuleState, opts?: pulumi.CustomResourceOptions): Module;
    /**
     * Returns true if the given object is an instance of Module.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Module;
    /**
     * The Azure Region where the Dedicated Hardware Security Module should exist. Changing this forces a new Dedicated Hardware Security Module to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Dedicated Hardware Security Module. Changing this forces a new Dedicated Hardware Security Module to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `networkProfile` block as defined below.
     */
    readonly networkProfile: pulumi.Output<outputs.hsm.ModuleNetworkProfile>;
    /**
     * The name of the Resource Group where the Dedicated Hardware Security Module should exist. Changing this forces a new Dedicated Hardware Security Module to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The sku name of the dedicated hardware security module. Changing this forces a new Dedicated Hardware Security Module to be created.
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * The ID of the stamp. Possible values are `stamp1` or `stamp2`. Changing this forces a new Dedicated Hardware Security Module to be created.
     */
    readonly stampId: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags which should be assigned to the Dedicated Hardware Security Module.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The Dedicated Hardware Security Module zones. Changing this forces a new Dedicated Hardware Security Module to be created.
     */
    readonly zones: pulumi.Output<string[] | undefined>;
    /**
     * Create a Module resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ModuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Module resources.
 */
export interface ModuleState {
    /**
     * The Azure Region where the Dedicated Hardware Security Module should exist. Changing this forces a new Dedicated Hardware Security Module to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Dedicated Hardware Security Module. Changing this forces a new Dedicated Hardware Security Module to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `networkProfile` block as defined below.
     */
    networkProfile?: pulumi.Input<inputs.hsm.ModuleNetworkProfile>;
    /**
     * The name of the Resource Group where the Dedicated Hardware Security Module should exist. Changing this forces a new Dedicated Hardware Security Module to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The sku name of the dedicated hardware security module. Changing this forces a new Dedicated Hardware Security Module to be created.
     */
    skuName?: pulumi.Input<string>;
    /**
     * The ID of the stamp. Possible values are `stamp1` or `stamp2`. Changing this forces a new Dedicated Hardware Security Module to be created.
     */
    stampId?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Dedicated Hardware Security Module.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The Dedicated Hardware Security Module zones. Changing this forces a new Dedicated Hardware Security Module to be created.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a Module resource.
 */
export interface ModuleArgs {
    /**
     * The Azure Region where the Dedicated Hardware Security Module should exist. Changing this forces a new Dedicated Hardware Security Module to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Dedicated Hardware Security Module. Changing this forces a new Dedicated Hardware Security Module to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `networkProfile` block as defined below.
     */
    networkProfile: pulumi.Input<inputs.hsm.ModuleNetworkProfile>;
    /**
     * The name of the Resource Group where the Dedicated Hardware Security Module should exist. Changing this forces a new Dedicated Hardware Security Module to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The sku name of the dedicated hardware security module. Changing this forces a new Dedicated Hardware Security Module to be created.
     */
    skuName: pulumi.Input<string>;
    /**
     * The ID of the stamp. Possible values are `stamp1` or `stamp2`. Changing this forces a new Dedicated Hardware Security Module to be created.
     */
    stampId?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Dedicated Hardware Security Module.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The Dedicated Hardware Security Module zones. Changing this forces a new Dedicated Hardware Security Module to be created.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
