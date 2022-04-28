import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an SQL Notebook Workspace.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.cosmosdb.Account("exampleAccount", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     offerType: "Standard",
 *     kind: "GlobalDocumentDB",
 *     consistencyPolicy: {
 *         consistencyLevel: "BoundedStaleness",
 *     },
 *     geoLocations: [{
 *         location: exampleResourceGroup.location,
 *         failoverPriority: 0,
 *     }],
 * });
 * const exampleNotebookWorkspace = new azure.cosmosdb.NotebookWorkspace("exampleNotebookWorkspace", {
 *     resourceGroupName: exampleAccount.resourceGroupName,
 *     accountName: exampleAccount.name,
 * });
 * ```
 *
 * ## Import
 *
 * =SQL Notebook Workspaces can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:cosmosdb/notebookWorkspace:NotebookWorkspace example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.DocumentDB/databaseAccounts/account1/notebookWorkspaces/notebookWorkspace1
 * ```
 */
export declare class NotebookWorkspace extends pulumi.CustomResource {
    /**
     * Get an existing NotebookWorkspace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NotebookWorkspaceState, opts?: pulumi.CustomResourceOptions): NotebookWorkspace;
    /**
     * Returns true if the given object is an instance of NotebookWorkspace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NotebookWorkspace;
    /**
     * The name of the Cosmos DB Account to create the SQL Notebook Workspace within. Changing this forces a new SQL Notebook Workspace to be created.
     */
    readonly accountName: pulumi.Output<string>;
    /**
     * The name which should be used for this SQL Notebook Workspace. Possible value is `default`. Changing this forces a new SQL Notebook Workspace to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the SQL Notebook Workspace should exist. Changing this forces a new SQL Notebook Workspace to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Specifies the endpoint of Notebook server.
     */
    readonly serverEndpoint: pulumi.Output<string>;
    /**
     * Create a NotebookWorkspace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NotebookWorkspaceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NotebookWorkspace resources.
 */
export interface NotebookWorkspaceState {
    /**
     * The name of the Cosmos DB Account to create the SQL Notebook Workspace within. Changing this forces a new SQL Notebook Workspace to be created.
     */
    accountName?: pulumi.Input<string>;
    /**
     * The name which should be used for this SQL Notebook Workspace. Possible value is `default`. Changing this forces a new SQL Notebook Workspace to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the SQL Notebook Workspace should exist. Changing this forces a new SQL Notebook Workspace to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Specifies the endpoint of Notebook server.
     */
    serverEndpoint?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a NotebookWorkspace resource.
 */
export interface NotebookWorkspaceArgs {
    /**
     * The name of the Cosmos DB Account to create the SQL Notebook Workspace within. Changing this forces a new SQL Notebook Workspace to be created.
     */
    accountName: pulumi.Input<string>;
    /**
     * The name which should be used for this SQL Notebook Workspace. Possible value is `default`. Changing this forces a new SQL Notebook Workspace to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the SQL Notebook Workspace should exist. Changing this forces a new SQL Notebook Workspace to be created.
     */
    resourceGroupName: pulumi.Input<string>;
}
