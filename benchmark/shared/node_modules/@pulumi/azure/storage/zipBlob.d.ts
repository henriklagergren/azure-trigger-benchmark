import * as pulumi from "@pulumi/pulumi";
/**
 * @deprecated ZipBlob resource is deprecated in the 2.0 version of the provider. Use Blob resource instead.
 */
export declare class ZipBlob extends pulumi.CustomResource {
    /**
     * Get an existing ZipBlob resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZipBlobState, opts?: pulumi.CustomResourceOptions): ZipBlob;
    /**
     * Returns true if the given object is an instance of ZipBlob.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ZipBlob;
    readonly accessTier: pulumi.Output<string>;
    readonly cacheControl: pulumi.Output<string | undefined>;
    readonly content: pulumi.Output<pulumi.asset.Archive | undefined>;
    readonly contentMd5: pulumi.Output<string | undefined>;
    readonly contentType: pulumi.Output<string | undefined>;
    readonly metadata: pulumi.Output<{
        [key: string]: string;
    }>;
    readonly name: pulumi.Output<string>;
    readonly parallelism: pulumi.Output<number | undefined>;
    readonly size: pulumi.Output<number | undefined>;
    readonly sourceContent: pulumi.Output<string | undefined>;
    readonly sourceUri: pulumi.Output<string | undefined>;
    readonly storageAccountName: pulumi.Output<string>;
    readonly storageContainerName: pulumi.Output<string>;
    readonly type: pulumi.Output<string>;
    readonly url: pulumi.Output<string>;
    /**
     * Create a ZipBlob resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    /** @deprecated ZipBlob resource is deprecated in the 2.0 version of the provider. Use Blob resource instead. */
    constructor(name: string, args: ZipBlobArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ZipBlob resources.
 */
export interface ZipBlobState {
    accessTier?: pulumi.Input<string>;
    cacheControl?: pulumi.Input<string>;
    content?: pulumi.Input<pulumi.asset.Archive>;
    contentMd5?: pulumi.Input<string>;
    contentType?: pulumi.Input<string>;
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    name?: pulumi.Input<string>;
    parallelism?: pulumi.Input<number>;
    size?: pulumi.Input<number>;
    sourceContent?: pulumi.Input<string>;
    sourceUri?: pulumi.Input<string>;
    storageAccountName?: pulumi.Input<string>;
    storageContainerName?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    url?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ZipBlob resource.
 */
export interface ZipBlobArgs {
    accessTier?: pulumi.Input<string>;
    cacheControl?: pulumi.Input<string>;
    content?: pulumi.Input<pulumi.asset.Archive>;
    contentMd5?: pulumi.Input<string>;
    contentType?: pulumi.Input<string>;
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    name?: pulumi.Input<string>;
    parallelism?: pulumi.Input<number>;
    size?: pulumi.Input<number>;
    sourceContent?: pulumi.Input<string>;
    sourceUri?: pulumi.Input<string>;
    storageAccountName: pulumi.Input<string>;
    storageContainerName: pulumi.Input<string>;
    type: pulumi.Input<string>;
}
