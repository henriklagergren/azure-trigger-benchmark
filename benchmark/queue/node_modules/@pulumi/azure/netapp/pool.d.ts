import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Pool within a NetApp Account.
 *
 * ## NetApp Pool Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.netapp.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const examplePool = new azure.netapp.Pool("examplePool", {
 *     accountName: exampleAccount.name,
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     serviceLevel: "Premium",
 *     sizeInTb: 4,
 * });
 * ```
 *
 * ## Import
 *
 * NetApp Pool can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:netapp/pool:Pool example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1
 * ```
 */
export declare class Pool extends pulumi.CustomResource {
    /**
     * Get an existing Pool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PoolState, opts?: pulumi.CustomResourceOptions): Pool;
    /**
     * Returns true if the given object is an instance of Pool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Pool;
    /**
     * The name of the NetApp account in which the NetApp Pool should be created. Changing this forces a new resource to be created.
     */
    readonly accountName: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the NetApp Pool. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * QoS Type of the pool. Valid values include `Auto` or `Manual`.
     */
    readonly qosType: pulumi.Output<string>;
    /**
     * The name of the resource group where the NetApp Pool should be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The service level of the file system. Valid values include `Premium`, `Standard`, or `Ultra`. Changing this forces a new resource to be created.
     */
    readonly serviceLevel: pulumi.Output<string>;
    /**
     * Provisioned size of the pool in TB. Value must be between `4` and `500`.
     */
    readonly sizeInTb: pulumi.Output<number>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Pool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PoolArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Pool resources.
 */
export interface PoolState {
    /**
     * The name of the NetApp account in which the NetApp Pool should be created. Changing this forces a new resource to be created.
     */
    accountName?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the NetApp Pool. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * QoS Type of the pool. Valid values include `Auto` or `Manual`.
     */
    qosType?: pulumi.Input<string>;
    /**
     * The name of the resource group where the NetApp Pool should be created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The service level of the file system. Valid values include `Premium`, `Standard`, or `Ultra`. Changing this forces a new resource to be created.
     */
    serviceLevel?: pulumi.Input<string>;
    /**
     * Provisioned size of the pool in TB. Value must be between `4` and `500`.
     */
    sizeInTb?: pulumi.Input<number>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Pool resource.
 */
export interface PoolArgs {
    /**
     * The name of the NetApp account in which the NetApp Pool should be created. Changing this forces a new resource to be created.
     */
    accountName: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the NetApp Pool. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * QoS Type of the pool. Valid values include `Auto` or `Manual`.
     */
    qosType?: pulumi.Input<string>;
    /**
     * The name of the resource group where the NetApp Pool should be created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The service level of the file system. Valid values include `Premium`, `Standard`, or `Ultra`. Changing this forces a new resource to be created.
     */
    serviceLevel: pulumi.Input<string>;
    /**
     * Provisioned size of the pool in TB. Value must be between `4` and `500`.
     */
    sizeInTb: pulumi.Input<number>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
