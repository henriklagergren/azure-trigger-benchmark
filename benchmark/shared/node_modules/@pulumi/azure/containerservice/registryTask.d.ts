import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Container Registry Task.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleRegistry = new azure.containerservice.Registry("exampleRegistry", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: "Basic",
 * });
 * const exampleRegistryTask = new azure.containerservice.RegistryTask("exampleRegistryTask", {
 *     containerRegistryId: exampleRegistry.id,
 *     platform: {
 *         os: "Linux",
 *     },
 *     dockerStep: {
 *         dockerfilePath: "Dockerfile",
 *         contextPath: "https://github.com/<user name>/acr-build-helloworld-node#main",
 *         contextAccessToken: "<github personal access token>",
 *         imageNames: ["helloworld:{{.Run.ID}}"],
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Container Registry Tasks can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:containerservice/registryTask:RegistryTask example /subscriptions/12345678-1234-9876-4563-123456789012/resourceGroups/group1/providers/Microsoft.ContainerRegistry/registries/registry1/tasks/task1
 * ```
 */
export declare class RegistryTask extends pulumi.CustomResource {
    /**
     * Get an existing RegistryTask resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RegistryTaskState, opts?: pulumi.CustomResourceOptions): RegistryTask;
    /**
     * Returns true if the given object is an instance of RegistryTask.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RegistryTask;
    /**
     * The name of the dedicated Container Registry Agent Pool for this Container Registry Task.
     */
    readonly agentPoolName: pulumi.Output<string | undefined>;
    /**
     * A `agentSetting` block as defined below.
     */
    readonly agentSetting: pulumi.Output<outputs.containerservice.RegistryTaskAgentSetting | undefined>;
    /**
     * A `baseImageTrigger` block as defined below.
     */
    readonly baseImageTrigger: pulumi.Output<outputs.containerservice.RegistryTaskBaseImageTrigger | undefined>;
    /**
     * The ID of the Container Registry that this Container Registry Task resides in. Changing this forces a new Container Registry Task to be created.
     */
    readonly containerRegistryId: pulumi.Output<string>;
    /**
     * A `dockerStep` block as defined below.
     */
    readonly dockerStep: pulumi.Output<outputs.containerservice.RegistryTaskDockerStep | undefined>;
    /**
     * Should this Container Registry Task be enabled? Defaults to `true`.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * A `encodedStep` block as defined below.
     */
    readonly encodedStep: pulumi.Output<outputs.containerservice.RegistryTaskEncodedStep | undefined>;
    /**
     * A `fileStep` block as defined below.
     */
    readonly fileStep: pulumi.Output<outputs.containerservice.RegistryTaskFileStep | undefined>;
    /**
     * A `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.containerservice.RegistryTaskIdentity | undefined>;
    /**
     * Whether this Container Registry Task is a system task. Changing this forces a new Container Registry Task to be created. Defaults to `false`.
     */
    readonly isSystemTask: pulumi.Output<boolean | undefined>;
    /**
     * The template that describes the run log artifact.
     */
    readonly logTemplate: pulumi.Output<string | undefined>;
    /**
     * The name which should be used for this Container Registry Task. Changing this forces a new Container Registry Task to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `platform` block as defined below.
     */
    readonly platform: pulumi.Output<outputs.containerservice.RegistryTaskPlatform | undefined>;
    /**
     * One `registryCredential` block as defined below.
     */
    readonly registryCredential: pulumi.Output<outputs.containerservice.RegistryTaskRegistryCredential | undefined>;
    /**
     * One or more `sourceTrigger` blocks as defined below.
     */
    readonly sourceTriggers: pulumi.Output<outputs.containerservice.RegistryTaskSourceTrigger[] | undefined>;
    /**
     * A mapping of tags which should be assigned to the Container Registry Task.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The timeout of this Container Registry Task in seconds. The valid range lies from 300 to 28800. Defaults to 3600.
     */
    readonly timeoutInSeconds: pulumi.Output<number | undefined>;
    /**
     * One or more `timerTrigger` blocks as defined below.
     */
    readonly timerTriggers: pulumi.Output<outputs.containerservice.RegistryTaskTimerTrigger[] | undefined>;
    /**
     * Create a RegistryTask resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegistryTaskArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RegistryTask resources.
 */
export interface RegistryTaskState {
    /**
     * The name of the dedicated Container Registry Agent Pool for this Container Registry Task.
     */
    agentPoolName?: pulumi.Input<string>;
    /**
     * A `agentSetting` block as defined below.
     */
    agentSetting?: pulumi.Input<inputs.containerservice.RegistryTaskAgentSetting>;
    /**
     * A `baseImageTrigger` block as defined below.
     */
    baseImageTrigger?: pulumi.Input<inputs.containerservice.RegistryTaskBaseImageTrigger>;
    /**
     * The ID of the Container Registry that this Container Registry Task resides in. Changing this forces a new Container Registry Task to be created.
     */
    containerRegistryId?: pulumi.Input<string>;
    /**
     * A `dockerStep` block as defined below.
     */
    dockerStep?: pulumi.Input<inputs.containerservice.RegistryTaskDockerStep>;
    /**
     * Should this Container Registry Task be enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * A `encodedStep` block as defined below.
     */
    encodedStep?: pulumi.Input<inputs.containerservice.RegistryTaskEncodedStep>;
    /**
     * A `fileStep` block as defined below.
     */
    fileStep?: pulumi.Input<inputs.containerservice.RegistryTaskFileStep>;
    /**
     * A `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.containerservice.RegistryTaskIdentity>;
    /**
     * Whether this Container Registry Task is a system task. Changing this forces a new Container Registry Task to be created. Defaults to `false`.
     */
    isSystemTask?: pulumi.Input<boolean>;
    /**
     * The template that describes the run log artifact.
     */
    logTemplate?: pulumi.Input<string>;
    /**
     * The name which should be used for this Container Registry Task. Changing this forces a new Container Registry Task to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `platform` block as defined below.
     */
    platform?: pulumi.Input<inputs.containerservice.RegistryTaskPlatform>;
    /**
     * One `registryCredential` block as defined below.
     */
    registryCredential?: pulumi.Input<inputs.containerservice.RegistryTaskRegistryCredential>;
    /**
     * One or more `sourceTrigger` blocks as defined below.
     */
    sourceTriggers?: pulumi.Input<pulumi.Input<inputs.containerservice.RegistryTaskSourceTrigger>[]>;
    /**
     * A mapping of tags which should be assigned to the Container Registry Task.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The timeout of this Container Registry Task in seconds. The valid range lies from 300 to 28800. Defaults to 3600.
     */
    timeoutInSeconds?: pulumi.Input<number>;
    /**
     * One or more `timerTrigger` blocks as defined below.
     */
    timerTriggers?: pulumi.Input<pulumi.Input<inputs.containerservice.RegistryTaskTimerTrigger>[]>;
}
/**
 * The set of arguments for constructing a RegistryTask resource.
 */
export interface RegistryTaskArgs {
    /**
     * The name of the dedicated Container Registry Agent Pool for this Container Registry Task.
     */
    agentPoolName?: pulumi.Input<string>;
    /**
     * A `agentSetting` block as defined below.
     */
    agentSetting?: pulumi.Input<inputs.containerservice.RegistryTaskAgentSetting>;
    /**
     * A `baseImageTrigger` block as defined below.
     */
    baseImageTrigger?: pulumi.Input<inputs.containerservice.RegistryTaskBaseImageTrigger>;
    /**
     * The ID of the Container Registry that this Container Registry Task resides in. Changing this forces a new Container Registry Task to be created.
     */
    containerRegistryId: pulumi.Input<string>;
    /**
     * A `dockerStep` block as defined below.
     */
    dockerStep?: pulumi.Input<inputs.containerservice.RegistryTaskDockerStep>;
    /**
     * Should this Container Registry Task be enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * A `encodedStep` block as defined below.
     */
    encodedStep?: pulumi.Input<inputs.containerservice.RegistryTaskEncodedStep>;
    /**
     * A `fileStep` block as defined below.
     */
    fileStep?: pulumi.Input<inputs.containerservice.RegistryTaskFileStep>;
    /**
     * A `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.containerservice.RegistryTaskIdentity>;
    /**
     * Whether this Container Registry Task is a system task. Changing this forces a new Container Registry Task to be created. Defaults to `false`.
     */
    isSystemTask?: pulumi.Input<boolean>;
    /**
     * The template that describes the run log artifact.
     */
    logTemplate?: pulumi.Input<string>;
    /**
     * The name which should be used for this Container Registry Task. Changing this forces a new Container Registry Task to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `platform` block as defined below.
     */
    platform?: pulumi.Input<inputs.containerservice.RegistryTaskPlatform>;
    /**
     * One `registryCredential` block as defined below.
     */
    registryCredential?: pulumi.Input<inputs.containerservice.RegistryTaskRegistryCredential>;
    /**
     * One or more `sourceTrigger` blocks as defined below.
     */
    sourceTriggers?: pulumi.Input<pulumi.Input<inputs.containerservice.RegistryTaskSourceTrigger>[]>;
    /**
     * A mapping of tags which should be assigned to the Container Registry Task.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The timeout of this Container Registry Task in seconds. The valid range lies from 300 to 28800. Defaults to 3600.
     */
    timeoutInSeconds?: pulumi.Input<number>;
    /**
     * One or more `timerTrigger` blocks as defined below.
     */
    timerTriggers?: pulumi.Input<pulumi.Input<inputs.containerservice.RegistryTaskTimerTrigger>[]>;
}
