import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Streaming Endpoint.
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
 * const exampleStreamingEndpoint = new azure.media.StreamingEndpoint("exampleStreamingEndpoint", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     mediaServicesAccountName: exampleServiceAccount.name,
 *     scaleUnits: 2,
 * });
 * ```
 * ### With Access Control
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
 * const exampleStreamingEndpoint = new azure.media.StreamingEndpoint("exampleStreamingEndpoint", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     mediaServicesAccountName: exampleServiceAccount.name,
 *     scaleUnits: 2,
 *     accessControl: {
 *         ipAllows: [
 *             {
 *                 name: "AllowedIP",
 *                 address: "192.168.1.1",
 *             },
 *             {
 *                 name: "AnotherIp",
 *                 address: "192.168.1.2",
 *             },
 *         ],
 *         akamaiSignatureHeaderAuthenticationKeys: [
 *             {
 *                 identifier: "id1",
 *                 expiration: "2030-12-31T16:00:00Z",
 *                 base64Key: "dGVzdGlkMQ==",
 *             },
 *             {
 *                 identifier: "id2",
 *                 expiration: "2032-01-28T16:00:00Z",
 *                 base64Key: "dGVzdGlkMQ==",
 *             },
 *         ],
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Streaming Endpoints can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:media/streamingEndpoint:StreamingEndpoint example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Media/mediaservices/service1/streamingendpoints/endpoint1
 * ```
 */
export declare class StreamingEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing StreamingEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StreamingEndpointState, opts?: pulumi.CustomResourceOptions): StreamingEndpoint;
    /**
     * Returns true if the given object is an instance of StreamingEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StreamingEndpoint;
    /**
     * A `accessControl` block as defined below.
     */
    readonly accessControl: pulumi.Output<outputs.media.StreamingEndpointAccessControl | undefined>;
    /**
     * The flag indicates if the resource should be automatically started on creation.
     */
    readonly autoStartEnabled: pulumi.Output<boolean>;
    /**
     * The CDN enabled flag.
     */
    readonly cdnEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The CDN profile name.
     */
    readonly cdnProfile: pulumi.Output<string>;
    /**
     * The CDN provider name. Supported value are `StandardVerizon`,`PremiumVerizon` and `StandardAkamai`
     */
    readonly cdnProvider: pulumi.Output<string>;
    /**
     * A `crossSiteAccessPolicy` block as defined below.
     */
    readonly crossSiteAccessPolicy: pulumi.Output<outputs.media.StreamingEndpointCrossSiteAccessPolicy | undefined>;
    /**
     * The custom host names of the streaming endpoint.
     */
    readonly customHostNames: pulumi.Output<string[] | undefined>;
    /**
     * The streaming endpoint description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The host name of the Streaming Endpoint.
     */
    readonly hostName: pulumi.Output<string>;
    /**
     * The Azure Region where the Streaming Endpoint should exist. Changing this forces a new Streaming Endpoint to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Max cache age in seconds.
     */
    readonly maxCacheAgeSeconds: pulumi.Output<number | undefined>;
    /**
     * The Media Services account name. Changing this forces a new Streaming Endpoint to be created.
     */
    readonly mediaServicesAccountName: pulumi.Output<string>;
    /**
     * The name which should be used for this Streaming Endpoint maximum length is 24. Changing this forces a new Streaming Endpoint to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Streaming Endpoint should exist. Changing this forces a new Streaming Endpoint to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The number of scale units.
     */
    readonly scaleUnits: pulumi.Output<number>;
    /**
     * A mapping of tags which should be assigned to the Streaming Endpoint.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a StreamingEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StreamingEndpointArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering StreamingEndpoint resources.
 */
export interface StreamingEndpointState {
    /**
     * A `accessControl` block as defined below.
     */
    accessControl?: pulumi.Input<inputs.media.StreamingEndpointAccessControl>;
    /**
     * The flag indicates if the resource should be automatically started on creation.
     */
    autoStartEnabled?: pulumi.Input<boolean>;
    /**
     * The CDN enabled flag.
     */
    cdnEnabled?: pulumi.Input<boolean>;
    /**
     * The CDN profile name.
     */
    cdnProfile?: pulumi.Input<string>;
    /**
     * The CDN provider name. Supported value are `StandardVerizon`,`PremiumVerizon` and `StandardAkamai`
     */
    cdnProvider?: pulumi.Input<string>;
    /**
     * A `crossSiteAccessPolicy` block as defined below.
     */
    crossSiteAccessPolicy?: pulumi.Input<inputs.media.StreamingEndpointCrossSiteAccessPolicy>;
    /**
     * The custom host names of the streaming endpoint.
     */
    customHostNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The streaming endpoint description.
     */
    description?: pulumi.Input<string>;
    /**
     * The host name of the Streaming Endpoint.
     */
    hostName?: pulumi.Input<string>;
    /**
     * The Azure Region where the Streaming Endpoint should exist. Changing this forces a new Streaming Endpoint to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Max cache age in seconds.
     */
    maxCacheAgeSeconds?: pulumi.Input<number>;
    /**
     * The Media Services account name. Changing this forces a new Streaming Endpoint to be created.
     */
    mediaServicesAccountName?: pulumi.Input<string>;
    /**
     * The name which should be used for this Streaming Endpoint maximum length is 24. Changing this forces a new Streaming Endpoint to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Streaming Endpoint should exist. Changing this forces a new Streaming Endpoint to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The number of scale units.
     */
    scaleUnits?: pulumi.Input<number>;
    /**
     * A mapping of tags which should be assigned to the Streaming Endpoint.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a StreamingEndpoint resource.
 */
export interface StreamingEndpointArgs {
    /**
     * A `accessControl` block as defined below.
     */
    accessControl?: pulumi.Input<inputs.media.StreamingEndpointAccessControl>;
    /**
     * The flag indicates if the resource should be automatically started on creation.
     */
    autoStartEnabled?: pulumi.Input<boolean>;
    /**
     * The CDN enabled flag.
     */
    cdnEnabled?: pulumi.Input<boolean>;
    /**
     * The CDN profile name.
     */
    cdnProfile?: pulumi.Input<string>;
    /**
     * The CDN provider name. Supported value are `StandardVerizon`,`PremiumVerizon` and `StandardAkamai`
     */
    cdnProvider?: pulumi.Input<string>;
    /**
     * A `crossSiteAccessPolicy` block as defined below.
     */
    crossSiteAccessPolicy?: pulumi.Input<inputs.media.StreamingEndpointCrossSiteAccessPolicy>;
    /**
     * The custom host names of the streaming endpoint.
     */
    customHostNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The streaming endpoint description.
     */
    description?: pulumi.Input<string>;
    /**
     * The Azure Region where the Streaming Endpoint should exist. Changing this forces a new Streaming Endpoint to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Max cache age in seconds.
     */
    maxCacheAgeSeconds?: pulumi.Input<number>;
    /**
     * The Media Services account name. Changing this forces a new Streaming Endpoint to be created.
     */
    mediaServicesAccountName: pulumi.Input<string>;
    /**
     * The name which should be used for this Streaming Endpoint maximum length is 24. Changing this forces a new Streaming Endpoint to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Streaming Endpoint should exist. Changing this forces a new Streaming Endpoint to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The number of scale units.
     */
    scaleUnits: pulumi.Input<number>;
    /**
     * A mapping of tags which should be assigned to the Streaming Endpoint.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
