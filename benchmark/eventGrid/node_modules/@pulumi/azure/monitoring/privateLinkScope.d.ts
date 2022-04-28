import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Azure Monitor Private Link Scope.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePrivateLinkScope = new azure.monitoring.PrivateLinkScope("examplePrivateLinkScope", {resourceGroupName: exampleResourceGroup.name});
 * ```
 *
 * ## Import
 *
 * Azure Monitor Private Link Scopes can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:monitoring/privateLinkScope:PrivateLinkScope example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Insights/privateLinkScopes/pls1
 * ```
 */
export declare class PrivateLinkScope extends pulumi.CustomResource {
    /**
     * Get an existing PrivateLinkScope resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PrivateLinkScopeState, opts?: pulumi.CustomResourceOptions): PrivateLinkScope;
    /**
     * Returns true if the given object is an instance of PrivateLinkScope.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PrivateLinkScope;
    /**
     * The name of the Azure Monitor Private Link Scope. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Azure Monitor Private Link Scope should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Azure Monitor Private Link Scope.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a PrivateLinkScope resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateLinkScopeArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering PrivateLinkScope resources.
 */
export interface PrivateLinkScopeState {
    /**
     * The name of the Azure Monitor Private Link Scope. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Azure Monitor Private Link Scope should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Azure Monitor Private Link Scope.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a PrivateLinkScope resource.
 */
export interface PrivateLinkScopeArgs {
    /**
     * The name of the Azure Monitor Private Link Scope. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Azure Monitor Private Link Scope should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Azure Monitor Private Link Scope.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
