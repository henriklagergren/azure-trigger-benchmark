import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Event Grid System Topic.
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
 * const exampleSystemTopic = new azure.eventgrid.SystemTopic("exampleSystemTopic", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sourceArmResourceId: exampleAccount.id,
 *     topicType: "Microsoft.Storage.StorageAccounts",
 * });
 * ```
 *
 * ## Import
 *
 * Event Grid System Topic can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:eventgrid/systemTopic:SystemTopic example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.EventGrid/systemTopics/systemTopic1
 * ```
 */
export declare class SystemTopic extends pulumi.CustomResource {
    /**
     * Get an existing SystemTopic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemTopicState, opts?: pulumi.CustomResourceOptions): SystemTopic;
    /**
     * Returns true if the given object is an instance of SystemTopic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemTopic;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.eventgrid.SystemTopicIdentity | undefined>;
    /**
     * The Azure Region where the Event Grid System Topic should exist. Changing this forces a new Event Grid System Topic to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The Metric ARM Resource ID of the Event Grid System Topic.
     */
    readonly metricArmResourceId: pulumi.Output<string>;
    /**
     * The name which should be used for this Event Grid System Topic. Changing this forces a new Event Grid System Topic to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Event Grid System Topic should exist. Changing this forces a new Event Grid System Topic to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The ID of the Event Grid System Topic ARM Source. Changing this forces a new Event Grid System Topic to be created.
     */
    readonly sourceArmResourceId: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Event Grid System Topic.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The Topic Type of the Event Grid System Topic. The topic type is validated by Azure and there may be additional topic types beyond the following: `Microsoft.AppConfiguration.ConfigurationStores`, `Microsoft.Communication.CommunicationServices`, `Microsoft.ContainerRegistry.Registries`, `Microsoft.Devices.IoTHubs`, `Microsoft.EventGrid.Domains`, `Microsoft.EventGrid.Topics`, `Microsoft.Eventhub.Namespaces`, `Microsoft.KeyVault.vaults`, `Microsoft.MachineLearningServices.Workspaces`, `Microsoft.Maps.Accounts`, `Microsoft.Media.MediaServices`, `Microsoft.Resources.ResourceGroups`, `Microsoft.Resources.Subscriptions`, `Microsoft.ServiceBus.Namespaces`, `Microsoft.SignalRService.SignalR`, `Microsoft.Storage.StorageAccounts`, `Microsoft.Web.ServerFarms` and `Microsoft.Web.Sites`. Changing this forces a new Event Grid System Topic to be created.
     */
    readonly topicType: pulumi.Output<string>;
    /**
     * Create a SystemTopic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemTopicArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SystemTopic resources.
 */
export interface SystemTopicState {
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.eventgrid.SystemTopicIdentity>;
    /**
     * The Azure Region where the Event Grid System Topic should exist. Changing this forces a new Event Grid System Topic to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The Metric ARM Resource ID of the Event Grid System Topic.
     */
    metricArmResourceId?: pulumi.Input<string>;
    /**
     * The name which should be used for this Event Grid System Topic. Changing this forces a new Event Grid System Topic to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Event Grid System Topic should exist. Changing this forces a new Event Grid System Topic to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The ID of the Event Grid System Topic ARM Source. Changing this forces a new Event Grid System Topic to be created.
     */
    sourceArmResourceId?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Event Grid System Topic.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The Topic Type of the Event Grid System Topic. The topic type is validated by Azure and there may be additional topic types beyond the following: `Microsoft.AppConfiguration.ConfigurationStores`, `Microsoft.Communication.CommunicationServices`, `Microsoft.ContainerRegistry.Registries`, `Microsoft.Devices.IoTHubs`, `Microsoft.EventGrid.Domains`, `Microsoft.EventGrid.Topics`, `Microsoft.Eventhub.Namespaces`, `Microsoft.KeyVault.vaults`, `Microsoft.MachineLearningServices.Workspaces`, `Microsoft.Maps.Accounts`, `Microsoft.Media.MediaServices`, `Microsoft.Resources.ResourceGroups`, `Microsoft.Resources.Subscriptions`, `Microsoft.ServiceBus.Namespaces`, `Microsoft.SignalRService.SignalR`, `Microsoft.Storage.StorageAccounts`, `Microsoft.Web.ServerFarms` and `Microsoft.Web.Sites`. Changing this forces a new Event Grid System Topic to be created.
     */
    topicType?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SystemTopic resource.
 */
export interface SystemTopicArgs {
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.eventgrid.SystemTopicIdentity>;
    /**
     * The Azure Region where the Event Grid System Topic should exist. Changing this forces a new Event Grid System Topic to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Event Grid System Topic. Changing this forces a new Event Grid System Topic to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Event Grid System Topic should exist. Changing this forces a new Event Grid System Topic to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of the Event Grid System Topic ARM Source. Changing this forces a new Event Grid System Topic to be created.
     */
    sourceArmResourceId: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Event Grid System Topic.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The Topic Type of the Event Grid System Topic. The topic type is validated by Azure and there may be additional topic types beyond the following: `Microsoft.AppConfiguration.ConfigurationStores`, `Microsoft.Communication.CommunicationServices`, `Microsoft.ContainerRegistry.Registries`, `Microsoft.Devices.IoTHubs`, `Microsoft.EventGrid.Domains`, `Microsoft.EventGrid.Topics`, `Microsoft.Eventhub.Namespaces`, `Microsoft.KeyVault.vaults`, `Microsoft.MachineLearningServices.Workspaces`, `Microsoft.Maps.Accounts`, `Microsoft.Media.MediaServices`, `Microsoft.Resources.ResourceGroups`, `Microsoft.Resources.Subscriptions`, `Microsoft.ServiceBus.Namespaces`, `Microsoft.SignalRService.SignalR`, `Microsoft.Storage.StorageAccounts`, `Microsoft.Web.ServerFarms` and `Microsoft.Web.Sites`. Changing this forces a new Event Grid System Topic to be created.
     */
    topicType: pulumi.Input<string>;
}
