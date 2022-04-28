import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Communication Service.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleService = new azure.communication.Service("exampleService", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     dataLocation: "United States",
 * });
 * ```
 *
 * ## Import
 *
 * Communication Services can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:communication/service:Service example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Communication/CommunicationServices/communicationService1
 * ```
 */
export declare class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceState, opts?: pulumi.CustomResourceOptions): Service;
    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Service;
    /**
     * The location where the Communication service stores its data at rest. Possible values are `Asia Pacific`, `Australia`, `Europe`, `UK` and `United States`. Defaults to `United States`.
     */
    readonly dataLocation: pulumi.Output<string | undefined>;
    /**
     * The name of the Communication Service resource. Changing this forces a new Communication Service to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The primary connection string of the Communication Service.
     */
    readonly primaryConnectionString: pulumi.Output<string>;
    /**
     * The primary key of the Communication Service.
     */
    readonly primaryKey: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Communication Service should exist. Changing this forces a new Communication Service to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The secondary connection string of the Communication Service.
     */
    readonly secondaryConnectionString: pulumi.Output<string>;
    /**
     * The secondary key of the Communication Service.
     */
    readonly secondaryKey: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Communication Service.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Service resources.
 */
export interface ServiceState {
    /**
     * The location where the Communication service stores its data at rest. Possible values are `Asia Pacific`, `Australia`, `Europe`, `UK` and `United States`. Defaults to `United States`.
     */
    dataLocation?: pulumi.Input<string>;
    /**
     * The name of the Communication Service resource. Changing this forces a new Communication Service to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The primary connection string of the Communication Service.
     */
    primaryConnectionString?: pulumi.Input<string>;
    /**
     * The primary key of the Communication Service.
     */
    primaryKey?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Communication Service should exist. Changing this forces a new Communication Service to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The secondary connection string of the Communication Service.
     */
    secondaryConnectionString?: pulumi.Input<string>;
    /**
     * The secondary key of the Communication Service.
     */
    secondaryKey?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Communication Service.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * The location where the Communication service stores its data at rest. Possible values are `Asia Pacific`, `Australia`, `Europe`, `UK` and `United States`. Defaults to `United States`.
     */
    dataLocation?: pulumi.Input<string>;
    /**
     * The name of the Communication Service resource. Changing this forces a new Communication Service to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Communication Service should exist. Changing this forces a new Communication Service to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Communication Service.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
