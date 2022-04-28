import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an AzureNetwork DDoS Protection Plan.
 *
 * > **NOTE** Azure only allows `one` DDoS Protection Plan per region.
 *
 * > **NOTE** The DDoS Protection Plan is a [high-cost service](https://azure.microsoft.com/en-us/pricing/details/ddos-protection/#pricing). Please keep this in mind while testing and learning.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleDdosProtectionPlan = new azure.network.DdosProtectionPlan("exampleDdosProtectionPlan", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * ```
 *
 * ## Import
 *
 * Azure DDoS Protection Plan can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/ddosProtectionPlan:DdosProtectionPlan example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/ddosProtectionPlans/testddospplan
 * ```
 */
export declare class DdosProtectionPlan extends pulumi.CustomResource {
    /**
     * Get an existing DdosProtectionPlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DdosProtectionPlanState, opts?: pulumi.CustomResourceOptions): DdosProtectionPlan;
    /**
     * Returns true if the given object is an instance of DdosProtectionPlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DdosProtectionPlan;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Network DDoS Protection Plan. Changing this forces a new resource to be created.
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
     * A list of Virtual Network ID's associated with the DDoS Protection Plan.
     */
    readonly virtualNetworkIds: pulumi.Output<string[]>;
    /**
     * Create a DdosProtectionPlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosProtectionPlanArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DdosProtectionPlan resources.
 */
export interface DdosProtectionPlanState {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Network DDoS Protection Plan. Changing this forces a new resource to be created.
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
    /**
     * A list of Virtual Network ID's associated with the DDoS Protection Plan.
     */
    virtualNetworkIds?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a DdosProtectionPlan resource.
 */
export interface DdosProtectionPlanArgs {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Network DDoS Protection Plan. Changing this forces a new resource to be created.
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
