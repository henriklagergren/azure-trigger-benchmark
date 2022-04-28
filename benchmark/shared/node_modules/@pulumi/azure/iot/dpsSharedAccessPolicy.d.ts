import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an IotHub Device Provisioning Service Shared Access Policy
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleIotHubDps = new azure.iot.IotHubDps("exampleIotHubDps", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: {
 *         name: "S1",
 *         capacity: "1",
 *     },
 * });
 * const exampleDpsSharedAccessPolicy = new azure.iot.DpsSharedAccessPolicy("exampleDpsSharedAccessPolicy", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     iothubDpsName: exampleIotHubDps.name,
 *     enrollmentWrite: true,
 *     enrollmentRead: true,
 * });
 * ```
 *
 * ## Import
 *
 * IoTHub Device Provisioning Service Shared Access Policies can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:iot/dpsSharedAccessPolicy:DpsSharedAccessPolicy shared_access_policy1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Devices/provisioningServices/dps1/keys/shared_access_policy1
 * ```
 */
export declare class DpsSharedAccessPolicy extends pulumi.CustomResource {
    /**
     * Get an existing DpsSharedAccessPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DpsSharedAccessPolicyState, opts?: pulumi.CustomResourceOptions): DpsSharedAccessPolicy;
    /**
     * Returns true if the given object is an instance of DpsSharedAccessPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DpsSharedAccessPolicy;
    /**
     * Adds `EnrollmentRead` permission to this Shared Access Account. It allows read access to enrollment data.
     */
    readonly enrollmentRead: pulumi.Output<boolean | undefined>;
    /**
     * Adds `EnrollmentWrite` permission to this Shared Access Account. It allows write access to enrollment data.
     */
    readonly enrollmentWrite: pulumi.Output<boolean | undefined>;
    /**
     * The name of the IoT Hub Device Provisioning service to which this Shared Access Policy belongs. Changing this forces a new resource to be created.
     */
    readonly iothubDpsName: pulumi.Output<string>;
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
     * Adds `RegistrationStatusRead` permission to this Shared Access Account. It allows read access to device registrations.
     */
    readonly registrationRead: pulumi.Output<boolean | undefined>;
    /**
     * Adds `RegistrationStatusWrite` permission to this Shared Access Account. It allows write access to device registrations.
     */
    readonly registrationWrite: pulumi.Output<boolean | undefined>;
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
     * Adds `ServiceConfig` permission to this Shared Access Account. It allows configuration of the Device Provisioning Service.
     */
    readonly serviceConfig: pulumi.Output<boolean | undefined>;
    /**
     * Create a DpsSharedAccessPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DpsSharedAccessPolicyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DpsSharedAccessPolicy resources.
 */
export interface DpsSharedAccessPolicyState {
    /**
     * Adds `EnrollmentRead` permission to this Shared Access Account. It allows read access to enrollment data.
     */
    enrollmentRead?: pulumi.Input<boolean>;
    /**
     * Adds `EnrollmentWrite` permission to this Shared Access Account. It allows write access to enrollment data.
     */
    enrollmentWrite?: pulumi.Input<boolean>;
    /**
     * The name of the IoT Hub Device Provisioning service to which this Shared Access Policy belongs. Changing this forces a new resource to be created.
     */
    iothubDpsName?: pulumi.Input<string>;
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
     * Adds `RegistrationStatusRead` permission to this Shared Access Account. It allows read access to device registrations.
     */
    registrationRead?: pulumi.Input<boolean>;
    /**
     * Adds `RegistrationStatusWrite` permission to this Shared Access Account. It allows write access to device registrations.
     */
    registrationWrite?: pulumi.Input<boolean>;
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
     * Adds `ServiceConfig` permission to this Shared Access Account. It allows configuration of the Device Provisioning Service.
     */
    serviceConfig?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a DpsSharedAccessPolicy resource.
 */
export interface DpsSharedAccessPolicyArgs {
    /**
     * Adds `EnrollmentRead` permission to this Shared Access Account. It allows read access to enrollment data.
     */
    enrollmentRead?: pulumi.Input<boolean>;
    /**
     * Adds `EnrollmentWrite` permission to this Shared Access Account. It allows write access to enrollment data.
     */
    enrollmentWrite?: pulumi.Input<boolean>;
    /**
     * The name of the IoT Hub Device Provisioning service to which this Shared Access Policy belongs. Changing this forces a new resource to be created.
     */
    iothubDpsName: pulumi.Input<string>;
    /**
     * Specifies the name of the IotHub Shared Access Policy resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Adds `RegistrationStatusRead` permission to this Shared Access Account. It allows read access to device registrations.
     */
    registrationRead?: pulumi.Input<boolean>;
    /**
     * Adds `RegistrationStatusWrite` permission to this Shared Access Account. It allows write access to device registrations.
     */
    registrationWrite?: pulumi.Input<boolean>;
    /**
     * The name of the resource group under which the IotHub Shared Access Policy resource has to be created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Adds `ServiceConfig` permission to this Shared Access Account. It allows configuration of the Device Provisioning Service.
     */
    serviceConfig?: pulumi.Input<boolean>;
}
