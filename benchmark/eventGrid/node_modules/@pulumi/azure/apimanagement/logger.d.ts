import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Logger within an API Management Service.
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
 *     applicationType: "other",
 * });
 * const exampleService = new azure.apimanagement.Service("exampleService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     publisherName: "My Company",
 *     publisherEmail: "company@exmaple.com",
 *     skuName: "Developer_1",
 * });
 * const exampleLogger = new azure.apimanagement.Logger("exampleLogger", {
 *     apiManagementName: exampleService.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     resourceId: exampleInsights.id,
 *     applicationInsights: {
 *         instrumentationKey: exampleInsights.instrumentationKey,
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * API Management Loggers can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/logger:Logger example /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/example-rg/providers/Microsoft.ApiManagement/service/example-apim/loggers/example-logger
 * ```
 */
export declare class Logger extends pulumi.CustomResource {
    /**
     * Get an existing Logger resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoggerState, opts?: pulumi.CustomResourceOptions): Logger;
    /**
     * Returns true if the given object is an instance of Logger.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Logger;
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    readonly apiManagementName: pulumi.Output<string>;
    /**
     * An `applicationInsights` block as documented below.
     */
    readonly applicationInsights: pulumi.Output<outputs.apimanagement.LoggerApplicationInsights | undefined>;
    /**
     * Specifies whether records should be buffered in the Logger prior to publishing. Defaults to `true`.
     */
    readonly buffered: pulumi.Output<boolean | undefined>;
    /**
     * A description of this Logger.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * An `eventhub` block as documented below.
     */
    readonly eventhub: pulumi.Output<outputs.apimanagement.LoggerEventhub | undefined>;
    /**
     * The name of this Logger, which must be unique within the API Management Service. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The target resource id which will be linked in the API-Management portal page.
     */
    readonly resourceId: pulumi.Output<string | undefined>;
    /**
     * Create a Logger resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoggerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Logger resources.
 */
export interface LoggerState {
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    apiManagementName?: pulumi.Input<string>;
    /**
     * An `applicationInsights` block as documented below.
     */
    applicationInsights?: pulumi.Input<inputs.apimanagement.LoggerApplicationInsights>;
    /**
     * Specifies whether records should be buffered in the Logger prior to publishing. Defaults to `true`.
     */
    buffered?: pulumi.Input<boolean>;
    /**
     * A description of this Logger.
     */
    description?: pulumi.Input<string>;
    /**
     * An `eventhub` block as documented below.
     */
    eventhub?: pulumi.Input<inputs.apimanagement.LoggerEventhub>;
    /**
     * The name of this Logger, which must be unique within the API Management Service. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The target resource id which will be linked in the API-Management portal page.
     */
    resourceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Logger resource.
 */
export interface LoggerArgs {
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    apiManagementName: pulumi.Input<string>;
    /**
     * An `applicationInsights` block as documented below.
     */
    applicationInsights?: pulumi.Input<inputs.apimanagement.LoggerApplicationInsights>;
    /**
     * Specifies whether records should be buffered in the Logger prior to publishing. Defaults to `true`.
     */
    buffered?: pulumi.Input<boolean>;
    /**
     * A description of this Logger.
     */
    description?: pulumi.Input<string>;
    /**
     * An `eventhub` block as documented below.
     */
    eventhub?: pulumi.Input<inputs.apimanagement.LoggerEventhub>;
    /**
     * The name of this Logger, which must be unique within the API Management Service. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The target resource id which will be linked in the API-Management portal page.
     */
    resourceId?: pulumi.Input<string>;
}
