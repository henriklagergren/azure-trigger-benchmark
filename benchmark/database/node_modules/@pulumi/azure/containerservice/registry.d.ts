import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages an Azure Container Registry.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const rg = new azure.core.ResourceGroup("rg", {location: "West Europe"});
 * const acr = new azure.containerservice.Registry("acr", {
 *     resourceGroupName: rg.name,
 *     location: rg.location,
 *     sku: "Premium",
 *     adminEnabled: false,
 *     georeplications: [
 *         {
 *             location: "East US",
 *             zoneRedundancyEnabled: true,
 *             tags: {},
 *         },
 *         {
 *             location: "westeurope",
 *             zoneRedundancyEnabled: true,
 *             tags: {},
 *         },
 *     ],
 * });
 * ```
 * ### Encryption)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const rg = new azure.core.ResourceGroup("rg", {location: "West Europe"});
 * const exampleUserAssignedIdentity = new azure.authorization.UserAssignedIdentity("exampleUserAssignedIdentity", {
 *     resourceGroupName: azurerm_resource_group.example.name,
 *     location: azurerm_resource_group.example.location,
 * });
 * const exampleKey = azure.keyvault.getKey({
 *     name: "super-secret",
 *     keyVaultId: data.azurerm_key_vault.existing.id,
 * });
 * const acr = new azure.containerservice.Registry("acr", {
 *     resourceGroupName: rg.name,
 *     location: rg.location,
 *     sku: "Premium",
 *     identity: {
 *         type: "UserAssigned",
 *         identityIds: [exampleUserAssignedIdentity.id],
 *     },
 *     encryption: {
 *         enabled: true,
 *         keyVaultKeyId: exampleKey.then(exampleKey => exampleKey.id),
 *         identityClientId: exampleUserAssignedIdentity.clientId,
 *     },
 * });
 * ```
 * ### Attaching A Container Registry To A Kubernetes Cluster)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleRegistry = new azure.containerservice.Registry("exampleRegistry", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 * });
 * const exampleKubernetesCluster = new azure.containerservice.KubernetesCluster("exampleKubernetesCluster", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     dnsPrefix: "exampleaks1",
 *     defaultNodePool: {
 *         name: "default",
 *         nodeCount: 1,
 *         vmSize: "Standard_D2_v2",
 *     },
 *     identity: {
 *         type: "SystemAssigned",
 *     },
 *     tags: {
 *         Environment: "Production",
 *     },
 * });
 * const exampleAssignment = new azure.authorization.Assignment("exampleAssignment", {
 *     principalId: exampleKubernetesCluster.kubeletIdentities.apply(kubeletIdentities => kubeletIdentities[0].objectId),
 *     roleDefinitionName: "AcrPull",
 *     scope: exampleRegistry.id,
 *     skipServicePrincipalAadCheck: true,
 * });
 * ```
 *
 * ## Import
 *
 * Container Registries can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:containerservice/registry:Registry example /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/mygroup1/providers/Microsoft.ContainerRegistry/registries/myregistry1
 * ```
 */
