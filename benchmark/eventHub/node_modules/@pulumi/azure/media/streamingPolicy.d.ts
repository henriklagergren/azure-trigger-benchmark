import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Streaming Policy.
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
 * const exampleStreamingPolicy = new azure.media.StreamingPolicy("exampleStreamingPolicy", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     mediaServicesAccountName: exampleServiceAccount.name,
 *     commonEncryptionCenc: {
 *         enabledProtocols: {
 *             download: false,
 *             dash: true,
 *             hls: false,
 *             smoothStreaming: false,
 *         },
 *         drmPlayready: {
 *             customLicenseAcquisitionUrlTemplate: "https://contoso.com/{AssetAlternativeId}/playready/{ContentKeyId}",
 *             customAttributes: "PlayReady CustomAttributes",
 *         },
 *         drmWidevineCustomLicenseAcquisitionUrlTemplate: "https://contoso.com/{AssetAlternativeId}/widevine/{ContentKeyId}",
 *     },
 *     commonEncryptionCbcs: {
 *         enabledProtocols: {
 *             download: false,
 *             dash: true,
 *             hls: false,
 *             smoothStreaming: false,
 *         },
 *         drmFairplay: {
 *             customLicenseAcquisitionUrlTemplate: "https://contoso.com/{AssetAlternativeId}/fairplay/{ContentKeyId}",
 *             allowPersistentLicense: true,
 *         },
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Streaming Policies can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:media/streamingPolicy:StreamingPolicy example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Media/mediaservices/account1/streamingpolicies/policy1
 * ```
 */
export declare class StreamingPolicy extends pulumi.CustomResource {
    /**
     * Get an existing StreamingPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StreamingPolicyState, opts?: pulumi.CustomResourceOptions): StreamingPolicy;
    /**
     * Returns true if the given object is an instance of StreamingPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StreamingPolicy;
    /**
     * A `commonEncryptionCbcs` block as defined below. Changing this forces a new Streaming Policy to be created.
     */
    readonly commonEncryptionCbcs: pulumi.Output<outputs.media.StreamingPolicyCommonEncryptionCbcs | undefined>;
    /**
     * A `commonEncryptionCenc` block as defined below. Changing this forces a new Streaming Policy to be created.
     */
    readonly commonEncryptionCenc: pulumi.Output<outputs.media.StreamingPolicyCommonEncryptionCenc | undefined>;
    /**
     * Default Content Key used by current Streaming Policy. Changing this forces a new Streaming Policy to be created.
     */
    readonly defaultContentKeyPolicyName: pulumi.Output<string | undefined>;
    /**
     * The Media Services account name. Changing this forces a new Streaming Policy to be created.
     */
    readonly mediaServicesAccountName: pulumi.Output<string>;
    /**
     * The name which should be used for this Streaming Policy. Changing this forces a new Streaming Policy to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `noEncryptionEnabledProtocols` block as defined below. Changing this forces a new Streaming Policy to be created.
     */
    readonly noEncryptionEnabledProtocols: pulumi.Output<outputs.media.StreamingPolicyNoEncryptionEnabledProtocols | undefined>;
    /**
     * The name of the Resource Group where the Streaming Policy should exist. Changing this forces a new Streaming Policy to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a StreamingPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StreamingPolicyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering StreamingPolicy resources.
 */
export interface StreamingPolicyState {
    /**
     * A `commonEncryptionCbcs` block as defined below. Changing this forces a new Streaming Policy to be created.
     */
    commonEncryptionCbcs?: pulumi.Input<inputs.media.StreamingPolicyCommonEncryptionCbcs>;
    /**
     * A `commonEncryptionCenc` block as defined below. Changing this forces a new Streaming Policy to be created.
     */
    commonEncryptionCenc?: pulumi.Input<inputs.media.StreamingPolicyCommonEncryptionCenc>;
    /**
     * Default Content Key used by current Streaming Policy. Changing this forces a new Streaming Policy to be created.
     */
    defaultContentKeyPolicyName?: pulumi.Input<string>;
    /**
     * The Media Services account name. Changing this forces a new Streaming Policy to be created.
     */
    mediaServicesAccountName?: pulumi.Input<string>;
    /**
     * The name which should be used for this Streaming Policy. Changing this forces a new Streaming Policy to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `noEncryptionEnabledProtocols` block as defined below. Changing this forces a new Streaming Policy to be created.
     */
    noEncryptionEnabledProtocols?: pulumi.Input<inputs.media.StreamingPolicyNoEncryptionEnabledProtocols>;
    /**
     * The name of the Resource Group where the Streaming Policy should exist. Changing this forces a new Streaming Policy to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a StreamingPolicy resource.
 */
export interface StreamingPolicyArgs {
    /**
     * A `commonEncryptionCbcs` block as defined below. Changing this forces a new Streaming Policy to be created.
     */
    commonEncryptionCbcs?: pulumi.Input<inputs.media.StreamingPolicyCommonEncryptionCbcs>;
    /**
     * A `commonEncryptionCenc` block as defined below. Changing this forces a new Streaming Policy to be created.
     */
    commonEncryptionCenc?: pulumi.Input<inputs.media.StreamingPolicyCommonEncryptionCenc>;
    /**
     * Default Content Key used by current Streaming Policy. Changing this forces a new Streaming Policy to be created.
     */
    defaultContentKeyPolicyName?: pulumi.Input<string>;
    /**
     * The Media Services account name. Changing this forces a new Streaming Policy to be created.
     */
    mediaServicesAccountName: pulumi.Input<string>;
    /**
     * The name which should be used for this Streaming Policy. Changing this forces a new Streaming Policy to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `noEncryptionEnabledProtocols` block as defined below. Changing this forces a new Streaming Policy to be created.
     */
    noEncryptionEnabledProtocols?: pulumi.Input<inputs.media.StreamingPolicyNoEncryptionEnabledProtocols>;
    /**
     * The name of the Resource Group where the Streaming Policy should exist. Changing this forces a new Streaming Policy to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
