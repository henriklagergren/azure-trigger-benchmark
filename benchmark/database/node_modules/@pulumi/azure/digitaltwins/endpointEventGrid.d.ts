import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Digital Twins Event Grid Endpoint.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleInstance = new azure.digitaltwins.Instance("exampleInstance", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * const exampleTopic = new azure.eventgrid.Topic("exampleTopic", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleEndpointEventGrid = new azure.digitaltwins.EndpointEventGrid("exampleEndpointEventGrid", {
 *     digitalTwinsId: exampleInstance.id,
 *     eventgridTopicEndpoint: exampleTopic.endpoint,
 *     eventgridTopicPrimaryAccessKey: exampleTopic.primaryAccessKey,
 *     eventgridTopicSecondaryAccessKey: exampleTopic.secondaryAccessKey,
 * });
 * ```
 *
 * ## Import
 *
 * Digital Twins Eventgrid Endpoints can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:digitaltwins/endpointEventGrid:EndpointEventGrid example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DigitalTwins/digitalTwinsInstances/dt1/endpoints/ep1
 * ```
 */
export declare class EndpointEventGrid extends pulumi.CustomResource {
    /**
     * Get an existing EndpointEventGrid resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EndpointEventGridState, opts?: pulumi.CustomResourceOptions): EndpointEventGrid;
    /**
     * Returns true if the given object is an instance of EndpointEventGrid.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EndpointEventGrid;
    /**
     * The storage secret of the dead-lettering, whose format is `https://<storageAccountname>.blob.core.windows.net/<containerName>?<SASToken>`. When an endpoint can't deliver an event within a certain time period or after trying to deliver the event a certain number of times, it can send the undelivered event to a storage account.
     */
    readonly deadLetterStorageSecret: pulumi.Output<string | undefined>;
    /**
     * The resource ID of the Digital Twins Instance. Changing this forces a new Digital Twins Eventgrid Endpoint to be created.
     */
    readonly digitalTwinsId: pulumi.Output<string>;
    /**
     * The endpoint of the Event Grid Topic.
     */
    readonly eventgridTopicEndpoint: pulumi.Output<string>;
    /**
     * The primary access key of the Event Grid Topic.
     */
    readonly eventgridTopicPrimaryAccessKey: pulumi.Output<string>;
    /**
     * The secondary access key of the Event Grid Topic.
     */
    readonly eventgridTopicSecondaryAccessKey: pulumi.Output<string>;
    /**
     * The name which should be used for this Digital Twins Eventgrid Endpoint. Changing this forces a new Digital Twins Eventgrid Endpoint to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Create a EndpointEventGrid resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EndpointEventGridArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering EndpointEventGrid resources.
 */
export interface EndpointEventGridState {
    /**
     * The storage secret of the dead-lettering, whose format is `https://<storageAccountname>.blob.core.windows.net/<containerName>?<SASToken>`. When an endpoint can't deliver an event within a certain time period or after trying to deliver the event a certain number of times, it can send the undelivered event to a storage account.
     */
    deadLetterStorageSecret?: pulumi.Input<string>;
    /**
     * The resource ID of the Digital Twins Instance. Changing this forces a new Digital Twins Eventgrid Endpoint to be created.
     */
    digitalTwinsId?: pulumi.Input<string>;
    /**
     * The endpoint of the Event Grid Topic.
     */
    eventgridTopicEndpoint?: pulumi.Input<string>;
    /**
     * The primary access key of the Event Grid Topic.
     */
    eventgridTopicPrimaryAccessKey?: pulumi.Input<string>;
    /**
     * The secondary access key of the Event Grid Topic.
     */
    eventgridTopicSecondaryAccessKey?: pulumi.Input<string>;
    /**
     * The name which should be used for this Digital Twins Eventgrid Endpoint. Changing this forces a new Digital Twins Eventgrid Endpoint to be created.
     */
    name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a EndpointEventGrid resource.
 */
export interface EndpointEventGridArgs {
    /**
     * The storage secret of the dead-lettering, whose format is `https://<storageAccountname>.blob.core.windows.net/<containerName>?<SASToken>`. When an endpoint can't deliver an event within a certain time period or after trying to deliver the event a certain number of times, it can send the undelivered event to a storage account.
     */
    deadLetterStorageSecret?: pulumi.Input<string>;
    /**
     * The resource ID of the Digital Twins Instance. Changing this forces a new Digital Twins Eventgrid Endpoint to be created.
     */
    digitalTwinsId: pulumi.Input<string>;
    /**
     * The endpoint of the Event Grid Topic.
     */
    eventgridTopicEndpoint: pulumi.Input<string>;
    /**
     * The primary access key of the Event Grid Topic.
     */
    eventgridTopicPrimaryAccessKey: pulumi.Input<string>;
    /**
     * The secondary access key of the Event Grid Topic.
     */
    eventgridTopicSecondaryAccessKey: pulumi.Input<string>;
    /**
     * The name which should be used for this Digital Twins Eventgrid Endpoint. Changing this forces a new Digital Twins Eventgrid Endpoint to be created.
     */
    name?: pulumi.Input<string>;
}
