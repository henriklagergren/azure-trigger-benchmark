import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Service Fabric Cluster.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleCluster = new azure.servicefabric.Cluster("exampleCluster", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     reliabilityLevel: "Bronze",
 *     upgradeMode: "Manual",
 *     clusterCodeVersion: "7.1.456.959",
 *     vmImage: "Windows",
 *     managementEndpoint: "https://example:80",
 *     nodeTypes: [{
 *         name: "first",
 *         instanceCount: 3,
 *         isPrimary: true,
 *         clientEndpointPort: 2020,
 *         httpEndpointPort: 80,
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Service Fabric Clusters can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:servicefabric/cluster:Cluster cluster1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.ServiceFabric/clusters/cluster1
 * ```
 */
export declare class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterState, opts?: pulumi.CustomResourceOptions): Cluster;
    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Cluster;
    /**
     * A List of one or more features which should be enabled, such as `DnsService`.
     */
    readonly addOnFeatures: pulumi.Output<string[] | undefined>;
    /**
     * An `azureActiveDirectory` block as defined below.
     */
    readonly azureActiveDirectory: pulumi.Output<outputs.servicefabric.ClusterAzureActiveDirectory | undefined>;
    /**
     * A `certificate` block as defined below. Conflicts with `certificateCommonNames`.
     */
    readonly certificate: pulumi.Output<outputs.servicefabric.ClusterCertificate | undefined>;
    /**
     * A `certificateCommonNames` block as defined below. Conflicts with `certificate`.
     */
    readonly certificateCommonNames: pulumi.Output<outputs.servicefabric.ClusterCertificateCommonNames | undefined>;
    /**
     * A `clientCertificateCommonName` block as defined below.
     */
    readonly clientCertificateCommonNames: pulumi.Output<outputs.servicefabric.ClusterClientCertificateCommonName[] | undefined>;
    /**
     * One or more `clientCertificateThumbprint` blocks as defined below.
     */
    readonly clientCertificateThumbprints: pulumi.Output<outputs.servicefabric.ClusterClientCertificateThumbprint[] | undefined>;
    /**
     * Required if Upgrade Mode set to `Manual`, Specifies the Version of the Cluster Code of the cluster.
     */
    readonly clusterCodeVersion: pulumi.Output<string>;
    /**
     * The Cluster Endpoint for this Service Fabric Cluster.
     */
    readonly clusterEndpoint: pulumi.Output<string>;
    /**
     * A `diagnosticsConfig` block as defined below. Changing this forces a new resource to be created.
     */
    readonly diagnosticsConfig: pulumi.Output<outputs.servicefabric.ClusterDiagnosticsConfig | undefined>;
    /**
     * One or more `fabricSettings` blocks as defined below.
     */
    readonly fabricSettings: pulumi.Output<outputs.servicefabric.ClusterFabricSetting[] | undefined>;
    /**
     * Specifies the Azure Region where the Service Fabric Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the Management Endpoint of the cluster such as `http://example.com`. Changing this forces a new resource to be created.
     */
    readonly managementEndpoint: pulumi.Output<string>;
    /**
     * The name of the Service Fabric Cluster. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * One or more `nodeType` blocks as defined below.
     */
    readonly nodeTypes: pulumi.Output<outputs.servicefabric.ClusterNodeType[]>;
    /**
     * Specifies the Reliability Level of the Cluster. Possible values include `None`, `Bronze`, `Silver`, `Gold` and `Platinum`.
     */
    readonly reliabilityLevel: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the Service Fabric Cluster exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `reverseProxyCertificate` block as defined below. Conflicts with `reverseProxyCertificateCommonNames`.
     */
    readonly reverseProxyCertificate: pulumi.Output<outputs.servicefabric.ClusterReverseProxyCertificate | undefined>;
    /**
     * A `reverseProxyCertificateCommonNames` block as defined below. Conflicts with `reverseProxyCertificate`.
     */
    readonly reverseProxyCertificateCommonNames: pulumi.Output<outputs.servicefabric.ClusterReverseProxyCertificateCommonNames | undefined>;
    /**
     * Specifies the logical grouping of VMs in upgrade domains. Possible values are `Hierarchical` or `Parallel`.
     */
    readonly serviceFabricZonalUpgradeMode: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the Upgrade Mode of the cluster. Possible values are `Automatic` or `Manual`.
     */
    readonly upgradeMode: pulumi.Output<string>;
    /**
     * A `upgradePolicy` block as defined below.
     */
    readonly upgradePolicy: pulumi.Output<outputs.servicefabric.ClusterUpgradePolicy | undefined>;
    /**
     * Specifies the Image expected for the Service Fabric Cluster, such as `Windows`. Changing this forces a new resource to be created.
     */
    readonly vmImage: pulumi.Output<string>;
    /**
     * Specifies the upgrade mode for the virtual machine scale set updates that happen in all availability zones at once. Possible values are `Hierarchical` or `Parallel`.
     */
    readonly vmssZonalUpgradeMode: pulumi.Output<string | undefined>;
    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Cluster resources.
 */
export interface ClusterState {
    /**
     * A List of one or more features which should be enabled, such as `DnsService`.
     */
    addOnFeatures?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An `azureActiveDirectory` block as defined below.
     */
    azureActiveDirectory?: pulumi.Input<inputs.servicefabric.ClusterAzureActiveDirectory>;
    /**
     * A `certificate` block as defined below. Conflicts with `certificateCommonNames`.
     */
    certificate?: pulumi.Input<inputs.servicefabric.ClusterCertificate>;
    /**
     * A `certificateCommonNames` block as defined below. Conflicts with `certificate`.
     */
    certificateCommonNames?: pulumi.Input<inputs.servicefabric.ClusterCertificateCommonNames>;
    /**
     * A `clientCertificateCommonName` block as defined below.
     */
    clientCertificateCommonNames?: pulumi.Input<pulumi.Input<inputs.servicefabric.ClusterClientCertificateCommonName>[]>;
    /**
     * One or more `clientCertificateThumbprint` blocks as defined below.
     */
    clientCertificateThumbprints?: pulumi.Input<pulumi.Input<inputs.servicefabric.ClusterClientCertificateThumbprint>[]>;
    /**
     * Required if Upgrade Mode set to `Manual`, Specifies the Version of the Cluster Code of the cluster.
     */
    clusterCodeVersion?: pulumi.Input<string>;
    /**
     * The Cluster Endpoint for this Service Fabric Cluster.
     */
    clusterEndpoint?: pulumi.Input<string>;
    /**
     * A `diagnosticsConfig` block as defined below. Changing this forces a new resource to be created.
     */
    diagnosticsConfig?: pulumi.Input<inputs.servicefabric.ClusterDiagnosticsConfig>;
    /**
     * One or more `fabricSettings` blocks as defined below.
     */
    fabricSettings?: pulumi.Input<pulumi.Input<inputs.servicefabric.ClusterFabricSetting>[]>;
    /**
     * Specifies the Azure Region where the Service Fabric Cluster should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the Management Endpoint of the cluster such as `http://example.com`. Changing this forces a new resource to be created.
     */
    managementEndpoint?: pulumi.Input<string>;
    /**
     * The name of the Service Fabric Cluster. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `nodeType` blocks as defined below.
     */
    nodeTypes?: pulumi.Input<pulumi.Input<inputs.servicefabric.ClusterNodeType>[]>;
    /**
     * Specifies the Reliability Level of the Cluster. Possible values include `None`, `Bronze`, `Silver`, `Gold` and `Platinum`.
     */
    reliabilityLevel?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Service Fabric Cluster exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `reverseProxyCertificate` block as defined below. Conflicts with `reverseProxyCertificateCommonNames`.
     */
    reverseProxyCertificate?: pulumi.Input<inputs.servicefabric.ClusterReverseProxyCertificate>;
    /**
     * A `reverseProxyCertificateCommonNames` block as defined below. Conflicts with `reverseProxyCertificate`.
     */
    reverseProxyCertificateCommonNames?: pulumi.Input<inputs.servicefabric.ClusterReverseProxyCertificateCommonNames>;
    /**
     * Specifies the logical grouping of VMs in upgrade domains. Possible values are `Hierarchical` or `Parallel`.
     */
    serviceFabricZonalUpgradeMode?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the Upgrade Mode of the cluster. Possible values are `Automatic` or `Manual`.
     */
    upgradeMode?: pulumi.Input<string>;
    /**
     * A `upgradePolicy` block as defined below.
     */
    upgradePolicy?: pulumi.Input<inputs.servicefabric.ClusterUpgradePolicy>;
    /**
     * Specifies the Image expected for the Service Fabric Cluster, such as `Windows`. Changing this forces a new resource to be created.
     */
    vmImage?: pulumi.Input<string>;
    /**
     * Specifies the upgrade mode for the virtual machine scale set updates that happen in all availability zones at once. Possible values are `Hierarchical` or `Parallel`.
     */
    vmssZonalUpgradeMode?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * A List of one or more features which should be enabled, such as `DnsService`.
     */
    addOnFeatures?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An `azureActiveDirectory` block as defined below.
     */
    azureActiveDirectory?: pulumi.Input<inputs.servicefabric.ClusterAzureActiveDirectory>;
    /**
     * A `certificate` block as defined below. Conflicts with `certificateCommonNames`.
     */
    certificate?: pulumi.Input<inputs.servicefabric.ClusterCertificate>;
    /**
     * A `certificateCommonNames` block as defined below. Conflicts with `certificate`.
     */
    certificateCommonNames?: pulumi.Input<inputs.servicefabric.ClusterCertificateCommonNames>;
    /**
     * A `clientCertificateCommonName` block as defined below.
     */
    clientCertificateCommonNames?: pulumi.Input<pulumi.Input<inputs.servicefabric.ClusterClientCertificateCommonName>[]>;
    /**
     * One or more `clientCertificateThumbprint` blocks as defined below.
     */
    clientCertificateThumbprints?: pulumi.Input<pulumi.Input<inputs.servicefabric.ClusterClientCertificateThumbprint>[]>;
    /**
     * Required if Upgrade Mode set to `Manual`, Specifies the Version of the Cluster Code of the cluster.
     */
    clusterCodeVersion?: pulumi.Input<string>;
    /**
     * A `diagnosticsConfig` block as defined below. Changing this forces a new resource to be created.
     */
    diagnosticsConfig?: pulumi.Input<inputs.servicefabric.ClusterDiagnosticsConfig>;
    /**
     * One or more `fabricSettings` blocks as defined below.
     */
    fabricSettings?: pulumi.Input<pulumi.Input<inputs.servicefabric.ClusterFabricSetting>[]>;
    /**
     * Specifies the Azure Region where the Service Fabric Cluster should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the Management Endpoint of the cluster such as `http://example.com`. Changing this forces a new resource to be created.
     */
    managementEndpoint: pulumi.Input<string>;
    /**
     * The name of the Service Fabric Cluster. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `nodeType` blocks as defined below.
     */
    nodeTypes: pulumi.Input<pulumi.Input<inputs.servicefabric.ClusterNodeType>[]>;
    /**
     * Specifies the Reliability Level of the Cluster. Possible values include `None`, `Bronze`, `Silver`, `Gold` and `Platinum`.
     */
    reliabilityLevel: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Service Fabric Cluster exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `reverseProxyCertificate` block as defined below. Conflicts with `reverseProxyCertificateCommonNames`.
     */
    reverseProxyCertificate?: pulumi.Input<inputs.servicefabric.ClusterReverseProxyCertificate>;
    /**
     * A `reverseProxyCertificateCommonNames` block as defined below. Conflicts with `reverseProxyCertificate`.
     */
    reverseProxyCertificateCommonNames?: pulumi.Input<inputs.servicefabric.ClusterReverseProxyCertificateCommonNames>;
    /**
     * Specifies the logical grouping of VMs in upgrade domains. Possible values are `Hierarchical` or `Parallel`.
     */
    serviceFabricZonalUpgradeMode?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the Upgrade Mode of the cluster. Possible values are `Automatic` or `Manual`.
     */
    upgradeMode: pulumi.Input<string>;
    /**
     * A `upgradePolicy` block as defined below.
     */
    upgradePolicy?: pulumi.Input<inputs.servicefabric.ClusterUpgradePolicy>;
    /**
     * Specifies the Image expected for the Service Fabric Cluster, such as `Windows`. Changing this forces a new resource to be created.
     */
    vmImage: pulumi.Input<string>;
    /**
     * Specifies the upgrade mode for the virtual machine scale set updates that happen in all availability zones at once. Possible values are `Hierarchical` or `Parallel`.
     */
    vmssZonalUpgradeMode?: pulumi.Input<string>;
}
