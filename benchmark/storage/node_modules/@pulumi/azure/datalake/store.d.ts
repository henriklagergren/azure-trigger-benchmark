import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure Data Lake Storage Gen1 (previously known as Azure Data Lake Store).
 *
 * > **Note:** This resoruce manages an `Azure Data Lake Storage Gen1`, previously known as `Azure Data Lake Store`.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleStore = new azure.datalake.Store("exampleStore", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     encryptionState: "Enabled",
 *     encryptionType: "ServiceManaged",
 * });
 * ```
 *
 * ## Import
 *
 * Data Lake Store's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datalake/store:Store example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.DataLakeStore/accounts/mydatalakeaccount
 * ```
 */
export declare class Store extends pulumi.CustomResource {
    /**
     * Get an existing Store resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StoreState, opts?: pulumi.CustomResourceOptions): Store;
    /**
     * Returns true if the given object is an instance of Store.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Store;
    /**
     * Is Encryption enabled on this Data Lake Store Account? Possible values are `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    readonly encryptionState: pulumi.Output<string | undefined>;
    /**
     * The Encryption Type used for this Data Lake Store Account. Currently can be set to `ServiceManaged` when `encryptionState` is `Enabled` - and must be a blank string when it's Disabled.
     */
    readonly encryptionType: pulumi.Output<string>;
    /**
     * The Endpoint for the Data Lake Store.
     */
    readonly endpoint: pulumi.Output<string>;
    /**
     * are Azure Service IP's allowed through the firewall? Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
     */
    readonly firewallAllowAzureIps: pulumi.Output<string | undefined>;
    /**
     * the state of the Firewall. Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
     */
    readonly firewallState: pulumi.Output<string | undefined>;
    /**
     * An `identity` block defined below.
     */
    readonly identity: pulumi.Output<outputs.datalake.StoreIdentity | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Data Lake Store.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The monthly commitment tier for Data Lake Store. Accepted values are `Consumption`, `Commitment_1TB`, `Commitment_10TB`, `Commitment_100TB`, `Commitment_500TB`, `Commitment_1PB` or `Commitment_5PB`.
     */
    readonly tier: pulumi.Output<string | undefined>;
    /**
     * Create a Store resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StoreArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Store resources.
 */
export interface StoreState {
    /**
     * Is Encryption enabled on this Data Lake Store Account? Possible values are `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    encryptionState?: pulumi.Input<string>;
    /**
     * The Encryption Type used for this Data Lake Store Account. Currently can be set to `ServiceManaged` when `encryptionState` is `Enabled` - and must be a blank string when it's Disabled.
     */
    encryptionType?: pulumi.Input<string>;
    /**
     * The Endpoint for the Data Lake Store.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * are Azure Service IP's allowed through the firewall? Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
     */
    firewallAllowAzureIps?: pulumi.Input<string>;
    /**
     * the state of the Firewall. Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
     */
    firewallState?: pulumi.Input<string>;
    /**
     * An `identity` block defined below.
     */
    identity?: pulumi.Input<inputs.datalake.StoreIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Data Lake Store.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The monthly commitment tier for Data Lake Store. Accepted values are `Consumption`, `Commitment_1TB`, `Commitment_10TB`, `Commitment_100TB`, `Commitment_500TB`, `Commitment_1PB` or `Commitment_5PB`.
     */
    tier?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Store resource.
 */
export interface StoreArgs {
    /**
     * Is Encryption enabled on this Data Lake Store Account? Possible values are `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    encryptionState?: pulumi.Input<string>;
    /**
     * The Encryption Type used for this Data Lake Store Account. Currently can be set to `ServiceManaged` when `encryptionState` is `Enabled` - and must be a blank string when it's Disabled.
     */
    encryptionType?: pulumi.Input<string>;
    /**
     * are Azure Service IP's allowed through the firewall? Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
     */
    firewallAllowAzureIps?: pulumi.Input<string>;
    /**
     * the state of the Firewall. Possible values are `Enabled` and `Disabled`. Defaults to `Enabled.`
     */
    firewallState?: pulumi.Input<string>;
    /**
     * An `identity` block defined below.
     */
    identity?: pulumi.Input<inputs.datalake.StoreIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Data Lake Store. Changing this forces a new resource to be created. Has to be between 3 to 24 characters.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Data Lake Store.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The monthly commitment tier for Data Lake Store. Accepted values are `Consumption`, `Commitment_1TB`, `Commitment_10TB`, `Commitment_100TB`, `Commitment_500TB`, `Commitment_1PB` or `Commitment_5PB`.
     */
    tier?: pulumi.Input<string>;
}
