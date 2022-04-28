import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Network Connection Monitor.
 *
 * > **NOTE:** Any Network Connection Monitor resource created with API versions 2019-06-01 or earlier (v1) are now incompatible with this provider, which now only supports v2.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleNetworkWatcher = new azure.network.NetworkWatcher("exampleNetworkWatcher", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleSubnet = new azure.network.Subnet("exampleSubnet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.0.2.0/24"],
 * });
 * const exampleNetworkInterface = new azure.network.NetworkInterface("exampleNetworkInterface", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     ipConfigurations: [{
 *         name: "testconfiguration1",
 *         subnetId: exampleSubnet.id,
 *         privateIpAddressAllocation: "Dynamic",
 *     }],
 * });
 * const exampleVirtualMachine = new azure.compute.VirtualMachine("exampleVirtualMachine", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     networkInterfaceIds: [exampleNetworkInterface.id],
 *     vmSize: "Standard_D2s_v3",
 *     storageImageReference: {
 *         publisher: "Canonical",
 *         offer: "UbuntuServer",
 *         sku: "16.04-LTS",
 *         version: "latest",
 *     },
 *     storageOsDisk: {
 *         name: "osdisk-example01",
 *         caching: "ReadWrite",
 *         createOption: "FromImage",
 *         managedDiskType: "Standard_LRS",
 *     },
 *     osProfile: {
 *         computerName: "hostnametest01",
 *         adminUsername: "testadmin",
 *         adminPassword: "Password1234!",
 *     },
 *     osProfileLinuxConfig: {
 *         disablePasswordAuthentication: false,
 *     },
 * });
 * const exampleExtension = new azure.compute.Extension("exampleExtension", {
 *     virtualMachineId: exampleVirtualMachine.id,
 *     publisher: "Microsoft.Azure.NetworkWatcher",
 *     type: "NetworkWatcherAgentLinux",
 *     typeHandlerVersion: "1.4",
 *     autoUpgradeMinorVersion: true,
 * });
 * const exampleAnalyticsWorkspace = new azure.operationalinsights.AnalyticsWorkspace("exampleAnalyticsWorkspace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "pergb2018",
 * });
 * const exampleNetworkConnectionMonitor = new azure.network.NetworkConnectionMonitor("exampleNetworkConnectionMonitor", {
 *     networkWatcherName: exampleNetworkWatcher.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleNetworkWatcher.location,
 *     endpoints: [
 *         {
 *             name: "source",
 *             targetResourceId: exampleVirtualMachine.id,
 *             filter: {
 *                 items: [{
 *                     address: exampleVirtualMachine.id,
 *                     type: "AgentAddress",
 *                 }],
 *                 type: "Include",
 *             },
 *         },
 *         {
 *             name: "destination",
 *             address: "mycompany.io",
 *         },
 *     ],
 *     testConfigurations: [{
 *         name: "tcpName",
 *         protocol: "Tcp",
 *         testFrequencyInSeconds: 60,
 *         tcpConfiguration: {
 *             port: 80,
 *         },
 *     }],
 *     testGroups: [{
 *         name: "exampletg",
 *         destinationEndpoints: ["destination"],
 *         sourceEndpoints: ["source"],
 *         testConfigurationNames: ["tcpName"],
 *         disable: false,
 *     }],
 *     notes: "examplenote",
 *     outputWorkspaceResourceIds: [exampleAnalyticsWorkspace.id],
 * }, {
 *     dependsOn: [exampleExtension],
 * });
 * ```
 *
 * ## Import
 *
 * Network Connection Monitors can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/networkConnectionMonitor:NetworkConnectionMonitor example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/networkWatchers/watcher1/connectionMonitors/connectionMonitor1
 * ```
 */
