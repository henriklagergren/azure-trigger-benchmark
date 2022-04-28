import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Resource Group.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.servicefabric.ManagedCluster("example", {
 *     clientConnectionPort: 12345,
 *     httpGatewayPort: 4567,
 *     lbRules: [{
 *         backendPort: 38080,
 *         frontendPort: 80,
 *         probeProtocol: "http",
 *         probeRequestPath: "/test",
 *         protocol: "tcp",
 *     }],
 *     location: "West Europe",
 *     nodeTypes: [{
 *         applicationPortRange: "30000-49000",
 *         dataDiskSizeGb: 130,
 *         ephemeralPortRange: "10000-20000",
 *         name: "test1",
 *         primary: true,
 *         vmImageOffer: "WindowsServer",
 *         vmImagePublisher: "MicrosoftWindowsServer",
 *         vmImageSku: "2019-Datacenter-with-Containers",
 *         vmImageVersion: "latest",
 *         vmInstanceCount: 5,
 *         vmSize: "Standard_DS1_v2",
 *     }],
 *     resourceGroupName: "example",
 * });
 * ```
 *
 * ## Import
 *
 * Resource Groups can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:servicefabric/managedCluster:ManagedCluster example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resourceGroup1/providers/Microsoft.ServiceFabric/managedClusters/clusterName1
 * ```
 */
