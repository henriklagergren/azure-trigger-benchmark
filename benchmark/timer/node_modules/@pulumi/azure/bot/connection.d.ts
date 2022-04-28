import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Bot Connection.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleChannelsRegistration = new azure.bot.ChannelsRegistration("exampleChannelsRegistration", {
 *     location: "global",
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "F0",
 *     microsoftAppId: current.then(current => current.clientId),
 * });
 * const exampleConnection = new azure.bot.Connection("exampleConnection", {
 *     botName: exampleChannelsRegistration.name,
 *     location: exampleChannelsRegistration.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     serviceProviderName: "box",
 *     clientId: "exampleId",
 *     clientSecret: "exampleSecret",
 * });
 * ```
 *
 * ## Import
 *
 * Bot Connection can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:bot/connection:Connection example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.BotService/botServices/example/connections/example
 * ```
 */
export declare class Connection extends pulumi.CustomResource {
    /**
     * Get an existing Connection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConnectionState, opts?: pulumi.CustomResourceOptions): Connection;
    /**
     * Returns true if the given object is an instance of Connection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Connection;
    /**
     * The name of the Bot Resource this connection will be associated with. Changing this forces a new resource to be created.
     */
    readonly botName: pulumi.Output<string>;
    /**
     * The Client ID that will be used to authenticate with the service provider.
     */
    readonly clientId: pulumi.Output<string>;
    /**
     * The Client Secret that will be used to authenticate with the service provider.
     */
    readonly clientSecret: pulumi.Output<string>;
    /**
     * The supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Bot Connection. Changing this forces a new resource to be created. Must be globally unique.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A map of additional parameters to apply to the connection.
     */
    readonly parameters: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The name of the resource group in which to create the Bot Connection. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Scopes at which the connection should be applied.
     */
    readonly scopes: pulumi.Output<string | undefined>;
    /**
     * The name of the service provider that will be associated with this connection. Changing this forces a new resource to be created.
     */
    readonly serviceProviderName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Connection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Connection resources.
 */
export interface ConnectionState {
    /**
     * The name of the Bot Resource this connection will be associated with. Changing this forces a new resource to be created.
     */
    botName?: pulumi.Input<string>;
    /**
     * The Client ID that will be used to authenticate with the service provider.
     */
    clientId?: pulumi.Input<string>;
    /**
     * The Client Secret that will be used to authenticate with the service provider.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * The supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Bot Connection. Changing this forces a new resource to be created. Must be globally unique.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of additional parameters to apply to the connection.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the resource group in which to create the Bot Connection. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Scopes at which the connection should be applied.
     */
    scopes?: pulumi.Input<string>;
    /**
     * The name of the service provider that will be associated with this connection. Changing this forces a new resource to be created.
     */
    serviceProviderName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Connection resource.
 */
export interface ConnectionArgs {
    /**
     * The name of the Bot Resource this connection will be associated with. Changing this forces a new resource to be created.
     */
    botName: pulumi.Input<string>;
    /**
     * The Client ID that will be used to authenticate with the service provider.
     */
    clientId: pulumi.Input<string>;
    /**
     * The Client Secret that will be used to authenticate with the service provider.
     */
    clientSecret: pulumi.Input<string>;
    /**
     * The supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Bot Connection. Changing this forces a new resource to be created. Must be globally unique.
     */
    name?: pulumi.Input<string>;
    /**
     * A map of additional parameters to apply to the connection.
     */
    parameters?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the resource group in which to create the Bot Connection. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Scopes at which the connection should be applied.
     */
    scopes?: pulumi.Input<string>;
    /**
     * The name of the service provider that will be associated with this connection. Changing this forces a new resource to be created.
     */
    serviceProviderName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
