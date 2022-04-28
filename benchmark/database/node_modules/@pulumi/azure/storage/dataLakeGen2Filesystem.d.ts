import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Data Lake Gen2 File System within an Azure Storage Account.
 *
 * > **NOTE:** This resource requires some `Storage` specific roles which are not granted by default. Some of the built-ins roles that can be attributed are [`Storage Account Contributor`](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-account-contributor), [`Storage Blob Data Owner`](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-blob-data-owner), [`Storage Blob Data Contributor`](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-blob-data-contributor), [`Storage Blob Data Reader`](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-blob-data-reader).
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
 *     accountKind: "StorageV2",
 *     isHnsEnabled: "true",
 * });
 * const exampleDataLakeGen2Filesystem = new azure.storage.DataLakeGen2Filesystem("exampleDataLakeGen2Filesystem", {
 *     storageAccountId: exampleAccount.id,
 *     properties: {
 *         hello: "aGVsbG8=",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Data Lake Gen2 File System's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:storage/dataLakeGen2Filesystem:DataLakeGen2Filesystem queue1 https://account1.dfs.core.windows.net/fileSystem1
 * ```
 */
export declare class DataLakeGen2Filesystem extends pulumi.CustomResource {
    /**
     * Get an existing DataLakeGen2Filesystem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataLakeGen2FilesystemState, opts?: pulumi.CustomResourceOptions): DataLakeGen2Filesystem;
    /**
     * Returns true if the given object is an instance of DataLakeGen2Filesystem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DataLakeGen2Filesystem;
    /**
     * One or more `ace` blocks as defined below to specify the entries for the ACL for the path.
     */
    readonly aces: pulumi.Output<outputs.storage.DataLakeGen2FilesystemAce[]>;
    /**
     * Specifies the Object ID of the Azure Active Directory Group to make the owning group of the root path (i.e. `/`).
     */
    readonly group: pulumi.Output<string>;
    /**
     * The name of the Data Lake Gen2 File System which should be created within the Storage Account. Must be unique within the storage account the queue is located. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the Object ID of the Azure Active Directory User to make the owning user of the root path (i.e. `/`).
     */
    readonly owner: pulumi.Output<string>;
    /**
     * A mapping of Key to Base64-Encoded Values which should be assigned to this Data Lake Gen2 File System.
     */
    readonly properties: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the ID of the Storage Account in which the Data Lake Gen2 File System should exist. Changing this forces a new resource to be created.
     */
    readonly storageAccountId: pulumi.Output<string>;
    /**
     * Create a DataLakeGen2Filesystem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataLakeGen2FilesystemArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DataLakeGen2Filesystem resources.
 */
export interface DataLakeGen2FilesystemState {
    /**
     * One or more `ace` blocks as defined below to specify the entries for the ACL for the path.
     */
    aces?: pulumi.Input<pulumi.Input<inputs.storage.DataLakeGen2FilesystemAce>[]>;
    /**
     * Specifies the Object ID of the Azure Active Directory Group to make the owning group of the root path (i.e. `/`).
     */
    group?: pulumi.Input<string>;
    /**
     * The name of the Data Lake Gen2 File System which should be created within the Storage Account. Must be unique within the storage account the queue is located. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the Object ID of the Azure Active Directory User to make the owning user of the root path (i.e. `/`).
     */
    owner?: pulumi.Input<string>;
    /**
     * A mapping of Key to Base64-Encoded Values which should be assigned to this Data Lake Gen2 File System.
     */
    properties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the ID of the Storage Account in which the Data Lake Gen2 File System should exist. Changing this forces a new resource to be created.
     */
    storageAccountId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DataLakeGen2Filesystem resource.
 */
export interface DataLakeGen2FilesystemArgs {
    /**
     * One or more `ace` blocks as defined below to specify the entries for the ACL for the path.
     */
    aces?: pulumi.Input<pulumi.Input<inputs.storage.DataLakeGen2FilesystemAce>[]>;
    /**
     * Specifies the Object ID of the Azure Active Directory Group to make the owning group of the root path (i.e. `/`).
     */
    group?: pulumi.Input<string>;
    /**
     * The name of the Data Lake Gen2 File System which should be created within the Storage Account. Must be unique within the storage account the queue is located. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the Object ID of the Azure Active Directory User to make the owning user of the root path (i.e. `/`).
     */
    owner?: pulumi.Input<string>;
    /**
     * A mapping of Key to Base64-Encoded Values which should be assigned to this Data Lake Gen2 File System.
     */
    properties?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the ID of the Storage Account in which the Data Lake Gen2 File System should exist. Changing this forces a new resource to be created.
     */
    storageAccountId: pulumi.Input<string>;
}
