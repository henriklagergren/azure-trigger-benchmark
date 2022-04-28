import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Synapse Private Link Hub.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.synapse.PrivateLinkHub("example", {
 *     location: "West Europe",
 *     resourceGroupName: "example-rg",
 * });
 * ```
 *
 * ## Import
 *
 * Synapse Private Link Hub can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:synapse/privateLinkHub:PrivateLinkHub example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Synapse/privateLinkHubs/privateLinkHub1
 * ```
 */
export declare class PrivateLinkHub extends pulumi.CustomResource {
    /**
     * Get an existing PrivateLinkHub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PrivateLinkHubState, opts?: pulumi.CustomResourceOptions): PrivateLinkHub;
    /**
     * Returns true if the given object is an instance of PrivateLinkHub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PrivateLinkHub;
    /**
     * Specifies the Azure location where the Synapse Private Link Hub exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Synapse Private Link Hub. Changing this forces a new Synapse Private Link Hub to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Synapse Private Link Hub. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Synapse Private Link Hub.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a PrivateLinkHub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateLinkHubArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering PrivateLinkHub resources.
 */
export interface PrivateLinkHubState {
    /**
     * Specifies the Azure location where the Synapse Private Link Hub exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Synapse Private Link Hub. Changing this forces a new Synapse Private Link Hub to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Synapse Private Link Hub. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Synapse Private Link Hub.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a PrivateLinkHub resource.
 */
export interface PrivateLinkHubArgs {
    /**
     * Specifies the Azure location where the Synapse Private Link Hub exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Synapse Private Link Hub. Changing this forces a new Synapse Private Link Hub to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Synapse Private Link Hub. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Synapse Private Link Hub.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
