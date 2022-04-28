import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Orchestrated Virtual Machine Scale Set.
 *
 * ## Disclaimers
 *
 * > **NOTE:** As of the **v2.86.0** (November 19, 2021) release of the provider this resource will only create Virtual Machine Scale Sets with the **Flexible** Orchestration Mode.
 *
 * > **NOTE:** All arguments including the administrator login and password will be stored in the raw state as plain-text. [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleOrchestratedVirtualMachineScaleSet = new azure.compute.OrchestratedVirtualMachineScaleSet("exampleOrchestratedVirtualMachineScaleSet", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     platformFaultDomainCount: 1,
 *     zones: ["1"],
 * });
 * ```
 *
 * ## Import
 *
 * An Orchestrated Virtual Machine Scale Set can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:compute/orchestratedVirtualMachineScaleSet:OrchestratedVirtualMachineScaleSet example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/Microsoft.Compute/virtualMachineScaleSets/scaleset1
 * ```
 */
export declare class OrchestratedVirtualMachineScaleSet extends pulumi.CustomResource {
    /**
     * Get an existing OrchestratedVirtualMachineScaleSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrchestratedVirtualMachineScaleSetState, opts?: pulumi.CustomResourceOptions): OrchestratedVirtualMachineScaleSet;
    /**
     * Returns true if the given object is an instance of OrchestratedVirtualMachineScaleSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is OrchestratedVirtualMachineScaleSet;
    readonly automaticInstanceRepair: pulumi.Output<outputs.compute.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair>;
    readonly bootDiagnostics: pulumi.Output<outputs.compute.OrchestratedVirtualMachineScaleSetBootDiagnostics | undefined>;
    readonly dataDisks: pulumi.Output<outputs.compute.OrchestratedVirtualMachineScaleSetDataDisk[] | undefined>;
    readonly encryptionAtHostEnabled: pulumi.Output<boolean | undefined>;
    readonly evictionPolicy: pulumi.Output<string | undefined>;
    readonly extensions: pulumi.Output<outputs.compute.OrchestratedVirtualMachineScaleSetExtension[]>;
    /**
     * Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M).
     */
    readonly extensionsTimeBudget: pulumi.Output<string | undefined>;
    readonly identity: pulumi.Output<outputs.compute.OrchestratedVirtualMachineScaleSetIdentity | undefined>;
    /**
     * The number of Virtual Machines in the Orcestrated Virtual Machine Scale Set.
     */
    readonly instances: pulumi.Output<number>;
    readonly licenseType: pulumi.Output<string | undefined>;
    /**
     * The Azure location where the Orchestrated Virtual Machine Scale Set should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    readonly maxBidPrice: pulumi.Output<number | undefined>;
    /**
     * The name of the Orchestrated Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    readonly networkInterfaces: pulumi.Output<outputs.compute.OrchestratedVirtualMachineScaleSetNetworkInterface[] | undefined>;
    readonly osDisk: pulumi.Output<outputs.compute.OrchestratedVirtualMachineScaleSetOsDisk | undefined>;
    readonly osProfile: pulumi.Output<outputs.compute.OrchestratedVirtualMachineScaleSetOsProfile | undefined>;
    readonly plan: pulumi.Output<outputs.compute.OrchestratedVirtualMachineScaleSetPlan | undefined>;
    /**
     * Specifies the number of fault domains that are used by this Orchestrated Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    readonly platformFaultDomainCount: pulumi.Output<number>;
    readonly priority: pulumi.Output<string | undefined>;
    /**
     * The ID of the Proximity Placement Group which the Orchestrated Virtual Machine should be assigned to. Changing this forces a new resource to be created.
     */
    readonly proximityPlacementGroupId: pulumi.Output<string | undefined>;
    /**
     * The name of the Resource Group in which the Orchestrated Virtual Machine Scale Set should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    readonly skuName: pulumi.Output<string | undefined>;
    readonly sourceImageId: pulumi.Output<string | undefined>;
    /**
     * A `sourceImageReference` block as defined below.
     */
    readonly sourceImageReference: pulumi.Output<outputs.compute.OrchestratedVirtualMachineScaleSetSourceImageReference | undefined>;
    /**
     * A mapping of tags which should be assigned to this Orchestrated Virtual Machine Scale Set.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    readonly terminationNotification: pulumi.Output<outputs.compute.OrchestratedVirtualMachineScaleSetTerminationNotification>;
    /**
     * The Unique ID for the Orchestrated Virtual Machine Scale Set.
     */
    readonly uniqueId: pulumi.Output<string>;
    readonly zoneBalance: pulumi.Output<boolean | undefined>;
    /**
     * A list of Availability Zones in which the Virtual Machines in this Scale Set should be created in. Changing this forces a new resource to be created.
     */
    readonly zones: pulumi.Output<string | undefined>;
    /**
     * Create a OrchestratedVirtualMachineScaleSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrchestratedVirtualMachineScaleSetArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering OrchestratedVirtualMachineScaleSet resources.
 */
export interface OrchestratedVirtualMachineScaleSetState {
    automaticInstanceRepair?: pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair>;
    bootDiagnostics?: pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetBootDiagnostics>;
    dataDisks?: pulumi.Input<pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetDataDisk>[]>;
    encryptionAtHostEnabled?: pulumi.Input<boolean>;
    evictionPolicy?: pulumi.Input<string>;
    extensions?: pulumi.Input<pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetExtension>[]>;
    /**
     * Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M).
     */
    extensionsTimeBudget?: pulumi.Input<string>;
    identity?: pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetIdentity>;
    /**
     * The number of Virtual Machines in the Orcestrated Virtual Machine Scale Set.
     */
    instances?: pulumi.Input<number>;
    licenseType?: pulumi.Input<string>;
    /**
     * The Azure location where the Orchestrated Virtual Machine Scale Set should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    maxBidPrice?: pulumi.Input<number>;
    /**
     * The name of the Orchestrated Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    networkInterfaces?: pulumi.Input<pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetNetworkInterface>[]>;
    osDisk?: pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetOsDisk>;
    osProfile?: pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetOsProfile>;
    plan?: pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetPlan>;
    /**
     * Specifies the number of fault domains that are used by this Orchestrated Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    platformFaultDomainCount?: pulumi.Input<number>;
    priority?: pulumi.Input<string>;
    /**
     * The ID of the Proximity Placement Group which the Orchestrated Virtual Machine should be assigned to. Changing this forces a new resource to be created.
     */
    proximityPlacementGroupId?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Orchestrated Virtual Machine Scale Set should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    skuName?: pulumi.Input<string>;
    sourceImageId?: pulumi.Input<string>;
    /**
     * A `sourceImageReference` block as defined below.
     */
    sourceImageReference?: pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetSourceImageReference>;
    /**
     * A mapping of tags which should be assigned to this Orchestrated Virtual Machine Scale Set.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    terminationNotification?: pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetTerminationNotification>;
    /**
     * The Unique ID for the Orchestrated Virtual Machine Scale Set.
     */
    uniqueId?: pulumi.Input<string>;
    zoneBalance?: pulumi.Input<boolean>;
    /**
     * A list of Availability Zones in which the Virtual Machines in this Scale Set should be created in. Changing this forces a new resource to be created.
     */
    zones?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a OrchestratedVirtualMachineScaleSet resource.
 */
export interface OrchestratedVirtualMachineScaleSetArgs {
    automaticInstanceRepair?: pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetAutomaticInstanceRepair>;
    bootDiagnostics?: pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetBootDiagnostics>;
    dataDisks?: pulumi.Input<pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetDataDisk>[]>;
    encryptionAtHostEnabled?: pulumi.Input<boolean>;
    evictionPolicy?: pulumi.Input<string>;
    extensions?: pulumi.Input<pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetExtension>[]>;
    /**
     * Specifies the time alloted for all extensions to start. The time duration should be between 15 minutes and 120 minutes (inclusive) and should be specified in ISO 8601 format. The default value is 90 minutes (PT1H30M).
     */
    extensionsTimeBudget?: pulumi.Input<string>;
    identity?: pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetIdentity>;
    /**
     * The number of Virtual Machines in the Orcestrated Virtual Machine Scale Set.
     */
    instances?: pulumi.Input<number>;
    licenseType?: pulumi.Input<string>;
    /**
     * The Azure location where the Orchestrated Virtual Machine Scale Set should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    maxBidPrice?: pulumi.Input<number>;
    /**
     * The name of the Orchestrated Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    networkInterfaces?: pulumi.Input<pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetNetworkInterface>[]>;
    osDisk?: pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetOsDisk>;
    osProfile?: pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetOsProfile>;
    plan?: pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetPlan>;
    /**
     * Specifies the number of fault domains that are used by this Orchestrated Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    platformFaultDomainCount: pulumi.Input<number>;
    priority?: pulumi.Input<string>;
    /**
     * The ID of the Proximity Placement Group which the Orchestrated Virtual Machine should be assigned to. Changing this forces a new resource to be created.
     */
    proximityPlacementGroupId?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Orchestrated Virtual Machine Scale Set should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    skuName?: pulumi.Input<string>;
    sourceImageId?: pulumi.Input<string>;
    /**
     * A `sourceImageReference` block as defined below.
     */
    sourceImageReference?: pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetSourceImageReference>;
    /**
     * A mapping of tags which should be assigned to this Orchestrated Virtual Machine Scale Set.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    terminationNotification?: pulumi.Input<inputs.compute.OrchestratedVirtualMachineScaleSetTerminationNotification>;
    zoneBalance?: pulumi.Input<boolean>;
    /**
     * A list of Availability Zones in which the Virtual Machines in this Scale Set should be created in. Changing this forces a new resource to be created.
     */
    zones?: pulumi.Input<string>;
}
