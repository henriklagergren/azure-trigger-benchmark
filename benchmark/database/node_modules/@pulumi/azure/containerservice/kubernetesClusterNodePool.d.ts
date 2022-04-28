import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * ## Example Usage
 *
 * This example provisions a basic Kubernetes Node Pool.
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleKubernetesCluster = new azure.containerservice.KubernetesCluster("exampleKubernetesCluster", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     dnsPrefix: "exampleaks1",
 *     defaultNodePool: {
 *         name: "default",
 *         nodeCount: 1,
 *         vmSize: "Standard_D2_v2",
 *     },
 *     servicePrincipal: {
 *         clientId: "00000000-0000-0000-0000-000000000000",
 *         clientSecret: "00000000000000000000000000000000",
 *     },
 * });
 * const exampleKubernetesClusterNodePool = new azure.containerservice.KubernetesClusterNodePool("exampleKubernetesClusterNodePool", {
 *     kubernetesClusterId: exampleKubernetesCluster.id,
 *     vmSize: "Standard_DS2_v2",
 *     nodeCount: 1,
 *     tags: {
 *         Environment: "Production",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Kubernetes Cluster Node Pools can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:containerservice/kubernetesClusterNodePool:KubernetesClusterNodePool pool1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.ContainerService/managedClusters/cluster1/agentPools/pool1
 * ```
 */
export declare class KubernetesClusterNodePool extends pulumi.CustomResource {
    /**
     * Get an existing KubernetesClusterNodePool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KubernetesClusterNodePoolState, opts?: pulumi.CustomResourceOptions): KubernetesClusterNodePool;
    /**
     * Returns true if the given object is an instance of KubernetesClusterNodePool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is KubernetesClusterNodePool;
    /**
     * A list of Availability Zones where the Nodes in this Node Pool should be created in. Changing this forces a new resource to be created.
     */
    readonly availabilityZones: pulumi.Output<string[] | undefined>;
    /**
     * Whether to enable [auto-scaler](https://docs.microsoft.com/en-us/azure/aks/cluster-autoscaler). Defaults to `false`.
     */
    readonly enableAutoScaling: pulumi.Output<boolean | undefined>;
    /**
     * Should the nodes in this Node Pool have host encryption enabled? Defaults to `false`.
     */
    readonly enableHostEncryption: pulumi.Output<boolean | undefined>;
    /**
     * Should each node have a Public IP Address? Defaults to `false`.  Changing this forces a new resource to be created.
     */
    readonly enableNodePublicIp: pulumi.Output<boolean | undefined>;
    /**
     * The Eviction Policy which should be used for Virtual Machines within the Virtual Machine Scale Set powering this Node Pool. Possible values are `Deallocate` and `Delete`. Changing this forces a new resource to be created.
     */
    readonly evictionPolicy: pulumi.Output<string | undefined>;
    /**
     * Should the nodes in this Node Pool have Federal Information Processing Standard enabled? Changing this forces a new resource to be created.
     */
    readonly fipsEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A `kubeletConfig` block as defined below.
     */
    readonly kubeletConfig: pulumi.Output<outputs.containerservice.KubernetesClusterNodePoolKubeletConfig | undefined>;
    /**
     * The type of disk used by kubelet. Possible values are `OS` and `Temporary`.
     */
    readonly kubeletDiskType: pulumi.Output<string>;
    /**
     * The ID of the Kubernetes Cluster where this Node Pool should exist. Changing this forces a new resource to be created.
     */
    readonly kubernetesClusterId: pulumi.Output<string>;
    /**
     * A `linuxOsConfig` block as defined below.
     */
    readonly linuxOsConfig: pulumi.Output<outputs.containerservice.KubernetesClusterNodePoolLinuxOsConfig | undefined>;
    /**
     * The maximum number of nodes which should exist within this Node Pool. Valid values are between `0` and `1000` and must be greater than or equal to `minCount`.
     */
    readonly maxCount: pulumi.Output<number | undefined>;
    /**
     * The maximum number of pods that can run on each agent. Changing this forces a new resource to be created.
     */
    readonly maxPods: pulumi.Output<number>;
    /**
     * The minimum number of nodes which should exist within this Node Pool. Valid values are between `0` and `1000` and must be less than or equal to `maxCount`.
     */
    readonly minCount: pulumi.Output<number | undefined>;
    /**
     * Should this Node Pool be used for System or User resources? Possible values are `System` and `User`. Defaults to `User`.
     */
    readonly mode: pulumi.Output<string | undefined>;
    /**
     * The name of the Node Pool which should be created within the Kubernetes Cluster. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The initial number of nodes which should exist within this Node Pool. Valid values are between `0` and `1000` (inclusive) for user pools and between `1` and `1000` (inclusive) for system pools and must be a value in the range `minCount` - `maxCount`.
     */
    readonly nodeCount: pulumi.Output<number>;
    /**
     * A map of Kubernetes labels which should be applied to nodes in this Node Pool. Changing this forces a new resource to be created.
     */
    readonly nodeLabels: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * Resource ID for the Public IP Addresses Prefix for the nodes in this Node Pool. `enableNodePublicIp` should be `true`. Changing this forces a new resource to be created.
     */
    readonly nodePublicIpPrefixId: pulumi.Output<string | undefined>;
    /**
     * A list of Kubernetes taints which should be applied to nodes in the agent pool (e.g `key=value:NoSchedule`). Changing this forces a new resource to be created.
     */
    readonly nodeTaints: pulumi.Output<string[] | undefined>;
    /**
     * Version of Kubernetes used for the Agents. If not specified, the latest recommended version will be used at provisioning time (but won't auto-upgrade)
     */
    readonly orchestratorVersion: pulumi.Output<string>;
    /**
     * The Agent Operating System disk size in GB. Changing this forces a new resource to be created.
     */
    readonly osDiskSizeGb: pulumi.Output<number>;
    /**
     * The type of disk which should be used for the Operating System. Possible values are `Ephemeral` and `Managed`. Defaults to `Managed`. Changing this forces a new resource to be created.
     */
    readonly osDiskType: pulumi.Output<string | undefined>;
    /**
     * OsSKU to be used to specify Linux OSType. Not applicable to Windows OSType. Possible values include: `Ubuntu`, `CBLMariner`. Defaults to `Ubuntu`. Changing this forces a new resource to be created.
     */
    readonly osSku: pulumi.Output<string>;
    /**
     * The Operating System which should be used for this Node Pool. Changing this forces a new resource to be created. Possible values are `Linux` and `Windows`. Defaults to `Linux`.
     */
    readonly osType: pulumi.Output<string | undefined>;
    /**
     * The ID of the Subnet where the pods in the Node Pool should exist. Changing this forces a new resource to be created.
     */
    readonly podSubnetId: pulumi.Output<string | undefined>;
    /**
     * The Priority for Virtual Machines within the Virtual Machine Scale Set that powers this Node Pool. Possible values are `Regular` and `Spot`. Defaults to `Regular`. Changing this forces a new resource to be created.
     */
    readonly priority: pulumi.Output<string | undefined>;
    /**
     * The ID of the Proximity Placement Group where the Virtual Machine Scale Set that powers this Node Pool will be placed. Changing this forces a new resource to be created.
     */
    readonly proximityPlacementGroupId: pulumi.Output<string | undefined>;
    /**
     * Specifies how the node pool should deal with scaled-down nodes. Allowed values are `Delete` and `Deallocate`. Defaults to `Delete`.
     */
    readonly scaleDownMode: pulumi.Output<string | undefined>;
    /**
     * The maximum price you're willing to pay in USD per Virtual Machine. Valid values are `-1` (the current on-demand price for a Virtual Machine) or a positive value with up to five decimal places. Changing this forces a new resource to be created.
     */
    readonly spotMaxPrice: pulumi.Output<number | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Used to specify whether the UltraSSD is enabled in the Node Pool. Defaults to `false`. See [the documentation](https://docs.microsoft.com/en-us/azure/aks/use-ultra-disks) for more information.
     */
    readonly ultraSsdEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A `upgradeSettings` block as documented below.
     */
    readonly upgradeSettings: pulumi.Output<outputs.containerservice.KubernetesClusterNodePoolUpgradeSettings | undefined>;
    /**
     * The SKU which should be used for the Virtual Machines used in this Node Pool. Changing this forces a new resource to be created.
     */
    readonly vmSize: pulumi.Output<string>;
    /**
     * The ID of the Subnet where this Node Pool should exist.
     */
    readonly vnetSubnetId: pulumi.Output<string | undefined>;
    /**
     * Used to specify the workload runtime. Allowed values are `OCIContainer` and `WasmWasi`.
     */
    readonly workloadRuntime: pulumi.Output<string | undefined>;
    /**
     * Create a KubernetesClusterNodePool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KubernetesClusterNodePoolArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering KubernetesClusterNodePool resources.
 */
export interface KubernetesClusterNodePoolState {
    /**
     * A list of Availability Zones where the Nodes in this Node Pool should be created in. Changing this forces a new resource to be created.
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to enable [auto-scaler](https://docs.microsoft.com/en-us/azure/aks/cluster-autoscaler). Defaults to `false`.
     */
    enableAutoScaling?: pulumi.Input<boolean>;
    /**
     * Should the nodes in this Node Pool have host encryption enabled? Defaults to `false`.
     */
    enableHostEncryption?: pulumi.Input<boolean>;
    /**
     * Should each node have a Public IP Address? Defaults to `false`.  Changing this forces a new resource to be created.
     */
    enableNodePublicIp?: pulumi.Input<boolean>;
    /**
     * The Eviction Policy which should be used for Virtual Machines within the Virtual Machine Scale Set powering this Node Pool. Possible values are `Deallocate` and `Delete`. Changing this forces a new resource to be created.
     */
    evictionPolicy?: pulumi.Input<string>;
    /**
     * Should the nodes in this Node Pool have Federal Information Processing Standard enabled? Changing this forces a new resource to be created.
     */
    fipsEnabled?: pulumi.Input<boolean>;
    /**
     * A `kubeletConfig` block as defined below.
     */
    kubeletConfig?: pulumi.Input<inputs.containerservice.KubernetesClusterNodePoolKubeletConfig>;
    /**
     * The type of disk used by kubelet. Possible values are `OS` and `Temporary`.
     */
    kubeletDiskType?: pulumi.Input<string>;
    /**
     * The ID of the Kubernetes Cluster where this Node Pool should exist. Changing this forces a new resource to be created.
     */
    kubernetesClusterId?: pulumi.Input<string>;
    /**
     * A `linuxOsConfig` block as defined below.
     */
    linuxOsConfig?: pulumi.Input<inputs.containerservice.KubernetesClusterNodePoolLinuxOsConfig>;
    /**
     * The maximum number of nodes which should exist within this Node Pool. Valid values are between `0` and `1000` and must be greater than or equal to `minCount`.
     */
    maxCount?: pulumi.Input<number>;
    /**
     * The maximum number of pods that can run on each agent. Changing this forces a new resource to be created.
     */
    maxPods?: pulumi.Input<number>;
    /**
     * The minimum number of nodes which should exist within this Node Pool. Valid values are between `0` and `1000` and must be less than or equal to `maxCount`.
     */
    minCount?: pulumi.Input<number>;
    /**
     * Should this Node Pool be used for System or User resources? Possible values are `System` and `User`. Defaults to `User`.
     */
    mode?: pulumi.Input<string>;
    /**
     * The name of the Node Pool which should be created within the Kubernetes Cluster. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The initial number of nodes which should exist within this Node Pool. Valid values are between `0` and `1000` (inclusive) for user pools and between `1` and `1000` (inclusive) for system pools and must be a value in the range `minCount` - `maxCount`.
     */
    nodeCount?: pulumi.Input<number>;
    /**
     * A map of Kubernetes labels which should be applied to nodes in this Node Pool. Changing this forces a new resource to be created.
     */
    nodeLabels?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Resource ID for the Public IP Addresses Prefix for the nodes in this Node Pool. `enableNodePublicIp` should be `true`. Changing this forces a new resource to be created.
     */
    nodePublicIpPrefixId?: pulumi.Input<string>;
    /**
     * A list of Kubernetes taints which should be applied to nodes in the agent pool (e.g `key=value:NoSchedule`). Changing this forces a new resource to be created.
     */
    nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Version of Kubernetes used for the Agents. If not specified, the latest recommended version will be used at provisioning time (but won't auto-upgrade)
     */
    orchestratorVersion?: pulumi.Input<string>;
    /**
     * The Agent Operating System disk size in GB. Changing this forces a new resource to be created.
     */
    osDiskSizeGb?: pulumi.Input<number>;
    /**
     * The type of disk which should be used for the Operating System. Possible values are `Ephemeral` and `Managed`. Defaults to `Managed`. Changing this forces a new resource to be created.
     */
    osDiskType?: pulumi.Input<string>;
    /**
     * OsSKU to be used to specify Linux OSType. Not applicable to Windows OSType. Possible values include: `Ubuntu`, `CBLMariner`. Defaults to `Ubuntu`. Changing this forces a new resource to be created.
     */
    osSku?: pulumi.Input<string>;
    /**
     * The Operating System which should be used for this Node Pool. Changing this forces a new resource to be created. Possible values are `Linux` and `Windows`. Defaults to `Linux`.
     */
    osType?: pulumi.Input<string>;
    /**
     * The ID of the Subnet where the pods in the Node Pool should exist. Changing this forces a new resource to be created.
     */
    podSubnetId?: pulumi.Input<string>;
    /**
     * The Priority for Virtual Machines within the Virtual Machine Scale Set that powers this Node Pool. Possible values are `Regular` and `Spot`. Defaults to `Regular`. Changing this forces a new resource to be created.
     */
    priority?: pulumi.Input<string>;
    /**
     * The ID of the Proximity Placement Group where the Virtual Machine Scale Set that powers this Node Pool will be placed. Changing this forces a new resource to be created.
     */
    proximityPlacementGroupId?: pulumi.Input<string>;
    /**
     * Specifies how the node pool should deal with scaled-down nodes. Allowed values are `Delete` and `Deallocate`. Defaults to `Delete`.
     */
    scaleDownMode?: pulumi.Input<string>;
    /**
     * The maximum price you're willing to pay in USD per Virtual Machine. Valid values are `-1` (the current on-demand price for a Virtual Machine) or a positive value with up to five decimal places. Changing this forces a new resource to be created.
     */
    spotMaxPrice?: pulumi.Input<number>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Used to specify whether the UltraSSD is enabled in the Node Pool. Defaults to `false`. See [the documentation](https://docs.microsoft.com/en-us/azure/aks/use-ultra-disks) for more information.
     */
    ultraSsdEnabled?: pulumi.Input<boolean>;
    /**
     * A `upgradeSettings` block as documented below.
     */
    upgradeSettings?: pulumi.Input<inputs.containerservice.KubernetesClusterNodePoolUpgradeSettings>;
    /**
     * The SKU which should be used for the Virtual Machines used in this Node Pool. Changing this forces a new resource to be created.
     */
    vmSize?: pulumi.Input<string>;
    /**
     * The ID of the Subnet where this Node Pool should exist.
     */
    vnetSubnetId?: pulumi.Input<string>;
    /**
     * Used to specify the workload runtime. Allowed values are `OCIContainer` and `WasmWasi`.
     */
    workloadRuntime?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a KubernetesClusterNodePool resource.
 */
export interface KubernetesClusterNodePoolArgs {
    /**
     * A list of Availability Zones where the Nodes in this Node Pool should be created in. Changing this forces a new resource to be created.
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to enable [auto-scaler](https://docs.microsoft.com/en-us/azure/aks/cluster-autoscaler). Defaults to `false`.
     */
    enableAutoScaling?: pulumi.Input<boolean>;
    /**
     * Should the nodes in this Node Pool have host encryption enabled? Defaults to `false`.
     */
    enableHostEncryption?: pulumi.Input<boolean>;
    /**
     * Should each node have a Public IP Address? Defaults to `false`.  Changing this forces a new resource to be created.
     */
    enableNodePublicIp?: pulumi.Input<boolean>;
    /**
     * The Eviction Policy which should be used for Virtual Machines within the Virtual Machine Scale Set powering this Node Pool. Possible values are `Deallocate` and `Delete`. Changing this forces a new resource to be created.
     */
    evictionPolicy?: pulumi.Input<string>;
    /**
     * Should the nodes in this Node Pool have Federal Information Processing Standard enabled? Changing this forces a new resource to be created.
     */
    fipsEnabled?: pulumi.Input<boolean>;
    /**
     * A `kubeletConfig` block as defined below.
     */
    kubeletConfig?: pulumi.Input<inputs.containerservice.KubernetesClusterNodePoolKubeletConfig>;
    /**
     * The type of disk used by kubelet. Possible values are `OS` and `Temporary`.
     */
    kubeletDiskType?: pulumi.Input<string>;
    /**
     * The ID of the Kubernetes Cluster where this Node Pool should exist. Changing this forces a new resource to be created.
     */
    kubernetesClusterId: pulumi.Input<string>;
    /**
     * A `linuxOsConfig` block as defined below.
     */
    linuxOsConfig?: pulumi.Input<inputs.containerservice.KubernetesClusterNodePoolLinuxOsConfig>;
    /**
     * The maximum number of nodes which should exist within this Node Pool. Valid values are between `0` and `1000` and must be greater than or equal to `minCount`.
     */
    maxCount?: pulumi.Input<number>;
    /**
     * The maximum number of pods that can run on each agent. Changing this forces a new resource to be created.
     */
    maxPods?: pulumi.Input<number>;
    /**
     * The minimum number of nodes which should exist within this Node Pool. Valid values are between `0` and `1000` and must be less than or equal to `maxCount`.
     */
    minCount?: pulumi.Input<number>;
    /**
     * Should this Node Pool be used for System or User resources? Possible values are `System` and `User`. Defaults to `User`.
     */
    mode?: pulumi.Input<string>;
    /**
     * The name of the Node Pool which should be created within the Kubernetes Cluster. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The initial number of nodes which should exist within this Node Pool. Valid values are between `0` and `1000` (inclusive) for user pools and between `1` and `1000` (inclusive) for system pools and must be a value in the range `minCount` - `maxCount`.
     */
    nodeCount?: pulumi.Input<number>;
    /**
     * A map of Kubernetes labels which should be applied to nodes in this Node Pool. Changing this forces a new resource to be created.
     */
    nodeLabels?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Resource ID for the Public IP Addresses Prefix for the nodes in this Node Pool. `enableNodePublicIp` should be `true`. Changing this forces a new resource to be created.
     */
    nodePublicIpPrefixId?: pulumi.Input<string>;
    /**
     * A list of Kubernetes taints which should be applied to nodes in the agent pool (e.g `key=value:NoSchedule`). Changing this forces a new resource to be created.
     */
    nodeTaints?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Version of Kubernetes used for the Agents. If not specified, the latest recommended version will be used at provisioning time (but won't auto-upgrade)
     */
    orchestratorVersion?: pulumi.Input<string>;
    /**
     * The Agent Operating System disk size in GB. Changing this forces a new resource to be created.
     */
    osDiskSizeGb?: pulumi.Input<number>;
    /**
     * The type of disk which should be used for the Operating System. Possible values are `Ephemeral` and `Managed`. Defaults to `Managed`. Changing this forces a new resource to be created.
     */
    osDiskType?: pulumi.Input<string>;
    /**
     * OsSKU to be used to specify Linux OSType. Not applicable to Windows OSType. Possible values include: `Ubuntu`, `CBLMariner`. Defaults to `Ubuntu`. Changing this forces a new resource to be created.
     */
    osSku?: pulumi.Input<string>;
    /**
     * The Operating System which should be used for this Node Pool. Changing this forces a new resource to be created. Possible values are `Linux` and `Windows`. Defaults to `Linux`.
     */
    osType?: pulumi.Input<string>;
    /**
     * The ID of the Subnet where the pods in the Node Pool should exist. Changing this forces a new resource to be created.
     */
    podSubnetId?: pulumi.Input<string>;
    /**
     * The Priority for Virtual Machines within the Virtual Machine Scale Set that powers this Node Pool. Possible values are `Regular` and `Spot`. Defaults to `Regular`. Changing this forces a new resource to be created.
     */
    priority?: pulumi.Input<string>;
    /**
     * The ID of the Proximity Placement Group where the Virtual Machine Scale Set that powers this Node Pool will be placed. Changing this forces a new resource to be created.
     */
    proximityPlacementGroupId?: pulumi.Input<string>;
    /**
     * Specifies how the node pool should deal with scaled-down nodes. Allowed values are `Delete` and `Deallocate`. Defaults to `Delete`.
     */
    scaleDownMode?: pulumi.Input<string>;
    /**
     * The maximum price you're willing to pay in USD per Virtual Machine. Valid values are `-1` (the current on-demand price for a Virtual Machine) or a positive value with up to five decimal places. Changing this forces a new resource to be created.
     */
    spotMaxPrice?: pulumi.Input<number>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Used to specify whether the UltraSSD is enabled in the Node Pool. Defaults to `false`. See [the documentation](https://docs.microsoft.com/en-us/azure/aks/use-ultra-disks) for more information.
     */
    ultraSsdEnabled?: pulumi.Input<boolean>;
    /**
     * A `upgradeSettings` block as documented below.
     */
    upgradeSettings?: pulumi.Input<inputs.containerservice.KubernetesClusterNodePoolUpgradeSettings>;
    /**
     * The SKU which should be used for the Virtual Machines used in this Node Pool. Changing this forces a new resource to be created.
     */
    vmSize: pulumi.Input<string>;
    /**
     * The ID of the Subnet where this Node Pool should exist.
     */
    vnetSubnetId?: pulumi.Input<string>;
    /**
     * Used to specify the workload runtime. Allowed values are `OCIContainer` and `WasmWasi`.
     */
    workloadRuntime?: pulumi.Input<string>;
}
