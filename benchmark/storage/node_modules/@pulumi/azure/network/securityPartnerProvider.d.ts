import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Security Partner Provider which could be associated to virtual hub.
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
 *     addressPrefix: "10.0.2.0/24",
 * });
 * const exampleVpnGateway = new azure.network.VpnGateway("exampleVpnGateway", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualHubId: exampleVirtualHub.id,
 * });
 * const exampleSecurityPartnerProvider = new azure.network.SecurityPartnerProvider("exampleSecurityPartnerProvider", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     virtualHubId: exampleVirtualHub.id,
 *     securityProviderName: "IBoss",
 *     tags: {
 *         ENV: "Prod",
 *     },
 * }, {
 *     dependsOn: [exampleVpnGateway],
 * });
 * ```
 *
 * ## Import
 *
 * Security Partner Providers can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:network/securityPartnerProvider:SecurityPartnerProvider example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Network/securityPartnerProviders/securityPartnerProvider1
 * ```
 */
export declare class SecurityPartnerProvider extends pulumi.CustomResource {
    /**
     * Get an existing SecurityPartnerProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityPartnerProviderState, opts?: pulumi.CustomResourceOptions): SecurityPartnerProvider;
    /**
     * Returns true if the given object is an instance of SecurityPartnerProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SecurityPartnerProvider;
    /**
     * The Azure Region where the Security Partner Provider should exist. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Security Partner Provider. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Security Partner Provider should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The security provider name. Possible values are `ZScaler`, `IBoss` and `Checkpoint` is allowed. Changing this forces a new resource to be created.
     */
    readonly securityProviderName: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Security Partner Provider.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The ID of the Virtual Hub within which this Security Partner Provider should be created. Changing this forces a new resource to be created.
     */
    readonly virtualHubId: pulumi.Output<string | undefined>;
    /**
     * Create a SecurityPartnerProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityPartnerProviderArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SecurityPartnerProvider resources.
 */
export interface SecurityPartnerProviderState {
    /**
     * The Azure Region where the Security Partner Provider should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Security Partner Provider. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Security Partner Provider should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The security provider name. Possible values are `ZScaler`, `IBoss` and `Checkpoint` is allowed. Changing this forces a new resource to be created.
     */
    securityProviderName?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Security Partner Provider.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The ID of the Virtual Hub within which this Security Partner Provider should be created. Changing this forces a new resource to be created.
     */
    virtualHubId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SecurityPartnerProvider resource.
 */
export interface SecurityPartnerProviderArgs {
    /**
     * The Azure Region where the Security Partner Provider should exist. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Security Partner Provider. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Security Partner Provider should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The security provider name. Possible values are `ZScaler`, `IBoss` and `Checkpoint` is allowed. Changing this forces a new resource to be created.
     */
    securityProviderName: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Security Partner Provider.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The ID of the Virtual Hub within which this Security Partner Provider should be created. Changing this forces a new resource to be created.
     */
    virtualHubId?: pulumi.Input<string>;
}
