import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Application Gateway.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     addressSpaces: ["10.254.0.0/16"],
 * });
 * const frontend = new azure.network.Subnet("frontend", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.254.0.0/24"],
 * });
 * const backend = new azure.network.Subnet("backend", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.254.2.0/24"],
 * });
 * const examplePublicIp = new azure.network.PublicIp("examplePublicIp", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     allocationMethod: "Dynamic",
 * });
 * const backendAddressPoolName = pulumi.interpolate`${exampleVirtualNetwork.name}-beap`;
 * const frontendPortName = pulumi.interpolate`${exampleVirtualNetwork.name}-feport`;
 * const frontendIpConfigurationName = pulumi.interpolate`${exampleVirtualNetwork.name}-feip`;
 * const httpSettingName = pulumi.interpolate`${exampleVirtualNetwork.name}-be-htst`;
 * const listenerName = pulumi.interpolate`${exampleVirtualNetwork.name}-httplstn`;
 * const requestRoutingRuleName = pulumi.interpolate`${exampleVirtualNetwork.name}-rqrt`;
 * const redirectConfigurationName = pulumi.interpolate`${exampleVirtualNetwork.name}-rdrcfg`;
 * const network = new azure.network.ApplicationGateway("network", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sku: {
 *         name: "Standard_Small",
 *         tier: "Standard",
 *         capacity: 2,
 *     },
 *     gatewayIpConfigurations: [{
 *         name: "my-gateway-ip-configuration",
 *         subnetId: frontend.id,
 *     }],
 *     frontendPorts: [{
 *         name: frontendPortName,
 *         port: 80,
 *     }],
 *     frontendIpConfigurations: [{
 *         name: frontendIpConfigurationName,
 *         publicIpAddressId: examplePublicIp.id,
 *     }],
 *     backendAddressPools: [{
 *         name: backendAddressPoolName,
 *     }],
 *     backendHttpSettings: [{
 *         name: httpSettingName,
 *         cookieBasedAffinity: "Disabled",
 *         path: "/path1/",
 *         port: 80,
 *         protocol: "Http",
 *         requestTimeout: 60,
 *     }],
 *     httpListeners: [{
 *         name: listenerName,
 *         frontendIpConfigurationName: frontendIpConfigurationName,
 *         frontendPortName: frontendPortName,
 *         protocol: "Http",
 *     }],
 *     requestRoutingRules: [{
 *         name: requestRoutingRuleName,
 *         ruleType: "Basic",
 *         httpListenerName: listenerName,
 *         backendAddressPoolName: backendAddressPoolName,
 *         backendHttpSettingsName: httpSettingName,
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Application Gateway's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/applicationGateway:ApplicationGateway example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Network/applicationGateways/myGateway1
 * ```
 */
export declare class ApplicationGateway extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationGatewayState, opts?: pulumi.CustomResourceOptions): ApplicationGateway;
    /**
     * Returns true if the given object is an instance of ApplicationGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApplicationGateway;
    /**
     * One or more `authenticationCertificate` blocks as defined below.
     */
    readonly authenticationCertificates: pulumi.Output<outputs.network.ApplicationGatewayAuthenticationCertificate[] | undefined>;
    /**
     * A `autoscaleConfiguration` block as defined below.
     */
    readonly autoscaleConfiguration: pulumi.Output<outputs.network.ApplicationGatewayAutoscaleConfiguration | undefined>;
    /**
     * One or more `backendAddressPool` blocks as defined below.
     */
    readonly backendAddressPools: pulumi.Output<outputs.network.ApplicationGatewayBackendAddressPool[]>;
    /**
     * One or more `backendHttpSettings` blocks as defined below.
     */
    readonly backendHttpSettings: pulumi.Output<outputs.network.ApplicationGatewayBackendHttpSetting[]>;
    /**
     * One or more `customErrorConfiguration` blocks as defined below.
     */
    readonly customErrorConfigurations: pulumi.Output<outputs.network.ApplicationGatewayCustomErrorConfiguration[] | undefined>;
    /**
     * Is HTTP2 enabled on the application gateway resource? Defaults to `false`.
     */
    readonly enableHttp2: pulumi.Output<boolean | undefined>;
    /**
     * Is FIPS enabled on the Application Gateway?
     */
    readonly fipsEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the Web Application Firewall Policy.
     */
    readonly firewallPolicyId: pulumi.Output<string | undefined>;
    /**
     * Is the Firewall Policy associated with the Application Gateway?
     */
    readonly forceFirewallPolicyAssociation: pulumi.Output<boolean | undefined>;
    /**
     * One or more `frontendIpConfiguration` blocks as defined below.
     */
    readonly frontendIpConfigurations: pulumi.Output<outputs.network.ApplicationGatewayFrontendIpConfiguration[]>;
    /**
     * One or more `frontendPort` blocks as defined below.
     */
    readonly frontendPorts: pulumi.Output<outputs.network.ApplicationGatewayFrontendPort[]>;
    /**
     * One or more `gatewayIpConfiguration` blocks as defined below.
     */
    readonly gatewayIpConfigurations: pulumi.Output<outputs.network.ApplicationGatewayGatewayIpConfiguration[]>;
    /**
     * One or more `httpListener` blocks as defined below.
     */
    readonly httpListeners: pulumi.Output<outputs.network.ApplicationGatewayHttpListener[]>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.network.ApplicationGatewayIdentity | undefined>;
    /**
     * The Azure region where the Application Gateway should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the Application Gateway. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A list of `privateEndpointConnection` blocks as defined below.
     */
    readonly privateEndpointConnections: pulumi.Output<outputs.network.ApplicationGatewayPrivateEndpointConnection[]>;
    /**
     * One or more `privateLinkConfiguration` blocks as defined below.
     */
    readonly privateLinkConfigurations: pulumi.Output<outputs.network.ApplicationGatewayPrivateLinkConfiguration[] | undefined>;
    /**
     * One or more `probe` blocks as defined below.
     */
    readonly probes: pulumi.Output<outputs.network.ApplicationGatewayProbe[] | undefined>;
    /**
     * One or more `redirectConfiguration` blocks as defined below.
     */
    readonly redirectConfigurations: pulumi.Output<outputs.network.ApplicationGatewayRedirectConfiguration[] | undefined>;
    /**
     * One or more `requestRoutingRule` blocks as defined below.
     */
    readonly requestRoutingRules: pulumi.Output<outputs.network.ApplicationGatewayRequestRoutingRule[]>;
    /**
     * The name of the resource group in which to the Application Gateway should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * One or more `rewriteRuleSet` blocks as defined below. Only valid for v2 SKUs.
     */
    readonly rewriteRuleSets: pulumi.Output<outputs.network.ApplicationGatewayRewriteRuleSet[] | undefined>;
    /**
     * A `sku` block as defined below.
     */
    readonly sku: pulumi.Output<outputs.network.ApplicationGatewaySku>;
    /**
     * One or more `sslCertificate` blocks as defined below.
     */
    readonly sslCertificates: pulumi.Output<outputs.network.ApplicationGatewaySslCertificate[] | undefined>;
    /**
     * a `ssl policy` block as defined below.
     */
    readonly sslPolicies: pulumi.Output<outputs.network.ApplicationGatewaySslPolicy[]>;
    /**
     * One or more `sslProfile` blocks as defined below.
     */
    readonly sslProfiles: pulumi.Output<outputs.network.ApplicationGatewaySslProfile[] | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * One or more `trustedClientCertificate` blocks as defined below.
     */
    readonly trustedClientCertificates: pulumi.Output<outputs.network.ApplicationGatewayTrustedClientCertificate[] | undefined>;
    /**
     * One or more `trustedRootCertificate` blocks as defined below.
     */
    readonly trustedRootCertificates: pulumi.Output<outputs.network.ApplicationGatewayTrustedRootCertificate[] | undefined>;
    /**
     * One or more `urlPathMap` blocks as defined below.
     */
    readonly urlPathMaps: pulumi.Output<outputs.network.ApplicationGatewayUrlPathMap[] | undefined>;
    /**
     * A `wafConfiguration` block as defined below.
     */
    readonly wafConfiguration: pulumi.Output<outputs.network.ApplicationGatewayWafConfiguration | undefined>;
    /**
     * A collection of availability zones to spread the Application Gateway over.
     */
    readonly zones: pulumi.Output<string[] | undefined>;
    /**
     * Create a ApplicationGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationGatewayArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ApplicationGateway resources.
 */
export interface ApplicationGatewayState {
    /**
     * One or more `authenticationCertificate` blocks as defined below.
     */
    authenticationCertificates?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayAuthenticationCertificate>[]>;
    /**
     * A `autoscaleConfiguration` block as defined below.
     */
    autoscaleConfiguration?: pulumi.Input<inputs.network.ApplicationGatewayAutoscaleConfiguration>;
    /**
     * One or more `backendAddressPool` blocks as defined below.
     */
    backendAddressPools?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayBackendAddressPool>[]>;
    /**
     * One or more `backendHttpSettings` blocks as defined below.
     */
    backendHttpSettings?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayBackendHttpSetting>[]>;
    /**
     * One or more `customErrorConfiguration` blocks as defined below.
     */
    customErrorConfigurations?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayCustomErrorConfiguration>[]>;
    /**
     * Is HTTP2 enabled on the application gateway resource? Defaults to `false`.
     */
    enableHttp2?: pulumi.Input<boolean>;
    /**
     * Is FIPS enabled on the Application Gateway?
     */
    fipsEnabled?: pulumi.Input<boolean>;
    /**
     * The ID of the Web Application Firewall Policy.
     */
    firewallPolicyId?: pulumi.Input<string>;
    /**
     * Is the Firewall Policy associated with the Application Gateway?
     */
    forceFirewallPolicyAssociation?: pulumi.Input<boolean>;
    /**
     * One or more `frontendIpConfiguration` blocks as defined below.
     */
    frontendIpConfigurations?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayFrontendIpConfiguration>[]>;
    /**
     * One or more `frontendPort` blocks as defined below.
     */
    frontendPorts?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayFrontendPort>[]>;
    /**
     * One or more `gatewayIpConfiguration` blocks as defined below.
     */
    gatewayIpConfigurations?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayGatewayIpConfiguration>[]>;
    /**
     * One or more `httpListener` blocks as defined below.
     */
    httpListeners?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayHttpListener>[]>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.network.ApplicationGatewayIdentity>;
    /**
     * The Azure region where the Application Gateway should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Application Gateway. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of `privateEndpointConnection` blocks as defined below.
     */
    privateEndpointConnections?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayPrivateEndpointConnection>[]>;
    /**
     * One or more `privateLinkConfiguration` blocks as defined below.
     */
    privateLinkConfigurations?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayPrivateLinkConfiguration>[]>;
    /**
     * One or more `probe` blocks as defined below.
     */
    probes?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayProbe>[]>;
    /**
     * One or more `redirectConfiguration` blocks as defined below.
     */
    redirectConfigurations?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayRedirectConfiguration>[]>;
    /**
     * One or more `requestRoutingRule` blocks as defined below.
     */
    requestRoutingRules?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayRequestRoutingRule>[]>;
    /**
     * The name of the resource group in which to the Application Gateway should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * One or more `rewriteRuleSet` blocks as defined below. Only valid for v2 SKUs.
     */
    rewriteRuleSets?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayRewriteRuleSet>[]>;
    /**
     * A `sku` block as defined below.
     */
    sku?: pulumi.Input<inputs.network.ApplicationGatewaySku>;
    /**
     * One or more `sslCertificate` blocks as defined below.
     */
    sslCertificates?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewaySslCertificate>[]>;
    /**
     * a `ssl policy` block as defined below.
     */
    sslPolicies?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewaySslPolicy>[]>;
    /**
     * One or more `sslProfile` blocks as defined below.
     */
    sslProfiles?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewaySslProfile>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * One or more `trustedClientCertificate` blocks as defined below.
     */
    trustedClientCertificates?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayTrustedClientCertificate>[]>;
    /**
     * One or more `trustedRootCertificate` blocks as defined below.
     */
    trustedRootCertificates?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayTrustedRootCertificate>[]>;
    /**
     * One or more `urlPathMap` blocks as defined below.
     */
    urlPathMaps?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayUrlPathMap>[]>;
    /**
     * A `wafConfiguration` block as defined below.
     */
    wafConfiguration?: pulumi.Input<inputs.network.ApplicationGatewayWafConfiguration>;
    /**
     * A collection of availability zones to spread the Application Gateway over.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a ApplicationGateway resource.
 */
export interface ApplicationGatewayArgs {
    /**
     * One or more `authenticationCertificate` blocks as defined below.
     */
    authenticationCertificates?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayAuthenticationCertificate>[]>;
    /**
     * A `autoscaleConfiguration` block as defined below.
     */
    autoscaleConfiguration?: pulumi.Input<inputs.network.ApplicationGatewayAutoscaleConfiguration>;
    /**
     * One or more `backendAddressPool` blocks as defined below.
     */
    backendAddressPools: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayBackendAddressPool>[]>;
    /**
     * One or more `backendHttpSettings` blocks as defined below.
     */
    backendHttpSettings: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayBackendHttpSetting>[]>;
    /**
     * One or more `customErrorConfiguration` blocks as defined below.
     */
    customErrorConfigurations?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayCustomErrorConfiguration>[]>;
    /**
     * Is HTTP2 enabled on the application gateway resource? Defaults to `false`.
     */
    enableHttp2?: pulumi.Input<boolean>;
    /**
     * Is FIPS enabled on the Application Gateway?
     */
    fipsEnabled?: pulumi.Input<boolean>;
    /**
     * The ID of the Web Application Firewall Policy.
     */
    firewallPolicyId?: pulumi.Input<string>;
    /**
     * Is the Firewall Policy associated with the Application Gateway?
     */
    forceFirewallPolicyAssociation?: pulumi.Input<boolean>;
    /**
     * One or more `frontendIpConfiguration` blocks as defined below.
     */
    frontendIpConfigurations: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayFrontendIpConfiguration>[]>;
    /**
     * One or more `frontendPort` blocks as defined below.
     */
    frontendPorts: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayFrontendPort>[]>;
    /**
     * One or more `gatewayIpConfiguration` blocks as defined below.
     */
    gatewayIpConfigurations: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayGatewayIpConfiguration>[]>;
    /**
     * One or more `httpListener` blocks as defined below.
     */
    httpListeners: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayHttpListener>[]>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.network.ApplicationGatewayIdentity>;
    /**
     * The Azure region where the Application Gateway should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Application Gateway. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * One or more `privateLinkConfiguration` blocks as defined below.
     */
    privateLinkConfigurations?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayPrivateLinkConfiguration>[]>;
    /**
     * One or more `probe` blocks as defined below.
     */
    probes?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayProbe>[]>;
    /**
     * One or more `redirectConfiguration` blocks as defined below.
     */
    redirectConfigurations?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayRedirectConfiguration>[]>;
    /**
     * One or more `requestRoutingRule` blocks as defined below.
     */
    requestRoutingRules: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayRequestRoutingRule>[]>;
    /**
     * The name of the resource group in which to the Application Gateway should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * One or more `rewriteRuleSet` blocks as defined below. Only valid for v2 SKUs.
     */
    rewriteRuleSets?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayRewriteRuleSet>[]>;
    /**
     * A `sku` block as defined below.
     */
    sku: pulumi.Input<inputs.network.ApplicationGatewaySku>;
    /**
     * One or more `sslCertificate` blocks as defined below.
     */
    sslCertificates?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewaySslCertificate>[]>;
    /**
     * a `ssl policy` block as defined below.
     */
    sslPolicies?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewaySslPolicy>[]>;
    /**
     * One or more `sslProfile` blocks as defined below.
     */
    sslProfiles?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewaySslProfile>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * One or more `trustedClientCertificate` blocks as defined below.
     */
    trustedClientCertificates?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayTrustedClientCertificate>[]>;
    /**
     * One or more `trustedRootCertificate` blocks as defined below.
     */
    trustedRootCertificates?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayTrustedRootCertificate>[]>;
    /**
     * One or more `urlPathMap` blocks as defined below.
     */
    urlPathMaps?: pulumi.Input<pulumi.Input<inputs.network.ApplicationGatewayUrlPathMap>[]>;
    /**
     * A `wafConfiguration` block as defined below.
     */
    wafConfiguration?: pulumi.Input<inputs.network.ApplicationGatewayWafConfiguration>;
    /**
     * A collection of availability zones to spread the Application Gateway over.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
