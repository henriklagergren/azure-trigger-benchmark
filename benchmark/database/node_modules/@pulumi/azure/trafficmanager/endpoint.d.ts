import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Traffic Manager Endpoint.
 *
 * > **NOTE:** This resource is **deprecated** in favour of the `azure.network.TrafficManagerAzureEndpoint`, `azure.network.TrafficManagerExternalEndpoint`, or `azure.network.TrafficManagerNestedEndpoint` resources and will be removed in version 3.0 of the Azure Provider.
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
 * const exampleTrafficManagerProfile = new azure.network.TrafficManagerProfile("exampleTrafficManagerProfile", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     trafficRoutingMethod: "Weighted",
 *     dnsConfig: {
 *         relativeName: server.hex,
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
 * const exampleTrafficManagerEndpoint = new azure.network.TrafficManagerEndpoint("exampleTrafficManagerEndpoint", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     profileName: exampleTrafficManagerProfile.name,
 *     type: "externalEndpoints",
 *     weight: 100,
 * });
 * ```
 *
 * ## Import
 *
 * Traffic Manager Endpoints can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:trafficmanager/endpoint:Endpoint exampleEndpoints /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/trafficManagerProfiles/mytrafficmanagerprofile1/azureEndpoints/mytrafficmanagerendpoint
 * ```
 *
 * @deprecated azure.trafficmanager.Endpoint has been deprecated in favor of azure.network.TrafficManagerEndpoint
 */
export declare class Endpoint extends pulumi.CustomResource {
    /**
     * Get an existing Endpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EndpointState, opts?: pulumi.CustomResourceOptions): Endpoint;
    /**
     * Returns true if the given object is an instance of Endpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Endpoint;
    /**
     * One or more `customHeader` blocks as defined below
     */
    readonly customHeaders: pulumi.Output<outputs.trafficmanager.EndpointCustomHeader[] | undefined>;
    /**
     * Specifies the Azure location of the Endpoint,
     * this must be specified for Profiles using the `Performance` routing method
     * if the Endpoint is of either type `nestedEndpoints` or `externalEndpoints`.
     * For Endpoints of type `azureEndpoints` the value will be taken from the
     * location of the Azure target resource.
     */
    readonly endpointLocation: pulumi.Output<string>;
    readonly endpointMonitorStatus: pulumi.Output<string>;
    /**
     * The status of the Endpoint, can be set to
     * either `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    readonly endpointStatus: pulumi.Output<string | undefined>;
    /**
     * A list of Geographic Regions used to distribute traffic, such as `WORLD`, `UK` or `DE`. The same location can't be specified in two endpoints. [See the Geographic Hierarchies documentation for more information](https://docs.microsoft.com/en-us/rest/api/trafficmanager/geographichierarchies/getdefault).
     */
    readonly geoMappings: pulumi.Output<string[] | undefined>;
    /**
     * This argument specifies the minimum number
     * of endpoints that must be ‘online’ in the child profile in order for the
     * parent profile to direct traffic to any of the endpoints in that child
     * profile. This argument only applies to Endpoints of type `nestedEndpoints`
     * and has to be larger than `0`.
     */
    readonly minChildEndpoints: pulumi.Output<number | undefined>;
    /**
     * This argument specifies the minimum number of IPv4 (DNS record type A) endpoints that must be ‘online’ in the child profile in order for the parent profile to direct traffic to any of the endpoints in that child profile. This argument only applies to Endpoints of type `nestedEndpoints` and defaults to `1`.
     */
    readonly minimumRequiredChildEndpointsIpv4: pulumi.Output<number | undefined>;
    /**
     * This argument specifies the minimum number of IPv6 (DNS record type AAAA) endpoints that must be ‘online’ in the child profile in order for the parent profile to direct traffic to any of the endpoints in that child profile. This argument only applies to Endpoints of type `nestedEndpoints` and defaults to `1`.
     */
    readonly minimumRequiredChildEndpointsIpv6: pulumi.Output<number | undefined>;
    /**
     * The name of the Traffic Manager endpoint. Changing this forces a
     * new resource to be created.
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
     * The name of the Traffic Manager Profile to attach
     * create the Traffic Manager endpoint.
     */
    readonly profileName: pulumi.Output<string>;
    /**
     * The name of the resource group where the Traffic Manager Profile exists.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * One or more `subnet` blocks as defined below
     */
    readonly subnets: pulumi.Output<outputs.trafficmanager.EndpointSubnet[] | undefined>;
    /**
     * The FQDN DNS name of the target. This argument must be
     * provided for an endpoint of type `externalEndpoints`, for other types it
     * will be computed.
     */
    readonly target: pulumi.Output<string>;
    /**
     * The resource id of an Azure resource to
     * target. This argument must be provided for an endpoint of type
     * `azureEndpoints` or `nestedEndpoints`.
     */
    readonly targetResourceId: pulumi.Output<string | undefined>;
    /**
     * The Endpoint type, must be one of:
     * - `azureEndpoints`
     * - `externalEndpoints`
     * - `nestedEndpoints`
     */
    readonly type: pulumi.Output<string>;
    /**
     * Specifies how much traffic should be distributed to this
     * endpoint, this must be specified for Profiles using the  `Weighted` traffic
     * routing method. Supports values between 1 and 1000.
     */
    readonly weight: pulumi.Output<number>;
    /**
     * Create a Endpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    /** @deprecated azure.trafficmanager.Endpoint has been deprecated in favor of azure.network.TrafficManagerEndpoint */
    constructor(name: string, args: EndpointArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Endpoint resources.
 */
export interface EndpointState {
    /**
     * One or more `customHeader` blocks as defined below
     */
    customHeaders?: pulumi.Input<pulumi.Input<inputs.trafficmanager.EndpointCustomHeader>[]>;
    /**
     * Specifies the Azure location of the Endpoint,
     * this must be specified for Profiles using the `Performance` routing method
     * if the Endpoint is of either type `nestedEndpoints` or `externalEndpoints`.
     * For Endpoints of type `azureEndpoints` the value will be taken from the
     * location of the Azure target resource.
     */
    endpointLocation?: pulumi.Input<string>;
    endpointMonitorStatus?: pulumi.Input<string>;
    /**
     * The status of the Endpoint, can be set to
     * either `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    endpointStatus?: pulumi.Input<string>;
    /**
     * A list of Geographic Regions used to distribute traffic, such as `WORLD`, `UK` or `DE`. The same location can't be specified in two endpoints. [See the Geographic Hierarchies documentation for more information](https://docs.microsoft.com/en-us/rest/api/trafficmanager/geographichierarchies/getdefault).
     */
    geoMappings?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * This argument specifies the minimum number
     * of endpoints that must be ‘online’ in the child profile in order for the
     * parent profile to direct traffic to any of the endpoints in that child
     * profile. This argument only applies to Endpoints of type `nestedEndpoints`
     * and has to be larger than `0`.
     */
    minChildEndpoints?: pulumi.Input<number>;
    /**
     * This argument specifies the minimum number of IPv4 (DNS record type A) endpoints that must be ‘online’ in the child profile in order for the parent profile to direct traffic to any of the endpoints in that child profile. This argument only applies to Endpoints of type `nestedEndpoints` and defaults to `1`.
     */
    minimumRequiredChildEndpointsIpv4?: pulumi.Input<number>;
    /**
     * This argument specifies the minimum number of IPv6 (DNS record type AAAA) endpoints that must be ‘online’ in the child profile in order for the parent profile to direct traffic to any of the endpoints in that child profile. This argument only applies to Endpoints of type `nestedEndpoints` and defaults to `1`.
     */
    minimumRequiredChildEndpointsIpv6?: pulumi.Input<number>;
    /**
     * The name of the Traffic Manager endpoint. Changing this forces a
     * new resource to be created.
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
     * The name of the Traffic Manager Profile to attach
     * create the Traffic Manager endpoint.
     */
    profileName?: pulumi.Input<string>;
    /**
     * The name of the resource group where the Traffic Manager Profile exists.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * One or more `subnet` blocks as defined below
     */
    subnets?: pulumi.Input<pulumi.Input<inputs.trafficmanager.EndpointSubnet>[]>;
    /**
     * The FQDN DNS name of the target. This argument must be
     * provided for an endpoint of type `externalEndpoints`, for other types it
     * will be computed.
     */
    target?: pulumi.Input<string>;
    /**
     * The resource id of an Azure resource to
     * target. This argument must be provided for an endpoint of type
     * `azureEndpoints` or `nestedEndpoints`.
     */
    targetResourceId?: pulumi.Input<string>;
    /**
     * The Endpoint type, must be one of:
     * - `azureEndpoints`
     * - `externalEndpoints`
     * - `nestedEndpoints`
     */
    type?: pulumi.Input<string>;
    /**
     * Specifies how much traffic should be distributed to this
     * endpoint, this must be specified for Profiles using the  `Weighted` traffic
     * routing method. Supports values between 1 and 1000.
     */
    weight?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a Endpoint resource.
 */
export interface EndpointArgs {
    /**
     * One or more `customHeader` blocks as defined below
     */
    customHeaders?: pulumi.Input<pulumi.Input<inputs.trafficmanager.EndpointCustomHeader>[]>;
    /**
     * Specifies the Azure location of the Endpoint,
     * this must be specified for Profiles using the `Performance` routing method
     * if the Endpoint is of either type `nestedEndpoints` or `externalEndpoints`.
     * For Endpoints of type `azureEndpoints` the value will be taken from the
     * location of the Azure target resource.
     */
    endpointLocation?: pulumi.Input<string>;
    /**
     * The status of the Endpoint, can be set to
     * either `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    endpointStatus?: pulumi.Input<string>;
    /**
     * A list of Geographic Regions used to distribute traffic, such as `WORLD`, `UK` or `DE`. The same location can't be specified in two endpoints. [See the Geographic Hierarchies documentation for more information](https://docs.microsoft.com/en-us/rest/api/trafficmanager/geographichierarchies/getdefault).
     */
    geoMappings?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * This argument specifies the minimum number
     * of endpoints that must be ‘online’ in the child profile in order for the
     * parent profile to direct traffic to any of the endpoints in that child
     * profile. This argument only applies to Endpoints of type `nestedEndpoints`
     * and has to be larger than `0`.
     */
    minChildEndpoints?: pulumi.Input<number>;
    /**
     * This argument specifies the minimum number of IPv4 (DNS record type A) endpoints that must be ‘online’ in the child profile in order for the parent profile to direct traffic to any of the endpoints in that child profile. This argument only applies to Endpoints of type `nestedEndpoints` and defaults to `1`.
     */
    minimumRequiredChildEndpointsIpv4?: pulumi.Input<number>;
    /**
     * This argument specifies the minimum number of IPv6 (DNS record type AAAA) endpoints that must be ‘online’ in the child profile in order for the parent profile to direct traffic to any of the endpoints in that child profile. This argument only applies to Endpoints of type `nestedEndpoints` and defaults to `1`.
     */
    minimumRequiredChildEndpointsIpv6?: pulumi.Input<number>;
    /**
     * The name of the Traffic Manager endpoint. Changing this forces a
     * new resource to be created.
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
     * The name of the Traffic Manager Profile to attach
     * create the Traffic Manager endpoint.
     */
    profileName: pulumi.Input<string>;
    /**
     * The name of the resource group where the Traffic Manager Profile exists.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * One or more `subnet` blocks as defined below
     */
    subnets?: pulumi.Input<pulumi.Input<inputs.trafficmanager.EndpointSubnet>[]>;
    /**
     * The FQDN DNS name of the target. This argument must be
     * provided for an endpoint of type `externalEndpoints`, for other types it
     * will be computed.
     */
    target?: pulumi.Input<string>;
    /**
     * The resource id of an Azure resource to
     * target. This argument must be provided for an endpoint of type
     * `azureEndpoints` or `nestedEndpoints`.
     */
    targetResourceId?: pulumi.Input<string>;
    /**
     * The Endpoint type, must be one of:
     * - `azureEndpoints`
     * - `externalEndpoints`
     * - `nestedEndpoints`
     */
    type: pulumi.Input<string>;
    /**
     * Specifies how much traffic should be distributed to this
     * endpoint, this must be specified for Profiles using the  `Weighted` traffic
     * routing method. Supports values between 1 and 1000.
     */
    weight?: pulumi.Input<number>;
}
