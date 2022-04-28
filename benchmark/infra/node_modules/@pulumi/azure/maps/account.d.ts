import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Azure Maps Account.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.maps.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     skuName: "S1",
 *     tags: {
 *         environment: "Test",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * A Maps Account can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:maps/account:Account example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Maps/accounts/my-maps-account
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
     * The name of the Azure Maps Account. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The primary key used to authenticate and authorize access to the Maps REST APIs.
     */
    readonly primaryAccessKey: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the Azure Maps Account should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The secondary key used to authenticate and authorize access to the Maps REST APIs.
     */
    readonly secondaryAccessKey: pulumi.Output<string>;
    /**
     * The sku of the Azure Maps Account. Possible values are `S0`, `S1` and `G2`.
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the Azure Maps Account.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * A unique identifier for the Maps Account.
     */
    readonly xMsClientId: pulumi.Output<string>;
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
     * The name of the Azure Maps Account. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The primary key used to authenticate and authorize access to the Maps REST APIs.
     */
    primaryAccessKey?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Azure Maps Account should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The secondary key used to authenticate and authorize access to the Maps REST APIs.
     */
    secondaryAccessKey?: pulumi.Input<string>;
    /**
     * The sku of the Azure Maps Account. Possible values are `S0`, `S1` and `G2`.
     */
    skuName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the Azure Maps Account.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A unique identifier for the Maps Account.
     */
    xMsClientId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * The name of the Azure Maps Account. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Azure Maps Account should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The sku of the Azure Maps Account. Possible values are `S0`, `S1` and `G2`.
     */
    skuName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the Azure Maps Account.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
