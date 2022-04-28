import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Hostname Binding within an App Service Slot.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePlan = new azure.appservice.Plan("examplePlan", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: {
 *         tier: "Standard",
 *         size: "S1",
 *     },
 * });
 * const exampleAppService = new azure.appservice.AppService("exampleAppService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     appServicePlanId: examplePlan.id,
 * });
 * const exampleSlot = new azure.appservice.Slot("exampleSlot", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     appServiceName: exampleAppService.name,
 *     appServicePlanId: examplePlan.id,
 * });
 * const exampleSlotCustomHostnameBinding = new azure.appservice.SlotCustomHostnameBinding("exampleSlotCustomHostnameBinding", {
 *     appServiceSlotId: exampleSlot.id,
 *     hostname: "www.mywebsite.com",
 * });
 * ```
 *
 * ## Import
 *
 * App Service Custom Hostname Bindings can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appservice/slotCustomHostnameBinding:SlotCustomHostnameBinding mywebsite /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Web/sites/instance1/slots/staging/hostNameBindings/mywebsite.com
 * ```
 */
export declare class SlotCustomHostnameBinding extends pulumi.CustomResource {
    /**
     * Get an existing SlotCustomHostnameBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SlotCustomHostnameBindingState, opts?: pulumi.CustomResourceOptions): SlotCustomHostnameBinding;
    /**
     * Returns true if the given object is an instance of SlotCustomHostnameBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SlotCustomHostnameBinding;
    /**
     * The ID of the App Service Slot. Changing this forces a new resource to be created.
     */
    readonly appServiceSlotId: pulumi.Output<string>;
    /**
     * Specifies the Custom Hostname to use for the App Service, example `www.example.com`. Changing this forces a new resource to be created.
     */
    readonly hostname: pulumi.Output<string>;
    /**
     * The SSL type. Possible values are `IpBasedEnabled` and `SniEnabled`. Changing this forces a new resource to be created.
     */
    readonly sslState: pulumi.Output<string>;
    /**
     * The SSL certificate thumbprint. Changing this forces a new resource to be created.
     */
    readonly thumbprint: pulumi.Output<string>;
    /**
     * The virtual IP address assigned to the hostname if IP based SSL is enabled.
     */
    readonly virtualIp: pulumi.Output<string>;
    /**
     * Create a SlotCustomHostnameBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SlotCustomHostnameBindingArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SlotCustomHostnameBinding resources.
 */
export interface SlotCustomHostnameBindingState {
    /**
     * The ID of the App Service Slot. Changing this forces a new resource to be created.
     */
    appServiceSlotId?: pulumi.Input<string>;
    /**
     * Specifies the Custom Hostname to use for the App Service, example `www.example.com`. Changing this forces a new resource to be created.
     */
    hostname?: pulumi.Input<string>;
    /**
     * The SSL type. Possible values are `IpBasedEnabled` and `SniEnabled`. Changing this forces a new resource to be created.
     */
    sslState?: pulumi.Input<string>;
    /**
     * The SSL certificate thumbprint. Changing this forces a new resource to be created.
     */
    thumbprint?: pulumi.Input<string>;
    /**
     * The virtual IP address assigned to the hostname if IP based SSL is enabled.
     */
    virtualIp?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SlotCustomHostnameBinding resource.
 */
export interface SlotCustomHostnameBindingArgs {
    /**
     * The ID of the App Service Slot. Changing this forces a new resource to be created.
     */
    appServiceSlotId: pulumi.Input<string>;
    /**
     * Specifies the Custom Hostname to use for the App Service, example `www.example.com`. Changing this forces a new resource to be created.
     */
    hostname: pulumi.Input<string>;
    /**
     * The SSL type. Possible values are `IpBasedEnabled` and `SniEnabled`. Changing this forces a new resource to be created.
     */
    sslState?: pulumi.Input<string>;
    /**
     * The SSL certificate thumbprint. Changing this forces a new resource to be created.
     */
    thumbprint?: pulumi.Input<string>;
}
