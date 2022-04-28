import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Slack integration for a Bot Channel
 *
 * > **Note** A bot can only have a single Slack Channel associated with it.
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
 * const exampleChannelSlack = new azure.bot.ChannelSlack("exampleChannelSlack", {
 *     botName: exampleChannelsRegistration.name,
 *     location: exampleChannelsRegistration.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     clientId: "exampleId",
 *     clientSecret: "exampleSecret",
 *     verificationToken: "exampleVerificationToken",
 * });
 * ```
 *
 * ## Import
 *
 * The Slack Integration for a Bot Channel can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:bot/channelSlack:ChannelSlack example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.BotService/botServices/example/channels/SlackChannel
 * ```
 */
export declare class ChannelSlack extends pulumi.CustomResource {
    /**
     * Get an existing ChannelSlack resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ChannelSlackState, opts?: pulumi.CustomResourceOptions): ChannelSlack;
    /**
     * Returns true if the given object is an instance of ChannelSlack.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ChannelSlack;
    /**
     * The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
     */
    readonly botName: pulumi.Output<string>;
    /**
     * The Client ID that will be used to authenticate with Slack.
     */
    readonly clientId: pulumi.Output<string>;
    /**
     * The Client Secret that will be used to authenticate with Slack.
     */
    readonly clientSecret: pulumi.Output<string>;
    /**
     * The Slack Landing Page URL.
     */
    readonly landingPageUrl: pulumi.Output<string | undefined>;
    /**
     * The supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Bot Channel. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Signing Secret that will be used to sign the requests.
     */
    readonly signingSecret: pulumi.Output<string | undefined>;
    /**
     * The Verification Token that will be used to authenticate with Slack.
     */
    readonly verificationToken: pulumi.Output<string>;
    /**
     * Create a ChannelSlack resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ChannelSlackArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ChannelSlack resources.
 */
export interface ChannelSlackState {
    /**
     * The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
     */
    botName?: pulumi.Input<string>;
    /**
     * The Client ID that will be used to authenticate with Slack.
     */
    clientId?: pulumi.Input<string>;
    /**
     * The Client Secret that will be used to authenticate with Slack.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * The Slack Landing Page URL.
     */
    landingPageUrl?: pulumi.Input<string>;
    /**
     * The supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Bot Channel. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Signing Secret that will be used to sign the requests.
     */
    signingSecret?: pulumi.Input<string>;
    /**
     * The Verification Token that will be used to authenticate with Slack.
     */
    verificationToken?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ChannelSlack resource.
 */
export interface ChannelSlackArgs {
    /**
     * The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
     */
    botName: pulumi.Input<string>;
    /**
     * The Client ID that will be used to authenticate with Slack.
     */
    clientId: pulumi.Input<string>;
    /**
     * The Client Secret that will be used to authenticate with Slack.
     */
    clientSecret: pulumi.Input<string>;
    /**
     * The Slack Landing Page URL.
     */
    landingPageUrl?: pulumi.Input<string>;
    /**
     * The supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Bot Channel. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Signing Secret that will be used to sign the requests.
     */
    signingSecret?: pulumi.Input<string>;
    /**
     * The Verification Token that will be used to authenticate with Slack.
     */
    verificationToken: pulumi.Input<string>;
}
