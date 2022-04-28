import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Configures Network Packet Capturing against a Virtual Machine using a Network Watcher.
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
 *     vmSize: "Standard_F2",
 *     storageImageReference: {
 *         publisher: "Canonical",
 *         offer: "UbuntuServer",
 *         sku: "16.04-LTS",
 *         version: "latest",
 *     },
 *     storageOsDisk: {
 *         name: "osdisk",
 *         caching: "ReadWrite",
 *         createOption: "FromImage",
 *         managedDiskType: "Standard_LRS",
 *     },
 *     osProfile: {
 *         computerName: "pctest-vm",
 *         adminUsername: "testadmin",
 *         adminPassword: "Password1234!",
 *     },
 *     osProfileLinuxConfig: {
 *         disablePasswordAuthentication: false,
 *     },
 * });
 * const exampleExtension = new azure.compute.Extension("exampleExtension", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualMachineName: exampleVirtualMachine.name,
 *     publisher: "Microsoft.Azure.NetworkWatcher",
 *     type: "NetworkWatcherAgentLinux",
 *     typeHandlerVersion: "1.4",
 *     autoUpgradeMinorVersion: true,
 * });
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleNetworkPacketCapture = new azure.network.NetworkPacketCapture("exampleNetworkPacketCapture", {
 *     networkWatcherName: exampleNetworkWatcher.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     targetResourceId: exampleVirtualMachine.id,
 *     storageLocation: {
 *         storageAccountId: exampleAccount.id,
 *     },
 * }, {
 *     dependsOn: [exampleExtension],
 * });
 * ```
 *
 * > **NOTE:** This Resource requires that [the Network Watcher Virtual Machine Extension](https://docs.microsoft.com/azure/network-watcher/network-watcher-packet-capture-manage-portal#before-you-begin) is installed on the Virtual Machine before capturing can be enabled which can be installed via the `azure.compute.Extension` resource.
 *
 * ## Import
 *
 * Packet Captures can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/networkPacketCapture:NetworkPacketCapture capture1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/networkWatchers/watcher1/packetCaptures/capture1
 * ```
 */
export declare class NetworkPacketCapture extends pulumi.CustomResource {
    /**
     * Get an existing NetworkPacketCapture resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkPacketCaptureState, opts?: pulumi.CustomResourceOptions): NetworkPacketCapture;
    /**
     * Returns true if the given object is an instance of NetworkPacketCapture.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NetworkPacketCapture;
    /**
     * One or more `filter` blocks as defined below. Changing this forces a new resource to be created.
     */
    readonly filters: pulumi.Output<outputs.network.NetworkPacketCaptureFilter[] | undefined>;
    /**
     * The number of bytes captured per packet. The remaining bytes are truncated. Defaults to `0` (Entire Packet Captured). Changing this forces a new resource to be created.
     */
    readonly maximumBytesPerPacket: pulumi.Output<number | undefined>;
    /**
     * Maximum size of the capture in Bytes. Defaults to `1073741824` (1GB). Changing this forces a new resource to be created.
     */
    readonly maximumBytesPerSession: pulumi.Output<number | undefined>;
    /**
     * The maximum duration of the capture session in seconds. Defaults to `18000` (5 hours). Changing this forces a new resource to be created.
     */
    readonly maximumCaptureDuration: pulumi.Output<number | undefined>;
    /**
     * The name to use for this Network Packet Capture. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Network Watcher. Changing this forces a new resource to be created.
     */
    readonly networkWatcherName: pulumi.Output<string>;
    /**
     * The name of the resource group in which the Network Watcher exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `storageLocation` block as defined below. Changing this forces a new resource to be created.
     */
    readonly storageLocation: pulumi.Output<outputs.network.NetworkPacketCaptureStorageLocation>;
    /**
     * The ID of the Resource to capture packets from. Changing this forces a new resource to be created.
     */
    readonly targetResourceId: pulumi.Output<string>;
    /**
     * Create a NetworkPacketCapture resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkPacketCaptureArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NetworkPacketCapture resources.
 */
export interface NetworkPacketCaptureState {
    /**
     * One or more `filter` blocks as defined below. Changing this forces a new resource to be created.
     */
    filters?: pulumi.Input<pulumi.Input<inputs.network.NetworkPacketCaptureFilter>[]>;
    /**
     * The number of bytes captured per packet. The remaining bytes are truncated. Defaults to `0` (Entire Packet Captured). Changing this forces a new resource to be created.
     */
    maximumBytesPerPacket?: pulumi.Input<number>;
    /**
     * Maximum size of the capture in Bytes. Defaults to `1073741824` (1GB). Changing this forces a new resource to be created.
     */
    maximumBytesPerSession?: pulumi.Input<number>;
    /**
     * The maximum duration of the capture session in seconds. Defaults to `18000` (5 hours). Changing this forces a new resource to be created.
     */
    maximumCaptureDuration?: pulumi.Input<number>;
    /**
     * The name to use for this Network Packet Capture. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Network Watcher. Changing this forces a new resource to be created.
     */
    networkWatcherName?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Network Watcher exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `storageLocation` block as defined below. Changing this forces a new resource to be created.
     */
    storageLocation?: pulumi.Input<inputs.network.NetworkPacketCaptureStorageLocation>;
    /**
     * The ID of the Resource to capture packets from. Changing this forces a new resource to be created.
     */
    targetResourceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a NetworkPacketCapture resource.
 */
export interface NetworkPacketCaptureArgs {
    /**
     * One or more `filter` blocks as defined below. Changing this forces a new resource to be created.
     */
    filters?: pulumi.Input<pulumi.Input<inputs.network.NetworkPacketCaptureFilter>[]>;
    /**
     * The number of bytes captured per packet. The remaining bytes are truncated. Defaults to `0` (Entire Packet Captured). Changing this forces a new resource to be created.
     */
    maximumBytesPerPacket?: pulumi.Input<number>;
    /**
     * Maximum size of the capture in Bytes. Defaults to `1073741824` (1GB). Changing this forces a new resource to be created.
     */
    maximumBytesPerSession?: pulumi.Input<number>;
    /**
     * The maximum duration of the capture session in seconds. Defaults to `18000` (5 hours). Changing this forces a new resource to be created.
     */
    maximumCaptureDuration?: pulumi.Input<number>;
    /**
     * The name to use for this Network Packet Capture. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Network Watcher. Changing this forces a new resource to be created.
     */
    networkWatcherName: pulumi.Input<string>;
    /**
     * The name of the resource group in which the Network Watcher exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `storageLocation` block as defined below. Changing this forces a new resource to be created.
     */
    storageLocation: pulumi.Input<inputs.network.NetworkPacketCaptureStorageLocation>;
    /**
     * The ID of the Resource to capture packets from. Changing this forces a new resource to be created.
     */
    targetResourceId: pulumi.Input<string>;
}
