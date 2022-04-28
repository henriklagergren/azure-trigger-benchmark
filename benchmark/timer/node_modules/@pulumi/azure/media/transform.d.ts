import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Transform.
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
 * const exampleServiceAccount = new azure.media.ServiceAccount("exampleServiceAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     storageAccounts: [{
 *         id: exampleAccount.id,
 *         isPrimary: true,
 *     }],
 * });
 * const exampleTransform = new azure.media.Transform("exampleTransform", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     mediaServicesAccountName: exampleServiceAccount.name,
 *     description: "My transform description",
 *     outputs: [{
 *         relativePriority: "Normal",
 *         onErrorAction: "ContinueJob",
 *         builtinPreset: {
 *             presetName: "AACGoodQualityAudio",
 *         },
 *     }],
 * });
 * ```
 * ### With Multiple Outputs
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
 * const exampleServiceAccount = new azure.media.ServiceAccount("exampleServiceAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     storageAccounts: [{
 *         id: exampleAccount.id,
 *         isPrimary: true,
 *     }],
 * });
 * const exampleTransform = new azure.media.Transform("exampleTransform", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     mediaServicesAccountName: exampleServiceAccount.name,
 *     description: "My transform description",
 *     outputs: [
 *         {
 *             relativePriority: "Normal",
 *             onErrorAction: "ContinueJob",
 *             builtinPreset: {
 *                 presetName: "AACGoodQualityAudio",
 *             },
 *         },
 *         {
 *             relativePriority: "Low",
 *             onErrorAction: "ContinueJob",
 *             audioAnalyzerPreset: {
 *                 audioLanguage: "en-US",
 *                 audioAnalysisMode: "Basic",
 *             },
 *         },
 *         {
 *             relativePriority: "Low",
 *             onErrorAction: "StopProcessingJob",
 *             faceDetectorPreset: {
 *                 analysisResolution: "StandardDefinition",
 *             },
 *         },
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * Transforms can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:media/transform:Transform example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Media/mediaservices/media1/transforms/transform1
 * ```
 */
export declare class Transform extends pulumi.CustomResource {
    /**
     * Get an existing Transform resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TransformState, opts?: pulumi.CustomResourceOptions): Transform;
    /**
     * Returns true if the given object is an instance of Transform.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Transform;
    /**
     * An optional verbose description of the Transform.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The Media Services account name. Changing this forces a new Transform to be created.
     */
    readonly mediaServicesAccountName: pulumi.Output<string>;
    /**
     * The name which should be used for this Transform. Changing this forces a new Transform to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * One or more `output` blocks as defined below. At least one `output` must be defined.
     */
    readonly outputs: pulumi.Output<outputs.media.TransformOutput[] | undefined>;
    /**
     * The name of the Resource Group where the Transform should exist. Changing this forces a new Transform to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a Transform resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TransformArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Transform resources.
 */
export interface TransformState {
    /**
     * An optional verbose description of the Transform.
     */
    description?: pulumi.Input<string>;
    /**
     * The Media Services account name. Changing this forces a new Transform to be created.
     */
    mediaServicesAccountName?: pulumi.Input<string>;
    /**
     * The name which should be used for this Transform. Changing this forces a new Transform to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `output` blocks as defined below. At least one `output` must be defined.
     */
    outputs?: pulumi.Input<pulumi.Input<inputs.media.TransformOutput>[]>;
    /**
     * The name of the Resource Group where the Transform should exist. Changing this forces a new Transform to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Transform resource.
 */
export interface TransformArgs {
    /**
     * An optional verbose description of the Transform.
     */
    description?: pulumi.Input<string>;
    /**
     * The Media Services account name. Changing this forces a new Transform to be created.
     */
    mediaServicesAccountName: pulumi.Input<string>;
    /**
     * The name which should be used for this Transform. Changing this forces a new Transform to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `output` blocks as defined below. At least one `output` must be defined.
     */
    outputs?: pulumi.Input<pulumi.Input<inputs.media.TransformOutput>[]>;
    /**
     * The name of the Resource Group where the Transform should exist. Changing this forces a new Transform to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
