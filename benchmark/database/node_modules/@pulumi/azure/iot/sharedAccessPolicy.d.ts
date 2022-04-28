import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an IotHub Shared Access Policy
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleIoTHub = new azure.iot.IoTHub("exampleIoTHub", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: {
 *         name: "S1",
 *         capacity: "1",
 *     },
 * });
 * const exampleSharedAccessPolicy = new azure.iot.SharedAccessPolicy("exampleSharedAccessPolicy", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     iothubName: exampleIoTHub.name,
 *     registryRead: true,
 *     registryWrite: true,
 * });
 * ```
 *
 * ## Import
 *
 * IoTHub Shared Access Policies can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:iot/sharedAccessPolicy:SharedAccessPolicy shared_access_policy1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Devices/IotHubs/hub1/IotHubKeys/shared_access_policy1
 * ```
 */
export declare class SharedAccessPolicy extends pulumi.CustomResource {
    /**
     * Get an existing SharedAccessPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SharedAccessPolicyState, opts?: pulumi.CustomResourceOptions): SharedAccessPolicy;
    /**
     * Returns true if the given object is an instance of SharedAccessPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SharedAccessPolicy;
    /**
     * Adds `DeviceConnect` permission to this Shared Access Account. It allows sending and receiving on the device-side endpoints.
     */
    readonly deviceConnect: pulumi.Output<boolean | undefined>;
    /**
     * The name of the IoTHub to which this Shared Access Policy belongs. Changing this forces a new resource to be created.
     */
    readonly iothubName: pulumi.Output<string>;
    /**
     * Specifies the name of the IotHub Shared Access Policy resource. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The primary connection string of the Shared Access Policy.
     */
    readonly primaryConnectionString: pulumi.Output<string>;
    /**
     * The primary key used to create the authentication token.
     */
    readonly primaryKey: pulumi.Output<string>;
    /**
     * Adds `RegistryRead` permission to this Shared Access Account. It allows read access to the identity registry.
     */
    readonly registryRead: pulumi.Output<boolean | undefined>;
    /**
     * Adds `RegistryWrite` permission to this Shared Access Account. It allows write access to the identity registry.
     */
    readonly registryWrite: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource group under which the IotHub Shared Access Policy resource has to be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The secondary connection string of the Shared Access Policy.
     */
    readonly secondaryConnectionString: pulumi.Output<string>;
    /**
     * The secondary key used to create the authentication token.
     */
    readonly secondaryKey: pulumi.Output<string>;
    /**
     * Adds `ServiceConnect` permission to this Shared Access Account. It allows sending and receiving on the cloud-side endpoints.
     */
    readonly serviceConnect: pulumi.Output<boolean | undefined>;
    /**
     * Create a SharedAccessPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SharedAccessPolicyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SharedAccessPolicy resources.
 */
export interface SharedAccessPolicyState {
    /**
     * Adds `DeviceConnect` permission to this Shared Access Account. It allows sending and receiving on the device-side endpoints.
     */
    deviceConnect?: pulumi.Input<boolean>;
    /**
     * The name of the IoTHub to which this Shared Access Policy belongs. Changing this forces a new resource to be created.
     */
    iothubName?: pulumi.Input<string>;
    /**
     * Specifies the name of the IotHub Shared Access Policy resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The primary connection string of the Shared Access Policy.
     */
    primaryConnectionString?: pulumi.Input<string>;
    /**
     * The primary key used to create the authentication token.
     */
    primaryKey?: pulumi.Input<string>;
    /**
     * Adds `RegistryRead` permission to this Shared Access Account. It allows read access to the identity registry.
     */
    registryRead?: pulumi.Input<boolean>;
    /**
     * Adds `RegistryWrite` permission to this Shared Access Account. It allows write access to the identity registry.
     */
    registryWrite?: pulumi.Input<boolean>;
    /**
     * The name of the resource group under which the IotHub Shared Access Policy resource has to be created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The secondary connection string of the Shared Access Policy.
     */
    secondaryConnectionString?: pulumi.Input<string>;
    /**
     * The secondary key used to create the authentication token.
     */
    secondaryKey?: pulumi.Input<string>;
    /**
     * Adds `ServiceConnect` permission to this Shared Access Account. It allows sending and receiving on the cloud-side endpoints.
     */
    serviceConnect?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a SharedAccessPolicy resource.
 */
export interface SharedAccessPolicyArgs {
    /**
     * Adds `DeviceConnect` permission to this Shared Access Account. It allows sending and receiving on the device-side endpoints.
     */
    deviceConnect?: pulumi.Input<boolean>;
    /**
     * The name of the IoTHub to which this Shared Access Policy belongs. Changing this forces a new resource to be created.
     */
    iothubName: pulumi.Input<string>;
    /**
     * Specifies the name of the IotHub Shared Access Policy resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Adds `RegistryRead` permission to this Shared Access Account. It allows read access to the identity registry.
     */
    registryRead?: pulumi.Input<boolean>;
    /**
     * Adds `RegistryWrite` permission to this Shared Access Account. It allows write access to the identity registry.
     */
    registryWrite?: pulumi.Input<boolean>;
    /**
     * The name of the resource group under which the IotHub Shared Access Policy resource has to be created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Adds `ServiceConnect` permission to this Shared Access Account. It allows sending and receiving on the cloud-side endpoints.
     */
    serviceConnect?: pulumi.Input<boolean>;
}
