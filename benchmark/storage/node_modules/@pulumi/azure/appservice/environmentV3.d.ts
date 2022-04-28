import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * ## Import
 *
 * A 3rd Generation (v3) App Service Environment can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:appservice/environmentV3:EnvironmentV3 myAppServiceEnv /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Web/hostingEnvironments/myAppServiceEnv
 * ```
 */
export declare class EnvironmentV3 extends pulumi.CustomResource {
    /**
     * Get an existing EnvironmentV3 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EnvironmentV3State, opts?: pulumi.CustomResourceOptions): EnvironmentV3;
    /**
     * Returns true if the given object is an instance of EnvironmentV3.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EnvironmentV3;
    /**
     * Should new Private Endpoint Connections be allowed. Defaults to `true`.
     */
    readonly allowNewPrivateEndpointConnections: pulumi.Output<boolean | undefined>;
    /**
     * Zero or more `clusterSetting` blocks as defined below.
     */
    readonly clusterSettings: pulumi.Output<outputs.appservice.EnvironmentV3ClusterSetting[]>;
    /**
     * This ASEv3 should use dedicated Hosts. Possible values are `2`. Changing this forces a new resource to be created.
     */
    readonly dedicatedHostCount: pulumi.Output<number | undefined>;
    /**
     * the DNS suffix for this App Service Environment V3.
     */
    readonly dnsSuffix: pulumi.Output<string>;
    /**
     * The external inbound IP addresses of the App Service Environment V3.
     */
    readonly externalInboundIpAddresses: pulumi.Output<string[]>;
    /**
     * An Inbound Network Dependencies block as defined below.
     */
    readonly inboundNetworkDependencies: pulumi.Output<outputs.appservice.EnvironmentV3InboundNetworkDependency[]>;
    /**
     * The internal inbound IP addresses of the App Service Environment V3.
     */
    readonly internalInboundIpAddresses: pulumi.Output<string[]>;
    /**
     * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment. Possible values are `None` (for an External VIP Type), and `"Web, Publishing"` (for an Internal VIP Type). Defaults to `None`.
     */
    readonly internalLoadBalancingMode: pulumi.Output<string | undefined>;
    /**
     * The number of IP SSL addresses reserved for the App Service Environment V3.
     */
    readonly ipSslAddressCount: pulumi.Output<number>;
    /**
     * Outbound addresses of Linux based Apps in this App Service Environment V3
     */
    readonly linuxOutboundIpAddresses: pulumi.Output<string[]>;
    /**
     * The location where the App Service Environment exists.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the App Service Environment. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Pricing tier for the front end instances.
     */
    readonly pricingTier: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the App Service Environment exists. Defaults to the Resource Group of the Subnet (specified by `subnetId`).
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The ID of the Subnet which the App Service Environment should be connected to. Changing this forces a new resource to be created.
     */
    readonly subnetId: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Outbound addresses of Windows based Apps in this App Service Environment V3.
     */
    readonly windowsOutboundIpAddresses: pulumi.Output<string[]>;
    /**
     * Set to `true` to deploy the ASEv3 with availability zones supported. Zonal ASEs can be deployed in some regions, you can refer to [Availability Zone support for App Service Environments](https://docs.microsoft.com/en-us/azure/app-service/environment/zone-redundancy). You can only set either `dedicatedHostCount` or `zoneRedundant` but not both.
     */
    readonly zoneRedundant: pulumi.Output<boolean | undefined>;
    /**
     * Create a EnvironmentV3 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnvironmentV3Args, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering EnvironmentV3 resources.
 */
export interface EnvironmentV3State {
    /**
     * Should new Private Endpoint Connections be allowed. Defaults to `true`.
     */
    allowNewPrivateEndpointConnections?: pulumi.Input<boolean>;
    /**
     * Zero or more `clusterSetting` blocks as defined below.
     */
    clusterSettings?: pulumi.Input<pulumi.Input<inputs.appservice.EnvironmentV3ClusterSetting>[]>;
    /**
     * This ASEv3 should use dedicated Hosts. Possible values are `2`. Changing this forces a new resource to be created.
     */
    dedicatedHostCount?: pulumi.Input<number>;
    /**
     * the DNS suffix for this App Service Environment V3.
     */
    dnsSuffix?: pulumi.Input<string>;
    /**
     * The external inbound IP addresses of the App Service Environment V3.
     */
    externalInboundIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An Inbound Network Dependencies block as defined below.
     */
    inboundNetworkDependencies?: pulumi.Input<pulumi.Input<inputs.appservice.EnvironmentV3InboundNetworkDependency>[]>;
    /**
     * The internal inbound IP addresses of the App Service Environment V3.
     */
    internalInboundIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment. Possible values are `None` (for an External VIP Type), and `"Web, Publishing"` (for an Internal VIP Type). Defaults to `None`.
     */
    internalLoadBalancingMode?: pulumi.Input<string>;
    /**
     * The number of IP SSL addresses reserved for the App Service Environment V3.
     */
    ipSslAddressCount?: pulumi.Input<number>;
    /**
     * Outbound addresses of Linux based Apps in this App Service Environment V3
     */
    linuxOutboundIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The location where the App Service Environment exists.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the App Service Environment. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Pricing tier for the front end instances.
     */
    pricingTier?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the App Service Environment exists. Defaults to the Resource Group of the Subnet (specified by `subnetId`).
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The ID of the Subnet which the App Service Environment should be connected to. Changing this forces a new resource to be created.
     */
    subnetId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Outbound addresses of Windows based Apps in this App Service Environment V3.
     */
    windowsOutboundIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Set to `true` to deploy the ASEv3 with availability zones supported. Zonal ASEs can be deployed in some regions, you can refer to [Availability Zone support for App Service Environments](https://docs.microsoft.com/en-us/azure/app-service/environment/zone-redundancy). You can only set either `dedicatedHostCount` or `zoneRedundant` but not both.
     */
    zoneRedundant?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a EnvironmentV3 resource.
 */
export interface EnvironmentV3Args {
    /**
     * Should new Private Endpoint Connections be allowed. Defaults to `true`.
     */
    allowNewPrivateEndpointConnections?: pulumi.Input<boolean>;
    /**
     * Zero or more `clusterSetting` blocks as defined below.
     */
    clusterSettings?: pulumi.Input<pulumi.Input<inputs.appservice.EnvironmentV3ClusterSetting>[]>;
    /**
     * This ASEv3 should use dedicated Hosts. Possible values are `2`. Changing this forces a new resource to be created.
     */
    dedicatedHostCount?: pulumi.Input<number>;
    /**
     * Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment. Possible values are `None` (for an External VIP Type), and `"Web, Publishing"` (for an Internal VIP Type). Defaults to `None`.
     */
    internalLoadBalancingMode?: pulumi.Input<string>;
    /**
     * The name of the App Service Environment. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the App Service Environment exists. Defaults to the Resource Group of the Subnet (specified by `subnetId`).
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The ID of the Subnet which the App Service Environment should be connected to. Changing this forces a new resource to be created.
     */
    subnetId: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource. Changing this forces a new resource to be created.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Set to `true` to deploy the ASEv3 with availability zones supported. Zonal ASEs can be deployed in some regions, you can refer to [Availability Zone support for App Service Environments](https://docs.microsoft.com/en-us/azure/app-service/environment/zone-redundancy). You can only set either `dedicatedHostCount` or `zoneRedundant` but not both.
     */
    zoneRedundant?: pulumi.Input<boolean>;
}
