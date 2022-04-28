import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Elastic Job Agent.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "northeurope"});
 * const exampleServer = new azure.mssql.Server("exampleServer", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     version: "12.0",
 *     administratorLogin: "4dm1n157r470r",
 *     administratorLoginPassword: "4-v3ry-53cr37-p455w0rd",
 * });
 * const exampleDatabase = new azure.mssql.Database("exampleDatabase", {
 *     serverId: exampleServer.id,
 *     collation: "SQL_Latin1_General_CP1_CI_AS",
 *     skuName: "S1",
 * });
 * const exampleJobAgent = new azure.mssql.JobAgent("exampleJobAgent", {
 *     location: exampleResourceGroup.location,
 *     databaseId: exampleDatabase.id,
 * });
 * ```
 *
 * ## Import
 *
 * Elastic Job Agents can be imported using the `id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:mssql/jobAgent:JobAgent example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Sql/servers/myserver1/jobAgents/myjobagent1
 * ```
 */
export declare class JobAgent extends pulumi.CustomResource {
    /**
     * Get an existing JobAgent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: JobAgentState, opts?: pulumi.CustomResourceOptions): JobAgent;
    /**
     * Returns true if the given object is an instance of JobAgent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is JobAgent;
    /**
     * The ID of the database to store metadata for the Elastic Job Agent. Changing this forces a new Elastic Job Agent to be created.
     */
    readonly databaseId: pulumi.Output<string>;
    /**
     * The Azure Region where the Elastic Job Agent should exist. Changing this forces a new Elastic Job Agent to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name which should be used for this Elastic Job Agent. Changing this forces a new Elastic Job Agent to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A mapping of tags which should be assigned to the Database.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a JobAgent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobAgentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering JobAgent resources.
 */
export interface JobAgentState {
    /**
     * The ID of the database to store metadata for the Elastic Job Agent. Changing this forces a new Elastic Job Agent to be created.
     */
    databaseId?: pulumi.Input<string>;
    /**
     * The Azure Region where the Elastic Job Agent should exist. Changing this forces a new Elastic Job Agent to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Elastic Job Agent. Changing this forces a new Elastic Job Agent to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Database.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a JobAgent resource.
 */
export interface JobAgentArgs {
    /**
     * The ID of the database to store metadata for the Elastic Job Agent. Changing this forces a new Elastic Job Agent to be created.
     */
    databaseId: pulumi.Input<string>;
    /**
     * The Azure Region where the Elastic Job Agent should exist. Changing this forces a new Elastic Job Agent to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * The name which should be used for this Elastic Job Agent. Changing this forces a new Elastic Job Agent to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * A mapping of tags which should be assigned to the Database.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
