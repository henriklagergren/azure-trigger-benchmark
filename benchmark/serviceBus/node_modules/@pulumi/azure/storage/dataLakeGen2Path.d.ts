import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Data Lake Gen2 Path in a File System within an Azure Storage Account.
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
 * const exampleDataLakeGen2Filesystem = new azure.storage.DataLakeGen2Filesystem("exampleDataLakeGen2Filesystem", {storageAccountId: exampleAccount.id});
 * const exampleDataLakeGen2Path = new azure.storage.DataLakeGen2Path("exampleDataLakeGen2Path", {
 *     path: "example",
 *     filesystemName: exampleDataLakeGen2Filesystem.name,
 *     storageAccountId: exampleAccount.id,
 *     resource: "directory",
 * });
 * ```
 *
 * ## Import
 *
 * Data Lake Gen2 Paths can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:storage/dataLakeGen2Path:DataLakeGen2Path example https://account1.dfs.core.windows.net/fileSystem1/path
 * ```
 */
export declare class DataLakeGen2Path extends pulumi.CustomResource {
    /**
     * Get an existing DataLakeGen2Path resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataLakeGen2PathState, opts?: pulumi.CustomResourceOptions): DataLakeGen2Path;
    /**
     * Returns true if the given object is an instance of DataLakeGen2Path.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DataLakeGen2Path;
    /**
     * One or more `ace` blocks as defined below to specify the entries for the ACL for the path.
     */
    readonly aces: pulumi.Output<outputs.storage.DataLakeGen2PathAce[]>;
    /**
     * The name of the Data Lake Gen2 File System which should be created within the Storage Account. Must be unique within the storage account the queue is located. Changing this forces a new resource to be created.
     */
    readonly filesystemName: pulumi.Output<string>;
    /**
     * Specifies the Object ID of the Azure Active Directory Group to make the owning group.
     */
    readonly group: pulumi.Output<string>;
    /**
     * Specifies the Object ID of the Azure Active Directory User to make the owning user.
     */
    readonly owner: pulumi.Output<string>;
    /**
     * The path which should be created within the Data Lake Gen2 File System in the Storage Account. Changing this forces a new resource to be created.
     */
    readonly path: pulumi.Output<string>;
    /**
     * Specifies the type for path to create. Currently only `directory` is supported.
     */
    readonly resource: pulumi.Output<string>;
    /**
     * Specifies the ID of the Storage Account in which the Data Lake Gen2 File System should exist. Changing this forces a new resource to be created.
     */
    readonly storageAccountId: pulumi.Output<string>;
    /**
     * Create a DataLakeGen2Path resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataLakeGen2PathArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DataLakeGen2Path resources.
 */
export interface DataLakeGen2PathState {
    /**
     * One or more `ace` blocks as defined below to specify the entries for the ACL for the path.
     */
    aces?: pulumi.Input<pulumi.Input<inputs.storage.DataLakeGen2PathAce>[]>;
    /**
     * The name of the Data Lake Gen2 File System which should be created within the Storage Account. Must be unique within the storage account the queue is located. Changing this forces a new resource to be created.
     */
    filesystemName?: pulumi.Input<string>;
    /**
     * Specifies the Object ID of the Azure Active Directory Group to make the owning group.
     */
    group?: pulumi.Input<string>;
    /**
     * Specifies the Object ID of the Azure Active Directory User to make the owning user.
     */
    owner?: pulumi.Input<string>;
    /**
     * The path which should be created within the Data Lake Gen2 File System in the Storage Account. Changing this forces a new resource to be created.
     */
    path?: pulumi.Input<string>;
    /**
     * Specifies the type for path to create. Currently only `directory` is supported.
     */
    resource?: pulumi.Input<string>;
    /**
     * Specifies the ID of the Storage Account in which the Data Lake Gen2 File System should exist. Changing this forces a new resource to be created.
     */
    storageAccountId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DataLakeGen2Path resource.
 */
export interface DataLakeGen2PathArgs {
    /**
     * One or more `ace` blocks as defined below to specify the entries for the ACL for the path.
     */
    aces?: pulumi.Input<pulumi.Input<inputs.storage.DataLakeGen2PathAce>[]>;
    /**
     * The name of the Data Lake Gen2 File System which should be created within the Storage Account. Must be unique within the storage account the queue is located. Changing this forces a new resource to be created.
     */
    filesystemName: pulumi.Input<string>;
    /**
     * Specifies the Object ID of the Azure Active Directory Group to make the owning group.
     */
    group?: pulumi.Input<string>;
    /**
     * Specifies the Object ID of the Azure Active Directory User to make the owning user.
     */
    owner?: pulumi.Input<string>;
    /**
     * The path which should be created within the Data Lake Gen2 File System in the Storage Account. Changing this forces a new resource to be created.
     */
    path: pulumi.Input<string>;
    /**
     * Specifies the type for path to create. Currently only `directory` is supported.
     */
    resource: pulumi.Input<string>;
    /**
     * Specifies the ID of the Storage Account in which the Data Lake Gen2 File System should exist. Changing this forces a new resource to be created.
     */
    storageAccountId: pulumi.Input<string>;
}
