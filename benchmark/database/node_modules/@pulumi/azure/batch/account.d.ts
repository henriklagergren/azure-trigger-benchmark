import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure Batch account.
 *
 * ## Example Usage
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
 * const exampleBatch_accountAccount = new azure.batch.Account("exampleBatch/accountAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     poolAllocationMode: "BatchService",
 *     storageAccountId: exampleAccount.id,
 *     tags: {
 *         env: "test",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Batch Account can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:batch/account:Account example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Batch/batchAccounts/account1
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
     * The account endpoint used to interact with the Batch service.
     */
    readonly accountEndpoint: pulumi.Output<string>;
    /**
     * Specifies if customer managed key encryption should be used to encrypt batch account data.
     */
    readonly encryption: pulumi.Output<outputs.batch.AccountEncryption | undefined>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.batch.AccountIdentity | undefined>;
    /**
     * A `keyVaultReference` block that describes the Azure KeyVault reference to use when deploying the Azure Batch account using the `UserSubscription` pool allocation mode.
     */
    readonly keyVaultReference: pulumi.Output<outputs.batch.AccountKeyVaultReference | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Batch account. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the mode to use for pool allocation. Possible values are `BatchService` or `UserSubscription`. Defaults to `BatchService`.
     */
    readonly poolAllocationMode: pulumi.Output<string | undefined>;
    /**
     * The Batch account primary access key.
     */
    readonly primaryAccessKey: pulumi.Output<string>;
    /**
     * Whether public network access is allowed for this server. Defaults to `true`.
     */
    readonly publicNetworkAccessEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource group in which to create the Batch account. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Batch account secondary access key.
     */
    readonly secondaryAccessKey: pulumi.Output<string>;
    /**
     * Specifies the storage account to use for the Batch account. If not specified, Azure Batch will manage the storage.
     */
    readonly storageAccountId: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
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
     * The account endpoint used to interact with the Batch service.
     */
    accountEndpoint?: pulumi.Input<string>;
    /**
     * Specifies if customer managed key encryption should be used to encrypt batch account data.
     */
    encryption?: pulumi.Input<inputs.batch.AccountEncryption>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.batch.AccountIdentity>;
    /**
     * A `keyVaultReference` block that describes the Azure KeyVault reference to use when deploying the Azure Batch account using the `UserSubscription` pool allocation mode.
     */
    keyVaultReference?: pulumi.Input<inputs.batch.AccountKeyVaultReference>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Batch account. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the mode to use for pool allocation. Possible values are `BatchService` or `UserSubscription`. Defaults to `BatchService`.
     */
    poolAllocationMode?: pulumi.Input<string>;
    /**
     * The Batch account primary access key.
     */
    primaryAccessKey?: pulumi.Input<string>;
    /**
     * Whether public network access is allowed for this server. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the resource group in which to create the Batch account. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Batch account secondary access key.
     */
    secondaryAccessKey?: pulumi.Input<string>;
    /**
     * Specifies the storage account to use for the Batch account. If not specified, Azure Batch will manage the storage.
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
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
     * Specifies if customer managed key encryption should be used to encrypt batch account data.
     */
    encryption?: pulumi.Input<inputs.batch.AccountEncryption>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.batch.AccountIdentity>;
    /**
     * A `keyVaultReference` block that describes the Azure KeyVault reference to use when deploying the Azure Batch account using the `UserSubscription` pool allocation mode.
     */
    keyVaultReference?: pulumi.Input<inputs.batch.AccountKeyVaultReference>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Batch account. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the mode to use for pool allocation. Possible values are `BatchService` or `UserSubscription`. Defaults to `BatchService`.
     */
    poolAllocationMode?: pulumi.Input<string>;
    /**
     * Whether public network access is allowed for this server. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the resource group in which to create the Batch account. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the storage account to use for the Batch account. If not specified, Azure Batch will manage the storage.
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
