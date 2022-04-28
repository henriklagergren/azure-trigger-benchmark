import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure Media Asset Filter.
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
 * const exampleAssetFilter = new azure.media.AssetFilter("exampleAssetFilter", {
 *     assetId: exampleAsset.id,
 *     firstQualityBitrate: 128000,
 *     presentationTimeRange: {
 *         startInUnits: 0,
 *         endInUnits: 15,
 *         presentationWindowInUnits: 90,
 *         liveBackoffInUnits: 0,
 *         unitTimescaleInMiliseconds: 1000,
 *         forceEnd: false,
 *     },
 *     trackSelections: [
 *         {
 *             conditions: [
 *                 {
 *                     property: "Type",
 *                     operation: "Equal",
 *                     value: "Audio",
 *                 },
 *                 {
 *                     property: "Language",
 *                     operation: "NotEqual",
 *                     value: "en",
 *                 },
 *                 {
 *                     property: "FourCC",
 *                     operation: "NotEqual",
 *                     value: "EC-3",
 *                 },
 *             ],
 *         },
 *         {
 *             conditions: [
 *                 {
 *                     property: "Type",
 *                     operation: "Equal",
 *                     value: "Video",
 *                 },
 *                 {
 *                     property: "Bitrate",
 *                     operation: "Equal",
 *                     value: "3000000-5000000",
 *                 },
 *             ],
 *         },
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * Asset Filters can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:media/assetFilter:AssetFilter example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Media/mediaservices/account1/assets/asset1/assetFilters/filter1
 * ```
 */
export declare class AssetFilter extends pulumi.CustomResource {
    /**
     * Get an existing AssetFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AssetFilterState, opts?: pulumi.CustomResourceOptions): AssetFilter;
    /**
     * Returns true if the given object is an instance of AssetFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AssetFilter;
    /**
     * The Asset ID for which the Asset Filter should be created. Changing this forces a new Asset Filter to be created.
     */
    readonly assetId: pulumi.Output<string>;
    /**
     * The first quality bitrate. Sets the first video track to appear in the Live Streaming playlist to allow HLS native players to start downloading from this quality level at the beginning.
     */
    readonly firstQualityBitrate: pulumi.Output<number | undefined>;
    /**
     * The name which should be used for this Asset Filter. Changing this forces a new Asset Filter to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `presentationTimeRange` block as defined below.
     */
    readonly presentationTimeRange: pulumi.Output<outputs.media.AssetFilterPresentationTimeRange | undefined>;
    /**
     * One or more `trackSelection` blocks as defined below.
     */
    readonly trackSelections: pulumi.Output<outputs.media.AssetFilterTrackSelection[] | undefined>;
    /**
     * Create a AssetFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssetFilterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AssetFilter resources.
 */
export interface AssetFilterState {
    /**
     * The Asset ID for which the Asset Filter should be created. Changing this forces a new Asset Filter to be created.
     */
    assetId?: pulumi.Input<string>;
    /**
     * The first quality bitrate. Sets the first video track to appear in the Live Streaming playlist to allow HLS native players to start downloading from this quality level at the beginning.
     */
    firstQualityBitrate?: pulumi.Input<number>;
    /**
     * The name which should be used for this Asset Filter. Changing this forces a new Asset Filter to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `presentationTimeRange` block as defined below.
     */
    presentationTimeRange?: pulumi.Input<inputs.media.AssetFilterPresentationTimeRange>;
    /**
     * One or more `trackSelection` blocks as defined below.
     */
    trackSelections?: pulumi.Input<pulumi.Input<inputs.media.AssetFilterTrackSelection>[]>;
}
/**
 * The set of arguments for constructing a AssetFilter resource.
 */
export interface AssetFilterArgs {
    /**
     * The Asset ID for which the Asset Filter should be created. Changing this forces a new Asset Filter to be created.
     */
    assetId: pulumi.Input<string>;
    /**
     * The first quality bitrate. Sets the first video track to appear in the Live Streaming playlist to allow HLS native players to start downloading from this quality level at the beginning.
     */
    firstQualityBitrate?: pulumi.Input<number>;
    /**
     * The name which should be used for this Asset Filter. Changing this forces a new Asset Filter to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `presentationTimeRange` block as defined below.
     */
    presentationTimeRange?: pulumi.Input<inputs.media.AssetFilterPresentationTimeRange>;
    /**
     * One or more `trackSelection` blocks as defined below.
     */
    trackSelections?: pulumi.Input<pulumi.Input<inputs.media.AssetFilterTrackSelection>[]>;
}
