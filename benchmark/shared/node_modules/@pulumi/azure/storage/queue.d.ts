import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Queue within an Azure Storage Account.
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
 * const exampleQueue = new azure.storage.Queue("exampleQueue", {storageAccountName: exampleAccount.name});
 * ```
 *
 * ## Import
 *
 * Storage Queue's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:storage/queue:Queue queue1 https://example.queue.core.windows.net/queue1
 * ```
 */
export declare class Queue extends pulumi.CustomResource {
    /**
     * Get an existing Queue resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QueueState, opts?: pulumi.CustomResourceOptions): Queue;
    /**
     * Returns true if the given object is an instance of Queue.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Queue;
    /**
     * A mapping of MetaData which should be assigned to this Storage Queue.
     */
    readonly metadata: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The name of the Queue which should be created within the Storage Account. Must be unique within the storage account the queue is located.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the Storage Account in which the Storage Queue should exist. Changing this forces a new resource to be created.
     */
    readonly storageAccountName: pulumi.Output<string>;
    /**
     * Create a Queue resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QueueArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Queue resources.
 */
export interface QueueState {
    /**
     * A mapping of MetaData which should be assigned to this Storage Queue.
     */
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the Queue which should be created within the Storage Account. Must be unique within the storage account the queue is located.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the Storage Account in which the Storage Queue should exist. Changing this forces a new resource to be created.
     */
    storageAccountName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Queue resource.
 */
export interface QueueArgs {
    /**
     * A mapping of MetaData which should be assigned to this Storage Queue.
     */
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the Queue which should be created within the Storage Account. Must be unique within the storage account the queue is located.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the Storage Account in which the Storage Queue should exist. Changing this forces a new resource to be created.
     */
    storageAccountName: pulumi.Input<string>;
}
