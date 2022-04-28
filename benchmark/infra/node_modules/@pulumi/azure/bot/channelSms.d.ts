import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a SMS integration for a Bot Channel
 *
 * > **Note** A bot can only have a single SMS Channel associated with it.
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
 * const exampleChannelSms = new azure.bot.ChannelSms("exampleChannelSms", {
 *     botName: exampleChannelsRegistration.name,
 *     location: exampleChannelsRegistration.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     smsChannelAccountSecurityId: "BG61f7cf5157f439b084e98256409c2815",
 *     smsChannelAuthToken: "jh8980432610052ed4e29565c5e232f",
 *     phoneNumber: "+12313803556",
 * });
 * ```
 *
 * ## Import
 *
 * The SMS Integration for a Bot Channel can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:bot/channelSms:ChannelSms example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.BotService/botServices/botService1/channels/SmsChannel
 * ```
 */
export declare class ChannelSms extends pulumi.CustomResource {
    /**
     * Get an existing ChannelSms resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ChannelSmsState, opts?: pulumi.CustomResourceOptions): ChannelSms;
    /**
     * Returns true if the given object is an instance of ChannelSms.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ChannelSms;
    /**
     * The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
     */
    readonly botName: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The phone number for the SMS Channel.
     */
    readonly phoneNumber: pulumi.Output<string>;
    /**
     * The name of the resource group where the SMS Channel should be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The account security identifier (SID) for the SMS Channel.
     */
    readonly smsChannelAccountSecurityId: pulumi.Output<string>;
    /**
     * The authorization token for the SMS Channel.
     */
    readonly smsChannelAuthToken: pulumi.Output<string>;
    /**
     * Create a ChannelSms resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ChannelSmsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ChannelSms resources.
 */
export interface ChannelSmsState {
    /**
     * The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
     */
    botName?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The phone number for the SMS Channel.
     */
    phoneNumber?: pulumi.Input<string>;
    /**
     * The name of the resource group where the SMS Channel should be created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The account security identifier (SID) for the SMS Channel.
     */
    smsChannelAccountSecurityId?: pulumi.Input<string>;
    /**
     * The authorization token for the SMS Channel.
     */
    smsChannelAuthToken?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ChannelSms resource.
 */
export interface ChannelSmsArgs {
    /**
     * The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
     */
    botName: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The phone number for the SMS Channel.
     */
    phoneNumber: pulumi.Input<string>;
    /**
     * The name of the resource group where the SMS Channel should be created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The account security identifier (SID) for the SMS Channel.
     */
    smsChannelAccountSecurityId: pulumi.Input<string>;
    /**
     * The authorization token for the SMS Channel.
     */
    smsChannelAuthToken: pulumi.Input<string>;
}
