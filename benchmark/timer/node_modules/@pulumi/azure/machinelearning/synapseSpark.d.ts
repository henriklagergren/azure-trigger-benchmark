import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages the linked service to link an Azure Machine learning workspace to an Azure Synapse workspace.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {
 *     location: "west europe",
 *     tags: {
 *         stage: "example",
 *     },
 * });
 * const exampleInsights = new azure.appinsights.Insights("exampleInsights", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationType: "web",
 * });
 * const exampleKeyVault = new azure.keyvault.KeyVault("exampleKeyVault", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     tenantId: current.then(current => current.tenantId),
 *     skuName: "standard",
 *     purgeProtectionEnabled: true,
 * });
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleWorkspace = new azure.machinelearning.Workspace("exampleWorkspace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     applicationInsightsId: exampleInsights.id,
 *     keyVaultId: exampleKeyVault.id,
 *     storageAccountId: exampleAccount.id,
 *     identity: {
 *         type: "SystemAssigned",
 *     },
 * });
 * const exampleDataLakeGen2Filesystem = new azure.storage.DataLakeGen2Filesystem("exampleDataLakeGen2Filesystem", {storageAccountId: exampleAccount.id});
 * const exampleSynapse_workspaceWorkspace = new azure.synapse.Workspace("exampleSynapse/workspaceWorkspace", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     storageDataLakeGen2FilesystemId: exampleDataLakeGen2Filesystem.id,
 *     sqlAdministratorLogin: "sqladminuser",
 *     sqlAdministratorLoginPassword: "H@Sh1CoR3!",
 * });
 * const exampleSparkPool = new azure.synapse.SparkPool("exampleSparkPool", {
 *     synapseWorkspaceId: exampleSynapse / workspaceWorkspace.id,
 *     nodeSizeFamily: "MemoryOptimized",
 *     nodeSize: "Small",
 *     nodeCount: 3,
 * });
 * const exampleSynapseSpark = new azure.machinelearning.SynapseSpark("exampleSynapseSpark", {
 *     machineLearningWorkspaceId: exampleWorkspace.id,
 *     location: exampleResourceGroup.location,
 *     synapseSparkPoolId: exampleSparkPool.id,
 *     identity: {
 *         type: "SystemAssigned",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Machine Learning Synapse Sparks can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:machinelearning/synapseSpark:SynapseSpark example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resGroup1/providers/Microsoft.MachineLearningServices/workspaces/workspace1/computes/compute1
 * ```
 */
export declare class SynapseSpark extends pulumi.CustomResource {
    /**
     * Get an existing SynapseSpark resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SynapseSparkState, opts?: pulumi.CustomResourceOptions): SynapseSpark;
    /**
     * Returns true if the given object is an instance of SynapseSpark.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SynapseSpark;
    /**
     * The description of the Machine Learning Synapse Spark. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * An `identity` block as defined below. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    readonly identity: pulumi.Output<outputs.machinelearning.SynapseSparkIdentity | undefined>;
    /**
     * Whether local authentication methods is enabled. Defaults to `true`. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    readonly localAuthEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The Azure Region where the Machine Learning Synapse Spark should exist. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The ID of the Machine Learning Workspace. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    readonly machineLearningWorkspaceId: pulumi.Output<string>;
    /**
     * The name which should be used for this Machine Learning Synapse Spark. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the linked Synapse Spark Pool. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    readonly synapseSparkPoolId: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Machine Learning Synapse Spark. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a SynapseSpark resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SynapseSparkArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SynapseSpark resources.
 */
export interface SynapseSparkState {
    /**
     * The description of the Machine Learning Synapse Spark. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    description?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    identity?: pulumi.Input<inputs.machinelearning.SynapseSparkIdentity>;
    /**
     * Whether local authentication methods is enabled. Defaults to `true`. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    localAuthEnabled?: pulumi.Input<boolean>;
    /**
     * The Azure Region where the Machine Learning Synapse Spark should exist. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The ID of the Machine Learning Workspace. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    machineLearningWorkspaceId?: pulumi.Input<string>;
    /**
     * The name which should be used for this Machine Learning Synapse Spark. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the linked Synapse Spark Pool. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    synapseSparkPoolId?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Machine Learning Synapse Spark. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a SynapseSpark resource.
 */
export interface SynapseSparkArgs {
    /**
     * The description of the Machine Learning Synapse Spark. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    description?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    identity?: pulumi.Input<inputs.machinelearning.SynapseSparkIdentity>;
    /**
     * Whether local authentication methods is enabled. Defaults to `true`. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    localAuthEnabled?: pulumi.Input<boolean>;
    /**
     * The Azure Region where the Machine Learning Synapse Spark should exist. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The ID of the Machine Learning Workspace. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    machineLearningWorkspaceId: pulumi.Input<string>;
    /**
     * The name which should be used for this Machine Learning Synapse Spark. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the linked Synapse Spark Pool. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    synapseSparkPoolId: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Machine Learning Synapse Spark. Changing this forces a new Machine Learning Synapse Spark to be created.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
