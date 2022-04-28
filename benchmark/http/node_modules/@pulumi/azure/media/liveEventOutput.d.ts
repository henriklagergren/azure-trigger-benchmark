import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Azure Media Live Event Output.
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
 * });
 * const exampleLiveEvent = new azure.media.LiveEvent("exampleLiveEvent", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     mediaServicesAccountName: exampleServiceAccount.name,
 *     description: "My Event Description",
 *     input: {
 *         streamingProtocol: "RTMP",
 *         keyFrameIntervalDuration: "PT6S",
 *         ipAccessControlAllows: [{
 *             name: "AllowAll",
 *             address: "0.0.0.0",
 *             subnetPrefixLength: 0,
 *         }],
 *     },
 * });
 * const exampleLiveEventOutput = new azure.media.LiveEventOutput("exampleLiveEventOutput", {
 *     liveEventId: exampleLiveEvent.id,
 *     archiveWindowLength: "PT5M",
 *     assetName: exampleAsset.name,
 *     description: "Test live output 1",
 *     manifestName: "testmanifest",
 *     outputSnapTimeInSeconds: 0,
 *     hlsFragmentsPerTsSegment: 5,
 * });
 * ```
 *
 * ## Import
 *
 * Live Outputs can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:media/liveEventOutput:LiveEventOutput example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Media/mediaservices/account1/liveevents/event1/liveoutputs/output1
 * ```
 */
export declare class LiveEventOutput extends pulumi.CustomResource {
    /**
     * Get an existing LiveEventOutput resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LiveEventOutputState, opts?: pulumi.CustomResourceOptions): LiveEventOutput;
    /**
     * Returns true if the given object is an instance of LiveEventOutput.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LiveEventOutput;
    /**
     * `ISO 8601` time between 1 minute to 25 hours to indicate the maximum content length that can be archived in the asset for this live output. This also sets the maximum content length for the rewind window. For example, use `PT1H30M` to indicate 1 hour and 30 minutes of archive window. Changing this forces a new Live Output to be created.
     */
    readonly archiveWindowDuration: pulumi.Output<string>;
    /**
     * The asset that the live output will write to. Changing this forces a new Live Output to be created.
     */
    readonly assetName: pulumi.Output<string>;
    /**
     * The description of the live output. Changing this forces a new Live Output to be created.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The number of fragments in an HTTP Live Streaming (HLS) TS segment in the output of the live event. This value does not affect the packing ratio for HLS CMAF output. Changing this forces a new Live Output to be created.
     */
    readonly hlsFragmentsPerTsSegment: pulumi.Output<number | undefined>;
    /**
     * The id of the live event. Changing this forces a new Live Output to be created.
     */
    readonly liveEventId: pulumi.Output<string>;
    /**
     * The manifest file name. If not provided, the service will generate one automatically. Changing this forces a new Live Output to be created.
     */
    readonly manifestName: pulumi.Output<string>;
    /**
     * The name which should be used for this Live Event Output. Changing this forces a new Live Output to be created.
     */
    readonly name: pulumi.Output<string>;
    readonly outputSnapTimeInSeconds: pulumi.Output<number | undefined>;
    /**
     * Create a LiveEventOutput resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LiveEventOutputArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LiveEventOutput resources.
 */
export interface LiveEventOutputState {
    /**
     * `ISO 8601` time between 1 minute to 25 hours to indicate the maximum content length that can be archived in the asset for this live output. This also sets the maximum content length for the rewind window. For example, use `PT1H30M` to indicate 1 hour and 30 minutes of archive window. Changing this forces a new Live Output to be created.
     */
    archiveWindowDuration?: pulumi.Input<string>;
    /**
     * The asset that the live output will write to. Changing this forces a new Live Output to be created.
     */
    assetName?: pulumi.Input<string>;
    /**
     * The description of the live output. Changing this forces a new Live Output to be created.
     */
    description?: pulumi.Input<string>;
    /**
     * The number of fragments in an HTTP Live Streaming (HLS) TS segment in the output of the live event. This value does not affect the packing ratio for HLS CMAF output. Changing this forces a new Live Output to be created.
     */
    hlsFragmentsPerTsSegment?: pulumi.Input<number>;
    /**
     * The id of the live event. Changing this forces a new Live Output to be created.
     */
    liveEventId?: pulumi.Input<string>;
    /**
     * The manifest file name. If not provided, the service will generate one automatically. Changing this forces a new Live Output to be created.
     */
    manifestName?: pulumi.Input<string>;
    /**
     * The name which should be used for this Live Event Output. Changing this forces a new Live Output to be created.
     */
    name?: pulumi.Input<string>;
    outputSnapTimeInSeconds?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a LiveEventOutput resource.
 */
export interface LiveEventOutputArgs {
    /**
     * `ISO 8601` time between 1 minute to 25 hours to indicate the maximum content length that can be archived in the asset for this live output. This also sets the maximum content length for the rewind window. For example, use `PT1H30M` to indicate 1 hour and 30 minutes of archive window. Changing this forces a new Live Output to be created.
     */
    archiveWindowDuration: pulumi.Input<string>;
    /**
     * The asset that the live output will write to. Changing this forces a new Live Output to be created.
     */
    assetName: pulumi.Input<string>;
    /**
     * The description of the live output. Changing this forces a new Live Output to be created.
     */
    description?: pulumi.Input<string>;
    /**
     * The number of fragments in an HTTP Live Streaming (HLS) TS segment in the output of the live event. This value does not affect the packing ratio for HLS CMAF output. Changing this forces a new Live Output to be created.
     */
    hlsFragmentsPerTsSegment?: pulumi.Input<number>;
    /**
     * The id of the live event. Changing this forces a new Live Output to be created.
     */
    liveEventId: pulumi.Input<string>;
    /**
     * The manifest file name. If not provided, the service will generate one automatically. Changing this forces a new Live Output to be created.
     */
    manifestName?: pulumi.Input<string>;
    /**
     * The name which should be used for this Live Event Output. Changing this forces a new Live Output to be created.
     */
    name?: pulumi.Input<string>;
    outputSnapTimeInSeconds?: pulumi.Input<number>;
}
