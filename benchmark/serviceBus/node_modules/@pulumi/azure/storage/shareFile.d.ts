import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a File within an Azure Storage File Share.
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
 * const exampleShare = new azure.storage.Share("exampleShare", {
 *     storageAccountName: exampleAccount.name,
 *     quota: 50,
 * });
 * const exampleShareFile = new azure.storage.ShareFile("exampleShareFile", {
 *     storageShareId: exampleShare.id,
 *     source: "some-local-file.zip",
 * });
 * ```
 *
 * ## Import
 *
 * Directories within an Azure Storage File Share can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:storage/shareFile:ShareFile example https://account1.file.core.windows.net/share1/file1
 * ```
 */
export declare class ShareFile extends pulumi.CustomResource {
    /**
     * Get an existing ShareFile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ShareFileState, opts?: pulumi.CustomResourceOptions): ShareFile;
    /**
     * Returns true if the given object is an instance of ShareFile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ShareFile;
    /**
     * Sets the file’s Content-Disposition header.
     */
    readonly contentDisposition: pulumi.Output<string | undefined>;
    /**
     * Specifies which content encodings have been applied to the file.
     */
    readonly contentEncoding: pulumi.Output<string | undefined>;
    /**
     * The length in bytes of the file content
     */
    readonly contentLength: pulumi.Output<number>;
    /**
     * The MD5 sum of the file contents. Changing this forces a new resource to be created.
     */
    readonly contentMd5: pulumi.Output<string | undefined>;
    /**
     * The content type of the share file. Defaults to `application/octet-stream`.
     */
    readonly contentType: pulumi.Output<string | undefined>;
    /**
     * A mapping of metadata to assign to this file.
     */
    readonly metadata: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The name (or path) of the File that should be created within this File Share. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The storage share directory that you would like the file placed into. Changing this forces a new resource to be created.
     */
    readonly path: pulumi.Output<string | undefined>;
    /**
     * An absolute path to a file on the local system.
     */
    readonly source: pulumi.Output<string | undefined>;
    /**
     * The Storage Share ID in which this file will be placed into. Changing this forces a new resource to be created.
     */
    readonly storageShareId: pulumi.Output<string>;
    /**
     * Create a ShareFile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ShareFileArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ShareFile resources.
 */
export interface ShareFileState {
    /**
     * Sets the file’s Content-Disposition header.
     */
    contentDisposition?: pulumi.Input<string>;
    /**
     * Specifies which content encodings have been applied to the file.
     */
    contentEncoding?: pulumi.Input<string>;
    /**
     * The length in bytes of the file content
     */
    contentLength?: pulumi.Input<number>;
    /**
     * The MD5 sum of the file contents. Changing this forces a new resource to be created.
     */
    contentMd5?: pulumi.Input<string>;
    /**
     * The content type of the share file. Defaults to `application/octet-stream`.
     */
    contentType?: pulumi.Input<string>;
    /**
     * A mapping of metadata to assign to this file.
     */
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name (or path) of the File that should be created within this File Share. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The storage share directory that you would like the file placed into. Changing this forces a new resource to be created.
     */
    path?: pulumi.Input<string>;
    /**
     * An absolute path to a file on the local system.
     */
    source?: pulumi.Input<string>;
    /**
     * The Storage Share ID in which this file will be placed into. Changing this forces a new resource to be created.
     */
    storageShareId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ShareFile resource.
 */
export interface ShareFileArgs {
    /**
     * Sets the file’s Content-Disposition header.
     */
    contentDisposition?: pulumi.Input<string>;
    /**
     * Specifies which content encodings have been applied to the file.
     */
    contentEncoding?: pulumi.Input<string>;
    /**
     * The MD5 sum of the file contents. Changing this forces a new resource to be created.
     */
    contentMd5?: pulumi.Input<string>;
    /**
     * The content type of the share file. Defaults to `application/octet-stream`.
     */
    contentType?: pulumi.Input<string>;
    /**
     * A mapping of metadata to assign to this file.
     */
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name (or path) of the File that should be created within this File Share. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The storage share directory that you would like the file placed into. Changing this forces a new resource to be created.
     */
    path?: pulumi.Input<string>;
    /**
     * An absolute path to a file on the local system.
     */
    source?: pulumi.Input<string>;
    /**
     * The Storage Share ID in which this file will be placed into. Changing this forces a new resource to be created.
     */
    storageShareId: pulumi.Input<string>;
}
