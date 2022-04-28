import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Blob within a Storage Container.
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
 * const exampleContainer = new azure.storage.Container("exampleContainer", {
 *     storageAccountName: exampleAccount.name,
 *     containerAccessType: "private",
 * });
 * const exampleBlob = new azure.storage.Blob("exampleBlob", {
 *     storageAccountName: exampleAccount.name,
 *     storageContainerName: exampleContainer.name,
 *     type: "Block",
 *     source: new pulumi.asset.FileAsset("some-local-file.zip"),
 * });
 * ```
 *
 * ## Import
 *
 * Storage Blob's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:storage/blob:Blob blob1 https://example.blob.core.windows.net/container/blob.vhd
 * ```
 */
export declare class Blob extends pulumi.CustomResource {
    /**
     * Get an existing Blob resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BlobState, opts?: pulumi.CustomResourceOptions): Blob;
    /**
     * Returns true if the given object is an instance of Blob.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Blob;
    /**
     * The access tier of the storage blob. Possible values are `Archive`, `Cool` and `Hot`.
     */
    readonly accessTier: pulumi.Output<string>;
    /**
     * Controls the [cache control header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) content of the response when blob is requested .
     */
    readonly cacheControl: pulumi.Output<string | undefined>;
    /**
     * The MD5 sum of the blob contents. Cannot be defined if `sourceUri` is defined, or if blob type is Append or Page. Changing this forces a new resource to be created.
     */
    readonly contentMd5: pulumi.Output<string | undefined>;
    /**
     * The content type of the storage blob. Cannot be defined if `sourceUri` is defined. Defaults to `application/octet-stream`.
     */
    readonly contentType: pulumi.Output<string | undefined>;
    /**
     * A map of custom blob metadata.
     */
    readonly metadata: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * The name of the storage blob. Must be unique within the storage container the blob is located.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The number of workers per CPU core to run for concurrent uploads. Defaults to `8`.
     */
    readonly parallelism: pulumi.Output<number | undefined>;
    /**
     * Used only for `page` blobs to specify the size in bytes of the blob to be created. Must be a multiple of 512. Defaults to 0.
     */
    readonly size: pulumi.Output<number | undefined>;
    /**
     * An absolute path to a file on the local system. This field cannot be specified for Append blobs and cannot be specified if `sourceContent` or `sourceUri` is specified.
     */
    readonly source: pulumi.Output<pulumi.asset.Asset | pulumi.asset.Archive | undefined>;
    /**
     * The content for this blob which should be defined inline. This field can only be specified for Block blobs and cannot be specified if `source` or `sourceUri` is specified.
     */
    readonly sourceContent: pulumi.Output<string | undefined>;
    /**
     * The URI of an existing blob, or a file in the Azure File service, to use as the source contents
     * for the blob to be created. Changing this forces a new resource to be created. This field cannot be specified for Append blobs and cannot be specified if `source` or `sourceContent` is specified.
     */
    readonly sourceUri: pulumi.Output<string | undefined>;
    /**
     * Specifies the storage account in which to create the storage container.
     * Changing this forces a new resource to be created.
     */
    readonly storageAccountName: pulumi.Output<string>;
    /**
     * The name of the storage container in which this blob should be created.
     */
    readonly storageContainerName: pulumi.Output<string>;
    /**
     * The type of the storage blob to be created. Possible values are `Append`, `Block` or `Page`. Changing this forces a new resource to be created.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The URL of the blob
     */
    readonly url: pulumi.Output<string>;
    /**
     * Create a Blob resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BlobArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Blob resources.
 */
export interface BlobState {
    /**
     * The access tier of the storage blob. Possible values are `Archive`, `Cool` and `Hot`.
     */
    accessTier?: pulumi.Input<string>;
    /**
     * Controls the [cache control header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) content of the response when blob is requested .
     */
    cacheControl?: pulumi.Input<string>;
    /**
     * The MD5 sum of the blob contents. Cannot be defined if `sourceUri` is defined, or if blob type is Append or Page. Changing this forces a new resource to be created.
     */
    contentMd5?: pulumi.Input<string>;
    /**
     * The content type of the storage blob. Cannot be defined if `sourceUri` is defined. Defaults to `application/octet-stream`.
     */
    contentType?: pulumi.Input<string>;
    /**
     * A map of custom blob metadata.
     */
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the storage blob. Must be unique within the storage container the blob is located.
     */
    name?: pulumi.Input<string>;
    /**
     * The number of workers per CPU core to run for concurrent uploads. Defaults to `8`.
     */
    parallelism?: pulumi.Input<number>;
    /**
     * Used only for `page` blobs to specify the size in bytes of the blob to be created. Must be a multiple of 512. Defaults to 0.
     */
    size?: pulumi.Input<number>;
    /**
     * An absolute path to a file on the local system. This field cannot be specified for Append blobs and cannot be specified if `sourceContent` or `sourceUri` is specified.
     */
    source?: pulumi.Input<pulumi.asset.Asset | pulumi.asset.Archive>;
    /**
     * The content for this blob which should be defined inline. This field can only be specified for Block blobs and cannot be specified if `source` or `sourceUri` is specified.
     */
    sourceContent?: pulumi.Input<string>;
    /**
     * The URI of an existing blob, or a file in the Azure File service, to use as the source contents
     * for the blob to be created. Changing this forces a new resource to be created. This field cannot be specified for Append blobs and cannot be specified if `source` or `sourceContent` is specified.
     */
    sourceUri?: pulumi.Input<string>;
    /**
     * Specifies the storage account in which to create the storage container.
     * Changing this forces a new resource to be created.
     */
    storageAccountName?: pulumi.Input<string>;
    /**
     * The name of the storage container in which this blob should be created.
     */
    storageContainerName?: pulumi.Input<string>;
    /**
     * The type of the storage blob to be created. Possible values are `Append`, `Block` or `Page`. Changing this forces a new resource to be created.
     */
    type?: pulumi.Input<string>;
    /**
     * The URL of the blob
     */
    url?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Blob resource.
 */
export interface BlobArgs {
    /**
     * The access tier of the storage blob. Possible values are `Archive`, `Cool` and `Hot`.
     */
    accessTier?: pulumi.Input<string>;
    /**
     * Controls the [cache control header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) content of the response when blob is requested .
     */
    cacheControl?: pulumi.Input<string>;
    /**
     * The MD5 sum of the blob contents. Cannot be defined if `sourceUri` is defined, or if blob type is Append or Page. Changing this forces a new resource to be created.
     */
    contentMd5?: pulumi.Input<string>;
    /**
     * The content type of the storage blob. Cannot be defined if `sourceUri` is defined. Defaults to `application/octet-stream`.
     */
    contentType?: pulumi.Input<string>;
    /**
     * A map of custom blob metadata.
     */
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the storage blob. Must be unique within the storage container the blob is located.
     */
    name?: pulumi.Input<string>;
    /**
     * The number of workers per CPU core to run for concurrent uploads. Defaults to `8`.
     */
    parallelism?: pulumi.Input<number>;
    /**
     * Used only for `page` blobs to specify the size in bytes of the blob to be created. Must be a multiple of 512. Defaults to 0.
     */
    size?: pulumi.Input<number>;
    /**
     * An absolute path to a file on the local system. This field cannot be specified for Append blobs and cannot be specified if `sourceContent` or `sourceUri` is specified.
     */
    source?: pulumi.Input<pulumi.asset.Asset | pulumi.asset.Archive>;
    /**
     * The content for this blob which should be defined inline. This field can only be specified for Block blobs and cannot be specified if `source` or `sourceUri` is specified.
     */
    sourceContent?: pulumi.Input<string>;
    /**
     * The URI of an existing blob, or a file in the Azure File service, to use as the source contents
     * for the blob to be created. Changing this forces a new resource to be created. This field cannot be specified for Append blobs and cannot be specified if `source` or `sourceContent` is specified.
     */
    sourceUri?: pulumi.Input<string>;
    /**
     * Specifies the storage account in which to create the storage container.
     * Changing this forces a new resource to be created.
     */
    storageAccountName: pulumi.Input<string>;
    /**
     * The name of the storage container in which this blob should be created.
     */
    storageContainerName: pulumi.Input<string>;
    /**
     * The type of the storage blob to be created. Possible values are `Append`, `Block` or `Page`. Changing this forces a new resource to be created.
     */
    type: pulumi.Input<string>;
}
