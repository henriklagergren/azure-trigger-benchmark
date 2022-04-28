import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure App Configuration.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const rg = new azure.core.ResourceGroup("rg", {location: "West Europe"});
 * const appconf = new azure.appconfiguration.ConfigurationStore("appconf", {
 *     resourceGroupName: rg.name,
 *     location: rg.location,
 * });
 * ```
 *
 * ## Import
 *
 * App Configurations can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appconfiguration/configurationStore:ConfigurationStore appconf /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resourceGroup1/providers/Microsoft.AppConfiguration/configurationStores/appConf1
 * ```
 */
export declare class ConfigurationStore extends pulumi.CustomResource {
    /**
     * Get an existing ConfigurationStore resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConfigurationStoreState, opts?: pulumi.CustomResourceOptions): ConfigurationStore;
    /**
     * Returns true if the given object is an instance of ConfigurationStore.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ConfigurationStore;
    /**
     * The URL of the App Configuration.
     */
    readonly endpoint: pulumi.Output<string>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.appconfiguration.ConfigurationStoreIdentity | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the App Configuration. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `primaryReadKey` block as defined below containing the primary read access key.
     */
    readonly primaryReadKeys: pulumi.Output<outputs.appconfiguration.ConfigurationStorePrimaryReadKey[]>;
    /**
     * A `primaryWriteKey` block as defined below containing the primary write access key.
     */
    readonly primaryWriteKeys: pulumi.Output<outputs.appconfiguration.ConfigurationStorePrimaryWriteKey[]>;
    /**
     * The name of the resource group in which to create the App Configuration. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `secondaryReadKey` block as defined below containing the secondary read access key.
     */
    readonly secondaryReadKeys: pulumi.Output<outputs.appconfiguration.ConfigurationStoreSecondaryReadKey[]>;
    /**
     * A `secondaryWriteKey` block as defined below containing the secondary write access key.
     */
    readonly secondaryWriteKeys: pulumi.Output<outputs.appconfiguration.ConfigurationStoreSecondaryWriteKey[]>;
    /**
     * The SKU name of the the App Configuration. Possible values are `free` and `standard`.
     */
    readonly sku: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a ConfigurationStore resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConfigurationStoreArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ConfigurationStore resources.
 */
export interface ConfigurationStoreState {
    /**
     * The URL of the App Configuration.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.appconfiguration.ConfigurationStoreIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the App Configuration. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `primaryReadKey` block as defined below containing the primary read access key.
     */
    primaryReadKeys?: pulumi.Input<pulumi.Input<inputs.appconfiguration.ConfigurationStorePrimaryReadKey>[]>;
    /**
     * A `primaryWriteKey` block as defined below containing the primary write access key.
     */
    primaryWriteKeys?: pulumi.Input<pulumi.Input<inputs.appconfiguration.ConfigurationStorePrimaryWriteKey>[]>;
    /**
     * The name of the resource group in which to create the App Configuration. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `secondaryReadKey` block as defined below containing the secondary read access key.
     */
    secondaryReadKeys?: pulumi.Input<pulumi.Input<inputs.appconfiguration.ConfigurationStoreSecondaryReadKey>[]>;
    /**
     * A `secondaryWriteKey` block as defined below containing the secondary write access key.
     */
    secondaryWriteKeys?: pulumi.Input<pulumi.Input<inputs.appconfiguration.ConfigurationStoreSecondaryWriteKey>[]>;
    /**
     * The SKU name of the the App Configuration. Possible values are `free` and `standard`.
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
 * The set of arguments for constructing a ConfigurationStore resource.
 */
export interface ConfigurationStoreArgs {
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.appconfiguration.ConfigurationStoreIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the App Configuration. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the App Configuration. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SKU name of the the App Configuration. Possible values are `free` and `standard`.
     */
    sku?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
