import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Kusto (also known as Azure Data Explorer) Cluster
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const rg = new azure.core.ResourceGroup("rg", {location: "West Europe"});
 * const example = new azure.kusto.Cluster("example", {
 *     location: rg.location,
 *     resourceGroupName: rg.name,
 *     sku: {
 *         name: "Standard_D13_v2",
 *         capacity: 2,
 *     },
 *     tags: {
 *         Environment: "Production",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Kusto Clusters can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:kusto/cluster:Cluster example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Kusto/Clusters/cluster1
 * ```
 */
export declare class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterState, opts?: pulumi.CustomResourceOptions): Cluster;
    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Cluster;
    /**
     * Specifies if the cluster could be automatically stopped (due to lack of data or no activity for many days).
     */
    readonly autoStopEnabled: pulumi.Output<boolean>;
    /**
     * The Kusto Cluster URI to be used for data ingestion.
     */
    readonly dataIngestionUri: pulumi.Output<string>;
    /**
     * Specifies if the cluster's disks are encrypted.
     */
    readonly diskEncryptionEnabled: pulumi.Output<boolean>;
    /**
     * Is the cluster's double encryption enabled? Defaults to `false`. Changing this forces a new resource to be created.
     */
    readonly doubleEncryptionEnabled: pulumi.Output<boolean | undefined>;
    /**
     * @deprecated This property has been renamed to auto_stop_enabled to be more consistent with the rest of the provider and will be removed in v3.0 of the provider
     */
    readonly enableAutoStop: pulumi.Output<boolean>;
    /**
     * @deprecated This property has been renamed to disk_encryption_enabled to be more consistent with the rest of the provider and will be removed in v3.0 of the provider
     */
    readonly enableDiskEncryption: pulumi.Output<boolean>;
    /**
     * @deprecated This property has been renamed to purge_enabled to be more consistent with the rest of the provider and will be removed in v3.0 of the provider
     */
    readonly enablePurge: pulumi.Output<boolean>;
    /**
     * @deprecated This property has been renamed to streaming_ingestion_enabled to be more consistent with the rest of the provider and will be removed in v3.0 of the provider
     */
    readonly enableStreamingIngest: pulumi.Output<boolean>;
    /**
     * . The engine type that should be used. Possible values are `V2` and `V3`. Defaults to `V2`.
     */
    readonly engine: pulumi.Output<string | undefined>;
    /**
     * An `identity` block as defined below.
     */
    readonly identity: pulumi.Output<outputs.kusto.ClusterIdentity | undefined>;
    /**
     * An list of `languageExtensions` to enable. Valid values are: `PYTHON` and `R`.
     */
    readonly languageExtensions: pulumi.Output<string[] | undefined>;
    /**
     * The location where the Kusto Cluster should be created. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the Kusto Cluster to create. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * An `optimizedAutoScale` block as defined below.
     */
    readonly optimizedAutoScale: pulumi.Output<outputs.kusto.ClusterOptimizedAutoScale | undefined>;
    readonly publicNetworkAccessEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies if the purge operations are enabled.
     */
    readonly purgeEnabled: pulumi.Output<boolean>;
    /**
     * Specifies the Resource Group where the Kusto Cluster should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `sku` block as defined below.
     */
    readonly sku: pulumi.Output<outputs.kusto.ClusterSku>;
    /**
     * Specifies if the streaming ingest is enabled.
     */
    readonly streamingIngestionEnabled: pulumi.Output<boolean>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Specifies a list of tenant IDs that are trusted by the cluster. Default setting trusts all other tenants. Use `trustedExternalTenants = ["*"]` to explicitly allow all other tenants, `trustedExternalTenants = ["MyTentantOnly"]` for only your tenant or `trustedExternalTenants = ["<tenantId1>", "<tenantIdx>"]` to allow specific other tenants.
     */
    readonly trustedExternalTenants: pulumi.Output<string[]>;
    /**
     * The FQDN of the Azure Kusto Cluster.
     */
    readonly uri: pulumi.Output<string>;
    /**
     * A `virtualNetworkConfiguration` block as defined below. Changing this forces a new resource to be created.
     */
    readonly virtualNetworkConfiguration: pulumi.Output<outputs.kusto.ClusterVirtualNetworkConfiguration | undefined>;
    /**
     * A list of Availability Zones in which the cluster instances should be created in. Changing this forces a new resource to be created.
     */
    readonly zones: pulumi.Output<string[] | undefined>;
    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Cluster resources.
 */
export interface ClusterState {
    /**
     * Specifies if the cluster could be automatically stopped (due to lack of data or no activity for many days).
     */
    autoStopEnabled?: pulumi.Input<boolean>;
    /**
     * The Kusto Cluster URI to be used for data ingestion.
     */
    dataIngestionUri?: pulumi.Input<string>;
    /**
     * Specifies if the cluster's disks are encrypted.
     */
    diskEncryptionEnabled?: pulumi.Input<boolean>;
    /**
     * Is the cluster's double encryption enabled? Defaults to `false`. Changing this forces a new resource to be created.
     */
    doubleEncryptionEnabled?: pulumi.Input<boolean>;
    /**
     * @deprecated This property has been renamed to auto_stop_enabled to be more consistent with the rest of the provider and will be removed in v3.0 of the provider
     */
    enableAutoStop?: pulumi.Input<boolean>;
    /**
     * @deprecated This property has been renamed to disk_encryption_enabled to be more consistent with the rest of the provider and will be removed in v3.0 of the provider
     */
    enableDiskEncryption?: pulumi.Input<boolean>;
    /**
     * @deprecated This property has been renamed to purge_enabled to be more consistent with the rest of the provider and will be removed in v3.0 of the provider
     */
    enablePurge?: pulumi.Input<boolean>;
    /**
     * @deprecated This property has been renamed to streaming_ingestion_enabled to be more consistent with the rest of the provider and will be removed in v3.0 of the provider
     */
    enableStreamingIngest?: pulumi.Input<boolean>;
    /**
     * . The engine type that should be used. Possible values are `V2` and `V3`. Defaults to `V2`.
     */
    engine?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.kusto.ClusterIdentity>;
    /**
     * An list of `languageExtensions` to enable. Valid values are: `PYTHON` and `R`.
     */
    languageExtensions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The location where the Kusto Cluster should be created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Kusto Cluster to create. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * An `optimizedAutoScale` block as defined below.
     */
    optimizedAutoScale?: pulumi.Input<inputs.kusto.ClusterOptimizedAutoScale>;
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies if the purge operations are enabled.
     */
    purgeEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the Resource Group where the Kusto Cluster should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `sku` block as defined below.
     */
    sku?: pulumi.Input<inputs.kusto.ClusterSku>;
    /**
     * Specifies if the streaming ingest is enabled.
     */
    streamingIngestionEnabled?: pulumi.Input<boolean>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies a list of tenant IDs that are trusted by the cluster. Default setting trusts all other tenants. Use `trustedExternalTenants = ["*"]` to explicitly allow all other tenants, `trustedExternalTenants = ["MyTentantOnly"]` for only your tenant or `trustedExternalTenants = ["<tenantId1>", "<tenantIdx>"]` to allow specific other tenants.
     */
    trustedExternalTenants?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The FQDN of the Azure Kusto Cluster.
     */
    uri?: pulumi.Input<string>;
    /**
     * A `virtualNetworkConfiguration` block as defined below. Changing this forces a new resource to be created.
     */
    virtualNetworkConfiguration?: pulumi.Input<inputs.kusto.ClusterVirtualNetworkConfiguration>;
    /**
     * A list of Availability Zones in which the cluster instances should be created in. Changing this forces a new resource to be created.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * Specifies if the cluster could be automatically stopped (due to lack of data or no activity for many days).
     */
    autoStopEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies if the cluster's disks are encrypted.
     */
    diskEncryptionEnabled?: pulumi.Input<boolean>;
    /**
     * Is the cluster's double encryption enabled? Defaults to `false`. Changing this forces a new resource to be created.
     */
    doubleEncryptionEnabled?: pulumi.Input<boolean>;
    /**
     * @deprecated This property has been renamed to auto_stop_enabled to be more consistent with the rest of the provider and will be removed in v3.0 of the provider
     */
    enableAutoStop?: pulumi.Input<boolean>;
    /**
     * @deprecated This property has been renamed to disk_encryption_enabled to be more consistent with the rest of the provider and will be removed in v3.0 of the provider
     */
    enableDiskEncryption?: pulumi.Input<boolean>;
    /**
     * @deprecated This property has been renamed to purge_enabled to be more consistent with the rest of the provider and will be removed in v3.0 of the provider
     */
    enablePurge?: pulumi.Input<boolean>;
    /**
     * @deprecated This property has been renamed to streaming_ingestion_enabled to be more consistent with the rest of the provider and will be removed in v3.0 of the provider
     */
    enableStreamingIngest?: pulumi.Input<boolean>;
    /**
     * . The engine type that should be used. Possible values are `V2` and `V3`. Defaults to `V2`.
     */
    engine?: pulumi.Input<string>;
    /**
     * An `identity` block as defined below.
     */
    identity?: pulumi.Input<inputs.kusto.ClusterIdentity>;
    /**
     * An list of `languageExtensions` to enable. Valid values are: `PYTHON` and `R`.
     */
    languageExtensions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The location where the Kusto Cluster should be created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Kusto Cluster to create. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * An `optimizedAutoScale` block as defined below.
     */
    optimizedAutoScale?: pulumi.Input<inputs.kusto.ClusterOptimizedAutoScale>;
    publicNetworkAccessEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies if the purge operations are enabled.
     */
    purgeEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the Resource Group where the Kusto Cluster should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `sku` block as defined below.
     */
    sku: pulumi.Input<inputs.kusto.ClusterSku>;
    /**
     * Specifies if the streaming ingest is enabled.
     */
    streamingIngestionEnabled?: pulumi.Input<boolean>;
    /**
     * A mapping of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies a list of tenant IDs that are trusted by the cluster. Default setting trusts all other tenants. Use `trustedExternalTenants = ["*"]` to explicitly allow all other tenants, `trustedExternalTenants = ["MyTentantOnly"]` for only your tenant or `trustedExternalTenants = ["<tenantId1>", "<tenantIdx>"]` to allow specific other tenants.
     */
    trustedExternalTenants?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A `virtualNetworkConfiguration` block as defined below. Changing this forces a new resource to be created.
     */
    virtualNetworkConfiguration?: pulumi.Input<inputs.kusto.ClusterVirtualNetworkConfiguration>;
    /**
     * A list of Availability Zones in which the cluster instances should be created in. Changing this forces a new resource to be created.
     */
    zones?: pulumi.Input<pulumi.Input<string>[]>;
}
