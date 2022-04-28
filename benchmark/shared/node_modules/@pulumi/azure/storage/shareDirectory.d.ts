import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Directory within an Azure Storage File Share.
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
 * const exampleShareDirectory = new azure.storage.ShareDirectory("exampleShareDirectory", {
 *     shareName: exampleShare.name,
 *     storageAccountName: exampleAccount.name,
 * });
 * ```
 *
 * ## Import
 *
 * Directories within an Azure Storage File Share can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:storage/shareDirectory:ShareDirectory example https://tomdevsa20.file.core.windows.net/share1/directory1
 * ```
 */
export declare class ShareDirectory extends pulumi.CustomResource {
    /**
     * Get an existing ShareDirectory resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ShareDirectoryState, opts?: pulumi.CustomResourceOptions): ShareDirectory;
    /**
     * Returns true if the given object is an instance of ShareDirectory.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ShareDirectory;
    /**
     * A mapping of metadata to assign to this Directory.
     */
    readonly metadata: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The name (or path) of the Directory that should be created within this File Share. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the File Share where this Directory should be created. Changing this forces a new resource to be created.
     */
    readonly shareName: pulumi.Output<string>;
    /**
     * The name of the Storage Account within which the File Share is located. Changing this forces a new resource to be created.
     */
    readonly storageAccountName: pulumi.Output<string>;
    /**
     * Create a ShareDirectory resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ShareDirectoryArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ShareDirectory resources.
 */
export interface ShareDirectoryState {
    /**
     * A mapping of metadata to assign to this Directory.
     */
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name (or path) of the Directory that should be created within this File Share. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the File Share where this Directory should be created. Changing this forces a new resource to be created.
     */
    shareName?: pulumi.Input<string>;
    /**
     * The name of the Storage Account within which the File Share is located. Changing this forces a new resource to be created.
     */
    storageAccountName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ShareDirectory resource.
 */
export interface ShareDirectoryArgs {
    /**
     * A mapping of metadata to assign to this Directory.
     */
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name (or path) of the Directory that should be created within this File Share. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the File Share where this Directory should be created. Changing this forces a new resource to be created.
     */
    shareName: pulumi.Input<string>;
    /**
     * The name of the Storage Account within which the File Share is located. Changing this forces a new resource to be created.
     */
    storageAccountName: pulumi.Input<string>;
}
