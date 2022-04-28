import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure Endpoint within a Traffic Manager Profile.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const examplePublicIp = new azure.network.PublicIp("examplePublicIp", {
 *     location: azurerm_resource_group.test.location,
 *     resourceGroupName: azurerm_resource_group.test.name,
 *     allocationMethod: "Static",
 *     domainNameLabel: "example-public-ip",
 * });
 * const exampleTrafficManagerProfile = new azure.network.TrafficManagerProfile("exampleTrafficManagerProfile", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     trafficRoutingMethod: "Weighted",
 *     dnsConfig: {
 *         relativeName: "example-profile",
 *         ttl: 100,
 *     },
 *     monitorConfig: {
 *         protocol: "http",
 *         port: 80,
 *         path: "/",
 *         intervalInSeconds: 30,
 *         timeoutInSeconds: 9,
 *         toleratedNumberOfFailures: 3,
 *     },
 *     tags: {
 *         environment: "Production",
 *     },
 * });
 * const exampleTrafficManagerAzureEndpoint = new azure.network.TrafficManagerAzureEndpoint("exampleTrafficManagerAzureEndpoint", {
 *     profileId: exampleTrafficManagerProfile.id,
 *     weight: 100,
 *     targetResourceId: azurerm_public_ip.test.id,
 * });
 * ```
 *
 * ## Import
 *
 * Azure Endpoints can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/trafficManagerAzureEndpoint:TrafficManagerAzureEndpoint example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example-resources/providers/Microsoft.Network/trafficManagerProfiles/example-profile/AzureEndpoints/example-endpoint
 * ```
 */
export declare class TrafficManagerAzureEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing TrafficManagerAzureEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TrafficManagerAzureEndpointState, opts?: pulumi.CustomResourceOptions): TrafficManagerAzureEndpoint;
    /**
     * Returns true if the given object is an instance of TrafficManagerAzureEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TrafficManagerAzureEndpoint;
    /**
     * One or more `customHeader` blocks as defined below.
     */
    readonly customHeaders: pulumi.Output<outputs.network.TrafficManagerAzureEndpointCustomHeader[] | undefined>;
    /**
     * Is the endpoint enabled? Defaults to `true`.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * A list of Geographic Regions used to distribute traffic, such as `WORLD`, `UK` or `DE`. The same location can't be specified in two endpoints. [See the Geographic Hierarchies documentation for more information](https://docs.microsoft.com/en-us/rest/api/trafficmanager/geographichierarchies/getdefault).
     */
    readonly geoMappings: pulumi.Output<string[] | undefined>;
    /**
     * The name of the Azure Endpoint. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the priority of this Endpoint, this must be
     * specified for Profiles using the `Priority` traffic routing method. Supports
     * values between 1 and 1000, with no Endpoints sharing the same value. If
     * omitted the value will be computed in order of creation.
     */
    readonly priority: pulumi.Output<number>;
    /**
     * The ID of the Traffic Manager Profile that this Azure Endpoint should be created within. Changing this forces a new resource to be created.
     */
    readonly profileId: pulumi.Output<string>;
    /**
     * One or more `subnet` blocks as defined below
     */
    readonly subnets: pulumi.Output<outputs.network.TrafficManagerAzureEndpointSubnet[] | undefined>;
    /**
     * The ID of the Azure Resource which should be used as a target.
     */
    readonly targetResourceId: pulumi.Output<string>;
    /**
     * Specifies how much traffic should be distributed to this endpoint. Valid values are between `1` and `1000`.
     */
    readonly weight: pulumi.Output<number>;
    /**
     * Create a TrafficManagerAzureEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TrafficManagerAzureEndpointArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering TrafficManagerAzureEndpoint resources.
 */
export interface TrafficManagerAzureEndpointState {
    /**
     * One or more `customHeader` blocks as defined below.
     */
    customHeaders?: pulumi.Input<pulumi.Input<inputs.network.TrafficManagerAzureEndpointCustomHeader>[]>;
    /**
     * Is the endpoint enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * A list of Geographic Regions used to distribute traffic, such as `WORLD`, `UK` or `DE`. The same location can't be specified in two endpoints. [See the Geographic Hierarchies documentation for more information](https://docs.microsoft.com/en-us/rest/api/trafficmanager/geographichierarchies/getdefault).
     */
    geoMappings?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Azure Endpoint. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the priority of this Endpoint, this must be
     * specified for Profiles using the `Priority` traffic routing method. Supports
     * values between 1 and 1000, with no Endpoints sharing the same value. If
     * omitted the value will be computed in order of creation.
     */
    priority?: pulumi.Input<number>;
    /**
     * The ID of the Traffic Manager Profile that this Azure Endpoint should be created within. Changing this forces a new resource to be created.
     */
    profileId?: pulumi.Input<string>;
    /**
     * One or more `subnet` blocks as defined below
     */
    subnets?: pulumi.Input<pulumi.Input<inputs.network.TrafficManagerAzureEndpointSubnet>[]>;
    /**
     * The ID of the Azure Resource which should be used as a target.
     */
    targetResourceId?: pulumi.Input<string>;
    /**
     * Specifies how much traffic should be distributed to this endpoint. Valid values are between `1` and `1000`.
     */
    weight?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a TrafficManagerAzureEndpoint resource.
 */
export interface TrafficManagerAzureEndpointArgs {
    /**
     * One or more `customHeader` blocks as defined below.
     */
    customHeaders?: pulumi.Input<pulumi.Input<inputs.network.TrafficManagerAzureEndpointCustomHeader>[]>;
    /**
     * Is the endpoint enabled? Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * A list of Geographic Regions used to distribute traffic, such as `WORLD`, `UK` or `DE`. The same location can't be specified in two endpoints. [See the Geographic Hierarchies documentation for more information](https://docs.microsoft.com/en-us/rest/api/trafficmanager/geographichierarchies/getdefault).
     */
    geoMappings?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the Azure Endpoint. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the priority of this Endpoint, this must be
     * specified for Profiles using the `Priority` traffic routing method. Supports
     * values between 1 and 1000, with no Endpoints sharing the same value. If
     * omitted the value will be computed in order of creation.
     */
    priority?: pulumi.Input<number>;
    /**
     * The ID of the Traffic Manager Profile that this Azure Endpoint should be created within. Changing this forces a new resource to be created.
     */
    profileId: pulumi.Input<string>;
    /**
     * One or more `subnet` blocks as defined below
     */
    subnets?: pulumi.Input<pulumi.Input<inputs.network.TrafficManagerAzureEndpointSubnet>[]>;
    /**
     * The ID of the Azure Resource which should be used as a target.
     */
    targetResourceId: pulumi.Input<string>;
    /**
     * Specifies how much traffic should be distributed to this endpoint. Valid values are between `1` and `1000`.
     */
    weight: pulumi.Input<number>;
}
