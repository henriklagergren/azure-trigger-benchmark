import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Video Analyzer Edge Module.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "GRS",
 * });
 * const exampleUserAssignedIdentity = new azure.authorization.UserAssignedIdentity("exampleUserAssignedIdentity", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * const contributor = new azure.authorization.Assignment("contributor", {
 *     scope: exampleAccount.id,
 *     roleDefinitionName: "Storage Blob Data Contributor",
 *     principalId: exampleUserAssignedIdentity.principalId,
 * });
 * const reader = new azure.authorization.Assignment("reader", {
 *     scope: exampleAccount.id,
 *     roleDefinitionName: "Reader",
 *     principalId: exampleUserAssignedIdentity.principalId,
 * });
 * const exampleAnalyzer = new azure.videoanalyzer.Analyzer("exampleAnalyzer", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     storageAccount: {
 *         id: exampleAccount.id,
 *         userAssignedIdentityId: exampleUserAssignedIdentity.id,
 *     },
 *     identity: {
 *         type: "UserAssigned",
 *         identityIds: [exampleUserAssignedIdentity.id],
 *     },
 *     tags: {
 *         environment: "staging",
 *     },
 * }, {
 *     dependsOn: [
 *         exampleUserAssignedIdentity,
 *         contributor,
 *         reader,
 *     ],
 * });
 * const exampleEdgeModule = new azure.videoanalyzer.EdgeModule("exampleEdgeModule", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     videoAnalyzerName: exampleAnalyzer.name,
 * });
 * ```
 *
 * ## Import
 *
 * Video Analyzer Edge Module can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:videoanalyzer/edgeModule:EdgeModule edge /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Media/videoAnalyzers/analyzer1/edgeModules/edge1
 * ```
 */
export declare class EdgeModule extends pulumi.CustomResource {
    /**
     * Get an existing EdgeModule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EdgeModuleState, opts?: pulumi.CustomResourceOptions): EdgeModule;
    /**
     * Returns true if the given object is an instance of EdgeModule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EdgeModule;
    /**
     * Specifies the name of the Video Analyzer Edge Module. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Video Analyzer Edge Module. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The name of the Video Analyzer in which to create the Edge Module. Changing this forces a new resource to be created.
     */
    readonly videoAnalyzerName: pulumi.Output<string>;
    /**
     * Create a EdgeModule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EdgeModuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering EdgeModule resources.
 */
export interface EdgeModuleState {
    /**
     * Specifies the name of the Video Analyzer Edge Module. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Video Analyzer Edge Module. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The name of the Video Analyzer in which to create the Edge Module. Changing this forces a new resource to be created.
     */
    videoAnalyzerName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a EdgeModule resource.
 */
export interface EdgeModuleArgs {
    /**
     * Specifies the name of the Video Analyzer Edge Module. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Video Analyzer Edge Module. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Video Analyzer in which to create the Edge Module. Changing this forces a new resource to be created.
     */
    videoAnalyzerName: pulumi.Input<string>;
}
