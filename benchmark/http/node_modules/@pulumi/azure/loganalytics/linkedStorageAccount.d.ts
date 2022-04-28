import * as pulumi from "@pulumi/pulumi";
/**
 * Manages a Log Analytics Linked Storage Account.
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
 *     accountReplicationType: "GRS",
 * });
 * const exampleAnalyticsWorkspace = new azure.operationalinsights.AnalyticsWorkspace("exampleAnalyticsWorkspace", {
 *     location: exampleResourceGroup.location,
 *     resourceGroupName: exampleResourceGroup.name,
 *     sku: "PerGB2018",
 * });
 * const exampleLinkedStorageAccount = new azure.loganalytics.LinkedStorageAccount("exampleLinkedStorageAccount", {
 *     dataSourceType: "customlogs",
 *     resourceGroupName: exampleResourceGroup.name,
 *     workspaceResourceId: exampleAnalyticsWorkspace.id,
 *     storageAccountIds: [exampleAccount.id],
 * });
 * ```
 *
 * ## Import
 *
 * Log Analytics Linked Storage Accounts can be imported using the `resource id`, e.g.
 *
 * ```sh
 *  $ pulumi import azure:loganalytics/linkedStorageAccount:LinkedStorageAccount example /subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/group1/providers/Microsoft.OperationalInsights/workspaces/workspace1/linkedStorageAccounts/{dataSourceType}
 * ```
 */
export declare class LinkedStorageAccount extends pulumi.CustomResource {
    /**
     * Get an existing LinkedStorageAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LinkedStorageAccountState, opts?: pulumi.CustomResourceOptions): LinkedStorageAccount;
    /**
     * Returns true if the given object is an instance of LinkedStorageAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is LinkedStorageAccount;
    /**
     * The data source type which should be used for this Log Analytics Linked Storage Account. Possible values are "customlogs", "azurewatson", "query", "ingestion" and "alerts". Changing this forces a new Log Analytics Linked Storage Account to be created.
     */
    readonly dataSourceType: pulumi.Output<string>;
    /**
     * The name of the Resource Group where the Log Analytics Linked Storage Account should exist. Changing this forces a new Log Analytics Linked Storage Account to be created.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * The storage account resource ids to be linked.
     */
    readonly storageAccountIds: pulumi.Output<string[]>;
    /**
     * The resource ID of the Log Analytics Workspace. Changing this forces a new Log Analytics Linked Storage Account to be created.
     */
    readonly workspaceResourceId: pulumi.Output<string>;
    /**
     * Create a LinkedStorageAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkedStorageAccountArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering LinkedStorageAccount resources.
 */
export interface LinkedStorageAccountState {
    /**
     * The data source type which should be used for this Log Analytics Linked Storage Account. Possible values are "customlogs", "azurewatson", "query", "ingestion" and "alerts". Changing this forces a new Log Analytics Linked Storage Account to be created.
     */
    dataSourceType?: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Log Analytics Linked Storage Account should exist. Changing this forces a new Log Analytics Linked Storage Account to be created.
     */
    resourceGroupName?: pulumi.Input<string>;
    /**
     * The storage account resource ids to be linked.
     */
    storageAccountIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The resource ID of the Log Analytics Workspace. Changing this forces a new Log Analytics Linked Storage Account to be created.
     */
    workspaceResourceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a LinkedStorageAccount resource.
 */
export interface LinkedStorageAccountArgs {
    /**
     * The data source type which should be used for this Log Analytics Linked Storage Account. Possible values are "customlogs", "azurewatson", "query", "ingestion" and "alerts". Changing this forces a new Log Analytics Linked Storage Account to be created.
     */
    dataSourceType: pulumi.Input<string>;
    /**
     * The name of the Resource Group where the Log Analytics Linked Storage Account should exist. Changing this forces a new Log Analytics Linked Storage Account to be created.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The storage account resource ids to be linked.
     */
    storageAccountIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The resource ID of the Log Analytics Workspace. Changing this forces a new Log Analytics Linked Storage Account to be created.
     */
    workspaceResourceId: pulumi.Input<string>;
}
