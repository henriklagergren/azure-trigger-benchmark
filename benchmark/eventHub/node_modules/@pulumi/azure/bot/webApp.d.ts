import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Bot Web App.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleWebApp = new azure.bot.WebApp("exampleWebApp", {
 *     location: "global",
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "F0",
 *     microsoftAppId: current.then(current => current.clientId),
 * });
 * ```
 *
 * ## Import
 *
 * Bot Web App's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:bot/webApp:WebApp example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example/providers/Microsoft.BotService/botServices/example
 * ```
 */
export declare class WebApp extends pulumi.CustomResource {
    /**
     * Get an existing WebApp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebAppState, opts?: pulumi.CustomResourceOptions): WebApp;
    /**
     * Returns true if the given object is an instance of WebApp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WebApp;
    /**
     * The Application Insights API Key to associate with the Web App Bot.
     */
    readonly developerAppInsightsApiKey: pulumi.Output<string>;
    /**
     * The Application Insights Application ID to associate with the Web App Bot.
     */
    readonly developerAppInsightsApplicationId: pulumi.Output<string>;
    /**
     * The Application Insights Key to associate with the Web App Bot.
     */
    readonly developerAppInsightsKey: pulumi.Output<string>;
    /**
     * The name of the Web App Bot will be displayed as. This defaults to `name` if not specified.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * The Web App Bot endpoint.
     */
    readonly endpoint: pulumi.Output<string | undefined>;
    /**
     * The supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * A list of LUIS App IDs to associate with the Web App Bot.
     */
    readonly luisAppIds: pulumi.Output<string[] | undefined>;
    /**
     * The LUIS key to associate with the Web App Bot.
     */
    readonly luisKey: pulumi.Output<string | undefined>;
    /**
     * The Microsoft Application ID for the Web App Bot. Changing this forces a new resource to be created.
     */
    readonly microsoftAppId: pulumi.Output<string>;
    /**
     * Specifies the name of the Web App Bot. Changing this forces a new resource to be created. Must be globally unique.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Web App Bot. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The SKU of the Web App Bot. Valid values include `F0` or `S1`. Changing this forces a new resource to be created.
     */
    readonly sku: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a WebApp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WebApp resources.
 */
export interface WebAppState {
    /**
     * The Application Insights API Key to associate with the Web App Bot.
     */
    developerAppInsightsApiKey?: pulumi.Input<string>;
    /**
     * The Application Insights Application ID to associate with the Web App Bot.
     */
    developerAppInsightsApplicationId?: pulumi.Input<string>;
    /**
     * The Application Insights Key to associate with the Web App Bot.
     */
    developerAppInsightsKey?: pulumi.Input<string>;
    /**
     * The name of the Web App Bot will be displayed as. This defaults to `name` if not specified.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The Web App Bot endpoint.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * The supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A list of LUIS App IDs to associate with the Web App Bot.
     */
    luisAppIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The LUIS key to associate with the Web App Bot.
     */
    luisKey?: pulumi.Input<string>;
    /**
     * The Microsoft Application ID for the Web App Bot. Changing this forces a new resource to be created.
     */
    microsoftAppId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Web App Bot. Changing this forces a new resource to be created. Must be globally unique.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Web App Bot. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The SKU of the Web App Bot. Valid values include `F0` or `S1`. Changing this forces a new resource to be created.
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
 * The set of arguments for constructing a WebApp resource.
 */
export interface WebAppArgs {
    /**
     * The Application Insights API Key to associate with the Web App Bot.
     */
    developerAppInsightsApiKey?: pulumi.Input<string>;
    /**
     * The Application Insights Application ID to associate with the Web App Bot.
     */
    developerAppInsightsApplicationId?: pulumi.Input<string>;
    /**
     * The Application Insights Key to associate with the Web App Bot.
     */
    developerAppInsightsKey?: pulumi.Input<string>;
    /**
     * The name of the Web App Bot will be displayed as. This defaults to `name` if not specified.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The Web App Bot endpoint.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * The supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A list of LUIS App IDs to associate with the Web App Bot.
     */
    luisAppIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The LUIS key to associate with the Web App Bot.
     */
    luisKey?: pulumi.Input<string>;
    /**
     * The Microsoft Application ID for the Web App Bot. Changing this forces a new resource to be created.
     */
    microsoftAppId: pulumi.Input<string>;
    /**
     * Specifies the name of the Web App Bot. Changing this forces a new resource to be created. Must be globally unique.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Web App Bot. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of the Web App Bot. Valid values include `F0` or `S1`. Changing this forces a new resource to be created.
     */
    sku: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
