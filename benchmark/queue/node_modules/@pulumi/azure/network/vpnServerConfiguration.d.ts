import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a VPN Server Configuration.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const example = new azure.core.ResourceGroup("example", {location: "West Europe"});
 * const test = new azure.network.VpnServerConfiguration("test", {
 *     resourceGroupName: example.name,
 *     location: example.location,
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
 * ```
 *
 * ## Import
 *
 * VPN Server Configurations can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/vpnServerConfiguration:VpnServerConfiguration config1 /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/vpnServerConfigurations/config1
 * ```
 */
export declare class VpnServerConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing VpnServerConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpnServerConfigurationState, opts?: pulumi.CustomResourceOptions): VpnServerConfiguration;
    /**
     * Returns true if the given object is an instance of VpnServerConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VpnServerConfiguration;
    /**
     * A `azureActiveDirectoryAuthentication` block as defined below.
     */
    readonly azureActiveDirectoryAuthentications: pulumi.Output<outputs.network.VpnServerConfigurationAzureActiveDirectoryAuthentication[] | undefined>;
    /**
     * One or more `clientRevokedCertificate` blocks as defined below.
     */
    readonly clientRevokedCertificates: pulumi.Output<outputs.network.VpnServerConfigurationClientRevokedCertificate[] | undefined>;
    /**
     * One or more `clientRootCertificate` blocks as defined below.
     */
    readonly clientRootCertificates: pulumi.Output<outputs.network.VpnServerConfigurationClientRootCertificate[] | undefined>;
    /**
     * A `ipsecPolicy` block as defined below.
     */
    readonly ipsecPolicy: pulumi.Output<outputs.network.VpnServerConfigurationIpsecPolicy | undefined>;
    /**
     * The Azure location where this VPN Server Configuration should be created. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The Name which should be used for this VPN Server Configuration. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `radius` block as defined below.
     */
    readonly radius: pulumi.Output<outputs.network.VpnServerConfigurationRadius | undefined>;
    /**
     * A `radiusServer` block as defined below.
     *
     * @deprecated Deprecated in favour of `radius`
     */
    readonly radiusServer: pulumi.Output<outputs.network.VpnServerConfigurationRadiusServer | undefined>;
    /**
     * The Name of the Resource Group in which this VPN Server Configuration should be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * A list of Authentication Types applicable for this VPN Server Configuration. Possible values are `AAD` (Azure Active Directory), `Certificate` and `Radius`.
     */
    readonly vpnAuthenticationTypes: pulumi.Output<string>;
    /**
     * A list of VPN Protocols to use for this Server Configuration. Possible values are `IkeV2` and `OpenVPN`.
     */
    readonly vpnProtocols: pulumi.Output<string[]>;
    /**
     * Create a VpnServerConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnServerConfigurationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering VpnServerConfiguration resources.
 */
export interface VpnServerConfigurationState {
    /**
     * A `azureActiveDirectoryAuthentication` block as defined below.
     */
    azureActiveDirectoryAuthentications?: pulumi.Input<pulumi.Input<inputs.network.VpnServerConfigurationAzureActiveDirectoryAuthentication>[]>;
    /**
     * One or more `clientRevokedCertificate` blocks as defined below.
     */
    clientRevokedCertificates?: pulumi.Input<pulumi.Input<inputs.network.VpnServerConfigurationClientRevokedCertificate>[]>;
    /**
     * One or more `clientRootCertificate` blocks as defined below.
     */
    clientRootCertificates?: pulumi.Input<pulumi.Input<inputs.network.VpnServerConfigurationClientRootCertificate>[]>;
    /**
     * A `ipsecPolicy` block as defined below.
     */
    ipsecPolicy?: pulumi.Input<inputs.network.VpnServerConfigurationIpsecPolicy>;
    /**
     * The Azure location where this VPN Server Configuration should be created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The Name which should be used for this VPN Server Configuration. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `radius` block as defined below.
     */
    radius?: pulumi.Input<inputs.network.VpnServerConfigurationRadius>;
    /**
     * A `radiusServer` block as defined below.
     *
     * @deprecated Deprecated in favour of `radius`
     */
    radiusServer?: pulumi.Input<inputs.network.VpnServerConfigurationRadiusServer>;
    /**
     * The Name of the Resource Group in which this VPN Server Configuration should be created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A list of Authentication Types applicable for this VPN Server Configuration. Possible values are `AAD` (Azure Active Directory), `Certificate` and `Radius`.
     */
    vpnAuthenticationTypes?: pulumi.Input<string>;
    /**
     * A list of VPN Protocols to use for this Server Configuration. Possible values are `IkeV2` and `OpenVPN`.
     */
    vpnProtocols?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a VpnServerConfiguration resource.
 */
export interface VpnServerConfigurationArgs {
    /**
     * A `azureActiveDirectoryAuthentication` block as defined below.
     */
    azureActiveDirectoryAuthentications?: pulumi.Input<pulumi.Input<inputs.network.VpnServerConfigurationAzureActiveDirectoryAuthentication>[]>;
    /**
     * One or more `clientRevokedCertificate` blocks as defined below.
     */
    clientRevokedCertificates?: pulumi.Input<pulumi.Input<inputs.network.VpnServerConfigurationClientRevokedCertificate>[]>;
    /**
     * One or more `clientRootCertificate` blocks as defined below.
     */
    clientRootCertificates?: pulumi.Input<pulumi.Input<inputs.network.VpnServerConfigurationClientRootCertificate>[]>;
    /**
     * A `ipsecPolicy` block as defined below.
     */
    ipsecPolicy?: pulumi.Input<inputs.network.VpnServerConfigurationIpsecPolicy>;
    /**
     * The Azure location where this VPN Server Configuration should be created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The Name which should be used for this VPN Server Configuration. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `radius` block as defined below.
     */
    radius?: pulumi.Input<inputs.network.VpnServerConfigurationRadius>;
    /**
     * A `radiusServer` block as defined below.
     *
     * @deprecated Deprecated in favour of `radius`
     */
    radiusServer?: pulumi.Input<inputs.network.VpnServerConfigurationRadiusServer>;
    /**
     * The Name of the Resource Group in which this VPN Server Configuration should be created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A list of Authentication Types applicable for this VPN Server Configuration. Possible values are `AAD` (Azure Active Directory), `Certificate` and `Radius`.
     */
    vpnAuthenticationTypes: pulumi.Input<string>;
    /**
     * A list of VPN Protocols to use for this Server Configuration. Possible values are `IkeV2` and `OpenVPN`.
     */
    vpnProtocols?: pulumi.Input<pulumi.Input<string>[]>;
}
