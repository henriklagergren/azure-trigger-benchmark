import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 * import * as azuread from "@pulumi/azuread";
 *
 * const deployResourceGroup = new azure.core.ResourceGroup("deployResourceGroup", {location: "West Europe"});
 * const deployVirtualNetwork = new azure.network.VirtualNetwork("deployVirtualNetwork", {
 *     location: deployResourceGroup.location,
 *     resourceGroupName: deployResourceGroup.name,
 *     addressSpaces: ["10.0.1.0/16"],
 * });
 * const deploySubnet = new azure.network.Subnet("deploySubnet", {
 *     resourceGroupName: deployResourceGroup.name,
 *     virtualNetworkName: deployVirtualNetwork.name,
 *     addressPrefixes: ["10.0.1.0/24"],
 * });
 * const deployNetworkSecurityGroup = new azure.network.NetworkSecurityGroup("deployNetworkSecurityGroup", {
 *     location: deployResourceGroup.location,
 *     resourceGroupName: deployResourceGroup.name,
 *     securityRules: [
 *         {
 *             name: "AllowSyncWithAzureAD",
 *             priority: 101,
 *             direction: "Inbound",
 *             access: "Allow",
 *             protocol: "Tcp",
 *             sourcePortRange: "*",
 *             destinationPortRange: "443",
 *             sourceAddressPrefix: "AzureActiveDirectoryDomainServices",
 *             destinationAddressPrefix: "*",
 *         },
 *         {
 *             name: "AllowRD",
 *             priority: 201,
 *             direction: "Inbound",
 *             access: "Allow",
 *             protocol: "Tcp",
 *             sourcePortRange: "*",
 *             destinationPortRange: "3389",
 *             sourceAddressPrefix: "CorpNetSaw",
 *             destinationAddressPrefix: "*",
 *         },
 *         {
 *             name: "AllowPSRemoting",
 *             priority: 301,
 *             direction: "Inbound",
 *             access: "Allow",
 *             protocol: "Tcp",
 *             sourcePortRange: "*",
 *             destinationPortRange: "5986",
 *             sourceAddressPrefix: "AzureActiveDirectoryDomainServices",
 *             destinationAddressPrefix: "*",
 *         },
 *         {
 *             name: "AllowLDAPS",
 *             priority: 401,
 *             direction: "Inbound",
 *             access: "Allow",
 *             protocol: "Tcp",
 *             sourcePortRange: "*",
 *             destinationPortRange: "636",
 *             sourceAddressPrefix: "*",
 *             destinationAddressPrefix: "*",
 *         },
 *     ],
 * });
 * const deploySubnetNetworkSecurityGroupAssociation = new azure.network.SubnetNetworkSecurityGroupAssociation("deploySubnetNetworkSecurityGroupAssociation", {
 *     subnetId: deploySubnet.id,
 *     networkSecurityGroupId: deployNetworkSecurityGroup.id,
 * });
 * const dcAdmins = new azuread.Group("dcAdmins", {
 *     displayName: "AAD DC Administrators",
 *     securityEnabled: true,
 * });
 * const adminUser = new azuread.User("adminUser", {
 *     userPrincipalName: `dc-admin@$hashicorp-example.net`,
 *     displayName: "DC Administrator",
 *     password: "Pa55w0Rd!!1",
 * });
 * const adminGroupMember = new azuread.GroupMember("adminGroupMember", {
 *     groupObjectId: dcAdmins.objectId,
 *     memberObjectId: adminUser.objectId,
 * });
 * const exampleServicePrincipal = new azuread.ServicePrincipal("exampleServicePrincipal", {applicationId: "2565bd9d-da50-47d4-8b85-4c97f669dc36"});
 * // published app for domain services
 * const aadds = new azure.core.ResourceGroup("aadds", {location: "westeurope"});
 * const exampleService = new azure.domainservices.Service("exampleService", {
 *     location: aadds.location,
 *     resourceGroupName: aadds.name,
 *     domainName: "widgetslogin.net",
 *     sku: "Enterprise",
 *     filteredSyncEnabled: false,
 *     initialReplicaSet: {
 *         subnetId: deploySubnet.id,
 *     },
 *     notifications: {
 *         additionalRecipients: [
 *             "notifyA@example.net",
 *             "notifyB@example.org",
 *         ],
 *         notifyDcAdmins: true,
 *         notifyGlobalAdmins: true,
 *     },
 *     security: {
 *         syncKerberosPasswords: true,
 *         syncNtlmPasswords: true,
 *         syncOnPremPasswords: true,
 *     },
 *     tags: {
 *         Environment: "prod",
 *     },
 * }, {
 *     dependsOn: [
 *         exampleServicePrincipal,
 *         deploySubnetNetworkSecurityGroupAssociation,
 *     ],
 * });
 * ```
 *
 * ## Import
 *
 * Domain Services can be imported using the resource ID, together with the Replica Set ID that you wish to designate as the initial replica set, e.g.
 *
 * ```sh
 *  $ pulumi import azure:domainservices/service:Service example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.AAD/domainServices/instance1/initialReplicaSetId/00000000-0000-0000-0000-000000000000
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
     * A unique ID for the managed domain deployment.
     */
    readonly deploymentId: pulumi.Output<string>;
    /**
     * The Active Directory domain to use. See [official documentation](https://docs.microsoft.com/en-us/azure/active-directory-domain-services/tutorial-create-instance#create-a-managed-domain) for constraints and recommendations.
     */
    readonly domainName: pulumi.Output<string>;
    /**
     * Whether to enable group-based filtered sync (also called scoped synchronisation). Defaults to `false`.
     */
    readonly filteredSyncEnabled: pulumi.Output<boolean | undefined>;
    /**
     * An `initialReplicaSet` block as defined below. The initial replica set inherits the same location as the Domain Service resource.
     */
    readonly initialReplicaSet: pulumi.Output<outputs.domainservices.ServiceInitialReplicaSet>;
    /**
     * The Azure location where the Domain Service exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The display name for your managed Active Directory Domain Service resource. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `notifications` block as defined below.
     */
    readonly notifications: pulumi.Output<outputs.domainservices.ServiceNotifications>;
    /**
     * The name of the Resource Group in which the Domain Service should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The Azure resource ID for the domain service.
     */
    readonly resourceId: pulumi.Output<string>;
    /**
     * A `secureLdap` block as defined below.
     */
    readonly secureLdap: pulumi.Output<outputs.domainservices.ServiceSecureLdap>;
    /**
     * A `security` block as defined below.
     */
    readonly security: pulumi.Output<outputs.domainservices.ServiceSecurity>;
    /**
     * The SKU to use when provisioning the Domain Service resource. One of `Standard`, `Enterprise` or `Premium`.
     */
    readonly sku: pulumi.Output<string>;
    readonly syncOwner: pulumi.Output<string>;
    /**
     * A mapping of tags assigned to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    readonly tenantId: pulumi.Output<string>;
    readonly version: pulumi.Output<number>;
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
     * A unique ID for the managed domain deployment.
     */
    deploymentId?: pulumi.Input<string>;
    /**
     * The Active Directory domain to use. See [official documentation](https://docs.microsoft.com/en-us/azure/active-directory-domain-services/tutorial-create-instance#create-a-managed-domain) for constraints and recommendations.
     */
    domainName?: pulumi.Input<string>;
    /**
     * Whether to enable group-based filtered sync (also called scoped synchronisation). Defaults to `false`.
     */
    filteredSyncEnabled?: pulumi.Input<boolean>;
    /**
     * An `initialReplicaSet` block as defined below. The initial replica set inherits the same location as the Domain Service resource.
     */
    initialReplicaSet?: pulumi.Input<inputs.domainservices.ServiceInitialReplicaSet>;
    /**
     * The Azure location where the Domain Service exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The display name for your managed Active Directory Domain Service resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `notifications` block as defined below.
     */
    notifications?: pulumi.Input<inputs.domainservices.ServiceNotifications>;
    /**
     * The name of the Resource Group in which the Domain Service should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The Azure resource ID for the domain service.
     */
    resourceId?: pulumi.Input<string>;
    /**
     * A `secureLdap` block as defined below.
     */
    secureLdap?: pulumi.Input<inputs.domainservices.ServiceSecureLdap>;
    /**
     * A `security` block as defined below.
     */
    security?: pulumi.Input<inputs.domainservices.ServiceSecurity>;
    /**
     * The SKU to use when provisioning the Domain Service resource. One of `Standard`, `Enterprise` or `Premium`.
     */
    sku?: pulumi.Input<string>;
    syncOwner?: pulumi.Input<string>;
    /**
     * A mapping of tags assigned to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    tenantId?: pulumi.Input<string>;
    version?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * The Active Directory domain to use. See [official documentation](https://docs.microsoft.com/en-us/azure/active-directory-domain-services/tutorial-create-instance#create-a-managed-domain) for constraints and recommendations.
     */
    domainName: pulumi.Input<string>;
    /**
     * Whether to enable group-based filtered sync (also called scoped synchronisation). Defaults to `false`.
     */
    filteredSyncEnabled?: pulumi.Input<boolean>;
    /**
     * An `initialReplicaSet` block as defined below. The initial replica set inherits the same location as the Domain Service resource.
     */
    initialReplicaSet: pulumi.Input<inputs.domainservices.ServiceInitialReplicaSet>;
    /**
     * The Azure location where the Domain Service exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The display name for your managed Active Directory Domain Service resource. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A `notifications` block as defined below.
     */
    notifications?: pulumi.Input<inputs.domainservices.ServiceNotifications>;
    /**
     * The name of the Resource Group in which the Domain Service should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `secureLdap` block as defined below.
     */
    secureLdap?: pulumi.Input<inputs.domainservices.ServiceSecureLdap>;
    /**
     * A `security` block as defined below.
     */
    security?: pulumi.Input<inputs.domainservices.ServiceSecurity>;
    /**
     * The SKU to use when provisioning the Domain Service resource. One of `Standard`, `Enterprise` or `Premium`.
     */
    sku: pulumi.Input<string>;
    /**
     * A mapping of tags assigned to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
