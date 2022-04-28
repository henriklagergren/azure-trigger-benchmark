import * as pulumi from "@pulumi/pulumi";
/**
 * Manage a Dedicated Host within a Dedicated Host Group.
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
 *     platformFaultDomainCount: 2,
 * });
 * const exampleDedicatedHost = new azure.compute.DedicatedHost("exampleDedicatedHost", {
 *     location: exampleResourceGroup.location,
 *     dedicatedHostGroupId: exampleDedicatedHostGroup.id,
 *     skuName: "DSv3-Type1",
 *     platformFaultDomain: 1,
 * });
 * ```
 *
 * ## Import
 *
 * Dedicated Hosts can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:compute/dedicatedHost:DedicatedHost example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Compute/hostGroups/group1/hosts/host1
 * ```
 */
export declare class DedicatedHost extends pulumi.CustomResource {
    /**
     * Get an existing DedicatedHost resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DedicatedHostState, opts?: pulumi.CustomResourceOptions): DedicatedHost;
    /**
     * Returns true if the given object is an instance of DedicatedHost.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DedicatedHost;
    /**
     * Should the Dedicated Host automatically be replaced in case of a Hardware Failure? Defaults to `true`.
     */
    readonly autoReplaceOnFailure: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the ID of the Dedicated Host Group where the Dedicated Host should exist. Changing this forces a new resource to be created.
     */
    readonly dedicatedHostGroupId: pulumi.Output<string>;
    /**
     * Specifies the software license type that will be applied to the VMs deployed on the Dedicated Host. Possible values are `None`, `Windows_Server_Hybrid` and `Windows_Server_Perpetual`. Defaults to `None`.
     */
    readonly licenseType: pulumi.Output<string | undefined>;
    /**
     * Specify the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of this Dedicated Host. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specify the fault domain of the Dedicated Host Group in which to create the Dedicated Host. Changing this forces a new resource to be created.
     */
    readonly platformFaultDomain: pulumi.Output<number>;
    /**
     * Specify the sku name of the Dedicated Host. Possible values are `DSv3-Type1`, `DSv3-Type2`, `DSv4-Type1`, `ESv3-Type1`, `ESv3-Type2`,`FSv2-Type2`, `DASv4-Type1`, `DCSv2-Type1`, `DDSv4-Type1`, `DSv3-Type1`, `DSv3-Type2`, `DSv3-Type3`, `DSv4-Type1`, `EASv4-Type1`, `EDSv4-Type1`, `ESv3-Type1`, `ESv3-Type2`, `ESv3-Type3`, `ESv4-Type1`, `FSv2-Type2`, `FSv2-Type3`, `LSv2-Type1`, `MS-Type1`, `MSm-Type1`, `MSmv2-Type1`, `MSv2-Type1`, `NVASv4-Type1`, and `NVSv3-Type1`. Changing this forces a new resource to be created.
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a DedicatedHost resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DedicatedHostArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DedicatedHost resources.
 */
export interface DedicatedHostState {
    /**
     * Should the Dedicated Host automatically be replaced in case of a Hardware Failure? Defaults to `true`.
     */
    autoReplaceOnFailure?: pulumi.Input<boolean>;
    /**
     * Specifies the ID of the Dedicated Host Group where the Dedicated Host should exist. Changing this forces a new resource to be created.
     */
    dedicatedHostGroupId?: pulumi.Input<string>;
    /**
     * Specifies the software license type that will be applied to the VMs deployed on the Dedicated Host. Possible values are `None`, `Windows_Server_Hybrid` and `Windows_Server_Perpetual`. Defaults to `None`.
     */
    licenseType?: pulumi.Input<string>;
    /**
     * Specify the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of this Dedicated Host. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specify the fault domain of the Dedicated Host Group in which to create the Dedicated Host. Changing this forces a new resource to be created.
     */
    platformFaultDomain?: pulumi.Input<number>;
    /**
     * Specify the sku name of the Dedicated Host. Possible values are `DSv3-Type1`, `DSv3-Type2`, `DSv4-Type1`, `ESv3-Type1`, `ESv3-Type2`,`FSv2-Type2`, `DASv4-Type1`, `DCSv2-Type1`, `DDSv4-Type1`, `DSv3-Type1`, `DSv3-Type2`, `DSv3-Type3`, `DSv4-Type1`, `EASv4-Type1`, `EDSv4-Type1`, `ESv3-Type1`, `ESv3-Type2`, `ESv3-Type3`, `ESv4-Type1`, `FSv2-Type2`, `FSv2-Type3`, `LSv2-Type1`, `MS-Type1`, `MSm-Type1`, `MSmv2-Type1`, `MSv2-Type1`, `NVASv4-Type1`, and `NVSv3-Type1`. Changing this forces a new resource to be created.
     */
    skuName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a DedicatedHost resource.
 */
export interface DedicatedHostArgs {
    /**
     * Should the Dedicated Host automatically be replaced in case of a Hardware Failure? Defaults to `true`.
     */
    autoReplaceOnFailure?: pulumi.Input<boolean>;
    /**
     * Specifies the ID of the Dedicated Host Group where the Dedicated Host should exist. Changing this forces a new resource to be created.
     */
    dedicatedHostGroupId: pulumi.Input<string>;
    /**
     * Specifies the software license type that will be applied to the VMs deployed on the Dedicated Host. Possible values are `None`, `Windows_Server_Hybrid` and `Windows_Server_Perpetual`. Defaults to `None`.
     */
    licenseType?: pulumi.Input<string>;
    /**
     * Specify the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of this Dedicated Host. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specify the fault domain of the Dedicated Host Group in which to create the Dedicated Host. Changing this forces a new resource to be created.
     */
    platformFaultDomain: pulumi.Input<number>;
    /**
     * Specify the sku name of the Dedicated Host. Possible values are `DSv3-Type1`, `DSv3-Type2`, `DSv4-Type1`, `ESv3-Type1`, `ESv3-Type2`,`FSv2-Type2`, `DASv4-Type1`, `DCSv2-Type1`, `DDSv4-Type1`, `DSv3-Type1`, `DSv3-Type2`, `DSv3-Type3`, `DSv4-Type1`, `EASv4-Type1`, `EDSv4-Type1`, `ESv3-Type1`, `ESv3-Type2`, `ESv3-Type3`, `ESv4-Type1`, `FSv2-Type2`, `FSv2-Type3`, `LSv2-Type1`, `MS-Type1`, `MSm-Type1`, `MSmv2-Type1`, `MSv2-Type1`, `NVASv4-Type1`, and `NVSv3-Type1`. Changing this forces a new resource to be created.
     */
    skuName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
