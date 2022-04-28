import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Media Streaming Locator.
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
 * const exampleAsset = new azure.media.Asset("exampleAsset", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     mediaServicesAccountName: exampleServiceAccount.name,
 *     description: "Asset description",
 * });
 * const exampleStreamingLocator = new azure.media.StreamingLocator("exampleStreamingLocator", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     mediaServicesAccountName: exampleServiceAccount.name,
 *     assetName: exampleAsset.name,
 *     streamingPolicyName: "Predefined_ClearStreamingOnly",
 * });
 * ```
 *
 * ## Import
 *
 * Streaming Locators can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:media/streamingLocator:StreamingLocator example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Media/mediaservices/account1/streaminglocators/locator1
 * ```
 */
export declare class StreamingLocator extends pulumi.CustomResource {
    /**
     * Get an existing StreamingLocator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StreamingLocatorState, opts?: pulumi.CustomResourceOptions): StreamingLocator;
    /**
     * Returns true if the given object is an instance of StreamingLocator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StreamingLocator;
    /**
     * Alternative Media ID of this Streaming Locator. Changing this forces a new Streaming Locator to be created.
     */
    readonly alternativeMediaId: pulumi.Output<string | undefined>;
    /**
     * Asset Name. Changing this forces a new Streaming Locator to be created.
     */
    readonly assetName: pulumi.Output<string>;
    /**
     * One or more `contentKey` blocks as defined below. Changing this forces a new Streaming Locator to be created.
     */
    readonly contentKeys: pulumi.Output<outputs.media.StreamingLocatorContentKey[] | undefined>;
    /**
     * Name of the default Content Key Policy used by this Streaming Locator.Changing this forces a new Streaming Locator to be created.
     */
    readonly defaultContentKeyPolicyName: pulumi.Output<string | undefined>;
    /**
     * The end time of the Streaming Locator. Changing this forces a new Streaming Locator to be created.
     */
    readonly endTime: pulumi.Output<string>;
    /**
     * The Media Services account name. Changing this forces a new Streaming Locator to be created.
     */
    readonly mediaServicesAccountName: pulumi.Output<string>;
    /**
     * The name which should be used for this Streaming Locator. Changing this forces a new Streaming Locator to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Streaming Locator should exist. Changing this forces a new Streaming Locator to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The start time of the Streaming Locator. Changing this forces a new Streaming Locator to be created.
     */
    readonly startTime: pulumi.Output<string | undefined>;
    /**
     * The ID of the Streaming Locator. Changing this forces a new Streaming Locator to be created.
     */
    readonly streamingLocatorId: pulumi.Output<string>;
    /**
     * Name of the Streaming Policy used by this Streaming Locator. Either specify the name of Streaming Policy you created or use one of the predefined Streaming Policies. The predefined Streaming Policies available are: `Predefined_DownloadOnly`, `Predefined_ClearStreamingOnly`, `Predefined_DownloadAndClearStreaming`, `Predefined_ClearKey`, `Predefined_MultiDrmCencStreaming` and `Predefined_MultiDrmStreaming`. Changing this forces a new Streaming Locator to be created.
     */
    readonly streamingPolicyName: pulumi.Output<string>;
    /**
     * Create a StreamingLocator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StreamingLocatorArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering StreamingLocator resources.
 */
export interface StreamingLocatorState {
    /**
     * Alternative Media ID of this Streaming Locator. Changing this forces a new Streaming Locator to be created.
     */
    alternativeMediaId?: pulumi.Input<string>;
    /**
     * Asset Name. Changing this forces a new Streaming Locator to be created.
     */
    assetName?: pulumi.Input<string>;
    /**
     * One or more `contentKey` blocks as defined below. Changing this forces a new Streaming Locator to be created.
     */
    contentKeys?: pulumi.Input<pulumi.Input<inputs.media.StreamingLocatorContentKey>[]>;
    /**
     * Name of the default Content Key Policy used by this Streaming Locator.Changing this forces a new Streaming Locator to be created.
     */
    defaultContentKeyPolicyName?: pulumi.Input<string>;
    /**
     * The end time of the Streaming Locator. Changing this forces a new Streaming Locator to be created.
     */
    endTime?: pulumi.Input<string>;
    /**
     * The Media Services account name. Changing this forces a new Streaming Locator to be created.
     */
    mediaServicesAccountName?: pulumi.Input<string>;
    /**
     * The name which should be used for this Streaming Locator. Changing this forces a new Streaming Locator to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Streaming Locator should exist. Changing this forces a new Streaming Locator to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The start time of the Streaming Locator. Changing this forces a new Streaming Locator to be created.
     */
    startTime?: pulumi.Input<string>;
    /**
     * The ID of the Streaming Locator. Changing this forces a new Streaming Locator to be created.
     */
    streamingLocatorId?: pulumi.Input<string>;
    /**
     * Name of the Streaming Policy used by this Streaming Locator. Either specify the name of Streaming Policy you created or use one of the predefined Streaming Policies. The predefined Streaming Policies available are: `Predefined_DownloadOnly`, `Predefined_ClearStreamingOnly`, `Predefined_DownloadAndClearStreaming`, `Predefined_ClearKey`, `Predefined_MultiDrmCencStreaming` and `Predefined_MultiDrmStreaming`. Changing this forces a new Streaming Locator to be created.
     */
    streamingPolicyName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a StreamingLocator resource.
 */
export interface StreamingLocatorArgs {
    /**
     * Alternative Media ID of this Streaming Locator. Changing this forces a new Streaming Locator to be created.
     */
    alternativeMediaId?: pulumi.Input<string>;
    /**
     * Asset Name. Changing this forces a new Streaming Locator to be created.
     */
    assetName: pulumi.Input<string>;
    /**
     * One or more `contentKey` blocks as defined below. Changing this forces a new Streaming Locator to be created.
     */
    contentKeys?: pulumi.Input<pulumi.Input<inputs.media.StreamingLocatorContentKey>[]>;
    /**
     * Name of the default Content Key Policy used by this Streaming Locator.Changing this forces a new Streaming Locator to be created.
     */
    defaultContentKeyPolicyName?: pulumi.Input<string>;
    /**
     * The end time of the Streaming Locator. Changing this forces a new Streaming Locator to be created.
     */
    endTime?: pulumi.Input<string>;
    /**
     * The Media Services account name. Changing this forces a new Streaming Locator to be created.
     */
    mediaServicesAccountName: pulumi.Input<string>;
    /**
     * The name which should be used for this Streaming Locator. Changing this forces a new Streaming Locator to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Streaming Locator should exist. Changing this forces a new Streaming Locator to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The start time of the Streaming Locator. Changing this forces a new Streaming Locator to be created.
     */
    startTime?: pulumi.Input<string>;
    /**
     * The ID of the Streaming Locator. Changing this forces a new Streaming Locator to be created.
     */
    streamingLocatorId?: pulumi.Input<string>;
    /**
     * Name of the Streaming Policy used by this Streaming Locator. Either specify the name of Streaming Policy you created or use one of the predefined Streaming Policies. The predefined Streaming Policies available are: `Predefined_DownloadOnly`, `Predefined_ClearStreamingOnly`, `Predefined_DownloadAndClearStreaming`, `Predefined_ClearKey`, `Predefined_MultiDrmCencStreaming` and `Predefined_MultiDrmStreaming`. Changing this forces a new Streaming Locator to be created.
     */
    streamingPolicyName: pulumi.Input<string>;
}
