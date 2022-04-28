import * as pulumi from "@pulumi/pulumi";
/**
 * Manage a Dedicated Host Group.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleDedicatedHostGroup = new azure.compute.DedicatedHostGroup("exampleDedicatedHostGroup", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     platformFaultDomainCount: 1,
 * });
 * ```
 *
 * ## Import
 *
 * Dedicated Host Group can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:compute/dedicatedHostGroup:DedicatedHostGroup example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example-rg/providers/Microsoft.Compute/hostGroups/group1
 * ```
 */
export declare class DedicatedHostGroup extends pulumi.CustomResource {
    /**
     * Get an existing DedicatedHostGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DedicatedHostGroupState, opts?: pulumi.CustomResourceOptions): DedicatedHostGroup;
    /**
     * Returns true if the given object is an instance of DedicatedHostGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DedicatedHostGroup;
    /**
     * Would virtual machines or virtual machine scale sets be placed automatically on this Dedicated Host Group? Defaults to `false`. Changing this forces a new resource to be created.
     */
    readonly automaticPlacementEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The Azure location where the Dedicated Host Group exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Dedicated Host Group. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The number of fault domains that the Dedicated Host Group spans. Changing this forces a new resource to be created.
     */
    readonly platformFaultDomainCount: pulumi.Output<number>;
    /**
     * Specifies the name of the resource group the Dedicated Host Group is located in. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * A list of Availability Zones in which the Dedicated Host Group should be located. Changing this forces a new resource to be created.
     */
    readonly zones: pulumi.Output<string | undefined>;
    /**
     * Create a DedicatedHostGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DedicatedHostGroupArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DedicatedHostGroup resources.
 */
export interface DedicatedHostGroupState {
    /**
     * Would virtual machines or virtual machine scale sets be placed automatically on this Dedicated Host Group? Defaults to `false`. Changing this forces a new resource to be created.
     */
    automaticPlacementEnabled?: pulumi.Input<boolean>;
    /**
     * The Azure location where the Dedicated Host Group exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Dedicated Host Group. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The number of fault domains that the Dedicated Host Group spans. Changing this forces a new resource to be created.
     */
    platformFaultDomainCount?: pulumi.Input<number>;
    /**
     * Specifies the name of the resource group the Dedicated Host Group is located in. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A list of Availability Zones in which the Dedicated Host Group should be located. Changing this forces a new resource to be created.
     */
    zones?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DedicatedHostGroup resource.
 */
export interface DedicatedHostGroupArgs {
    /**
     * Would virtual machines or virtual machine scale sets be placed automatically on this Dedicated Host Group? Defaults to `false`. Changing this forces a new resource to be created.
     */
    automaticPlacementEnabled?: pulumi.Input<boolean>;
    /**
     * The Azure location where the Dedicated Host Group exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Dedicated Host Group. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The number of fault domains that the Dedicated Host Group spans. Changing this forces a new resource to be created.
     */
    platformFaultDomainCount: pulumi.Input<number>;
    /**
     * Specifies the name of the resource group the Dedicated Host Group is located in. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A list of Availability Zones in which the Dedicated Host Group should be located. Changing this forces a new resource to be created.
     */
    zones?: pulumi.Input<string>;
}
