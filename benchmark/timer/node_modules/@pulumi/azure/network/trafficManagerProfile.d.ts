import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Traffic Manager Profile to which multiple endpoints can be attached.
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
 * ```
 *
 * ## Import
 *
 * Traffic Manager Profiles can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/trafficManagerProfile:TrafficManagerProfile exampleProfile /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/trafficManagerProfiles/mytrafficmanagerprofile1
 * ```
 */
export declare class TrafficManagerProfile extends pulumi.CustomResource {
    /**
     * Get an existing TrafficManagerProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TrafficManagerProfileState, opts?: pulumi.CustomResourceOptions): TrafficManagerProfile;
    /**
     * Returns true if the given object is an instance of TrafficManagerProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TrafficManagerProfile;
    /**
     * This block specifies the DNS configuration of the Profile, it supports the fields documented below.
     */
    readonly dnsConfig: pulumi.Output<outputs.network.TrafficManagerProfileDnsConfig>;
    /**
     * The FQDN of the created Profile.
     */
    readonly fqdn: pulumi.Output<string>;
    /**
     * The amount of endpoints to return for DNS queries to this Profile. Possible values range from `1` to `8`.
     */
    readonly maxReturn: pulumi.Output<number | undefined>;
    /**
     * This block specifies the Endpoint monitoring configuration for the Profile, it supports the fields documented below.
     */
    readonly monitorConfig: pulumi.Output<outputs.network.TrafficManagerProfileMonitorConfig>;
    /**
     * The name of the Traffic Manager profile. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The status of the profile, can be set to either `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    readonly profileStatus: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Traffic Manager profile.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies the algorithm used to route traffic, possible values are:
     */
    readonly trafficRoutingMethod: pulumi.Output<string>;
    /**
     * Indicates whether Traffic View is enabled for the Traffic Manager profile.
     */
    readonly trafficViewEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Create a TrafficManagerProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TrafficManagerProfileArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering TrafficManagerProfile resources.
 */
export interface TrafficManagerProfileState {
    /**
     * This block specifies the DNS configuration of the Profile, it supports the fields documented below.
     */
    dnsConfig?: pulumi.Input<inputs.network.TrafficManagerProfileDnsConfig>;
    /**
     * The FQDN of the created Profile.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * The amount of endpoints to return for DNS queries to this Profile. Possible values range from `1` to `8`.
     */
    maxReturn?: pulumi.Input<number>;
    /**
     * This block specifies the Endpoint monitoring configuration for the Profile, it supports the fields documented below.
     */
    monitorConfig?: pulumi.Input<inputs.network.TrafficManagerProfileMonitorConfig>;
    /**
     * The name of the Traffic Manager profile. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The status of the profile, can be set to either `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    profileStatus?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Traffic Manager profile.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the algorithm used to route traffic, possible values are:
     */
    trafficRoutingMethod?: pulumi.Input<string>;
    /**
     * Indicates whether Traffic View is enabled for the Traffic Manager profile.
     */
    trafficViewEnabled?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a TrafficManagerProfile resource.
 */
export interface TrafficManagerProfileArgs {
    /**
     * This block specifies the DNS configuration of the Profile, it supports the fields documented below.
     */
    dnsConfig: pulumi.Input<inputs.network.TrafficManagerProfileDnsConfig>;
    /**
     * The amount of endpoints to return for DNS queries to this Profile. Possible values range from `1` to `8`.
     */
    maxReturn?: pulumi.Input<number>;
    /**
     * This block specifies the Endpoint monitoring configuration for the Profile, it supports the fields documented below.
     */
    monitorConfig: pulumi.Input<inputs.network.TrafficManagerProfileMonitorConfig>;
    /**
     * The name of the Traffic Manager profile. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The status of the profile, can be set to either `Enabled` or `Disabled`. Defaults to `Enabled`.
     */
    profileStatus?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Traffic Manager profile.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the algorithm used to route traffic, possible values are:
     */
    trafficRoutingMethod: pulumi.Input<string>;
    /**
     * Indicates whether Traffic View is enabled for the Traffic Manager profile.
     */
    trafficViewEnabled?: pulumi.Input<boolean>;
}