export declare class Registry extends pulumi.CustomResource {
    /**
     * Get an existing Registry resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RegistryState, opts?: pulumi.CustomResourceOptions): Registry;
    /**
     * Returns true if the given object is an instance of Registry.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Registry;
    /**
     * Specifies whether the admin user is enabled. Defaults to `false`.
     */
    readonly adminEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The Password associated with the Container Registry Admin account - if the admin account is enabled.
     */
    readonly adminPassword: pulumi.Output<string>;
    /**
     * The Username associated with the Container Registry Admin account - if the admin account is enabled.
     */
    readonly adminUsername: pulumi.Output<string>;
    /**
     * Whether allows anonymous (unauthenticated) pull access to this Container Registry? Defaults to `false`. This is only supported on resources with the `Standard` or `Premium` SKU.
     */
    readonly anonymousPullEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Whether to enable dedicated data endpoints for this Container Registry? Defaults to `false`. This is only supported on resources with the `Premium` SKU.
     */
    readonly dataEndpointEnabled: pulumi.Output<boolean | undefined>;
    /**
     * An `encryption` block as documented below.
     */
    readonly encryption: pulumi.Output<outputs.containerservice.RegistryEncryption>;
    /**
     * Boolean value that indicates whether export policy is enabled. Defaults to `true`. In order to set it to `false`, make sure the `publicNetworkAccessEnabled` is also set to `false`.
     */
    readonly exportPolicyEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A list of Azure locations where the container registry should be geo-replicated.
     *
     * @deprecated Deprecated in favour of `georeplications`
     */
    readonly georeplicationLocations: pulumi.Output<string[]>;
    /**
     * A `georeplications` block as documented below.
     */
    readonly georeplications: pulumi.Output<outputs.containerservice.RegistryGeoreplication[]>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.containerservice.RegistryIdentity | undefined>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The URL that can be used to log into the container registry.
     */
    readonly loginServer: pulumi.Output<string>;
    /**
     * Specifies the name of the Container Registry. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Whether to allow trusted Azure services to access a network restricted Container Registry? Possible values are `None` and `AzureServices`. Defaults to `AzureServices`.
     */
    readonly networkRuleBypassOption: pulumi.Output<string | undefined>;
    /**
     * A `networkRuleSet` block as documented below.
     */
    readonly networkRuleSet: pulumi.Output<outputs.containerservice.RegistryNetworkRuleSet>;
    /**
     * Whether public network access is allowed for the container registry. Defaults to `true`.
     */
    readonly publicNetworkAccessEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Boolean value that indicates whether quarantine policy is enabled. Defaults to `false`.
     */
    readonly quarantinePolicyEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The name of the resource group in which to create the Container Registry. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `retentionPolicy` block as documented below.
     */
    readonly retentionPolicy: pulumi.Output<outputs.containerservice.RegistryRetentionPolicy>;
    /**
     * The SKU name of the container registry. Possible values are  `Basic`, `Standard` and `Premium`. `Classic` (which was previously `Basic`) is supported only for existing resources.
     */
    readonly sku: pulumi.Output<string | undefined>;
    /**
     * @deprecated this attribute is no longer recognized by the API and is not functional anymore, thus this property will be removed in v3.0
     */
    readonly storageAccountId: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * A `trustPolicy` block as documented below.
     */
    readonly trustPolicy: pulumi.Output<outputs.containerservice.RegistryTrustPolicy>;
    /**
     * Whether zone redundancy is enabled for this Container Registry? Changing this forces a new resource to be created. Defaults to `false`.
     */
    readonly zoneRedundancyEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Create a Registry resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RegistryArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Registry resources.
 */
export interface RegistryState {
    /**
     * Specifies whether the admin user is enabled. Defaults to `false`.
     */
    adminEnabled?: pulumi.Input<boolean>;
    /**
     * The Password associated with the Container Registry Admin account - if the admin account is enabled.
     */
    adminPassword?: pulumi.Input<string>;
    /**
     * The Username associated with the Container Registry Admin account - if the admin account is enabled.
     */
    adminUsername?: pulumi.Input<string>;
    /**
     * Whether allows anonymous (unauthenticated) pull access to this Container Registry? Defaults to `false`. This is only supported on resources with the `Standard` or `Premium` SKU.
     */
    anonymousPullEnabled?: pulumi.Input<boolean>;
    /**
     * Whether to enable dedicated data endpoints for this Container Registry? Defaults to `false`. This is only supported on resources with the `Premium` SKU.
     */
    dataEndpointEnabled?: pulumi.Input<boolean>;
    /**
     * An `encryption` block as documented below.
     */
    encryption?: pulumi.Input<inputs.containerservice.RegistryEncryption>;
    /**
     * Boolean value that indicates whether export policy is enabled. Defaults to `true`. In order to set it to `false`, make sure the `publicNetworkAccessEnabled` is also set to `false`.
     */
    exportPolicyEnabled?: pulumi.Input<boolean>;
    /**
     * A list of Azure locations where the container registry should be geo-replicated.
     *
     * @deprecated Deprecated in favour of `georeplications`
     */
    georeplicationLocations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A `georeplications` block as documented below.
     */
    georeplications?: pulumi.Input<pulumi.Input<inputs.containerservice.RegistryGeoreplication>[]>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.containerservice.RegistryIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The URL that can be used to log into the container registry.
     */
    loginServer?: pulumi.Input<string>;
    /**
     * Specifies the name of the Container Registry. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether to allow trusted Azure services to access a network restricted Container Registry? Possible values are `None` and `AzureServices`. Defaults to `AzureServices`.
     */
    networkRuleBypassOption?: pulumi.Input<string>;
    /**
     * A `networkRuleSet` block as documented below.
     */
    networkRuleSet?: pulumi.Input<inputs.containerservice.RegistryNetworkRuleSet>;
    /**
     * Whether public network access is allowed for the container registry. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * Boolean value that indicates whether quarantine policy is enabled. Defaults to `false`.
     */
    quarantinePolicyEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the resource group in which to create the Container Registry. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `retentionPolicy` block as documented below.
     */
    retentionPolicy?: pulumi.Input<inputs.containerservice.RegistryRetentionPolicy>;
    /**
     * The SKU name of the container registry. Possible values are  `Basic`, `Standard` and `Premium`. `Classic` (which was previously `Basic`) is supported only for existing resources.
     */
    sku?: pulumi.Input<string>;
    /**
     * @deprecated this attribute is no longer recognized by the API and is not functional anymore, thus this property will be removed in v3.0
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `trustPolicy` block as documented below.
     */
    trustPolicy?: pulumi.Input<inputs.containerservice.RegistryTrustPolicy>;
    /**
     * Whether zone redundancy is enabled for this Container Registry? Changing this forces a new resource to be created. Defaults to `false`.
     */
    zoneRedundancyEnabled?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a Registry resource.
 */
export interface RegistryArgs {
    /**
     * Specifies whether the admin user is enabled. Defaults to `false`.
     */
    adminEnabled?: pulumi.Input<boolean>;
    /**
     * Whether allows anonymous (unauthenticated) pull access to this Container Registry? Defaults to `false`. This is only supported on resources with the `Standard` or `Premium` SKU.
     */
    anonymousPullEnabled?: pulumi.Input<boolean>;
    /**
     * Whether to enable dedicated data endpoints for this Container Registry? Defaults to `false`. This is only supported on resources with the `Premium` SKU.
     */
    dataEndpointEnabled?: pulumi.Input<boolean>;
    /**
     * An `encryption` block as documented below.
     */
    encryption?: pulumi.Input<inputs.containerservice.RegistryEncryption>;
    /**
     * Boolean value that indicates whether export policy is enabled. Defaults to `true`. In order to set it to `false`, make sure the `publicNetworkAccessEnabled` is also set to `false`.
     */
    exportPolicyEnabled?: pulumi.Input<boolean>;
    /**
     * A list of Azure locations where the container registry should be geo-replicated.
     *
     * @deprecated Deprecated in favour of `georeplications`
     */
    georeplicationLocations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A `georeplications` block as documented below.
     */
    georeplications?: pulumi.Input<pulumi.Input<inputs.containerservice.RegistryGeoreplication>[]>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.containerservice.RegistryIdentity>;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specifies the name of the Container Registry. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether to allow trusted Azure services to access a network restricted Container Registry? Possible values are `None` and `AzureServices`. Defaults to `AzureServices`.
     */
    networkRuleBypassOption?: pulumi.Input<string>;
    /**
     * A `networkRuleSet` block as documented below.
     */
    networkRuleSet?: pulumi.Input<inputs.containerservice.RegistryNetworkRuleSet>;
    /**
     * Whether public network access is allowed for the container registry. Defaults to `true`.
     */
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * Boolean value that indicates whether quarantine policy is enabled. Defaults to `false`.
     */
    quarantinePolicyEnabled?: pulumi.Input<boolean>;
    /**
     * The name of the resource group in which to create the Container Registry. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `retentionPolicy` block as documented below.
     */
    retentionPolicy?: pulumi.Input<inputs.containerservice.RegistryRetentionPolicy>;
    /**
     * The SKU name of the container registry. Possible values are  `Basic`, `Standard` and `Premium`. `Classic` (which was previously `Basic`) is supported only for existing resources.
     */
    sku?: pulumi.Input<string>;
    /**
     * @deprecated this attribute is no longer recognized by the API and is not functional anymore, thus this property will be removed in v3.0
     */
    storageAccountId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A `trustPolicy` block as documented below.
     */
    trustPolicy?: pulumi.Input<inputs.containerservice.RegistryTrustPolicy>;
    /**
     * Whether zone redundancy is enabled for this Container Registry? Changing this forces a new resource to be created. Defaults to `false`.
     */
    zoneRedundancyEnabled?: pulumi.Input<boolean>;
}
