import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Azure Container Registry Webhook.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const rg = new azure.core.ResourceGroup("rg", {location: "West Europe"});
 * const acr = new azure.containerservice.Registry("acr", {
 *     resourceGroupName: rg.name,
 *     location: rg.location,
 *     sku: "Standard",
 *     adminEnabled: false,
 * });
 * const webhook = new azure.containerservice.RegistryWebhook("webhook", {
 *     resourceGroupName: rg.name,
 *     registryName: acr.name,
 *     location: rg.location,
 *     serviceUri: "https://mywebhookreceiver.example/mytag",
 *     status: "enabled",
 *     scope: "mytag:*",
 *     actions: ["push"],
 *     customHeaders: {
 *         "Content-Type": "application/json",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Container Registry Webhooks can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:containerservice/registryWebook:RegistryWebook example /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/mygroup1/providers/Microsoft.ContainerRegistry/registries/myregistry1/webhooks/mywebhook1
 * ```
 *
 * @deprecated azure.containerservice.RegistryWebook has been deprecated in favor of azure.containerservice.RegistryWebhook
 */
export declare class RegistryWebook extends pulumi.CustomResource {
    /**
     * Get an existing RegistryWebook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RegistryWebookState, opts?: pulumi.CustomResourceOptions): RegistryWebook;
    /**
     * Returns true if the given object is an instance of RegistryWebook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RegistryWebook;
    /**
     * A list of actions that trigger the Webhook to post notifications. At least one action needs to be specified. Valid values are: `push`, `delete`, `quarantine`, `chartPush`, `chartDelete`
     */
    readonly actions: pulumi.Output<string[]>;
    /**
     * Custom headers that will be added to the webhook notifications request.
     */
    readonly customHeaders: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Container Registry Webhook. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The Name of Container registry this Webhook belongs to. Changing this forces a new resource to be created.
     */
    readonly registryName: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Container Registry Webhook. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Specifies the scope of repositories that can trigger an event. For example, `foo:*` means events for all tags under repository `foo`. `foo:bar` means events for 'foo:bar' only. `foo` is equivalent to `foo:latest`. Empty means all events.
     */
    readonly scope: pulumi.Output<string | undefined>;
    /**
     * Specifies the service URI for the Webhook to post notifications.
     */
    readonly serviceUri: pulumi.Output<string>;
    /**
     * Specifies if this Webhook triggers notifications or not. Valid values: `enabled` and `disabled`. Default is `enabled`.
     */
    readonly status: pulumi.Output<string | undefined>;
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a RegistryWebook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    /** @deprecated azure.containerservice.RegistryWebook has been deprecated in favor of azure.containerservice.RegistryWebhook */
    constructor(name: string, args: RegistryWebookArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RegistryWebook resources.
 */
export interface RegistryWebookState {
    /**
     * A list of actions that trigger the Webhook to post notifications. At least one action needs to be specified. Valid values are: `push`, `delete`, `quarantine`, `chartPush`, `chartDelete`
     */
    actions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Custom headers that will be added to the webhook notifications request.
     */
    customHeaders?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Container Registry Webhook. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The Name of Container registry this Webhook belongs to. Changing this forces a new resource to be created.
     */
    registryName?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Container Registry Webhook. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies the scope of repositories that can trigger an event. For example, `foo:*` means events for all tags under repository `foo`. `foo:bar` means events for 'foo:bar' only. `foo` is equivalent to `foo:latest`. Empty means all events.
     */
    scope?: pulumi.Input<string>;
    /**
     * Specifies the service URI for the Webhook to post notifications.
     */
    serviceUri?: pulumi.Input<string>;
    /**
     * Specifies if this Webhook triggers notifications or not. Valid values: `enabled` and `disabled`. Default is `enabled`.
     */
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a RegistryWebook resource.
 */
export interface RegistryWebookArgs {
    /**
     * A list of actions that trigger the Webhook to post notifications. At least one action needs to be specified. Valid values are: `push`, `delete`, `quarantine`, `chartPush`, `chartDelete`
     */
    actions: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Custom headers that will be added to the webhook notifications request.
     */
    customHeaders?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Container Registry Webhook. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The Name of Container registry this Webhook belongs to. Changing this forces a new resource to be created.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Container Registry Webhook. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the scope of repositories that can trigger an event. For example, `foo:*` means events for all tags under repository `foo`. `foo:bar` means events for 'foo:bar' only. `foo` is equivalent to `foo:latest`. Empty means all events.
     */
    scope?: pulumi.Input<string>;
    /**
     * Specifies the service URI for the Webhook to post notifications.
     */
    serviceUri: pulumi.Input<string>;
    /**
     * Specifies if this Webhook triggers notifications or not. Valid values: `enabled` and `disabled`. Default is `enabled`.
     */
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
