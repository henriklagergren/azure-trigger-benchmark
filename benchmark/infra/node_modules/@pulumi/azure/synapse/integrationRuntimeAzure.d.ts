import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Synapse Azure Integration Runtime.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleContainer = new azure.storage.Container("exampleContainer", {
 *     storageAccountName: exampleAccount.name,
 *     containerAccessType: "private",
 * });
 * const exampleDataLakeGen2Filesystem = new azure.storage.DataLakeGen2Filesystem("exampleDataLakeGen2Filesystem", {storageAccountId: exampleAccount.id});
 * const exampleWorkspace = new azure.synapse.Workspace("exampleWorkspace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     storageDataLakeGen2FilesystemId: exampleDataLakeGen2Filesystem.id,
 *     sqlAdministratorLogin: "sqladminuser",
 *     sqlAdministratorLoginPassword: "H@Sh1CoR3!",
 *     managedVirtualNetworkEnabled: true,
 * });
 * const exampleFirewallRule = new azure.synapse.FirewallRule("exampleFirewallRule", {
 *     synapseWorkspaceId: exampleWorkspace.id,
 *     startIpAddress: "0.0.0.0",
 *     endIpAddress: "255.255.255.255",
 * });
 * const exampleIntegrationRuntimeAzure = new azure.synapse.IntegrationRuntimeAzure("exampleIntegrationRuntimeAzure", {
 *     synapseWorkspaceId: exampleWorkspace.id,
 *     location: exampleResourceGroup.location,
 * });
 * ```
 *
 * ## Import
 *
 * Synapse Azure Integration Runtimes can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:synapse/integrationRuntimeAzure:IntegrationRuntimeAzure example /subscriptions/12345678-1234-9876-4563-123456789012/resourceGroups/resGroup1/providers/Microsoft.Synapse/workspaces/workspace1/integrationruntimes/IntegrationRuntime1
 * ```
 */
export declare class IntegrationRuntimeAzure extends pulumi.CustomResource {
    /**
     * Get an existing IntegrationRuntimeAzure resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IntegrationRuntimeAzureState, opts?: pulumi.CustomResourceOptions): IntegrationRuntimeAzure;
    /**
     * Returns true if the given object is an instance of IntegrationRuntimeAzure.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IntegrationRuntimeAzure;
    /**
     * Compute type of the cluster which will execute data flow job. Valid values are `General`, `ComputeOptimized` and `MemoryOptimized`. Defaults to `General`.
     */
    readonly computeType: pulumi.Output<string | undefined>;
    /**
     * Core count of the cluster which will execute data flow job. Valid values are `8`, `16`, `32`, `48`, `80`, `144` and `272`. Defaults to `8`.
     */
    readonly coreCount: pulumi.Output<number | undefined>;
    /**
     * Integration runtime description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The Azure Region where the Synapse Azure Integration Runtime should exist. Changing this forces a new Synapse Azure Integration Runtime to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Synapse Azure Integration Runtime. Changing this forces a new Synapse Azure Integration Runtime to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The Synapse Workspace ID in which to associate the Integration Runtime with. Changing this forces a new Synapse Azure Integration Runtime to be created.
     */
    readonly synapseWorkspaceId: pulumi.Output<string>;
    /**
     * Time to live (in minutes) setting of the cluster which will execute data flow job. Defaults to `0`.
     */
    readonly timeToLiveMin: pulumi.Output<number | undefined>;
    /**
     * Create a IntegrationRuntimeAzure resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IntegrationRuntimeAzureArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IntegrationRuntimeAzure resources.
 */
export interface IntegrationRuntimeAzureState {
    /**
     * Compute type of the cluster which will execute data flow job. Valid values are `General`, `ComputeOptimized` and `MemoryOptimized`. Defaults to `General`.
     */
    computeType?: pulumi.Input<string>;
    /**
     * Core count of the cluster which will execute data flow job. Valid values are `8`, `16`, `32`, `48`, `80`, `144` and `272`. Defaults to `8`.
     */
    coreCount?: pulumi.Input<number>;
    /**
     * Integration runtime description.
     */
    description?: pulumi.Input<string>;
    /**
     * The Azure Region where the Synapse Azure Integration Runtime should exist. Changing this forces a new Synapse Azure Integration Runtime to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Synapse Azure Integration Runtime. Changing this forces a new Synapse Azure Integration Runtime to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The Synapse Workspace ID in which to associate the Integration Runtime with. Changing this forces a new Synapse Azure Integration Runtime to be created.
     */
    synapseWorkspaceId?: pulumi.Input<string>;
    /**
     * Time to live (in minutes) setting of the cluster which will execute data flow job. Defaults to `0`.
     */
    timeToLiveMin?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a IntegrationRuntimeAzure resource.
 */
export interface IntegrationRuntimeAzureArgs {
    /**
     * Compute type of the cluster which will execute data flow job. Valid values are `General`, `ComputeOptimized` and `MemoryOptimized`. Defaults to `General`.
     */
    computeType?: pulumi.Input<string>;
    /**
     * Core count of the cluster which will execute data flow job. Valid values are `8`, `16`, `32`, `48`, `80`, `144` and `272`. Defaults to `8`.
     */
    coreCount?: pulumi.Input<number>;
    /**
     * Integration runtime description.
     */
    description?: pulumi.Input<string>;
    /**
     * The Azure Region where the Synapse Azure Integration Runtime should exist. Changing this forces a new Synapse Azure Integration Runtime to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Synapse Azure Integration Runtime. Changing this forces a new Synapse Azure Integration Runtime to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The Synapse Workspace ID in which to associate the Integration Runtime with. Changing this forces a new Synapse Azure Integration Runtime to be created.
     */
    synapseWorkspaceId: pulumi.Input<string>;
    /**
     * Time to live (in minutes) setting of the cluster which will execute data flow job. Defaults to `0`.
     */
    timeToLiveMin?: pulumi.Input<number>;
}
