import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Container within an Azure Storage Account.
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
 *     tags: {
 *         environment: "staging",
 *     },
 * });
 * const exampleContainer = new azure.storage.Container("exampleContainer", {
 *     storageAccountName: exampleAccount.name,
 *     containerAccessType: "private",
 * });
 * ```
 *
 * ## Import
 *
 * Storage Containers can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:storage/container:Container container1 https://example.blob.core.windows.net/container
 * ```
 */
export declare class Container extends pulumi.CustomResource {
    /**
     * Get an existing Container resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContainerState, opts?: pulumi.CustomResourceOptions): Container;
    /**
     * Returns true if the given object is an instance of Container.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Container;
    /**
     * The Access Level configured for this Container. Possible values are `blob`, `container` or `private`. Defaults to `private`.
     */
    readonly containerAccessType: pulumi.Output<string | undefined>;
    /**
     * Is there an Immutability Policy configured on this Storage Container?
     */
    readonly hasImmutabilityPolicy: pulumi.Output<boolean>;
    /**
     * Is there a Legal Hold configured on this Storage Container?
     */
    readonly hasLegalHold: pulumi.Output<boolean>;
    /**
     * A mapping of MetaData for this Container. All metadata keys should be lowercase.
     */
    readonly metadata: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * The name of the Container which should be created within the Storage Account.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The Resource Manager ID of this Storage Container.
     */
    readonly resourceManagerId: pulumi.Output<string>;
    /**
     * The name of the Storage Account where the Container should be created.
     */
    readonly storageAccountName: pulumi.Output<string>;
    /**
     * Create a Container resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContainerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Container resources.
 */
export interface ContainerState {
    /**
     * The Access Level configured for this Container. Possible values are `blob`, `container` or `private`. Defaults to `private`.
     */
    containerAccessType?: pulumi.Input<string>;
    /**
     * Is there an Immutability Policy configured on this Storage Container?
     */
    hasImmutabilityPolicy?: pulumi.Input<boolean>;
    /**
     * Is there a Legal Hold configured on this Storage Container?
     */
    hasLegalHold?: pulumi.Input<boolean>;
    /**
     * A mapping of MetaData for this Container. All metadata keys should be lowercase.
     */
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the Container which should be created within the Storage Account.
     */
    name?: pulumi.Input<string>;
    /**
     * The Resource Manager ID of this Storage Container.
     */
    resourceManagerId?: pulumi.Input<string>;
    /**
     * The name of the Storage Account where the Container should be created.
     */
    storageAccountName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Container resource.
 */
export interface ContainerArgs {
    /**
     * The Access Level configured for this Container. Possible values are `blob`, `container` or `private`. Defaults to `private`.
     */
    containerAccessType?: pulumi.Input<string>;
    /**
     * A mapping of MetaData for this Container. All metadata keys should be lowercase.
     */
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the Container which should be created within the Storage Account.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Storage Account where the Container should be created.
     */
    storageAccountName: pulumi.Input<string>;
}
