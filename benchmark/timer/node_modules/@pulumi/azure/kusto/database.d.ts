import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Kusto (also known as Azure Data Explorer) Database
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const rg = new azure.core.ResourceGroup("rg", {location: "West Europe"});
 * const cluster = new azure.kusto.Cluster("cluster", {
 *     location: rg.location,
 *     resourceGroupName: rg.name,
 *     sku: {
 *         name: "Standard_D13_v2",
 *         capacity: 2,
 *     },
 * });
 * const database = new azure.kusto.Database("database", {
 *     resourceGroupName: rg.name,
 *     location: rg.location,
 *     clusterName: cluster.name,
 *     hotCachePeriod: "P7D",
 *     softDeletePeriod: "P31D",
 * });
 * ```
 *
 * ## Import
 *
 * Kusto Clusters can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:kusto/database:Database example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Kusto/Clusters/cluster1/Databases/database1
 * ```
 */
export declare class Database extends pulumi.CustomResource {
    /**
     * Get an existing Database resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseState, opts?: pulumi.CustomResourceOptions): Database;
    /**
     * Returns true if the given object is an instance of Database.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Database;
    /**
     * Specifies the name of the Kusto Cluster this database will be added to. Changing this forces a new resource to be created.
     */
    readonly clusterName: pulumi.Output<string>;
    /**
     * The time the data that should be kept in cache for fast queries as ISO 8601 timespan. Default is unlimited. For more information see: [ISO 8601 Timespan](https://en.wikipedia.org/wiki/ISO_8601#Durations)
     */
    readonly hotCachePeriod: pulumi.Output<string | undefined>;
    /**
     * The location where the Kusto Database should be created. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the Kusto Database to create. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the Resource Group where the Kusto Database should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The size of the database in bytes.
     */
    readonly size: pulumi.Output<number>;
    /**
     * The time the data should be kept before it stops being accessible to queries as ISO 8601 timespan. Default is unlimited. For more information see: [ISO 8601 Timespan](https://en.wikipedia.org/wiki/ISO_8601#Durations)
     */
    readonly softDeletePeriod: pulumi.Output<string | undefined>;
    /**
     * Create a Database resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Database resources.
 */
export interface DatabaseState {
    /**
     * Specifies the name of the Kusto Cluster this database will be added to. Changing this forces a new resource to be created.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * The time the data that should be kept in cache for fast queries as ISO 8601 timespan. Default is unlimited. For more information see: [ISO 8601 Timespan](https://en.wikipedia.org/wiki/ISO_8601#Durations)
     */
    hotCachePeriod?: pulumi.Input<string>;
    /**
     * The location where the Kusto Database should be created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Kusto Database to create. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the Resource Group where the Kusto Database should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The size of the database in bytes.
     */
    size?: pulumi.Input<number>;
    /**
     * The time the data should be kept before it stops being accessible to queries as ISO 8601 timespan. Default is unlimited. For more information see: [ISO 8601 Timespan](https://en.wikipedia.org/wiki/ISO_8601#Durations)
     */
    softDeletePeriod?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Database resource.
 */
export interface DatabaseArgs {
    /**
     * Specifies the name of the Kusto Cluster this database will be added to. Changing this forces a new resource to be created.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The time the data that should be kept in cache for fast queries as ISO 8601 timespan. Default is unlimited. For more information see: [ISO 8601 Timespan](https://en.wikipedia.org/wiki/ISO_8601#Durations)
     */
    hotCachePeriod?: pulumi.Input<string>;
    /**
     * The location where the Kusto Database should be created. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the Kusto Database to create. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the Resource Group where the Kusto Database should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The time the data should be kept before it stops being accessible to queries as ISO 8601 timespan. Default is unlimited. For more information see: [ISO 8601 Timespan](https://en.wikipedia.org/wiki/ISO_8601#Durations)
     */
    softDeletePeriod?: pulumi.Input<string>;
}
