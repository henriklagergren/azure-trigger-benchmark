import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Healthbot Service.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleHealthbot = new azure.bot.Healthbot("exampleHealthbot", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: [{
 *         name: "F0",
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Healthbot Service can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:bot/healthbot:Healthbot example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.HealthBot/healthBots/bot1
 * ```
 */
export declare class Healthbot extends pulumi.CustomResource {
    /**
     * Get an existing Healthbot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HealthbotState, opts?: pulumi.CustomResourceOptions): Healthbot;
    /**
     * Returns true if the given object is an instance of Healthbot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Healthbot;
    /**
     * The management portal url.
     */
    readonly botManagementPortalUrl: pulumi.Output<string>;
    /**
     * Specifies The Azure Region where the resource exists. CHanging this force a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies The name of the Healthbot Service resource. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies The name of the Resource Group in which to create the Healtbot Service. CHaning this
     * forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The name which should be used for the sku of the service. Possible values are "F0" and "S1".
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the service.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Healthbot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HealthbotArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Healthbot resources.
 */
export interface HealthbotState {
    /**
     * The management portal url.
     */
    botManagementPortalUrl?: pulumi.Input<string>;
    /**
     * Specifies The Azure Region where the resource exists. CHanging this force a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies The name of the Healthbot Service resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies The name of the Resource Group in which to create the Healtbot Service. CHaning this
     * forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The name which should be used for the sku of the service. Possible values are "F0" and "S1".
     */
    skuName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the service.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Healthbot resource.
 */
export interface HealthbotArgs {
    /**
     * Specifies The Azure Region where the resource exists. CHanging this force a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies The name of the Healthbot Service resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies The name of the Resource Group in which to create the Healtbot Service. CHaning this
     * forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name which should be used for the sku of the service. Possible values are "F0" and "S1".
     */
    skuName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the service.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
