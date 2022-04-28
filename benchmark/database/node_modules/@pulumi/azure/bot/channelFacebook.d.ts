import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Facebook integration for a Bot Channel
 *
 * > **Note** A bot can only have a single Facebook Channel associated with it.
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
 * const exampleChannelFacebook = new azure.bot.ChannelFacebook("exampleChannelFacebook", {
 *     botName: exampleChannelsRegistration.name,
 *     location: exampleChannelsRegistration.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     facebookApplicationId: "563490254873576",
 *     facebookApplicationSecret: "8976d2536445ad5b976dee8437b9beb0",
 *     pages: [{
 *         id: "876248795081953",
 *         accessToken: "CGGCec3UAFPMBAKwK3Ft8SEpO8ZCuvpNBI5DClaJCDfqJj2BgEHCKxcY0FDarmUQap6XxpZC9GWCW4nZCzjcKosAZAP7SO44X8Q8gAntbDIXgYUBGp9xtS8wUkwgKPobUePcOOVFkvClxvYZByuiQxoTiK9fQ9jZCPEorbmZCsKDZAx4VLnrNwCTZAPUwXxO61gfq4ZD",
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * The Facebook Integration for a Bot Channel can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:bot/channelFacebook:ChannelFacebook example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.BotService/botServices/botService1/channels/FacebookChannel
 * ```
 */
export declare class ChannelFacebook extends pulumi.CustomResource {
    /**
     * Get an existing ChannelFacebook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ChannelFacebookState, opts?: pulumi.CustomResourceOptions): ChannelFacebook;
    /**
     * Returns true if the given object is an instance of ChannelFacebook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ChannelFacebook;
    /**
     * The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
     */
    readonly botName: pulumi.Output<string>;
    /**
     * The Facebook Application ID for the Facebook Channel.
     */
    readonly facebookApplicationId: pulumi.Output<string>;
    /**
     * The Facebook Application Secret for the Facebook Channel.
     */
    readonly facebookApplicationSecret: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * One or more `page` blocks as defined below.
     */
    readonly pages: pulumi.Output<outputs.bot.ChannelFacebookPage[]>;
    /**
     * The name of the resource group where the Facebook Channel should be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a ChannelFacebook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ChannelFacebookArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ChannelFacebook resources.
 */
export interface ChannelFacebookState {
    /**
     * The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
     */
    botName?: pulumi.Input<string>;
    /**
     * The Facebook Application ID for the Facebook Channel.
     */
    facebookApplicationId?: pulumi.Input<string>;
    /**
     * The Facebook Application Secret for the Facebook Channel.
     */
    facebookApplicationSecret?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * One or more `page` blocks as defined below.
     */
    pages?: pulumi.Input<pulumi.Input<inputs.bot.ChannelFacebookPage>[]>;
    /**
     * The name of the resource group where the Facebook Channel should be created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ChannelFacebook resource.
 */
export interface ChannelFacebookArgs {
    /**
     * The name of the Bot Resource this channel will be associated with. Changing this forces a new resource to be created.
     */
    botName: pulumi.Input<string>;
    /**
     * The Facebook Application ID for the Facebook Channel.
     */
    facebookApplicationId: pulumi.Input<string>;
    /**
     * The Facebook Application Secret for the Facebook Channel.
     */
    facebookApplicationSecret: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * One or more `page` blocks as defined below.
     */
    pages: pulumi.Input<pulumi.Input<inputs.bot.ChannelFacebookPage>[]>;
    /**
     * The name of the resource group where the Facebook Channel should be created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
