import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Azure Database Migration Service.
 *
 * > **NOTE:** Destroying a Database Migration Service will leave any outstanding tasks untouched. This is to avoid unexpectedly deleting any tasks managed outside of this provide.
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
 *     subnetId: exampleSubnet.id,
 *     skuName: "Standard_1vCores",
 * });
 * ```
 *
 * ## Import
 *
 * Database Migration Services can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:databasemigration/service:Service example /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/example-rg/providers/Microsoft.DataMigration/services/database_migration_service1
 * ```
 */
export declare class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceState, opts?: pulumi.CustomResourceOptions): Service;
    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Service;
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Specify the name of the database migration service. Changing this forces a new resource to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Name of the resource group in which to create the database migration service. Changing this forces a new resource to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The sku name of the database migration service. Possible values are `Premium_4vCores`, `Standard_1vCores`, `Standard_2vCores` and `Standard_4vCores`. Changing this forces a new resource to be created.
     */
    readonly skuName: pulumi.Output<string>;
    /**
     * The ID of the virtual subnet resource to which the database migration service should be joined. Changing this forces a new resource to be created.
     */
    readonly subnetId: pulumi.Output<string>;
    /**
     * A mapping of tags to assigned to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Service resources.
 */
export interface ServiceState {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specify the name of the database migration service. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the resource group in which to create the database migration service. Changing this forces a new resource to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The sku name of the database migration service. Possible values are `Premium_4vCores`, `Standard_1vCores`, `Standard_2vCores` and `Standard_4vCores`. Changing this forces a new resource to be created.
     */
    skuName?: pulumi.Input<string>;
    /**
     * The ID of the virtual subnet resource to which the database migration service should be joined. Changing this forces a new resource to be created.
     */
    subnetId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assigned to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * Specifies the supported Azure location where the resource exists. Changing this forces a new resource to be created.
     */
    location?: pulumi.Input<string>;
    /**
     * Specify the name of the database migration service. Changing this forces a new resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the resource group in which to create the database migration service. Changing this forces a new resource to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The sku name of the database migration service. Possible values are `Premium_4vCores`, `Standard_1vCores`, `Standard_2vCores` and `Standard_4vCores`. Changing this forces a new resource to be created.
     */
    skuName: pulumi.Input<string>;
    /**
     * The ID of the virtual subnet resource to which the database migration service should be joined. Changing this forces a new resource to be created.
     */
    subnetId: pulumi.Input<string>;
    /**
     * A mapping of tags to assigned to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
