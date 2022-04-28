import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Digital Twins Event Hub Endpoint.
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
 * const exampleEventHubNamespace = new azure.eventhub.EventHubNamespace("exampleEventHubNamespace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "Standard",
 * });
 * const exampleEventHub = new azure.eventhub.EventHub("exampleEventHub", {
 *     namespaceName: exampleEventHubNamespace.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     partitionCount: 2,
 *     messageRetention: 1,
 * });
 * const exampleAuthorizationRule = new azure.eventhub.AuthorizationRule("exampleAuthorizationRule", {
 *     namespaceName: exampleEventHubNamespace.name,
 *     eventhubName: exampleEventHub.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     listen: false,
 *     send: true,
 *     manage: false,
 * });
 * const exampleEndpointEventHub = new azure.digitaltwins.EndpointEventHub("exampleEndpointEventHub", {
 *     digitalTwinsId: exampleInstance.id,
 *     eventhubPrimaryConnectionString: exampleAuthorizationRule.primaryConnectionString,
 *     eventhubSecondaryConnectionString: exampleAuthorizationRule.secondaryConnectionString,
 * });
 * ```
 *
 * ## Import
 *
 * Digital Twins Eventhub Endpoints can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:digitaltwins/endpointEventHub:EndpointEventHub example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DigitalTwins/digitalTwinsInstances/dt1/endpoints/ep1
 * ```
 */
export declare class EndpointEventHub extends pulumi.CustomResource {
    /**
     * Get an existing EndpointEventHub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EndpointEventHubState, opts?: pulumi.CustomResourceOptions): EndpointEventHub;
    /**
     * Returns true if the given object is an instance of EndpointEventHub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EndpointEventHub;
    /**
     * The storage secret of the dead-lettering, whose format is `https://<storageAccountname>.blob.core.windows.net/<containerName>?<SASToken>`. When an endpoint can't deliver an event within a certain time period or after trying to deliver the event a certain number of times, it can send the undelivered event to a storage account.
     */
    readonly deadLetterStorageSecret: pulumi.Output<string | undefined>;
    /**
     * The resource ID of the Digital Twins Instance. Changing this forces a new Digital Twins Event Hub Endpoint to be created.
     */
    readonly digitalTwinsId: pulumi.Output<string>;
    /**
     * The primary connection string of the Event Hub Authorization Rule with a minimum of `send` permission.
     */
    readonly eventhubPrimaryConnectionString: pulumi.Output<string>;
    /**
     * The secondary connection string of the Event Hub Authorization Rule with a minimum of `send` permission.
     */
    readonly eventhubSecondaryConnectionString: pulumi.Output<string>;
    /**
     * The name which should be used for this Digital Twins Event Hub Endpoint. Changing this forces a new Digital Twins Event Hub Endpoint to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Create a EndpointEventHub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EndpointEventHubArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering EndpointEventHub resources.
 */
export interface EndpointEventHubState {
    /**
     * The storage secret of the dead-lettering, whose format is `https://<storageAccountname>.blob.core.windows.net/<containerName>?<SASToken>`. When an endpoint can't deliver an event within a certain time period or after trying to deliver the event a certain number of times, it can send the undelivered event to a storage account.
     */
    deadLetterStorageSecret?: pulumi.Input<string>;
    /**
     * The resource ID of the Digital Twins Instance. Changing this forces a new Digital Twins Event Hub Endpoint to be created.
     */
    digitalTwinsId?: pulumi.Input<string>;
    /**
     * The primary connection string of the Event Hub Authorization Rule with a minimum of `send` permission.
     */
    eventhubPrimaryConnectionString?: pulumi.Input<string>;
    /**
     * The secondary connection string of the Event Hub Authorization Rule with a minimum of `send` permission.
     */
    eventhubSecondaryConnectionString?: pulumi.Input<string>;
    /**
     * The name which should be used for this Digital Twins Event Hub Endpoint. Changing this forces a new Digital Twins Event Hub Endpoint to be created.
     */
    name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a EndpointEventHub resource.
 */
export interface EndpointEventHubArgs {
    /**
     * The storage secret of the dead-lettering, whose format is `https://<storageAccountname>.blob.core.windows.net/<containerName>?<SASToken>`. When an endpoint can't deliver an event within a certain time period or after trying to deliver the event a certain number of times, it can send the undelivered event to a storage account.
     */
    deadLetterStorageSecret?: pulumi.Input<string>;
    /**
     * The resource ID of the Digital Twins Instance. Changing this forces a new Digital Twins Event Hub Endpoint to be created.
     */
    digitalTwinsId: pulumi.Input<string>;
    /**
     * The primary connection string of the Event Hub Authorization Rule with a minimum of `send` permission.
     */
    eventhubPrimaryConnectionString: pulumi.Input<string>;
    /**
     * The secondary connection string of the Event Hub Authorization Rule with a minimum of `send` permission.
     */
    eventhubSecondaryConnectionString: pulumi.Input<string>;
    /**
     * The name which should be used for this Digital Twins Event Hub Endpoint. Changing this forces a new Digital Twins Event Hub Endpoint to be created.
     */
    name?: pulumi.Input<string>;
}
