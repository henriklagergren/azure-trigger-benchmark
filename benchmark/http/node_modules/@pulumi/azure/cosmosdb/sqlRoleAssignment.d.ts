import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Cosmos DB SQL Role Assignment.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const current = azure.core.getClientConfig({});
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.cosmosdb.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     offerType: "Standard",
 *     kind: "GlobalDocumentDB",
 *     consistencyPolicy: {
 *         consistencyLevel: "Strong",
 *     },
 *     geoLocations: [{
 *         location: exampleResourceGroup.location,
 *         failoverPriority: 0,
 *     }],
 * });
 * const exampleSqlRoleDefinition = new azure.cosmosdb.SqlRoleDefinition("exampleSqlRoleDefinition", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     accountName: exampleAccount.name,
 *     type: "CustomRole",
 *     assignableScopes: [pulumi.all([current, exampleResourceGroup.name, exampleAccount.name]).apply(([current, exampleResourceGroupName, exampleAccountName]) => `/subscriptions/${current.subscriptionId}/resourceGroups/${exampleResourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${exampleAccountName}`)],
 *     permissions: [{
 *         dataActions: ["Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/items/read"],
 *     }],
 * });
 * const exampleSqlRoleAssignment = new azure.cosmosdb.SqlRoleAssignment("exampleSqlRoleAssignment", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     accountName: exampleAccount.name,
 *     roleDefinitionId: exampleSqlRoleDefinition.id,
 *     principalId: current.then(current => current.objectId),
 *     scope: pulumi.all([current, exampleResourceGroup.name, exampleAccount.name]).apply(([current, exampleResourceGroupName, exampleAccountName]) => `/subscriptions/${current.subscriptionId}/resourceGroups/${exampleResourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${exampleAccountName}`),
 * });
 * ```
 *
 * ## Import
 *
 * Cosmos DB SQL Role Assignments can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:cosmosdb/sqlRoleAssignment:SqlRoleAssignment example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DocumentDB/databaseAccounts/account1/sqlRoleAssignments/9e007587-dbcd-4190-84cb-fcab5a09ca39
 * ```
 */
export declare class SqlRoleAssignment extends pulumi.CustomResource {
    /**
     * Get an existing SqlRoleAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SqlRoleAssignmentState, opts?: pulumi.CustomResourceOptions): SqlRoleAssignment;
    /**
     * Returns true if the given object is an instance of SqlRoleAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SqlRoleAssignment;
    /**
     * The name of the Cosmos DB Account. Changing this forces a new resource to be created.
     */
    readonly accountName: pulumi.Output<string>;
    /**
     * The GUID as the name of the Cosmos DB SQL Role Assignment - one will be generated if not specified. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the Principal (Client) in Azure Active Directory. Changing this forces a new resource to be created.
     */
    readonly principalId: pulumi.Output<string>;
    /**
     * The name of the Resource Group in which the Cosmos DB SQL Role Assignment is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The resource ID of the Cosmos DB SQL Role Definition.
     */
    readonly roleDefinitionId: pulumi.Output<string>;
    /**
     * The data plane resource path for which access is being granted through this Cosmos DB SQL Role Assignment. Changing this forces a new resource to be created.
     */
    readonly scope: pulumi.Output<string>;
    /**
     * Create a SqlRoleAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlRoleAssignmentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SqlRoleAssignment resources.
 */
export interface SqlRoleAssignmentState {
    /**
     * The name of the Cosmos DB Account. Changing this forces a new resource to be created.
     */
    accountName?: pulumi.Input<string>;
    /**
     * The GUID as the name of the Cosmos DB SQL Role Assignment - one will be generated if not specified. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Principal (Client) in Azure Active Directory. Changing this forces a new resource to be created.
     */
    principalId?: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Cosmos DB SQL Role Assignment is created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The resource ID of the Cosmos DB SQL Role Definition.
     */
    roleDefinitionId?: pulumi.Input<string>;
    /**
     * The data plane resource path for which access is being granted through this Cosmos DB SQL Role Assignment. Changing this forces a new resource to be created.
     */
    scope?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SqlRoleAssignment resource.
 */
export interface SqlRoleAssignmentArgs {
    /**
     * The name of the Cosmos DB Account. Changing this forces a new resource to be created.
     */
    accountName: pulumi.Input<string>;
    /**
     * The GUID as the name of the Cosmos DB SQL Role Assignment - one will be generated if not specified. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Principal (Client) in Azure Active Directory. Changing this forces a new resource to be created.
     */
    principalId: pulumi.Input<string>;
    /**
     * The name of the Resource Group in which the Cosmos DB SQL Role Assignment is created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource ID of the Cosmos DB SQL Role Definition.
     */
    roleDefinitionId: pulumi.Input<string>;
    /**
     * The data plane resource path for which access is being granted through this Cosmos DB SQL Role Assignment. Changing this forces a new resource to be created.
     */
    scope: pulumi.Input<string>;
}
