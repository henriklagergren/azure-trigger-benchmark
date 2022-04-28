import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure Batch pool.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * from "fs";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleBatch_accountAccount = new azure.batch.Account("exampleBatch/accountAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     poolAllocationMode: "BatchService",
 *     storageAccountId: exampleAccount.id,
 *     tags: {
 *         env: "test",
 *     },
 * });
 * const exampleCertificate = new azure.batch.Certificate("exampleCertificate", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     accountName: exampleBatch / accountAccount.name,
 *     certificate: Buffer.from(fs.readFileSync("certificate.cer"), 'binary').toString('base64'),
 *     format: "Cer",
 *     thumbprint: "312d31a79fa0cef49c00f769afc2b73e9f4edf34",
 *     thumbprintAlgorithm: "SHA1",
 * });
 * const examplePool = new azure.batch.Pool("examplePool", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     accountName: exampleBatch / accountAccount.name,
 *     displayName: "Test Acc Pool Auto",
 *     vmSize: "Standard_A1",
 *     nodeAgentSkuId: "batch.node.ubuntu 20.04",
 *     autoScale: {
 *         evaluationInterval: "PT15M",
 *         formula: `      startingNumberOfVMs = 1;
 *       maxNumberofVMs = 25;
 *       pendingTaskSamplePercent = $PendingTasks.GetSamplePercent(180 * TimeInterval_Second);
 *       pendingTaskSamples = pendingTaskSamplePercent < 70 ? startingNumberOfVMs : avg($PendingTasks.GetSample(180 *   TimeInterval_Second));
 *       $TargetDedicatedNodes=min(maxNumberofVMs, pendingTaskSamples);
 * `,
 *     },
 *     storageImageReference: {
 *         publisher: "microsoft-azure-batch",
 *         offer: "ubuntu-server-container",
 *         sku: "20-04-lts",
 *         version: "latest",
 *     },
 *     containerConfiguration: {
 *         type: "DockerCompatible",
 *         containerRegistries: [{
 *             registryServer: "docker.io",
 *             userName: "login",
 *             password: "apassword",
 *         }],
 *     },
 *     startTask: {
 *         commandLine: `echo 'Hello World from $env'`,
 *         taskRetryMaximum: 1,
 *         waitForSuccess: true,
 *         commonEnvironmentProperties: {
 *             env: "TEST",
 *         },
 *         userIdentity: {
 *             autoUser: {
 *                 elevationLevel: "NonAdmin",
 *                 scope: "Task",
 *             },
 *         },
 *     },
 *     certificates: [{
 *         id: exampleCertificate.id,
 *         visibilities: ["StartTask"],
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Batch Pools can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:batch/pool:Pool example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup1/providers/Microsoft.Batch/batchAccounts/myBatchAccount1/pools/myBatchPool1
 * ```
 */
export declare class Pool extends pulumi.CustomResource {
    /**
     * Get an existing Pool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PoolState, opts?: pulumi.CustomResourceOptions): Pool;
    /**
     * Returns true if the given object is an instance of Pool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Pool;
    /**
     * Specifies the name of the Batch account in which the pool will be created. Changing this forces a new resource to be created.
     */
    readonly accountName: pulumi.Output<string>;
    /**
     * A `autoScale` block that describes the scale settings when using auto scale.
     */
    readonly autoScale: pulumi.Output<outputs.batch.PoolAutoScale | undefined>;
    /**
     * One or more `certificate` blocks that describe the certificates to be installed on each compute node in the pool.
     */
    readonly certificates: pulumi.Output<outputs.batch.PoolCertificate[] | undefined>;
    /**
     * The container configuration used in the pool's VMs.
     */
    readonly containerConfiguration: pulumi.Output<outputs.batch.PoolContainerConfiguration | undefined>;
    /**
     * Specifies the display name of the Batch pool.
     */
    readonly displayName: pulumi.Output<string | undefined>;
    /**
     * A `fixedScale` block that describes the scale settings when using fixed scale.
     */
    readonly fixedScale: pulumi.Output<outputs.batch.PoolFixedScale | undefined>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.batch.PoolIdentity | undefined>;
    /**
     * Specifies the maximum number of tasks that can run concurrently on a single compute node in the pool. Defaults to `1`. Changing this forces a new resource to be created.
     */
    readonly maxTasksPerNode: pulumi.Output<number | undefined>;
    /**
     * A map of custom batch pool metadata.
     */
    readonly metadata: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the name of the Batch pool. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `networkConfiguration` block that describes the network configurations for the Batch pool.
     */
    readonly networkConfiguration: pulumi.Output<outputs.batch.PoolNetworkConfiguration | undefined>;
    /**
     * Specifies the Sku of the node agents that will be created in the Batch pool.
     */
    readonly nodeAgentSkuId: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Batch pool. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `startTask` block that describes the start task settings for the Batch pool.
     */
    readonly startTask: pulumi.Output<outputs.batch.PoolStartTask | undefined>;
    readonly stopPendingResizeOperation: pulumi.Output<boolean | undefined>;
    /**
     * A `storageImageReference` for the virtual machines that will compose the Batch pool.
     */
    readonly storageImageReference: pulumi.Output<outputs.batch.PoolStorageImageReference>;
    /**
     * Specifies the size of the VM created in the Batch pool.
     */
    readonly vmSize: pulumi.Output<string>;
    /**
     * Create a Pool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PoolArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Pool resources.
 */
export interface PoolState {
    /**
     * Specifies the name of the Batch account in which the pool will be created. Changing this forces a new resource to be created.
     */
    accountName?: pulumi.Input<string>;
    /**
     * A `autoScale` block that describes the scale settings when using auto scale.
     */
    autoScale?: pulumi.Input<inputs.batch.PoolAutoScale>;
    /**
     * One or more `certificate` blocks that describe the certificates to be installed on each compute node in the pool.
     */
    certificates?: pulumi.Input<pulumi.Input<inputs.batch.PoolCertificate>[]>;
    /**
     * The container configuration used in the pool's VMs.
     */
    containerConfiguration?: pulumi.Input<inputs.batch.PoolContainerConfiguration>;
    /**
     * Specifies the display name of the Batch pool.
     */
    displayName?: pulumi.Input<string>;
    /**
     * A `fixedScale` block that describes the scale settings when using fixed scale.
     */
    fixedScale?: pulumi.Input<inputs.batch.PoolFixedScale>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.batch.PoolIdentity>;
    /**
     * Specifies the maximum number of tasks that can run concurrently on a single compute node in the pool. Defaults to `1`. Changing this forces a new resource to be created.
     */
    maxTasksPerNode?: pulumi.Input<number>;
    /**
     * A map of custom batch pool metadata.
     */
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the name of the Batch pool. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `networkConfiguration` block that describes the network configurations for the Batch pool.
     */
    networkConfiguration?: pulumi.Input<inputs.batch.PoolNetworkConfiguration>;
    /**
     * Specifies the Sku of the node agents that will be created in the Batch pool.
     */
    nodeAgentSkuId?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Batch pool. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `startTask` block that describes the start task settings for the Batch pool.
     */
    startTask?: pulumi.Input<inputs.batch.PoolStartTask>;
    stopPendingResizeOperation?: pulumi.Input<boolean>;
    /**
     * A `storageImageReference` for the virtual machines that will compose the Batch pool.
     */
    storageImageReference?: pulumi.Input<inputs.batch.PoolStorageImageReference>;
    /**
     * Specifies the size of the VM created in the Batch pool.
     */
    vmSize?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Pool resource.
 */
export interface PoolArgs {
    /**
     * Specifies the name of the Batch account in which the pool will be created. Changing this forces a new resource to be created.
     */
    accountName: pulumi.Input<string>;
    /**
     * A `autoScale` block that describes the scale settings when using auto scale.
     */
    autoScale?: pulumi.Input<inputs.batch.PoolAutoScale>;
    /**
     * One or more `certificate` blocks that describe the certificates to be installed on each compute node in the pool.
     */
    certificates?: pulumi.Input<pulumi.Input<inputs.batch.PoolCertificate>[]>;
    /**
     * The container configuration used in the pool's VMs.
     */
    containerConfiguration?: pulumi.Input<inputs.batch.PoolContainerConfiguration>;
    /**
     * Specifies the display name of the Batch pool.
     */
    displayName?: pulumi.Input<string>;
    /**
     * A `fixedScale` block that describes the scale settings when using fixed scale.
     */
    fixedScale?: pulumi.Input<inputs.batch.PoolFixedScale>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.batch.PoolIdentity>;
    /**
     * Specifies the maximum number of tasks that can run concurrently on a single compute node in the pool. Defaults to `1`. Changing this forces a new resource to be created.
     */
    maxTasksPerNode?: pulumi.Input<number>;
    /**
     * A map of custom batch pool metadata.
     */
    metadata?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the name of the Batch pool. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `networkConfiguration` block that describes the network configurations for the Batch pool.
     */
    networkConfiguration?: pulumi.Input<inputs.batch.PoolNetworkConfiguration>;
    /**
     * Specifies the Sku of the node agents that will be created in the Batch pool.
     */
    nodeAgentSkuId: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Batch pool. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `startTask` block that describes the start task settings for the Batch pool.
     */
    startTask?: pulumi.Input<inputs.batch.PoolStartTask>;
    stopPendingResizeOperation?: pulumi.Input<boolean>;
    /**
     * A `storageImageReference` for the virtual machines that will compose the Batch pool.
     */
    storageImageReference: pulumi.Input<inputs.batch.PoolStorageImageReference>;
    /**
     * Specifies the size of the VM created in the Batch pool.
     */
    vmSize: pulumi.Input<string>;
}
