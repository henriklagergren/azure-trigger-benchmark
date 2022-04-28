import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Video Analyzer.
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
 *         contributor,
 *         reader,
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * Video Analyzer can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:videoanalyzer/analyzer:Analyzer analyzer /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Media/videoAnalyzers/analyzer1
 * ```
 */
export declare class Analyzer extends pulumi.CustomResource {
    /**
     * Get an existing Analyzer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AnalyzerState, opts?: pulumi.CustomResourceOptions): Analyzer;
    /**
     * Returns true if the given object is an instance of Analyzer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Analyzer;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.videoanalyzer.AnalyzerIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Video Analyzer. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Video Analyzer. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `storageAccount` block as defined below.
     */
    readonly storageAccount: pulumi.Output<outputs.videoanalyzer.AnalyzerStorageAccount>;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Analyzer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AnalyzerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Analyzer resources.
 */
export interface AnalyzerState {
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.videoanalyzer.AnalyzerIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Video Analyzer. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Video Analyzer. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `storageAccount` block as defined below.
     */
    storageAccount?: pulumi.Input<inputs.videoanalyzer.AnalyzerStorageAccount>;
    /**
     * A mapping of tags assigned to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Analyzer resource.
 */
export interface AnalyzerArgs {
    /**
     * An `identity` block as defined below.
     */
    identity: pulumi.Input<inputs.videoanalyzer.AnalyzerIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Video Analyzer. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Video Analyzer. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `storageAccount` block as defined below.
     */
    storageAccount: pulumi.Input<inputs.videoanalyzer.AnalyzerStorageAccount>;
    /**
     * A mapping of tags assigned to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
