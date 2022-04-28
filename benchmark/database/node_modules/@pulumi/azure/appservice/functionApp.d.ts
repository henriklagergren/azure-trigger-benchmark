import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Function App.
 *
 * > **Note:** To connect an Azure Function App and a subnet within the same region `azure.appservice.VirtualNetworkSwiftConnection` can be used.
 * For an example, check the `azure.appservice.VirtualNetworkSwiftConnection` documentation.
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
 * ```
 * ### In A Consumption Plan)
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
 *     kind: "FunctionApp",
 *     sku: {
 *         tier: "Dynamic",
 *         size: "Y1",
 *     },
 * });
 * const exampleFunctionApp = new azure.appservice.FunctionApp("exampleFunctionApp", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     appServicePlanId: examplePlan.id,
 *     storageAccountName: exampleAccount.name,
 *     storageAccountAccessKey: exampleAccount.primaryAccessKey,
 * });
 * ```
 * ### Linux)
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
 *     kind: "Linux",
 *     reserved: true,
 *     sku: {
 *         tier: "Dynamic",
 *         size: "Y1",
 *     },
 * });
 * const exampleFunctionApp = new azure.appservice.FunctionApp("exampleFunctionApp", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     appServicePlanId: examplePlan.id,
 *     storageAccountName: exampleAccount.name,
 *     storageAccountAccessKey: exampleAccount.primaryAccessKey,
 *     osType: "linux",
 *     version: "~3",
 * });
 * ```
 * > **Note:** Version `~3` is required for Linux Function Apps.
 * ### Python In A Consumption Plan)
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
 *     kind: "Linux",
 *     reserved: true,
 *     sku: {
 *         tier: "Dynamic",
 *         size: "Y1",
 *     },
 * });
 * const exampleFunctionApp = new azure.appservice.FunctionApp("exampleFunctionApp", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     appServicePlanId: examplePlan.id,
 *     storageAccountName: exampleAccount.name,
 *     storageAccountAccessKey: exampleAccount.primaryAccessKey,
 *     osType: "linux",
 *     version: "~4",
 *     appSettings: [{
 *         FUNCTIONSWORKERRUNTIME: "python",
 *     }],
 *     siteConfig: {
 *         linuxFxVersion: "python|3.9",
 *     },
 * });
 * ```
 * > **Note:** The Python runtime is only supported on a Linux based hosting plan.  See [the documentation for additional information](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-python).
 *
 * ## Import
 *
 * Function Apps can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appservice/functionApp:FunctionApp functionapp1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Web/sites/functionapp1
 * ```
 */
export declare class FunctionApp extends pulumi.CustomResource {
    /**
     * Get an existing FunctionApp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FunctionAppState, opts?: pulumi.CustomResourceOptions): FunctionApp;
    /**
     * Returns true if the given object is an instance of FunctionApp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FunctionApp;
    /**
     * The ID of the App Service Plan within which to create this Function App.
     */
    readonly appServicePlanId: pulumi.Output<string>;
    /**
     * A map of key-value pairs for [App Settings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-app-settings) and custom values.
     */
    readonly appSettings: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * A `authSettings` block as defined below.
     */
    readonly authSettings: pulumi.Output<outputs.appservice.FunctionAppAuthSettings>;
    /**
     * Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
     *
     * @deprecated This property is no longer configurable in the service and has been deprecated. It will be removed in 3.0 of the provider.
     */
    readonly clientAffinityEnabled: pulumi.Output<boolean>;
    /**
     * The mode of the Function App's client certificates requirement for incoming requests. Possible values are `Required` and `Optional`.
     */
    readonly clientCertMode: pulumi.Output<string | undefined>;
    /**
     * An `connectionString` block as defined below.
     */
    readonly connectionStrings: pulumi.Output<outputs.appservice.FunctionAppConnectionString[]>;
    /**
     * An identifier used by App Service to perform domain ownership verification via DNS TXT record.
     */
    readonly customDomainVerificationId: pulumi.Output<string>;
    /**
     * The amount of memory in gigabyte-seconds that your application is allowed to consume per day. Setting this value only affects function apps under the consumption plan. Defaults to `0`.
     */
    readonly dailyMemoryTimeQuota: pulumi.Output<number | undefined>;
    /**
     * The default hostname associated with the Function App - such as `mysite.azurewebsites.net`
     */
    readonly defaultHostname: pulumi.Output<string>;
    /**
     * Should the built-in logging of this Function App be enabled? Defaults to `true`.
     */
    readonly enableBuiltinLogging: pulumi.Output<boolean | undefined>;
    /**
     * Is the Function App enabled?
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Can the Function App only be accessed via HTTPS? Defaults to `false`.
     */
    readonly httpsOnly: pulumi.Output<boolean | undefined>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.appservice.FunctionAppIdentity>;
    /**
     * The User Assigned Identity Id used for looking up KeyVault secrets. The identity must be assigned to the application. See [Access vaults with a user-assigned identity](https://docs.microsoft.com/en-us/azure/app-service/app-service-key-vault-references#access-vaults-with-a-user-assigned-identity) for more information.
     */
    readonly keyVaultReferenceIdentityId: pulumi.Output<string>;
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
     * The name of the resource group in which to create the Function App.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `siteConfig` object as defined below.
     */
    readonly siteConfig: pulumi.Output<outputs.appservice.FunctionAppSiteConfig>;
    /**
     * A `siteCredential` block as defined below, which contains the site-level credentials used to publish to this App Service.
     */
    readonly siteCredentials: pulumi.Output<outputs.appservice.FunctionAppSiteCredential[]>;
    /**
     * A `sourceControl` block, as defined below.
     */
    readonly sourceControl: pulumi.Output<outputs.appservice.FunctionAppSourceControl>;
    /**
     * The access key which will be used to access the backend storage account for the Function App.
     */
    readonly storageAccountAccessKey: pulumi.Output<string>;
    /**
     * The backend storage account name which will be used by this Function App (such as the dashboard, logs).
     */
    readonly storageAccountName: pulumi.Output<string>;
    /**
     * @deprecated Deprecated in favour of `storage_account_name` and `storage_account_access_key`
     */
    readonly storageConnectionString: pulumi.Output<string>;
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
     * Create a FunctionApp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FunctionAppArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering FunctionApp resources.
 */
export interface FunctionAppState {
    /**
     * The ID of the App Service Plan within which to create this Function App.
     */
    appServicePlanId?: pulumi.Input<string>;
    /**
     * A map of key-value pairs for [App Settings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-app-settings) and custom values.
     */
    appSettings?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `authSettings` block as defined below.
     */
    authSettings?: pulumi.Input<inputs.appservice.FunctionAppAuthSettings>;
    /**
     * Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
     *
     * @deprecated This property is no longer configurable in the service and has been deprecated. It will be removed in 3.0 of the provider.
     */
    clientAffinityEnabled?: pulumi.Input<boolean>;
    /**
     * The mode of the Function App's client certificates requirement for incoming requests. Possible values are `Required` and `Optional`.
     */
    clientCertMode?: pulumi.Input<string>;
    /**
     * An `connectionString` block as defined below.
     */
    connectionStrings?: pulumi.Input<pulumi.Input<inputs.appservice.FunctionAppConnectionString>[]>;
    /**
     * An identifier used by App Service to perform domain ownership verification via DNS TXT record.
     */
    customDomainVerificationId?: pulumi.Input<string>;
    /**
     * The amount of memory in gigabyte-seconds that your application is allowed to consume per day. Setting this value only affects function apps under the consumption plan. Defaults to `0`.
     */
    dailyMemoryTimeQuota?: pulumi.Input<number>;
    /**
     * The default hostname associated with the Function App - such as `mysite.azurewebsites.net`
     */
    defaultHostname?: pulumi.Input<string>;
    /**
     * Should the built-in logging of this Function App be enabled? Defaults to `true`.
     */
    enableBuiltinLogging?: pulumi.Input<boolean>;
    /**
     * Is the Function App enabled?
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Can the Function App only be accessed via HTTPS? Defaults to `false`.
     */
    httpsOnly?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.appservice.FunctionAppIdentity>;
    /**
     * The User Assigned Identity Id used for looking up KeyVault secrets. The identity must be assigned to the application. See [Access vaults with a user-assigned identity](https://docs.microsoft.com/en-us/azure/app-service/app-service-key-vault-references#access-vaults-with-a-user-assigned-identity) for more information.
     */
    keyVaultReferenceIdentityId?: pulumi.Input<string>;
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
     * The name of the resource group in which to create the Function App.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `siteConfig` object as defined below.
     */
    siteConfig?: pulumi.Input<inputs.appservice.FunctionAppSiteConfig>;
    /**
     * A `siteCredential` block as defined below, which contains the site-level credentials used to publish to this App Service.
     */
    siteCredentials?: pulumi.Input<pulumi.Input<inputs.appservice.FunctionAppSiteCredential>[]>;
    /**
     * A `sourceControl` block, as defined below.
     */
    sourceControl?: pulumi.Input<inputs.appservice.FunctionAppSourceControl>;
    /**
     * The access key which will be used to access the backend storage account for the Function App.
     */
    storageAccountAccessKey?: pulumi.Input<string>;
    /**
     * The backend storage account name which will be used by this Function App (such as the dashboard, logs).
     */
    storageAccountName?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated in favour of `storage_account_name` and `storage_account_access_key`
     */
    storageConnectionString?: pulumi.Input<string>;
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
 * The set of arguments for constructing a FunctionApp resource.
 */
export interface FunctionAppArgs {
    /**
     * The ID of the App Service Plan within which to create this Function App.
     */
    appServicePlanId: pulumi.Input<string>;
    /**
     * A map of key-value pairs for [App Settings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-app-settings) and custom values.
     */
    appSettings?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `authSettings` block as defined below.
     */
    authSettings?: pulumi.Input<inputs.appservice.FunctionAppAuthSettings>;
    /**
     * Should the Function App send session affinity cookies, which route client requests in the same session to the same instance?
     *
     * @deprecated This property is no longer configurable in the service and has been deprecated. It will be removed in 3.0 of the provider.
     */
    clientAffinityEnabled?: pulumi.Input<boolean>;
    /**
     * The mode of the Function App's client certificates requirement for incoming requests. Possible values are `Required` and `Optional`.
     */
    clientCertMode?: pulumi.Input<string>;
    /**
     * An `connectionString` block as defined below.
     */
    connectionStrings?: pulumi.Input<pulumi.Input<inputs.appservice.FunctionAppConnectionString>[]>;
    /**
     * The amount of memory in gigabyte-seconds that your application is allowed to consume per day. Setting this value only affects function apps under the consumption plan. Defaults to `0`.
     */
    dailyMemoryTimeQuota?: pulumi.Input<number>;
    /**
     * Should the built-in logging of this Function App be enabled? Defaults to `true`.
     */
    enableBuiltinLogging?: pulumi.Input<boolean>;
    /**
     * Is the Function App enabled?
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Can the Function App only be accessed via HTTPS? Defaults to `false`.
     */
    httpsOnly?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.appservice.FunctionAppIdentity>;
    /**
     * The User Assigned Identity Id used for looking up KeyVault secrets. The identity must be assigned to the application. See [Access vaults with a user-assigned identity](https://docs.microsoft.com/en-us/azure/app-service/app-service-key-vault-references#access-vaults-with-a-user-assigned-identity) for more information.
     */
    keyVaultReferenceIdentityId?: pulumi.Input<string>;
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
     * The name of the resource group in which to create the Function App.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `siteConfig` object as defined below.
     */
    siteConfig?: pulumi.Input<inputs.appservice.FunctionAppSiteConfig>;
    /**
     * A `sourceControl` block, as defined below.
     */
    sourceControl?: pulumi.Input<inputs.appservice.FunctionAppSourceControl>;
    /**
     * The access key which will be used to access the backend storage account for the Function App.
     */
    storageAccountAccessKey?: pulumi.Input<string>;
    /**
     * The backend storage account name which will be used by this Function App (such as the dashboard, logs).
     */
    storageAccountName?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated in favour of `storage_account_name` and `storage_account_access_key`
     */
    storageConnectionString?: pulumi.Input<string>;
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
