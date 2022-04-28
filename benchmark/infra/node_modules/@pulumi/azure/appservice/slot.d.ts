import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an App Service Slot (within an App Service).
 *
 * > **Note:** When using Slots - the `appSettings`, `connectionString` and `siteConfig` blocks on the `azure.appservice.AppService` resource will be overwritten when promoting a Slot using the `azure.appservice.ActiveSlot` resource.
 *
 * ## Example Usage
 * ### Net 4.X)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * as random from "@pulumi/random";
 *
 * const server = new random.RandomId("server", {
 *     keepers: {
 *         azi_id: 1,
 *     },
 *     byteLength: 8,
 * });
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePlan = new azure.appservice.Plan("examplePlan", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         tier: "Standard",
 *         size: "S1",
 *     },
 * });
 * const exampleAppService = new azure.appservice.AppService("exampleAppService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     appServicePlanId: examplePlan.id,
 *     siteConfig: {
 *         dotnetFrameworkVersion: "v4.0",
 *     },
 *     appSettings: {
 *         SOME_KEY: "some-value",
 *     },
 *     connectionStrings: [{
 *         name: "Database",
 *         type: "SQLServer",
 *         value: "Server=some-server.mydomain.com;Integrated Security=SSPI",
 *     }],
 * });
 * const exampleSlot = new azure.appservice.Slot("exampleSlot", {
 *     appServiceName: exampleAppService.name,
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     appServicePlanId: examplePlan.id,
 *     siteConfig: {
 *         dotnetFrameworkVersion: "v4.0",
 *     },
 *     appSettings: {
 *         SOME_KEY: "some-value",
 *     },
 *     connectionStrings: [{
 *         name: "Database",
 *         type: "SQLServer",
 *         value: "Server=some-server.mydomain.com;Integrated Security=SSPI",
 *     }],
 * });
 * ```
 * ### Java 1.8)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * as random from "@pulumi/random";
 *
 * const server = new random.RandomId("server", {
 *     keepers: {
 *         azi_id: 1,
 *     },
 *     byteLength: 8,
 * });
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePlan = new azure.appservice.Plan("examplePlan", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         tier: "Standard",
 *         size: "S1",
 *     },
 * });
 * const exampleAppService = new azure.appservice.AppService("exampleAppService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     appServicePlanId: examplePlan.id,
 *     siteConfig: {
 *         javaVersion: "1.8",
 *         javaContainer: "JETTY",
 *         javaContainerVersion: "9.3",
 *     },
 * });
 * const exampleSlot = new azure.appservice.Slot("exampleSlot", {
 *     appServiceName: exampleAppService.name,
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     appServicePlanId: examplePlan.id,
 *     siteConfig: {
 *         javaVersion: "1.8",
 *         javaContainer: "JETTY",
 *         javaContainerVersion: "9.3",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * App Service Slots can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appservice/slot:Slot instance1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Web/sites/website1/slots/instance1
 * ```
 */
