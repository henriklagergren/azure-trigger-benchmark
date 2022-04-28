import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
/**
 * Manages a Table within an Azure Storage Account.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as azure from "@pulumi/azure";
 *
 * const exampleResourceGroup = new azure.core.ResourceGroup("exampleResourceGroup", {location: "West Europe"});
 * const exampleAccount = new azure.storage.Account("exampleAccount", {
 *     resourceGroupName: exampleResourceGroup.name,
 *     location: exampleResourceGroup.location,
 *     accountTier: "Standard",
 *     accountReplicationType: "LRS",
 * });
 * const exampleTable = new azure.storage.Table("exampleTable", {storageAccountName: exampleAccount.name});
 * ```
 *
 * ## Import
 *
 * Table's within a Storage Account can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:storage/table:Table table1 "https://example.table.core.windows.net/Tables('replace-with-table-name')"
 * ```
 */
export declare class Table extends pulumi.CustomResource {
    /**
     * Get an existing Table resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TableState, opts?: pulumi.CustomResourceOptions): Table;
    /**
     * Returns true if the given object is an instance of Table.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Table;
    /**
     * One or more `acl` blocks as defined below.
     */
    readonly acls: pulumi.Output<outputs.storage.TableAcl[] | undefined>;
    /**
     * The name of the storage table. Must be unique within the storage account the table is located.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the storage account in which to create the storage table.
     * Changing this forces a new resource to be created.
     */
    readonly storageAccountName: pulumi.Output<string>;
    /**
     * Create a Table resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TableArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Table resources.
 */
export interface TableState {
    /**
     * One or more `acl` blocks as defined below.
     */
    acls?: pulumi.Input<pulumi.Input<inputs.storage.TableAcl>[]>;
    /**
     * The name of the storage table. Must be unique within the storage account the table is located.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the storage account in which to create the storage table.
     * Changing this forces a new resource to be created.
     */
    storageAccountName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Table resource.
 */
export interface TableArgs {
    /**
     * One or more `acl` blocks as defined below.
     */
    acls?: pulumi.Input<pulumi.Input<inputs.storage.TableAcl>[]>;
    /**
     * The name of the storage table. Must be unique within the storage account the table is located.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the storage account in which to create the storage table.
     * Changing this forces a new resource to be created.
     */
    storageAccountName: pulumi.Input<string>;
}
