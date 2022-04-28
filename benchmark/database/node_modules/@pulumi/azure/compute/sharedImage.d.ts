import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Shared Image within a Shared Image Gallery.
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
 * const exampleSharedImage = new azure.compute.SharedImage("exampleSharedImage", {
 *     galleryName: exampleSharedImageGallery.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     osType: "Linux",
 *     identifier: {
 *         publisher: "PublisherName",
 *         offer: "OfferName",
 *         sku: "ExampleSku",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Shared Images can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:compute/sharedImage:SharedImage image1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Compute/galleries/gallery1/images/image1
 * ```
 */
export declare class SharedImage extends pulumi.CustomResource {
    /**
     * Get an existing SharedImage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SharedImageState, opts?: pulumi.CustomResourceOptions): SharedImage;
    /**
     * Returns true if the given object is an instance of SharedImage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SharedImage;
    /**
     * A description of this Shared Image.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The End User Licence Agreement for the Shared Image.
     */
    readonly eula: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Shared Image Gallery in which this Shared Image should exist. Changing this forces a new resource to be created.
     */
    readonly galleryName: pulumi.Output<string>;
    /**
     * The generation of HyperV that the Virtual Machine used to create the Shared Image is based on. Possible values are `V1` and `V2`. Defaults to `V1`. Changing this forces a new resource to be created.
     */
    readonly hyperVGeneration: pulumi.Output<string | undefined>;
    /**
     * An `identifier` block as defined below.
     */
    readonly identifier: pulumi.Output<outputs.compute.SharedImageIdentifier>;
    /**
     * Specifies the supported Azure location where the Shared Image Gallery exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Shared Image. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The type of Operating System present in this Shared Image. Possible values are `Linux` and `Windows`. Changing this forces a new resource to be created.
     */
    readonly osType: pulumi.Output<string>;
    /**
     * The URI containing the Privacy Statement associated with this Shared Image.
     */
    readonly privacyStatementUri: pulumi.Output<string | undefined>;
    /**
     * A `purchasePlan` block as defined below.
     */
    readonly purchasePlan: pulumi.Output<outputs.compute.SharedImagePurchasePlan | undefined>;
    /**
     * The URI containing the Release Notes associated with this Shared Image.
     */
    readonly releaseNoteUri: pulumi.Output<string | undefined>;
    /**
     * The name of the resource group in which the Shared Image Gallery exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Specifies that the Operating System used inside this Image has not been Generalized (for example, `sysprep` on Windows has not been run). Defaults to `false`. Changing this forces a new resource to be created.
     */
    readonly specialized: pulumi.Output<boolean | undefined>;
    /**
     * A mapping of tags to assign to the Shared Image.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies if Trusted Launch has to be enabled for the Virtual Machine created from the Shared Image. Defaults to `false`. Changing this forces a new resource to be created.
     */
    readonly trustedLaunchEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Create a SharedImage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SharedImageArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SharedImage resources.
 */
export interface SharedImageState {
    /**
     * A description of this Shared Image.
     */
    description?: pulumi.Input<string>;
    /**
     * The End User Licence Agreement for the Shared Image.
     */
    eula?: pulumi.Input<string>;
    /**
     * Specifies the name of the Shared Image Gallery in which this Shared Image should exist. Changing this forces a new resource to be created.
     */
    galleryName?: pulumi.Input<string>;
    /**
     * The generation of HyperV that the Virtual Machine used to create the Shared Image is based on. Possible values are `V1` and `V2`. Defaults to `V1`. Changing this forces a new resource to be created.
     */
    hyperVGeneration?: pulumi.Input<string>;
    /**
     * An `identifier` block as defined below.
     */
    identifier?: pulumi.Input<inputs.compute.SharedImageIdentifier>;
    /**
     * Specifies the supported Azure location where the Shared Image Gallery exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Shared Image. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The type of Operating System present in this Shared Image. Possible values are `Linux` and `Windows`. Changing this forces a new resource to be created.
     */
    osType?: pulumi.Input<string>;
    /**
     * The URI containing the Privacy Statement associated with this Shared Image.
     */
    privacyStatementUri?: pulumi.Input<string>;
    /**
     * A `purchasePlan` block as defined below.
     */
    purchasePlan?: pulumi.Input<inputs.compute.SharedImagePurchasePlan>;
    /**
     * The URI containing the Release Notes associated with this Shared Image.
     */
    releaseNoteUri?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Shared Image Gallery exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies that the Operating System used inside this Image has not been Generalized (for example, `sysprep` on Windows has not been run). Defaults to `false`. Changing this forces a new resource to be created.
     */
    specialized?: pulumi.Input<boolean>;
    /**
     * A mapping of tags to assign to the Shared Image.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies if Trusted Launch has to be enabled for the Virtual Machine created from the Shared Image. Defaults to `false`. Changing this forces a new resource to be created.
     */
    trustedLaunchEnabled?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a SharedImage resource.
 */
export interface SharedImageArgs {
    /**
     * A description of this Shared Image.
     */
    description?: pulumi.Input<string>;
    /**
     * The End User Licence Agreement for the Shared Image.
     */
    eula?: pulumi.Input<string>;
    /**
     * Specifies the name of the Shared Image Gallery in which this Shared Image should exist. Changing this forces a new resource to be created.
     */
    galleryName: pulumi.Input<string>;
    /**
     * The generation of HyperV that the Virtual Machine used to create the Shared Image is based on. Possible values are `V1` and `V2`. Defaults to `V1`. Changing this forces a new resource to be created.
     */
    hyperVGeneration?: pulumi.Input<string>;
    /**
     * An `identifier` block as defined below.
     */
    identifier: pulumi.Input<inputs.compute.SharedImageIdentifier>;
    /**
     * Specifies the supported Azure location where the Shared Image Gallery exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Shared Image. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The type of Operating System present in this Shared Image. Possible values are `Linux` and `Windows`. Changing this forces a new resource to be created.
     */
    osType: pulumi.Input<string>;
    /**
     * The URI containing the Privacy Statement associated with this Shared Image.
     */
    privacyStatementUri?: pulumi.Input<string>;
    /**
     * A `purchasePlan` block as defined below.
     */
    purchasePlan?: pulumi.Input<inputs.compute.SharedImagePurchasePlan>;
    /**
     * The URI containing the Release Notes associated with this Shared Image.
     */
    releaseNoteUri?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Shared Image Gallery exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies that the Operating System used inside this Image has not been Generalized (for example, `sysprep` on Windows has not been run). Defaults to `false`. Changing this forces a new resource to be created.
     */
    specialized?: pulumi.Input<boolean>;
    /**
     * A mapping of tags to assign to the Shared Image.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies if Trusted Launch has to be enabled for the Virtual Machine created from the Shared Image. Defaults to `false`. Changing this forces a new resource to be created.
     */
    trustedLaunchEnabled?: pulumi.Input<boolean>;
}