export declare class Slot extends pulumi.CustomResource {
    /**
     * Get an existing Slot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SlotState, opts?: pulumi.CustomResourceOptions): Slot;
    /**
     * Returns true if the given object is an instance of Slot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Slot;
    /**
     * The name of the App Service within which to create the App Service Slot.  Changing this forces a new resource to be created.
     */
    readonly appServiceName: pulumi.Output<string>;
    /**
     * The ID of the App Service Plan within which to create this App Service Slot. Changing this forces a new resource to be created.
     */
    readonly appServicePlanId: pulumi.Output<string>;
    /**
     * A key-value pair of App Settings.
     */
    readonly appSettings: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * A `authSettings` block as defined below.
     */
    readonly authSettings: pulumi.Output<outputs.appservice.SlotAuthSettings>;
    /**
     * Should the App Service Slot send session affinity cookies, which route client requests in the same session to the same instance?
     */
    readonly clientAffinityEnabled: pulumi.Output<boolean>;
    /**
     * An `connectionString` block as defined below.
     */
    readonly connectionStrings: pulumi.Output<outputs.appservice.SlotConnectionString[]>;
    /**
     * The Default Hostname associated with the App Service Slot - such as `mysite.azurewebsites.net`
     */
    readonly defaultSiteHostname: pulumi.Output<string>;
    /**
     * Is the App Service Slot Enabled?
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Can the App Service Slot only be accessed via HTTPS? Defaults to `false`.
     */
    readonly httpsOnly: pulumi.Output<boolean | undefined>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.appservice.SlotIdentity>;
    /**
     * The User Assigned Identity Id used for looking up KeyVault secrets. The identity must be assigned to the application. See [Access vaults with a user-assigned identity](https://docs.microsoft.com/en-us/azure/app-service/app-service-key-vault-references#access-vaults-with-a-user-assigned-identity) for more information.
     */
    readonly keyVaultReferenceIdentityId: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * A `logs` block as defined below.
     */
    readonly logs: pulumi.Output<outputs.appservice.SlotLogs>;
    /**
     * Specifies the name of the App Service Slot component. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the App Service Slot component.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `siteConfig` object as defined below.
     */
    readonly siteConfig: pulumi.Output<outputs.appservice.SlotSiteConfig>;
    /**
     * A `siteCredential` block as defined below, which contains the site-level credentials used to publish to this App Service slot.
     */
    readonly siteCredentials: pulumi.Output<outputs.appservice.SlotSiteCredential[]>;
    /**
     * One or more `storageAccount` blocks as defined below.
     */
    readonly storageAccounts: pulumi.Output<outputs.appservice.SlotStorageAccount[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Slot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SlotArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Slot resources.
 */
export interface SlotState {
    /**
     * The name of the App Service within which to create the App Service Slot.  Changing this forces a new resource to be created.
     */
    appServiceName?: pulumi.Input<string>;
    /**
     * The ID of the App Service Plan within which to create this App Service Slot. Changing this forces a new resource to be created.
     */
    appServicePlanId?: pulumi.Input<string>;
    /**
     * A key-value pair of App Settings.
     */
    appSettings?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `authSettings` block as defined below.
     */
    authSettings?: pulumi.Input<inputs.appservice.SlotAuthSettings>;
    /**
     * Should the App Service Slot send session affinity cookies, which route client requests in the same session to the same instance?
     */
    clientAffinityEnabled?: pulumi.Input<boolean>;
    /**
     * An `connectionString` block as defined below.
     */
    connectionStrings?: pulumi.Input<pulumi.Input<inputs.appservice.SlotConnectionString>[]>;
    /**
     * The Default Hostname associated with the App Service Slot - such as `mysite.azurewebsites.net`
     */
    defaultSiteHostname?: pulumi.Input<string>;
    /**
     * Is the App Service Slot Enabled?
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Can the App Service Slot only be accessed via HTTPS? Defaults to `false`.
     */
    httpsOnly?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.appservice.SlotIdentity>;
    /**
     * The User Assigned Identity Id used for looking up KeyVault secrets. The identity must be assigned to the application. See [Access vaults with a user-assigned identity](https://docs.microsoft.com/en-us/azure/app-service/app-service-key-vault-references#access-vaults-with-a-user-assigned-identity) for more information.
     */
    keyVaultReferenceIdentityId?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A `logs` block as defined below.
     */
    logs?: pulumi.Input<inputs.appservice.SlotLogs>;
    /**
     * Specifies the name of the App Service Slot component. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the App Service Slot component.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `siteConfig` object as defined below.
     */
    siteConfig?: pulumi.Input<inputs.appservice.SlotSiteConfig>;
    /**
     * A `siteCredential` block as defined below, which contains the site-level credentials used to publish to this App Service slot.
     */
    siteCredentials?: pulumi.Input<pulumi.Input<inputs.appservice.SlotSiteCredential>[]>;
    /**
     * One or more `storageAccount` blocks as defined below.
     */
    storageAccounts?: pulumi.Input<pulumi.Input<inputs.appservice.SlotStorageAccount>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Slot resource.
 */
export interface SlotArgs {
    /**
     * The name of the App Service within which to create the App Service Slot.  Changing this forces a new resource to be created.
     */
    appServiceName: pulumi.Input<string>;
    /**
     * The ID of the App Service Plan within which to create this App Service Slot. Changing this forces a new resource to be created.
     */
    appServicePlanId: pulumi.Input<string>;
    /**
     * A key-value pair of App Settings.
     */
    appSettings?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `authSettings` block as defined below.
     */
    authSettings?: pulumi.Input<inputs.appservice.SlotAuthSettings>;
    /**
     * Should the App Service Slot send session affinity cookies, which route client requests in the same session to the same instance?
     */
    clientAffinityEnabled?: pulumi.Input<boolean>;
    /**
     * An `connectionString` block as defined below.
     */
    connectionStrings?: pulumi.Input<pulumi.Input<inputs.appservice.SlotConnectionString>[]>;
    /**
     * Is the App Service Slot Enabled?
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Can the App Service Slot only be accessed via HTTPS? Defaults to `false`.
     */
    httpsOnly?: pulumi.Input<boolean>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.appservice.SlotIdentity>;
    /**
     * The User Assigned Identity Id used for looking up KeyVault secrets. The identity must be assigned to the application. See [Access vaults with a user-assigned identity](https://docs.microsoft.com/en-us/azure/app-service/app-service-key-vault-references#access-vaults-with-a-user-assigned-identity) for more information.
     */
    keyVaultReferenceIdentityId?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * A `logs` block as defined below.
     */
    logs?: pulumi.Input<inputs.appservice.SlotLogs>;
    /**
     * Specifies the name of the App Service Slot component. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the App Service Slot component.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `siteConfig` object as defined below.
     */
    siteConfig?: pulumi.Input<inputs.appservice.SlotSiteConfig>;
    /**
     * One or more `storageAccount` blocks as defined below.
     */
    storageAccounts?: pulumi.Input<pulumi.Input<inputs.appservice.SlotStorageAccount>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
