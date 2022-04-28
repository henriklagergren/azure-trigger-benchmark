import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages automated shutdown schedules for Azure VMs that are not within an Azure DevTest Lab. While this is part of the DevTest Labs service in Azure,
 * this resource applies only to standard VMs, not DevTest Lab VMs. To manage automated shutdown schedules for DevTest Lab VMs, reference the
 * `azure.devtest.Schedule` resource
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
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
 * const exampleLinuxVirtualMachine = new azure.compute.LinuxVirtualMachine("exampleLinuxVirtualMachine", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     networkInterfaceIds: [exampleNetworkInterface.id],
 *     size: "Standard_B2s",
 *     sourceImageReference: {
 *         publisher: "Canonical",
 *         offer: "UbuntuServer",
 *         sku: "16.04-LTS",
 *         version: "latest",
 *     },
 *     osDisk: {
 *         name: `myosdisk-%d`,
 *         caching: "ReadWrite",
 *         managedDiskType: "Standard_LRS",
 *     },
 *     adminUsername: "testadmin",
 *     adminPassword: "Password1234!",
 *     disablePasswordAuthentication: false,
 * });
 * const exampleGlobalVMShutdownSchedule = new azure.devtest.GlobalVMShutdownSchedule("exampleGlobalVMShutdownSchedule", {
 *     virtualMachineId: azurerm_virtual_machine.example.id,
 *     location: exampleResourceGroup.location,
 *     enabled: true,
 *     dailyRecurrenceTime: "1100",
 *     timezone: "Pacific Standard Time",
 *     notificationSettings: {
 *         enabled: true,
 *         timeInMinutes: "60",
 *         webhookUrl: "https://sample-webhook-url.example.com",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * An existing Dev Test Global Shutdown Schedule can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:devtest/globalVMShutdownSchedule:GlobalVMShutdownSchedule example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/sample-rg/providers/Microsoft.DevTestLab/schedules/shutdown-computevm-SampleVM
 * ```
 *
 *  The name of the resource within the `resource id` will always follow the format `shutdown-computevm-<VM Name>` where `<VM Name>` is replaced by the name of the target Virtual Machine
 */
export declare class GlobalVMShutdownSchedule extends pulumi.CustomResource {
    /**
     * Get an existing GlobalVMShutdownSchedule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GlobalVMShutdownScheduleState, opts?: pulumi.CustomResourceOptions): GlobalVMShutdownSchedule;
    /**
     * Returns true if the given object is an instance of GlobalVMShutdownSchedule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is GlobalVMShutdownSchedule;
    /**
     * The time each day when the schedule takes effect. Must match the format HHmm where HH is 00-23 and mm is 00-59 (e.g. 0930, 2300, etc.)
     */
    readonly dailyRecurrenceTime: pulumi.Output<string>;
    /**
     * Whether to enable the schedule. Possible values are `true` and `false`. Defaults to `true`.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * The location where the schedule is created. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    readonly notificationSettings: pulumi.Output<outputs.devtest.GlobalVMShutdownScheduleNotificationSettings>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The time zone ID (e.g. Pacific Standard time). Refer to this guide for a [full list of accepted time zone names](https://jackstromberg.com/2017/01/list-of-time-zones-consumed-by-azure/).
     */
    readonly timezone: pulumi.Output<string>;
    /**
     * The resource ID of the target ARM-based Virtual Machine. Changing this forces a new resource to be created.
     */
    readonly virtualMachineId: pulumi.Output<string>;
    /**
     * Create a GlobalVMShutdownSchedule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GlobalVMShutdownScheduleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering GlobalVMShutdownSchedule resources.
 */
export interface GlobalVMShutdownScheduleState {
    /**
     * The time each day when the schedule takes effect. Must match the format HHmm where HH is 00-23 and mm is 00-59 (e.g. 0930, 2300, etc.)
     */
    dailyRecurrenceTime?: pulumi.Input<string>;
    /**
     * Whether to enable the schedule. Possible values are `true` and `false`. Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The location where the schedule is created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    notificationSettings?: pulumi.Input<inputs.devtest.GlobalVMShutdownScheduleNotificationSettings>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The time zone ID (e.g. Pacific Standard time). Refer to this guide for a [full list of accepted time zone names](https://jackstromberg.com/2017/01/list-of-time-zones-consumed-by-azure/).
     */
    timezone?: pulumi.Input<string>;
    /**
     * The resource ID of the target ARM-based Virtual Machine. Changing this forces a new resource to be created.
     */
    virtualMachineId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a GlobalVMShutdownSchedule resource.
 */
export interface GlobalVMShutdownScheduleArgs {
    /**
     * The time each day when the schedule takes effect. Must match the format HHmm where HH is 00-23 and mm is 00-59 (e.g. 0930, 2300, etc.)
     */
    dailyRecurrenceTime: pulumi.Input<string>;
    /**
     * Whether to enable the schedule. Possible values are `true` and `false`. Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The location where the schedule is created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    notificationSettings: pulumi.Input<inputs.devtest.GlobalVMShutdownScheduleNotificationSettings>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The time zone ID (e.g. Pacific Standard time). Refer to this guide for a [full list of accepted time zone names](https://jackstromberg.com/2017/01/list-of-time-zones-consumed-by-azure/).
     */
    timezone: pulumi.Input<string>;
    /**
     * The resource ID of the target ARM-based Virtual Machine. Changing this forces a new resource to be created.
     */
    virtualMachineId: pulumi.Input<string>;
}