export declare class ManagedCluster extends pulumi.CustomResource {
    /**
     * Get an existing ManagedCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagedClusterState, opts?: pulumi.CustomResourceOptions): ManagedCluster;
    /**
     * Returns true if the given object is an instance of ManagedCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ManagedCluster;
    /**
     * Controls how connections to the cluster are authenticated. A `authentication` block as defined below.
     */
    readonly authentication: pulumi.Output<outputs.servicefabric.ManagedClusterAuthentication | undefined>;
    /**
     * If true, backup service is enabled.
     */
    readonly backupServiceEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Port to use when connecting to the cluster.
     */
    readonly clientConnectionPort: pulumi.Output<number>;
    /**
     * One or more `customFabricSetting` blocks as defined below.
     */
    readonly customFabricSettings: pulumi.Output<outputs.servicefabric.ManagedClusterCustomFabricSetting[] | undefined>;
    /**
     * Hostname for the cluster. If unset the cluster's name will be used..
     */
    readonly dnsName: pulumi.Output<string>;
    /**
     * If true, DNS service is enabled.
     */
    readonly dnsServiceEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Port that should be used by the Service Fabric Explorer to visualize applications and cluster status.
     */
    readonly httpGatewayPort: pulumi.Output<number>;
    /**
     * One or more `lbRule` blocks as defined below.
     */
    readonly lbRules: pulumi.Output<outputs.servicefabric.ManagedClusterLbRule[]>;
    /**
     * The Azure Region where the Resource Group should exist. Changing this forces a new Resource Group to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Resource Group. Changing this forces a new Resource Group to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * One or more `nodeType` blocks as defined below.
     */
    readonly nodeTypes: pulumi.Output<outputs.servicefabric.ManagedClusterNodeType[] | undefined>;
    /**
     * Administrator password for the VMs that will be created as part of this cluster.
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * The name of the Resource Group where the Resource Group should exist.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * SKU for this cluster.  Changing this forces a new resource to be created. Default is `Basic`, allowed values are either `Basic` or `Standard`.
     */
    readonly sku: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags which should be assigned to the Resource Group.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Upgrade wave for the fabric runtime. Default is `Wave0`, allowed value must be one of `Wave0`, `Wave1`, or `Wave2`.
     */
    readonly upgradeWave: pulumi.Output<string | undefined>;
    /**
     * Administrator password for the VMs that will be created as part of this cluster.
     */
    readonly username: pulumi.Output<string | undefined>;
    /**
     * Create a ManagedCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedClusterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ManagedCluster resources.
 */
export interface ManagedClusterState {
    /**
     * Controls how connections to the cluster are authenticated. A `authentication` block as defined below.
     */
    authentication?: pulumi.Input<inputs.servicefabric.ManagedClusterAuthentication>;
    /**
     * If true, backup service is enabled.
     */
    backupServiceEnabled?: pulumi.Input<boolean>;
    /**
     * Port to use when connecting to the cluster.
     */
    clientConnectionPort?: pulumi.Input<number>;
    /**
     * One or more `customFabricSetting` blocks as defined below.
     */
    customFabricSettings?: pulumi.Input<pulumi.Input<inputs.servicefabric.ManagedClusterCustomFabricSetting>[]>;
    /**
     * Hostname for the cluster. If unset the cluster's name will be used..
     */
    dnsName?: pulumi.Input<string>;
    /**
     * If true, DNS service is enabled.
     */
    dnsServiceEnabled?: pulumi.Input<boolean>;
    /**
     * Port that should be used by the Service Fabric Explorer to visualize applications and cluster status.
     */
    httpGatewayPort?: pulumi.Input<number>;
    /**
     * One or more `lbRule` blocks as defined below.
     */
    lbRules?: pulumi.Input<pulumi.Input<inputs.servicefabric.ManagedClusterLbRule>[]>;
    /**
     * The Azure Region where the Resource Group should exist. Changing this forces a new Resource Group to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Resource Group. Changing this forces a new Resource Group to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `nodeType` blocks as defined below.
     */
    nodeTypes?: pulumi.Input<pulumi.Input<inputs.servicefabric.ManagedClusterNodeType>[]>;
    /**
     * Administrator password for the VMs that will be created as part of this cluster.
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Resource Group should exist.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * SKU for this cluster.  Changing this forces a new resource to be created. Default is `Basic`, allowed values are either `Basic` or `Standard`.
     */
    sku?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Resource Group.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Upgrade wave for the fabric runtime. Default is `Wave0`, allowed value must be one of `Wave0`, `Wave1`, or `Wave2`.
     */
    upgradeWave?: pulumi.Input<string>;
    /**
     * Administrator password for the VMs that will be created as part of this cluster.
     */
    username?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ManagedCluster resource.
 */
export interface ManagedClusterArgs {
    /**
     * Controls how connections to the cluster are authenticated. A `authentication` block as defined below.
     */
    authentication?: pulumi.Input<inputs.servicefabric.ManagedClusterAuthentication>;
    /**
     * If true, backup service is enabled.
     */
    backupServiceEnabled?: pulumi.Input<boolean>;
    /**
     * Port to use when connecting to the cluster.
     */
    clientConnectionPort: pulumi.Input<number>;
    /**
     * One or more `customFabricSetting` blocks as defined below.
     */
    customFabricSettings?: pulumi.Input<pulumi.Input<inputs.servicefabric.ManagedClusterCustomFabricSetting>[]>;
    /**
     * Hostname for the cluster. If unset the cluster's name will be used..
     */
    dnsName?: pulumi.Input<string>;
    /**
     * If true, DNS service is enabled.
     */
    dnsServiceEnabled?: pulumi.Input<boolean>;
    /**
     * Port that should be used by the Service Fabric Explorer to visualize applications and cluster status.
     */
    httpGatewayPort: pulumi.Input<number>;
    /**
     * One or more `lbRule` blocks as defined below.
     */
    lbRules: pulumi.Input<pulumi.Input<inputs.servicefabric.ManagedClusterLbRule>[]>;
    /**
     * The Azure Region where the Resource Group should exist. Changing this forces a new Resource Group to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Resource Group. Changing this forces a new Resource Group to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `nodeType` blocks as defined below.
     */
    nodeTypes?: pulumi.Input<pulumi.Input<inputs.servicefabric.ManagedClusterNodeType>[]>;
    /**
     * Administrator password for the VMs that will be created as part of this cluster.
     */
    password?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Resource Group should exist.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * SKU for this cluster.  Changing this forces a new resource to be created. Default is `Basic`, allowed values are either `Basic` or `Standard`.
     */
    sku?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Resource Group.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Upgrade wave for the fabric runtime. Default is `Wave0`, allowed value must be one of `Wave0`, `Wave1`, or `Wave2`.
     */
    upgradeWave?: pulumi.Input<string>;
    /**
     * Administrator password for the VMs that will be created as part of this cluster.
     */
    username?: pulumi.Input<string>;
}
