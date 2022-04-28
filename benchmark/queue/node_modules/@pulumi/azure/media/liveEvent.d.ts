import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Live Event.
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
 * const exampleLiveEvent = new azure.media.LiveEvent("exampleLiveEvent", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     mediaServicesAccountName: exampleServiceAccount.name,
 *     description: "My Event Description",
 *     input: {
 *         streamingProtocol: "RTMP",
 *         ipAccessControlAllows: [{
 *             name: "AllowAll",
 *             address: "0.0.0.0",
 *             subnetPrefixLength: 0,
 *         }],
 *     },
 *     encoding: {
 *         type: "Standard",
 *         presetName: "Default720p",
 *         stretchMode: "AutoFit",
 *         keyFrameInterval: "PT2S",
 *     },
 *     preview: {
 *         ipAccessControlAllows: [{
 *             name: "AllowAll",
 *             address: "0.0.0.0",
 *             subnetPrefixLength: 0,
 *         }],
 *     },
 *     useStaticHostname: true,
 *     hostnamePrefix: "special-event",
 *     transcriptionLanguages: ["en-US"],
 * });
 * ```
 *
 * ## Import
 *
 * Live Events can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:media/liveEvent:LiveEvent example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resGroup1/providers/Microsoft.Media/mediaservices/account1/liveevents/event1
 * ```
 */
