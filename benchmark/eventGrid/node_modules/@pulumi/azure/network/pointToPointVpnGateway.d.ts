import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Point-to-Site VPN Gateway.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualWan = new azure.network.VirtualWan("exampleVirtualWan", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * const exampleVirtualHub = new azure.network.VirtualHub("exampleVirtualHub", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     virtualWanId: exampleVirtualWan.id,
 *     addressPrefix: "10.0.0.0/23",
 * });
 * const exampleVpnServerConfiguration = new azure.network.VpnServerConfiguration("exampleVpnServerConfiguration", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     vpnAuthenticationTypes: ["Certificate"],
 *     clientRootCertificates: [{
 *         name: "DigiCert-Federated-ID-Root-CA",
 *         publicCertData: `MIIDuzCCAqOgAwIBAgIQCHTZWCM+IlfFIRXIvyKSrjANBgkqhkiG9w0BAQsFADBn
 * MQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3
 * d3cuZGlnaWNlcnQuY29tMSYwJAYDVQQDEx1EaWdpQ2VydCBGZWRlcmF0ZWQgSUQg
 * Um9vdCBDQTAeFw0xMzAxMTUxMjAwMDBaFw0zMzAxMTUxMjAwMDBaMGcxCzAJBgNV
 * BAYTAlVTMRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5kaWdp
 * Y2VydC5jb20xJjAkBgNVBAMTHURpZ2lDZXJ0IEZlZGVyYXRlZCBJRCBSb290IENB
 * MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvAEB4pcCqnNNOWE6Ur5j
 * QPUH+1y1F9KdHTRSza6k5iDlXq1kGS1qAkuKtw9JsiNRrjltmFnzMZRBbX8Tlfl8
 * zAhBmb6dDduDGED01kBsTkgywYPxXVTKec0WxYEEF0oMn4wSYNl0lt2eJAKHXjNf
 * GTwiibdP8CUR2ghSM2sUTI8Nt1Omfc4SMHhGhYD64uJMbX98THQ/4LMGuYegou+d
 * GTiahfHtjn7AboSEknwAMJHCh5RlYZZ6B1O4QbKJ+34Q0eKgnI3X6Vc9u0zf6DH8
 * Dk+4zQDYRRTqTnVO3VT8jzqDlCRuNtq6YvryOWN74/dq8LQhUnXHvFyrsdMaE1X2
 * DwIDAQABo2MwYTAPBgNVHRMBAf8EBTADAQH/MA4GA1UdDwEB/wQEAwIBhjAdBgNV
 * HQ4EFgQUGRdkFnbGt1EWjKwbUne+5OaZvRYwHwYDVR0jBBgwFoAUGRdkFnbGt1EW
 * jKwbUne+5OaZvRYwDQYJKoZIhvcNAQELBQADggEBAHcqsHkrjpESqfuVTRiptJfP
 * 9JbdtWqRTmOf6uJi2c8YVqI6XlKXsD8C1dUUaaHKLUJzvKiazibVuBwMIT84AyqR
 * QELn3e0BtgEymEygMU569b01ZPxoFSnNXc7qDZBDef8WfqAV/sxkTi8L9BkmFYfL
 * uGLOhRJOFprPdoDIUBB+tmCl3oDcBy3vnUeOEioz8zAkprcb3GHwHAK+vHmmfgcn
 * WsfMLH4JCLa/tRYL+Rw/N3ybCkDp00s0WUZ+AoDywSl0Q/ZEnNY0MsFiw6LyIdbq
 * M/s/1JRtO3bDSzD9TazRVzn2oBqzSa8VgIo5C1nOnoAKJTlsClJKvIhnRlaLQqk=
 * `,
 *     }],
 * });
 * const examplePointToPointVpnGateway = new azure.network.PointToPointVpnGateway("examplePointToPointVpnGateway", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualHubId: exampleVirtualHub.id,
 *     vpnServerConfigurationId: exampleVpnServerConfiguration.id,
 *     scaleUnit: 1,
 *     connectionConfiguration: {
 *         name: "example-gateway-config",
 *         vpnClientAddressPool: {
 *             addressPrefixes: ["10.0.2.0/24"],
 *         },
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Point-to-Site VPN Gateway's can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/pointToPointVpnGateway:PointToPointVpnGateway example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/p2svpnGateways/gateway1
 * ```
 */
export declare class PointToPointVpnGateway extends pulumi.CustomResource {
    /**
     * Get an existing PointToPointVpnGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PointToPointVpnGatewayState, opts?: pulumi.CustomResourceOptions): PointToPointVpnGateway;
    /**
     * Returns true if the given object is an instance of PointToPointVpnGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PointToPointVpnGateway;
    /**
     * A `connectionConfiguration` block as defined below.
     */
    readonly connectionConfiguration: pulumi.Output<outputs.network.PointToPointVpnGatewayConnectionConfiguration>;
    /**
     * A list of IP Addresses of DNS Servers for the Point-to-Site VPN Gateway.
     */
    readonly dnsServers: pulumi.Output<string[] | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specifies the name of the Point-to-Site VPN Gateway. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the Point-to-Site VPN Gateway. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The [Scale Unit](https://docs.microsoft.com/en-us/azure/virtual-wan/virtual-wan-faq#what-is-a-virtual-wan-gateway-scale-unit) for this Point-to-Site VPN Gateway.
     */
    readonly scaleUnit: pulumi.Output<number>;
    /**
     * A mapping of tags to assign to the Point-to-Site VPN Gateway.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The ID of the Virtual Hub where this Point-to-Site VPN Gateway should exist. Changing this forces a new resource to be created.
     */
    readonly virtualHubId: pulumi.Output<string>;
    /**
     * The ID of the VPN Server Configuration which this Point-to-Site VPN Gateway should use. Changing this forces a new resource to be created.
     */
    readonly vpnServerConfigurationId: pulumi.Output<string>;
    /**
     * Create a PointToPointVpnGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PointToPointVpnGatewayArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering PointToPointVpnGateway resources.
 */
export interface PointToPointVpnGatewayState {
    /**
     * A `connectionConfiguration` block as defined below.
     */
    connectionConfiguration?: pulumi.Input<inputs.network.PointToPointVpnGatewayConnectionConfiguration>;
    /**
     * A list of IP Addresses of DNS Servers for the Point-to-Site VPN Gateway.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Point-to-Site VPN Gateway. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Point-to-Site VPN Gateway. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The [Scale Unit](https://docs.microsoft.com/en-us/azure/virtual-wan/virtual-wan-faq#what-is-a-virtual-wan-gateway-scale-unit) for this Point-to-Site VPN Gateway.
     */
    scaleUnit?: pulumi.Input<number>;
    /**
     * A mapping of tags to assign to the Point-to-Site VPN Gateway.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The ID of the Virtual Hub where this Point-to-Site VPN Gateway should exist. Changing this forces a new resource to be created.
     */
    virtualHubId?: pulumi.Input<string>;
    /**
     * The ID of the VPN Server Configuration which this Point-to-Site VPN Gateway should use. Changing this forces a new resource to be created.
     */
    vpnServerConfigurationId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a PointToPointVpnGateway resource.
 */
export interface PointToPointVpnGatewayArgs {
    /**
     * A `connectionConfiguration` block as defined below.
     */
    connectionConfiguration: pulumi.Input<inputs.network.PointToPointVpnGatewayConnectionConfiguration>;
    /**
     * A list of IP Addresses of DNS Servers for the Point-to-Site VPN Gateway.
     */
    dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Point-to-Site VPN Gateway. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the Point-to-Site VPN Gateway. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The [Scale Unit](https://docs.microsoft.com/en-us/azure/virtual-wan/virtual-wan-faq#what-is-a-virtual-wan-gateway-scale-unit) for this Point-to-Site VPN Gateway.
     */
    scaleUnit: pulumi.Input<number>;
    /**
     * A mapping of tags to assign to the Point-to-Site VPN Gateway.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The ID of the Virtual Hub where this Point-to-Site VPN Gateway should exist. Changing this forces a new resource to be created.
     */
    virtualHubId: pulumi.Input<string>;
    /**
     * The ID of the VPN Server Configuration which this Point-to-Site VPN Gateway should use. Changing this forces a new resource to be created.
     */
    vpnServerConfigurationId: pulumi.Input<string>;
}
