import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Storage Blob Inventory Policy.
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
 *     blobProperties: {
 *         versioningEnabled: true,
 *     },
 * });
 * const exampleContainer = new azure.storage.Container("exampleContainer", {
 *     storageAccountName: exampleAccount.name,
 *     containerAccessType: "private",
 * });
 * const exampleBlobInventoryPolicy = new azure.storage.BlobInventoryPolicy("exampleBlobInventoryPolicy", {
 *     storageAccountId: exampleAccount.id,
 *     rules: [{
 *         name: "rule1",
 *         storageContainerName: exampleContainer.name,
 *         format: "Csv",
 *         schedule: "Daily",
 *         scope: "Container",
 *         schemaFields: [
 *             "Name",
 *             "Last-Modified",
 *         ],
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Storage Blob Inventory Policies can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:storage/blobInventoryPolicy:BlobInventoryPolicy example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Storage/storageAccounts/storageAccount1/inventoryPolicies/inventoryPolicy1
 * ```
 */
export declare class BlobInventoryPolicy extends pulumi.CustomResource {
    /**
     * Get an existing BlobInventoryPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BlobInventoryPolicyState, opts?: pulumi.CustomResourceOptions): BlobInventoryPolicy;
    /**
     * Returns true if the given object is an instance of BlobInventoryPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BlobInventoryPolicy;
    /**
     * One or more `rules` blocks as defined below.
     */
    readonly rules: pulumi.Output<outputs.storage.BlobInventoryPolicyRule[]>;
    /**
     * The ID of the storage account to apply this Blob Inventory Policy to. Changing this forces a new Storage Blob Inventory Policy to be created.
     */
    readonly storageAccountId: pulumi.Output<string>;
    /**
     * The storage container name to store the blob inventory files for this rule.
     *
     * @deprecated The policy level destination storage container is deprecated by the service team since API version 2021-04-01, this is not functional and will be removed in v3.0 of the provider. Use the `rules.*.storage_container_name` instead.
     */
    readonly storageContainerName: pulumi.Output<string | undefined>;
    /**
     * Create a BlobInventoryPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BlobInventoryPolicyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering BlobInventoryPolicy resources.
 */
export interface BlobInventoryPolicyState {
    /**
     * One or more `rules` blocks as defined below.
     */
    rules?: pulumi.Input<pulumi.Input<inputs.storage.BlobInventoryPolicyRule>[]>;
    /**
     * The ID of the storage account to apply this Blob Inventory Policy to. Changing this forces a new Storage Blob Inventory Policy to be created.
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * The storage container name to store the blob inventory files for this rule.
     *
     * @deprecated The policy level destination storage container is deprecated by the service team since API version 2021-04-01, this is not functional and will be removed in v3.0 of the provider. Use the `rules.*.storage_container_name` instead.
     */
    storageContainerName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a BlobInventoryPolicy resource.
 */
export interface BlobInventoryPolicyArgs {
    /**
     * One or more `rules` blocks as defined below.
     */
    rules: pulumi.Input<pulumi.Input<inputs.storage.BlobInventoryPolicyRule>[]>;
    /**
     * The ID of the storage account to apply this Blob Inventory Policy to. Changing this forces a new Storage Blob Inventory Policy to be created.
     */
    storageAccountId: pulumi.Input<string>;
    /**
     * The storage container name to store the blob inventory files for this rule.
     *
     * @deprecated The policy level destination storage container is deprecated by the service team since API version 2021-04-01, this is not functional and will be removed in v3.0 of the provider. Use the `rules.*.storage_container_name` instead.
     */
    storageContainerName?: pulumi.Input<string>;
}
