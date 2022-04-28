import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleService = new azure.apimanagement.Service("exampleService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     publisherName: "My Company",
 *     publisherEmail: "company@exmaple.com",
 *     skuName: "Developer_1",
 * });
 * ```
 *
 * ## Import
 *
 * API Management Services can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:apimanagement/service:Service example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.ApiManagement/service/instance1
 * ```
 */
export declare class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceState, opts?: pulumi.CustomResourceOptions): Service;
    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Service;
    /**
     * One or more `additionalLocation` blocks as defined below.
     */
    readonly additionalLocations: pulumi.Output<outputs.apimanagement.ServiceAdditionalLocation[] | undefined>;
    /**
     * One or more (up to 10) `certificate` blocks as defined below.
     */
    readonly certificates: pulumi.Output<outputs.apimanagement.ServiceCertificate[] | undefined>;
    /**
     * Enforce a client certificate to be presented on each request to the gateway? This is only supported when sku type is `Consumption`.
     */
    readonly clientCertificateEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The URL for the Developer Portal associated with this API Management service.
     */
    readonly developerPortalUrl: pulumi.Output<string>;
    /**
     * Disable the gateway in main region? This is only supported when `additionalLocation` is set.
     */
    readonly gatewayDisabled: pulumi.Output<boolean | undefined>;
    /**
     * The URL of the Regional Gateway for the API Management Service in the specified region.
     */
    readonly gatewayRegionalUrl: pulumi.Output<string>;
    /**
     * The URL of the Gateway for the API Management Service.
     */
    readonly gatewayUrl: pulumi.Output<string>;
    /**
     * A `hostnameConfiguration` block as defined below.
     */
    readonly hostnameConfiguration: pulumi.Output<outputs.apimanagement.ServiceHostnameConfiguration>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.apimanagement.ServiceIdentity | undefined>;
    /**
     * The Azure location where the API Management Service exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The URL for the Management API associated with this API Management service.
     */
    readonly managementApiUrl: pulumi.Output<string>;
    /**
     * The version which the control plane API calls to API Management service are limited with version equal to or newer than.
     */
    readonly minApiVersion: pulumi.Output<string | undefined>;
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Email address from which the notification will be sent.
     */
    readonly notificationSenderEmail: pulumi.Output<string>;
    /**
     * A `policy` block as defined below.
     */
    readonly policy: pulumi.Output<outputs.apimanagement.ServicePolicy>;
    /**
     * The URL for the Publisher Portal associated with this API Management service.
     */
    readonly portalUrl: pulumi.Output<string>;
    /**
     * The Private IP addresses of the API Management Service.  Available only when the API Manager instance is using Virtual Network mode.
     */
    readonly privateIpAddresses: pulumi.Output<string[]>;
    /**
     * A `protocols` block as defined below.
     */
    readonly protocols: pulumi.Output<outputs.apimanagement.ServiceProtocols>;
    /**
     * ID of a standard SKU IPv4 Public IP.
     */
    readonly publicIpAddressId: pulumi.Output<string | undefined>;
    /**
     * Public Static Load Balanced IP addresses of the API Management service in the additional location. Available only for Basic, Standard and Premium SKU.
     */
    readonly publicIpAddresses: pulumi.Output<string[]>;
    /**
     * Is public access to the service allowed?.
     */
    readonly publicNetworkAccessEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The email of publisher/company.
     */
    readonly publisherEmail: pulumi.Output<string>;
    /**
     * The name of publisher/company.
     */
    readonly publisherName: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the API Management Service should be exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The URL for the SCM (Source Code Management) Endpoint associated with this API Management service.
     */
    readonly scmUrl: pulumi.Output<string>;
    /**
     * A `security` block as defined below.
     */
    readonly security: pulumi.Output<outputs.apimanagement.ServiceSecurity>;
    /**
     * A `signIn` block as defined below.
     */
    readonly signIn: pulumi.Output<outputs.apimanagement.ServiceSignIn>;
    /**
     * A `signUp` block as defined below.
     */
    readonly signUp: pulumi.Output<outputs.apimanagement.ServiceSignUp>;
    /**
     * `skuName` is a string consisting of two parts separated by an underscore(\_). The first part is the `name`, valid values include: `Consumption`, `Developer`, `Basic`, `Standard` and `Premium`. The second part is the `capacity` (e.g. the number of deployed units of the `sku`), which must be a positive `integer` (e.g. `Developer_1`).
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * A `tenantAccess` block as defined below.
     */
    readonly tenantAccess: pulumi.Output<outputs.apimanagement.ServiceTenantAccess>;
    /**
     * A `virtualNetworkConfiguration` block as defined below. Required when `virtualNetworkType` is `External` or `Internal`.
     */
    readonly virtualNetworkConfiguration: pulumi.Output<outputs.apimanagement.ServiceVirtualNetworkConfiguration | undefined>;
    /**
     * The type of virtual network you want to use, valid values include: `None`, `External`, `Internal`.
     * > **NOTE:** Please ensure that in the subnet, inbound port 3443 is open when `virtualNetworkType` is `Internal` or `External`. And please ensure other necessary ports are open according to [api management network configuration](https://docs.microsoft.com/en-us/azure/api-management/api-management-using-with-vnet#-common-network-configuration-issues).
     */
    readonly virtualNetworkType: pulumi.Output<string | undefined>;
    /**
     * A list of availability zones.
     */
    readonly zones: pulumi.Output<string[] | undefined>;
    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Service resources.
 */
