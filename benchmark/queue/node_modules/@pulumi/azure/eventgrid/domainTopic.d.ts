import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an EventGrid Domain Topic
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleDomain = new azure.eventgrid.Domain("exampleDomain", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * const exampleDomainTopic = new azure.eventgrid.DomainTopic("exampleDomainTopic", {
 *     domainName: exampleDomain.name,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * ```
 *
 * ## Import
 *
 * EventGrid Domain Topics can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:eventgrid/domainTopic:DomainTopic topic1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.EventGrid/domains/domain1/topics/topic1
 * ```
 */
export declare class DomainTopic extends pulumi.CustomResource {
    /**
     * Get an existing DomainTopic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DomainTopicState, opts?: pulumi.CustomResourceOptions): DomainTopic;
    /**
     * Returns true if the given object is an instance of DomainTopic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DomainTopic;
    /**
     * Specifies the name of the EventGrid Domain. Changing this forces a new resource to be created.
     */
    readonly domainName: pulumi.Output<string>;
    /**
     * Specifies the name of the EventGrid Domain Topic resource. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which the EventGrid Domain exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Create a DomainTopic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainTopicArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DomainTopic resources.
 */
export interface DomainTopicState {
    /**
     * Specifies the name of the EventGrid Domain. Changing this forces a new resource to be created.
     */
    domainName?: pulumi.Input<string>;
    /**
     * Specifies the name of the EventGrid Domain Topic resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the EventGrid Domain exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DomainTopic resource.
 */
export interface DomainTopicArgs {
    /**
     * Specifies the name of the EventGrid Domain. Changing this forces a new resource to be created.
     */
    domainName: pulumi.Input<string>;
    /**
     * Specifies the name of the EventGrid Domain Topic resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the EventGrid Domain exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
