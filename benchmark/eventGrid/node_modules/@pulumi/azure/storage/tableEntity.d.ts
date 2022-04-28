import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Entity within a Table in an Azure Storage Account.
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
 * const exampleTable = new azure.storage.Table("exampleTable", {storageAccountName: exampleAccount.name});
 * const exampleTableEntity = new azure.storage.TableEntity("exampleTableEntity", {
 *     storageAccountName: exampleAccount.name,
 *     tableName: exampleTable.name,
 *     partitionKey: "examplepartition",
 *     rowKey: "examplerow",
 *     entity: {
 *         example: "example",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Entities within a Table in an Azure Storage Account can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:storage/tableEntity:TableEntity entity1 https://example.table.core.windows.net/table1(PartitionKey='samplepartition',RowKey='samplerow')
 * ```
 */
export declare class TableEntity extends pulumi.CustomResource {
    /**
     * Get an existing TableEntity resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TableEntityState, opts?: pulumi.CustomResourceOptions): TableEntity;
    /**
     * Returns true if the given object is an instance of TableEntity.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TableEntity;
    /**
     * A map of key/value pairs that describe the entity to be inserted/merged in to the storage table.
     */
    readonly entity: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * The key for the partition where the entity will be inserted/merged. Changing this forces a new resource.
     */
    readonly partitionKey: pulumi.Output<string>;
    /**
     * The key for the row where the entity will be inserted/merged. Changing this forces a new resource.
     */
    readonly rowKey: pulumi.Output<string>;
    /**
     * Specifies the storage account in which to create the storage table entity.
     * Changing this forces a new resource to be created.
     */
    readonly storageAccountName: pulumi.Output<string>;
    /**
     * The name of the storage table in which to create the storage table entity.
     * Changing this forces a new resource to be created.
     */
    readonly tableName: pulumi.Output<string>;
    /**
     * Create a TableEntity resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TableEntityArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering TableEntity resources.
 */
export interface TableEntityState {
    /**
     * A map of key/value pairs that describe the entity to be inserted/merged in to the storage table.
     */
    entity?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The key for the partition where the entity will be inserted/merged. Changing this forces a new resource.
     */
    partitionKey?: pulumi.Input<string>;
    /**
     * The key for the row where the entity will be inserted/merged. Changing this forces a new resource.
     */
    rowKey?: pulumi.Input<string>;
    /**
     * Specifies the storage account in which to create the storage table entity.
     * Changing this forces a new resource to be created.
     */
    storageAccountName?: pulumi.Input<string>;
    /**
     * The name of the storage table in which to create the storage table entity.
     * Changing this forces a new resource to be created.
     */
    tableName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a TableEntity resource.
 */
export interface TableEntityArgs {
    /**
     * A map of key/value pairs that describe the entity to be inserted/merged in to the storage table.
     */
    entity: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The key for the partition where the entity will be inserted/merged. Changing this forces a new resource.
     */
    partitionKey: pulumi.Input<string>;
    /**
     * The key for the row where the entity will be inserted/merged. Changing this forces a new resource.
     */
    rowKey: pulumi.Input<string>;
    /**
     * Specifies the storage account in which to create the storage table entity.
     * Changing this forces a new resource to be created.
     */
    storageAccountName: pulumi.Input<string>;
    /**
     * The name of the storage table in which to create the storage table entity.
     * Changing this forces a new resource to be created.
     */
    tableName: pulumi.Input<string>;
}