export interface ServiceState {
    /**
     * One or more `additionalLocation` blocks as defined below.
     */
    additionalLocations?: pulumi.Input<pulumi.Input<inputs.apimanagement.ServiceAdditionalLocation>[]>;
    /**
     * One or more (up to 10) `certificate` blocks as defined below.
     */
    certificates?: pulumi.Input<pulumi.Input<inputs.apimanagement.ServiceCertificate>[]>;
    /**
     * Enforce a client certificate to be presented on each request to the gateway? This is only supported when sku type is `Consumption`.
     */
    clientCertificateEnabled?: pulumi.Input<boolean>;
    /**
     * The URL for the Developer Portal associated with this API Management service.
     */
    developerPortalUrl?: pulumi.Input<string>;
    /**
     * Disable the gateway in main region? This is only supported when `additionalLocation` is set.
     */
    gatewayDisabled?: pulumi.Input<boolean>;
    /**
     * The URL of the Regional Gateway for the API Management Service in the specified region.
     */
    gatewayRegionalUrl?: pulumi.Input<string>;
    /**
     * The URL of the Gateway for the API Management Service.
     */
    gatewayUrl?: pulumi.Input<string>;
    /**
     * A `hostnameConfiguration` block as defined below.
     */
    hostnameConfiguration?: pulumi.Input<inputs.apimanagement.ServiceHostnameConfiguration>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.apimanagement.ServiceIdentity>;
    /**
     * The Azure location where the API Management Service exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The URL for the Management API associated with this API Management service.
     */
    managementApiUrl?: pulumi.Input<string>;
    /**
     * The version which the control plane API calls to API Management service are limited with version equal to or newer than.
     */
    minApiVersion?: pulumi.Input<string>;
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Email address from which the notification will be sent.
     */
    notificationSenderEmail?: pulumi.Input<string>;
    /**
     * A `policy` block as defined below.
     */
    policy?: pulumi.Input<inputs.apimanagement.ServicePolicy>;
    /**
     * The URL for the Publisher Portal associated with this API Management service.
     */
    portalUrl?: pulumi.Input<string>;
    /**
     * The Private IP addresses of the API Management Service.  Available only when the API Manager instance is using Virtual Network mode.
     */
    privateIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A `protocols` block as defined below.
     */
    protocols?: pulumi.Input<inputs.apimanagement.ServiceProtocols>;
    /**
     * ID of a standard SKU IPv4 Public IP.
     */
    publicIpAddressId?: pulumi.Input<string>;
    /**
     * Public Static Load Balanced IP addresses of the API Management service in the additional location. Available only for Basic, Standard and Premium SKU.
     */
    publicIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Is public access to the service allowed?.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The email of publisher/company.
     */
    publisherEmail?: pulumi.Input<string>;
    /**
     * The name of publisher/company.
     */
    publisherName?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service should be exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The URL for the SCM (Source Code Management) Endpoint associated with this API Management service.
     */
    scmUrl?: pulumi.Input<string>;
    /**
     * A `security` block as defined below.
     */
    security?: pulumi.Input<inputs.apimanagement.ServiceSecurity>;
    /**
     * A `signIn` block as defined below.
     */
    signIn?: pulumi.Input<inputs.apimanagement.ServiceSignIn>;
    /**
     * A `signUp` block as defined below.
     */
    signUp?: pulumi.Input<inputs.apimanagement.ServiceSignUp>;
    /**
     * `skuName` is a string consisting of two parts separated by an underscore(\_). The first part is the `name`, valid values include: `Consumption`, `Developer`, `Basic`, `Standard` and `Premium`. The second part is the `capacity` (e.g. the number of deployed units of the `sku`), which must be a positive `integer` (e.g. `Developer_1`).
     */
    skuName?: pulumi.Input<string>;
    /**
     * A mapping of tags assigned to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `tenantAccess` block as defined below.
     */
    tenantAccess?: pulumi.Input<inputs.apimanagement.ServiceTenantAccess>;
    /**
     * A `virtualNetworkConfiguration` block as defined below. Required when `virtualNetworkType` is `External` or `Internal`.
     */
    virtualNetworkConfiguration?: pulumi.Input<inputs.apimanagement.ServiceVirtualNetworkConfiguration>;
    /**
     * The type of virtual network you want to use, valid values include: `None`, `External`, `Internal`.
     * > **NOTE:** Please ensure that in the subnet, inbound port 3443 is open when `virtualNetworkType` is `Internal` or `External`. And please ensure other necessary ports are open according to [api management network configuration](https://docs.microsoft.com/en-us/azure/api-management/api-management-using-with-vnet#-common-network-configuration-issues).
     */
    virtualNetworkType?: pulumi.Input<string>;
    /**
     * A list of availability zones.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * One or more `additionalLocation` blocks as defined below.
     */
    additionalLocations?: pulumi.Input<pulumi.Input<inputs.apimanagement.ServiceAdditionalLocation>[]>;
    /**
     * One or more (up to 10) `certificate` blocks as defined below.
     */
    certificates?: pulumi.Input<pulumi.Input<inputs.apimanagement.ServiceCertificate>[]>;
    /**
     * Enforce a client certificate to be presented on each request to the gateway? This is only supported when sku type is `Consumption`.
     */
    clientCertificateEnabled?: pulumi.Input<boolean>;
    /**
     * Disable the gateway in main region? This is only supported when `additionalLocation` is set.
     */
    gatewayDisabled?: pulumi.Input<boolean>;
    /**
     * A `hostnameConfiguration` block as defined below.
     */
    hostnameConfiguration?: pulumi.Input<inputs.apimanagement.ServiceHostnameConfiguration>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.apimanagement.ServiceIdentity>;
    /**
     * The Azure location where the API Management Service exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The version which the control plane API calls to API Management service are limited with version equal to or newer than.
     */
    minApiVersion?: pulumi.Input<string>;
    /**
     * The name of the API Management Service. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Email address from which the notification will be sent.
     */
    notificationSenderEmail?: pulumi.Input<string>;
    /**
     * A `policy` block as defined below.
     */
    policy?: pulumi.Input<inputs.apimanagement.ServicePolicy>;
    /**
     * A `protocols` block as defined below.
     */
    protocols?: pulumi.Input<inputs.apimanagement.ServiceProtocols>;
    /**
     * ID of a standard SKU IPv4 Public IP.
     */
    publicIpAddressId?: pulumi.Input<string>;
    /**
     * Is public access to the service allowed?.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * The email of publisher/company.
     */
    publisherEmail: pulumi.Input<string>;
    /**
     * The name of publisher/company.
     */
    publisherName: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the API Management Service should be exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `security` block as defined below.
     */
    security?: pulumi.Input<inputs.apimanagement.ServiceSecurity>;
    /**
     * A `signIn` block as defined below.
     */
    signIn?: pulumi.Input<inputs.apimanagement.ServiceSignIn>;
    /**
     * A `signUp` block as defined below.
     */
    signUp?: pulumi.Input<inputs.apimanagement.ServiceSignUp>;
    /**
     * `skuName` is a string consisting of two parts separated by an underscore(\_). The first part is the `name`, valid values include: `Consumption`, `Developer`, `Basic`, `Standard` and `Premium`. The second part is the `capacity` (e.g. the number of deployed units of the `sku`), which must be a positive `integer` (e.g. `Developer_1`).
     */
    skuName: pulumi.Input<string>;
    /**
     * A mapping of tags assigned to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `tenantAccess` block as defined below.
     */
    tenantAccess?: pulumi.Input<inputs.apimanagement.ServiceTenantAccess>;
    /**
     * A `virtualNetworkConfiguration` block as defined below. Required when `virtualNetworkType` is `External` or `Internal`.
     */
    virtualNetworkConfiguration?: pulumi.Input<inputs.apimanagement.ServiceVirtualNetworkConfiguration>;
    /**
     * The type of virtual network you want to use, valid values include: `None`, `External`, `Internal`.
     * > **NOTE:** Please ensure that in the subnet, inbound port 3443 is open when `virtualNetworkType` is `Internal` or `External`. And please ensure other necessary ports are open according to [api management network configuration](https://docs.microsoft.com/en-us/azure/api-management/api-management-using-with-vnet#-common-network-configuration-issues).
     */
    virtualNetworkType?: pulumi.Input<string>;
    /**
     * A list of availability zones.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
