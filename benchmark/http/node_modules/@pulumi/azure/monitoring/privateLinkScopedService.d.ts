import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Azure Monitor Private Link Scoped Service.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleInsights = new azure.appinsights.Insights("exampleInsights", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationType: "web",
 * });
 * const examplePrivateLinkScope = new azure.monitoring.PrivateLinkScope("examplePrivateLinkScope", {resourceGroupName: exampleResourceGroup.name});
 * const examplePrivateLinkScopedService = new azure.monitoring.PrivateLinkScopedService("examplePrivateLinkScopedService", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     scopeName: examplePrivateLinkScope.name,
 *     linkedResourceId: exampleInsights.id,
 * });
 * ```
 *
 * ## Import
 *
 * Azure Monitor Private Link Scoped Services can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:monitoring/privateLinkScopedService:PrivateLinkScopedService example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Insights/privateLinkScopes/pls1/scopedResources/sr1
 * ```
 */
export declare class PrivateLinkScopedService extends pulumi.CustomResource {
    /**
     * Get an existing PrivateLinkScopedService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PrivateLinkScopedServiceState, opts?: pulumi.CustomResourceOptions): PrivateLinkScopedService;
    /**
     * Returns true if the given object is an instance of PrivateLinkScopedService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PrivateLinkScopedService;
    /**
     * The ID of the linked resource. It must be the Log Analytics Workspace or the Application Insights component. Changing this forces a new resource to be created.
     */
    readonly linkedResourceId: pulumi.Output<string>;
    /**
     * The name of the Azure Monitor Private Link Scoped Service. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Azure Monitor Private Link Scoped Service should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The name of the Azure Monitor Private Link Scope. Changing this forces a new resource to be created.
     */
    readonly scopeName: pulumi.Output<string>;
    /**
     * Create a PrivateLinkScopedService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateLinkScopedServiceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering PrivateLinkScopedService resources.
 */
export interface PrivateLinkScopedServiceState {
    /**
     * The ID of the linked resource. It must be the Log Analytics Workspace or the Application Insights component. Changing this forces a new resource to be created.
     */
    linkedResourceId?: pulumi.Input<string>;
    /**
     * The name of the Azure Monitor Private Link Scoped Service. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Azure Monitor Private Link Scoped Service should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The name of the Azure Monitor Private Link Scope. Changing this forces a new resource to be created.
     */
    scopeName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a PrivateLinkScopedService resource.
 */
export interface PrivateLinkScopedServiceArgs {
    /**
     * The ID of the linked resource. It must be the Log Analytics Workspace or the Application Insights component. Changing this forces a new resource to be created.
     */
    linkedResourceId: pulumi.Input<string>;
    /**
     * The name of the Azure Monitor Private Link Scoped Service. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Azure Monitor Private Link Scoped Service should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Azure Monitor Private Link Scope. Changing this forces a new resource to be created.
     */
    scopeName: pulumi.Input<string>;
}
