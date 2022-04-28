import * as pulumi from "@pulumi/pulumi";
/**
 * Manages an Elastic Job Credential.
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
 * const exampleJobCredential = new azure.mssql.JobCredential("exampleJobCredential", {
 *     jobAgentId: exampleJobAgent.id,
 *     username: "my-username",
 *     password: "MyP4ssw0rd!!!",
 * });
 * ```
 *
 * ## Import
 *
 * Elastic Job Credentials can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:mssql/jobCredential:JobCredential example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/mygroup1/providers/Microsoft.Sql/servers/myserver1/jobAgents/myjobagent1/credentials/credential1
 * ```
 */
export declare class JobCredential extends pulumi.CustomResource {
    /**
     * Get an existing JobCredential resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: JobCredentialState, opts?: pulumi.CustomResourceOptions): JobCredential;
    /**
     * Returns true if the given object is an instance of JobCredential.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is JobCredential;
    /**
     * The ID of the Elastic Job Agent. Changing this forces a new Elastic Job Credential to be created.
     */
    readonly jobAgentId: pulumi.Output<string>;
    /**
     * The name which should be used for this Elastic Job Credential. Changing this forces a new Elastic Job Credential to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The password part of the credential.
     */
    readonly password: pulumi.Output<string>;
    /**
     * The username part of the credential.
     */
    readonly username: pulumi.Output<string>;
    /**
     * Create a JobCredential resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobCredentialArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering JobCredential resources.
 */
export interface JobCredentialState {
    /**
     * The ID of the Elastic Job Agent. Changing this forces a new Elastic Job Credential to be created.
     */
    jobAgentId?: pulumi.Input<string>;
    /**
     * The name which should be used for this Elastic Job Credential. Changing this forces a new Elastic Job Credential to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The password part of the credential.
     */
    password?: pulumi.Input<string>;
    /**
     * The username part of the credential.
     */
    username?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a JobCredential resource.
 */
export interface JobCredentialArgs {
    /**
     * The ID of the Elastic Job Agent. Changing this forces a new Elastic Job Credential to be created.
     */
    jobAgentId: pulumi.Input<string>;
    /**
     * The name which should be used for this Elastic Job Credential. Changing this forces a new Elastic Job Credential to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The password part of the credential.
     */
    password: pulumi.Input<string>;
    /**
     * The username part of the credential.
     */
    username: pulumi.Input<string>;
}
