import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Function App deployment Slot.
 *
 * ## Example Usage
 * ### With App Service Plan)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const examplePlan = new azure.appservice.Plan("examplePlan", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         tier: "Standard",
 *         size: "S1",
 *     },
 * });
 * const exampleFunctionApp = new azure.appservice.FunctionApp("exampleFunctionApp", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     appServicePlanId: examplePlan.id,
 *     storageAccountName: exampleAccount.name,
 *     storageAccountAccessKey: exampleAccount.primaryAccessKey,
 * });
 * const exampleFunctionAppSlot = new azure.appservice.FunctionAppSlot("exampleFunctionAppSlot", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     appServicePlanId: examplePlan.id,
 *     functionAppName: exampleFunctionApp.name,
 *     storageAccountName: exampleAccount.name,
 *     storageAccountAccessKey: exampleAccount.primaryAccessKey,
 * });
 * ```
 *
 * ## Import
 *
 * Function Apps Deployment Slots can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appservice/functionAppSlot:FunctionAppSlot functionapp1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Web/sites/functionapp1/slots/staging
 * ```
 */
export declare class FunctionAppSlot extends pulumi.CustomResource {
    /**
     * Get an existing FunctionAppSlot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FunctionAppSlotState, opts?: pulumi.CustomResourceOptions): FunctionAppSlot;
    /**
     * Returns true if the given object is an instance of FunctionAppSlot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FunctionAppSlot;
    /**
     * The ID of the App Service Plan within which to create this Function App Slot.
     */
    readonly appServicePlanId: pulumi.Output<string>;
    /**
     * A key-value pair of App Settings.
     */
    readonly appSettings: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * An `authSettings` block as defined below.
     */
    readonly authSettings: pulumi.Output<outputs.appservice.FunctionAppSlotAuthSettings>;
    /**
     * Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
     *
     * @deprecated This property is no longer configurable in the service and has been deprecated.
     */
    readonly clientAffinityEnabled: pulumi.Output<boolean>;
    /**
     * A `connectionString` block as defined below.
     */
    readonly connectionStrings: pulumi.Output<outputs.appservice.FunctionAppSlotConnectionString[]>;
    /**
     * The amount of memory in gigabyte-seconds that your application is allowed to consume per day. Setting this value only affects function apps under the consumption plan. Defaults to `0`.
     */
    readonly dailyMemoryTimeQuota: pulumi.Output<number | undefined>;
    /**
     * The default hostname associated with the Function App - such as `mysite.azurewebsites.net`
     */
    readonly defaultHostname: pulumi.Output<string>;
    /**
     * Should the built-in logging of the Function App be enabled? Defaults to `true`.
     */
    readonly enableBuiltinLogging: pulumi.Output<boolean | undefined>;
    /**
     * Is the Function App enabled?
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * The name of the Function App within which to create the Function App Slot. Changing this forces a new resource to be created.
     */
    readonly functionAppName: pulumi.Output<string>;
    /**
     * Can the Function App only be accessed via HTTPS? Defaults to `false`.
     */
    readonly httpsOnly: pulumi.Output<boolean | undefined>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.appservice.FunctionAppSlotIdentity>;
    /**
     * The Function App kind - such as `functionapp,linux,container`
     */
    readonly kind: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Function App. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A string indicating the Operating System type for this function app.
     */
    readonly osType: pulumi.Output<string | undefined>;
    /**
     * A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12`
     */
    readonly outboundIpAddresses: pulumi.Output<string>;
    /**
     * A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12,52.143.43.17` - not all of which are necessarily in use. Superset of `outboundIpAddresses`.
     */
    readonly possibleOutboundIpAddresses: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Function App Slot.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `siteConfig` object as defined below.
     */
    readonly siteConfig: pulumi.Output<outputs.appservice.FunctionAppSlotSiteConfig>;
    /**
     * A `siteCredential` block as defined below, which contains the site-level credentials used to publish to this Function App Slot.
     */
    readonly siteCredentials: pulumi.Output<outputs.appservice.FunctionAppSlotSiteCredential[]>;
    /**
     * The access key which will be used to access the backend storage account for the Function App.
     */
    readonly storageAccountAccessKey: pulumi.Output<string>;
    /**
     * The backend storage account name which will be used by the Function App (such as the dashboard, logs).
     */
    readonly storageAccountName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The runtime version associated with the Function App. Defaults to `~1`.
     */
    readonly version: pulumi.Output<string | undefined>;
    /**
     * Create a FunctionAppSlot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FunctionAppSlotArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering FunctionAppSlot resources.
 */
export interface FunctionAppSlotState {
    /**
     * The ID of the App Service Plan within which to create this Function App Slot.
     */
    appServicePlanId?: pulumi.Input<string>;
    /**
     * A key-value pair of App Settings.
     */
    appSettings?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * An `authSettings` block as defined below.
     */
    authSettings?: pulumi.Input<inputs.appservice.FunctionAppSlotAuthSettings>;
    /**
     * Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
     *
     * @deprecated This property is no longer configurable in the service and has been deprecated.
     */
    clientAffinityEnabled?: pulumi.Input<boolean>;
    /**
     * A `connectionString` block as defined below.
     */
    connectionStrings?: pulumi.Input<pulumi.Input<inputs.appservice.FunctionAppSlotConnectionString>[]>;
    /**
     * The amount of memory in gigabyte-seconds that your application is allowed to consume per day. Setting this value only affects function apps under the consumption plan. Defaults to `0`.
     */
    dailyMemoryTimeQuota?: pulumi.Input<number>;
    /**
     * The default hostname associated with the Function App - such as `mysite.azurewebsites.net`
     */
    defaultHostname?: pulumi.Input<string>;
    /**
     * Should the built-in logging of the Function App be enabled? Defaults to `true`.
     */
    enableBuiltinLogging?: pulumi.Input<boolean>;
    /**
     * Is the Function App enabled?
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The name of the Function App within which to create the Function App Slot. Changing this forces a new resource to be created.
     */
    functionAppName?: pulumi.Input<string>;
    /**
     * Can the Function App only be accessed via HTTPS? Defaults to `false`.
     */
    httpsOnly?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.appservice.FunctionAppSlotIdentity>;
    /**
     * The Function App kind - such as `functionapp,linux,container`
     */
    kind?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Function App. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A string indicating the Operating System type for this function app.
     */
    osType?: pulumi.Input<string>;
    /**
     * A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12`
     */
    outboundIpAddresses?: pulumi.Input<string>;
    /**
     * A comma separated list of outbound IP addresses - such as `52.23.25.3,52.143.43.12,52.143.43.17` - not all of which are necessarily in use. Superset of `outboundIpAddresses`.
     */
    possibleOutboundIpAddresses?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Function App Slot.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `siteConfig` object as defined below.
     */
    siteConfig?: pulumi.Input<inputs.appservice.FunctionAppSlotSiteConfig>;
    /**
     * A `siteCredential` block as defined below, which contains the site-level credentials used to publish to this Function App Slot.
     */
    siteCredentials?: pulumi.Input<pulumi.Input<inputs.appservice.FunctionAppSlotSiteCredential>[]>;
    /**
     * The access key which will be used to access the backend storage account for the Function App.
     */
    storageAccountAccessKey?: pulumi.Input<string>;
    /**
     * The backend storage account name which will be used by the Function App (such as the dashboard, logs).
     */
    storageAccountName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The runtime version associated with the Function App. Defaults to `~1`.
     */
    version?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a FunctionAppSlot resource.
 */
export interface FunctionAppSlotArgs {
    /**
     * The ID of the App Service Plan within which to create this Function App Slot.
     */
    appServicePlanId: pulumi.Input<string>;
    /**
     * A key-value pair of App Settings.
     */
    appSettings?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * An `authSettings` block as defined below.
     */
    authSettings?: pulumi.Input<inputs.appservice.FunctionAppSlotAuthSettings>;
    /**
     * Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
     *
     * @deprecated This property is no longer configurable in the service and has been deprecated.
     */
    clientAffinityEnabled?: pulumi.Input<boolean>;
    /**
     * A `connectionString` block as defined below.
     */
    connectionStrings?: pulumi.Input<pulumi.Input<inputs.appservice.FunctionAppSlotConnectionString>[]>;
    /**
     * The amount of memory in gigabyte-seconds that your application is allowed to consume per day. Setting this value only affects function apps under the consumption plan. Defaults to `0`.
     */
    dailyMemoryTimeQuota?: pulumi.Input<number>;
    /**
     * Should the built-in logging of the Function App be enabled? Defaults to `true`.
     */
    enableBuiltinLogging?: pulumi.Input<boolean>;
    /**
     * Is the Function App enabled?
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The name of the Function App within which to create the Function App Slot. Changing this forces a new resource to be created.
     */
    functionAppName: pulumi.Input<string>;
    /**
     * Can the Function App only be accessed via HTTPS? Defaults to `false`.
     */
    httpsOnly?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.appservice.FunctionAppSlotIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Function App. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A string indicating the Operating System type for this function app.
     */
    osType?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Function App Slot.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `siteConfig` object as defined below.
     */
    siteConfig?: pulumi.Input<inputs.appservice.FunctionAppSlotSiteConfig>;
    /**
     * The access key which will be used to access the backend storage account for the Function App.
     */
    storageAccountAccessKey: pulumi.Input<string>;
    /**
     * The backend storage account name which will be used by the Function App (such as the dashboard, logs).
     */
    storageAccountName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The runtime version associated with the Function App. Defaults to `~1`.
     */
    version?: pulumi.Input<string>;
}