export declare class NetworkConnectionMonitor extends pulumi.CustomResource {
    /**
     * Get an existing NetworkConnectionMonitor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkConnectionMonitorState, opts?: pulumi.CustomResourceOptions): NetworkConnectionMonitor;
    /**
     * Returns true if the given object is an instance of NetworkConnectionMonitor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NetworkConnectionMonitor;
    /**
     * @deprecated The field belongs to the v1 network connection monitor, which is now deprecated in favour of v2 by Azure. Please check the document (https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html) for the v2 properties.
     */
    readonly autoStart: pulumi.Output<boolean>;
    /**
     * @deprecated The field belongs to the v1 network connection monitor, which is now deprecated in favour of v2 by Azure. Please check the document (https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html) for the v2 properties.
     */
    readonly destination: pulumi.Output<outputs.network.NetworkConnectionMonitorDestination>;
    /**
     * A `endpoint` block as defined below.
     */
    readonly endpoints: pulumi.Output<outputs.network.NetworkConnectionMonitorEndpoint[]>;
    /**
     * @deprecated The field belongs to the v1 network connection monitor, which is now deprecated in favour of v2 by Azure. Please check the document (https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html) for the v2 properties.
     */
    readonly intervalInSeconds: pulumi.Output<number>;
    /**
     * The Azure Region where the Network Connection Monitor should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Network Connection Monitor. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the Network Watcher. Changing this forces a new resource to be created.
     */
    readonly networkWatcherId: pulumi.Output<string>;
    /**
     * The description of the Network Connection Monitor.
     */
    readonly notes: pulumi.Output<string | undefined>;
    /**
     * A list of IDs of the Log Analytics Workspace which will accept the output from the Network Connection Monitor.
     */
    readonly outputWorkspaceResourceIds: pulumi.Output<string[]>;
    /**
     * @deprecated The field belongs to the v1 network connection monitor, which is now deprecated in favour of v2 by Azure. Please check the document (https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html) for the v2 properties.
     */
    readonly source: pulumi.Output<outputs.network.NetworkConnectionMonitorSource>;
    /**
     * A mapping of tags which should be assigned to the Network Connection Monitor.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * A `testConfiguration` block as defined below.
     */
    readonly testConfigurations: pulumi.Output<outputs.network.NetworkConnectionMonitorTestConfiguration[]>;
    /**
     * A `testGroup` block as defined below.
     */
    readonly testGroups: pulumi.Output<outputs.network.NetworkConnectionMonitorTestGroup[]>;
    /**
     * Create a NetworkConnectionMonitor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkConnectionMonitorArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NetworkConnectionMonitor resources.
 */
export interface NetworkConnectionMonitorState {
    /**
     * @deprecated The field belongs to the v1 network connection monitor, which is now deprecated in favour of v2 by Azure. Please check the document (https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html) for the v2 properties.
     */
    autoStart?: pulumi.Input<boolean>;
    /**
     * @deprecated The field belongs to the v1 network connection monitor, which is now deprecated in favour of v2 by Azure. Please check the document (https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html) for the v2 properties.
     */
    destination?: pulumi.Input<inputs.network.NetworkConnectionMonitorDestination>;
    /**
     * A `endpoint` block as defined below.
     */
    endpoints?: pulumi.Input<pulumi.Input<inputs.network.NetworkConnectionMonitorEndpoint>[]>;
    /**
     * @deprecated The field belongs to the v1 network connection monitor, which is now deprecated in favour of v2 by Azure. Please check the document (https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html) for the v2 properties.
     */
    intervalInSeconds?: pulumi.Input<number>;
    /**
     * The Azure Region where the Network Connection Monitor should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Network Connection Monitor. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Network Watcher. Changing this forces a new resource to be created.
     */
    networkWatcherId?: pulumi.Input<string>;
    /**
     * The description of the Network Connection Monitor.
     */
    notes?: pulumi.Input<string>;
    /**
     * A list of IDs of the Log Analytics Workspace which will accept the output from the Network Connection Monitor.
     */
    outputWorkspaceResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * @deprecated The field belongs to the v1 network connection monitor, which is now deprecated in favour of v2 by Azure. Please check the document (https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html) for the v2 properties.
     */
    source?: pulumi.Input<inputs.network.NetworkConnectionMonitorSource>;
    /**
     * A mapping of tags which should be assigned to the Network Connection Monitor.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `testConfiguration` block as defined below.
     */
    testConfigurations?: pulumi.Input<pulumi.Input<inputs.network.NetworkConnectionMonitorTestConfiguration>[]>;
    /**
     * A `testGroup` block as defined below.
     */
    testGroups?: pulumi.Input<pulumi.Input<inputs.network.NetworkConnectionMonitorTestGroup>[]>;
}
/**
 * The set of arguments for constructing a NetworkConnectionMonitor resource.
 */
export interface NetworkConnectionMonitorArgs {
    /**
     * @deprecated The field belongs to the v1 network connection monitor, which is now deprecated in favour of v2 by Azure. Please check the document (https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html) for the v2 properties.
     */
    autoStart?: pulumi.Input<boolean>;
    /**
     * @deprecated The field belongs to the v1 network connection monitor, which is now deprecated in favour of v2 by Azure. Please check the document (https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html) for the v2 properties.
     */
    destination?: pulumi.Input<inputs.network.NetworkConnectionMonitorDestination>;
    /**
     * A `endpoint` block as defined below.
     */
    endpoints: pulumi.Input<pulumi.Input<inputs.network.NetworkConnectionMonitorEndpoint>[]>;
    /**
     * @deprecated The field belongs to the v1 network connection monitor, which is now deprecated in favour of v2 by Azure. Please check the document (https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html) for the v2 properties.
     */
    intervalInSeconds?: pulumi.Input<number>;
    /**
     * The Azure Region where the Network Connection Monitor should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Network Connection Monitor. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Network Watcher. Changing this forces a new resource to be created.
     */
    networkWatcherId: pulumi.Input<string>;
    /**
     * The description of the Network Connection Monitor.
     */
    notes?: pulumi.Input<string>;
    /**
     * A list of IDs of the Log Analytics Workspace which will accept the output from the Network Connection Monitor.
     */
    outputWorkspaceResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * @deprecated The field belongs to the v1 network connection monitor, which is now deprecated in favour of v2 by Azure. Please check the document (https://www.terraform.io/docs/providers/azurerm/r/network_connection_monitor.html) for the v2 properties.
     */
    source?: pulumi.Input<inputs.network.NetworkConnectionMonitorSource>;
    /**
     * A mapping of tags which should be assigned to the Network Connection Monitor.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `testConfiguration` block as defined below.
     */
    testConfigurations: pulumi.Input<pulumi.Input<inputs.network.NetworkConnectionMonitorTestConfiguration>[]>;
    /**
     * A `testGroup` block as defined below.
     */
    testGroups: pulumi.Input<pulumi.Input<inputs.network.NetworkConnectionMonitorTestGroup>[]>;
}
