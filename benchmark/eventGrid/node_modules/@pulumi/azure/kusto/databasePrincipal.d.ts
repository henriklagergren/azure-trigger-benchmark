import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Kusto (also known as Azure Data Explorer) Database Principal
 *
 * > **NOTE:** This resource is being **deprecated** due to API updates and should no longer be used.  Please use azure.kusto.DatabasePrincipalAssignment instead.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
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
 * const principal = new azure.kusto.DatabasePrincipal("principal", {
 *     resourceGroupName: rg.name,
 *     clusterName: cluster.name,
 *     databaseName: azurerm_kusto_database.test.name,
 *     role: "Viewer",
 *     type: "User",
 *     clientId: current.then(current => current.tenantId),
 *     objectId: current.then(current => current.clientId),
 * });
 * ```
 *
 * ## Import
 *
 * Kusto Database Principals can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:kusto/databasePrincipal:DatabasePrincipal example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.Kusto/Clusters/cluster1/Databases/database1/Role/role1/FQN/some-guid
 * ```
 */
export declare class DatabasePrincipal extends pulumi.CustomResource {
    /**
     * Get an existing DatabasePrincipal resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabasePrincipalState, opts?: pulumi.CustomResourceOptions): DatabasePrincipal;
    /**
     * Returns true if the given object is an instance of DatabasePrincipal.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DatabasePrincipal;
    /**
     * The app id, if not empty, of the principal.
     */
    readonly appId: pulumi.Output<string>;
    /**
     * The Client ID that owns the specified `objectId`. Changing this forces a new resource to be created.
     */
    readonly clientId: pulumi.Output<string>;
    /**
     * Specifies the name of the Kusto Cluster this database principal will be added to. Changing this forces a new resource to be created.
     */
    readonly clusterName: pulumi.Output<string>;
    /**
     * Specified the name of the Kusto Database this principal will be added to. Changing this forces a new resource to be created.
     */
    readonly databaseName: pulumi.Output<string>;
    /**
     * The email, if not empty, of the principal.
     */
    readonly email: pulumi.Output<string>;
    /**
     * The fully qualified name of the principal.
     */
    readonly fullyQualifiedName: pulumi.Output<string>;
    /**
     * The name of the Kusto Database Principal.
     */
    readonly name: pulumi.Output<string>;
    /**
     * An Object ID of a User, Group, or App. Changing this forces a new resource to be created.
     */
    readonly objectId: pulumi.Output<string>;
    /**
     * Specifies the Resource Group where the Kusto Database Principal should exist. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Specifies the permissions the Principal will have. Valid values include `Admin`, `Ingestor`, `Monitor`, `UnrestrictedViewers`, `User`, `Viewer`. Changing this forces a new resource to be created.
     */
    readonly role: pulumi.Output<string>;
    /**
     * Specifies the type of object the principal is. Valid values include `App`, `Group`, `User`. Changing this forces a new resource to be created.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a DatabasePrincipal resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabasePrincipalArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DatabasePrincipal resources.
 */
export interface DatabasePrincipalState {
    /**
     * The app id, if not empty, of the principal.
     */
    appId?: pulumi.Input<string>;
    /**
     * The Client ID that owns the specified `objectId`. Changing this forces a new resource to be created.
     */
    clientId?: pulumi.Input<string>;
    /**
     * Specifies the name of the Kusto Cluster this database principal will be added to. Changing this forces a new resource to be created.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Specified the name of the Kusto Database this principal will be added to. Changing this forces a new resource to be created.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * The email, if not empty, of the principal.
     */
    email?: pulumi.Input<string>;
    /**
     * The fully qualified name of the principal.
     */
    fullyQualifiedName?: pulumi.Input<string>;
    /**
     * The name of the Kusto Database Principal.
     */
    name?: pulumi.Input<string>;
    /**
     * An Object ID of a User, Group, or App. Changing this forces a new resource to be created.
     */
    objectId?: pulumi.Input<string>;
    /**
     * Specifies the Resource Group where the Kusto Database Principal should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies the permissions the Principal will have. Valid values include `Admin`, `Ingestor`, `Monitor`, `UnrestrictedViewers`, `User`, `Viewer`. Changing this forces a new resource to be created.
     */
    role?: pulumi.Input<string>;
    /**
     * Specifies the type of object the principal is. Valid values include `App`, `Group`, `User`. Changing this forces a new resource to be created.
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DatabasePrincipal resource.
 */
export interface DatabasePrincipalArgs {
    /**
     * The Client ID that owns the specified `objectId`. Changing this forces a new resource to be created.
     */
    clientId: pulumi.Input<string>;
    /**
     * Specifies the name of the Kusto Cluster this database principal will be added to. Changing this forces a new resource to be created.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Specified the name of the Kusto Database this principal will be added to. Changing this forces a new resource to be created.
     */
    databaseName: pulumi.Input<string>;
    /**
     * An Object ID of a User, Group, or App. Changing this forces a new resource to be created.
     */
    objectId: pulumi.Input<string>;
    /**
     * Specifies the Resource Group where the Kusto Database Principal should exist. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the permissions the Principal will have. Valid values include `Admin`, `Ingestor`, `Monitor`, `UnrestrictedViewers`, `User`, `Viewer`. Changing this forces a new resource to be created.
     */
    role: pulumi.Input<string>;
    /**
     * Specifies the type of object the principal is. Valid values include `App`, `Group`, `User`. Changing this forces a new resource to be created.
     */
    type: pulumi.Input<string>;
}
