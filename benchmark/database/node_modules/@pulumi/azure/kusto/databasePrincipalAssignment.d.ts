import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Kusto (also known as Azure Data Explorer) Database Principal Assignment.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * const rg = new azure.core.ResourceGroup("rg", {location: "West Europe"});
 * const exampleCluster = new azure.kusto.Cluster("exampleCluster", {
 *     location: rg.location,
 *     resourceGroupName: rg.name,
 *     sku: {
 *         name: "Standard_D13_v2",
 *         capacity: 2,
 *     },
 * });
 * const exampleDatabase = new azure.kusto.Database("exampleDatabase", {
 *     resourceGroupName: rg.name,
 *     location: rg.location,
 *     clusterName: exampleCluster.name,
 *     hotCachePeriod: "P7D",
 *     softDeletePeriod: "P31D",
 * });
 * const exampleDatabasePrincipalAssignment = new azure.kusto.DatabasePrincipalAssignment("exampleDatabasePrincipalAssignment", {
 *     resourceGroupName: rg.name,
 *     clusterName: exampleCluster.name,
 *     databaseName: exampleDatabase.name,
 *     tenantId: current.then(current => current.tenantId),
 *     principalId: current.then(current => current.clientId),
 *     principalType: "App",
 *     role: "Viewer",
 * });
 * ```
 *
 * ## Import
 *
 * Kusto Database Principal Assignment can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:kusto/databasePrincipalAssignment:DatabasePrincipalAssignment example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Kusto/Clusters/cluster1/Databases/database1/PrincipalAssignments/assignment1
 * ```
 */
export declare class DatabasePrincipalAssignment extends pulumi.CustomResource {
    /**
     * Get an existing DatabasePrincipalAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabasePrincipalAssignmentState, opts?: pulumi.CustomResourceOptions): DatabasePrincipalAssignment;
    /**
     * Returns true if the given object is an instance of DatabasePrincipalAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DatabasePrincipalAssignment;
    /**
     * The name of the cluster in which to create the resource. Changing this forces a new resource to be created.
     */
    readonly clusterName: pulumi.Output<string>;
    /**
     * The name of the database in which to create the resource. Changing this forces a new resource to be created.
     */
    readonly databaseName: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    /**
     * The object id of the principal. Changing this forces a new resource to be created.
     */
    readonly principalId: pulumi.Output<string>;
    /**
     * The name of the principal.
     */
    readonly principalName: pulumi.Output<string>;
    /**
     * The type of the principal. Valid values include `App`, `Group`, `User`. Changing this forces a new resource to be created.
     */
    readonly principalType: pulumi.Output<string>;
    /**
     * The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The database role assigned to the principal. Valid values include `Admin`, `Ingestor`, `Monitor`, `UnrestrictedViewers`, `User` and `Viewer`. Changing this forces a new resource to be created.
     */
    readonly role: pulumi.Output<string>;
    /**
     * The tenant id in which the principal resides. Changing this forces a new resource to be created.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * The name of the tenant.
     */
    readonly tenantName: pulumi.Output<string>;
    /**
     * Create a DatabasePrincipalAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabasePrincipalAssignmentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DatabasePrincipalAssignment resources.
 */
export interface DatabasePrincipalAssignmentState {
    /**
     * The name of the cluster in which to create the resource. Changing this forces a new resource to be created.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * The name of the database in which to create the resource. Changing this forces a new resource to be created.
     */
    databaseName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * The object id of the principal. Changing this forces a new resource to be created.
     */
    principalId?: pulumi.Input<string>;
    /**
     * The name of the principal.
     */
    principalName?: pulumi.Input<string>;
    /**
     * The type of the principal. Valid values include `App`, `Group`, `User`. Changing this forces a new resource to be created.
     */
    principalType?: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The database role assigned to the principal. Valid values include `Admin`, `Ingestor`, `Monitor`, `UnrestrictedViewers`, `User` and `Viewer`. Changing this forces a new resource to be created.
     */
    role?: pulumi.Input<string>;
    /**
     * The tenant id in which the principal resides. Changing this forces a new resource to be created.
     */
    tenantId?: pulumi.Input<string>;
    /**
     * The name of the tenant.
     */
    tenantName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DatabasePrincipalAssignment resource.
 */
export interface DatabasePrincipalAssignmentArgs {
    /**
     * The name of the cluster in which to create the resource. Changing this forces a new resource to be created.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the database in which to create the resource. Changing this forces a new resource to be created.
     */
    databaseName: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * The object id of the principal. Changing this forces a new resource to be created.
     */
    principalId: pulumi.Input<string>;
    /**
     * The type of the principal. Valid values include `App`, `Group`, `User`. Changing this forces a new resource to be created.
     */
    principalType: pulumi.Input<string>;
    /**
     * The name of the resource group in which to create the resource. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The database role assigned to the principal. Valid values include `Admin`, `Ingestor`, `Monitor`, `UnrestrictedViewers`, `User` and `Viewer`. Changing this forces a new resource to be created.
     */
    role: pulumi.Input<string>;
    /**
     * The tenant id in which the principal resides. Changing this forces a new resource to be created.
     */
    tenantId: pulumi.Input<string>;
}