export declare class LiveEvent extends pulumi.CustomResource {
    /**
     * Get an existing LiveEvent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LiveEventState, opts?: pulumi.CustomResourceOptions): LiveEvent;
    /**
     * Returns true if the given object is an instance of LiveEvent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LiveEvent;
    /**
     * The flag indicates if the resource should be automatically started on creation. Default is `false`.
     */
    readonly autoStartEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A `crossSiteAccessPolicy` block as defined below.
     */
    readonly crossSiteAccessPolicy: pulumi.Output<outputs.media.LiveEventCrossSiteAccessPolicy | undefined>;
    /**
     * A description for the live event.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * A `encoding` block as defined below.
     */
    readonly encoding: pulumi.Output<outputs.media.LiveEventEncoding | undefined>;
    /**
     * When `useStaticHostname` is set to true, the `hostnamePrefix` specifies the first part of the hostname assigned to the live event preview and ingest endpoints. The final hostname would be a combination of this prefix, the media service account name and a short code for the Azure Media Services data center.
     */
    readonly hostnamePrefix: pulumi.Output<string | undefined>;
    /**
     * A `input` block as defined below.
     */
    readonly input: pulumi.Output<outputs.media.LiveEventInput>;
    /**
     * The Azure Region where the Live Event should exist. Changing this forces a new Live Event to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The Media Services account name. Changing this forces a new Live Event to be created.
     */
    readonly mediaServicesAccountName: pulumi.Output<string>;
    /**
     * The name which should be used for this Live Event. Changing this forces a new Live Event to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `preview` block as defined below.
     */
    readonly preview: pulumi.Output<outputs.media.LiveEventPreview>;
    /**
     * The name of the Resource Group where the Live Event should exist. Changing this forces a new Live Event to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Live Event.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies a list of languages (locale) to be used for speech-to-text transcription – it should match the spoken language in the audio track. The value should be in `BCP-47` format (e.g: `en-US`). [See the Microsoft Documentation for more information about the live transcription feature and the list of supported languages](https://go.microsoft.com/fwlink/?linkid=2133742 ).
     */
    readonly transcriptionLanguages: pulumi.Output<string[] | undefined>;
    /**
     * Specifies whether a static hostname would be assigned to the live event preview and ingest endpoints. Changing this forces a new Live Event to be created.
     * ---
     */
    readonly useStaticHostname: pulumi.Output<boolean | undefined>;
    /**
     * Create a LiveEvent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LiveEventArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LiveEvent resources.
 */
export interface LiveEventState {
    /**
     * The flag indicates if the resource should be automatically started on creation. Default is `false`.
     */
    autoStartEnabled?: pulumi.Input<boolean>;
    /**
     * A `crossSiteAccessPolicy` block as defined below.
     */
    crossSiteAccessPolicy?: pulumi.Input<inputs.media.LiveEventCrossSiteAccessPolicy>;
    /**
     * A description for the live event.
     */
    description?: pulumi.Input<string>;
    /**
     * A `encoding` block as defined below.
     */
    encoding?: pulumi.Input<inputs.media.LiveEventEncoding>;
    /**
     * When `useStaticHostname` is set to true, the `hostnamePrefix` specifies the first part of the hostname assigned to the live event preview and ingest endpoints. The final hostname would be a combination of this prefix, the media service account name and a short code for the Azure Media Services data center.
     */
    hostnamePrefix?: pulumi.Input<string>;
    /**
     * A `input` block as defined below.
     */
    input?: pulumi.Input<inputs.media.LiveEventInput>;
    /**
     * The Azure Region where the Live Event should exist. Changing this forces a new Live Event to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The Media Services account name. Changing this forces a new Live Event to be created.
     */
    mediaServicesAccountName?: pulumi.Input<string>;
    /**
     * The name which should be used for this Live Event. Changing this forces a new Live Event to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `preview` block as defined below.
     */
    preview?: pulumi.Input<inputs.media.LiveEventPreview>;
    /**
     * The name of the Resource Group where the Live Event should exist. Changing this forces a new Live Event to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Live Event.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies a list of languages (locale) to be used for speech-to-text transcription – it should match the spoken language in the audio track. The value should be in `BCP-47` format (e.g: `en-US`). [See the Microsoft Documentation for more information about the live transcription feature and the list of supported languages](https://go.microsoft.com/fwlink/?linkid=2133742 ).
     */
    transcriptionLanguages?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies whether a static hostname would be assigned to the live event preview and ingest endpoints. Changing this forces a new Live Event to be created.
     * ---
     */
    useStaticHostname?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a LiveEvent resource.
 */
export interface LiveEventArgs {
    /**
     * The flag indicates if the resource should be automatically started on creation. Default is `false`.
     */
    autoStartEnabled?: pulumi.Input<boolean>;
    /**
     * A `crossSiteAccessPolicy` block as defined below.
     */
    crossSiteAccessPolicy?: pulumi.Input<inputs.media.LiveEventCrossSiteAccessPolicy>;
    /**
     * A description for the live event.
     */
    description?: pulumi.Input<string>;
    /**
     * A `encoding` block as defined below.
     */
    encoding?: pulumi.Input<inputs.media.LiveEventEncoding>;
    /**
     * When `useStaticHostname` is set to true, the `hostnamePrefix` specifies the first part of the hostname assigned to the live event preview and ingest endpoints. The final hostname would be a combination of this prefix, the media service account name and a short code for the Azure Media Services data center.
     */
    hostnamePrefix?: pulumi.Input<string>;
    /**
     * A `input` block as defined below.
     */
    input: pulumi.Input<inputs.media.LiveEventInput>;
    /**
     * The Azure Region where the Live Event should exist. Changing this forces a new Live Event to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The Media Services account name. Changing this forces a new Live Event to be created.
     */
    mediaServicesAccountName: pulumi.Input<string>;
    /**
     * The name which should be used for this Live Event. Changing this forces a new Live Event to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `preview` block as defined below.
     */
    preview?: pulumi.Input<inputs.media.LiveEventPreview>;
    /**
     * The name of the Resource Group where the Live Event should exist. Changing this forces a new Live Event to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Live Event.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies a list of languages (locale) to be used for speech-to-text transcription – it should match the spoken language in the audio track. The value should be in `BCP-47` format (e.g: `en-US`). [See the Microsoft Documentation for more information about the live transcription feature and the list of supported languages](https://go.microsoft.com/fwlink/?linkid=2133742 ).
     */
    transcriptionLanguages?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies whether a static hostname would be assigned to the live event preview and ingest endpoints. Changing this forces a new Live Event to be created.
     * ---
     */
    useStaticHostname?: pulumi.Input<boolean>;
}
