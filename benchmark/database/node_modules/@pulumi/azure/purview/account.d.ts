import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Purview Account.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.purview.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * ```
 *
 * ## Import
 *
 * Purview Accounts can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:purview/account:Account example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Purview/accounts/account1
 * ```
 */
export declare class Account extends pulumi.CustomResource {
    /**
     * Get an existing Account resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccountState, opts?: pulumi.CustomResourceOptions): Account;
    /**
     * Returns true if the given object is an instance of Account.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Account;
    /**
     * Atlas Kafka endpoint primary connection string.
     */
    readonly atlasKafkaEndpointPrimaryConnectionString: pulumi.Output<string>;
    /**
     * Atlas Kafka endpoint secondary connection string.
     */
    readonly atlasKafkaEndpointSecondaryConnectionString: pulumi.Output<string>;
    /**
     * Catalog endpoint.
     */
    readonly catalogEndpoint: pulumi.Output<string>;
    /**
     * Guardian endpoint.
     */
    readonly guardianEndpoint: pulumi.Output<string>;
    /**
     * A `identity` block as defined below.
     */
    readonly identities: pulumi.Output<outputs.purview.AccountIdentity[]>;
    /**
     * The Azure Region where the Purview Account should exist. Changing this forces a new Purview Account to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for the new Resource Group where Purview Account creates the managed resources. Changing this forces a new Purview Account to be created.
     */
    readonly managedResourceGroupName: pulumi.Output<string>;
    /**
     * A `managedResources` block as defined below.
     */
    readonly managedResources: pulumi.Output<outputs.purview.AccountManagedResource[]>;
    /**
     * The name which should be used for this Purview Account. Changing this forces a new Purview Account to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Should the Purview Account be visible to the public network? Defaults to `true`.
     */
    readonly publicNetworkEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The name of the Resource Group where the Purview Account should exist. Changing this forces a new Purview Account to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Scan endpoint.
     */
    readonly scanEndpoint: pulumi.Output<string>;
    /**
     * @deprecated This property can no longer be specified on create/update, it can only be updated by creating a support ticket at Azure
     */
    readonly skuName: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags which should be assigned to the Purview Account.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Account resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Account resources.
 */
export interface AccountState {
    /**
     * Atlas Kafka endpoint primary connection string.
     */
    atlasKafkaEndpointPrimaryConnectionString?: pulumi.Input<string>;
    /**
     * Atlas Kafka endpoint secondary connection string.
     */
    atlasKafkaEndpointSecondaryConnectionString?: pulumi.Input<string>;
    /**
     * Catalog endpoint.
     */
    catalogEndpoint?: pulumi.Input<string>;
    /**
     * Guardian endpoint.
     */
    guardianEndpoint?: pulumi.Input<string>;
    /**
     * A `identity` block as defined below.
     */
    identities?: pulumi.Input<pulumi.Input<inputs.purview.AccountIdentity>[]>;
    /**
     * The Azure Region where the Purview Account should exist. Changing this forces a new Purview Account to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for the new Resource Group where Purview Account creates the managed resources. Changing this forces a new Purview Account to be created.
     */
    managedResourceGroupName?: pulumi.Input<string>;
    /**
     * A `managedResources` block as defined below.
     */
    managedResources?: pulumi.Input<pulumi.Input<inputs.purview.AccountManagedResource>[]>;
    /**
     * The name which should be used for this Purview Account. Changing this forces a new Purview Account to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Should the Purview Account be visible to the public network? Defaults to `true`.
     */
    publicNetworkEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the Resource Group where the Purview Account should exist. Changing this forces a new Purview Account to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Scan endpoint.
     */
    scanEndpoint?: pulumi.Input<string>;
    /**
     * @deprecated This property can no longer be specified on create/update, it can only be updated by creating a support ticket at Azure
     */
    skuName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Purview Account.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * The Azure Region where the Purview Account should exist. Changing this forces a new Purview Account to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for the new Resource Group where Purview Account creates the managed resources. Changing this forces a new Purview Account to be created.
     */
    managedResourceGroupName?: pulumi.Input<string>;
    /**
     * The name which should be used for this Purview Account. Changing this forces a new Purview Account to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Should the Purview Account be visible to the public network? Defaults to `true`.
     */
    publicNetworkEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the Resource Group where the Purview Account should exist. Changing this forces a new Purview Account to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * @deprecated This property can no longer be specified on create/update, it can only be updated by creating a support ticket at Azure
     */
    skuName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Purview Account.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
