import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Direct Line Speech integration for a Bot Channel
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.cognitive.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     kind: "SpeechServices",
 *     skuName: "S0",
 * });
 * const exampleChannelsRegistration = new azure.bot.ChannelsRegistration("exampleChannelsRegistration", {
 *     location: "global",
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "F0",
 *     microsoftAppId: current.then(current => current.clientId),
 * });
 * const exampleChannelDirectLineSpeech = new azure.bot.ChannelDirectLineSpeech("exampleChannelDirectLineSpeech", {
 *     botName: exampleChannelsRegistration.name,
 *     location: exampleChannelsRegistration.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     cognitiveServiceLocation: exampleAccount.location,
 *     cognitiveServiceAccessKey: exampleAccount.primaryAccessKey,
 * });
 * ```
 *
 * ## Import
 *
 * Direct Line Speech Channels can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:bot/channelDirectLineSpeech:ChannelDirectLineSpeech example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.BotService/botServices/botService1/channels/DirectLineSpeechChannel
 * ```
 */
export declare class ChannelDirectLineSpeech extends pulumi.CustomResource {
    /**
     * Get an existing ChannelDirectLineSpeech resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ChannelDirectLineSpeechState, opts?: pulumi.CustomResourceOptions): ChannelDirectLineSpeech;
    /**
     * Returns true if the given object is an instance of ChannelDirectLineSpeech.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ChannelDirectLineSpeech;
    /**
     * The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
     */
    readonly botName: pulumi.Output<string>;
    /**
     * The access key to access the Cognitive Service.
     */
    readonly cognitiveServiceAccessKey: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the Cognitive Service resource exists.
     */
    readonly cognitiveServiceLocation: pulumi.Output<string>;
    /**
     * The custom speech model id for the Direct Line Speech Channel.
     */
    readonly customSpeechModelId: pulumi.Output<string | undefined>;
    /**
     * The custom voice deployment id for the Direct Line Speech Channel.
     */
    readonly customVoiceDeploymentId: pulumi.Output<string | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the resource group where the Direct Line Speech Channel should be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a ChannelDirectLineSpeech resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ChannelDirectLineSpeechArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ChannelDirectLineSpeech resources.
 */
export interface ChannelDirectLineSpeechState {
    /**
     * The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
     */
    botName?: pulumi.Input<string>;
    /**
     * The access key to access the Cognitive Service.
     */
    cognitiveServiceAccessKey?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the Cognitive Service resource exists.
     */
    cognitiveServiceLocation?: pulumi.Input<string>;
    /**
     * The custom speech model id for the Direct Line Speech Channel.
     */
    customSpeechModelId?: pulumi.Input<string>;
    /**
     * The custom voice deployment id for the Direct Line Speech Channel.
     */
    customVoiceDeploymentId?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group where the Direct Line Speech Channel should be created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ChannelDirectLineSpeech resource.
 */
export interface ChannelDirectLineSpeechArgs {
    /**
     * The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
     */
    botName: pulumi.Input<string>;
    /**
     * The access key to access the Cognitive Service.
     */
    cognitiveServiceAccessKey: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the Cognitive Service resource exists.
     */
    cognitiveServiceLocation: pulumi.Input<string>;
    /**
     * The custom speech model id for the Direct Line Speech Channel.
     */
    customSpeechModelId?: pulumi.Input<string>;
    /**
     * The custom voice deployment id for the Direct Line Speech Channel.
     */
    customVoiceDeploymentId?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group where the Direct Line Speech Channel should be created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
