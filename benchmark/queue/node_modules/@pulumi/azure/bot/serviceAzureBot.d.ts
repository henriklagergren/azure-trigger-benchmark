import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Azure Bot Service.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleInsights = new azure.appinsights.Insights("exampleInsights", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationType: "web",
 * });
 * const exampleApiKey = new azure.appinsights.ApiKey("exampleApiKey", {
 *     applicationInsightsId: exampleInsights.id,
 *     readPermissions: [
 *         "aggregate",
 *         "api",
 *         "draft",
 *         "extendqueries",
 *         "search",
 *     ],
 * });
 * const exampleServiceAzureBot = new azure.bot.ServiceAzureBot("exampleServiceAzureBot", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: "global",
 *     microsoftAppId: data.azurerm_client_config.current.client_id,
 *     sku: "F0",
 *     endpoint: "https://example.com",
 *     developerAppInsightsApiKey: exampleApiKey.apiKey,
 *     developerAppInsightsApplicationId: exampleInsights.appId,
 *     tags: {
 *         environment: "test",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Azure Bot Services can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:bot/serviceAzureBot:ServiceAzureBot example /subscriptions/12345678-1234-9876-4563-123456789012/resourceGroups/resGroup1/providers/Microsoft.BotService/botServices/botService1
 * ```
 */
export declare class ServiceAzureBot extends pulumi.CustomResource {
    /**
     * Get an existing ServiceAzureBot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceAzureBotState, opts?: pulumi.CustomResourceOptions): ServiceAzureBot;
    /**
     * Returns true if the given object is an instance of ServiceAzureBot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ServiceAzureBot;
    /**
     * The Application Insights Api Key to associate with this Azure Bot Service.
     */
    readonly developerAppInsightsApiKey: pulumi.Output<string | undefined>;
    /**
     * The resource ID of the Application Insights instance to associate with this Azure Bot Service.
     */
    readonly developerAppInsightsApplicationId: pulumi.Output<string | undefined>;
    /**
     * The Application Insight Key to associate with this Azure Bot Service.
     */
    readonly developerAppInsightsKey: pulumi.Output<string | undefined>;
    /**
     * The name that the Azure Bot Service will be displayed as. This defaults to the value set for `name` if not specified.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * The Azure Bot Service endpoint.
     */
    readonly endpoint: pulumi.Output<string | undefined>;
    /**
     * The supported Azure location where the Azure Bot Service should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * A list of LUIS App IDs to associate with this Azure Bot Service.
     */
    readonly luisAppIds: pulumi.Output<string[] | undefined>;
    /**
     * The LUIS key to associate with this Azure Bot Service.
     */
    readonly luisKey: pulumi.Output<string | undefined>;
    /**
     * The Microsoft Application ID for the Azure Bot Service. Changing this forces a new resource to be created.
     */
    readonly microsoftAppId: pulumi.Output<string>;
    /**
     * The name which should be used for this Azure Bot Service. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Azure Bot Service should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The SKU of the Azure Bot Service. Accepted values are `F0` or `S1`. Changing this forces a new resource to be created.
     */
    readonly sku: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to this Azure Bot Service.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a ServiceAzureBot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceAzureBotArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ServiceAzureBot resources.
 */
export interface ServiceAzureBotState {
    /**
     * The Application Insights Api Key to associate with this Azure Bot Service.
     */
    developerAppInsightsApiKey?: pulumi.Input<string>;
    /**
     * The resource ID of the Application Insights instance to associate with this Azure Bot Service.
     */
    developerAppInsightsApplicationId?: pulumi.Input<string>;
    /**
     * The Application Insight Key to associate with this Azure Bot Service.
     */
    developerAppInsightsKey?: pulumi.Input<string>;
    /**
     * The name that the Azure Bot Service will be displayed as. This defaults to the value set for `name` if not specified.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The Azure Bot Service endpoint.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * The supported Azure location where the Azure Bot Service should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A list of LUIS App IDs to associate with this Azure Bot Service.
     */
    luisAppIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The LUIS key to associate with this Azure Bot Service.
     */
    luisKey?: pulumi.Input<string>;
    /**
     * The Microsoft Application ID for the Azure Bot Service. Changing this forces a new resource to be created.
     */
    microsoftAppId?: pulumi.Input<string>;
    /**
     * The name which should be used for this Azure Bot Service. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Azure Bot Service should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The SKU of the Azure Bot Service. Accepted values are `F0` or `S1`. Changing this forces a new resource to be created.
     */
    sku?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to this Azure Bot Service.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a ServiceAzureBot resource.
 */
export interface ServiceAzureBotArgs {
    /**
     * The Application Insights Api Key to associate with this Azure Bot Service.
     */
    developerAppInsightsApiKey?: pulumi.Input<string>;
    /**
     * The resource ID of the Application Insights instance to associate with this Azure Bot Service.
     */
    developerAppInsightsApplicationId?: pulumi.Input<string>;
    /**
     * The Application Insight Key to associate with this Azure Bot Service.
     */
    developerAppInsightsKey?: pulumi.Input<string>;
    /**
     * The name that the Azure Bot Service will be displayed as. This defaults to the value set for `name` if not specified.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The Azure Bot Service endpoint.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * The supported Azure location where the Azure Bot Service should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A list of LUIS App IDs to associate with this Azure Bot Service.
     */
    luisAppIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The LUIS key to associate with this Azure Bot Service.
     */
    luisKey?: pulumi.Input<string>;
    /**
     * The Microsoft Application ID for the Azure Bot Service. Changing this forces a new resource to be created.
     */
    microsoftAppId: pulumi.Input<string>;
    /**
     * The name which should be used for this Azure Bot Service. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Azure Bot Service should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU of the Azure Bot Service. Accepted values are `F0` or `S1`. Changing this forces a new resource to be created.
     */
    sku: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to this Azure Bot Service.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
