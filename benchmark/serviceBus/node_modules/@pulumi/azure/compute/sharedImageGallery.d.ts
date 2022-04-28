import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Shared Image Gallery.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleSharedImageGallery = new azure.compute.SharedImageGallery("exampleSharedImageGallery", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     description: "Shared images and things.",
 *     tags: {
 *         Hello: "There",
 *         World: "Example",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Shared Image Galleries can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:compute/sharedImageGallery:SharedImageGallery gallery1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Compute/galleries/gallery1
 * ```
 */
export declare class SharedImageGallery extends pulumi.CustomResource {
    /**
     * Get an existing SharedImageGallery resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SharedImageGalleryState, opts?: pulumi.CustomResourceOptions): SharedImageGallery;
    /**
     * Returns true if the given object is an instance of SharedImageGallery.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SharedImageGallery;
    /**
     * A description for this Shared Image Gallery.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Shared Image Gallery. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Shared Image Gallery. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the Shared Image Gallery.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The Unique Name for this Shared Image Gallery.
     */
    readonly uniqueName: pulumi.Output<string>;
    /**
     * Create a SharedImageGallery resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SharedImageGalleryArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SharedImageGallery resources.
 */
export interface SharedImageGalleryState {
    /**
     * A description for this Shared Image Gallery.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Shared Image Gallery. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Shared Image Gallery. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the Shared Image Gallery.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The Unique Name for this Shared Image Gallery.
     */
    uniqueName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SharedImageGallery resource.
 */
export interface SharedImageGalleryArgs {
    /**
     * A description for this Shared Image Gallery.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Shared Image Gallery. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Shared Image Gallery. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the Shared Image Gallery.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
