import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Application Insights API key.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleInsights = new azure.appinsights.Insights("exampleInsights", {
 *     location: "West Europe",
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationType: "web",
 * });
 * const readTelemetry = new azure.appinsights.ApiKey("readTelemetry", {
 *     applicationInsightsId: exampleInsights.id,
 *     readPermissions: [
 *         "aggregate",
 *         "api",
 *         "draft",
 *         "extendqueries",
 *         "search",
 *     ],
 * });
 * const writeAnnotations = new azure.appinsights.ApiKey("writeAnnotations", {
 *     applicationInsightsId: exampleInsights.id,
 *     writePermissions: ["annotations"],
 * });
 * const authenticateSdkControlChannelApiKey = new azure.appinsights.ApiKey("authenticateSdkControlChannelApiKey", {
 *     applicationInsightsId: exampleInsights.id,
 *     readPermissions: ["agentconfig"],
 * });
 * const fullPermissions = new azure.appinsights.ApiKey("fullPermissions", {
 *     applicationInsightsId: exampleInsights.id,
 *     readPermissions: [
 *         "agentconfig",
 *         "aggregate",
 *         "api",
 *         "draft",
 *         "extendqueries",
 *         "search",
 *     ],
 *     writePermissions: ["annotations"],
 * });
 * export const readTelemetryApiKey = readTelemetry.apiKey;
 * export const writeAnnotationsApiKey = writeAnnotations.apiKey;
 * export const authenticateSdkControlChannel = authenticateSdkControlChannelApiKey.apiKey;
 * export const fullPermissionsApiKey = fullPermissions.apiKey;
 * ```
 *
 * ## Import
 *
 * Application Insights API keys can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appinsights/apiKey:ApiKey my_key /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Insights/components/instance1/apiKeys/00000000-0000-0000-0000-000000000000
 * ```
 */
export declare class ApiKey extends pulumi.CustomResource {
    /**
     * Get an existing ApiKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiKeyState, opts?: pulumi.CustomResourceOptions): ApiKey;
    /**
     * Returns true if the given object is an instance of ApiKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApiKey;
    /**
     * The API Key secret (Sensitive).
     */
    readonly apiKey: pulumi.Output<string>;
    /**
     * The ID of the Application Insights component on which the API key operates. Changing this forces a new resource to be created.
     */
    readonly applicationInsightsId: pulumi.Output<string>;
    /**
     * Specifies the name of the Application Insights API key. Changing this forces a
     * new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the list of read permissions granted to the API key. Valid values are `agentconfig`, `aggregate`, `api`, `draft`, `extendqueries`, `search`. Please note these values are case sensitive. Changing this forces a new resource to be created.
     */
    readonly readPermissions: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the list of write permissions granted to the API key. Valid values are `annotations`. Please note these values are case sensitive. Changing this forces a new resource to be created.
     */
    readonly writePermissions: pulumi.Output<string[] | undefined>;
    /**
     * Create a ApiKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiKeyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ApiKey resources.
 */
export interface ApiKeyState {
    /**
     * The API Key secret (Sensitive).
     */
    apiKey?: pulumi.Input<string>;
    /**
     * The ID of the Application Insights component on which the API key operates. Changing this forces a new resource to be created.
     */
    applicationInsightsId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Application Insights API key. Changing this forces a
     * new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the list of read permissions granted to the API key. Valid values are `agentconfig`, `aggregate`, `api`, `draft`, `extendqueries`, `search`. Please note these values are case sensitive. Changing this forces a new resource to be created.
     */
    readPermissions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the list of write permissions granted to the API key. Valid values are `annotations`. Please note these values are case sensitive. Changing this forces a new resource to be created.
     */
    writePermissions?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a ApiKey resource.
 */
export interface ApiKeyArgs {
    /**
     * The ID of the Application Insights component on which the API key operates. Changing this forces a new resource to be created.
     */
    applicationInsightsId: pulumi.Input<string>;
    /**
     * Specifies the name of the Application Insights API key. Changing this forces a
     * new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the list of read permissions granted to the API key. Valid values are `agentconfig`, `aggregate`, `api`, `draft`, `extendqueries`, `search`. Please note these values are case sensitive. Changing this forces a new resource to be created.
     */
    readPermissions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the list of write permissions granted to the API key. Valid values are `annotations`. Please note these values are case sensitive. Changing this forces a new resource to be created.
     */
    writePermissions?: pulumi.Input<pulumi.Input<string>[]>;
}
