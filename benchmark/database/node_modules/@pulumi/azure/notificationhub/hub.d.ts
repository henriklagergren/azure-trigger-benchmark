import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Notification Hub within a Notification Hub Namespace.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleNamespace = new azure.notificationhub.Namespace("exampleNamespace", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     namespaceType: "NotificationHub",
 *     skuName: "Free",
 * });
 * const exampleHub = new azure.notificationhub.Hub("exampleHub", {
 *     namespaceName: exampleNamespace.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * ```
 *
 * ## Import
 *
 * Notification Hubs can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:notificationhub/hub:Hub hub1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.NotificationHubs/namespaces/namespace1/notificationHubs/hub1
 * ```
 */
export declare class Hub extends pulumi.CustomResource {
    /**
     * Get an existing Hub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HubState, opts?: pulumi.CustomResourceOptions): Hub;
    /**
     * Returns true if the given object is an instance of Hub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Hub;
    /**
     * A `apnsCredential` block as defined below.
     */
    readonly apnsCredential: pulumi.Output<outputs.notificationhub.HubApnsCredential | undefined>;
    /**
     * A `gcmCredential` block as defined below.
     */
    readonly gcmCredential: pulumi.Output<outputs.notificationhub.HubGcmCredential | undefined>;
    /**
     * The Azure Region in which this Notification Hub Namespace exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name to use for this Notification Hub. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Notification Hub Namespace in which to create this Notification Hub. Changing this forces a new resource to be created.
     */
    readonly namespaceName: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the Notification Hub Namespace exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Hub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HubArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Hub resources.
 */
export interface HubState {
    /**
     * A `apnsCredential` block as defined below.
     */
    apnsCredential?: pulumi.Input<inputs.notificationhub.HubApnsCredential>;
    /**
     * A `gcmCredential` block as defined below.
     */
    gcmCredential?: pulumi.Input<inputs.notificationhub.HubGcmCredential>;
    /**
     * The Azure Region in which this Notification Hub Namespace exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name to use for this Notification Hub. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Notification Hub Namespace in which to create this Notification Hub. Changing this forces a new resource to be created.
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Notification Hub Namespace exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Hub resource.
 */
export interface HubArgs {
    /**
     * A `apnsCredential` block as defined below.
     */
    apnsCredential?: pulumi.Input<inputs.notificationhub.HubApnsCredential>;
    /**
     * A `gcmCredential` block as defined below.
     */
    gcmCredential?: pulumi.Input<inputs.notificationhub.HubGcmCredential>;
    /**
     * The Azure Region in which this Notification Hub Namespace exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name to use for this Notification Hub. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Notification Hub Namespace in which to create this Notification Hub. Changing this forces a new resource to be created.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Notification Hub Namespace exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
