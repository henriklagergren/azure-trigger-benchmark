import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a MS Teams integration for a Bot Channel
 *
 * > **Note** A bot can only have a single MS Teams Channel associated with it.
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
 * const exampleChannelTeams = new azure.bot.ChannelTeams("exampleChannelTeams", {
 *     botName: exampleChannelsRegistration.name,
 *     location: exampleChannelsRegistration.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * ```
 *
 * ## Import
 *
 * The Microsoft Teams Integration for a Bot Channel can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:bot/channelTeams:ChannelTeams example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.BotService/botServices/example/channels/MsTeamsChannel
 * ```
 */
export declare class ChannelTeams extends pulumi.CustomResource {
    /**
     * Get an existing ChannelTeams resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ChannelTeamsState, opts?: pulumi.CustomResourceOptions): ChannelTeams;
    /**
     * Returns true if the given object is an instance of ChannelTeams.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ChannelTeams;
    /**
     * The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
     */
    readonly botName: pulumi.Output<string>;
    /**
     * Specifies the webhook for Microsoft Teams channel calls.
     */
    readonly callingWebHook: pulumi.Output<string>;
    /**
     * Specifies whether to enable Microsoft Teams channel calls. This defaults to `false`.
     */
    readonly enableCalling: pulumi.Output<boolean | undefined>;
    /**
     * The supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Bot Channel. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a ChannelTeams resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ChannelTeamsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ChannelTeams resources.
 */
export interface ChannelTeamsState {
    /**
     * The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
     */
    botName?: pulumi.Input<string>;
    /**
     * Specifies the webhook for Microsoft Teams channel calls.
     */
    callingWebHook?: pulumi.Input<string>;
    /**
     * Specifies whether to enable Microsoft Teams channel calls. This defaults to `false`.
     */
    enableCalling?: pulumi.Input<boolean>;
    /**
     * The supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Bot Channel. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ChannelTeams resource.
 */
export interface ChannelTeamsArgs {
    /**
     * The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
     */
    botName: pulumi.Input<string>;
    /**
     * Specifies the webhook for Microsoft Teams channel calls.
     */
    callingWebHook?: pulumi.Input<string>;
    /**
     * Specifies whether to enable Microsoft Teams channel calls. This defaults to `false`.
     */
    enableCalling?: pulumi.Input<boolean>;
    /**
     * The supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Bot Channel. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
