import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure App Configuration Feature.
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
 * const test = new azure.appconfiguration.ConfigurationFeature("test", {
 *     configurationStoreId: appconf.id,
 *     description: "test description",
 *     label: `acctest-ackeylabel-%d`,
 *     enabled: true,
 * });
 * ```
 *
 * ## Import
 *
 * App Configuration Features can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appconfiguration/configurationFeature:ConfigurationFeature test /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resourceGroup1/providers/Microsoft.AppConfiguration/configurationStores/appConf1/AppConfigurationFeature/appConfFeature1/Label/label1
 * ```
 *
 *  If you wish to import a key with an empty label then sustitute the label's name with `%00`, like this
 *
 * ```sh
 *  $ pulumi import azure:appconfiguration/configurationFeature:ConfigurationFeature test /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resourceGroup1/providers/Microsoft.AppConfiguration/configurationStores/appConf1/AppConfigurationFeature/appConfFeature1/Label/%00
 * ```
 */
export declare class ConfigurationFeature extends pulumi.CustomResource {
    /**
     * Get an existing ConfigurationFeature resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConfigurationFeatureState, opts?: pulumi.CustomResourceOptions): ConfigurationFeature;
    /**
     * Returns true if the given object is an instance of ConfigurationFeature.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ConfigurationFeature;
    /**
     * Specifies the id of the App Configuration. Changing this forces a new resource to be created.
     */
    readonly configurationStoreId: pulumi.Output<string>;
    /**
     * The description of the App Configuration Feature.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The status of the App Configuration Feature. By default, this is set to false.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    readonly etag: pulumi.Output<string>;
    /**
     * The label of the App Configuration Feature.  Changing this forces a new resource to be created.
     */
    readonly label: pulumi.Output<string | undefined>;
    /**
     * Should this App Configuration Feature be Locked to prevent changes?
     */
    readonly locked: pulumi.Output<boolean | undefined>;
    /**
     * The name of the App Configuration Feature. Changing this foces a new resource to be crearted.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A list of one or more numbers representing the value of the percentage required to enable this feature.
     */
    readonly percentageFilterValue: pulumi.Output<number | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * A `targetingFilter` block as defined below.
     */
    readonly targetingFilters: pulumi.Output<outputs.appconfiguration.ConfigurationFeatureTargetingFilter[] | undefined>;
    /**
     * A `targetingFilter` block `timewindowFilter` as defined below.
     */
    readonly timewindowFilters: pulumi.Output<outputs.appconfiguration.ConfigurationFeatureTimewindowFilter[] | undefined>;
    /**
     * Create a ConfigurationFeature resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConfigurationFeatureArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ConfigurationFeature resources.
 */
export interface ConfigurationFeatureState {
    /**
     * Specifies the id of the App Configuration. Changing this forces a new resource to be created.
     */
    configurationStoreId?: pulumi.Input<string>;
    /**
     * The description of the App Configuration Feature.
     */
    description?: pulumi.Input<string>;
    /**
     * The status of the App Configuration Feature. By default, this is set to false.
     */
    enabled?: pulumi.Input<boolean>;
    etag?: pulumi.Input<string>;
    /**
     * The label of the App Configuration Feature.  Changing this forces a new resource to be created.
     */
    label?: pulumi.Input<string>;
    /**
     * Should this App Configuration Feature be Locked to prevent changes?
     */
    locked?: pulumi.Input<boolean>;
    /**
     * The name of the App Configuration Feature. Changing this foces a new resource to be crearted.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of one or more numbers representing the value of the percentage required to enable this feature.
     */
    percentageFilterValue?: pulumi.Input<number>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `targetingFilter` block as defined below.
     */
    targetingFilters?: pulumi.Input<pulumi.Input<inputs.appconfiguration.ConfigurationFeatureTargetingFilter>[]>;
    /**
     * A `targetingFilter` block `timewindowFilter` as defined below.
     */
    timewindowFilters?: pulumi.Input<pulumi.Input<inputs.appconfiguration.ConfigurationFeatureTimewindowFilter>[]>;
}
/**
 * The set of arguments for constructing a ConfigurationFeature resource.
 */
export interface ConfigurationFeatureArgs {
    /**
     * Specifies the id of the App Configuration. Changing this forces a new resource to be created.
     */
    configurationStoreId: pulumi.Input<string>;
    /**
     * The description of the App Configuration Feature.
     */
    description?: pulumi.Input<string>;
    /**
     * The status of the App Configuration Feature. By default, this is set to false.
     */
    enabled?: pulumi.Input<boolean>;
    etag?: pulumi.Input<string>;
    /**
     * The label of the App Configuration Feature.  Changing this forces a new resource to be created.
     */
    label?: pulumi.Input<string>;
    /**
     * Should this App Configuration Feature be Locked to prevent changes?
     */
    locked?: pulumi.Input<boolean>;
    /**
     * The name of the App Configuration Feature. Changing this foces a new resource to be crearted.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of one or more numbers representing the value of the percentage required to enable this feature.
     */
    percentageFilterValue?: pulumi.Input<number>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `targetingFilter` block as defined below.
     */
    targetingFilters?: pulumi.Input<pulumi.Input<inputs.appconfiguration.ConfigurationFeatureTargetingFilter>[]>;
    /**
     * A `targetingFilter` block `timewindowFilter` as defined below.
     */
    timewindowFilters?: pulumi.Input<pulumi.Input<inputs.appconfiguration.ConfigurationFeatureTimewindowFilter>[]>;
}
