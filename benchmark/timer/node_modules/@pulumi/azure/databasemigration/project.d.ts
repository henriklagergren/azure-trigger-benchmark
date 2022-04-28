import * as pulumi from "@pulumi/pulumi";
/**
 * Manage a Azure Database Migration Project.
 *
 * > **NOTE:** Destroying a Database Migration Project will leave any outstanding tasks untouched. This is to avoid unexpectedly deleting any tasks managed outside of this provider.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleVirtualNetwork = new azure.network.VirtualNetwork("exampleVirtualNetwork", {
 *     addressSpaces: ["10.0.0.0/16"],
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 * });
 * const exampleSubnet = new azure.network.Subnet("exampleSubnet", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualNetworkName: exampleVirtualNetwork.name,
 *     addressPrefixes: ["10.0.1.0/24"],
 * });
 * const exampleService = new azure.databasemigration.Service("exampleService", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     virtualSubnetId: exampleSubnet.id,
 *     skuName: "Standard_1vCores",
 * });
 * const exampleProject = new azure.databasemigration.Project("exampleProject", {
 *     serviceName: exampleService.name,
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     sourcePlatform: "SQL",
 *     targetPlatform: "SQLDB",
 * });
 * ```
 *
 * ## Import
 *
 * Database Migration Projects can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:databasemigration/project:Project example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example-rg/providers/Microsoft.DataMigration/services/example-dms/projects/project1
 * ```
 */
export declare class Project extends pulumi.CustomResource {
    /**
     * Get an existing Project resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProjectState, opts?: pulumi.CustomResourceOptions): Project;
    /**
     * Returns true if the given object is an instance of Project.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Project;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specify the name of the database migration project. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Name of the resource group in which to create the database migration project. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Name of the database migration service where resource belongs to. Changing this forces a new resource to be created.
     */
    readonly serviceName: pulumi.Output<string>;
    /**
     * The platform type of the migration source. Currently only support: `SQL`(on-premises SQL Server). Changing this forces a new resource to be created.
     */
    readonly sourcePlatform: pulumi.Output<string>;
    /**
     * A mapping of tags to assigned to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The platform type of the migration target. Currently only support: `SQLDB`(Azure SQL Database). Changing this forces a new resource to be created.
     */
    readonly targetPlatform: pulumi.Output<string>;
    /**
     * Create a Project resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProjectArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Project resources.
 */
export interface ProjectState {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specify the name of the database migration project. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the resource group in which to create the database migration project. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * Name of the database migration service where resource belongs to. Changing this forces a new resource to be created.
     */
    serviceName?: pulumi.Input<string>;
    /**
     * The platform type of the migration source. Currently only support: `SQL`(on-premises SQL Server). Changing this forces a new resource to be created.
     */
    sourcePlatform?: pulumi.Input<string>;
    /**
     * A mapping of tags to assigned to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The platform type of the migration target. Currently only support: `SQLDB`(Azure SQL Database). Changing this forces a new resource to be created.
     */
    targetPlatform?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Project resource.
 */
export interface ProjectArgs {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specify the name of the database migration project. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the resource group in which to create the database migration project. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the database migration service where resource belongs to. Changing this forces a new resource to be created.
     */
    serviceName: pulumi.Input<string>;
    /**
     * The platform type of the migration source. Currently only support: `SQL`(on-premises SQL Server). Changing this forces a new resource to be created.
     */
    sourcePlatform: pulumi.Input<string>;
    /**
     * A mapping of tags to assigned to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The platform type of the migration target. Currently only support: `SQLDB`(Azure SQL Database). Changing this forces a new resource to be created.
     */
    targetPlatform: pulumi.Input<string>;
}
