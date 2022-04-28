import * as pulumi from "@pulumi/pulumi";
import { output as outputs } from "../types";
/**
 * Use this data source to access information about an existing Batch pool
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = pulumi.output(azure.batch.getPool({
 *     accountName: "testbatchaccount",
 *     name: "testbatchpool",
 *     resourceGroupName: "test",
 * }));
 * ```
 */
export declare function getPool(args: GetPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetPoolResult>;
/**
 * A collection of arguments for invoking getPool.
 */
export interface GetPoolArgs {
    /**
     * The name of the Batch account.
     */
    accountName: string;
    /**
     * The name of the endpoint.
     */
    name: string;
    resourceGroupName: string;
}
/**
 * A collection of values returned by getPool.
 */
export interface GetPoolResult {
    /**
     * The name of the Batch account.
     */
    readonly accountName: string;
    /**
     * A `autoScale` block that describes the scale settings when using auto scale.
     */
    readonly autoScales: outputs.batch.GetPoolAutoScale[];
    /**
     * One or more `certificate` blocks that describe the certificates installed on each compute node in the pool.
     */
    readonly certificates: outputs.batch.GetPoolCertificate[];
    /**
     * The container configuration used in the pool's VMs.
     */
    readonly containerConfigurations: outputs.batch.GetPoolContainerConfiguration[];
    readonly displayName: string;
    /**
     * A `fixedScale` block that describes the scale settings when using fixed scale.
     */
    readonly fixedScales: outputs.batch.GetPoolFixedScale[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * The maximum number of tasks that can run concurrently on a single compute node in the pool.
     */
    readonly maxTasksPerNode: number;
    readonly metadata: {
        [key: string]: string;
    };
    /**
     * The name of the endpoint.
     */
    readonly name: string;
    readonly networkConfiguration: outputs.batch.GetPoolNetworkConfiguration;
    /**
     * The Sku of the node agents in the Batch pool.
     */
    readonly nodeAgentSkuId: string;
    readonly resourceGroupName: string;
    /**
     * A `startTask` block that describes the start task settings for the Batch pool.
     */
    readonly startTasks: outputs.batch.GetPoolStartTask[];
    /**
     * The reference of the storage image used by the nodes in the Batch pool.
     */
    readonly storageImageReferences: outputs.batch.GetPoolStorageImageReference[];
    /**
     * The size of the VM created in the Batch pool.
     */
    readonly vmSize: string;
}
export declare function getPoolOutput(args: GetPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPoolResult>;
/**
 * A collection of arguments for invoking getPool.
 */
export interface GetPoolOutputArgs {
    /**
     * The name of the Batch account.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name of the endpoint.
     */
    name: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
}
