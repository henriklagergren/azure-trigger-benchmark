import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Hostname Binding within an App Service (or Function App).
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * as random from "@pulumi/random";
 *
 * const server = new random.RandomId("server", {
 *     keepers: {
 *         azi_id: 1,
 *     },
 *     byteLength: 8,
 * });
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
 * const exampleCustomHostnameBinding = new azure.appservice.CustomHostnameBinding("exampleCustomHostnameBinding", {
 *     hostname: "www.mywebsite.com",
 *     appServiceName: exampleAppService.name,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * ```
 *
 * ## Import
 *
 * App Service Custom Hostname Bindings can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appservice/customHostnameBinding:CustomHostnameBinding mywebsite /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Web/sites/instance1/hostNameBindings/mywebsite.com
 * ```
 */
export declare class CustomHostnameBinding extends pulumi.CustomResource {
    /**
     * Get an existing CustomHostnameBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CustomHostnameBindingState, opts?: pulumi.CustomResourceOptions): CustomHostnameBinding;
    /**
     * Returns true if the given object is an instance of CustomHostnameBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CustomHostnameBinding;
    /**
     * The name of the App Service in which to add the Custom Hostname Binding. Changing this forces a new resource to be created.
     */
    readonly appServiceName: pulumi.Output<string>;
    /**
     * Specifies the Custom Hostname to use for the App Service, example `www.example.com`. Changing this forces a new resource to be created.
     */
    readonly hostname: pulumi.Output<string>;
    /**
     * The name of the resource group in which the App Service exists. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
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
     * Create a CustomHostnameBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomHostnameBindingArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CustomHostnameBinding resources.
 */
export interface CustomHostnameBindingState {
    /**
     * The name of the App Service in which to add the Custom Hostname Binding. Changing this forces a new resource to be created.
     */
    appServiceName?: pulumi.Input<string>;
    /**
     * Specifies the Custom Hostname to use for the App Service, example `www.example.com`. Changing this forces a new resource to be created.
     */
    hostname?: pulumi.Input<string>;
    /**
     * The name of the resource group in which the App Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
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
 * The set of arguments for constructing a CustomHostnameBinding resource.
 */
export interface CustomHostnameBindingArgs {
    /**
     * The name of the App Service in which to add the Custom Hostname Binding. Changing this forces a new resource to be created.
     */
    appServiceName: pulumi.Input<string>;
    /**
     * Specifies the Custom Hostname to use for the App Service, example `www.example.com`. Changing this forces a new resource to be created.
     */
    hostname: pulumi.Input<string>;
    /**
     * The name of the resource group in which the App Service exists. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The SSL type. Possible values are `IpBasedEnabled` and `SniEnabled`. Changing this forces a new resource to be created.
     */
    sslState?: pulumi.Input<string>;
    /**
     * The SSL certificate thumbprint. Changing this forces a new resource to be created.
     */
    thumbprint?: pulumi.Input<string>;
}
