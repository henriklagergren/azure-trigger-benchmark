import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Cosmos DB SQL Role Definition.
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
 *     roleDefinitionId: "84cf3a8b-4122-4448-bce2-fa423cfe0a15",
 *     resourceGroupName: exampleResourceGroup.name,
 *     accountName: exampleAccount.name,
 *     assignableScopes: [pulumi.all([current, exampleResourceGroup.name, exampleAccount.name]).apply(([current, exampleResourceGroupName, exampleAccountName]) => `/subscriptions/${current.subscriptionId}/resourceGroups/${exampleResourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/${exampleAccountName}/dbs/sales`)],
 *     permissions: [{
 *         dataActions: ["Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/items/read"],
 *     }],
 * });
 * ```
 *
 * ## Import
 *
 * Cosmos DB SQL Role Definitions can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:cosmosdb/sqlRoleDefinition:SqlRoleDefinition example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DocumentDB/databaseAccounts/account1/sqlRoleDefinitions/28b3c337-f436-482b-a167-c2618dc52033
 * ```
 */
export declare class SqlRoleDefinition extends pulumi.CustomResource {
    /**
     * Get an existing SqlRoleDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SqlRoleDefinitionState, opts?: pulumi.CustomResourceOptions): SqlRoleDefinition;
    /**
     * Returns true if the given object is an instance of SqlRoleDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SqlRoleDefinition;
    /**
     * The name of the Cosmos DB Account. Changing this forces a new resource to be created.
     */
    readonly accountName: pulumi.Output<string>;
    /**
     * A list of fully qualified scopes at or below which Role Assignments may be created using this Cosmos DB SQL Role Definition. It will allow application of this Cosmos DB SQL Role Definition on the entire Database Account or any underlying Database/Collection. Scopes higher than Database Account are not enforceable as assignable scopes.
     */
    readonly assignableScopes: pulumi.Output<string[]>;
    /**
     * An user-friendly name for the Cosmos DB SQL Role Definition which must be unique for the Database Account.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A `permissions` block as defined below.
     */
    readonly permissions: pulumi.Output<outputs.cosmosdb.SqlRoleDefinitionPermission[]>;
    /**
     * The name of the Resource Group in which the Cosmos DB SQL Role Definition is created. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The GUID as the name of the Cosmos DB SQL Role Definition - one will be generated if not specified. Changing this forces a new resource to be created.
     */
    readonly roleDefinitionId: pulumi.Output<string>;
    /**
     * The type of the Cosmos DB SQL Role Definition. Possible values are `BuiltInRole` and `CustomRole`. Defaults to `CustomRole`. Changing this forces a new resource to be created.
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Create a SqlRoleDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqlRoleDefinitionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SqlRoleDefinition resources.
 */
export interface SqlRoleDefinitionState {
    /**
     * The name of the Cosmos DB Account. Changing this forces a new resource to be created.
     */
    accountName?: pulumi.Input<string>;
    /**
     * A list of fully qualified scopes at or below which Role Assignments may be created using this Cosmos DB SQL Role Definition. It will allow application of this Cosmos DB SQL Role Definition on the entire Database Account or any underlying Database/Collection. Scopes higher than Database Account are not enforceable as assignable scopes.
     */
    assignableScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An user-friendly name for the Cosmos DB SQL Role Definition which must be unique for the Database Account.
     */
    name?: pulumi.Input<string>;
    /**
     * A `permissions` block as defined below.
     */
    permissions?: pulumi.Input<pulumi.Input<inputs.cosmosdb.SqlRoleDefinitionPermission>[]>;
    /**
     * The name of the Resource Group in which the Cosmos DB SQL Role Definition is created. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The GUID as the name of the Cosmos DB SQL Role Definition - one will be generated if not specified. Changing this forces a new resource to be created.
     */
    roleDefinitionId?: pulumi.Input<string>;
    /**
     * The type of the Cosmos DB SQL Role Definition. Possible values are `BuiltInRole` and `CustomRole`. Defaults to `CustomRole`. Changing this forces a new resource to be created.
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SqlRoleDefinition resource.
 */
export interface SqlRoleDefinitionArgs {
    /**
     * The name of the Cosmos DB Account. Changing this forces a new resource to be created.
     */
    accountName: pulumi.Input<string>;
    /**
     * A list of fully qualified scopes at or below which Role Assignments may be created using this Cosmos DB SQL Role Definition. It will allow application of this Cosmos DB SQL Role Definition on the entire Database Account or any underlying Database/Collection. Scopes higher than Database Account are not enforceable as assignable scopes.
     */
    assignableScopes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An user-friendly name for the Cosmos DB SQL Role Definition which must be unique for the Database Account.
     */
    name?: pulumi.Input<string>;
    /**
     * A `permissions` block as defined below.
     */
    permissions: pulumi.Input<pulumi.Input<inputs.cosmosdb.SqlRoleDefinitionPermission>[]>;
    /**
     * The name of the Resource Group in which the Cosmos DB SQL Role Definition is created. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The GUID as the name of the Cosmos DB SQL Role Definition - one will be generated if not specified. Changing this forces a new resource to be created.
     */
    roleDefinitionId?: pulumi.Input<string>;
    /**
     * The type of the Cosmos DB SQL Role Definition. Possible values are `BuiltInRole` and `CustomRole`. Defaults to `CustomRole`. Changing this forces a new resource to be created.
     */
    type?: pulumi.Input<string>;
}
