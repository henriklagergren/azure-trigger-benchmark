import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Azure Data Lake Store File.
 *
 * > **Note:** This resoruce manages an `Azure Data Lake Storage Gen1`, previously known as `Azure Data Lake Store`.
 *
 * > **Note:** If you want to change the data in the remote file without changing the `localFilePath`, then
 * taint the resource so the `azure.datalake.StoreFile` gets recreated with the new data.
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
 * });
 * const exampleStoreFile = new azure.datalake.StoreFile("exampleStoreFile", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     localFilePath: "/path/to/local/file",
 *     remoteFilePath: "/path/created/for/remote/file",
 * });
 * ```
 *
 * ## Import
 *
 * Data Lake Store File's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:datalake/storeFile:StoreFile example example.azuredatalakestore.net/test/example.txt
 * ```
 */
export declare class StoreFile extends pulumi.CustomResource {
    /**
     * Get an existing StoreFile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StoreFileState, opts?: pulumi.CustomResourceOptions): StoreFile;
    /**
     * Returns true if the given object is an instance of StoreFile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StoreFile;
    /**
     * Specifies the name of the Data Lake Store for which the File should created.
     */
    readonly accountName: pulumi.Output<string>;
    /**
     * The path to the local file to be added to the Data Lake Store.
     */
    readonly localFilePath: pulumi.Output<string>;
    /**
     * The path created for the file on the Data Lake Store.
     */
    readonly remoteFilePath: pulumi.Output<string>;
    /**
     * Create a StoreFile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StoreFileArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering StoreFile resources.
 */
export interface StoreFileState {
    /**
     * Specifies the name of the Data Lake Store for which the File should created.
     */
    accountName?: pulumi.Input<string>;
    /**
     * The path to the local file to be added to the Data Lake Store.
     */
    localFilePath?: pulumi.Input<string>;
    /**
     * The path created for the file on the Data Lake Store.
     */
    remoteFilePath?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a StoreFile resource.
 */
export interface StoreFileArgs {
    /**
     * Specifies the name of the Data Lake Store for which the File should created.
     */
    accountName: pulumi.Input<string>;
    /**
     * The path to the local file to be added to the Data Lake Store.
     */
    localFilePath: pulumi.Input<string>;
    /**
     * The path created for the file on the Data Lake Store.
     */
    remoteFilePath: pulumi.Input<string>;
}
