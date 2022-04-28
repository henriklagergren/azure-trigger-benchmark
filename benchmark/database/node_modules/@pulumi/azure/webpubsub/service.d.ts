import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure Web Pubsub Service.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "east us"});
 * const exampleService = new azure.webpubsub.Service("exampleService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard_S1",
 *     capacity: 1,
 *     publicNetworkAccessEnabled: false,
 *     liveTrace: {
 *         enabled: true,
 *         messagingLogsEnabled: true,
 *         connectivityLogsEnabled: false,
 *     },
 *     identity: {
 *         type: "SystemAssigned",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Web Pubsub services can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:webpubsub/service:Service example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.SignalRService/webPubSub/pubsub1
 * ```
 */
export declare class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceState, opts?: pulumi.CustomResourceOptions): Service;
    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Service;
    /**
     * Whether to enable AAD auth? Defaults to `true`.
     */
    readonly aadAuthEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the number of units associated with this Web Pubsub resource. Valid values are:
     * Free: `1`, Standard: `1`, `2`, `5`, `10`, `20`, `50`, `100`.
     */
    readonly capacity: pulumi.Output<number | undefined>;
    readonly externalIp: pulumi.Output<string>;
    /**
     * The FQDN of the Web Pubsub service.
     */
    readonly hostname: pulumi.Output<string>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.webpubsub.ServiceIdentity | undefined>;
    /**
     * A `liveTrace` block as defined below.
     */
    readonly liveTrace: pulumi.Output<outputs.webpubsub.ServiceLiveTrace | undefined>;
    /**
     * Whether to enable local auth? Defaults to `true`.
     */
    readonly localAuthEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the supported Azure location where the Web Pubsub service exists. Changing this
     * forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the Web Pubsub service. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The primary access key for the Web Pubsub service.
     */
    readonly primaryAccessKey: pulumi.Output<string>;
    /**
     * The primary connection string for the Web Pubsub service.
     */
    readonly primaryConnectionString: pulumi.Output<string>;
    /**
     * Whether to enable public network access? Defaults to `true`.
     */
    readonly publicNetworkAccessEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The publicly accessible port of the Web Pubsub service which is designed for browser/client use.
     */
    readonly publicPort: pulumi.Output<number>;
    /**
     * The name of the resource group in which to create the Web Pubsub service. Changing
     * this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The secondary access key for the Web Pubsub service.
     */
    readonly secondaryAccessKey: pulumi.Output<string>;
    /**
     * The secondary connection string for the Web Pubsub service.
     */
    readonly secondaryConnectionString: pulumi.Output<string>;
    /**
     * The publicly accessible port of the Web Pubsub service which is designed for customer server side use.
     */
    readonly serverPort: pulumi.Output<number>;
    /**
     * Specifies which sku to use. Possible values are `Free_F1` and `Standard_S1`.
     */
    readonly sku: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Whether to request client certificate during TLS handshake? Defaults
     * to `false`.
     */
    readonly tlsClientCertEnabled: pulumi.Output<boolean | undefined>;
    readonly version: pulumi.Output<string>;
    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Service resources.
 */
export interface ServiceState {
    /**
     * Whether to enable AAD auth? Defaults to `true`.
     */
    aadAuthEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the number of units associated with this Web Pubsub resource. Valid values are:
     * Free: `1`, Standard: `1`, `2`, `5`, `10`, `20`, `50`, `100`.
     */
    capacity?: pulumi.Input<number>;
    externalIp?: pulumi.Input<string>;
    /**
     * The FQDN of the Web Pubsub service.
     */
    hostname?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.webpubsub.ServiceIdentity>;
    /**
     * A `liveTrace` block as defined below.
     */
    liveTrace?: pulumi.Input<inputs.webpubsub.ServiceLiveTrace>;
    /**
     * Whether to enable local auth? Defaults to `true`.
     */
    localAuthEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the Web Pubsub service exists. Changing this
     * forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Web Pubsub service. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The primary access key for the Web Pubsub service.
     */
    primaryAccessKey?: pulumi.Input<string>;
    /**
     * The primary connection string for the Web Pubsub service.
     */
    primaryConnectionString?: pulumi.Input<string>;
    /**
     * Whether to enable public network access? Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The publicly accessible port of the Web Pubsub service which is designed for browser/client use.
     */
    publicPort?: pulumi.Input<number>;
    /**
     * The name of the resource group in which to create the Web Pubsub service. Changing
     * this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The secondary access key for the Web Pubsub service.
     */
    secondaryAccessKey?: pulumi.Input<string>;
    /**
     * The secondary connection string for the Web Pubsub service.
     */
    secondaryConnectionString?: pulumi.Input<string>;
    /**
     * The publicly accessible port of the Web Pubsub service which is designed for customer server side use.
     */
    serverPort?: pulumi.Input<number>;
    /**
     * Specifies which sku to use. Possible values are `Free_F1` and `Standard_S1`.
     */
    sku?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Whether to request client certificate during TLS handshake? Defaults
     * to `false`.
     */
    tlsClientCertEnabled?: pulumi.Input<boolean>;
    version?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * Whether to enable AAD auth? Defaults to `true`.
     */
    aadAuthEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the number of units associated with this Web Pubsub resource. Valid values are:
     * Free: `1`, Standard: `1`, `2`, `5`, `10`, `20`, `50`, `100`.
     */
    capacity?: pulumi.Input<number>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.webpubsub.ServiceIdentity>;
    /**
     * A `liveTrace` block as defined below.
     */
    liveTrace?: pulumi.Input<inputs.webpubsub.ServiceLiveTrace>;
    /**
     * Whether to enable local auth? Defaults to `true`.
     */
    localAuthEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the supported Azure location where the Web Pubsub service exists. Changing this
     * forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Web Pubsub service. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether to enable public network access? Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the resource group in which to create the Web Pubsub service. Changing
     * this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies which sku to use. Possible values are `Free_F1` and `Standard_S1`.
     */
    sku: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Whether to request client certificate during TLS handshake? Defaults
     * to `false`.
     */
    tlsClientCertEnabled?: pulumi.Input<boolean>;
}
