import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Bot Channels Registration.
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
 * ```
 *
 * ## Import
 *
 * Bot Channels Registration can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:bot/channelsRegistration:ChannelsRegistration example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.BotService/botServices/example
 * ```
 */
export declare class ChannelsRegistration extends pulumi.CustomResource {
    /**
     * Get an existing ChannelsRegistration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ChannelsRegistrationState, opts?: pulumi.CustomResourceOptions): ChannelsRegistration;
    /**
     * Returns true if the given object is an instance of ChannelsRegistration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ChannelsRegistration;
    /**
     * The CMK Key Vault Key URL to encrypt the Bot Channels Registration with the Customer Managed Encryption Key.
     */
    readonly cmkKeyVaultUrl: pulumi.Output<string | undefined>;
    /**
     * The description of the Bot Channels Registration.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The Application Insights API Key to associate with the Bot Channels Registration.
     */
    readonly developerAppInsightsApiKey: pulumi.Output<string>;
    /**
     * The Application Insights Application ID to associate with the Bot Channels Registration.
     */
    readonly developerAppInsightsApplicationId: pulumi.Output<string>;
    /**
     * The Application Insights Key to associate with the Bot Channels Registration.
     */
    readonly developerAppInsightsKey: pulumi.Output<string>;
    /**
     * The name of the Bot Channels Registration will be displayed as. This defaults to `name` if not specified.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * The Bot Channels Registration endpoint.
     */
    readonly endpoint: pulumi.Output<string | undefined>;
    /**
     * The icon URL to visually identify the Bot Channels Registration.
     */
    readonly iconUrl: pulumi.Output<string>;
    /**
     * Is the Bot Channels Registration in an isolated network?
     */
    readonly isolatedNetworkEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The Microsoft Application ID for the Bot Channels Registration. Changing this forces a new resource to be created.
     */
    readonly microsoftAppId: pulumi.Output<string>;
    /**
     * Specifies the name of the Bot Channels Registration. Changing this forces a new resource to be created. Must be globally unique.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Bot Channels Registration. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The SKU of the Bot Channels Registration. Valid values include `F0` or `S1`. Changing this forces a new resource to be created.
     */
    readonly sku: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a ChannelsRegistration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ChannelsRegistrationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ChannelsRegistration resources.
 */
export interface ChannelsRegistrationState {
    /**
     * The CMK Key Vault Key URL to encrypt the Bot Channels Registration with the Customer Managed Encryption Key.
     */
    cmkKeyVaultUrl?: pulumi.Input<string>;
    /**
     * The description of the Bot Channels Registration.
     */
    description?: pulumi.Input<string>;
    /**
     * The Application Insights API Key to associate with the Bot Channels Registration.
     */
    developerAppInsightsApiKey?: pulumi.Input<string>;
    /**
     * The Application Insights Application ID to associate with the Bot Channels Registration.
     */
    developerAppInsightsApplicationId?: pulumi.Input<string>;
    /**
     * The Application Insights Key to associate with the Bot Channels Registration.
     */
    developerAppInsightsKey?: pulumi.Input<string>;
    /**
     * The name of the Bot Channels Registration will be displayed as. This defaults to `name` if not specified.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The Bot Channels Registration endpoint.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * The icon URL to visually identify the Bot Channels Registration.
     */
    iconUrl?: pulumi.Input<string>;
    /**
     * Is the Bot Channels Registration in an isolated network?
     */
    isolatedNetworkEnabled?: pulumi.Input<boolean>;
    /**
     * The supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The Microsoft Application ID for the Bot Channels Registration. Changing this forces a new resource to be created.
     */
    microsoftAppId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Bot Channels Registration. Changing this forces a new resource to be created. Must be globally unique.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Bot Channels Registration. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The SKU of the Bot Channels Registration. Valid values include `F0` or `S1`. Changing this forces a new resource to be created.
     */
    sku?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a ChannelsRegistration resource.
 */
export interface ChannelsRegistrationArgs {
    /**
     * The CMK Key Vault Key URL to encrypt the Bot Channels Registration with the Customer Managed Encryption Key.
     */
    cmkKeyVaultUrl?: pulumi.Input<string>;
    /**
     * The description of the Bot Channels Registration.
     */
    description?: pulumi.Input<string>;
    /**
     * The Application Insights API Key to associate with the Bot Channels Registration.
     */
    developerAppInsightsApiKey?: pulumi.Input<string>;
    /**
     * The Application Insights Application ID to associate with the Bot Channels Registration.
     */
    developerAppInsightsApplicationId?: pulumi.Input<string>;
    /**
     * The Application Insights Key to associate with the Bot Channels Registration.
     */
    developerAppInsightsKey?: pulumi.Input<string>;
    /**
     * The name of the Bot Channels Registration will be displayed as. This defaults to `name` if not specified.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The Bot Channels Registration endpoint.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * The icon URL to visually identify the Bot Channels Registration.
     */
    iconUrl?: pulumi.Input<string>;
    /**
     * Is the Bot Channels Registration in an isolated network?
     */
    isolatedNetworkEnabled?: pulumi.Input<boolean>;
    /**
     * The supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The Microsoft Application ID for the Bot Channels Registration. Changing this forces a new resource to be created.
     */
    microsoftAppId: pulumi.Input<string>;
    /**
     * Specifies the name of the Bot Channels Registration. Changing this forces a new resource to be created. Must be globally unique.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Bot Channels Registration. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of the Bot Channels Registration. Valid values include `F0` or `S1`. Changing this forces a new resource to be created.
     */
    sku: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
