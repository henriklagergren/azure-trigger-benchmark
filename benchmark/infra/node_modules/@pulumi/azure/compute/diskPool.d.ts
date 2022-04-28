import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Disk Pool.
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
 *     addressSpaces: ["10.0.0.0/16"],
 * });
 * const exampleSubnet = new azure.network.Subnet("exampleSubnet", {
 *     resourceGroupName: exampleVirtualNetwork.resourceGroupName,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.0.0.0/24"],
 *     delegations: [{
 *         name: "diskspool",
 *         serviceDelegation: {
 *             actions: ["Microsoft.Network/virtualNetworks/read"],
 *             name: "Microsoft.StoragePool/diskPools",
 *         },
 *     }],
 * });
 * const exampleDiskPool = new azure.compute.DiskPool("exampleDiskPool", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     skuName: "Basic_B1",
 *     subnetId: exampleSubnet.id,
 *     zones: ["1"],
 * });
 * ```
 *
 * ## Import
 *
 * Disk Pools can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:compute/diskPool:DiskPool example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resGroup1/providers/Microsoft.StoragePool/diskPools/diskPool1
 * ```
 */
export declare class DiskPool extends pulumi.CustomResource {
    /**
     * Get an existing DiskPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DiskPoolState, opts?: pulumi.CustomResourceOptions): DiskPool;
    /**
     * Returns true if the given object is an instance of DiskPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DiskPool;
    /**
     * The Azure Region where the Disk Pool should exist. Changing this forces a new Disk Pool to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the Disk Pool. Changing this forces a new Disk Pool to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Disk Pool should exist. Changing this forces a new Disk Pool to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Sku of the Disk Pool. Possible values are `Basic_B1`, `Standard_S1` and `Premium_P1`. Changing this forces a new Disk Pool to be created.
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * The ID of the Subnet where the Disk Pool should be created. Changing this forces a new Disk Pool to be created.
     */
    readonly subnetId: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Disk Pool.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * A list of Zones where this Disk Pool should be deployed. Changing this forces a new Disk Pool to be created.
     */
    readonly zones: pulumi.Output<string[]>;
    /**
     * Create a DiskPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DiskPoolArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DiskPool resources.
 */
export interface DiskPoolState {
    /**
     * The Azure Region where the Disk Pool should exist. Changing this forces a new Disk Pool to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Disk Pool. Changing this forces a new Disk Pool to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Disk Pool should exist. Changing this forces a new Disk Pool to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Sku of the Disk Pool. Possible values are `Basic_B1`, `Standard_S1` and `Premium_P1`. Changing this forces a new Disk Pool to be created.
     */
    skuName?: pulumi.Input<string>;
    /**
     * The ID of the Subnet where the Disk Pool should be created. Changing this forces a new Disk Pool to be created.
     */
    subnetId?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Disk Pool.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A list of Zones where this Disk Pool should be deployed. Changing this forces a new Disk Pool to be created.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a DiskPool resource.
 */
export interface DiskPoolArgs {
    /**
     * The Azure Region where the Disk Pool should exist. Changing this forces a new Disk Pool to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Disk Pool. Changing this forces a new Disk Pool to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Disk Pool should exist. Changing this forces a new Disk Pool to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Sku of the Disk Pool. Possible values are `Basic_B1`, `Standard_S1` and `Premium_P1`. Changing this forces a new Disk Pool to be created.
     */
    skuName: pulumi.Input<string>;
    /**
     * The ID of the Subnet where the Disk Pool should be created. Changing this forces a new Disk Pool to be created.
     */
    subnetId: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Disk Pool.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A list of Zones where this Disk Pool should be deployed. Changing this forces a new Disk Pool to be created.
     */
    zones: pulumi.Input<pulumi.Input<string>[]>;
}
