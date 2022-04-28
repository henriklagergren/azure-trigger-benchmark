import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Azure Maps Creator.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.maps.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     skuName: "G2",
 *     tags: {
 *         environment: "Test",
 *     },
 * });
 * const exampleCreator = new azure.maps.Creator("exampleCreator", {
 *     mapsAccountId: exampleAccount.id,
 *     location: exampleResourceGroup.location,
 *     storageUnits: 1,
 *     tags: {
 *         environment: "Test",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * An Azure Maps Creators can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:maps/creator:Creator example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resourceGroup1/providers/Microsoft.Maps/accounts/account1/creators/creator1
 * ```
 */
export declare class Creator extends pulumi.CustomResource {
    /**
     * Get an existing Creator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CreatorState, opts?: pulumi.CustomResourceOptions): Creator;
    /**
     * Returns true if the given object is an instance of Creator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Creator;
    /**
     * The Azure Region where the Azure Maps Creator should exist.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The ID of the Azure Maps Creator. Changing this forces a new resource to be created.
     */
    readonly mapsAccountId: pulumi.Output<string>;
    /**
     * The name of the Azure Maps Creator. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The storage units to be allocated. Integer values from 1 to 100, inclusive.
     */
    readonly storageUnits: pulumi.Output<number>;
    /**
     * A mapping of tags which should be assigned to the Azure Maps Creator.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Creator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CreatorArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Creator resources.
 */
export interface CreatorState {
    /**
     * The Azure Region where the Azure Maps Creator should exist.
     */
    location?: pulumi.Input<string>;
    /**
     * The ID of the Azure Maps Creator. Changing this forces a new resource to be created.
     */
    mapsAccountId?: pulumi.Input<string>;
    /**
     * The name of the Azure Maps Creator. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The storage units to be allocated. Integer values from 1 to 100, inclusive.
     */
    storageUnits?: pulumi.Input<number>;
    /**
     * A mapping of tags which should be assigned to the Azure Maps Creator.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Creator resource.
 */
export interface CreatorArgs {
    /**
     * The Azure Region where the Azure Maps Creator should exist.
     */
    location?: pulumi.Input<string>;
    /**
     * The ID of the Azure Maps Creator. Changing this forces a new resource to be created.
     */
    mapsAccountId: pulumi.Input<string>;
    /**
     * The name of the Azure Maps Creator. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The storage units to be allocated. Integer values from 1 to 100, inclusive.
     */
    storageUnits: pulumi.Input<number>;
    /**
     * A mapping of tags which should be assigned to the Azure Maps Creator.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
