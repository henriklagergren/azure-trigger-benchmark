import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Kusto Cluster Principal Assignment.
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
 * const exampleClusterPrincipalAssignment = new azure.kusto.ClusterPrincipalAssignment("exampleClusterPrincipalAssignment", {
 *     resourceGroupName: rg.name,
 *     clusterName: exampleCluster.name,
 *     tenantId: current.then(current => current.tenantId),
 *     principalId: current.then(current => current.clientId),
 *     principalType: "App",
 *     role: "AllDatabasesAdmin",
 * });
 * ```
 *
 * ## Import
 *
 * Data Explorer Cluster Principal Assignments can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:kusto/clusterPrincipalAssignment:ClusterPrincipalAssignment example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Kusto/Clusters/cluster1/PrincipalAssignments/assignment1
 * ```
 */
export declare class ClusterPrincipalAssignment extends pulumi.CustomResource {
    /**
     * Get an existing ClusterPrincipalAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterPrincipalAssignmentState, opts?: pulumi.CustomResourceOptions): ClusterPrincipalAssignment;
    /**
     * Returns true if the given object is an instance of ClusterPrincipalAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ClusterPrincipalAssignment;
    /**
     * The name of the cluster in which to create the resource. Changing this forces a new resource to be created.
     */
    readonly clusterName: pulumi.Output<string>;
    /**
     * The name of the Kusto cluster principal assignment. Changing this forces a new resource to be created.
     */
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
     * The cluster role assigned to the principal. Valid values include `AllDatabasesAdmin` and `AllDatabasesViewer`. Changing this forces a new resource to be created.
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
     * Create a ClusterPrincipalAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterPrincipalAssignmentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ClusterPrincipalAssignment resources.
 */
export interface ClusterPrincipalAssignmentState {
    /**
     * The name of the cluster in which to create the resource. Changing this forces a new resource to be created.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * The name of the Kusto cluster principal assignment. Changing this forces a new resource to be created.
     */
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
     * The cluster role assigned to the principal. Valid values include `AllDatabasesAdmin` and `AllDatabasesViewer`. Changing this forces a new resource to be created.
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
 * The set of arguments for constructing a ClusterPrincipalAssignment resource.
 */
export interface ClusterPrincipalAssignmentArgs {
    /**
     * The name of the cluster in which to create the resource. Changing this forces a new resource to be created.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the Kusto cluster principal assignment. Changing this forces a new resource to be created.
     */
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
     * The cluster role assigned to the principal. Valid values include `AllDatabasesAdmin` and `AllDatabasesViewer`. Changing this forces a new resource to be created.
     */
    role: pulumi.Input<string>;
    /**
     * The tenant id in which the principal resides. Changing this forces a new resource to be created.
     */
    tenantId: pulumi.Input<string>;
}
