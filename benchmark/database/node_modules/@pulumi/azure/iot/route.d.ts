import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an IotHub Route
 *
 * > **NOTE:** Routes can be defined either directly on the `azure.iot.IoTHub` resource, or using the `azure.iot.Route` resourcs - but the two cannot be used together. If both are used against the same IoTHub, spurious changes will occur.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleContainer = new azure.storage.Container("exampleContainer", {
 *     storageAccountName: exampleAccount.name,
 *     containerAccessType: "private",
 * });
 * const exampleIoTHub = new azure.iot.IoTHub("exampleIoTHub", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: {
 *         name: "S1",
 *         capacity: "1",
 *     },
 *     tags: {
 *         purpose: "testing",
 *     },
 * });
 * const exampleEndpointStorageContainer = new azure.iot.EndpointStorageContainer("exampleEndpointStorageContainer", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     iothubId: exampleIoTHub.id,
 *     connectionString: exampleAccount.primaryBlobConnectionString,
 *     batchFrequencyInSeconds: 60,
 *     maxChunkSizeInBytes: 10485760,
 *     containerName: exampleContainer.name,
 *     encoding: "Avro",
 *     fileNameFormat: "{iothub}/{partition}_{YYYY}_{MM}_{DD}_{HH}_{mm}",
 * });
 * const exampleRoute = new azure.iot.Route("exampleRoute", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     iothubName: exampleIoTHub.name,
 *     source: "DeviceMessages",
 *     condition: "true",
 *     endpointNames: [exampleEndpointStorageContainer.name],
 *     enabled: true,
 * });
 * ```
 *
 * ## Import
 *
 * IoTHub Route can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:iot/route:Route route1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Devices/IotHubs/hub1/Routes/route1
 * ```
 */
export declare class Route extends pulumi.CustomResource {
    /**
     * Get an existing Route resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouteState, opts?: pulumi.CustomResourceOptions): Route;
    /**
     * Returns true if the given object is an instance of Route.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Route;
    /**
     * The condition that is evaluated to apply the routing rule. If no condition is provided, it evaluates to `true` by default. For grammar, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language.
     */
    readonly condition: pulumi.Output<string | undefined>;
    /**
     * Specifies whether a route is enabled.
     */
    readonly enabled: pulumi.Output<boolean>;
    /**
     * The list of endpoints to which messages that satisfy the condition are routed. Currently only one endpoint is allowed.
     */
    readonly endpointNames: pulumi.Output<string>;
    /**
     * The name of the IoTHub to which this Route belongs. Changing this forces a new resource to be created.
     */
    readonly iothubName: pulumi.Output<string>;
    /**
     * The name of the route.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group under which the IotHub Route resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The source that the routing rule is to be applied to. Possible values include: `DeviceConnectionStateEvents`, `DeviceJobLifecycleEvents`, `DeviceLifecycleEvents`, `DeviceMessages`, `Invalid`, `TwinChangeEvents`. Defaults to `DeviceMessages`.
     */
    readonly source: pulumi.Output<string>;
    /**
     * Create a Route resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouteArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Route resources.
 */
export interface RouteState {
    /**
     * The condition that is evaluated to apply the routing rule. If no condition is provided, it evaluates to `true` by default. For grammar, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language.
     */
    condition?: pulumi.Input<string>;
    /**
     * Specifies whether a route is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The list of endpoints to which messages that satisfy the condition are routed. Currently only one endpoint is allowed.
     */
    endpointNames?: pulumi.Input<string>;
    /**
     * The name of the IoTHub to which this Route belongs. Changing this forces a new resource to be created.
     */
    iothubName?: pulumi.Input<string>;
    /**
     * The name of the route.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the IotHub Route resource has to be created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The source that the routing rule is to be applied to. Possible values include: `DeviceConnectionStateEvents`, `DeviceJobLifecycleEvents`, `DeviceLifecycleEvents`, `DeviceMessages`, `Invalid`, `TwinChangeEvents`. Defaults to `DeviceMessages`.
     */
    source?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Route resource.
 */
export interface RouteArgs {
    /**
     * The condition that is evaluated to apply the routing rule. If no condition is provided, it evaluates to `true` by default. For grammar, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language.
     */
    condition?: pulumi.Input<string>;
    /**
     * Specifies whether a route is enabled.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The list of endpoints to which messages that satisfy the condition are routed. Currently only one endpoint is allowed.
     */
    endpointNames: pulumi.Input<string>;
    /**
     * The name of the IoTHub to which this Route belongs. Changing this forces a new resource to be created.
     */
    iothubName: pulumi.Input<string>;
    /**
     * The name of the route.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group under which the IotHub Route resource has to be created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The source that the routing rule is to be applied to. Possible values include: `DeviceConnectionStateEvents`, `DeviceJobLifecycleEvents`, `DeviceLifecycleEvents`, `DeviceMessages`, `Invalid`, `TwinChangeEvents`. Defaults to `DeviceMessages`.
     */
    source: pulumi.Input<string>;
}
