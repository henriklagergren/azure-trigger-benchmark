import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an IoT Central Application
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleApplication = new azure.iotcentral.Application("exampleApplication", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     subDomain: "example-iotcentral-app-subdomain",
 *     displayName: "example-iotcentral-app-display-name",
 *     sku: "S1",
 *     template: "iotc-default@1.0.0",
 *     tags: {
 *         Foo: "Bar",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * The IoT Central Application can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:iotcentral/application:Application example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.IoTCentral/ioTApps/app1
 * ```
 */
export declare class Application extends pulumi.CustomResource {
    /**
     * Get an existing Application resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationState, opts?: pulumi.CustomResourceOptions): Application;
    /**
     * Returns true if the given object is an instance of Application.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Application;
    /**
     * A `displayName` name. Custom display name for the IoT Central application. Default is resource name.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * Specifies the supported Azure location where the resource has to be create. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group under which the IotHub resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `sku` name. Possible values is `ST1`, `ST2`, Default value is `ST1`
     */
    readonly sku: pulumi.Output<string | undefined>;
    /**
     * A `subDomain` name. Subdomain for the IoT Central URL. Each application must have a unique subdomain.
     */
    readonly subDomain: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * A `template` name. IoT Central application template name. Default is a custom application.
     */
    readonly template: pulumi.Output<string>;
    /**
     * Create a Application resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Application resources.
 */
export interface ApplicationState {
    /**
     * A `displayName` name. Custom display name for the IoT Central application. Default is resource name.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource has to be create. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the IotHub resource has to be created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `sku` name. Possible values is `ST1`, `ST2`, Default value is `ST1`
     */
    sku?: pulumi.Input<string>;
    /**
     * A `subDomain` name. Subdomain for the IoT Central URL. Each application must have a unique subdomain.
     */
    subDomain?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `template` name. IoT Central application template name. Default is a custom application.
     */
    template?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Application resource.
 */
export interface ApplicationArgs {
    /**
     * A `displayName` name. Custom display name for the IoT Central application. Default is resource name.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the resource has to be create. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the IotHub resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the IotHub resource has to be created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `sku` name. Possible values is `ST1`, `ST2`, Default value is `ST1`
     */
    sku?: pulumi.Input<string>;
    /**
     * A `subDomain` name. Subdomain for the IoT Central URL. Each application must have a unique subdomain.
     */
    subDomain: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `template` name. IoT Central application template name. Default is a custom application.
     */
    template?: pulumi.Input<string>;
}
