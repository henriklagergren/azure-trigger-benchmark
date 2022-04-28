import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Kusto (also known as Azure Data Explorer) Attached Database Configuration
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const rg = new azure.core.ResourceGroup("rg", {location: "West Europe"});
 * const followerCluster = new azure.kusto.Cluster("followerCluster", {
 *     location: rg.location,
 *     resourceGroupName: rg.name,
 *     sku: {
 *         name: "Dev(No SLA)_Standard_D11_v2",
 *         capacity: 1,
 *     },
 * });
 * const followedCluster = new azure.kusto.Cluster("followedCluster", {
 *     location: rg.location,
 *     resourceGroupName: rg.name,
 *     sku: {
 *         name: "Dev(No SLA)_Standard_D11_v2",
 *         capacity: 1,
 *     },
 * });
 * const followedDatabase = new azure.kusto.Database("followedDatabase", {
 *     resourceGroupName: rg.name,
 *     location: rg.location,
 *     clusterName: azurerm_kusto_cluster.cluster2.name,
 * });
 * const exampleDatabase = new azure.kusto.Database("exampleDatabase", {
 *     resourceGroupName: rg.name,
 *     location: rg.location,
 *     clusterName: azurerm_kusto_cluster.cluster2.name,
 * });
 * const exampleAttachedDatabaseConfiguration = new azure.kusto.AttachedDatabaseConfiguration("exampleAttachedDatabaseConfiguration", {
 *     resourceGroupName: rg.name,
 *     location: rg.location,
 *     clusterName: followerCluster.name,
 *     clusterResourceId: followedCluster.id,
 *     databaseName: exampleDatabase.name,
 *     defaultPrincipalModificationsKind: "Union",
 *     sharing: {
 *         externalTablesToExcludes: ["ExternalTable2"],
 *         externalTablesToIncludes: ["ExternalTable1"],
 *         materializedViewsToExcludes: ["MaterializedViewTable2"],
 *         materializedViewsToIncludes: ["MaterializedViewTable1"],
 *         tablesToExcludes: ["Table2"],
 *         tablesToIncludes: ["Table1"],
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Kusto Attached Database Configurations can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:kusto/attachedDatabaseConfiguration:AttachedDatabaseConfiguration example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Kusto/Clusters/cluster1/AttachedDatabaseConfigurations/configuration1
 * ```
 */
export declare class AttachedDatabaseConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing AttachedDatabaseConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AttachedDatabaseConfigurationState, opts?: pulumi.CustomResourceOptions): AttachedDatabaseConfiguration;
    /**
     * Returns true if the given object is an instance of AttachedDatabaseConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AttachedDatabaseConfiguration;
    /**
     * The list of databases from the `clusterResourceId` which are currently attached to the cluster.
     */
    readonly attachedDatabaseNames: pulumi.Output<string[]>;
    /**
     * Specifies the name of the Kusto Cluster for which the configuration will be created. Changing this forces a new resource to be created.
     */
    readonly clusterName: pulumi.Output<string>;
    /**
     * The resource id of the cluster where the databases you would like to attach reside.
     */
    readonly clusterResourceId: pulumi.Output<string>;
    /**
     * The name of the database which you would like to attach, use * if you want to follow all current and future databases.
     */
    readonly databaseName: pulumi.Output<string>;
    /**
     * The default principals modification kind. Valid values are: `None` (default), `Replace` and `Union`.
     */
    readonly defaultPrincipalModificationKind: pulumi.Output<string | undefined>;
    /**
     * Specifies the location of the Kusto Cluster for which the configuration will be created. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the Kusto Attached Database Configuration to create. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the resource group of the Kusto Cluster for which the configuration will be created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * A `sharing` block as defined below.
     */
    readonly sharing: pulumi.Output<outputs.kusto.AttachedDatabaseConfigurationSharing | undefined>;
    /**
     * Create a AttachedDatabaseConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AttachedDatabaseConfigurationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AttachedDatabaseConfiguration resources.
 */
export interface AttachedDatabaseConfigurationState {
    /**
     * The list of databases from the `clusterResourceId` which are currently attached to the cluster.
     */
    attachedDatabaseNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the name of the Kusto Cluster for which the configuration will be created. Changing this forces a new resource to be created.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * The resource id of the cluster where the databases you would like to attach reside.
     */
    clusterResourceId?: pulumi.Input<string>;
    /**
     * The name of the database which you would like to attach, use * if you want to follow all current and future databases.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The default principals modification kind. Valid values are: `None` (default), `Replace` and `Union`.
     */
    defaultPrincipalModificationKind?: pulumi.Input<string>;
    /**
     * Specifies the location of the Kusto Cluster for which the configuration will be created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Kusto Attached Database Configuration to create. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the resource group of the Kusto Cluster for which the configuration will be created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * A `sharing` block as defined below.
     */
    sharing?: pulumi.Input<inputs.kusto.AttachedDatabaseConfigurationSharing>;
}
/**
 * The set of arguments for constructing a AttachedDatabaseConfiguration resource.
 */
export interface AttachedDatabaseConfigurationArgs {
    /**
     * Specifies the name of the Kusto Cluster for which the configuration will be created. Changing this forces a new resource to be created.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The resource id of the cluster where the databases you would like to attach reside.
     */
    clusterResourceId: pulumi.Input<string>;
    /**
     * The name of the database which you would like to attach, use * if you want to follow all current and future databases.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The default principals modification kind. Valid values are: `None` (default), `Replace` and `Union`.
     */
    defaultPrincipalModificationKind?: pulumi.Input<string>;
    /**
     * Specifies the location of the Kusto Cluster for which the configuration will be created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Kusto Attached Database Configuration to create. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the resource group of the Kusto Cluster for which the configuration will be created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * A `sharing` block as defined below.
     */
    sharing?: pulumi.Input<inputs.kusto.AttachedDatabaseConfigurationSharing>;
}
