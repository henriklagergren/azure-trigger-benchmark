import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Extension for a Virtual Machine Scale Set.
 *
 * > **NOTE:** This resource is not intended to be used with the `azure.compute.ScaleSet` resource - instead it's intended for this to be used with the `azure.compute.LinuxVirtualMachineScaleSet` and `azure.compute.WindowsVirtualMachineScaleSet` resources.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleLinuxVirtualMachineScaleSet = new azure.compute.LinuxVirtualMachineScaleSet("exampleLinuxVirtualMachineScaleSet", {});
 * //...
 * const exampleVirtualMachineScaleSetExtension = new azure.compute.VirtualMachineScaleSetExtension("exampleVirtualMachineScaleSetExtension", {
 *     virtualMachineScaleSetId: exampleLinuxVirtualMachineScaleSet.id,
 *     publisher: "Microsoft.Azure.Extensions",
 *     type: "CustomScript",
 *     typeHandlerVersion: "2.0",
 *     settings: JSON.stringify({
 *         commandToExecute: `echo $HOSTNAME`,
 *     }),
 * });
 * ```
 *
 * ## Import
 *
 * Virtual Machine Scale Set Extensions can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:compute/virtualMachineScaleSetExtension:VirtualMachineScaleSetExtension test /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Compute/virtualMachineScaleSets/scaleSet1/extensions/extension1
 * ```
 */
export declare class VirtualMachineScaleSetExtension extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachineScaleSetExtension resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualMachineScaleSetExtensionState, opts?: pulumi.CustomResourceOptions): VirtualMachineScaleSetExtension;
    /**
     * Returns true if the given object is an instance of VirtualMachineScaleSetExtension.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualMachineScaleSetExtension;
    /**
     * Should the latest version of the Extension be used at Deployment Time, if one is available? This won't auto-update the extension on existing installation. Defaults to `true`.
     */
    readonly autoUpgradeMinorVersion: pulumi.Output<boolean | undefined>;
    /**
     * Should the Extension be automatically updated whenever the Publisher releases a new version of this VM Extension? Defaults to `false`.
     */
    readonly automaticUpgradeEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A value which, when different to the previous value can be used to force-run the Extension even if the Extension Configuration hasn't changed.
     */
    readonly forceUpdateTag: pulumi.Output<string | undefined>;
    /**
     * The name for the Virtual Machine Scale Set Extension. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A JSON String which specifies Sensitive Settings (such as Passwords) for the Extension.
     */
    readonly protectedSettings: pulumi.Output<string | undefined>;
    /**
     * An ordered list of Extension names which this should be provisioned after.
     */
    readonly provisionAfterExtensions: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the Publisher of the Extension. Changing this forces a new resource to be created.
     */
    readonly publisher: pulumi.Output<string>;
    /**
     * A JSON String which specifies Settings for the Extension.
     */
    readonly settings: pulumi.Output<string | undefined>;
    /**
     * Specifies the Type of the Extension. Changing this forces a new resource to be created.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Specifies the version of the extension to use, available versions can be found using the Azure CLI.
     */
    readonly typeHandlerVersion: pulumi.Output<string>;
    /**
     * The ID of the Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    readonly virtualMachineScaleSetId: pulumi.Output<string>;
    /**
     * Create a VirtualMachineScaleSetExtension resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineScaleSetExtensionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering VirtualMachineScaleSetExtension resources.
 */
export interface VirtualMachineScaleSetExtensionState {
    /**
     * Should the latest version of the Extension be used at Deployment Time, if one is available? This won't auto-update the extension on existing installation. Defaults to `true`.
     */
    autoUpgradeMinorVersion?: pulumi.Input<boolean>;
    /**
     * Should the Extension be automatically updated whenever the Publisher releases a new version of this VM Extension? Defaults to `false`.
     */
    automaticUpgradeEnabled?: pulumi.Input<boolean>;
    /**
     * A value which, when different to the previous value can be used to force-run the Extension even if the Extension Configuration hasn't changed.
     */
    forceUpdateTag?: pulumi.Input<string>;
    /**
     * The name for the Virtual Machine Scale Set Extension. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A JSON String which specifies Sensitive Settings (such as Passwords) for the Extension.
     */
    protectedSettings?: pulumi.Input<string>;
    /**
     * An ordered list of Extension names which this should be provisioned after.
     */
    provisionAfterExtensions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the Publisher of the Extension. Changing this forces a new resource to be created.
     */
    publisher?: pulumi.Input<string>;
    /**
     * A JSON String which specifies Settings for the Extension.
     */
    settings?: pulumi.Input<string>;
    /**
     * Specifies the Type of the Extension. Changing this forces a new resource to be created.
     */
    type?: pulumi.Input<string>;
    /**
     * Specifies the version of the extension to use, available versions can be found using the Azure CLI.
     */
    typeHandlerVersion?: pulumi.Input<string>;
    /**
     * The ID of the Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    virtualMachineScaleSetId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a VirtualMachineScaleSetExtension resource.
 */
export interface VirtualMachineScaleSetExtensionArgs {
    /**
     * Should the latest version of the Extension be used at Deployment Time, if one is available? This won't auto-update the extension on existing installation. Defaults to `true`.
     */
    autoUpgradeMinorVersion?: pulumi.Input<boolean>;
    /**
     * Should the Extension be automatically updated whenever the Publisher releases a new version of this VM Extension? Defaults to `false`.
     */
    automaticUpgradeEnabled?: pulumi.Input<boolean>;
    /**
     * A value which, when different to the previous value can be used to force-run the Extension even if the Extension Configuration hasn't changed.
     */
    forceUpdateTag?: pulumi.Input<string>;
    /**
     * The name for the Virtual Machine Scale Set Extension. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A JSON String which specifies Sensitive Settings (such as Passwords) for the Extension.
     */
    protectedSettings?: pulumi.Input<string>;
    /**
     * An ordered list of Extension names which this should be provisioned after.
     */
    provisionAfterExtensions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the Publisher of the Extension. Changing this forces a new resource to be created.
     */
    publisher: pulumi.Input<string>;
    /**
     * A JSON String which specifies Settings for the Extension.
     */
    settings?: pulumi.Input<string>;
    /**
     * Specifies the Type of the Extension. Changing this forces a new resource to be created.
     */
    type: pulumi.Input<string>;
    /**
     * Specifies the version of the extension to use, available versions can be found using the Azure CLI.
     */
    typeHandlerVersion: pulumi.Input<string>;
    /**
     * The ID of the Virtual Machine Scale Set. Changing this forces a new resource to be created.
     */
    virtualMachineScaleSetId: pulumi.Input<string>;
}
